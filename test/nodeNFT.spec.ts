import 'mocha';
import {Utils, Wallet, BigNumber, MerkleTree} from "@ijstech/eth-wallet";
import {Contracts, deploy, IDeployOptions, DefaultDeployOptions, IDeployResult} from '../src';
import { assertEqual, getProvider, expectToFail, print } from './helper';
import { Contracts as Mocks } from '../packages/mock-contracts/src'
import { utils } from 'mocha';

describe('NodeNFT', async function() {
    let accounts: string[];
    let wallet: Wallet;

    let result: IDeployResult;
    let scomContract: Contracts.Scom;

    let deployer: string;
    let foundation: string;
    let buyer1: string;
    let buyer2: string;
    let nobody: string;

    let totalSuppy = Utils.toDecimals("10000000000");

    before('setup', async () => {
        wallet = new Wallet(getProvider());
        accounts = await wallet.accounts;
        console.log(accounts);

        deployer = accounts[0];
        foundation = accounts[1];
        buyer1 = accounts[2];
        buyer2 = accounts[3];
        nobody = accounts[4];
        // swapper = accounts[5];

        wallet.defaultAccount = deployer;
        scomContract = new Contracts.Scom(wallet);
        await scomContract.deploy({minter:Utils.nullAddress, initSupply:totalSuppy, initSupplyTo: foundation, totalSupply: totalSuppy});
        console.log('scom', scomContract.address);
    });

    let manager: Contracts.NFTManager;
    let nft: Contracts.NodeNFT;
    let dummy: Contracts.NodeNFT;

    it('deploy',async () => {
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
            nft: {
                protocolFeeTo: foundation
            }
        }
        result = await deploy(wallet, deployOptions, (msg)=>{
            console.dir(msg);
        });
        console.log('scom contracts', result);
        manager = new Contracts.NFTManager(wallet, result.nft.manager);
        await manager.permit(deployer);
    });
    it('new nft',async () => {
        nft = new Contracts.NodeNFT(wallet);
        let param = {
            name: "Decom_Lincense",
            symbol: "DCLC",
            baseURI: "",
            manager: result.nft.manager,
            stakeRequired: Utils.toDecimals(1000),
            protocolFee: Utils.toDecimals(1)
        }
        let address = await nft.deploy(param);
        console.log("nft: ", nft.address);

        wallet.defaultAccount = nobody;
        await expectToFail(manager.addNft({nft: nft.address, desc: "NFT", enabled: true, stakes: Utils.toDecimals(1000), protocolFee: Utils.toDecimals(1)}), "Action performed by unauthorized address.");

        wallet.defaultAccount = deployer;
        result.nft.nft[param.symbol] = address;
        await manager.addNft({nft: nft.address, desc: "NFT", enabled: true, stakes: Utils.toDecimals(1000), protocolFee: Utils.toDecimals(1)});

        let length = await manager.nftsLength();
        let nfts = await manager.getNfts({start: 0, length: 10});
        assertEqual(length, 1);
        assertEqual(nfts, [{
            nft: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
            desc: Utils.stringToBytes32("NFT"),
            stakes: Utils.toDecimals(1000),
            protocolFee: Utils.toDecimals(1),
            paused: false
        }]);

        assertEqual(await nft.symbol(), "DCLC");
        assertEqual(await nft.name(), "Decom_Lincense");

        expectToFail(manager.addNft({nft: nft.address, desc: "NFT", enabled: true, stakes: Utils.toDecimals(1000), protocolFee: Utils.toDecimals(1)}), "nft exists");

    }); 
    let tokenId: BigNumber;
    it('mint',async () => {
        wallet.defaultAccount = foundation;
        await scomContract.transfer({to: buyer1, amount: Utils.toDecimals(10000)});

        wallet.defaultAccount = buyer1;
        await scomContract.approve({spender: manager.address, amount: Utils.toDecimals(10000)});

        await expectToFail(nft.mint(buyer1), "not from manager");

        let balance1 = await scomContract.balanceOf(manager.address);
        let receipt = await manager.mint(nft.address);
        let balance2 = await scomContract.balanceOf(manager.address);

        let event1 = manager.parseMintEvent(receipt);
        let event2 = nft.parseStakeEvent(receipt);
        assertEqual(event1.length, 1);
        assertEqual(event1[0], {minter: buyer1, nft: nft.address, tokenId: 1, stakes: Utils.toDecimals(1000), protocolFee: Utils.toDecimals(1)}, true);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {who: buyer1, tokenId: 1}, true);

        tokenId = event2[0].tokenId;

        assertEqual(await nft.ownerOf(tokenId), buyer1);
        assertEqual(await nft.balanceOf(buyer1), 1);
        
        assertEqual(balance2.minus(balance1), Utils.toDecimals(1001));
        assertEqual(await scomContract.balanceOf(manager.address), Utils.toDecimals(1001));

        assertEqual(await manager.staked({param1: buyer1, param2: nft.address, param3: tokenId}), Utils.toDecimals(1000));
    });
    it('add stakes',async () => {
        wallet.defaultAccount = buyer1;
        let balance1 = await scomContract.balanceOf(manager.address);
        let receipt = await manager.addStakes({nft: nft.address, tokenId: tokenId, stakes: Utils.toDecimals(500)});
        let balance2 = await scomContract.balanceOf(manager.address);
        
        let event1 = manager.parseAddStakesEvent(receipt);
        let event2 = nft.parseAddStakesEvent(receipt);
        assertEqual(event1.length, 1);
        assertEqual(event1[0], {minter: buyer1, nft: nft.address, tokenId: 1, stakes: Utils.toDecimals(500)}, true);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {who: buyer1, tokenId: 1}, true);

        assertEqual(balance2.minus(balance1), Utils.toDecimals(500));
        assertEqual(await scomContract.balanceOf(manager.address), Utils.toDecimals(1501));

        assertEqual(await manager.staked({param1: buyer1, param2: nft.address, param3: tokenId}), Utils.toDecimals(1500));
    });
    let tokenId2: BigNumber;
    it('mint again',async () => {
        wallet.defaultAccount = buyer1;
        let receipt = await manager.mint(nft.address);
        tokenId2 = manager.parseMintEvent(receipt)[0].tokenId;
        assertEqual(await manager.staked({param1: buyer1, param2: nft.address, param3: tokenId2}), Utils.toDecimals(1000));
        assertEqual(await nft.ownerOf(tokenId2), buyer1);
        assertEqual(await nft.balanceOf(buyer1), 2);
    });
    it('burn',async () => {
        wallet.defaultAccount = nobody;
        await expectToFail(manager.burn({nft: nft.address, tokenId: tokenId}), "not from owner");

        wallet.defaultAccount = buyer1;

        await expectToFail(nft.burn({from: buyer1, tokenId: tokenId}), "not from manager");

        let balance1 = await scomContract.balanceOf(buyer1);
        let receipt = await manager.burn({nft: nft.address, tokenId: tokenId});
        let balance2 = await scomContract.balanceOf(buyer1);

        let event1 = manager.parseBurnEvent(receipt);
        let event2 = nft.parseUnstakeEvent(receipt);
        assertEqual(event1.length, 1);
        assertEqual(event1[0], {burner: buyer1, nft: nft.address, tokenId}, true);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {who: buyer1, tokenId: 1}, true);

        assertEqual(balance2.minus(balance1), Utils.toDecimals(1500));
        assertEqual(await manager.staked({param1: buyer1, param2: nft.address, param3: tokenId}), Utils.toDecimals(0));

        // can't burn again / burn invalid token id
        await expectToFail(manager.addStakes({nft: nft.address, tokenId: tokenId, stakes: 1}), "ERC721: invalid token ID");
        await expectToFail(manager.burn({nft: nft.address, tokenId: tokenId}), "ERC721: invalid token ID");
    });
    it('pause',async () => {
        wallet.defaultAccount = nobody;
        await expectToFail(manager.pauseNFT(nft.address), "Action performed by unauthorized address.");

        wallet.defaultAccount = deployer;
        let receipt = await manager.pauseNFT(nft.address);
        let event1 = manager.parsePauseEvent(receipt);
        assertEqual(event1.length, 1);
        assertEqual(event1[0], {nft: nft.address}, true);
        

        wallet.defaultAccount = buyer1;
        await expectToFail(manager.mint(nft.address), "NFT paused");
        await expectToFail(manager.addStakes({nft: nft.address, tokenId: tokenId2, stakes:1}), "NFT paused");

        await manager.burn({nft: nft.address, tokenId: tokenId2});

        wallet.defaultAccount = deployer;
        await expectToFail(manager.pauseNFT(nft.address), "NFT already paused");
    });
    it('resume',async () => {
        wallet.defaultAccount = nobody;
        await expectToFail(manager.resumeNFT(nft.address), "Action performed by unauthorized address.");

        wallet.defaultAccount = deployer;
        let receipt1 = await manager.resumeNFT(nft.address);
        let event1 = manager.parseResumeEvent(receipt1);
        assertEqual(event1.length, 1);
        assertEqual(event1[0], {nft: nft.address}, true);

        wallet.defaultAccount = foundation;
        await scomContract.transfer({to: buyer2, amount: Utils.toDecimals(10000)});

        wallet.defaultAccount = buyer2;
        await scomContract.approve({spender: manager.address, amount: Utils.toDecimals(10000)});

        let receipt2 = await manager.mint(nft.address);
        let tokenId3 = manager.parseMintEvent(receipt2)[0].tokenId;
        
        assertEqual(await manager.staked({param1: buyer2, param2: nft.address, param3: tokenId3}), Utils.toDecimals(1000));
        assertEqual(await nft.ownerOf(tokenId3), buyer2);
        assertEqual(await nft.balanceOf(buyer2), 1);

        wallet.defaultAccount = deployer;
        await expectToFail(manager.resumeNFT(nft.address), "NFT not paused");
    });
    it('transfer protocol fee',async () => {
        wallet.defaultAccount = nobody;
        let balance1 = await scomContract.balanceOf(foundation);
        let receipt = await manager.transferProtocolFee();
        let balance2 = await scomContract.balanceOf(foundation);

        print(balance2.minus(balance1));
    });
    it('dummy',async () => {   
        wallet.defaultAccount = deployer;
        dummy = new Contracts.NodeNFT(wallet);
        let param = {
            name: "Dummy",
            symbol: "DUMMY",
            baseURI: "",
            manager: result.nft.manager,
            stakeRequired: Utils.toDecimals(1000),
            protocolFee: Utils.toDecimals(1)
        }
        await expectToFail(manager.mint(dummy.address), "nft not exists");
        await expectToFail(manager.burn({nft:dummy.address, tokenId: 0}), "nft not exists");

        wallet.defaultAccount = deployer;
        await expectToFail(manager.pauseNFT(dummy.address), "nft not exists");
        await expectToFail(manager.resumeNFT(dummy.address), "nft not exists");
    });

});