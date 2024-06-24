// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./AuditorInfo.sol";
import './Scom.sol';

interface UniV3 {
    function token0() external view returns (address);
    function token1() external view returns (address);
    function slot0() external view returns ( uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked);
    function positions(bytes32 key) external view returns (uint128 _liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1);
    function mint(address recipient, int24 tickLower, int24 tickUpper, uint128 amount, bytes calldata data) external returns (uint256 amount0, uint256 amount1);
    function burn(int24 tickLower, int24 tickUpper, uint128 amount) external returns (uint256 amount0, uint256 amount1);
    function collect(address recipient, int24 tickLower, int24 tickUpper, uint128 amount0Requested, uint128 amount1Requested) external returns (uint128 amount0, uint128 amount1);
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
           |             |           +> unlimited claim^
           |             |           +> admin withdraw*
           |             |           +> release from tranche +> buy
           |             |                                   +> admin withdraw*
           |             +> admin release* ------------------+
           + (presale) --------------------------------------+
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

    struct PoolKey {
        address token0;
        address token1;
        uint24 fee;
    }
    struct MintCallbackData {
        PoolKey poolKey;
        address payer;
    }

    uint256 constant WEI = 10 ** 18;

    Scom public immutable scom;
    IWETH public immutable weth;
    UniV3 public immutable uniV3;
    bool public immutable token0IsScom; // token0 is scom in the amm pool, i.e., address(scom) < address(weth)
    int24 constant public maxTick = 887260;
    int24 constant public minTick = -887260;
    int24 constant internal MIN_TICK = -887272;
    int24 constant internal MAX_TICK = -MIN_TICK;
    uint24 constant public fee = 500;
    int24 constant public tickSpacing = 10;
    address public foundation;
    uint256 public foundationShare;

    // release schedule constants
    uint256 public lockedAmount;
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
    event NewTranche(uint256 indexed trancheId, uint256 unlockedAmount);
    event Claim(uint256 indexed trancheId, address indexed from, address indexed to, uint256 amountScom, uint256 amountEth, uint256 remainingBalance);
    event Buy(address indexed from, address indexed to, uint256 amountScom, uint256 amountEth, uint256 remainingBalance);
    event WithdrawScomFromTranche(uint256 indexed trancheId, uint256 amount, uint256 remainingBalance);
    event WithdrawScomFromRelease(uint256 amount, uint256 balance);
    event Release(uint256[] trancheIds, uint256 amount, uint256 releasedAmount);
    event DirectRelease(uint256 amount, uint256 unlockedAmount, uint256 releasedAmount);
    event TrancheRelease(uint256 indexed trancheId);
    event Sell(address indexed from, uint256 amountScom, uint256 amountEth, uint256 remainingBalance);

    constructor(address _foundation, uint256 _foundationShare, Scom _scom, UniV3 _uniV3) {
        foundation = _foundation;
        foundationShare = _foundationShare;
        scom = _scom;
        uniV3 = _uniV3;
        address token0 = _uniV3.token0();
        address token1 = _uniV3.token1();
        (token0IsScom, weth) = (token0 == address(_scom)) ? (true, IWETH(token1)) : (false, IWETH(token0));
    }

    receive() external payable {
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

    function lock(uint256 presale, uint256 _startTime, uint256 _endTime, uint256 _decrementDecimal) external onlyOwner {
        require(lockedAmount == 0, "already started");
        require(presale % 2 == 0, "presale must be even");
        require(_startTime < _endTime, "invalid startTime / endTime");
        require(_decrementDecimal <= 1e18, "invalid decrement");

        uint256 totalAmount = scom.balanceOf(address(this));
        require(presale <= totalAmount, "presale too large");
        releasedAmount = presale;
        lockedAmount = totalAmount - presale;

        startTime = _startTime;
        endTime = _endTime;
        decrementDecimal = _decrementDecimal;
        // oneMinusDecrement = WEI - _decrementDecimal;
        // total
        startingAmount = lockedAmount * WEI / geometricSum(decrementDecimal, (endTime - startTime) /*/ (1 days)*/, WEI);
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

    function unlockedAmountAt(uint256 timestamp) public view returns (uint256 amount) {
        if (timestamp > endTime) {
            amount = lockedAmount;
        } else {
            uint256 period = (timestamp - startTime) /*/ (1 days)*/;
            amount = startingAmount * geometricSum(decrementDecimal, period, WEI) / WEI;
        }
    }
    function currUnlockedAmount() public view returns (uint256 amount) {
        return unlockedAmountAt(block.timestamp);
    }

    function unlock() public returns (uint256 newAmount) {
        uint256 totalUnlockedAmount = currUnlockedAmount();
        newAmount = totalUnlockedAmount - lastUnlockedAmount;
        unlockedAmount += newAmount;
        lastUnlockedAmount = totalUnlockedAmount;
        lastUpdate = block.timestamp;
        emit Unlock(newAmount, unlockedAmount, totalUnlockedAmount);
    }

    function newTranche(TrancheInfo calldata tranche) external auth {
        unlock();
        require(startTime < tranche.limitedClaimEndTime && tranche.limitedClaimEndTime <= tranche.unlimitedClaimEndTime, "invalid start / end time ");
        require(tranche.amount % 2 == 0, "amount must be event");
        require(tranche.amount < unlockedAmount, "invalid amount");
        uint256 trancheId = trancheInfo.length;
        trancheInfo.push(tranche);
        unlockedAmount -= tranche.amount;
        availableBalanceInTranche[trancheId] = tranche.amount;
        emit NewTranche(trancheId, unlockedAmount);
    }
    function directRelease(uint256 amount) public onlyOwner {
        require(amount % 2 == 0, "amount must be even");
        unlockedAmount -= amount;
        releasedAmount += amount;
        emit DirectRelease(amount, unlockedAmount, releasedAmount);
    }
    function unlockAndRelease(uint256 amount) external onlyOwner {
        unlock();
        directRelease(amount);
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
                require(amountScom[i] <= availableBalanceInTranche[trancheIds[i]], "invalid amount");
                availableBalanceInTranche[trancheIds[i]] -= amountScom[i];
                amount += amountScom[i];
                emit WithdrawScomFromTranche(trancheIds[i], amountScom[i], availableBalanceInTranche[trancheIds[i]]);
            }
            unchecked { i++; }
        }
        scom.safeTransfer(foundation, amount);
    }
    function withdrawFromRelease(uint256 amount) external onlyOwner {
        require(amount <= releasedAmount, "insufficient balance");
        require(amount % 2 == 0, "amount must be even");
        releasedAmount -= amount;
        scom.safeTransfer(foundation, amount);
        emit WithdrawScomFromRelease(amount, releasedAmount);
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
    function uniswapV3MintCallback(
        uint256 amount0Owed,
        uint256 amount1Owed,
        bytes calldata /*data*/
    ) external {
        // MintCallbackData memory decoded = abi.decode(data, (MintCallbackData));
        require(msg.sender == address(uniV3), "not from uni");

        if (amount0Owed > 0) (token0IsScom ? IERC20(scom) : IERC20(weth)).safeTransfer(msg.sender, amount0Owed);
        if (amount1Owed > 0) (token0IsScom ? IERC20(weth) : IERC20(scom)).safeTransfer(msg.sender, amount1Owed);
    }
    uint8 internal constant RESOLUTION = 96;
    uint256 internal constant Q96 = 0x1000000000000000000000000;
    function mulDiv(
        uint256 a,
        uint256 b,
        uint256 denominator
    ) internal pure returns (uint256 result) {
        // 512-bit multiply [prod1 prod0] = a * b
        // Compute the product mod 2**256 and mod 2**256 - 1
        // then use the Chinese Remainder Theorem to reconstruct
        // the 512 bit result. The result is stored in two 256
        // variables such that product = prod1 * 2**256 + prod0
        uint256 prod0; // Least significant 256 bits of the product
        uint256 prod1; // Most significant 256 bits of the product
        assembly {
            let mm := mulmod(a, b, not(0))
            prod0 := mul(a, b)
            prod1 := sub(sub(mm, prod0), lt(mm, prod0))
        }

        // Handle non-overflow cases, 256 by 256 division
        if (prod1 == 0) {
            require(denominator > 0);
            assembly {
                result := div(prod0, denominator)
            }
            return result;
        }

        // Make sure the result is less than 2**256.
        // Also prevents denominator == 0
        require(denominator > prod1);

        ///////////////////////////////////////////////
        // 512 by 256 division.
        ///////////////////////////////////////////////

        // Make division exact by subtracting the remainder from [prod1 prod0]
        // Compute remainder using mulmod
        uint256 remainder;
        assembly {
            remainder := mulmod(a, b, denominator)
        }
        // Subtract 256 bit number from 512 bit number
        assembly {
            prod1 := sub(prod1, gt(remainder, prod0))
            prod0 := sub(prod0, remainder)
        }

        // Factor powers of two out of denominator
        // Compute largest power of two divisor of denominator.
        // Always >= 1.
        uint256 twos = uint256(-int256(denominator)) & denominator;
        // Divide denominator by power of two
        assembly {
            denominator := div(denominator, twos)
        }

        // Divide [prod1 prod0] by the factors of two
        assembly {
            prod0 := div(prod0, twos)
        }
        // Shift in bits from prod1 into prod0. For this we need
        // to flip `twos` such that it is 2**256 / twos.
        // If twos is zero, then it becomes one
        assembly {
            twos := add(div(sub(0, twos), twos), 1)
        }
        prod0 |= prod1 * twos;

        // Invert denominator mod 2**256
        // Now that denominator is an odd number, it has an inverse
        // modulo 2**256 such that denominator * inv = 1 mod 2**256.
        // Compute the inverse by starting with a seed that is correct
        // correct for four bits. That is, denominator * inv = 1 mod 2**4
        uint256 inv = (3 * denominator) ^ 2;
        // Now use Newton-Raphson iteration to improve the precision.
        // Thanks to Hensel's lifting lemma, this also works in modular
        // arithmetic, doubling the correct bits in each step.
        inv *= 2 - denominator * inv; // inverse mod 2**8
        inv *= 2 - denominator * inv; // inverse mod 2**16
        inv *= 2 - denominator * inv; // inverse mod 2**32
        inv *= 2 - denominator * inv; // inverse mod 2**64
        inv *= 2 - denominator * inv; // inverse mod 2**128
        inv *= 2 - denominator * inv; // inverse mod 2**256

        // Because the division is now exact we can divide by multiplying
        // with the modular inverse of denominator. This will give us the
        // correct result modulo 2**256. Since the precoditions guarantee
        // that the outcome is less than 2**256, this is the final result.
        // We don't need to compute the high bits of the result and prod1
        // is no longer required.
        result = prod0 * inv;
        return result;
    }
    function mulDivRoundingUp(
        uint256 a,
        uint256 b,
        uint256 denominator
    ) internal pure returns (uint256 result) {
        result = mulDiv(a, b, denominator);
        if (mulmod(a, b, denominator) > 0) {
            require(result < type(uint256).max);
            result++;
        }
    }
    function divRoundingUp(uint256 x, uint256 y) internal pure returns (uint256 z) {
        assembly {
            z := add(div(x, y), gt(mod(x, y), 0))
        }
    }
    function toUint128(uint256 x) private pure returns (uint128 y) {
        require((y = uint128(x)) == x);
    }
    function getSqrtRatioAtTick(int24 tick) internal pure returns (uint160 sqrtPriceX96) {
        uint256 absTick = tick < 0 ? uint256(-int256(tick)) : uint256(int256(tick));
        require(absTick <= uint256(uint24(MAX_TICK)), 'T');

        uint256 ratio = absTick & 0x1 != 0 ? 0xfffcb933bd6fad37aa2d162d1a594001 : 0x100000000000000000000000000000000;
        if (absTick & 0x2 != 0) ratio = (ratio * 0xfff97272373d413259a46990580e213a) >> 128;
        if (absTick & 0x4 != 0) ratio = (ratio * 0xfff2e50f5f656932ef12357cf3c7fdcc) >> 128;
        if (absTick & 0x8 != 0) ratio = (ratio * 0xffe5caca7e10e4e61c3624eaa0941cd0) >> 128;
        if (absTick & 0x10 != 0) ratio = (ratio * 0xffcb9843d60f6159c9db58835c926644) >> 128;
        if (absTick & 0x20 != 0) ratio = (ratio * 0xff973b41fa98c081472e6896dfb254c0) >> 128;
        if (absTick & 0x40 != 0) ratio = (ratio * 0xff2ea16466c96a3843ec78b326b52861) >> 128;
        if (absTick & 0x80 != 0) ratio = (ratio * 0xfe5dee046a99a2a811c461f1969c3053) >> 128;
        if (absTick & 0x100 != 0) ratio = (ratio * 0xfcbe86c7900a88aedcffc83b479aa3a4) >> 128;
        if (absTick & 0x200 != 0) ratio = (ratio * 0xf987a7253ac413176f2b074cf7815e54) >> 128;
        if (absTick & 0x400 != 0) ratio = (ratio * 0xf3392b0822b70005940c7a398e4b70f3) >> 128;
        if (absTick & 0x800 != 0) ratio = (ratio * 0xe7159475a2c29b7443b29c7fa6e889d9) >> 128;
        if (absTick & 0x1000 != 0) ratio = (ratio * 0xd097f3bdfd2022b8845ad8f792aa5825) >> 128;
        if (absTick & 0x2000 != 0) ratio = (ratio * 0xa9f746462d870fdf8a65dc1f90e061e5) >> 128;
        if (absTick & 0x4000 != 0) ratio = (ratio * 0x70d869a156d2a1b890bb3df62baf32f7) >> 128;
        if (absTick & 0x8000 != 0) ratio = (ratio * 0x31be135f97d08fd981231505542fcfa6) >> 128;
        if (absTick & 0x10000 != 0) ratio = (ratio * 0x9aa508b5b7a84e1c677de54f3e99bc9) >> 128;
        if (absTick & 0x20000 != 0) ratio = (ratio * 0x5d6af8dedb81196699c329225ee604) >> 128;
        if (absTick & 0x40000 != 0) ratio = (ratio * 0x2216e584f5fa1ea926041bedfe98) >> 128;
        if (absTick & 0x80000 != 0) ratio = (ratio * 0x48a170391f7dc42444e8fa2) >> 128;

        if (tick > 0) ratio = type(uint256).max / ratio;

        // this divides by 1<<32 rounding up to go from a Q128.128 to a Q128.96.
        // we then downcast because we know the result always fits within 160 bits due to our tick input constraint
        // we round up in the division so getTickAtSqrtRatio of the output price is always consistent
        sqrtPriceX96 = uint160((ratio >> 32) + (ratio % (1 << 32) == 0 ? 0 : 1));
    }
    function getLiquidityForAmount0(
        uint160 sqrtRatioAX96,
        uint160 sqrtRatioBX96,
        uint256 amount0
    ) internal pure returns (uint128 liquidity) {
        if (sqrtRatioAX96 > sqrtRatioBX96) (sqrtRatioAX96, sqrtRatioBX96) = (sqrtRatioBX96, sqrtRatioAX96);
        uint256 intermediate = mulDiv(sqrtRatioAX96, sqrtRatioBX96, Q96);
        return toUint128(mulDiv(amount0, intermediate, sqrtRatioBX96 - sqrtRatioAX96));
    }
    function getLiquidityForAmount1(
        uint160 sqrtRatioAX96,
        uint160 sqrtRatioBX96,
        uint256 amount1
    ) internal pure returns (uint128 liquidity) {
        if (sqrtRatioAX96 > sqrtRatioBX96) (sqrtRatioAX96, sqrtRatioBX96) = (sqrtRatioBX96, sqrtRatioAX96);
        return toUint128(mulDiv(amount1, Q96, sqrtRatioBX96 - sqrtRatioAX96));
    }
    function getAmount0ForLiquidity(
        uint160 sqrtRatioAX96,
        uint160 sqrtRatioBX96,
        uint128 liquidity
    ) internal pure returns (uint256 amount0) {
        if (sqrtRatioAX96 > sqrtRatioBX96) (sqrtRatioAX96, sqrtRatioBX96) = (sqrtRatioBX96, sqrtRatioAX96);

        return
            divRoundingUp(mulDivRoundingUp(
                uint256(liquidity) << RESOLUTION,
                sqrtRatioBX96 - sqrtRatioAX96,
                sqrtRatioBX96
            ) , sqrtRatioAX96);
    }
    function getAmount1ForLiquidity(
        uint160 sqrtRatioAX96,
        uint160 sqrtRatioBX96,
        uint128 liquidity
    ) internal pure returns (uint256 amount1) {
        if (sqrtRatioAX96 > sqrtRatioBX96) (sqrtRatioAX96, sqrtRatioBX96) = (sqrtRatioBX96, sqrtRatioAX96);

        return mulDivRoundingUp(liquidity, sqrtRatioBX96 - sqrtRatioAX96, Q96);
    }
    function _addToUniV3(uint256 amountEth) internal returns (uint256 amountScom) {
        (uint160 sqrtPriceX96, , , , , , ) = uniV3.slot0();
        uint128 liquidity;
        if (token0IsScom) {
            liquidity = getLiquidityForAmount1(getSqrtRatioAtTick(minTick), sqrtPriceX96, amountEth);
        } else {
            liquidity = getLiquidityForAmount0(sqrtPriceX96, getSqrtRatioAtTick(maxTick), amountEth);
        }

        uint128 toFoundation = uint128(uint256(liquidity) * foundationShare / WEI);

        (uint256 amount0, uint256 amount1) = uniV3.mint(foundation, minTick, maxTick, toFoundation, "");
        (uint256 amount2, uint256 amount3) = uniV3.mint(address(this), minTick, maxTick, liquidity - toFoundation, "");
        amountScom = token0IsScom ? (amount0 + amount2) : (amount1 + amount3);
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

        if (block.timestamp < tranche.limitedClaimEndTime) {
            uint256 newAllocation = usedAllocation[hash] + amountEth;
            require(newAllocation <= allocation, "excceed allocation");
            usedAllocation[hash] = newAllocation;
        }

        // add weth and half of the scom to amm pool
        amountScom = _addToUniV3(amountEth);

        uint256 amount = amountScom * 2;
        require(amount <= availableBalanceInTranche[trancheId], "insufficient balance");
        amount = availableBalanceInTranche[trancheId] - amount;
        availableBalanceInTranche[trancheId] = amount;

        // half of scom to user
        scom.safeTransfer(to, amountScom);

        emit Claim(trancheId, from, to, amountScom, amountEth, amount);
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
        emit Release(trancheIds, amount, releasedAmount);
    }
    function _buyScom(address from, address to) internal returns (uint256 amountScom) {
        uint256 amountEth = weth.balanceOf(address(this));
        require(amountEth > 0, "no input amount");

        amountScom = _addToUniV3(amountEth);

        uint256 amount = amountScom * 2;
        require(amount <= releasedAmount, "insufficient amount");
        amount = releasedAmount - amount;
        releasedAmount = amount;

        // half of scom to user
        scom.safeTransfer(to, amountScom);

        emit Buy(from, to, amountScom, amountEth, amount);
    }
    function releaseTranche(uint256[] calldata trancheIds) external nonReentrant returns (uint256 amount) {
        amount = _releaseTranche(trancheIds);
    }
    function buyScom(address to) external payable nonReentrant returns (uint256 amountScom) {
        weth.deposit{value: msg.value}();
        amountScom = _buyScom(msg.sender, to);
    }
    function releaseAndBuy(uint256[] calldata trancheIds, address to) external payable nonReentrant returns (uint256 amountScom) {
        _releaseTranche(trancheIds);
        weth.deposit{value: msg.value}();
        amountScom = _buyScom(msg.sender, to);
    }
    function buyWithWETH(address from, address to) external nonReentrant returns (uint256 amountScom) {
        amountScom = _buyScom(from, to);
    }
    function releaseAndBuyWithWETH(uint256[] calldata trancheIds, address from, address to) external nonReentrant returns (uint256 amountScom) {
        _releaseTranche(trancheIds);
        amountScom = _buyScom(from, to);
    }

    function sellScom(uint256 amountScom) external returns (uint256 amountEth) {
        (uint160 sqrtPriceX96, , , , , , ) = uniV3.slot0();
        uint128 liquidity;
        if (token0IsScom) {
            liquidity = getLiquidityForAmount0(sqrtPriceX96, getSqrtRatioAtTick(maxTick), amountScom);
        } else {
            liquidity = getLiquidityForAmount1(getSqrtRatioAtTick(minTick), sqrtPriceX96, amountScom);
        }

        (uint128 _liquidity,,,,) = uniV3.positions(keccak256(abi.encodePacked(address(this), minTick, maxTick)));
        require(liquidity <= _liquidity, "insufficient liquidity");

        scom.safeTransferFrom(msg.sender, address(this), amountScom);

        uint256 amountScom2;
        (amountScom2, amountEth) = uniV3.burn(minTick, maxTick, liquidity);
        (amountScom2, amountEth) = uniV3.collect(address(this), minTick, maxTick, uint128(amountScom2), uint128(amountEth));

        if (!token0IsScom) (amountScom2, amountEth) = (amountEth, amountScom2);

        amountScom2 = releasedAmount + amountScom + amountScom2;
        releasedAmount = amountScom2;

        weth.withdraw(amountEth);
        payable(msg.sender).transfer(amountEth);
        
        emit Sell(msg.sender, amountScom, amountEth, amountScom2);
    }
}