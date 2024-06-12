import 'mocha';
import {Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print } from './helper';

describe('## Auditor', async function() {

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
    let auditor5: string;
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
        auditor5 = accounts[10];

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
                foundationShare: Utils.toDecimals(0.2),
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

        await auditorInfoContract.permit(deployer);
    });
    /*
    endorses:
    auditor1 -> auditor3
    auditor2 -> auditor3
    auditor3 -> auditor4
    auditor2 -> auditor4
    stakes:
    auditor3 -> auditor3: 1
    stkaer2 -> auditor4: 2
    stkaer1 -> auditor3: 1
    stkaer1 -> auditor4: 1
    */
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
    });
    it('check states', async function () {
        assertEqual(await auditorInfoContract.stakerAuditorLength(staker1), 2);
        assertEqual(await auditorInfoContract.stakerAuditorLength(auditor4), 0);
        assertEqual(await auditorInfoContract.stakerAuditorLength(auditor3), 1);
        assertEqual(await auditorInfoContract.stakedByLength(auditor3), 2);
        assertEqual(await auditorInfoContract.endorsingLength(auditor3), 1);
        assertEqual(await auditorInfoContract.endorsedByLength(auditor3), 2);
        assertEqual(await auditorInfoContract.getStakerAuditor({staker: staker1, start:0, length: 10}), [ auditor3, auditor4 ]);
        assertEqual(await auditorInfoContract.getStakedBy({auditor: auditor3, start:0, length: 10}), [ auditor3, staker1 ]);
        assertEqual(await auditorInfoContract.getEndorsing({endorser: auditor1, start:0, length: 10}), [ auditor3, auditor4 ]);
        assertEqual(await auditorInfoContract.getEndorsedBy({endorsee: auditor3, start:0, length: 10}), [ auditor1, auditor2 ]);

        let auditors = await auditorInfoContract.getAuditors({auditorIdStart:1, length:10});
        assertEqual(auditors, {
            auditors: [
                auditor1,
                auditor2,
                auditor3,
                auditor4
            ],
            auditorsData: [
                {status: 3, balance: Utils.toDecimals(0), endorsementCount: 0},
                {status: 3, balance: Utils.toDecimals(0), endorsementCount: 0},
                {status: 1, balance: Utils.toDecimals(2), endorsementCount: 2},
                {status: 1, balance: Utils.toDecimals(3), endorsementCount: 2}
            ]
        });
    });
    it('failed cases', async function () {
        wallet.defaultAccount = auditor1;
        await expectToFail(auditorInfoContract.endorseAuditor({auditor:auditor3, doUpdate:true}), "already endorsed");
        await expectToFail(auditorInfoContract.endorseAuditor({auditor:nobody, doUpdate:true}), "endorsee is not an auditor");
        wallet.defaultAccount = auditor3;
        await expectToFail(auditorInfoContract.endorseAuditor({auditor:auditor3, doUpdate:true}), "cannot self endorse");
        wallet.defaultAccount = nobody;
        await expectToFail(auditorInfoContract.endorseAuditor({auditor:auditor3, doUpdate:true}), "endorser is not an auditor");
        await expectToFail(auditorInfoContract.revokeEndorsement({auditor:auditor3, doUpdate:true}), "not an endorser");
    })
    it('revoke endorsement', async function(){
        wallet.defaultAccount = auditor1;
        let receipt = await auditorInfoContract.revokeEndorsement({auditor: auditor3, doUpdate:false});
        let event = auditorInfoContract.parseRevokeEndorsementEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {endorser: auditor1, endorsee:auditor3}, true);
        await expectToFail(auditorInfoContract.revokeEndorsement({auditor:auditor3, doUpdate:true}), "not an endorser");

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
        receipt = await auditorInfoContract.updateAuditorState(auditor3);
        let event2 = auditorInfoContract.parseAuditorStateChangeEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            auditor: auditor3,
            newState: 0
        }, true);
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

        // update auditor 4's state
        receipt = await auditorInfoContract.updateAuditorState(auditor4);
        event2 = auditorInfoContract.parseAuditorStateChangeEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            auditor: auditor4,
            newState: 0
        }, true);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 0,
            balance: Utils.toDecimals(3),
            endorsementCount: 1
        });

        wallet.defaultAccount = auditor3;
        await expectToFail(auditorInfoContract.endorseAuditor({auditor:auditor4, doUpdate:true}), "endorser is not an active auditor");

    });
    it('unstake', async function(){
        wallet.defaultAccount = staker2;
        let receipt = await auditorInfoContract.unstakeBondRequest({auditor: auditor4, amount: Utils.toDecimals(1)});
        let event = auditorInfoContract.parseUnstakeBondRequestEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            sender: staker2, 
            auditor: auditor4, 
            amount: Utils.toDecimals(1), 
            auditorBalance: Utils.toDecimals(2),
            stakerAuditorBalance: Utils.toDecimals(1)
        }, true);

        await auditorInfoContract.unstakeBondRequest({auditor: auditor4, amount: Utils.toDecimals(1)});

        await wallet.setBlockTime(100);

        receipt = await auditorInfoContract.withdrawBond();
        let event2 = auditorInfoContract.parseWithdrawBondEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            sender: staker2, 
            amount: Utils.toDecimals(2)
        }, true);
        let event3 = tokenInfoContract.parseTransferEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {
            from: auditorInfoContract.address,
            to: staker2,
            value: Utils.toDecimals(2)
        }, true);
        assertEqual(await auditorInfoContract.auditorsData(auditor4), {
            status: 0,
            balance: Utils.toDecimals(1),
            endorsementCount: 1
        });

        wallet.defaultAccount = staker1;
        receipt = await auditorInfoContract.unstakeBondRequest({auditor: auditor4, amount: Utils.toDecimals(1)});
        let event4 = auditorInfoContract.parseAuditorStateChangeEvent(receipt);
        assertEqual(event4.length, 1);
        assertEqual(event4[0], {
            auditor: auditor4,
            newState: 0
        }, true);
    });
    it('freeze', async function(){
        wallet.defaultAccount = auditor1;
        await auditorInfoContract.endorseAuditor({auditor:auditor3, doUpdate:true});

        wallet.defaultAccount = nobody;
        await expectToFail(auditorInfoContract.freezeAuditor(auditor3));

        wallet.defaultAccount = deployer;
        await expectToFail(auditorInfoContract.freezeAuditor(nobody), 'auditor not exist');

        let receipt = await auditorInfoContract.freezeAuditor(auditor3);
        let event = auditorInfoContract.parseAuditorStateChangeEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            auditor: auditor3,
            newState: 2
        }, true);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 2,
            balance: Utils.toDecimals(2),
            endorsementCount: 2
        });

        wallet.defaultAccount = auditor3;
        await expectToFail(auditorInfoContract.unstakeBondRequest({auditor:auditor3, amount:0}), "auditor freezed");

        wallet.defaultAccount = deployer;
        receipt = await auditorInfoContract.penalize({auditor:auditor3, unfreezeAuditor:true, staker:[auditor3,staker1], amount:[Utils.toDecimals("0.75"),Utils.toDecimals("0.25")]});
        let event2 = auditorInfoContract.parsePenalizeEvent(receipt);
        assertEqual(event2.length, 2);
        assertEqual(event2, [
            {
                auditor: auditor3, 
                staker: auditor3, 
                amount: Utils.toDecimals("0.75"), 
                auditorBalance: Utils.toDecimals("1.25"), 
                stakerAuditorBalance: Utils.toDecimals("0.25")
            },{
                auditor: auditor3, 
                staker: staker1, 
                amount: Utils.toDecimals("0.25"), 
                auditorBalance: Utils.toDecimals("1"), 
                stakerAuditorBalance: Utils.toDecimals("0.75")
            }
        ], true);
        let event3 = auditorInfoContract.parseAuditorStateChangeEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {
            auditor: auditor3,
            newState: 0
        }, true);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 0,
            balance: Utils.toDecimals(1),
            endorsementCount: 2
        });

        await expectToFail(auditorInfoContract.penalize({auditor:auditor3, unfreezeAuditor:true, staker:[], amount:[]}), "auditor not freezed")

        wallet.defaultAccount = nobody;
        await auditorInfoContract.updateAuditorStateInBatch([auditor3]);
        assertEqual(await auditorInfoContract.auditorsData(auditor3), {
            status: 1,
            balance: Utils.toDecimals(1),
            endorsementCount: 2
        });
    });
    it('set parameters', async function() {
        wallet.defaultAccount = deployer;

        let receipt = await auditorInfoContract.setMinStakes(1000);
        let event1 = auditorInfoContract.parseSetMinStakesEvent(receipt);
        assertEqual(event1.length, 1);
        assertEqual(event1[0], {minStakes: 1000}, true);

        receipt = await auditorInfoContract.setMinEndorsementsRequired(1000);
        let event2 = auditorInfoContract.parseSetMinEndorsementsRequiredEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {minEndorsementsRequired: 1000}, true);

        receipt = await auditorInfoContract.setCooldownPeriod(1000);
        let event3 = auditorInfoContract.parseSetCooldownPeriodEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {cooldownPeriod: 1000}, true);

        wallet.defaultAccount = deployer;
        await expectToFail(auditorInfoContract.setMinStakes(0));
        await expectToFail(auditorInfoContract.setMinEndorsementsRequired(0));
        await expectToFail(auditorInfoContract.setCooldownPeriod(0));
    });
});