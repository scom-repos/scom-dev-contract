import 'mocha';
import {BigNumber, Utils, Wallet} from "@ijstech/eth-wallet";
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print } from './helper';

describe('## Audit', async function() {
    let accounts: string[];
    let wallet: Wallet;
    let result: IDeployResult;

    let domainInfoContract: Contracts.DomainInfo;
    let tokenInfoContract: Contracts.Scom;   
    let projectInfoContract: Contracts.ProjectInfo;
    let auditorInfoContract: Contracts.AuditorInfo;
    let auditInfoContract: Contracts.AuditInfo;
    
    let deployer: string;
    let minter: string;
    let foundation: string;
    let projectOwner: string;
    let auditor1: string;
    let auditor2: string;
    let auditor3: string;
    let auditor4: string;
    let nobody: string;

    let projectId: BigNumber;
    let packageId: BigNumber;
    let packageVersionId: BigNumber;

    before('deploy', async () => {
        wallet = new Wallet(getProvider());
        accounts = await wallet.accounts;
        deployer = accounts[0];
        minter = accounts[1];
        foundation = accounts[1];
        projectOwner = accounts[2];

        auditor1 = accounts[3];
        auditor2 = accounts[4];
        auditor3 = accounts[5];
        auditor4 = accounts[6];
        nobody = accounts[7];

        wallet.defaultAccount = deployer;
        const deployOptions:IDeployOptions = {
            token: {
                minter: minter,
                initSupplyTo: minter,
                initSupply: '0',
                totalSupply: '100000000'
            },
            auditorInfo: {
                foundation: foundation,
                minStakes: 1,
                minEndorsementsRequired: 2,
                cooldownPeriod: 60,
                auditors: [auditor1, auditor2, auditor3, auditor4]
            },
            projectInfo: {
                admins: []
            },
            audit: {
                warningThreshold: 500, // base 10e3
                passingThreshold: 700, // base 10e3
                auditDuration: 14 * 24*60*60,  // 14 days
                minAuditRequired: 3
            },
            // vault: {
            //     amm: '',
            //     foundation: '',
            // }
        }
        result = await deploy(wallet, deployOptions, (msg)=>{
            console.dir(msg);
        });
        projectInfoContract = new Contracts.ProjectInfo(wallet, result.project);
        auditInfoContract = new Contracts.AuditInfo(wallet, result.audit);
    });
    
    before('project setup', async function() {
        wallet.defaultAccount = projectOwner;
        let newProjectReceipt = await projectInfoContract.newProject({name: "scom", ipfsCid: "ipfs1"});
        let newProjectEvent = projectInfoContract.parseNewProjectEvent(newProjectReceipt);
        assertEqual(newProjectEvent.length, 1);
        assertEqual(newProjectEvent[0], {
            projectId: 0,
            owner: projectOwner,
            name: "scom",
            ipfsCid: "ipfs1"
        }, true);
        projectId = newProjectEvent[0].projectId;

        let newPackageReceipt = await projectInfoContract.newPackage({projectId: projectId, category:'', name: 'portal', ipfsCid: 'ipfs2'});
        let newPackageEvent = projectInfoContract.parseNewPackageEvent(newPackageReceipt);
        assertEqual(newPackageEvent.length, 1);
        assertEqual(newPackageEvent[0], {
            projectId: 0,
            packageId: 0,
            name: "portal",
            ipfsCid: "ipfs2"
        }, true);
        packageId = newPackageEvent[0].packageId;

        let newPackageVersionReceipt = await projectInfoContract.newPackageVersion({projectId:projectId, packageId:packageId, version:{major:0,minor:1,patch:0}, ipfsCid:"ipfs3"})
        let newPackageVersionEvent = projectInfoContract.parseNewPackageVersionEvent(newPackageVersionReceipt);
        assertEqual(newPackageVersionEvent.length, 1);
        assertEqual(newPackageVersionEvent[0], {
            packageId: 0,
            packageVersionId: 0,
            version: { major: 0, minor: 1, patch: 0 }
        }, true);
        packageVersionId = newPackageVersionEvent[0].packageVersionId;
    });
    it('non-auditor should fail', async function() {
        wallet.defaultAccount = nobody;
        await expectToFail(auditInfoContract.addAuditReport({packageVersionsId:packageVersionId, auditResult: 2, ipfsCid: "ipfs4"}), "not an auditor");//"not from active auditor");
    });
    it('auditor 1 passes', async function() {
        wallet.defaultAccount = auditor1;
        let receipt = await auditInfoContract.addAuditReport({packageVersionsId:packageVersionId, auditResult: 2, ipfsCid: "ipfs4"});
        let addAuditReportEvent = auditInfoContract.parseAddAuditReportEvent(receipt);
        assertEqual(addAuditReportEvent.length, 1);
        assertEqual(addAuditReportEvent[0], {
            auditor: auditor1,
            packageVersionsId: packageVersionId,
            auditResult: 2,
            ipfsCid: "ipfs4"
        }, true);
        assertEqual(await auditInfoContract.getLastAuditResult(packageVersionId), {auditors:[auditor1], results: [2]});
        assertEqual(await auditInfoContract.auditHistoryAuditorLength(packageVersionId), 1);
        assertEqual(await auditInfoContract.auditHistoryLength({packageVersionsId: packageVersionId, auditor:auditor1}), 1);
        assertEqual(await auditInfoContract.latestAuditResult(packageVersionId), 0);
        assertEqual(await auditInfoContract.lastAuditResultBeforeAuditPeriod(packageVersionId), 0);
    });
    it('auditor 2 rejects', async function() {
        wallet.defaultAccount = auditor2;
        let receipt = await auditInfoContract.addAuditReport({packageVersionsId:packageVersionId, auditResult: 0, ipfsCid: "ipfs5"});
        assertEqual(await auditInfoContract.getLastAuditResult(packageVersionId), {auditors:[auditor1,auditor2], results: [2,0]});
        assertEqual(await auditInfoContract.auditHistoryAuditorLength(packageVersionId), 2);
        assertEqual(await auditInfoContract.auditHistoryLength({packageVersionsId: packageVersionId, auditor:auditor2}), 1);
        assertEqual(await auditInfoContract.latestAuditResult(packageVersionId), 0);
        assertEqual(await auditInfoContract.lastAuditResultBeforeAuditPeriod(packageVersionId), 0);
    });
    it('auditor 3 passes', async function() {
        wallet.defaultAccount = auditor3;
        let receipt = await auditInfoContract.addAuditReport({packageVersionsId:packageVersionId, auditResult: 2, ipfsCid: "ipfs6"});
        assertEqual(await auditInfoContract.getLastAuditResult(packageVersionId), {auditors:[auditor1,auditor2,auditor3], results: [2,0,2]});
        assertEqual(await auditInfoContract.auditHistoryAuditorLength(packageVersionId), 3);
        assertEqual(await auditInfoContract.auditHistoryLength({packageVersionsId: packageVersionId, auditor:auditor3}), 1);
        assertEqual(await auditInfoContract.latestAuditResult(packageVersionId), 1); // 2 out of 3, warning
        assertEqual(await auditInfoContract.lastAuditResultBeforeAuditPeriod(packageVersionId), 1);
    });
    it('auditor 4 passes after audit period', async function() {
        await wallet.setBlockTime((await wallet.getBlockTimestamp()) + 14*24*60*60 + 10);
        wallet.defaultAccount = auditor4;
        let receipt = await auditInfoContract.addAuditReport({packageVersionsId:packageVersionId, auditResult: 2, ipfsCid: "ipfs7"});
        assertEqual(await auditInfoContract.getLastAuditResult(packageVersionId), {auditors:[auditor1,auditor2,auditor3,auditor4], results: [2,0,2,2]});
        assertEqual(await auditInfoContract.auditHistoryAuditorLength(packageVersionId), 4);
        assertEqual(await auditInfoContract.auditHistoryLength({packageVersionsId: packageVersionId, auditor:auditor4}), 1);
        assertEqual(await auditInfoContract.latestAuditResult(packageVersionId), 2); // 3 out of 4, passed
        assertEqual(await auditInfoContract.lastAuditResultBeforeAuditPeriod(packageVersionId), 1);
    });
    it('auditor 3 changes his mind', async function() {
        wallet.defaultAccount = auditor3;
        let receipt = await auditInfoContract.addAuditReport({packageVersionsId:packageVersionId, auditResult: 0, ipfsCid: "ipfs8"});
        assertEqual(await auditInfoContract.getLastAuditResult(packageVersionId), {auditors:[auditor1,auditor2,auditor3,auditor4], results: [2,0,0,2]});
        assertEqual(await auditInfoContract.auditHistoryAuditorLength(packageVersionId), 4);
        assertEqual(await auditInfoContract.auditHistoryLength({packageVersionsId: packageVersionId, auditor:auditor3}), 2);
        assertEqual(await auditInfoContract.latestAuditResult(packageVersionId), 1); // 2 out of 4, warning
        assertEqual(await auditInfoContract.lastAuditResultBeforeAuditPeriod(packageVersionId), 1);
    });
    it('set parameters', async function() {
        wallet.defaultAccount = deployer;

        let receipt = await auditInfoContract.setWarningThreshold(400);
        let event1 = auditInfoContract.parseSetWarningThresholdEvent(receipt);
        assertEqual(event1.length, 1);
        assertEqual(event1[0], {warningThreshold: 400},  true);

        receipt = await auditInfoContract.setPassingThreshold(500);
        let event2 = auditInfoContract.parseSetPassingThresholdEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {passingThreshold: 500},  true);

        assertEqual(await auditInfoContract.latestAuditResult(packageVersionId), 2); // 2 out of 4

        receipt = await auditInfoContract.setAuditDuration(15*24*60*60);
        let event3 = auditInfoContract.parseSetAuditDurationEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {auditDuration: 1296000},  true);

        receipt = await auditInfoContract.setMinAuditRequired(5);
        let event4 = auditInfoContract.parseSetMinAuditRequiredEvent(receipt);
        assertEqual(event4.length, 1);
        assertEqual(event4[0], {minAuditRequired: 5},  true);
      
        wallet.defaultAccount = nobody;
        await expectToFail(auditInfoContract.setWarningThreshold(0));
        await expectToFail(auditInfoContract.setPassingThreshold(0));
        await expectToFail(auditInfoContract.setAuditDuration(0));
        await expectToFail(auditInfoContract.setMinAuditRequired(0));
    });
});