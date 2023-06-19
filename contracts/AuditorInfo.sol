// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import "./Authorization.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

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
