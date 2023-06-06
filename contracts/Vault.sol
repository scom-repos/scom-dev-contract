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
Release Schedule:
Say we release "x" for the first interval and reduce "r" (which is less then 1) each interval thereafter.
For the 1st interval, the amount released is "x".
For the 2nd interval, the amount released for this interval will be x*r and the total amount released will be x + x*r.
Similary, for the 3rd interval, the release amount will be x*r*r or x*r^2 and the total amount released will be x + x*r + x*r^2.
For the nth interval, the release amount will be x*r^n and the total amount released will be x + x*r + x*r^2 + ... + x*r^n.
The geometric sum can be represented by x * ((1 - r^(n+1)) / (1 - r)).
*/
contract Vault is Authorization, ReentrancyGuard {
    using SafeERC20 for IERC20;

    struct Sale {
        uint256 startTime;
        uint256 limitedPrivateSaleEndTime;
        uint256 unlimitedPrivateSaleEndTime;
        uint256 amount;
        bytes32 merkleRoot;
        bytes ipfsCid;
    }

    uint256 constant WEI = 10 ** 18;

    Scom public immutable scom;
    AMM public immutable amm;
    IWETH public immutable weth;
    bool public immutable token0IsScom;

    address public foundation;

    uint256 public totalAmount;
    uint256 public startTime;
    uint256 public endTime;
    uint256 public initialReleaseAmount;
    uint256 public decrementDecimal;
    uint256 public oneMinusDecrement;

    uint256 public lastUpdate;
    uint256 public lasReleaseAmount;
    uint256 public availableAmount;

    Sale[] public sales;
    mapping(uint256 => uint256) public amountUsedInSale;
    mapping(bytes32 => uint256) public usedAllocation;
    uint256 public publicSaleAmount;

    event NewSale(uint256 salesId);
    event Buy(address indexed to, uint256 amountScom, uint256 amountEth);

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
    // https://en.wikipedia.org/wiki/Geometric_series#Sum
    // Sn = ((1 - r^(n+1)) / (1 - r))
    function geometricSum(uint256 r, uint256 n, uint256 b) internal pure returns (uint256 s) {
        s = (((b - pow(r, n+1, b)) * b) / (b - r));
    }

    function start(uint256 _startTime, uint256 _endTime, uint256 _decrementDecimal) external onlyOwner {
        require(totalAmount == 0, "already started");
        require(_startTime < _endTime, "invalid startTime / endTime");
        require(_decrementDecimal <= 1e18, "invalid decrement");
        totalAmount = scom.balanceOf(address(this));
        startTime = _startTime;
        endTime = _endTime;
        decrementDecimal = _decrementDecimal;
        oneMinusDecrement = WEI - _decrementDecimal;
        // total
        initialReleaseAmount = totalAmount * WEI / geometricSum(decrementDecimal, (endTime - startTime) /*/ (1 days)*/, WEI);
    }
    function updateReleaseSchdule(uint256 _endTime, uint256 _initialReleaseAmount, uint256 _decrementDecimal) external onlyOwner {
        release();
        // require(startTime < _endTime, "invalid endTime");
        endTime = _endTime;
        decrementDecimal = _decrementDecimal;
        initialReleaseAmount = _initialReleaseAmount;
        // FIXME: check schedule
    }

    function totalSuppyAt(uint256 timestamp) public view returns (uint256 amount) {
        if (timestamp > endTime) {
            amount = totalAmount;
        } else {
            uint256 period = (timestamp - startTime) /*/ (1 days)*/;
            amount = initialReleaseAmount * geometricSum(decrementDecimal, period, WEI) / WEI;
        }
    }
    function currReleaseAmount() public view returns (uint256 amount) {
        return totalSuppyAt(block.timestamp);
    }

    function release() public returns (uint256 newRelease) {
        uint256 releasedAmount = currReleaseAmount();
        newRelease = releasedAmount - lasReleaseAmount;
        availableAmount += newRelease;
        lasReleaseAmount = releasedAmount;
        lastUpdate = block.timestamp;
    }

    function newSale(Sale calldata sale) external auth {
        release();
        require(startTime < sale.limitedPrivateSaleEndTime && sale.limitedPrivateSaleEndTime <= sale.unlimitedPrivateSaleEndTime, "invalid start / end time ");
        require((sale.amount * 2) < availableAmount, "invalid amount"); // an equal amount goes to foundation
        uint256 salesId = sales.length;
        sales.push(sale);
        availableAmount -= (sale.amount * 2);
        emit NewSale(salesId);
    }

    // TODO: check from enduser only?
    function buy(uint256 salesId, address to, uint256 allocation, bytes32[] calldata proof) external payable nonReentrant returns (uint256 amountScom) {
        weth.deposit{value: msg.value}();
        return _buy(salesId, to, allocation, proof);
    }
    // TODO: check from wrapper only?
    function buyWithWETH(uint256 salesId, address to, uint256 allocation, bytes32[] calldata proof) external nonReentrant returns (uint256 amountScom) {
        return _buy(salesId, to, allocation, proof);
    }

    function _buy(uint256 salesId, address to, uint256 allocation, bytes32[] calldata proof) internal returns (uint256 amountScom) {
        uint256 amountEth = weth.balanceOf(address(this));
        require(amountEth > 0, "no input amount");

        Sale storage sale = sales[salesId];
        require(sale.amount > 0, "invalid sales");
        require(sale.startTime < block.timestamp, "not started");
        bytes32 hash = keccak256(abi.encodePacked(to, allocation));
        require(
            MerkleProof.verifyCalldata(proof, sale.merkleRoot, hash)
        , "merkle proof failed");
        uint256 newAllocation = usedAllocation[hash] + amountEth;
        require(newAllocation <= allocation, "excceed allocation");
        usedAllocation[hash] = newAllocation;

        // find scom amount from amm
        (uint112 reserveScom, uint112 reserveEth, /*uint32 blockTimestampLast*/) = amm.getReserves();
        if (!token0IsScom)
            (reserveScom, reserveEth) = (reserveEth, reserveScom);
        amountScom = (amountEth * reserveScom) / reserveEth;
        if (sale.limitedPrivateSaleEndTime < block.timestamp) {
            require(amountScom <= allocation, "invalid amount");
        } else {
            require(amountUsedInSale[salesId] + amountScom <= sale.amount, "invalid amount");
        }
        amountUsedInSale[salesId] += amountScom;

        // add liquidity to amm pool
        IERC20(scom).safeTransfer(address(amm), amountScom);
        IERC20(weth).safeTransfer(address(amm), amountEth);
        amm.mint(foundation);

        IERC20(scom).safeTransfer(to, amountScom);

        emit Buy(to, amountScom, amountEth);
    }
    function _releaseToPublic(uint256[] calldata salesIds) internal returns (uint256 amount) {
        uint256 i;
        uint256 length = salesIds.length;
        
        while (i < length) {
            uint256 salesId = salesIds[i];
            Sale storage sale = sales[salesId];
            if (sale.unlimitedPrivateSaleEndTime < block.timestamp) {
                amount += sale.amount - amountUsedInSale[salesId];
                amountUsedInSale[salesId] = sale.amount;
            }
            unchecked { i++; } // gas savings
        }
        publicSaleAmount = amount;
    }
    function _publicBuy(address to) internal returns (uint256 amountScom) {
        uint256 amountEth = weth.balanceOf(address(this));
        require(amountEth > 0, "no input amount");

        // find scom amount from amm
        (uint112 reserveScom, uint112 reserveEth, /*uint32 blockTimestampLast*/) = amm.getReserves();
        if (!token0IsScom)
            (reserveScom, reserveEth) = (reserveEth, reserveScom);
        amountScom = (amountEth * reserveScom) / reserveEth;
        require((amountScom * 2) <= publicSaleAmount, "insufficient amount");
        publicSaleAmount -= amountScom * 2;

        // add liquidity to amm pool
        IERC20(scom).safeTransfer(address(amm), amountScom);
        IERC20(weth).safeTransfer(address(amm), amountEth);
        amm.mint(foundation);

        IERC20(scom).safeTransfer(to, amountScom);

        emit Buy(to, amountScom, amountEth);
    }
    function releaseToPublic(uint256[] calldata salesIds) external nonReentrant returns (uint256 amount) {
        amount = _releaseToPublic(salesIds);
    }
    function publicBuy() external payable returns (uint256 amountScom, address to) {
        weth.deposit{value: msg.value}();
        amountScom = _publicBuy(to);
    }
    function releaseAndBuy(uint256[] calldata salesIds, address to) external payable nonReentrant returns (uint256 amountScom) {
        _releaseToPublic(salesIds);
        weth.deposit{value: msg.value}();
        amountScom = _publicBuy(to);
    }
    function publicBuyWithWETH(address to) external returns (uint256 amountScom) {
        amountScom = _publicBuy(to);
    }
    function releaseAndBuyWithWETH(uint256[] calldata salesIds, address to) external nonReentrant returns (uint256 amountScom) {
        _releaseToPublic(salesIds);
        amountScom = _publicBuy(to);
    }

}