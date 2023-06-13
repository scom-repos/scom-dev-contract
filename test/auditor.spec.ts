import 'mocha';
import {Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print } from './helper';

describe('## SC-Contract', async function() {

    let accounts: string[];
    let wallet: Wallet;
    let result: IDeployResult;
    let tokenInfoContract: Contracts.Scom;
    let auditorInfoContract: Contracts.AuditorInfo;

    let deployer: string;
    let minter: string;
    let foundation: string;
    let projectOwner: string;
    let auditor1: string;
    let auditor2: string;
    let auditor3: string;
    let auditor4: string;
    let staker1: string;
    let staker2: string;
    let nobody: string;

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

        staker1 = accounts[7];
        staker2 = accounts[8];

        nobody = accounts[9];

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

        // stake / register
        wallet.defaultAccount = auditor3;
        await tokenInfoContract.approve({spender: auditorInfoContract.address, amount: Utils.toDecimals(1)});
        let receipt = await auditorInfoContract.registerAuditor(Utils.toDecimals(1));

        let event1 = auditorInfoContract.parseAddAuditorEvent(receipt);
        assertEqual(event1.length, 1);
        assertEqual(event1[0], {auditorId: 3, auditor:auditor3}, true);
        let event2 = auditorInfoContract.parseStakeBondEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {sender:auditor3, auditor: auditor3, amount: Utils.toDecimals(1), auditorBalance: Utils.toDecimals(1), stakerAuditorBalance: Utils.toDecimals(1)}, true);

        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 0,
            balance: Utils.toDecimals(1),
            endorsementCount: 0
        });
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor3), false);

        // auditor 1 endorses auditor 3
        wallet.defaultAccount = auditor1;
        receipt = await auditorInfoContract.endorseAuditor({auditor:auditor3, doUpdate:true});
        let event3 = auditorInfoContract.parseEndorseAuditorEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {endorser: auditor1, endorsee:auditor3}, true);
        assertEqual(await auditorInfoContract.endorsing({param1:auditor1, param2:0}), auditor3);
        assertEqual(await auditorInfoContract.endorsingInv({param1:auditor1, param2:auditor3}), 0);
        assertEqual(await auditorInfoContract.endorsedBy({param1:auditor3, param2:0}), auditor1);
        assertEqual(await auditorInfoContract.endorsedByInv({param1:auditor3, param2:auditor1}), 0);
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor3), false);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 0,
            balance: Utils.toDecimals(1),
            endorsementCount: 1
        });

        // auditor 2 endorses auditor 3
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

        // update auditor status        
        wallet.defaultAccount = nobody;
        await auditorInfoContract.updateAuditorState(auditor3);
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor3), true);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 1,
            balance: Utils.toDecimals(1),
            endorsementCount: 2
        });
    });
    it('generic auditor 2', async function(){
        
        wallet.defaultAccount = auditor4;
        let receipt = await auditorInfoContract.registerAuditor(Utils.toDecimals(0));

        wallet.defaultAccount = auditor1;
        receipt = await auditorInfoContract.endorseAuditor({auditor:auditor4, doUpdate:true});

        // auditor 3 endorses auditor 4
        wallet.defaultAccount = auditor3;
        receipt = await auditorInfoContract.endorseAuditor({auditor:auditor4, doUpdate:true});

        
        assertEqual(await auditorInfoContract.endorsing({param1:auditor1, param2:1}), auditor4);
        assertEqual(await auditorInfoContract.endorsingInv({param1:auditor1, param2:auditor4}), 1);
        assertEqual(await auditorInfoContract.endorsedBy({param1:auditor4, param2:1}), auditor3);
        assertEqual(await auditorInfoContract.endorsedByInv({param1:auditor4, param2:auditor3}), 1);

        assertEqual(await auditorInfoContract.isActiveAuditor(auditor4), false);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 0,
            balance: Utils.toDecimals(0),
            endorsementCount: 2
        });

        // staker2 stakes to auditor4
        wallet.defaultAccount = minter;
        await tokenInfoContract.mint({account: staker2,  amount: Utils.toDecimals(1)});
        wallet.defaultAccount = staker2;
        await tokenInfoContract.approve({spender: auditorInfoContract.address, amount: Utils.toDecimals(1)});
        let receipt2 = await auditorInfoContract.stakeBond({auditor: auditor4, amount: Utils.toDecimals(1), doUpdate: true});

        let event2 = auditorInfoContract.parseStakeBondEvent(receipt2);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {sender:staker2, auditor: auditor4, amount: Utils.toDecimals(1), auditorBalance: Utils.toDecimals(1), stakerAuditorBalance: Utils.toDecimals(1)}, true);

        assertEqual(await auditorInfoContract.isActiveAuditor(auditor4), true);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 1,
            balance: Utils.toDecimals(1),
            endorsementCount: 2
        });

        assertEqual(await auditorInfoContract.stakerAuditor({param1:staker2, param2:0}), auditor4);
        assertEqual(await auditorInfoContract.stakeTo({param1:staker2, param2:auditor4}),{index:new BigNumber(0), balance:Utils.toDecimals(1)});
        assertEqual(await auditorInfoContract.stakedBy({param1: auditor4, param2: 0}), staker2);
        assertEqual(await auditorInfoContract.stakedByInv({param1: auditor4, param2: staker2}), 0);

        // staker1 stakes to auditor3, auditor3 has two stakers
        wallet.defaultAccount = minter;
        await tokenInfoContract.mint({account: staker1,  amount: Utils.toDecimals(1)});
        wallet.defaultAccount = staker1;
        await tokenInfoContract.approve({spender: auditorInfoContract.address, amount: Utils.toDecimals(1)});
        receipt2 = await auditorInfoContract.stakeBond({auditor: auditor3, amount: Utils.toDecimals(1), doUpdate: true});

        assertEqual(await auditorInfoContract.stakerAuditor({param1:staker1, param2:0}), auditor3);
        assertEqual(await auditorInfoContract.stakeTo({param1:staker1, param2:auditor3}),{index:new BigNumber(0), balance:Utils.toDecimals(1)});
        assertEqual(await auditorInfoContract.stakedBy({param1: auditor3, param2: 1}), staker1);
        assertEqual(await auditorInfoContract.stakedByInv({param1: auditor3, param2: staker1}), 1);

        assertEqual(await auditorInfoContract.stakedBy({param1: auditor3, param2: 0}), auditor3);
        assertEqual(await auditorInfoContract.stakedByInv({param1: auditor3, param2: auditor3}), 0);

        // staker1 stakes to auditor4, staker1 stakes to two auditors
        wallet.defaultAccount = minter;
        await tokenInfoContract.mint({account: staker1,  amount: Utils.toDecimals(1)});
        wallet.defaultAccount = staker1;
        await tokenInfoContract.approve({spender: auditorInfoContract.address, amount: Utils.toDecimals(1)});
        receipt2 = await auditorInfoContract.stakeBond({auditor: auditor4, amount: Utils.toDecimals(1), doUpdate: true});

        assertEqual(await auditorInfoContract.stakerAuditor({param1:staker1, param2:1}), auditor4);
        assertEqual(await auditorInfoContract.stakeTo({param1:staker1, param2:auditor4}),{index:new BigNumber(1), balance:Utils.toDecimals(1)});
        assertEqual(await auditorInfoContract.stakedBy({param1: auditor4, param2: 1}), staker1);
        assertEqual(await auditorInfoContract.stakedByInv({param1: auditor4, param2: staker1}), 1);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 1,
            balance: Utils.toDecimals(2),
            endorsementCount: 2
        });

        // staker2 stakes to auditor4 again
        wallet.defaultAccount = minter;
        await tokenInfoContract.mint({account: staker2,  amount: Utils.toDecimals(1)});
        wallet.defaultAccount = staker2;
        await tokenInfoContract.approve({spender: auditorInfoContract.address, amount: Utils.toDecimals(1)});
        receipt2 = await auditorInfoContract.stakeBond({auditor: auditor4, amount: Utils.toDecimals(1), doUpdate: true});
        assertEqual(await auditorInfoContract.stakerAuditor({param1:staker2, param2:0}), auditor4);
        assertEqual(await auditorInfoContract.stakeTo({param1:staker2, param2:auditor4}),{index:new BigNumber(0), balance:Utils.toDecimals(2)});
        assertEqual(await auditorInfoContract.stakedBy({param1: auditor4, param2: 0}), staker2);
        assertEqual(await auditorInfoContract.stakedByInv({param1: auditor4, param2: staker2}), 0);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 1,
            balance: Utils.toDecimals(3),
            endorsementCount: 2
        });

        assertEqual(await auditorInfoContract.getStakerAuditor({staker: staker1, start:0, length: 10}), [ auditor3, auditor4 ]);
        assertEqual(await auditorInfoContract.getStakedBy({auditor: auditor3, start:0, length: 10}), [ auditor3, staker1 ]);
        assertEqual(await auditorInfoContract.getEndorsing({endorser: auditor1, start:0, length: 10}), [ auditor3, auditor4 ]);
        assertEqual(await auditorInfoContract.getEndorsedBy({endorsee: auditor3, start:0, length: 10}), [ auditor1, auditor2 ]);
    });
    it('withdraw endorsement', async function(){
        wallet.defaultAccount = auditor1;
        let receipt = await auditorInfoContract.revokeEndorsement({auditor: auditor3, doUpdate:false});
        let event = auditorInfoContract.parseRevokeEndorsementEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {endorser: auditor1, endorsee:auditor3}, true);

        // auditor3's isActiveAuditor() should show the updated state before calling updateAuditorState()
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor3), false);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 1,
            balance: Utils.toDecimals(2),
            endorsementCount: 2
        });

        // auditor 4's isActiveAuditor() should remain the old statue
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor4), true);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 1,
            balance: Utils.toDecimals(3),
            endorsementCount: 2
        });

        // update auditor 3's state
        wallet.defaultAccount = nobody;
        await auditorInfoContract.updateAuditorState(auditor3);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 0,
            balance: Utils.toDecimals(2),
            endorsementCount: 1
        });

        // auditor4's isActiveAuditor() should show the updated state
        assertEqual(await auditorInfoContract.isActiveAuditor(auditor4), false);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 1,
            balance: Utils.toDecimals(3),
            endorsementCount: 2
        });

        // update auditor 3's state
        await auditorInfoContract.updateAuditorState(auditor4);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 0,
            balance: Utils.toDecimals(3),
            endorsementCount: 1
        });
    });
});