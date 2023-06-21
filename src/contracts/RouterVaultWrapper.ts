import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./RouterVaultWrapper.json";
export interface IDeployParams {vault:string;router:string}
export interface IClaimExactInParams {pair:string[];amountIn:number|BigNumber;amountOutMin:number|BigNumber;deadline:number|BigNumber;trancheId:number|BigNumber;to:string;allocation:number|BigNumber;proof:string[]}
export interface IClaimExactOutParams {pair:string[];amountOut:number|BigNumber;amountInMax:number|BigNumber;deadline:number|BigNumber;trancheId:number|BigNumber;to:string;allocation:number|BigNumber;proof:string[]}
export interface ISwapExactInParams {pair:string[];amountIn:number|BigNumber;amountOutMin:number|BigNumber;deadline:number|BigNumber;trancheIds:(number|BigNumber)[];to:string}
export interface ISwapExactOutParams {pair:string[];amountOut:number|BigNumber;amountInMax:number|BigNumber;deadline:number|BigNumber;trancheIds:(number|BigNumber)[];to:string}
export class RouterVaultWrapper extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.vault,params.router], options);
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): RouterVaultWrapper.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): RouterVaultWrapper.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseClaimEvent(receipt: TransactionReceipt): RouterVaultWrapper.ClaimEvent[]{
        return this.parseEvents(receipt, "Claim").map(e=>this.decodeClaimEvent(e));
    }
    decodeClaimEvent(event: Event): RouterVaultWrapper.ClaimEvent{
        let result = event.data;
        return {
            trancheId: new BigNumber(result.trancheId),
            sender: result.sender,
            inToken: result.inToken,
            inAmount: new BigNumber(result.inAmount),
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): RouterVaultWrapper.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): RouterVaultWrapper.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): RouterVaultWrapper.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): RouterVaultWrapper.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): RouterVaultWrapper.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): RouterVaultWrapper.SwapEvent{
        let result = event.data;
        return {
            trancheId: result.trancheId.map(e=>new BigNumber(e)),
            sender: result.sender,
            inToken: result.inToken,
            inAmount: new BigNumber(result.inAmount),
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): RouterVaultWrapper.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): RouterVaultWrapper.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUpdateRouterEvent(receipt: TransactionReceipt): RouterVaultWrapper.UpdateRouterEvent[]{
        return this.parseEvents(receipt, "UpdateRouter").map(e=>this.decodeUpdateRouterEvent(e));
    }
    decodeUpdateRouterEvent(event: Event): RouterVaultWrapper.UpdateRouterEvent{
        let result = event.data;
        return {
            router: result.router,
            _event: event
        };
    }
    claimExactIn: {
        (params: IClaimExactInParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IClaimExactInParams, options?: TransactionOptions) => Promise<void>;
    }
    claimExactOut: {
        (params: IClaimExactOutParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IClaimExactOutParams, options?: TransactionOptions) => Promise<void>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    router: {
        (options?: TransactionOptions): Promise<string>;
    }
    swapExactIn: {
        (params: ISwapExactInParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactInParams, options?: TransactionOptions) => Promise<void>;
    }
    swapExactOut: {
        (params: ISwapExactOutParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactOutParams, options?: TransactionOptions) => Promise<void>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    updateRouter: {
        (router:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (router:string, options?: TransactionOptions) => Promise<void>;
    }
    vault: {
        (options?: TransactionOptions): Promise<string>;
    }
    weth: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
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
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let router_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('router',[],options);
            return result;
        }
        this.router = router_call
        let vault_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('vault',[],options);
            return result;
        }
        this.vault = vault_call
        let weth_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('weth',[],options);
            return result;
        }
        this.weth = weth_call
        let claimExactInParams = (params: IClaimExactInParams) => [params.pair,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.trancheId),params.to,this.wallet.utils.toString(params.allocation),this.wallet.utils.stringToBytes32(params.proof)];
        let claimExactIn_send = async (params: IClaimExactInParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('claimExactIn',claimExactInParams(params),options);
            return result;
        }
        let claimExactIn_call = async (params: IClaimExactInParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('claimExactIn',claimExactInParams(params),options);
            return;
        }
        this.claimExactIn = Object.assign(claimExactIn_send, {
            call:claimExactIn_call
        });
        let claimExactOutParams = (params: IClaimExactOutParams) => [params.pair,this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.trancheId),params.to,this.wallet.utils.toString(params.allocation),this.wallet.utils.stringToBytes32(params.proof)];
        let claimExactOut_send = async (params: IClaimExactOutParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('claimExactOut',claimExactOutParams(params),options);
            return result;
        }
        let claimExactOut_call = async (params: IClaimExactOutParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('claimExactOut',claimExactOutParams(params),options);
            return;
        }
        this.claimExactOut = Object.assign(claimExactOut_send, {
            call:claimExactOut_call
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
        let swapExactInParams = (params: ISwapExactInParams) => [params.pair,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.trancheIds),params.to];
        let swapExactIn_send = async (params: ISwapExactInParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactIn',swapExactInParams(params),options);
            return result;
        }
        let swapExactIn_call = async (params: ISwapExactInParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('swapExactIn',swapExactInParams(params),options);
            return;
        }
        this.swapExactIn = Object.assign(swapExactIn_send, {
            call:swapExactIn_call
        });
        let swapExactOutParams = (params: ISwapExactOutParams) => [params.pair,this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.trancheIds),params.to];
        let swapExactOut_send = async (params: ISwapExactOutParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactOut',swapExactOutParams(params),options);
            return result;
        }
        let swapExactOut_call = async (params: ISwapExactOutParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('swapExactOut',swapExactOutParams(params),options);
            return;
        }
        this.swapExactOut = Object.assign(swapExactOut_send, {
            call:swapExactOut_call
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
        let updateRouter_send = async (router:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateRouter',[router],options);
            return result;
        }
        let updateRouter_call = async (router:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateRouter',[router],options);
            return;
        }
        this.updateRouter = Object.assign(updateRouter_send, {
            call:updateRouter_call
        });
    }
}
export module RouterVaultWrapper{
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface ClaimEvent {trancheId:BigNumber,sender:string,inToken:string,inAmount:BigNumber,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface SwapEvent {trancheId:BigNumber[],sender:string,inToken:string,inAmount:BigNumber,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UpdateRouterEvent {router:string,_event:Event}
}