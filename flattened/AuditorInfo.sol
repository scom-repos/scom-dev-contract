// SPDX-License-Identifier: GPL-3.0-only

pragma solidity 0.8.13;

contract Authorization {
    address public owner;
    address public newOwner;
    mapping(address => bool) public isPermitted;
    event Authorize(address user);
    event Deauthorize(address user);
    event StartOwnershipTransfer(address user);
    event TransferOwnership(address user);
    constructor() {
        owner = msg.sender;
    }
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    modifier auth {
        require(isPermitted[msg.sender], "Action performed by unauthorized address.");
        _;
    }
    function transferOwnership(address newOwner_) external onlyOwner {
        newOwner = newOwner_;
        emit StartOwnershipTransfer(newOwner_);
    }
    function takeOwnership() external {
        require(msg.sender == newOwner, "Action performed by unauthorized address.");
        owner = newOwner;
        newOwner = address(0x0000000000000000000000000000000000000000);
        emit TransferOwnership(owner);
    }
    function permit(address user) external onlyOwner {
        isPermitted[user] = true;
        emit Authorize(user);
    }
    function deny(address user) external onlyOwner {
        isPermitted[user] = false;
        emit Deauthorize(user);
    }
}

// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);

    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

// OpenZeppelin Contracts v4.4.1 (security/ReentrancyGuard.sol)

pragma solidity ^0.8.0;

/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        // On the first call to nonReentrant, _notEntered will be true
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;

        _;

        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }
}

// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/draft-IERC20Permit.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in
 * https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].
 *
 * Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by
 * presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't
 * need to send a transaction, and thus is not required to hold Ether at all.
 */
interface IERC20Permit {
    /**
     * @dev Sets `value` as the allowance of `spender` over ``owner``'s tokens,
     * given ``owner``'s signed approval.
     *
     * IMPORTANT: The same issues {IERC20-approve} has related to transaction
     * ordering also apply here.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `deadline` must be a timestamp in the future.
     * - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`
     * over the EIP712-formatted function arguments.
     * - the signature must use ``owner``'s current nonce (see {nonces}).
     *
     * For more information on the signature format, see the
     * https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP
     * section].
     */
    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    /**
     * @dev Returns the current nonce for `owner`. This value must be
     * included whenever a signature is generated for {permit}.
     *
     * Every successful call to {permit} increases ``owner``'s nonce by one. This
     * prevents a signature from being used multiple times.
     */
    function nonces(address owner) external view returns (uint256);

    /**
     * @dev Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.
     */
    // solhint-disable-next-line func-name-mixedcase
    function DOMAIN_SEPARATOR() external view returns (bytes32);
}

// OpenZeppelin Contracts (last updated v4.7.0) (utils/Address.sol)

pragma solidity ^0.8.1;

/**
 * @dev Collection of functions related to the address type
 */
library Address {
    /**
     * @dev Returns true if `account` is a contract.
     *
     * [IMPORTANT]
     * ====
     * It is unsafe to assume that an address for which this function returns
     * false is an externally-owned account (EOA) and not a contract.
     *
     * Among others, `isContract` will return false for the following
     * types of addresses:
     *
     *  - an externally-owned account
     *  - a contract in construction
     *  - an address where a contract will be created
     *  - an address where a contract lived, but was destroyed
     * ====
     *
     * [IMPORTANT]
     * ====
     * You shouldn't rely on `isContract` to protect against flash loan attacks!
     *
     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets
     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract
     * constructor.
     * ====
     */
    function isContract(address account) internal view returns (bool) {
        // This method relies on extcodesize/address.code.length, which returns 0
        // for contracts in construction, since the code is only stored at the end
        // of the constructor execution.

        return account.code.length > 0;
    }

    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities. Consider using
     * {ReentrancyGuard} or the
     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Address: insufficient balance");

        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Address: unable to send value, recipient may have reverted");
    }

    /**
     * @dev Performs a Solidity function call using a low level `call`. A
     * plain `call` is an unsafe replacement for a function call: use this
     * function instead.
     *
     * If `target` reverts with a revert reason, it is bubbled up by this
     * function (like regular Solidity function calls).
     *
     * Returns the raw returned data. To convert to the expected return value,
     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].
     *
     * Requirements:
     *
     * - `target` must be a contract.
     * - calling `target` with `data` must not revert.
     *
     * _Available since v3.1._
     */
    function functionCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionCall(target, data, "Address: low-level call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with
     * `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        return functionCallWithValue(target, data, 0, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but also transferring `value` wei to `target`.
     *
     * Requirements:
     *
     * - the calling contract must have an ETH balance of at least `value`.
     * - the called Solidity function must be `payable`.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value
    ) internal returns (bytes memory) {
        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");
    }

    /**
     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but
     * with `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value,
        string memory errorMessage
    ) internal returns (bytes memory) {
        require(address(this).balance >= value, "Address: insufficient balance for call");
        require(isContract(target), "Address: call to non-contract");

        (bool success, bytes memory returndata) = target.call{value: value}(data);
        return verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {
        return functionStaticCall(target, data, "Address: low-level static call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal view returns (bytes memory) {
        require(isContract(target), "Address: static call to non-contract");

        (bool success, bytes memory returndata) = target.staticcall(data);
        return verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionDelegateCall(target, data, "Address: low-level delegate call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        require(isContract(target), "Address: delegate call to non-contract");

        (bool success, bytes memory returndata) = target.delegatecall(data);
        return verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the
     * revert reason using the provided one.
     *
     * _Available since v4.3._
     */
    function verifyCallResult(
        bool success,
        bytes memory returndata,
        string memory errorMessage
    ) internal pure returns (bytes memory) {
        if (success) {
            return returndata;
        } else {
            // Look for revert reason and bubble it up if present
            if (returndata.length > 0) {
                // The easiest way to bubble the revert reason is using memory via assembly
                /// @solidity memory-safe-assembly
                assembly {
                    let returndata_size := mload(returndata)
                    revert(add(32, returndata), returndata_size)
                }
            } else {
                revert(errorMessage);
            }
        }
    }
}

// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC20/utils/SafeERC20.sol)

pragma solidity ^0.8.0;




/**
 * @title SafeERC20
 * @dev Wrappers around ERC20 operations that throw on failure (when the token
 * contract returns false). Tokens that return no value (and instead revert or
 * throw on failure) are also supported, non-reverting calls are assumed to be
 * successful.
 * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,
 * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.
 */
library SafeERC20 {
    using Address for address;

    function safeTransfer(
        IERC20 token,
        address to,
        uint256 value
    ) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));
    }

    function safeTransferFrom(
        IERC20 token,
        address from,
        address to,
        uint256 value
    ) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));
    }

    /**
     * @dev Deprecated. This function has issues similar to the ones found in
     * {IERC20-approve}, and its usage is discouraged.
     *
     * Whenever possible, use {safeIncreaseAllowance} and
     * {safeDecreaseAllowance} instead.
     */
    function safeApprove(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        // safeApprove should only be called when setting an initial allowance,
        // or when resetting it to zero. To increase and decrease it, use
        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'
        require(
            (value == 0) || (token.allowance(address(this), spender) == 0),
            "SafeERC20: approve from non-zero to non-zero allowance"
        );
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));
    }

    function safeIncreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        uint256 newAllowance = token.allowance(address(this), spender) + value;
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    }

    function safeDecreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        unchecked {
            uint256 oldAllowance = token.allowance(address(this), spender);
            require(oldAllowance >= value, "SafeERC20: decreased allowance below zero");
            uint256 newAllowance = oldAllowance - value;
            _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
        }
    }

    function safePermit(
        IERC20Permit token,
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) internal {
        uint256 nonceBefore = token.nonces(owner);
        token.permit(owner, spender, value, deadline, v, r, s);
        uint256 nonceAfter = token.nonces(owner);
        require(nonceAfter == nonceBefore + 1, "SafeERC20: permit did not succeed");
    }

    /**
     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
     * on the return value: the return value is optional (but if data is returned, it must not be false).
     * @param token The token targeted by the call.
     * @param data The call data (encoded using abi.encode or one of its variants).
     */
    function _callOptionalReturn(IERC20 token, bytes memory data) private {
        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
        // we're implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that
        // the target address contains contract code and also asserts for success in the low-level call.

        bytes memory returndata = address(token).functionCall(data, "SafeERC20: low-level call failed");
        if (returndata.length > 0) {
            // Return data is optional
            require(abi.decode(returndata, (bool)), "SafeERC20: ERC20 operation did not succeed");
        }
    }
}

pragma solidity 0.8.13;

contract AuditorInfo is Authorization, ReentrancyGuard {
    using SafeERC20 for IERC20;

    enum AuditorStatus {Inactive, Active, Freezed, Super}
    struct AuditorData {
        // address auditor;
        AuditorStatus status;
        uint256 balance;
        uint256 endorsementCount;
    }
    struct StakeTo {
        uint256 index;
        uint256 balance;
    }
    struct WithdrawRequest {
        uint256 amount;
        uint256 releaseTime;
    }

    IERC20 public immutable token;
    address public foundation;
    uint256 public auditorIdCount;
    uint256 public minStakes;
    uint256 public minEndorsementsRequired;
    uint256 public cooldownPeriod;
    uint256 public constant MAX_COOLDOWN_PERIOD = 604800; // 1 week

    mapping(address => AuditorData) public auditorsData; //auditorsData[auditor] = AuditorData
    mapping(uint256 => address) public auditors; //auditors[auditorId] = auditor
    mapping(address => uint256) public auditorIds; //auditorIds[address] = id

    mapping(address => address[]) public stakerAuditor; //stakerAuditor[staker][idx] = auditor;
    mapping(address => mapping(address => StakeTo)) public stakeTo; //stakeTo[staker][auditor] = {idx, balance};
    mapping(address => address[]) public stakedBy; //stakedBy[auditor][idx2] = staker
    mapping(address => mapping(address => uint256)) public stakedByInv; //stakeByInv[auditor][staker] = idx2;
    mapping(address => WithdrawRequest) public pendingWithdrawal; //pendingWithdrawal[auditor] = WithdrawRequest

    mapping(address => address[]) public endorsing; //endorsing[from/endorser][idx] = to/endorsee
    mapping(address => mapping(address => uint256)) public endorsingInv; //endorsingInv[from/endorser][to/endorsee] = idx
    mapping(address => address[]) public endorsedBy; //endorsedBy[to/endorsee][idx2] = from/endorser
    mapping(address => mapping(address => uint256)) public endorsedByInv; //endorsedBy[to/endorsee][from/endorser] = idx2

    event AddAuditor(uint256 indexed auditorId, address indexed auditor);
    event SetMinStakes(uint256 minStakes);
    event SetMinEndorsementsRequired(uint256 minEndorsementsRequired);
    event SetCooldownPeriod(uint256 cooldownPeriod);
    event StakeBond(address indexed sender, address indexed auditor, uint256 amount, uint256 auditorBalance, uint256 stakerAuditorBalance);
    event UnstakeBondRequest(address indexed sender, address indexed auditor, uint256 amount, uint256 auditorBalance, uint256 stakerAuditorBalance);
    event WithdrawBond(address indexed sender, uint256 amount);
    event Penalize(address indexed auditor, address indexed staker, uint256 amount, uint256 auditorBalance, uint256 stakerAuditorBalance);
    event EndorseAuditor(address indexed endorser, address indexed endorsee);
    event RevokeEndorsement(address indexed endorser, address indexed endorsee);
    event AuditorStateChange(address indexed auditor, AuditorStatus newState);

    constructor(IERC20 _token, address _foundation, uint256 _minStakes, uint256 _minEndorsementsRequired, uint256 _cooldownPeriod) {
        token = _token;
        foundation = _foundation;
        minStakes = _minStakes;
        minEndorsementsRequired = _minEndorsementsRequired;
        cooldownPeriod = _cooldownPeriod;
    }

    function stakerAuditorLength(address staker) external view returns (uint256 length) {
        length = stakerAuditor[staker].length;
    }
    function stakedByLength(address auditor) external view returns (uint256 length) {
        length = stakedBy[auditor].length;
    }
    function endorsingLength(address endorser) external view returns (uint256 length) {
        length = endorsing[endorser].length;
    }
    function endorsedByLength(address endorsee) external view returns (uint256 length) {
        length = endorsedBy[endorsee].length;
    }
    function getArray(address[] storage array, uint256 start, uint256 length) internal view returns (address[] memory addresses) {
        unchecked {
        uint256 arrLength = array.length;
        if (start > arrLength) {
            start = arrLength;
        }
        if (length > arrLength) {
            length = arrLength;
        }
        addresses = new address[](length);
        for (uint256 i; i < length; i++) {
            addresses[i] = array[start++];
        }
        }
    }
    function getStakerAuditor(address staker, uint256 start, uint256 length) external view returns (address[] memory _auditors) {
        return getArray(stakerAuditor[staker], start, length);
    }
    function getStakedBy(address auditor, uint256 start, uint256 length) external view returns (address[] memory stakers) {
        return getArray(stakedBy[auditor], start, length);
    }
    function getEndorsing(address endorser, uint256 start, uint256 length) external view returns (address[] memory endorsee) {
        return getArray(endorsing[endorser], start, length);
    }
    function getEndorsedBy(address endorsee, uint256 start, uint256 length) external view returns (address[] memory endorser) {
        return getArray(endorsedBy[endorsee], start, length);
    }
    // modifier onlyActiveAuditor {
    //     require(auditorIds[msg.sender] > 0 && auditorsData[msg.sender].status == AuditorStatus.Active, "not from active auditor");
    //     _;
    // }
    // function isActiveAuditor(address account) external view returns (bool) {
    //     return auditorIds[account] > 0 && ((auditorsData[account].status == AuditorStatus.Active && auditorsData[account].endorsementCount >= minEndorsementsRequired) || auditorsData[account].status == AuditorStatus.Super);
    // }

    function setMinStakes(uint256 _minStakes) external onlyOwner {
        minStakes = _minStakes;
        emit SetMinStakes(_minStakes);
    }
    function setMinEndorsementsRequired(uint256 _minEndorsementsRequired) external onlyOwner {
        minEndorsementsRequired = _minEndorsementsRequired;
        emit SetMinEndorsementsRequired(_minEndorsementsRequired);
    }
    function setCooldownPeriod(uint256 _cooldownPeriod) external onlyOwner {
        require(_cooldownPeriod <= MAX_COOLDOWN_PERIOD, "Max cooldown period > 1 week!");
        cooldownPeriod = _cooldownPeriod;
        emit SetCooldownPeriod(_cooldownPeriod);
    }


    function getAuditors(uint256 auditorIdStart, uint256 length) 
        external 
        view
        returns 
    (
        address[] memory _auditors,
        AuditorData[] memory _auditorsData
    ) {
        unchecked {
        if (auditorIdStart == 0) {
            auditorIdStart = 1;
        }
        else if (auditorIdStart >= auditorIdCount + 1) {
            auditorIdStart = auditorIdCount + 1;
        }
        if (auditorIdStart + length > auditorIdCount + 1) {
            length = auditorIdCount + 1 - auditorIdStart;
        }
        _auditors = new address[](length);
        _auditorsData = new AuditorData[](length);
        for (uint256 i; i < length; i++) {
            address auditor = auditors[auditorIdStart];
            _auditors[i] = auditor;
            _auditorsData[i] = auditorsData[auditor];
            auditorIdStart++;
        }
        }
    }

    function registerAuditor(uint256 amount) external {
        _addAuditor(msg.sender, false);
        if (amount > 0) {
            stakeBond(msg.sender, amount, true);
        }
    }
    function addAuditor(address auditor, bool isSuperAuditor) external onlyOwner {
        _addAuditor(auditor, isSuperAuditor);
    }
    function _addAuditor(address auditor, bool isSuperAuditor) internal returns (uint256 auditorId) {
        auditorId = auditorIds[auditor];
        if (auditorId == 0) {
            auditorId = ++auditorIdCount;
            auditorsData[auditor] = AuditorData({
                status: isSuperAuditor ? AuditorStatus.Super : AuditorStatus.Inactive,
                balance: 0,
                endorsementCount: 0
            });
            auditors[auditorId] = auditor;
            auditorIds[auditor] = auditorId;
            emit AddAuditor(auditorId, auditor);
        }else{
            if (isSuperAuditor){
                auditorsData[auditor].status = AuditorStatus.Super;
                emit AuditorStateChange(auditor, AuditorStatus.Super);
            }
        }
    }
    // TODO: disable super auditor only?
    function freezeAuditor(address auditor) external onlyOwner {
        uint256 auditorId = auditorIds[auditor];
        require(auditorId > 0, "auditor not exist");
        // require(auditorsData[auditor].status == AuditorStatus.Super, "not a super auditor");
        auditorsData[auditor].status = AuditorStatus.Freezed;
        emit AuditorStateChange(auditor, AuditorStatus.Freezed);
    }

    function stakeBond(address auditor, uint256 amount, bool doUpdate) public /*onlyActiveAuditor*/ nonReentrant {
        require(auditorIds[auditor] > 0, "not a auditor");
        require(amount > 0, "amount = 0");
        amount = _transferTokenFrom(amount);
        // uint256 auditorId = auditorIds[msg.sender];

        uint256 length = stakerAuditor[msg.sender].length;
        StakeTo storage staking = stakeTo[msg.sender][auditor];
        uint256 stakerAuditorBalance;
        if (length == 0 || stakerAuditor[msg.sender][staking.index] != auditor) {
            stakerAuditor[msg.sender].push(auditor);
            stakeTo[msg.sender][auditor] = StakeTo({index: length, balance:amount});
            stakedByInv[auditor][msg.sender] = stakedBy[auditor].length;
            stakedBy[auditor].push(msg.sender);
            stakerAuditorBalance = amount;
        } else {
            stakerAuditorBalance = staking.balance + amount;
            staking.balance = stakerAuditorBalance;
        }

        uint256 auditorBalance = auditorsData[auditor].balance + amount;
        auditorsData[auditor].balance = auditorBalance;
        emit StakeBond(msg.sender, auditor, amount, auditorBalance, stakerAuditorBalance);

        if (doUpdate)
            updateAuditorState(auditor);
    }
    function unstakeBondRequest(address auditor, uint256 amount) external /*onlyActiveAuditor*/ nonReentrant {
        require(auditorsData[auditor].status != AuditorStatus.Freezed, "auditor freezed");
        uint256 auditorId = auditorIds[auditor];
        require(auditorId > 0, "not a auditor");
        require(amount > 0, "amount = 0");
        require(stakeTo[msg.sender][auditor].balance > 0, "no stakes");

        uint256 stakerAuditorBalance = stakeTo[msg.sender][auditor].balance  - amount;
        stakeTo[msg.sender][auditor].balance = stakerAuditorBalance;

        uint256 auditorBalance = auditorsData[auditor].balance - amount;
        auditorsData[auditor].balance = auditorBalance;

        if (cooldownPeriod == 0) {
            token.safeTransfer(msg.sender, amount);
            emit WithdrawBond(msg.sender, amount);
        }
        else {
            WithdrawRequest storage request = pendingWithdrawal[msg.sender];
            request.amount += amount;
            request.releaseTime = block.timestamp + cooldownPeriod;
        }

        if (auditorsData[auditor].status != AuditorStatus.Super && auditorBalance < minStakes) {
            auditorsData[auditor].status = AuditorStatus.Inactive;
            emit AuditorStateChange(auditor, AuditorStatus.Inactive);
        }

        emit UnstakeBondRequest(msg.sender, auditor, amount, auditorBalance, stakerAuditorBalance);
    }
    function withdrawBond() external /*onlyActiveAuditor*/ nonReentrant {
        // uint256 auditorId = auditorIds[msg.sender];
        WithdrawRequest storage withdrawRequest = pendingWithdrawal[msg.sender];
        require(block.timestamp >= withdrawRequest.releaseTime, "please wait");
        uint256 amount = withdrawRequest.amount;
        delete pendingWithdrawal[msg.sender];
        token.safeTransfer(msg.sender, amount);
        emit WithdrawBond(msg.sender, amount);
    }
    function penalize(address auditor, bool unfreezeAuditor, address[] calldata staker, uint256[] calldata amount) external auth nonReentrant {
        require(auditorsData[auditor].status == AuditorStatus.Freezed, "auditor not freezed");
        uint256 length = staker.length;
        require(length == amount.length, "length not matched");
        uint256 i;
        uint256 totalAmount;
        while (i < length) {
            address _staker = staker[i];
            uint256 _amount = amount[i];
            uint256 stakerAuditorBalance = stakeTo[_staker][auditor].balance  - _amount;
            stakeTo[_staker][auditor].balance = stakerAuditorBalance;
            uint256 auditorBalance = auditorsData[auditor].balance - _amount;
            auditorsData[auditor].balance = auditorBalance;
            totalAmount += _amount;

            emit Penalize(auditor, _staker, _amount, auditorBalance, stakerAuditorBalance);

            unchecked { i++; }
        }
        if (unfreezeAuditor) {
            auditorsData[auditor].status = AuditorStatus.Inactive;
            emit AuditorStateChange(auditor, AuditorStatus.Inactive);
        }
        token.safeTransfer(foundation, totalAmount);
    }

    function _transferTokenFrom(uint amount) internal returns (uint256 balance) {
        balance = token.balanceOf(address(this));
        token.safeTransferFrom(msg.sender, address(this), amount);
        balance = token.balanceOf(address(this)) - balance;
    }

    // endorser's functions
    function endorseAuditor(address auditor, bool doUpdate) external {
        uint256 endorserId = auditorIds[msg.sender];
        require(msg.sender != auditor, "cannot self endorse");
        require(endorserId > 0, "endorser is not an auditor");
        require((auditorsData[msg.sender].status == AuditorStatus.Active && auditorsData[msg.sender].endorsementCount >= minEndorsementsRequired) || auditorsData[msg.sender].status == AuditorStatus.Super, "endorser is not an active auditor");
        require(auditorIds[auditor] > 0, "endorsee is not an auditor");

        uint256 length = endorsing[msg.sender].length;
        require(length == 0 || endorsing[msg.sender][endorsingInv[msg.sender][auditor]] != auditor, "already endorsed");
        endorsing[msg.sender].push(auditor);
        endorsingInv[msg.sender][auditor] = length;

        length = endorsedBy[auditor].length;
        endorsedBy[auditor].push(msg.sender);
        endorsedByInv[auditor][msg.sender] = length;

        // endorser may choose not to update, endorsee may call updateAuditorState() to update
        if (doUpdate)
            updateAuditorState(auditor);

        emit EndorseAuditor(msg.sender, auditor);
    }
    function revokeEndorsement(address auditor, bool doUpdate) external {
        uint256 length = endorsing[msg.sender].length;
        uint256 idx = endorsingInv[msg.sender][auditor];
        require(length > 0 && endorsing[msg.sender][idx] == auditor, "not an endorser");
        if (idx < length - 1){
            address lastAuditor = endorsing[msg.sender][length - 1];
            endorsing[msg.sender][idx] = lastAuditor;
            endorsingInv[msg.sender][lastAuditor] = idx;
        }
        delete endorsingInv[msg.sender][auditor];
        endorsing[msg.sender].pop();
        

        length = endorsedBy[auditor].length;
        idx = endorsedByInv[auditor][msg.sender];
        if (idx < length - 1){
            address lastEndorser = endorsedBy[auditor][length - 1];
            endorsedBy[auditor][idx] = lastEndorser;
            endorsedByInv[auditor][lastEndorser] = idx;
        }
        delete endorsedByInv[auditor][msg.sender];
        endorsedBy[auditor].pop();

        // TODO: endorser may choose not to update, others may call updateAuditorState() to disable the auditor
        if (doUpdate)
            updateAuditorState(auditor);

        emit RevokeEndorsement(msg.sender, auditor);
    }

    // anyone can call
    function updateAuditorState(address auditor) public {
        require(auditorsData[auditor].status != AuditorStatus.Freezed, "Auditor freezed");
        (uint256 count, bool isActive) = getUpdatedStatus(auditor);
        AuditorData storage auditorData = auditorsData[auditor];
        auditorData.endorsementCount = count;
        if (auditorData.status != AuditorStatus.Super) {
            AuditorStatus status = isActive ? AuditorStatus.Active : AuditorStatus.Inactive;
            auditorData.status = status;
            emit AuditorStateChange(auditor, status);
        }
    }
    function isActiveAuditor(address auditor) external view returns (bool isActive) {
        (, isActive) = getUpdatedStatus(auditor);
    }
    function getUpdatedStatus(address auditor) internal view returns (uint256 count, bool isActive) {
        uint256 auditorId = auditorIds[auditor];
        require(auditorId > 0, "not an auditor");
        address[] storage array = endorsedBy[auditor];
        uint256 length = array.length;
        for (uint256 i = 0 ; i < length ; i++) {
            AuditorData storage endorser = auditorsData[array[i]];
            if ((endorser.status == AuditorStatus.Active && endorser.endorsementCount >= minEndorsementsRequired) || endorser.status == AuditorStatus.Super) {
                count++;
            }
        }

        AuditorData storage auditorData = auditorsData[auditor];
        isActive = (count >= minEndorsementsRequired && auditorData.balance >= minStakes) || auditorData.status == AuditorStatus.Super;
    }

    function updateAuditorStateInBatch(address[] calldata _auditors) external {
        unchecked {
        uint256 length = _auditors.length;
        for (uint256 i = 0 ; i < length ; i++) {
            updateAuditorState(_auditors[i]);
        }
        }
    }
}
