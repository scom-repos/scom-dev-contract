import 'mocha';
import {Utils, Wallet} from "@ijstech/eth-wallet";
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print, privateKeys } from './helper';

describe('## SC-Contract', async function() {
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
    let projectOwner: string;
    let auditor1: string;
    let auditor2: string;
    let auditor3: string;
    before('deploy', async () => {
        wallet = new Wallet(getProvider());   
        accounts = await wallet.accounts;
        deployer = accounts[0];
        minter = accounts[1];
        projectOwner = accounts[2];

        auditor1 = accounts[3];
        auditor2 = accounts[4];
        auditor3 = accounts[5];

        wallet.defaultAccount = deployer;
        const deployOptions:IDeployOptions = {
            token: {
                minter: minter,
                initSupplyTo: minter,
                initSupply: '0',
                totalSupply: '100000000'
            },
            auditorInfo: {
                cooldownPeriod: 60,
                auditors: [auditor1, auditor2, auditor3]
            },
            projectInfo: {
                admins: []
            },
            audit: {
                quorum: 500, // base 10e3
                auditDuration: 14 * 24*60*60,  // 14 days
                minAuditRequired: 3
            }
        }
        result = await deploy(wallet, deployOptions, (msg)=>{
            console.dir(msg);
        });
        projectInfoContract = new Contracts.ProjectInfo(wallet, result.project);
        auditInfoContract = new Contracts.AuditInfo(wallet, result.audit);
    });
    
    it('', async function(){
        wallet.defaultAccount = projectOwner;
        let newProjectReceipt = await projectInfoContract.newProject({name: "scom", ipfsCid: "ipfs1"});
        let newProjectEvent = projectInfoContract.parseNewProjectEvent(newProjectReceipt)[0];
print(newProjectEvent);

        let newPackageReceipt = await projectInfoContract.newPackage({projectId: 0, name: 'portal', ipfsCid: 'ipfs2'});
        let newPackageEvent = projectInfoContract.parseNewPackageEvent(newPackageReceipt)[0];
print(newPackageEvent);
        let newPackageVersionReceipt = await projectInfoContract.newPackageVersion({projectId:newProjectEvent.projectId, packageId:newPackageEvent.packageId, version:{major:0,minor:1,patch:0}, ipfsCid:"ipfs3"})
        let newPackageVersionEvent = projectInfoContract.parseNewPackageVersionEvent(newPackageVersionReceipt)[0];
print(newPackageVersionEvent);
        let packageVersionId = newPackageVersionEvent.packageVersionId;

        wallet.defaultAccount = auditor1;
        let receipt = await auditInfoContract.addAuditReport({packageVersionsId:packageVersionId, auditResult: 1, ipfsCid: "ipfs4"})
        print(auditInfoContract.parseAddAuditReportEvent(receipt)[0])
        print(await auditInfoContract.getLastAuditResult(packageVersionId));
        print(await auditInfoContract.auditHistoryAuditorLength(packageVersionId));
        print(await auditInfoContract.auditHistoryLength({packageVersionsId: packageVersionId, auditor:auditor1}));
        print(await auditInfoContract.latestAuditResult(packageVersionId));
        print(await auditInfoContract.lastAuditResultBeforeAuditPeriod(packageVersionId));

        console.log('auditor 2');
        wallet.defaultAccount = auditor2;
        receipt = await auditInfoContract.addAuditReport({packageVersionsId:packageVersionId, auditResult: 0, ipfsCid: "ipfs5"})
        print(auditInfoContract.parseAddAuditReportEvent(receipt)[0])
        print(await auditInfoContract.getLastAuditResult(packageVersionId));
        print(await auditInfoContract.auditHistoryAuditorLength(packageVersionId));
        print(await auditInfoContract.auditHistoryLength({packageVersionsId: packageVersionId, auditor:auditor2}));
        print(await auditInfoContract.latestAuditResult(packageVersionId));
        print(await auditInfoContract.lastAuditResultBeforeAuditPeriod(packageVersionId));

        console.log('auditor 3');
        wallet.defaultAccount = auditor3;
        receipt = await auditInfoContract.addAuditReport({packageVersionsId:packageVersionId, auditResult: 1, ipfsCid: "ipfs6"})
        print(auditInfoContract.parseAddAuditReportEvent(receipt)[0])
        print(await auditInfoContract.getLastAuditResult(packageVersionId));
        print(await auditInfoContract.auditHistoryAuditorLength(packageVersionId));
        print(await auditInfoContract.auditHistoryLength({packageVersionsId: packageVersionId, auditor:auditor3}));
        print(await auditInfoContract.latestAuditResult(packageVersionId));
        print(await auditInfoContract.lastAuditResultBeforeAuditPeriod(packageVersionId));
    });
});