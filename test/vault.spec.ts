// release schedule over 10 years
import 'mocha';
import {Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print } from './helper';
import { MockAmmPair, WETH9 } from '../packages/mock-contracts/src'

describe('## Vault', async function() {
    let accounts: string[];
    let wallet: Wallet;
    let result: IDeployResult;

    let amm: MockAmmPair;
    let weth: WETH9;
    let scomContract: Contracts.Scom;
    let vaultContract: Contracts.Vault;

    let deployer: string;
    let foundation: string;

    let totalSuppy = Utils.toDecimals("10000000000");
    let period = 10 * 365 * 24 * 60 * 60; // 10 years
    // let derement = Utils.toDecimals("0.998"); // day
    let derement = Utils.toDecimals("0.999999987"); // 315,360,000 second (0.999999868573918853)

    before('deploy', async () => {
        wallet = new Wallet(getProvider());
        accounts = await wallet.accounts;
        deployer = accounts[0];
        foundation = accounts[1];

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
        vaultContract = new Contracts.Vault(wallet, result.vault);

    });
    it ('Vault', async () => {

        let now = await wallet.getBlockTimestamp();
        let startTime = now + 1000;
        let endTime = now + period; // 10 years
        const oneYear = 365 * 24 * 60 * 60;

        wallet.defaultAccount = foundation;
        await scomContract.transfer({to: vaultContract.address, amount: await scomContract.balanceOf(foundation)});

        wallet.defaultAccount = deployer;
        await vaultContract.lock({
            decrementDecimal: derement,
            startTime,
            endTime 
        });

        console.log('day 1');
        await wallet.setBlockTime(now + 24 * 60 * 60 + 1001);
        print(await vaultContract.currTotalSupply());

        for (let i = 1 ; i < 11 ; i++) {
            console.log(`year ${i}`)
            await wallet.setBlockTime(now + (i * oneYear));
            print(await vaultContract.currTotalSupply());
            let receipt = await vaultContract.unlock();
            console.log(`gas used = ${receipt.gasUsed}`);
            let event = vaultContract.parseUnlockEvent(receipt)[0];
            delete event._event;
            print(event);
        }

        console.log('year 10 + 1 day');
        await wallet.setBlockTime(now + (10 * oneYear) + 24 * 60 * 60 + 1001 );
        print(await vaultContract.currTotalSupply());

        console.log('endTime');
        await wallet.setBlockTime(now + endTime);
        print(await vaultContract.currTotalSupply());
    });
});
