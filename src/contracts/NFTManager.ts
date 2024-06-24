import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./NFTManager.json";
export interface IDeployParams {scom:string;protocolFeeTo:string}
export interface IAddNftParams {nft:string;desc:string;stakes:number|BigNumber;protocolFee:number|BigNumber;enabled:boolean}
export interface IAddStakesParams {nft:string;tokenId:number|BigNumber;stakes:number|BigNumber}
export interface IBurnParams {nft:string;tokenId:number|BigNumber}
export interface IGetNftsParams {start:number|BigNumber;length:number|BigNumber}
export interface IStakedParams {param1:string;param2:string;param3:number|BigNumber}
export class NFTManager extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.scom,params.protocolFeeTo], options);
    }
    parseAddStakesEvent(receipt: TransactionReceipt): NFTManager.AddStakesEvent[]{
        return this.parseEvents(receipt, "AddStakes").map(e=>this.decodeAddStakesEvent(e));
    }
    decodeAddStakesEvent(event: Event): NFTManager.AddStakesEvent{
        let result = event.data;
        return {
            minter: result.minter,
            nft: result.nft,
            tokenId: new BigNumber(result.tokenId),
            stakes: new BigNumber(result.stakes),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): NFTManager.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): NFTManager.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBurnEvent(receipt: TransactionReceipt): NFTManager.BurnEvent[]{
        return this.parseEvents(receipt, "Burn").map(e=>this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event: Event): NFTManager.BurnEvent{
        let result = event.data;
        return {
            burner: result.burner,
            nft: result.nft,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): NFTManager.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): NFTManager.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseMintEvent(receipt: TransactionReceipt): NFTManager.MintEvent[]{
        return this.parseEvents(receipt, "Mint").map(e=>this.decodeMintEvent(e));
    }
    decodeMintEvent(event: Event): NFTManager.MintEvent{
        let result = event.data;
        return {
            minter: result.minter,
            nft: result.nft,
            tokenId: new BigNumber(result.tokenId),
            stakes: new BigNumber(result.stakes),
            protocolFee: new BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseNewNFTEvent(receipt: TransactionReceipt): NFTManager.NewNFTEvent[]{
        return this.parseEvents(receipt, "NewNFT").map(e=>this.decodeNewNFTEvent(e));
    }
    decodeNewNFTEvent(event: Event): NFTManager.NewNFTEvent{
        let result = event.data;
        return {
            nft: result.nft,
            stakes: new BigNumber(result.stakes),
            protocolFee: new BigNumber(result.protocolFee),
            enabled: result.enabled,
            _event: event
        };
    }
    parsePauseEvent(receipt: TransactionReceipt): NFTManager.PauseEvent[]{
        return this.parseEvents(receipt, "Pause").map(e=>this.decodePauseEvent(e));
    }
    decodePauseEvent(event: Event): NFTManager.PauseEvent{
        let result = event.data;
        return {
            nft: result.nft,
            _event: event
        };
    }
    parseResumeEvent(receipt: TransactionReceipt): NFTManager.ResumeEvent[]{
        return this.parseEvents(receipt, "Resume").map(e=>this.decodeResumeEvent(e));
    }
    decodeResumeEvent(event: Event): NFTManager.ResumeEvent{
        let result = event.data;
        return {
            nft: result.nft,
            _event: event
        };
    }
    parseSetProtocolFeeToEvent(receipt: TransactionReceipt): NFTManager.SetProtocolFeeToEvent[]{
        return this.parseEvents(receipt, "SetProtocolFeeTo").map(e=>this.decodeSetProtocolFeeToEvent(e));
    }
    decodeSetProtocolFeeToEvent(event: Event): NFTManager.SetProtocolFeeToEvent{
        let result = event.data;
        return {
            protocolFeeTo: result.protocolFeeTo,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): NFTManager.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): NFTManager.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): NFTManager.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): NFTManager.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    addNft: {
        (params: IAddNftParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddNftParams, options?: TransactionOptions) => Promise<void>;
    }
    addStakes: {
        (params: IAddStakesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddStakesParams, options?: TransactionOptions) => Promise<void>;
    }
    burn: {
        (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBurnParams, options?: TransactionOptions) => Promise<void>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    getNfts: {
        (params: IGetNftsParams, options?: TransactionOptions): Promise<{nft:string,desc:string,stakes:BigNumber,protocolFee:BigNumber,paused:boolean}[]>;
    }
    invNfts: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    mint: {
        (nft:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (nft:string, options?: TransactionOptions) => Promise<BigNumber>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    nfts: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{nft:string,desc:string,stakes:BigNumber,protocolFee:BigNumber,paused:boolean}>;
    }
    nftsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    pauseNFT: {
        (nft:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (nft:string, options?: TransactionOptions) => Promise<void>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    protocolFeeBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    protocolFeeTo: {
        (options?: TransactionOptions): Promise<string>;
    }
    resumeNFT: {
        (nft:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (nft:string, options?: TransactionOptions) => Promise<void>;
    }
    scom: {
        (options?: TransactionOptions): Promise<string>;
    }
    setProtocolFeeTo: {
        (protocolFeeTo:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (protocolFeeTo:string, options?: TransactionOptions) => Promise<void>;
    }
    staked: {
        (params: IStakedParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    transferProtocolFee: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let getNftsParams = (params: IGetNftsParams) => [this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getNfts_call = async (params: IGetNftsParams, options?: TransactionOptions): Promise<{nft:string,desc:string,stakes:BigNumber,protocolFee:BigNumber,paused:boolean}[]> => {
            let result = await this.call('getNfts',getNftsParams(params),options);
            return (result.map(e=>(
                {
                    nft: e.nft,
                    desc: e.desc,
                    stakes: new BigNumber(e.stakes),
                    protocolFee: new BigNumber(e.protocolFee),
                    paused: e.paused
                }
            )));
        }
        this.getNfts = getNfts_call
        let invNfts_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('invNfts',[param1],options);
            return new BigNumber(result);
        }
        this.invNfts = invNfts_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let newOwner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newOwner',[],options);
            return result;
        }
        this.newOwner = newOwner_call
        let nfts_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{nft:string,desc:string,stakes:BigNumber,protocolFee:BigNumber,paused:boolean}> => {
            let result = await this.call('nfts',[this.wallet.utils.toString(param1)],options);
            return {
                nft: result.nft,
                desc: result.desc,
                stakes: new BigNumber(result.stakes),
                protocolFee: new BigNumber(result.protocolFee),
                paused: result.paused
            };
        }
        this.nfts = nfts_call
        let nftsLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('nftsLength',[],options);
            return new BigNumber(result);
        }
        this.nftsLength = nftsLength_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let protocolFeeBalance_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('protocolFeeBalance',[],options);
            return new BigNumber(result);
        }
        this.protocolFeeBalance = protocolFeeBalance_call
        let protocolFeeTo_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('protocolFeeTo',[],options);
            return result;
        }
        this.protocolFeeTo = protocolFeeTo_call
        let scom_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('scom',[],options);
            return result;
        }
        this.scom = scom_call
        let stakedParams = (params: IStakedParams) => [params.param1,params.param2,this.wallet.utils.toString(params.param3)];
        let staked_call = async (params: IStakedParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('staked',stakedParams(params),options);
            return new BigNumber(result);
        }
        this.staked = staked_call
        let addNftParams = (params: IAddNftParams) => [params.nft,this.wallet.utils.stringToBytes32(params.desc),this.wallet.utils.toString(params.stakes),this.wallet.utils.toString(params.protocolFee),params.enabled];
        let addNft_send = async (params: IAddNftParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addNft',addNftParams(params),options);
            return result;
        }
        let addNft_call = async (params: IAddNftParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addNft',addNftParams(params),options);
            return;
        }
        this.addNft = Object.assign(addNft_send, {
            call:addNft_call
        });
        let addStakesParams = (params: IAddStakesParams) => [params.nft,this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.stakes)];
        let addStakes_send = async (params: IAddStakesParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addStakes',addStakesParams(params),options);
            return result;
        }
        let addStakes_call = async (params: IAddStakesParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addStakes',addStakesParams(params),options);
            return;
        }
        this.addStakes = Object.assign(addStakes_send, {
            call:addStakes_call
        });
        let burnParams = (params: IBurnParams) => [params.nft,this.wallet.utils.toString(params.tokenId)];
        let burn_send = async (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('burn',burnParams(params),options);
            return result;
        }
        let burn_call = async (params: IBurnParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('burn',burnParams(params),options);
            return;
        }
        this.burn = Object.assign(burn_send, {
            call:burn_call
        });
        let deny_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user],options);
            return result;
        }
        let deny_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deny',[user],options);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let mint_send = async (nft:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('mint',[nft],options);
            return result;
        }
        let mint_call = async (nft:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('mint',[nft],options);
            return new BigNumber(result);
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let pauseNFT_send = async (nft:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('pauseNFT',[nft],options);
            return result;
        }
        let pauseNFT_call = async (nft:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('pauseNFT',[nft],options);
            return;
        }
        this.pauseNFT = Object.assign(pauseNFT_send, {
            call:pauseNFT_call
        });
        let permit_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user],options);
            return result;
        }
        let permit_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('permit',[user],options);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let resumeNFT_send = async (nft:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('resumeNFT',[nft],options);
            return result;
        }
        let resumeNFT_call = async (nft:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('resumeNFT',[nft],options);
            return;
        }
        this.resumeNFT = Object.assign(resumeNFT_send, {
            call:resumeNFT_call
        });
        let setProtocolFeeTo_send = async (protocolFeeTo:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setProtocolFeeTo',[protocolFeeTo],options);
            return result;
        }
        let setProtocolFeeTo_call = async (protocolFeeTo:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setProtocolFeeTo',[protocolFeeTo],options);
            return;
        }
        this.setProtocolFeeTo = Object.assign(setProtocolFeeTo_send, {
            call:setProtocolFeeTo_call
        });
        let takeOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership',[],options);
            return result;
        }
        let takeOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('takeOwnership',[],options);
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferOwnership_send = async (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner],options);
            return result;
        }
        let transferOwnership_call = async (newOwner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner],options);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let transferProtocolFee_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferProtocolFee',[],options);
            return result;
        }
        let transferProtocolFee_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferProtocolFee',[],options);
            return;
        }
        this.transferProtocolFee = Object.assign(transferProtocolFee_send, {
            call:transferProtocolFee_call
        });
    }
}
export module NFTManager{
    export interface AddStakesEvent {minter:string,nft:string,tokenId:BigNumber,stakes:BigNumber,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface BurnEvent {burner:string,nft:string,tokenId:BigNumber,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface MintEvent {minter:string,nft:string,tokenId:BigNumber,stakes:BigNumber,protocolFee:BigNumber,_event:Event}
    export interface NewNFTEvent {nft:string,stakes:BigNumber,protocolFee:BigNumber,enabled:boolean,_event:Event}
    export interface PauseEvent {nft:string,_event:Event}
    export interface ResumeEvent {nft:string,_event:Event}
    export interface SetProtocolFeeToEvent {protocolFeeTo:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
}