// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import "./Authorization.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract AuditorInfo is Authorization, ReentrancyGuard {
    using SafeERC20 for IERC20;

    enum AuditorStatus {Active, Inactive}
    struct AuditorData {
        // address auditor;
        AuditorStatus status;
        uint256 balance;
        uint256 endorsementCount;
    }
    struct WithdrawRequest {
        uint256 amount;
        uint256 releaseTime;
    }

    IERC20 public immutable token;
    uint256 public auditorIdCount;
    uint256 public minStakes;
    uint256 public minEndorsementsRequired;
    uint256 public cooldownPeriod;
    uint256 public constant MAX_COOLDOWN_PERIOD = 604800; // 1 week

    mapping(address => AuditorData) public auditorsData; //auditorsData[auditor] = AuditorData
    mapping(uint256 => address) public auditors; //auditors[auditorId] = auditor
    mapping(address => uint256) public auditorIds; //auditorIds[address] = id
    mapping(address => WithdrawRequest) public pendingWithdrawal; //pendingWithdrawal[auditor] = WithdrawRequest
    mapping(address => address[]) public endorsing; //endorsing[from/endorser][idx] = to/endorsee
    mapping(address => mapping(address => uint256)) public endorsingInv; //endorsingInv[from/endorser][to/endorsee] = idx
    mapping(address => address[]) public endorsedBy; //endorsedBy[to/endorsee][idx2] = from/endorser
    mapping(address => mapping(address => uint256)) public endorsedByInv; //endorsedBy[to/endorsee][from/endorser] = idx2

    event AddAuditor(address indexed auditor);
    event DisableAuditor(address indexed auditor);
    event SetMinStake(uint256 minStake);
    event SetMinEndorsementsRequired(uint256 minEndorsementsRequired);
    event SetCooldownPeriod(uint256 cooldownPeriod);
    event StakeBond(address indexed sender, uint256 amount, uint256 newBalance);
    event UnstakeBondRequest(address indexed sender, uint256 amount, uint256 newBalance);
    event WithdrawBond(address indexed sender, uint256 amount);
    event EndorseAuditor(address indexed endorser, address indexed endorsee);

    constructor(IERC20 _token, uint256 _minStakes, uint256 _minEndorsementsRequired, uint256 _cooldownPeriod) {
        token = _token;
        minStakes = _minStakes;
        minEndorsementsRequired = _minEndorsementsRequired;
        cooldownPeriod = _cooldownPeriod;
    }

    function endorsingLength(address endorser) external view returns (uint256 length) {
        length = endorsing[endorser].length;
    }
    function endorsedByLength(address endorsee) external view returns (uint256 length) {
        length = endorsedBy[endorsee].length;
    }
    modifier onlyActiveAuditor {
        require(auditorIds[msg.sender] > 0 && auditorsData[msg.sender].status == AuditorStatus.Active, "not from active auditor");
        _;
    }
    function isActiveAuditor(address account) external view returns (bool) {
        return auditorIds[account] > 0 && auditorsData[account].status == AuditorStatus.Active;
    }

    function setMinStakes(uint256 _minStakes) external onlyOwner {
        minStakes = _minStakes;
        emit SetMinStake(_minStakes);
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
        if (auditorIdStart + length > auditorIdCount + 1) {
            length = auditorIdCount - auditorIdStart + 1;
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

    function registerAuditor() external {
        _addAuditor(msg.sender);
    }
    function addAuditor(address auditor) external onlyOwner {
        _addAuditor(auditor);
    }
    function _addAuditor(address auditor) internal returns (uint256 auditorId) {
        auditorId = auditorIds[auditor];
        if (auditorId == 0) {
            auditorId = ++auditorIdCount;
            auditorsData[auditor] = AuditorData({
                status: AuditorStatus.Inactive,
                balance: 0,
                endorsementCount: 0
            });
            auditors[auditorId] = auditor;
            auditorIds[auditor] = auditorId;
        }
        emit AddAuditor(auditor);
    }

    function stakeBond(uint256 amount, bool doUpdate) external onlyActiveAuditor nonReentrant {
        require(auditorIds[msg.sender] > 0, "not a auditor");
        require(amount > 0, "amount = 0");
        amount = _transferTokenFrom(amount);
        // uint256 auditorId = auditorIds[msg.sender];
        uint256 newBalance = auditorsData[msg.sender].balance + amount;
        auditorsData[msg.sender].balance = newBalance;
        emit StakeBond(msg.sender, amount, newBalance);

        if (doUpdate)
            updateAudtorState(msg.sender);
    }
    function unstakeBondRequest(uint256 amount) external onlyActiveAuditor nonReentrant {
        uint256 auditorId = auditorIds[msg.sender];
        require(auditorId > 0, "not a auditor");
        require(amount > 0, "amount = 0");
        uint256 newBalance = auditorsData[msg.sender].balance - amount;
        auditorsData[msg.sender].balance = newBalance;
        if (cooldownPeriod == 0) {
            token.safeTransfer(msg.sender, amount);
            emit WithdrawBond(msg.sender, amount);
        }
        else {
            WithdrawRequest storage request = pendingWithdrawal[msg.sender];
            request.amount += amount;
            request.releaseTime = block.timestamp + cooldownPeriod;
        }

        if (newBalance < minStakes) {
            auditorsData[msg.sender].status = AuditorStatus.Inactive;
        }

        emit UnstakeBondRequest(msg.sender, amount, newBalance);
    }
    function withdrawBond() external onlyActiveAuditor nonReentrant {
        // uint256 auditorId = auditorIds[msg.sender];
        WithdrawRequest storage withdrawRequest = pendingWithdrawal[msg.sender];
        require(block.timestamp >= withdrawRequest.releaseTime, "please wait");
        uint256 amount = withdrawRequest.amount;
        delete pendingWithdrawal[msg.sender];
        token.safeTransfer(msg.sender, amount);
        emit WithdrawBond(msg.sender, amount);
    }

    function _transferTokenFrom(uint amount) internal returns (uint256 balance) {
        balance = token.balanceOf(address(this));
        token.safeTransferFrom(msg.sender, address(this), amount);
        balance = token.balanceOf(address(this)) - balance;
    }

    function endorseAuditor(address auditor, bool doUpdate) external {
        uint256 auditorId = auditorIds[msg.sender];
        require(auditorId > 0, "endorser not an auditor");
        require(auditorsData[auditor].endorsementCount >= minEndorsementsRequired, "min endorsement not met");
        require(auditorIds[auditor] > 0, "endorsee not an auditor");
        uint256 length = endorsing[msg.sender].length;
        require(length == 0 || endorsing[msg.sender][endorsingInv[msg.sender][auditor]] != auditor, "already endorsed");
        endorsing[msg.sender].push(auditor);
        endorsingInv[msg.sender][auditor] = length;
        length = endorsedBy[auditor].length;
        endorsedBy[auditor].push(msg.sender);
        endorsedByInv[auditor][msg.sender] = length;

        if (doUpdate)
            updateAudtorState(auditor);
        emit EndorseAuditor(msg.sender, auditor);
    }
    function removeEndorsement(address auditor, bool doUpdate) external {
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

        if (doUpdate)
            updateAudtorState(auditor);
    }
    function updateAudtorState(address auditor) public {
        uint256 auditorId = auditorIds[auditor];
        require(auditorId > 0, "not an auditor");
        uint256 length = endorsedBy[auditor].length;
        uint256 count;
        for (uint256 i = 0 ; i < length ; i++) {
            AuditorData storage endorser = auditorsData[endorsedBy[auditor][i]];
            if (endorser.status == AuditorStatus.Active || endorser.endorsementCount >= minEndorsementsRequired ) {
                count++;
            }
        }
        
        AuditorData storage auditorData = auditorsData[auditor];
        auditorData.endorsementCount = count;
        if (count < minEndorsementsRequired && auditorsData[auditor].balance >= minStakes) {
            auditorData.status = AuditorStatus.Inactive;
        }
    }
    function updateEndorsementCountBatch(address[] calldata _auditors) external {
        uint256 length = _auditors.length;
        for (uint256 i = 0 ; i < length ; i++) {
            updateAudtorState(_auditors[i]);
        }
    }
}