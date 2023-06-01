// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import "./ProjectInfo.sol";

contract AuditInfo is Authorization, ReentrancyGuard {

    enum AuditResult {FAILED, PASSED}

    uint256 public constant QUORUM_BASE = 10 ** 3;

    struct AuditReport {
        AuditResult auditResult;
        string ipfsCid;
        uint256 timestamp;
    }
    ProjectInfo public projectInfo;
    AuditorInfo public auditorInfo;
    mapping (uint256 => address[]) public packageVersionsAuditors; // packageVersionsAuditors[packageVersionsId][auditorIdx] = auditor;
    mapping (uint256 => AuditReport[][]) public auditHistory; // auditHistory[packageVersionsId][auditorIdx][historyIndex] = AuditReport
    mapping (uint256 => mapping(address => uint256)) public packageVersionsAuditorsInv; // packageVersionsAuditorsInv[packageVersionsId][auditor] = auditorIdx;
    mapping (uint256 => AuditResult) public latestAuditResult; // latestAuditResult[packageVersionsId] = auditResult
    mapping (uint256 => AuditResult) public lastAuditResultBeforeAuditPeriod; // latestAuditResultBeforeAuditPeriod[packageVersionsId] = auditResult


    uint256 public quorum;
    uint256 public minAuditRequired;
    uint256 public auditDuration;

    event AddAuditReport(address indexed auditor, uint256 indexed packageVersionsId, AuditResult auditResult, string ipfsCid);

    modifier onlyActiveAuditor {
        require(auditorInfo.isActiveAuditor(msg.sender), "not from active auditor");
        _;
    }

    constructor(ProjectInfo _projectInfo, AuditorInfo _auditorInfo, uint256 _quorum, uint256 _auditDuration, uint256 _minAuditRequired) {
        require(_quorum < QUORUM_BASE, "invalid quorum");
        projectInfo = _projectInfo;
        auditorInfo = _auditorInfo;
        quorum = _quorum;
        auditDuration = _auditDuration;
        minAuditRequired = _minAuditRequired;
    }
    function setQuorum(uint256 _quorum) external onlyOwner {
        quorum = _quorum;
    }
    function setAuditDuration(uint256 _auditDuration) external onlyOwner {
        auditDuration = _auditDuration;
    }
    function setMinAuditRequired(uint256 _minAuditRequired) external onlyOwner {
        minAuditRequired = _minAuditRequired;
    }

    function auditHistoryAuditorLength(uint256 packageVersionsId) external view returns (uint256 length)  {
        length = auditHistory[packageVersionsId].length;
    }
    function auditHistoryLength(uint256 packageVersionsId, address auditor) external view returns (uint256 length)  {
        if (packageVersionsAuditors[packageVersionsId][0] == auditor) {
            length = auditHistory[packageVersionsId][0].length;
        } else {
            uint256 auditorIdx = packageVersionsAuditorsInv[packageVersionsId][auditor];
            if (auditorIdx > 0) {
                length = auditHistory[packageVersionsId][auditorIdx].length;
            } else {
                length = 0;
            }
        }
    }
    function addAuditReport(uint256 packageVersionsId, AuditResult auditResult, string calldata ipfsCid) external onlyActiveAuditor {
        uint256 auditorIdx = auditHistory[packageVersionsId].length;
        if (auditorIdx == 0) {
            packageVersionsAuditors[packageVersionsId].push(msg.sender);
            packageVersionsAuditorsInv[packageVersionsId][msg.sender] = auditorIdx;
            auditHistory[packageVersionsId].push();
        } else {
            uint256 auditorIdx2 = packageVersionsAuditorsInv[packageVersionsId][msg.sender];
            if (auditorIdx2 == 0) {
                packageVersionsAuditors[packageVersionsId].push(msg.sender);
                packageVersionsAuditorsInv[packageVersionsId][msg.sender] = auditorIdx;
                auditHistory[packageVersionsId].push();
            } else {
                auditorIdx = auditorIdx2;
            }
        }
        auditHistory[packageVersionsId][auditorIdx].push(
            AuditReport({
                auditResult: auditResult,
                ipfsCid: ipfsCid,
                timestamp: block.timestamp
            })
        );
        emit AddAuditReport(msg.sender, packageVersionsId, auditResult, ipfsCid);

        uint256 length = auditHistory[packageVersionsId].length;
        if (length >= minAuditRequired) {
            uint256 required = length * quorum / QUORUM_BASE;
            AuditResult finalResult = AuditResult.FAILED;
            for (uint256 i = 0 ; i < length ; i++) {
                AuditReport[] storage array = auditHistory[packageVersionsId][i];
                if (array[array.length - 1].auditResult == AuditResult.PASSED) {
                    required--;
                    if (required == 0) {
                        finalResult = AuditResult.PASSED;
                        break;
                    }
                }
            }
            latestAuditResult[packageVersionsId] = finalResult;
            (,,,,uint256 timestamp) = projectInfo.packageVersions(packageVersionsId);
            if (block.timestamp < timestamp + auditDuration) {
                lastAuditResultBeforeAuditPeriod[packageVersionsId] = finalResult;
            }
        }
    }
    function getLastAuditResult(uint256 packageVersionsId) external view returns (address[] memory auditors, AuditResult[] memory results) {
        uint256 length = auditHistory[packageVersionsId].length;
        auditors = new address[](length);
        results = new AuditResult[](length);
        for (uint256 i = 0 ; i < length ; i++) {
            auditors[i] = packageVersionsAuditors[packageVersionsId][i];
            AuditReport[] storage array = auditHistory[packageVersionsId][i];
            results[i] = array[array.length - 1].auditResult;
        }
    }
}