// buy with wrapper
import 'mocha';
import {Utils, Wallet, BigNumber, Erc20, Contract, TransactionReceipt, MerkleTree} from "@ijstech/eth-wallet";
import * as UniV3 from '@scom/scom-uniswap-v3-contract';
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print } from './helper';
import {stakeToVote, voteToPass, initHybridRouter}  from './oswapHelper';
import { Contracts as Mocks } from '../packages/mock-contracts/src'
import * as OSWAP from '@openswap/sdk';

const X96 = new BigNumber(2).pow(96);
export function toSqrtX96(n: BigNumber): BigNumber {
    return n.sqrt().times(X96).dp(0, BigNumber.ROUND_FLOOR);
}

describe('## Vault3', async function() {
    let accounts: string[];
    let wallet: Wallet;

    let oswapContracts: OSWAP.IDeploymentContracts;
    let result: IDeployResult;

    let uniV3: UniV3.IDeployedContracts;
    let amm: UniV3.CoreContracts.UniswapV3Pool;

    let weth: Mocks.WETH9;
    let usdt: Erc20;
    let scomContract: Contracts.Scom;
    let vaultContract: Contracts.Vault;
    let wrapperContract: Contracts.RouterVaultWrapper;

    let deployer: string;
    let oswapDeployer: string;
    let oswapAdmin: string;
    let foundation: string;
    let buyer1: string;
    let buyer2: string;
    let lp: string;
    let nobody: string;

    let totalSuppy = Utils.toDecimals("10000000000");
    let period = 10 * 365 * 24 * 60 * 60; // 10 years
    // let derement = Utils.toDecimals("0.998"); // day
    let derement = Utils.toDecimals("0.999999987"); // second

    const WETH_POOL_SIZE = 1000;
    const ETH_PRICE_USD = 2000;
    const LINK_PRICE_USD = 8;

    async function deployOSWAP(weth: Mocks.WETH9, usdt: Erc20): Promise<OSWAP.IDeploymentContracts> {
        wallet.defaultAccount = oswapDeployer;
        oswapContracts = OSWAP.toDeploymentContracts(wallet, await OSWAP.deploy(wallet, {tokens: {weth: weth.address}, hybridRouter: {}}));
        await initHybridRouter(wallet, oswapContracts);
        await stakeToVote(oswapAdmin, oswapAdmin, wallet, oswapContracts);

        let wethAmount = WETH_POOL_SIZE;
        let usdtAmount = wethAmount * ETH_PRICE_USD;
        let linkAmount = wethAmount * LINK_PRICE_USD / ETH_PRICE_USD;
        let oswapAmount = 200;

        let now = await wallet.getBlockTimestamp();

        // amm
        wallet.defaultAccount = deployer;
        await usdt.mint({address: lp, amount: usdtAmount});
        wallet.defaultAccount = lp;
        await usdt.approve({spender: oswapContracts.router.address, amount: usdtAmount});
        await oswapContracts.router.addLiquidityETH({
            token: usdt.address,
            amountTokenDesired: Utils.toDecimals(usdtAmount, await usdt.decimals),
            amountTokenMin: 0,
            amountETHMin: 0,
            deadline: now + 100000,
            to: lp
        }, Utils.toDecimals(wethAmount));

        // oracle
        wallet.defaultAccount = oswapAdmin;
        let oracle = new Mocks.MockOracleAdaptor3(wallet);
        await oracle.deploy({weth:weth.address, decimals:18, tokens:[usdt.address, weth.address], prices:[Utils.toDecimals(1),Utils.toDecimals(ETH_PRICE_USD)]});
        if (new BigNumber(usdt.address.toLowerCase()).lt(weth.address.toLowerCase()))
            await voteToPass(oswapAdmin, wallet, oswapContracts, oswapContracts.executor2, "setOracle", [Utils.addressToBytes32Right(usdt.address, true), Utils.addressToBytes32Right(weth.address, true),Utils.addressToBytes32Right(oracle.address, true)]);
        else
            await voteToPass(oswapAdmin, wallet, oswapContracts, oswapContracts.executor2, "setOracle", [Utils.addressToBytes32Right(weth.address, true), Utils.addressToBytes32Right(usdt.address, true),Utils.addressToBytes32Right(oracle.address, true)]);

        wallet.defaultAccount = deployer;
        await usdt.mint({address: lp, amount: usdtAmount});
        await oswapContracts.openSwap.mint({address: lp, amount: 200});
        wallet.defaultAccount = lp;
        await usdt.approve({spender: oswapContracts.oracleLiquidityProvider.address, amount: usdtAmount});
        await oswapContracts.openSwap.approve({spender: oswapContracts.oracleLiquidityProvider.address, amount: oswapAmount*2});
        await oswapContracts.oracleLiquidityProvider.addLiquidityETH({
            tokenA: usdt.address,
            addingTokenA: false,
            staked: Utils.toDecimals(100),
            afterIndex: 0,
            amountAIn: 0,
            expire: now + 1000*24*60*60,
            enable: true,
            deadline: now + 100000
        }, Utils.toDecimals(wethAmount));
        await oswapContracts.oracleLiquidityProvider.addLiquidityETH({
            tokenA: usdt.address,
            addingTokenA: true,
            staked: Utils.toDecimals(100),
            afterIndex: 0,
            amountAIn: Utils.toDecimals(usdtAmount, await usdt.decimals),
            expire: now + 1000*24*60*60,
            enable: true,
            deadline: now + 100000
        }, 0);

        // hybrid router
        wallet.defaultAccount = nobody;
        let ammPair = await oswapContracts.factory.getPair({param1:usdt.address,param2:weth.address});
        await oswapContracts.hybridRouterRegistry.registerPairByAddress({factory:oswapContracts.factory.address, pairAddress:ammPair});
        let oraclePair = await oswapContracts.oracleFactory.getPair({param1:usdt.address,param2:weth.address});
        await oswapContracts.hybridRouterRegistry.registerPairByAddress({factory:oswapContracts.oracleFactory.address, pairAddress:oraclePair});

        wallet.defaultAccount = oswapAdmin;
        await voteToPass(oswapAdmin, wallet, oswapContracts, oswapContracts.executor2, "setWhiteList", [Utils.addressToBytes32Right(oswapContracts.hybridRouter.address, true), Utils.numberToBytes32(1, true)]);

        return oswapContracts;
    }

    before('deploy', async () => {
        wallet = new Wallet(getProvider());
        accounts = await wallet.accounts;
        deployer = accounts[0];
        oswapDeployer = accounts[0];
        oswapAdmin = accounts[0];
        foundation = accounts[1];
        buyer1 =  accounts[2];
        buyer2 =  accounts[3];
        lp = accounts[4];
        nobody = accounts[5];

        wallet.defaultAccount = deployer;

        scomContract = new Contracts.Scom(wallet);
        await scomContract.deploy({minter:Utils.nullAddress, initSupply:totalSuppy, initSupplyTo: foundation, totalSupply: totalSuppy});
        console.log('scom', scomContract.address);

        weth = new Mocks.WETH9(wallet);
        await weth.deploy();
        console.log('weth', weth.address);

        uniV3 = await UniV3.deploy(wallet, {weth: weth.address}, (msg: string)=>{
            console.dir(msg)
        });

        usdt = new Erc20(wallet, await new Mocks.MockErc20(wallet).deploy({name:"USDT", symbol:"USDT", decimals:6}));
        console.log('usdt', usdt.address);

        let oswapContracts = await deployOSWAP(weth, usdt);

        wallet.defaultAccount = foundation;        
        let pairFee = Utils.toDecimals("0.0005", 6); // 0.000500
        let receipt1 = await uniV3.factory.createPool({tokenA: scomContract.address, tokenB: weth.address, fee: pairFee});
        let event1 = uniV3.factory.parsePoolCreatedEvent(receipt1)[0];

        let price = toSqrtX96(new BigNumber(1)); // 1 scom = 1 eth
        amm = new UniV3.CoreContracts.UniswapV3Pool(wallet, event1.pool);
        let receipt2 = await amm.initialize(price);
        let event2 = amm.parseInitializeEvent(receipt2)[0];

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
        console.log('scom contracts', result);

        vaultContract = new Contracts.Vault(wallet, result.vault);

        wrapperContract = new Contracts.RouterVaultWrapper(wallet);
        await wrapperContract.deploy({vault: vaultContract.address, router: oswapContracts.hybridRouter.address});
    });
    let now: number;
    let trancheId: number;
    const oneYear = 365 * 24 * 60 * 60;
    const day = 24 * 60 * 60 ;
    let merkleTree: MerkleTree;
    it ('lock', async () => {
        now = await wallet.getBlockTimestamp();
        let startTime = now + 1000;
        let endTime = now + period; // 10 years

        wallet.defaultAccount = foundation;
        await scomContract.transfer({to: vaultContract.address, amount: await scomContract.balanceOf(foundation)});

        wallet.defaultAccount = deployer;
        await vaultContract.permit(deployer);
        await vaultContract.lock({
            presale: 0,
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

        let receipt = await vaultContract.newTranche(sale);
        let event = vaultContract.parseNewTrancheEvent(receipt);
        trancheId = event[0].trancheId.toNumber();

    });
    it ('claim exact out', async () => {
        await wallet.setBlockTime(now + 2 * day);

        let proof = merkleTree.getHexProofsByKey(buyer1);

        wallet.defaultAccount = deployer;
        await usdt.mint({address: buyer1, amount: ETH_PRICE_USD*20});
        wallet.defaultAccount = buyer1;
        await usdt.approve({spender: wrapperContract.address, amount: ETH_PRICE_USD*20});
        // await usdt.approve({spender: oswapContracts.hybridRouter.address, amount: ETH_PRICE_USD*20});

        console.log('claimExactOut');
        let receipt = await wrapperContract.claimExactOut({
            pair: [await oswapContracts.factory.getPair({param1: usdt.address, param2: weth.address})], 
            amountOut: Utils.toDecimals(10), 
            amountInMax: Utils.toDecimals(ETH_PRICE_USD*20, await usdt.decimals), 
            deadline: (await wallet.getBlockTimestamp()) + 1000, 
            trancheId: trancheId, 
            to: buyer1, 
            allocation: Utils.toDecimals(10), 
            proof: proof[0]
        });

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
        assertEqual(event3.length, 3);
        assertEqual(event3[0], {
            from: vaultContract.address,
            to: amm.address,
            value: Utils.toDecimals(2)
        }, true);
        assertEqual(event3[1], {
            from: vaultContract.address,
            to: amm.address,
            value: Utils.toDecimals(8)
        }, true);
        assertEqual(event3[2], {
            from: vaultContract.address,
            to: buyer1,
            value: Utils.toDecimals(10)
        }, true);

        let event4 = amm.parseMintEvent(receipt);
        assertEqual(event4.length, 2);
        assertEqual(event4[0], {
            sender: vaultContract.address,
            owner: foundation,
            tickLower: -887260, 
            tickUpper: 887260,
            amount: Utils.toDecimals(2), // liquidity
            amount0: Utils.toDecimals(2),
            amount1: Utils.toDecimals(2)
        }, true);
        assertEqual(event4[1], {
            sender: vaultContract.address,
            owner: vaultContract.address,
            tickLower: -887260, 
            tickUpper: 887260,
            amount: Utils.toDecimals(8), // liquidity
            amount0: Utils.toDecimals(8),
            amount1: Utils.toDecimals(8)
        }, true);
    });
    it ('claim exact in', async () => {
        let proof = merkleTree.getHexProofsByKey(buyer2);

        wallet.defaultAccount = deployer;
        await usdt.mint({address: buyer2, amount: ETH_PRICE_USD*10});
        wallet.defaultAccount = buyer2;
        await usdt.approve({spender: wrapperContract.address, amount: ETH_PRICE_USD*10});
        // await usdt.approve({spender: oswapContracts.hybridRouter.address, amount: ETH_PRICE_USD*20});

        console.log('claimExactIn');
        let receipt = await wrapperContract.claimExactIn({
            pair: [await oswapContracts.oracleFactory.getPair({param1: usdt.address, param2: weth.address})], 
            amountIn: Utils.toDecimals(10 * ETH_PRICE_USD, await usdt.decimals), 
            amountOutMin: 0, 
            deadline: (await wallet.getBlockTimestamp()) + 1000, 
            trancheId: trancheId, 
            to: buyer2, 
            allocation: Utils.toDecimals(20), 
            proof: proof[0]
        });

        let event2 = vaultContract.parseClaimEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            from: buyer2,
            to: buyer2,
            amountScom: Utils.toDecimals(10),
            amountEth: Utils.toDecimals(10),
            remainingBalance: Utils.toDecimals(10)
        }, true);

        let event3 = scomContract.parseTransferEvent(receipt);
        assertEqual(event3.length, 3);
        assertEqual(event3[0], {
            from: vaultContract.address,
            to: amm.address,
            value: Utils.toDecimals(2)
        }, true);
        assertEqual(event3[1], {
            from: vaultContract.address,
            to: amm.address,
            value: Utils.toDecimals(8)
        }, true);
        assertEqual(event3[2], {
            from: vaultContract.address,
            to: buyer2,
            value: Utils.toDecimals(10)
        }, true);

        let event4 = amm.parseMintEvent(receipt);
        assertEqual(event4.length, 2);
        assertEqual(event4[0], {
            sender: vaultContract.address,
            owner: foundation,
            tickLower: -887260, 
            tickUpper: 887260,
            amount: Utils.toDecimals(2), // liquidity
            amount0: Utils.toDecimals(2),
            amount1: Utils.toDecimals(2)
        }, true);
        assertEqual(event4[1], {
            sender: vaultContract.address,
            owner: vaultContract.address,
            tickLower: -887260, 
            tickUpper: 887260,
            amount: Utils.toDecimals(8), // liquidity
            amount0: Utils.toDecimals(8),
            amount1: Utils.toDecimals(8)
        }, true);
    });
    it ('swap exact out', async () => {
        await wallet.setBlockTime(now + 6 * day);

        wallet.defaultAccount = deployer;
        await usdt.mint({address: nobody, amount: ETH_PRICE_USD*10});
        wallet.defaultAccount = nobody;
        await usdt.approve({spender: wrapperContract.address, amount: ETH_PRICE_USD*10});

        console.log('swapExactOut');
        let receipt = await wrapperContract.swapExactOut({
            pair: [await oswapContracts.factory.getPair({param1: usdt.address, param2: weth.address})], 
            amountOut: Utils.toDecimals(1), 
            amountInMax: Utils.toDecimals(ETH_PRICE_USD*10, await usdt.decimals), 
            deadline: (await wallet.getBlockTimestamp()) + 1000, 
            trancheIds: [trancheId],
            to: nobody, 
        });

        let event = vaultContract.parseTrancheReleaseEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            trancheId: trancheId
        }, true);
        let event2 = vaultContract.parseReleaseEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            amount: Utils.toDecimals(10),
            releasedAmount: Utils.toDecimals(10)
        }, true);
        let event3 = vaultContract.parseSwapEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {
            from: nobody,
            to: nobody,
            amountScom: Utils.toDecimals(1),
            amountEth: Utils.toDecimals(1),
            remainingBalance: Utils.toDecimals(8),
        }, true);
        let event4 = scomContract.parseTransferEvent(receipt);
        assertEqual(event4.length, 3);
        assertEqual(event4[0], {
            from: vaultContract.address,
            to: amm.address,
            value: Utils.toDecimals(0.2)
        }, true);
        assertEqual(event4[1], {
            from: vaultContract.address,
            to: amm.address,
            value: Utils.toDecimals(0.8)
        }, true);
        assertEqual(event4[2], {
            from: vaultContract.address,
            to: nobody,
            value: Utils.toDecimals(1)
        }, true);
        let event5 = amm.parseMintEvent(receipt);
        assertEqual(event5.length, 2);
        assertEqual(event5[0], {
            sender: vaultContract.address,
            owner: foundation,
            tickLower: -887260, 
            tickUpper: 887260,
            amount: Utils.toDecimals(0.2), // liquidity
            amount0: Utils.toDecimals(0.2),
            amount1: Utils.toDecimals(0.2)
        }, true);
        assertEqual(event5[1], {
            sender: vaultContract.address,
            owner: vaultContract.address,
            tickLower: -887260, 
            tickUpper: 887260,
            amount: Utils.toDecimals(0.8), // liquidity
            amount0: Utils.toDecimals(0.8),
            amount1: Utils.toDecimals(0.8)
        }, true);
    });
    it ('swap exact in', async () => {
        await wallet.setBlockTime(now + 6 * day);

        wallet.defaultAccount = deployer;
        await usdt.mint({address: nobody, amount: ETH_PRICE_USD*10});
        wallet.defaultAccount = nobody;
        await usdt.approve({spender: wrapperContract.address, amount: ETH_PRICE_USD*10});

        console.log('swapExactIn');
        let receipt = await wrapperContract.swapExactIn({
            pair: [await oswapContracts.oracleFactory.getPair({param1: usdt.address, param2: weth.address})], 
            amountIn: Utils.toDecimals(1 * ETH_PRICE_USD, await usdt.decimals), 
            amountOutMin: 0, 
            deadline: (await wallet.getBlockTimestamp()) + 1000, 
            trancheIds: [],
            to: nobody, 
        });

        let event = vaultContract.parseTrancheReleaseEvent(receipt);
        assertEqual(event.length, 0);
        let event2 = vaultContract.parseReleaseEvent(receipt);
        assertEqual(event2.length, 0);
        let event3 = vaultContract.parseSwapEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {
            from: nobody,
            to: nobody,
            amountScom: Utils.toDecimals(1),
            amountEth: Utils.toDecimals(1),
            remainingBalance: Utils.toDecimals(6),
        }, true);
        let event4 = scomContract.parseTransferEvent(receipt);
        assertEqual(event4.length, 3);
        assertEqual(event4[0], {
            from: vaultContract.address,
            to: amm.address,
            value: Utils.toDecimals(0.2)
        }, true);
        assertEqual(event4[1], {
            from: vaultContract.address,
            to: amm.address,
            value: Utils.toDecimals(0.8)
        }, true);
        assertEqual(event4[2], {
            from: vaultContract.address,
            to: nobody,
            value: Utils.toDecimals(1)
        }, true);
        let event5 = amm.parseMintEvent(receipt);
        assertEqual(event5.length, 2);
        assertEqual(event5[0], {
            sender: vaultContract.address,
            owner: foundation,
            tickLower: -887260, 
            tickUpper: 887260,
            amount: Utils.toDecimals(0.2), // liquidity
            amount0: Utils.toDecimals(0.2),
            amount1: Utils.toDecimals(0.2)
        }, true);
        assertEqual(event5[1], {
            sender: vaultContract.address,
            owner: vaultContract.address,
            tickLower: -887260, 
            tickUpper: 887260,
            amount: Utils.toDecimals(0.8), // liquidity
            amount0: Utils.toDecimals(0.8),
            amount1: Utils.toDecimals(0.8)
        }, true);
    });
});
