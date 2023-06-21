// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;


import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./IOSWAP_HybridRouter2.sol";
import "./AuditorInfo.sol";
import "./Vault.sol";

contract RouterVaultWrapper is Authorization {
    using SafeERC20 for IERC20;

    modifier onlyEndUser() {
        require((tx.origin == msg.sender && !Address.isContract(msg.sender)), "Not from end user");
        _;
    }

    function _transferFrom(IERC20 token, address from, uint amount) internal returns (uint256 balance) {
        balance = token.balanceOf(address(this));
        token.safeTransferFrom(from, address(this), amount);
        balance = token.balanceOf(address(this)) - balance;
    }

    event UpdateRouter(IOSWAP_HybridRouter2 router);
    event Claim(uint256 indexed trancheId, address sender, address inToken, uint256 inAmount);
    event Swap(uint256[] trancheId, address sender, address inToken, uint256 inAmount);

    Vault public vault;
    IOSWAP_HybridRouter2 public router;
    address public weth; 

    constructor(Vault _vault, IOSWAP_HybridRouter2 _router) {
        vault = _vault;
        router = _router;
        weth = address(_vault.weth());
    }
    function updateRouter(IOSWAP_HybridRouter2 _router) external onlyOwner {
        router = _router;
        emit UpdateRouter(router);
    }

    function claimExactIn(address[] calldata pair, uint256 amountIn, uint256 amountOutMin, uint256 deadline, uint256 trancheId, address to, uint256 allocation, bytes32[] calldata proof) external onlyEndUser {

        IERC20 inToken;
        {
        address[] memory path = router.getPathOut(pair, weth);
        inToken = IERC20(path[0]);
        }
        amountIn = _transferFrom(inToken, msg.sender, amountIn);
        inToken.safeIncreaseAllowance(address(router), amountIn);

        (/*address[] memory path*/, uint256[] memory amounts) = router.swapExactTokensForTokens(amountIn, amountOutMin, pair, address(inToken), address(vault), deadline, new bytes(0));

        vault.claimWithWETH(trancheId, msg.sender, to, allocation, proof);

        emit Claim(trancheId, msg.sender, address(inToken), amounts[0]);
    }
    function claimExactOut(address[] calldata pair, uint256 amountOut, uint256 amountInMax, uint256 deadline, uint256 trancheId, address to, uint256 allocation, bytes32[] calldata proof) external onlyEndUser {
        IERC20 inToken;
        {
        address[] memory path = router.getPathOut(pair, weth);
        inToken = IERC20(path[0]);
        }
        amountInMax = _transferFrom(inToken, msg.sender, amountInMax);
        inToken.safeIncreaseAllowance(address(router), amountInMax);

        (/*address[] memory path*/, uint256[] memory amounts) = router.swapTokensForExactTokens(amountOut, amountInMax, pair, weth, address(vault), deadline, new bytes(0));

        vault.claimWithWETH(trancheId, msg.sender, to, allocation, proof);
        emit Claim(trancheId, msg.sender, address(inToken), amounts[0]);

        // refund excessive amount back to user
        if (amountInMax > amounts[0]) {
            inToken.safeTransfer(msg.sender, amountInMax - amounts[0]);
            inToken.safeApprove(address(router), 0);
        }
    }

    function swapExactIn(address[] calldata pair, uint256 amountIn, uint256 amountOutMin, uint256 deadline, uint256[] calldata trancheIds, address to) external onlyEndUser {

        IERC20 inToken;
        {
        address[] memory path = router.getPathOut(pair, weth);
        inToken = IERC20(path[0]);
        }
        amountIn = _transferFrom(inToken, msg.sender, amountIn);
        inToken.safeIncreaseAllowance(address(router), amountIn);

        (/*address[] memory path*/, uint256[] memory amounts) = router.swapExactTokensForTokens(amountIn, amountOutMin, pair, address(inToken), address(vault), deadline, new bytes(0));

        if (trancheIds.length > 0)
            vault.releaseAndSwapWithWETH(trancheIds, msg.sender, to);
        else
            vault.swapWithWETH(msg.sender, to);

        emit Swap(trancheIds, msg.sender, address(inToken), amounts[0]);
    }
    function swapExactOut(address[] calldata pair, uint256 amountOut, uint256 amountInMax, uint256 deadline, uint256[] calldata trancheIds, address to) external onlyEndUser {
        IERC20 inToken;
        {
        address[] memory path = router.getPathOut(pair, weth);
        inToken = IERC20(path[0]);
        }
        amountInMax = _transferFrom(inToken, msg.sender, amountInMax);
        inToken.safeIncreaseAllowance(address(router), amountInMax);

        (/*address[] memory path*/, uint256[] memory amounts) = router.swapTokensForExactTokens(amountOut, amountInMax, pair, weth, address(vault), deadline, new bytes(0));

        if (trancheIds.length > 0)
            vault.releaseAndSwapWithWETH(trancheIds, msg.sender, to);
        else
            vault.swapWithWETH(msg.sender, to);
        emit Swap(trancheIds, msg.sender, address(inToken), amounts[0]);

        // refund excessive amount back to user
        if (amountInMax > amounts[0]) {
            inToken.safeTransfer(msg.sender, amountInMax - amounts[0]);
            inToken.safeApprove(address(router), 0);
        }
    }
}