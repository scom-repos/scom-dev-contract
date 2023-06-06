import 'mocha';
import {Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print, privateKeys } from './helper';
import { MockAmmPair, WETH9 } from './src'

describe('## SC-Contract', async function() {
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

    let totalSuppy = Utils.toDecimals("10000000000");
    let period = 10 * 365 * 24 * 60 * 60; // 10 years
    let derement = Utils.toDecimals("0.998"); // day
    // let derement = Utils.toDecimals("0.999999987"); // second

    before('deploy', async () => {
        wallet = new Wallet(getProvider());
        accounts = await wallet.accounts;
        deployer = accounts[0];
        foundation = accounts[1];
        buyer1 =  accounts[2];
        buyer2 =  accounts[3];


        wallet.defaultAccount = deployer;

        scomContract = new Contracts.Scom(wallet);
        await scomContract.deploy({minter:Utils.nullAddress, initSupply:totalSuppy, initSupplyTo: foundation, totalSupply: totalSuppy});

        weth = new WETH9(wallet);
        await weth.deploy();
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
        vaultContract = new Contracts.Vault(wallet, result.vault);

    });
    it ('Vault', async () => {

        let now = await wallet.getBlockTimestamp();
        let startTime = now + 1000;
        let endTime = now + period; // 10 years
        const oneYear = 365 * 24 * 60 * 60;
        const day = 24 * 60 * 60 ;

        wallet.defaultAccount = foundation;
        await scomContract.transfer({to: vaultContract.address, amount: await scomContract.balanceOf(foundation)});

        wallet.defaultAccount = deployer;
        await vaultContract.permit(deployer);
        await vaultContract.start({
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

        let merkleTree = Utils.generateMerkleTree(wallet, {
            abi,
            leavesData,
            abiKeyName: 'buyer'
        });
        
        let sale = {
            startTime: now + day ,
            privateSaleEndTime: now + 2 * day,
            semiPrivateSaleEndTime: now + 4 * day,
            amount: Utils.toDecimals(10),
            merkleRoot: merkleTree.getHexRoot(),
            ipfsCid: ""
        }
        // print(await vaultContract.currReleaseAmount());

        let receipt = await vaultContract.newSale(sale);
        let event = vaultContract.parseNewSaleEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            salesId: 0
        }, true);
        let salesId = event[0].salesId;

        await wallet.setBlockTime(now + day + 10);

        let proof = merkleTree.getHexProofsByKey(buyer1);
// console.log({salesId:event.salesId, allocation:10, proof[0]});
        wallet.defaultAccount = buyer1;
        let receipt2 = await vaultContract.buy({salesId:salesId, to: buyer1, allocation:Utils.toDecimals(10), proof:proof[0]}, {value:Utils.toDecimals(10)});

        let event2 = vaultContract.parseBuyEvent(receipt2);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            buyer: buyer1,
            to: buyer1,
            amountScom: Utils.toDecimals(10),
            amountEth: Utils.toDecimals(10)
        }, true);

        let event3 = scomContract.parseTransferEvent(receipt2);
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

        let event4 = amm.parseMintEvent(receipt2);
        assertEqual(event4.length, 1);
        assertEqual(event4[0], {
            sender: vaultContract.address,
            amount0: Utils.toDecimals(10),
            amount1: Utils.toDecimals(10)
        }, true);


    });
});
