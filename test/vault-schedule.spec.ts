// release schedule over 10 years
import 'mocha';
import {Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";
import * as UniV3 from '@scom/scom-uniswap-v3-contract';
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print } from './helper';
import { Contracts as Mocks } from '../packages/mock-contracts/src'

const X96 = new BigNumber(2).pow(96);
export function toSqrtX96(n: BigNumber): BigNumber {
    return n.sqrt().times(X96).dp(0, BigNumber.ROUND_FLOOR);
}
describe('## Vault', async function() {
    let accounts: string[];
    let wallet: Wallet;
    let result: IDeployResult;

    let uniV3: UniV3.IDeployedContracts;
    let amm: UniV3.CoreContracts.UniswapV3Pool;

    let weth: Mocks.WETH9;
    let scomContract: Contracts.Scom;
    let vaultContract: Contracts.Vault;

    let deployer: string;
    let foundation: string;

    let totalSuppy = Utils.toDecimals("10000000000");
    let period = 10 * 365 * 24 * 60 * 60; // 10 years
    // let decrement = Utils.toDecimals("0.998"); // day
    let decrement = Utils.toDecimals("0.999999987"); // 315,360,000 second (0.999999868573918853)

    before('deploy', async () => {
        wallet = new Wallet(getProvider());
        accounts = await wallet.accounts;
        deployer = accounts[0];
        foundation = accounts[1];

        wallet.defaultAccount = deployer;

        scomContract = new Contracts.Scom(wallet);
        await scomContract.deploy({minter:Utils.nullAddress, initSupply:totalSuppy, initSupplyTo: foundation, totalSupply: totalSuppy});

        weth = new Mocks.WETH9(wallet);
        await weth.deploy();

        uniV3 = await UniV3.deploy(wallet, {weth: weth.address}, (msg: string)=>{
            console.dir(msg)
        });
    });
    before('create uniV3 pair', async () => {
        wallet.defaultAccount = foundation;   
        let pairFee = Utils.toDecimals("0.0005", 6); // 0.000500
        let receipt1 = await uniV3.factory.createPool({tokenA: scomContract.address, tokenB: weth.address, fee: pairFee});
        let event1 = uniV3.factory.parsePoolCreatedEvent(receipt1)[0];
        print(event1);

        let price = toSqrtX96(new BigNumber(1)); // 1 scom = 1 eth
        amm = new UniV3.CoreContracts.UniswapV3Pool(wallet, event1.pool);
        let receipt2 = await amm.initialize(price);
        let event2 = amm.parseInitializeEvent(receipt2)[0];
        print(event2);
    });
    it('deploy', async () => {
        wallet.defaultAccount = deployer;
        const deployOptions:IDeployOptions = {
            token: {
                address: scomContract.address
            },
            auditorInfo: {
                foundation: foundation,
                foundationShare: Utils.toDecimals("0.2"),
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
                uniV3: amm.address,
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
        const oneMonth = 30 * 24 * 60 * 60;

        wallet.defaultAccount = foundation;
        await scomContract.transfer({to: vaultContract.address, amount: await scomContract.balanceOf(foundation)});

        wallet.defaultAccount = deployer;
        let receipt = await vaultContract.lock({
            presale: 0,
            decrementDecimal: decrement,
            startTime,
            endTime 
        });
        let event = vaultContract.parseLockEvent(receipt);
        print(event[0]);

        console.log('day 1');
        await wallet.setBlockTime(now + 24 * 60 * 60 + 1);
        print(await vaultContract.currUnlockedAmount());

         // yearly
        for (let i = 1 ; i < 11 ; i++) {
            console.log(`year ${i}`)
            await wallet.setBlockTime(now + (i * oneYear));
            print(await vaultContract.currUnlockedAmount());
            let receipt = await vaultContract.unlock();
            console.log(`gas used = ${receipt.gasUsed}`);
            let event = vaultContract.parseUnlockEvent(receipt)[0];
            delete (<any>event)._event;
            print(event);
        }

        console.log('year 10 + 1 day');
        await wallet.setBlockTime(now + (10 * oneYear) + 24 * 60 * 60 + 1001 );
        print(await vaultContract.currUnlockedAmount());

        console.log('endTime');
        await wallet.setBlockTime(now + endTime);
        print(await vaultContract.currUnlockedAmount());

        // monthly
        // for (let i = 1 ; i <= 12*10 + 3 ; i++) {
        //     await wallet.setBlockTime(now + (i * oneMonth) + 1);
        //     print(await vaultContract.currUnlockedAmount());
        // }
    });
});
