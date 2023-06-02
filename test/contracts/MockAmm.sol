// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

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
contract MockAmmPair is AMM, ERC20 {
    address public immutable token0;
    address public immutable token1;
    uint256 public reserve0;
    uint256 public reserve1;
    constructor(address _token0, address _token1) ERC20("AMM", "AMM") {
        require(_token0 != address(0) && _token0 < _token1, "Invalid addresses");
        token0 = _token0;
        token1 = _token1;
    }
    function min(uint256 x, uint256 y) internal pure returns (uint256 z) {
        z = x < y ? x : y;
    }
    function getReserves() external view returns (uint112 _reserve0, uint112 _reserve1, uint32 blockTimestampLast) {
        return (uint112(reserve0), uint112(reserve1), 0);
    }
    function mint(address to) public returns (uint256 liquidity) {
        uint256 balance0 = IERC20(token0).balanceOf(address(this));
        uint256 balance1 = IERC20(token1).balanceOf(address(this));
        liquidity = min(balance0 - reserve0, balance1 - reserve1);
        _mint(to, liquidity);
        reserve0 = balance0;
        reserve1 = balance1;
    }
    function burn(address to) external override returns (uint256 amount0, uint256 amount1) {
        uint256 liquidity = balanceOf(address(this));
        (amount0, amount1) = (liquidity, liquidity);
        IERC20(token0).transfer(to, amount0);
        IERC20(token1).transfer(to, amount1);
        _burn(address(this), liquidity);
        reserve0 = IERC20(token0).balanceOf(address(this));
        reserve1 = IERC20(token1).balanceOf(address(this));
    }
    function swap(uint256 amount0Out, uint256 amount1Out, address to, bytes calldata /*data*/) external {
        IERC20(token0).transfer(to, amount0Out);
        IERC20(token1).transfer(to, amount1Out);
    }
    function skim(address to) external {}
    function sync() external {
        reserve0 = IERC20(token0).balanceOf(address(this));
        reserve1 = IERC20(token1).balanceOf(address(this));
    }
}