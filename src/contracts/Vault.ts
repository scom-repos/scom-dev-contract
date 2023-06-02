import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./Vault.json";
export interface IDeployParams {foundation:string;scom:string;amm:string}
export interface IBuyParams {salesId:number|BigNumber;allocation:number|BigNumber;proof:string[]}
export interface IStartParams {startTime:number|BigNumber;endTime:number|BigNumber;decrementDecimal:number|BigNumber}
export interface IUpdateReleaseSchduleParams {endTime:number|BigNumber;initialReleaseAmount:number|BigNumber;decrementDecimal:number|BigNumber}
export class Vault extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.foundation,params.scom,params.amm], options);
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): Vault.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): Vault.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): Vault.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): Vault.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseNewSaleEvent(receipt: TransactionReceipt): Vault.NewSaleEvent[]{
        return this.parseEvents(receipt, "NewSale").map(e=>this.decodeNewSaleEvent(e));
    }
    decodeNewSaleEvent(event: Event): Vault.NewSaleEvent{
        let result = event.data;
        return {
            salesId: new BigNumber(result.salesId),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Vault.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): Vault.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Vault.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): Vault.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    amm: {
        (options?: TransactionOptions): Promise<string>;
    }
    amountUsedInSale: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    availableAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    buy: {
        (params: IBuyParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBuyParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
    }
    currReleaseAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    decrementDecimal: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    endTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    foundation: {
        (options?: TransactionOptions): Promise<string>;
    }
    initialReleaseAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    lasReleaseAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    lastUpdate: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    newSale: {
        (sale:{startTime:number|BigNumber,privateSaleEndTime:number|BigNumber,semiPrivateSaleEndTime:number|BigNumber,amount:number|BigNumber,merkleRoot:string,ipfsCid:string}, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (sale:{startTime:number|BigNumber,privateSaleEndTime:number|BigNumber,semiPrivateSaleEndTime:number|BigNumber,amount:number|BigNumber,merkleRoot:string,ipfsCid:string}, options?: TransactionOptions) => Promise<void>;
    }
    oneMinusDecrement: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    publicBuy: {
        (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
    }
    publicSaleAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    release: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<BigNumber>;
    }
    releaseAndBuy: {
        (salesIds:(number|BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (salesIds:(number|BigNumber)[], options?: TransactionOptions) => Promise<BigNumber>;
    }
    releaseToPublic: {
        (salesIds:(number|BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (salesIds:(number|BigNumber)[], options?: TransactionOptions) => Promise<BigNumber>;
    }
    sales: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{startTime:BigNumber,privateSaleEndTime:BigNumber,semiPrivateSaleEndTime:BigNumber,amount:BigNumber,merkleRoot:string,ipfsCid:string}>;
    }
    scom: {
        (options?: TransactionOptions): Promise<string>;
    }
    start: {
        (params: IStartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStartParams, options?: TransactionOptions) => Promise<void>;
    }
    startTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    token0IsScom: {
        (options?: TransactionOptions): Promise<boolean>;
    }
    totalAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    totalSuppyAt: {
        (timestamp:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    updateReleaseSchdule: {
        (params: IUpdateReleaseSchduleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateReleaseSchduleParams, options?: TransactionOptions) => Promise<void>;
    }
    weth: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let amm_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('amm',[],options);
            return result;
        }
        this.amm = amm_call
        let amountUsedInSale_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('amountUsedInSale',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.amountUsedInSale = amountUsedInSale_call
        let availableAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('availableAmount',[],options);
            return new BigNumber(result);
        }
        this.availableAmount = availableAmount_call
        let currReleaseAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('currReleaseAmount',[],options);
            return new BigNumber(result);
        }
        this.currReleaseAmount = currReleaseAmount_call
        let decrementDecimal_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('decrementDecimal',[],options);
            return new BigNumber(result);
        }
        this.decrementDecimal = decrementDecimal_call
        let endTime_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('endTime',[],options);
            return new BigNumber(result);
        }
        this.endTime = endTime_call
        let foundation_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('foundation',[],options);
            return result;
        }
        this.foundation = foundation_call
        let initialReleaseAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('initialReleaseAmount',[],options);
            return new BigNumber(result);
        }
        this.initialReleaseAmount = initialReleaseAmount_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let lasReleaseAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('lasReleaseAmount',[],options);
            return new BigNumber(result);
        }
        this.lasReleaseAmount = lasReleaseAmount_call
        let lastUpdate_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('lastUpdate',[],options);
            return new BigNumber(result);
        }
        this.lastUpdate = lastUpdate_call
        let newOwner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newOwner',[],options);
            return result;
        }
        this.newOwner = newOwner_call
        let oneMinusDecrement_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('oneMinusDecrement',[],options);
            return new BigNumber(result);
        }
        this.oneMinusDecrement = oneMinusDecrement_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let publicSaleAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('publicSaleAmount',[],options);
            return new BigNumber(result);
        }
        this.publicSaleAmount = publicSaleAmount_call
        let sales_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{startTime:BigNumber,privateSaleEndTime:BigNumber,semiPrivateSaleEndTime:BigNumber,amount:BigNumber,merkleRoot:string,ipfsCid:string}> => {
            let result = await this.call('sales',[this.wallet.utils.toString(param1)],options);
            return {
                startTime: new BigNumber(result.startTime),
                privateSaleEndTime: new BigNumber(result.privateSaleEndTime),
                semiPrivateSaleEndTime: new BigNumber(result.semiPrivateSaleEndTime),
                amount: new BigNumber(result.amount),
                merkleRoot: result.merkleRoot,
                ipfsCid: result.ipfsCid
            };
        }
        this.sales = sales_call
        let scom_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('scom',[],options);
            return result;
        }
        this.scom = scom_call
        let startTime_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('startTime',[],options);
            return new BigNumber(result);
        }
        this.startTime = startTime_call
        let token0IsScom_call = async (options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('token0IsScom',[],options);
            return result;
        }
        this.token0IsScom = token0IsScom_call
        let totalAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalAmount',[],options);
            return new BigNumber(result);
        }
        this.totalAmount = totalAmount_call
        let totalSuppyAt_call = async (timestamp:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSuppyAt',[this.wallet.utils.toString(timestamp)],options);
            return new BigNumber(result);
        }
        this.totalSuppyAt = totalSuppyAt_call
        let weth_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('weth',[],options);
            return result;
        }
        this.weth = weth_call
        let buyParams = (params: IBuyParams) => [this.wallet.utils.toString(params.salesId),this.wallet.utils.toString(params.allocation),this.wallet.utils.stringToBytes32(params.proof)];
        let buy_send = async (params: IBuyParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('buy',buyParams(params),options);
            return result;
        }
        let buy_call = async (params: IBuyParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('buy',buyParams(params),options);
            return new BigNumber(result);
        }
        this.buy = Object.assign(buy_send, {
            call:buy_call
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
        let newSale_send = async (sale:{startTime:number|BigNumber,privateSaleEndTime:number|BigNumber,semiPrivateSaleEndTime:number|BigNumber,amount:number|BigNumber,merkleRoot:string,ipfsCid:string}, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newSale',[[this.wallet.utils.toString(sale.startTime),this.wallet.utils.toString(sale.privateSaleEndTime),this.wallet.utils.toString(sale.semiPrivateSaleEndTime),this.wallet.utils.toString(sale.amount),this.wallet.utils.stringToBytes32(sale.merkleRoot),this.wallet.utils.stringToBytes(sale.ipfsCid)]],options);
            return result;
        }
        let newSale_call = async (sale:{startTime:number|BigNumber,privateSaleEndTime:number|BigNumber,semiPrivateSaleEndTime:number|BigNumber,amount:number|BigNumber,merkleRoot:string,ipfsCid:string}, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('newSale',[[this.wallet.utils.toString(sale.startTime),this.wallet.utils.toString(sale.privateSaleEndTime),this.wallet.utils.toString(sale.semiPrivateSaleEndTime),this.wallet.utils.toString(sale.amount),this.wallet.utils.stringToBytes32(sale.merkleRoot),this.wallet.utils.stringToBytes(sale.ipfsCid)]],options);
            return;
        }
        this.newSale = Object.assign(newSale_send, {
            call:newSale_call
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
        let publicBuy_send = async (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('publicBuy',[],options);
            return result;
        }
        let publicBuy_call = async (options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('publicBuy',[],options);
            return new BigNumber(result);
        }
        this.publicBuy = Object.assign(publicBuy_send, {
            call:publicBuy_call
        });
        let release_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('release',[],options);
            return result;
        }
        let release_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('release',[],options);
            return new BigNumber(result);
        }
        this.release = Object.assign(release_send, {
            call:release_call
        });
        let releaseAndBuy_send = async (salesIds:(number|BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('releaseAndBuy',[this.wallet.utils.toString(salesIds)],options);
            return result;
        }
        let releaseAndBuy_call = async (salesIds:(number|BigNumber)[], options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('releaseAndBuy',[this.wallet.utils.toString(salesIds)],options);
            return new BigNumber(result);
        }
        this.releaseAndBuy = Object.assign(releaseAndBuy_send, {
            call:releaseAndBuy_call
        });
        let releaseToPublic_send = async (salesIds:(number|BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('releaseToPublic',[this.wallet.utils.toString(salesIds)],options);
            return result;
        }
        let releaseToPublic_call = async (salesIds:(number|BigNumber)[], options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('releaseToPublic',[this.wallet.utils.toString(salesIds)],options);
            return new BigNumber(result);
        }
        this.releaseToPublic = Object.assign(releaseToPublic_send, {
            call:releaseToPublic_call
        });
        let startParams = (params: IStartParams) => [this.wallet.utils.toString(params.startTime),this.wallet.utils.toString(params.endTime),this.wallet.utils.toString(params.decrementDecimal)];
        let start_send = async (params: IStartParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('start',startParams(params),options);
            return result;
        }
        let start_call = async (params: IStartParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('start',startParams(params),options);
            return;
        }
        this.start = Object.assign(start_send, {
            call:start_call
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
        let updateReleaseSchduleParams = (params: IUpdateReleaseSchduleParams) => [this.wallet.utils.toString(params.endTime),this.wallet.utils.toString(params.initialReleaseAmount),this.wallet.utils.toString(params.decrementDecimal)];
        let updateReleaseSchdule_send = async (params: IUpdateReleaseSchduleParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateReleaseSchdule',updateReleaseSchduleParams(params),options);
            return result;
        }
        let updateReleaseSchdule_call = async (params: IUpdateReleaseSchduleParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateReleaseSchdule',updateReleaseSchduleParams(params),options);
            return;
        }
        this.updateReleaseSchdule = Object.assign(updateReleaseSchdule_send, {
            call:updateReleaseSchdule_call
        });
    }
}
export module Vault{
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface NewSaleEvent {salesId:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
}