import 'mocha';
import {Utils, Wallet, BigNumber, Erc20, Contract, TransactionReceipt} from "@ijstech/eth-wallet";
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print, privateKeys } from './helper';
import { MockAmmPair, WETH9, MockErc20, MockOracleAdaptor3 } from './src'
import * as OSWAP from '@openswap/sdk';


const oswapDeployOptions = {
    govOptions: {
        minStakePeriod: 1,
        tradeFee: 0.28,
        protocolFee: 0,
        protocolFeeTo: '',
        profiles: {
            name: ['poll','vote','addOldOracleToNewPair'],
            minExeDelay: [1,1,1],
            minVoteDuration: [0,0,0],
            maxVoteDuration: [1209600,1209600,1209600],
            minGovTokenToCreateVote: [Utils.toDecimals(100),Utils.toDecimals(200000),Utils.toDecimals(100)],
            minQuorum: [Utils.toDecimals(0),Utils.toDecimals(1000000),Utils.toDecimals(100)]
        }
    },
    hybridRouter: {
    }
};

describe('## SC-Contract', async function() {
    let accounts: string[];
    let wallet: Wallet;

    let oswapContracts: OSWAP.IDeploymentContracts;
    let result: IDeployResult;

    let amm: OSWAP.Contracts.OSWAP_Pair;
    let weth: WETH9;
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
    let derement = Utils.toDecimals("0.998"); // day
    // let derement = Utils.toDecimals("0.999999987"); // second

    const WETH_POOL_SIZE = 1000;
    const ETH_PRICE_USD = 2000;
    const LINK_PRICE_USD = 8;

    async function voteToPass(wallet: Wallet, oswapContracts: OSWAP.IDeploymentContracts, executor: any, type: string, quorum: number | BigNumber | string, param: string[]):Promise<TransactionReceipt> {
        let voting = await newVote(wallet, oswapContracts, executor, type, quorum, param);
        await voting.vote(0);
    
        let now = <number>(await wallet.web3.eth.getBlock('latest')).timestamp;
        let end = (await voting.voteEndTime()).plus(await voting.executeDelay()).toNumber() + 10;
    if (end>now) {
            await wallet.setBlockTime(end-now+1);
        }
        return await voting.execute();
    }
    async function newVote(wallet: Wallet, oswapContracts: OSWAP.IDeploymentContracts, executor: any, type: string, quorum: number | BigNumber | string, param: string[]):Promise<OSWAP.Contracts.OAXDEX_VotingContract> {
        let now = <number>(await wallet.web3.eth.getBlock('latest')).timestamp;
        let votingConfig = (await oswapContracts.governance.votingConfigs(Utils.stringToBytes32("vote") as string));
        quorum = votingConfig.minQuorum;
        let threshold = Utils.toDecimals("0.5");
        let voteEndTime = now + votingConfig.minVoteDuration.toNumber() + 10;
        let exeDelay = votingConfig.minExeDelay.toNumber();
    
        let receipt = await oswapContracts.registry.newVote({
            executor: executor.address,
            name: Utils.stringToBytes32(type) as string,
            options: [Utils.stringToBytes32('Y') as string, Utils.stringToBytes32('N') as string],
            quorum: quorum,
            threshold: threshold,
            voteEndTime: voteEndTime,
            executeDelay: exeDelay,
            executeParam: [Utils.stringToBytes32(type) as string].concat(param)
        });
        let events = oswapContracts.governance.parseNewVoteEvent(receipt)[0];
        let voteAddr = events.vote;
        console.log("voting address " + voteAddr);
    
        let voting = new OSWAP.Contracts.OAXDEX_VotingContract(wallet, voteAddr);
    
        return voting;
    }
    async function deployOSWAP(weth: WETH9, usdt: Erc20): Promise<OSWAP.IDeploymentContracts> {
        wallet.defaultAccount = oswapDeployer;
        oswapContracts = OSWAP.toDeploymentContracts(wallet, await OSWAP.deploy(wallet, Object.assign({tokens: {weth: weth.address}}, oswapDeployOptions)));

        let votingConfig = (await oswapContracts.governance.votingConfigs(Utils.stringToBytes32("vote") as string));
        let amount = Utils.fromDecimals(BigNumber.max(votingConfig.minOaxTokenToCreateVote, votingConfig.minQuorum));
        await oswapContracts.openSwap.mint({address:oswapAdmin,amount:amount});

        wallet.defaultAccount = oswapAdmin;
        await oswapContracts.openSwap.approve({spender:oswapContracts.governance.address, amount:amount});
        await oswapContracts.governance.stake(Utils.toDecimals(amount));
        let wait = (await oswapContracts.governance.minStakePeriod()).toNumber() + 1;
        await wallet.setBlockTime(wait);
        await oswapContracts.governance.unlockStake();        

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
        let oracle = new MockOracleAdaptor3(wallet);
        await oracle.deploy({weth:weth.address, decimals:18, tokens:[usdt.address, weth.address], prices:[Utils.toDecimals(1),Utils.toDecimals(ETH_PRICE_USD)]});
        if (new BigNumber(usdt.address.toLowerCase()).lt(weth.address.toLowerCase()))
            await voteToPass(wallet, oswapContracts, oswapContracts.executor2, "setOracle", "1000000", [Utils.addressToBytes32Right(usdt.address, true), Utils.addressToBytes32Right(weth.address, true),Utils.addressToBytes32Right(oracle.address, true)]);
        else
            await voteToPass(wallet, oswapContracts, oswapContracts.executor2, "setOracle", "1000000", [Utils.addressToBytes32Right(weth.address, true), Utils.addressToBytes32Right(usdt.address, true),Utils.addressToBytes32Right(oracle.address, true)]);

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
            expire: now + 100000,
            enable: true,
            deadline: now + 100000
        }, Utils.toDecimals(wethAmount));
        await oswapContracts.oracleLiquidityProvider.addLiquidityETH({
            tokenA: usdt.address,
            addingTokenA: true,
            staked: Utils.toDecimals(100),
            afterIndex: 0,
            amountAIn: Utils.toDecimals(usdtAmount, await usdt.decimals),
            expire: now + 100000,
            enable: true,
            deadline: now + 100000
        }, 0);

        // await voteToPass(wallet, oswapContracts, oswapContracts.executor, "setVotingExecutor", "1000000", [Utils.addressToBytes32Right(oswapContracts.hybridRouterRegistry.address, true), Utils.numberToBytes32(1, true)]);

        // hybrid router
        wallet.defaultAccount = oswapAdmin;
        let name = Utils.stringToBytes32("AMM") as string;
        await voteToPass(wallet, oswapContracts, oswapContracts.hybridRouterRegistry, "registerProtocol", "1000000", [name, Utils.addressToBytes32Right(oswapContracts.factory.address, true), Utils.numberToBytes32(100000, true),  Utils.numberToBytes32(100000, true), Utils.numberToBytes32(1, true)]);
        wallet.defaultAccount = nobody;
        let ammPair = new OSWAP.Contracts.OSWAP_Pair(wallet, await oswapContracts.factory.getPair({param1:usdt.address,param2:weth.address}));
        await oswapContracts.hybridRouterRegistry.registerPairByAddress({factory:oswapContracts.factory.address, pairAddress:ammPair.address});

        wallet.defaultAccount = oswapAdmin;
        name = Utils.stringToBytes32("ORACLE") as string;
        await voteToPass( wallet, oswapContracts, oswapContracts.hybridRouterRegistry, "registerProtocol", "1000000", [name, Utils.addressToBytes32Right(oswapContracts.oracleFactory.address, true), Utils.numberToBytes32(100000, true),  Utils.numberToBytes32(100000, true), Utils.numberToBytes32(2, true)]);
        wallet.defaultAccount = nobody;
        let oraclePair = new OSWAP.Contracts.OSWAP_OraclePair(wallet, await oswapContracts.oracleFactory.getPair({param1:usdt.address,param2:weth.address}));
        await oswapContracts.hybridRouterRegistry.registerPairByAddress({factory:oswapContracts.oracleFactory.address, pairAddress:oraclePair.address});

        wallet.defaultAccount = oswapAdmin;
        await voteToPass(wallet, oswapContracts, oswapContracts.executor2, "setWhiteList", "1000000", [Utils.addressToBytes32Right(oswapContracts.hybridRouter.address, true), Utils.numberToBytes32(1, true)]);

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

        weth = new WETH9(wallet);
        await weth.deploy();
        console.log('weth', weth.address);

        usdt = new Erc20(wallet, await new MockErc20(wallet).deploy({name:"USDT", symbol:"USDT", decimals:6}));
        console.log('usdt', usdt.address);

        let oswapContracts = await deployOSWAP(weth, usdt);

        wallet.defaultAccount = foundation;        
        await scomContract.approve({spender:oswapContracts.router.address, amount:Utils.toDecimals(1)});

        let receipt = await oswapContracts.router.addLiquidityETH({
            token: scomContract.address,
            amountTokenDesired: Utils.toDecimals(1),
            amountTokenMin: Utils.toDecimals(1),
            amountETHMin: Utils.toDecimals(1),
            to: foundation,
            deadline: (await wallet.getBlockTimestamp()) + 1000
        }, Utils.toDecimals(1));
        amm = new OSWAP.Contracts.OSWAP_Pair(wallet, await oswapContracts.factory.getPair({param1: scomContract.address, param2: weth.address}));

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
        console.log('scom contracts', result);

        vaultContract = new Contracts.Vault(wallet, result.vault);

        wrapperContract = new Contracts.RouterVaultWrapper(wallet);
        await wrapperContract.deploy({vault: vaultContract.address, router: oswapContracts.hybridRouter.address});
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
            limitedPrivateSaleEndTime: now + 2 * day,
            unlimitedPrivateSaleEndTime: now + 4 * day,
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
        // let receipt2 = await vaultContract.buy({salesId:salesId, to: buyer1, allocation:Utils.toDecimals(10), proof:proof[0]}, {value:Utils.toDecimals(10)});
        wallet.defaultAccount = deployer;
        await usdt.mint({address: buyer1, amount: ETH_PRICE_USD*20});
        wallet.defaultAccount = buyer1;
        await usdt.approve({spender: wrapperContract.address, amount: ETH_PRICE_USD*20});
        await usdt.approve({spender: oswapContracts.hybridRouter.address, amount: ETH_PRICE_USD*20});
// console.log('getAmountOut',(await oswapContracts.oracleRouter.getAmountOut({tokenIn:usdt.address,tokenOut:weth.address,amountIn:Utils.toDecimals(ETH_PRICE_USD*20, await usdt.decimals),data:"0x"})).toFixed());
// let pair = await oswapContracts.oracleFactory.getPair({param1: usdt.address, param2: weth.address});
// console.log(pair);
// print(await new OSWAP.Contracts.OSWAP_OraclePair(wallet,pair).getBalances());
// console.log(await oswapContracts.hybridRouter.swapExactTokensForTokens.call({
//     pair:[await oswapContracts.oracleFactory.getPair({param1: usdt.address, param2: weth.address})],
//     amountIn: Utils.toDecimals(2000,6),
//     amountOutMin: 0,
// tokenIn: usdt.address,
//     deadline: now + 100000,
//     to: buyer1,
//     data: "0x"
// }));
// console.log(new OSWAP.Contracts.OSWAP_OraclePair(wallet,pair).swap({

// }))
        console.log('swapTokensForExactTokens');
        let receipt2 = await wrapperContract.swapTokensForExactTokens({
            pair: [await oswapContracts.factory.getPair({param1: usdt.address, param2: weth.address})], 
            amountOut: Utils.toDecimals(10), 
            amountInMax: Utils.toDecimals(ETH_PRICE_USD*20, await usdt.decimals), 
            deadline: (await wallet.getBlockTimestamp()) + 1000, 
            salesId: salesId, 
            to: buyer1, 
            allocation: Utils.toDecimals(10), 
            proof: proof[0]
        });
        console.log(receipt2);

        let event2 = vaultContract.parseBuyEvent(receipt2);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
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
