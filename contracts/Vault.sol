// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./AuditorInfo.sol";
import './Scom.sol';

interface AMM {
    function token0() external view returns (address);
    function token1() external view returns (address);
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
    function mint(address to) external returns (uint liquidity);
    function burn(address to) external returns (uint amount0, uint amount1);
    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
    function skim(address to) external;
    function sync() external;
}
interface IWETH is IERC20 {
    function deposit() external payable;
    function transfer(address to, uint value) external returns (bool);
    function withdraw(uint) external;
}

/*
Unlock Schedule:
Say we release "x" for the first interval and reduce "r" (which is less then 1) each interval thereafter.
For the 1st interval, the amount released is "x".
For the 2nd interval, the amount released for this interval will be x*r and the total amount released will be x + x*r.
Similary, for the 3rd interval, the release amount will be x*r*r or x*r^2 and the total amount released will be x + x*r + x*r^2.
For the nth interval, the release amount will be x*r^n and the total amount released will be x + x*r + x*r^2 + ... + x*r^n.
The geometric sum can be represented by x * ((1 - r^(n+1)) / (1 - r)); see https://en.wikipedia.org/wiki/Geometric_series#Sum
*/
/*
tokens flow:
mint* -> lock* -> unlock +> tranche* +> limited claim^
                         |           +> unlimited claim^
                         |           +> admin withdraw*
                         |           +> release from tranche +> swap
                         |                                   +> admin withdraw*
                         +> admin release* ------------------+
* = owner's / admin's / auth functions
^ = whitelisted
*/    

contract Vault is Authorization, ReentrancyGuard {
    using SafeERC20 for IERC20;
    using SafeERC20 for Scom;
    using SafeERC20 for IWETH;

    struct TrancheInfo {
        uint256 startTime;
        uint256 limitedClaimEndTime;
        uint256 unlimitedClaimEndTime;
        uint256 amount;
        bytes32 merkleRoot;
        bytes ipfsCid;
    }

    uint256 constant WEI = 10 ** 18;

    Scom public immutable scom;
    AMM public immutable amm;
    IWETH public immutable weth;
    bool public immutable token0IsScom; // token0 is scom in the amm pool, i.e., address(scom) < address(weth)

    address public foundation;

    // release schedule constants
    uint256 public totalAmount;
    uint256 public startTime;
    uint256 public endTime;
    uint256 public startingAmount;
    uint256 public decrementDecimal;
    // uint256 public oneMinusDecrement;

    // release schedule states variables
    uint256 public lastUpdate;
    uint256 public lastUnlockedAmount;
    uint256 public unlockedAmount;
    uint256 public releasedAmount;

    TrancheInfo[] public trancheInfo;
    mapping(uint256 => uint256) public availableBalanceInTranche; // availableBalanceInTranche[trancheId] = amount
    mapping(bytes32 => uint256) public usedAllocation; // usedAllocation[hash] = amount

    event Lock(uint256 start, uint256 end, uint256 rate, uint256 initAmount);
    event Unlock(uint256 unlock, uint256 available, uint256 balance);
    event NewTranche(uint256 indexed trancheId);
    event Claim(uint256 indexed trancheId, address indexed from, address indexed to, uint256 amountScom, uint256 amountEth, uint256 remainingBalance);
    event Swap(address indexed from, address indexed to, uint256 amountScom, uint256 amountEth, uint256 remainingBalance);
    event WithdrawScomFromTranche(uint256 indexed trancheId, uint256 amount, uint256 remainingBalance);
    event WithdrawScomFromRelease(uint256 amount, uint256 balance);
    event Release(uint256 amount, uint256 unlockedAmount, uint256 releasedAmount);
    event TrancheRelease(uint256 trancheId);

    constructor(address _foundation, Scom _scom, AMM _amm) {
        foundation = _foundation;
        scom = _scom;
        amm = _amm;
        address token0 = _amm.token0();
        address token1 = _amm.token1();
        (token0IsScom, weth) = (token0 == address(_scom)) ? (true, IWETH(token1)) : (false, IWETH(token0));
    }

    // exponentiation by squaring, fixed-point version, with over-flow checkings
	function pow(uint256 x, uint256 n, uint256 b) internal pure returns (uint256 z) {
		assembly {
			switch x 
				case 0 {
					switch n 
						case 0 {z := b} 
						default {z := 0}
				}
				default {
					switch mod(n, 2) 
						case 0 { z := b } 
						default { z := x }
					let half := div(b, 2)  // for rounding.
					for { n := div(n, 2) } n { n := div(n,2) } {
						let xx := mul(x, x)
						if iszero(eq(div(xx, x), x)) { revert(0,0) }
						let xxRound := add(xx, half)
						if lt(xxRound, xx) { revert(0,0) }
						x := div(xxRound, b)
						if mod(n,2) {
							let zx := mul(z, x)
							if and(iszero(iszero(x)), iszero(eq(div(zx, x), z))) { revert(0,0) }
							let zxRound := add(zx, half)
							if lt(zxRound, zx) { revert(0,0) }
							z := div(zxRound, b)
						}
					}
				}
		}
	}
    // Sn = ((1 - r^(n+1)) / (1 - r))
    function geometricSum(uint256 r, uint256 n, uint256 b) internal pure returns (uint256 s) {
        s = (((b - pow(r, n+1, b)) * b) / (b - r));
    }

    function lock(uint256 _startTime, uint256 _endTime, uint256 _decrementDecimal) external onlyOwner {
        require(totalAmount == 0, "already started");
        require(_startTime < _endTime, "invalid startTime / endTime");
        require(_decrementDecimal <= 1e18, "invalid decrement");
        totalAmount = scom.balanceOf(address(this));
        require(totalAmount > 0, "no scom locked");
        startTime = _startTime;
        endTime = _endTime;
        decrementDecimal = _decrementDecimal;
        // oneMinusDecrement = WEI - _decrementDecimal;
        // total
        startingAmount = totalAmount * WEI / geometricSum(decrementDecimal, (endTime - startTime) /*/ (1 days)*/, WEI);
        emit Lock(_startTime, _endTime, _decrementDecimal, startingAmount);
    }
    function updateReleaseSchdule(uint256 _endTime, uint256 _startingAmount, uint256 _decrementDecimal) external onlyOwner {
        unlock();
        // require(startTime < _endTime, "invalid endTime");
        endTime = _endTime;
        decrementDecimal = _decrementDecimal;
        startingAmount = _startingAmount;
        // FIXME: check schedule
    }

    function totalSuppyAt(uint256 timestamp) public view returns (uint256 amount) {
        if (timestamp > endTime) {
            amount = totalAmount;
        } else {
            uint256 period = (timestamp - startTime) /*/ (1 days)*/;
            amount = startingAmount * geometricSum(decrementDecimal, period, WEI) / WEI;
        }
    }
    function currTotalSupply() public view returns (uint256 amount) {
        return totalSuppyAt(block.timestamp);
    }

    function unlock() public returns (uint256 newAmount) {
        uint256 totalUnlockedAmount = currTotalSupply();
        newAmount = totalUnlockedAmount - lastUnlockedAmount;
        unlockedAmount += newAmount;
        lastUnlockedAmount = unlockedAmount;
        lastUpdate = block.timestamp;
        emit Unlock(newAmount, unlockedAmount, totalUnlockedAmount);
    }

    function newTranche(TrancheInfo calldata tranche) external auth {
        unlock();
        require(startTime < tranche.limitedClaimEndTime && tranche.limitedClaimEndTime <= tranche.unlimitedClaimEndTime, "invalid start / end time ");
        require((tranche.amount * 2) < unlockedAmount, "invalid amount"); // an equal amount goes to foundation, thus 2x
        uint256 trancheId = trancheInfo.length;
        trancheInfo.push(tranche);
        availableBalanceInTranche[trancheId] = tranche.amount;
        unlockedAmount -= (tranche.amount * 2);
        emit NewTranche(trancheId);
    }
    function withdrawFromTranche(uint256[] calldata trancheIds, uint256[] calldata amountScom) external onlyOwner {
        uint256 i;
        uint256 length = trancheIds.length;
        uint256 amount;
        require(length == amountScom.length, "array length not matched");
        while (i < length) {
            TrancheInfo storage tranche = trancheInfo[trancheIds[i]];
            //TODO: withdraw after limited claim ends?
            if (tranche.limitedClaimEndTime < block.timestamp) {
                require(amountScom[i] % 2 == 0, "amount must be even");
                amount += amountScom[i];
                require(amountScom[i] <= availableBalanceInTranche[trancheIds[i]], "invalid amount");
                availableBalanceInTranche[trancheIds[i]] -= amountScom[i];
                emit WithdrawScomFromTranche(trancheIds[i], amountScom[i], availableBalanceInTranche[trancheIds[i]]);
            }
            unchecked { i++; }
        }
        scom.safeTransfer(foundation, amount);
    }

    // TODO: check from enduser only?
    function claim(uint256 trancheId, address to, uint256 allocation, bytes32[] calldata proof) external payable nonReentrant returns (uint256 amountScom) {
        weth.deposit{value: msg.value}();
        return _claim(trancheId, msg.sender, to, allocation, proof);
    }
    // TODO: check from wrapper only?
    function claimWithWETH(uint256 trancheId, address from, address to, uint256 allocation, bytes32[] calldata proof) external nonReentrant returns (uint256 amountScom) {
        return _claim(trancheId, from, to, allocation, proof);
    }
    function _claim(uint256 trancheId, address from, address to, uint256 allocation, bytes32[] calldata proof) internal returns (uint256 amountScom) {
        uint256 amountEth = weth.balanceOf(address(this));
        require(amountEth > 0, "no input amount");

        TrancheInfo storage tranche = trancheInfo[trancheId];
        require(tranche.amount > 0, "invalid tranche"); // tranche not found
        require(tranche.startTime <= block.timestamp, "not started");
        bytes32 hash = keccak256(abi.encodePacked(from, allocation));
        require(
            MerkleProof.verifyCalldata(proof, tranche.merkleRoot, hash)
        , "merkle proof failed");

        // find scom amount from amm
        (uint112 reserveScom, uint112 reserveEth, /*uint32 blockTimestampLast*/) = amm.getReserves();
        if (!token0IsScom)
            (reserveScom, reserveEth) = (reserveEth, reserveScom);
        amountScom = (amountEth * reserveScom) / reserveEth;

        if (block.timestamp < tranche.limitedClaimEndTime) {
            uint256 newAllocation = usedAllocation[hash] + amountEth;
            require(newAllocation <= allocation, "excceed allocation");
            usedAllocation[hash] = newAllocation;
        }

        uint256 amount = (amountScom * 2);
        require(amount <= availableBalanceInTranche[trancheId], "insufficient balance");
        amount = availableBalanceInTranche[trancheId] - amount;
        availableBalanceInTranche[trancheId] = amount;

        // add weth and half of the scom to amm pool
        scom.safeTransfer(address(amm), amountScom);
        weth.safeTransfer(address(amm), amountEth);
        amm.mint(foundation);

        // half of scom to user
        scom.safeTransfer(to, amountScom);

        emit Claim(trancheId, from, to, amountScom, amountEth, amount);
    }

    function unlockAndRelease(uint256 amount) external onlyOwner {
        unlock();
        directRelease(amount);
    }
    function directRelease(uint256 amount) public onlyOwner {
        require(amount % 2 == 0, "amount must be even");
        unlockedAmount -= amount;
        releasedAmount += amount;
        emit Release(amount, unlockedAmount, releasedAmount);
    }
    function withdrawFromRelease(uint256 amount) external onlyOwner {
        require(amount <= releasedAmount, "insufficient balance");
        require(amount % 2 == 0, "amount must be even");
        releasedAmount -= amount;
        scom.safeTransfer(foundation, amount);
        emit WithdrawScomFromRelease(amount, releasedAmount);
    }

    function _releaseTranche(uint256[] calldata trancheIds) internal returns (uint256 amount) {
        uint256 i;
        uint256 length = trancheIds.length;
        while (i < length) {
            uint256 trancheId = trancheIds[i];
            TrancheInfo storage tranche = trancheInfo[trancheId];
            if (tranche.unlimitedClaimEndTime < block.timestamp) {
                amount += availableBalanceInTranche[trancheId];
                availableBalanceInTranche[trancheId] = 0;
                emit TrancheRelease(trancheId);
            }
            unchecked { i++; } // gas savings
        }
        releasedAmount += amount;
        emit Release(amount, unlockedAmount, releasedAmount);
    }
    function _swap(address from, address to) internal returns (uint256 amountScom) {
        uint256 amountEth = weth.balanceOf(address(this));
        require(amountEth > 0, "no input amount");

        // find scom amount from amm
        (uint112 reserveScom, uint112 reserveEth, /*uint32 blockTimestampLast*/) = amm.getReserves();
        if (!token0IsScom)
            (reserveScom, reserveEth) = (reserveEth, reserveScom);
        amountScom = (amountEth * reserveScom) / reserveEth;

        require((amountScom * 2) <= releasedAmount, "insufficient amount");
        releasedAmount -= amountScom * 2;

        // add weth and half of the scom to amm pool
        scom.safeTransfer(address(amm), amountScom);
        weth.safeTransfer(address(amm), amountEth);
        amm.mint(foundation);

        // half of scom to user
        scom.safeTransfer(to, amountScom);

        emit Swap(from, to, amountScom, amountEth, releasedAmount);
    }
    function releaseTranche(uint256[] calldata trancheIds) external nonReentrant returns (uint256 amount) {
        amount = _releaseTranche(trancheIds);
    }
    function swap(address to) external payable nonReentrant returns (uint256 amountScom) {
        weth.deposit{value: msg.value}();
        amountScom = _swap(msg.sender, to);
    }
    function releaseAndSwap(uint256[] calldata trancheIds, address to) external payable nonReentrant returns (uint256 amountScom) {
        _releaseTranche(trancheIds);
        weth.deposit{value: msg.value}();
        amountScom = _swap(msg.sender, to);
    }
    function swapWithWETH(address from, address to) external nonReentrant returns (uint256 amountScom) {
        amountScom = _swap(from, to);
    }
    function releaseAndSwapWithWETH(uint256[] calldata trancheIds, address from, address to) external nonReentrant returns (uint256 amountScom) {
        _releaseTranche(trancheIds);
        amountScom = _swap(from, to);
    }

}