import 'mocha';
import {Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print, privateKeys } from './helper';

describe('## SC-Contract', async function() {

    let accounts: string[];
    let wallet: Wallet;
    let result: IDeployResult;
    let tokenInfoContract: Contracts.Scom;
    let auditorInfoContract: Contracts.AuditorInfo;

    let deployer: string;
    let minter: string;
    let projectOwner: string;
    let auditor1: string;
    let auditor2: string;
    let auditor3: string;
    let auditor4: string;
    let nobody: string;

    before('deploy', async () => {
        wallet = new Wallet(getProvider());
        accounts = await wallet.accounts;
        deployer = accounts[0];
        minter = accounts[1];
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
                minStakes: 1,
                minEndorsementsRequired: 2,
                cooldownPeriod: 60,
                auditors: [auditor1, auditor2]
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
        tokenInfoContract = new Contracts.Scom(wallet, result.token);
        auditorInfoContract = new Contracts.AuditorInfo(wallet, result.auditor);
    });
    
    it('generic audit 1', async function(){
        wallet.defaultAccount = minter;
        await tokenInfoContract.mint({account: auditor3, amount: Utils.toDecimals(1)});
        
        wallet.defaultAccount = auditor3;
        await tokenInfoContract.approve({spender: auditorInfoContract.address, amount: Utils.toDecimals(1)});
        let receipt = await auditorInfoContract.registerAuditor(Utils.toDecimals(1));

        let event1 = auditorInfoContract.parseAddAuditorEvent(receipt);
        assertEqual(event1.length, 1);
        assertEqual(event1[0], {auditorId: 3, auditor:auditor3}, true);
        let event2 = auditorInfoContract.parseStakeBondEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {sender:auditor3, amount: Utils.toDecimals(1), newBalance: Utils.toDecimals(1)}, true);

        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 0,
            balance: Utils.toDecimals(1),
            endorsementCount: 0
        });
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor3), false);

        wallet.defaultAccount = auditor1;
        receipt = await auditorInfoContract.endorseAuditor({auditor:auditor3, doUpdate:true});
        let event3 = auditorInfoContract.parseEndorseAuditorEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {endorser: auditor1, endorsee:auditor3}, true);
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor3), false);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 0,
            balance: Utils.toDecimals(1),
            endorsementCount: 1
        });
        
        wallet.defaultAccount = auditor2;
        receipt = await auditorInfoContract.endorseAuditor({auditor:auditor3, doUpdate:false});
        let event4 = auditorInfoContract.parseEndorseAuditorEvent(receipt);
        assertEqual(event4.length, 1);
        assertEqual(event4[0], {endorser: auditor2, endorsee:auditor3}, true);
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor3), true);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 0,
            balance: Utils.toDecimals(1),
            endorsementCount: 1
        });
        
        wallet.defaultAccount = nobody;
        await auditorInfoContract.updateAuditorState(auditor3);
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor3), true);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 1,
            balance: Utils.toDecimals(1),
            endorsementCount: 2
        });
    });
    it('generic audit 2', async function(){
        wallet.defaultAccount = minter;
        await tokenInfoContract.mint({account: auditor4, amount: Utils.toDecimals(1)});
        
        wallet.defaultAccount = auditor4;
        await tokenInfoContract.approve({spender: auditorInfoContract.address, amount: Utils.toDecimals(1)});
        let receipt = await auditorInfoContract.registerAuditor(Utils.toDecimals(1));

        wallet.defaultAccount = auditor1;
        receipt = await auditorInfoContract.endorseAuditor({auditor:auditor4, doUpdate:true});
        
        wallet.defaultAccount = auditor3;
        receipt = await auditorInfoContract.endorseAuditor({auditor:auditor4, doUpdate:true});
        
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor4), true);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 1,
            balance: Utils.toDecimals(1),
            endorsementCount: 2
        });
    });
    it('withdraw endorsement', async function(){
        
        wallet.defaultAccount = auditor1;
        let receipt = await auditorInfoContract.withdrawnEndorsement({auditor: auditor3, doUpdate:false});
        let event = auditorInfoContract.parseWithdrawnEndorsementEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {endorser: auditor1, endorsee:auditor3}, true);
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor3), false);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 1,
            balance: Utils.toDecimals(1),
            endorsementCount: 2
        });
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor4), true);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 1,
            balance: Utils.toDecimals(1),
            endorsementCount: 2
        });

        wallet.defaultAccount = nobody;
        await auditorInfoContract.updateAuditorState(auditor3);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 0,
            balance: Utils.toDecimals(1),
            endorsementCount: 1
        });
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor4), false);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 1,
            balance: Utils.toDecimals(1),
            endorsementCount: 2
        });

        await auditorInfoContract.updateAuditorState(auditor4);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 0,
            balance: Utils.toDecimals(1),
            endorsementCount: 1
        });


    });
});