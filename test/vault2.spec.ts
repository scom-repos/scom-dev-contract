// direct buy with ETH
import 'mocha';
import {Utils, Wallet, BigNumber, MerkleTree} from "@ijstech/eth-wallet";
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print } from './helper';
import { MockAmmPair, WETH9 } from '../packages/mock-contracts/src'

describe('## Vault2', async function() {
    let accounts: string[];
    let wallet: Wallet;

    let result: IDeployResult;

    let amm: MockAmmPair;
    let weth: WETH9;
    let scomContract: Contracts.Scom;
    let vaultContract: Contracts.Vault;

    let deployer: string;
    let foundation: string;
    let buyer1: string;
    let buyer2: string;
    let nobody: string;

    let totalSuppy = Utils.toDecimals("10000000000");
    let period = 10 * 365 * 24 * 60 * 60; // 10 years
    // let derement = Utils.toDecimals("0.998"); // day
    let derement = Utils.toDecimals("0.999999987"); // second

    before('deploy', async () => {
        wallet = new Wallet(getProvider());
        accounts = await wallet.accounts;
        deployer = accounts[0];
        foundation = accounts[1];
        buyer1 = accounts[2];
        buyer2 = accounts[3];
        nobody = accounts[4];

        wallet.defaultAccount = deployer;

        scomContract = new Contracts.Scom(wallet);
        await scomContract.deploy({minter:Utils.nullAddress, initSupply:totalSuppy, initSupplyTo: foundation, totalSupply: totalSuppy});
        console.log('scom', scomContract.address);

        weth = new WETH9(wallet);
        await weth.deploy();
        console.log('weth', weth.address);

        amm = new MockAmmPair(wallet);
        await amm.deploy(
            new BigNumber(scomContract.address.toLowerCase()).lt(weth.address.toLowerCase()) ? 
            {token0: scomContract.address, token1: weth.address} : 
            {token0: weth.address, token1: scomContract.address}
        );

        wallet.defaultAccount = foundation;        
        await weth.deposit({value:Utils.toDecimals(1)});
        await scomContract.transfer({to:amm.address, amount:Utils.toDecimals(1)});
        await weth.transfer({dst:amm.address, wad:Utils.toDecimals(1)});
        await amm.sync();

        wallet.defaultAccount = deployer;
        const deployOptions:IDeployOptions = {
            token: {
                address: scomContract.address
            },
            auditorInfo: {
                foundation: foundation,
                minStakes: 1,
                minEndorsementsRequired: 2,
                cooldownPeriod: 60,
                auditors: []
            },
            projectInfo: {
                admins: []
            },
            // audit: {
            //     warningThreshold: 500, // base 10e3
            //     passedThreshold: 900, // base 10e3
            //     auditDuration: 14 * 24*60*60,  // 14 days
            //     minAuditRequired: 3
            // },
            vault: {
                amm: amm.address,
                foundation: foundation,
            }
        }
        result = await deploy(wallet, deployOptions, (msg)=>{
            console.dir(msg);
        });
        console.log('scom contracts', result);

        vaultContract = new Contracts.Vault(wallet, result.vault);
    });
    let now: number;
    let trancheId: number;
    const oneYear = 365 * 24 * 60 * 60;
    const day = 24 * 60 * 60 ;
    let merkleTree: MerkleTree;
    it ('new tranche', async () => {
        now = await wallet.getBlockTimestamp();
        let startTime = now + 1000;
        let endTime = now + period; // 10 years

        wallet.defaultAccount = foundation;
        await scomContract.transfer({to: vaultContract.address, amount: await scomContract.balanceOf(foundation)});

        wallet.defaultAccount = deployer;
        await vaultContract.permit(deployer);
        await vaultContract.lock({
            decrementDecimal: derement,
            startTime,
            endTime 
        });
        now = startTime;

        const abi = [
            {
                type: "address",
                name: "buyer"
            },
            {
                type: "uint256",
                name: "amount"
            }
        ];
        let leavesData = [
            {buyer: buyer1, amount: Utils.toDecimals(10)},
            {buyer: buyer2, amount: Utils.toDecimals(20)}
        ];

        now  += oneYear;
        await wallet.setBlockTime(now);

        merkleTree = Utils.generateMerkleTree(wallet, {
            abi,
            leavesData,
            abiKeyName: 'buyer'
        });
        
        let sale = {
            startTime: now + day ,
            limitedClaimEndTime: now + 3 * day,
            unlimitedClaimEndTime: now + 5 * day,
            amount: Utils.toDecimals(50),
            merkleRoot: merkleTree.getHexRoot(),
            ipfsCid: ""
        }
        // print(await vaultContract.currReleaseAmount());

        print(await vaultContract.unlockedAmount());

        let receipt = await vaultContract.newTranche(sale);
        let event = vaultContract.parseNewTrancheEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            trancheId: 0
        }, true);
        let event2 = vaultContract.parseUnlockEvent(receipt);
        assertEqual(event2.length, 1);
        // assertEqual(event2[0], {
        //     unlock: Utils.toDecimals("3419982363.124570345043680163"),
        //     available: Utils.toDecimals("3419982363.124570345043680163"),
        //     balance: Utils.toDecimals("3419982363.124570345043680163"),
        // }, true);
        trancheId = event[0].trancheId.toNumber();
        print(await vaultContract.unlockedAmount());
        // assertEqual(await vaultContract.unlockedAmount(), Utils.toDecimals("3419982263.124570345043680163"));
        assertEqual(await vaultContract.availableBalanceInTranche(trancheId), Utils.toDecimals(50));
    });
    it ('claim', async () => {
        let proof = merkleTree.getHexProofsByKey(buyer1);
        await expectToFail(vaultContract.claim({trancheId:trancheId, to: buyer1, allocation:Utils.toDecimals(10), proof:proof[0]}, {value:Utils.toDecimals(10)}), "not started");

        await wallet.setBlockTime(now + 2 * day);

        wallet.defaultAccount = buyer1;
        let receipt = await vaultContract.claim({trancheId:trancheId, to: buyer1, allocation:Utils.toDecimals(10), proof:proof[0]}, {value:Utils.toDecimals(10)});

        let event2 = vaultContract.parseClaimEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            from: buyer1,
            to: buyer1,
            amountScom: Utils.toDecimals(10),
            amountEth: Utils.toDecimals(10),
            remainingBalance: Utils.toDecimals(30)
        }, true);

        let event3 = scomContract.parseTransferEvent(receipt);
        assertEqual(event3.length, 2);
        assertEqual(event3[0], {
            from: vaultContract.address,
            to: amm.address,
            value: Utils.toDecimals(10)
        }, true);
        assertEqual(event3[1], {
            from: vaultContract.address,
            to: buyer1,
            value: Utils.toDecimals(10)
        }, true);

        let event4 = amm.parseMintEvent(receipt);
        assertEqual(event4.length, 1);
        assertEqual(event4[0], {
            sender: vaultContract.address,
            amount0: Utils.toDecimals(10),
            amount1: Utils.toDecimals(10)
        }, true);

        assertEqual(await vaultContract.availableBalanceInTranche(trancheId), Utils.toDecimals(30));
        await expectToFail(vaultContract.claim({trancheId:trancheId, to: buyer1, allocation:Utils.toDecimals(10), proof:proof[0]}, {value:Utils.toDecimals(10)}), "excceed allocation");
    });
    it('unlimited claim', async () => {
        await wallet.setBlockTime(now + 4 * day);
        wallet.defaultAccount = buyer1;
        let proof = merkleTree.getHexProofsByKey(buyer1);

        let receipt = await vaultContract.claim({trancheId:trancheId, to: buyer1, allocation:Utils.toDecimals(10), proof:proof[0]}, {value:Utils.toDecimals(10)});
        let event2 = vaultContract.parseClaimEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            from: buyer1,
            to: buyer1,
            amountScom: Utils.toDecimals(10),
            amountEth: Utils.toDecimals(10),
            remainingBalance: Utils.toDecimals(10)
        }, true);

        assertEqual(await vaultContract.availableBalanceInTranche(trancheId), Utils.toDecimals(10));

        await expectToFail(vaultContract.claim({trancheId:trancheId, to: buyer1, allocation:Utils.toDecimals(10), proof:proof[0]}, {value:Utils.toDecimals(20)}), "insufficient balance");
    });
    it('admin tranche withdraw', async () => {
        wallet.defaultAccount = deployer;
        let receipt = await vaultContract.withdrawFromTranche({trancheIds:[trancheId],amountScom:[Utils.toDecimals(4)]});
        let event = vaultContract.parseWithdrawScomFromTrancheEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            trancheId: 0,
            amount: Utils.toDecimals(4),
            remainingBalance: Utils.toDecimals(6),
        }, true);
        let event2 = scomContract.parseTransferEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            from: vaultContract.address,
            to: foundation,
            value: Utils.toDecimals(4)
        }, true);
        assertEqual(await vaultContract.availableBalanceInTranche(trancheId), Utils.toDecimals(6));
    });
    it('anyone can swap', async () => {
        await wallet.setBlockTime(now + 6 * day);
        wallet.defaultAccount = nobody;
        await expectToFail(vaultContract.releaseAndSwap({trancheIds:[trancheId], to:nobody}, {value:Utils.toDecimals(4)}), "insufficient amount");
        let receipt = await vaultContract.releaseAndSwap({trancheIds:[trancheId], to:nobody}, {value:Utils.toDecimals(1)});
        let event = vaultContract.parseTrancheReleaseEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            trancheId: trancheId
        }, true);
        let event2 = vaultContract.parseReleaseEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            amount: Utils.toDecimals(6),
            // unlockedAmount: Utils.toDecimals("3419982263.124570345043680163"),
            releasedAmount: Utils.toDecimals(6)
        }, true);
        let event3 = vaultContract.parseSwapEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {
            from: nobody,
            to: nobody,
            amountScom: Utils.toDecimals(1),
            amountEth: Utils.toDecimals(1),
            remainingBalance: Utils.toDecimals(4),
        }, true);
        assertEqual(await vaultContract.availableBalanceInTranche(trancheId), 0);
        assertEqual(await vaultContract.releasedAmount(), Utils.toDecimals(4));
    });
    it('admin withdraw from release', async () => {
        wallet.defaultAccount = deployer;
        let receipt = await vaultContract.withdrawFromRelease(Utils.toDecimals(1));
        let event = vaultContract.parseWithdrawScomFromReleaseEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            amount: Utils.toDecimals(1),
            balance: Utils.toDecimals(3)
        }, true);
        assertEqual(await vaultContract.releasedAmount(), Utils.toDecimals(3));
    });
});
