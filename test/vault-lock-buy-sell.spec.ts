// direct buy with ETH
import 'mocha';
import {Utils, Wallet, BigNumber, MerkleTree} from "@ijstech/eth-wallet";
import * as UniV3 from '@scom/scom-uniswap-v3-contract';
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import { assertEqual, getProvider, expectToFail, print } from './helper';
import { Contracts as Mocks } from '../packages/mock-contracts/src'

const X96 = new BigNumber(2).pow(96);
export function toSqrtX96(n: BigNumber): BigNumber {
    return n.sqrt().times(X96).dp(0, BigNumber.ROUND_FLOOR);
}
export function fromSqrtX96(n: BigNumber): BigNumber {
    return n.div(X96).pow(2);
}

describe('## Vault2', async function() {
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
    let buyer1: string;
    let buyer2: string;
    let nobody: string;
    let swapper: string;

    let totalSuppy = Utils.toDecimals("10000000000");
    let period = 10 * 365 * 24 * 60 * 60; // 10 years
    // let decrement = Utils.toDecimals("0.998"); // day
    let decrement = Utils.toDecimals("0.999999987"); // second

    before('deploy', async () => {
        wallet = new Wallet(getProvider());
        accounts = await wallet.accounts;
        deployer = accounts[0];
        foundation = accounts[1];
        buyer1 = accounts[2];
        buyer2 = accounts[3];
        nobody = accounts[4];
        swapper = accounts[5];

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
            presale: Utils.toDecimals(0),
            decrementDecimal: decrement,
            startTime,
            endTime 
        });
        now = startTime;
    });
    it ('new tranche', async () => {
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

        function getPositionKey(address: string) {
            return Utils.soliditySha3(address + Utils.padLeft((-887260>>>0).toString(16).slice(-6), 6) + Utils.padLeft((887260).toString(16), 6))
        }
        assertEqual(
            await amm.positions(getPositionKey(vaultContract.address)),
            { liquidity: Utils.toDecimals(8), feeGrowthInside0LastX128: 0, feeGrowthInside1LastX128: 0, tokensOwed0: 0, tokensOwed1: 0}
        );
        assertEqual(
            await amm.positions(getPositionKey(foundation)),
            { liquidity: Utils.toDecimals(2), feeGrowthInside0LastX128: 0, feeGrowthInside1LastX128: 0, tokensOwed0: 0, tokensOwed1: 0}
        );
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

        // await expectToFail(vaultContract.claim({trancheId:trancheId, to: buyer1, allocation:Utils.toDecimals(10), proof:proof[0]}, {value:Utils.toDecimals(20)}), "insufficient balance");
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
        await expectToFail(vaultContract.releaseAndBuy({trancheIds:[trancheId], to:nobody}, {value:Utils.toDecimals(4)}), "insufficient amount");
        let receipt = await vaultContract.releaseAndBuy({trancheIds:[trancheId], to:nobody}, {value:Utils.toDecimals(1)});

        let event = vaultContract.parseTrancheReleaseEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            trancheId: trancheId
        }, true);
        let event2 = vaultContract.parseReleaseEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            amount: Utils.toDecimals(6),
            releasedAmount: Utils.toDecimals(6)
        }, true);
        let event3 = vaultContract.parseBuyEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {
            from: nobody,
            to: nobody,
            amountScom: Utils.toDecimals(1),
            amountEth: Utils.toDecimals(1),
            remainingBalance: Utils.toDecimals(4),
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
    async function buyScomFromUniV3() {
        let SCOM_FROM_AMOUNT = 20;
        let now = await wallet.getBlockTimestamp();
        // let _price = Utils.toDecimals(1);//.times(wethIsToken0 ? "0.99" : "1.01");
        wallet.defaultAccount = swapper;
        let params = {
            tokenIn: weth.address,
            tokenOut: scomContract.address,
            fee: Utils.toDecimals("0.0005", 6),
            recipient: swapper,
            deadline: now + 3600,
            amountIn: Utils.toDecimals(20),
            amountOutMinimum: 0,
            sqrtPriceLimitX96: 0 // toSqrtX96(_price) //0
        };
        // print(params);
        print(await scomContract.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper));
        let callData1 = await uniV3.router.exactInputSingle.txData(params);
        let callData2 = await uniV3.router.refundETH.txData();
        let receipt = await uniV3.router.multicall([callData1, callData2], Utils.toDecimals(20));
        // print(receipt);
        let swap = amm.parseSwapEvent(receipt)[0];
        print(await scomContract.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper));
    }
    async function sellScomFromUniV3() {
        let SCOM_FROM_AMOUNT = 10;
        let now = await wallet.getBlockTimestamp();
        // let _price = Utils.toDecimals(1);//.times(wethIsToken0 ? "0.99" : "1.01");
        wallet.defaultAccount = swapper;

        let scomAmount = await scomContract.balanceOf(swapper);

        await scomContract.approve({spender: uniV3.router.address, amount: scomAmount});
        let params = {
            tokenIn: scomContract.address,
            tokenOut: weth.address,
            fee: Utils.toDecimals("0.0005", 6),
            recipient: swapper,
            deadline: now + 3600,
            amountIn: scomAmount,
            amountOutMinimum: 0,
            sqrtPriceLimitX96: 0 // toSqrtX96(_price) //0
        };
        // print(params);
        print(await scomContract.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper));
        let callData1 = await uniV3.router.exactInputSingle.txData(params);
        let callData2 = await uniV3.router.unwrapWETH9.txData({amountMinimum: 0, recipient: swapper});
        let receipt = await uniV3.router.multicall([callData1, callData2]);
        // print(receipt);
        let swap = amm.parseSwapEvent(receipt)[0];
        print(await scomContract.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper));
    }
    // if (false)
    it('uniswap trading', async () => {
        await buyScomFromUniV3();
        console.log(fromSqrtX96((await amm.slot0()).sqrtPriceX96).toFixed());
        await sellScomFromUniV3();
        console.log(fromSqrtX96((await amm.slot0()).sqrtPriceX96).toFixed());
    });
    it('sell scom', async () => {

        let slot0 = await amm.slot0();
        console.log(fromSqrtX96(slot0.sqrtPriceX96).toFixed());

        wallet.defaultAccount = nobody;
        await scomContract.approve({spender: vaultContract.address, amount: Utils.toDecimals(1)});

        let eth1 = await wallet.balance;
        let receipt = await vaultContract.sellScom(Utils.toDecimals(1));
        let eth2 = await wallet.balance;

        let event1 = vaultContract.parseSellEvent(receipt);
        assertEqual(event1.length, 1);
        print(event1);
        // assertEqual(event1[0], {
        //     from: nobody,
        //     amountScom: Utils.toDecimals(1),
        //     amountEth: Utils.toDecimals("0.999999999999999999"),
        //     remainingBalance: Utils.toDecimals("4.999999999999999999")
        // }, true);
        let event2 = scomContract.parseTransferEvent(receipt);
        // print(event2);
        assertEqual(event2.length, 2);
        // assertEqual(event2[0], {
        //     from: nobody,
        //     to: vaultContract.address,
        //     value: Utils.toDecimals(1)
        // }, true);
        // assertEqual(event2[1], {
        //     from: amm.address,
        //     to: vaultContract.address,
        //     value: Utils.toDecimals("0.999999999999999999")
        // }, true);
        // seller should get back 1 eth minus gas fee
        // assertEqual(eth2.minus(eth1).toFixed().substring(0,6), "0.9996");
        print(eth2.minus(eth1).toFixed().substring(0,6))
    });
});
