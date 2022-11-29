import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./DomainInfo.json";

export interface IAllowancesParams {param1:string;param2:string;param3:string}
export interface IBalanceOfParams {param1:string;param2:string}
export interface IDecreaseAllowanceParams {spender:string;domainName:string;subtractedValue:number|BigNumber}
export interface IDepositParams {domainName:string;amount:number|BigNumber}
export interface IDomainModuleParams {param1:string;param2:string}
export interface IDomainTypeParams {param1:string;param2:string}
export interface IGetDomainInfoParams {owner:string;domainName:string}
export interface IIncreaseAllowanceParams {spender:string;domainName:string;addedValue:number|BigNumber}
export interface ISpendParams {owner:string;domainName:string;destination:string;amount:number|BigNumber}
export interface IUpdateDomainInfoParams {domainName:string;moduleType:number|BigNumber;module:string}
export interface IUpdateDomainModuleParams {domainName:string;module:string}
export interface IWithdrawParams {domainName:string;amount:number|BigNumber}
export class DomainInfo extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(token:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([token], options);
    }
    parseApprovalEvent(receipt: TransactionReceipt): DomainInfo.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): DomainInfo.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): DomainInfo.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): DomainInfo.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): DomainInfo.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): DomainInfo.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDepositEvent(receipt: TransactionReceipt): DomainInfo.DepositEvent[]{
        return this.parseEvents(receipt, "Deposit").map(e=>this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event: Event): DomainInfo.DepositEvent{
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseSpendEvent(receipt: TransactionReceipt): DomainInfo.SpendEvent[]{
        return this.parseEvents(receipt, "Spend").map(e=>this.decodeSpendEvent(e));
    }
    decodeSpendEvent(event: Event): DomainInfo.SpendEvent{
        let result = event.data;
        return {
            sender: result.sender,
            owner: result.owner,
            domainName: result.domainName,
            spender: result.spender,
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): DomainInfo.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): DomainInfo.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): DomainInfo.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): DomainInfo.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUpdateDomainInfoEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainInfoEvent[]{
        return this.parseEvents(receipt, "UpdateDomainInfo").map(e=>this.decodeUpdateDomainInfoEvent(e));
    }
    decodeUpdateDomainInfoEvent(event: Event): DomainInfo.UpdateDomainInfoEvent{
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            domainType: new BigNumber(result.domainType),
            module: result.module,
            _event: event
        };
    }
    parseUpdateDomainModuleEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainModuleEvent[]{
        return this.parseEvents(receipt, "UpdateDomainModule").map(e=>this.decodeUpdateDomainModuleEvent(e));
    }
    decodeUpdateDomainModuleEvent(event: Event): DomainInfo.UpdateDomainModuleEvent{
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            module: result.module,
            _event: event
        };
    }
    parseWithdrawEvent(receipt: TransactionReceipt): DomainInfo.WithdrawEvent[]{
        return this.parseEvents(receipt, "Withdraw").map(e=>this.decodeWithdrawEvent(e));
    }
    decodeWithdrawEvent(event: Event): DomainInfo.WithdrawEvent{
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    allowances: {
        (params: IAllowancesParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    balanceOf: {
        (params: IBalanceOfParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<void>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    deposit: {
        (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDepositParams, options?: TransactionOptions) => Promise<void>;
    }
    domainModule: {
        (params: IDomainModuleParams, options?: TransactionOptions): Promise<string>;
    }
    domainType: {
        (params: IDomainTypeParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    getDomainInfo: {
        (params: IGetDomainInfoParams, options?: TransactionOptions): Promise<{moduleType:BigNumber,module:string}>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<void>;
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
    spend: {
        (params: ISpendParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISpendParams, options?: TransactionOptions) => Promise<void>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    token: {
        (options?: TransactionOptions): Promise<string>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    updateDomainInfo: {
        (params: IUpdateDomainInfoParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateDomainInfoParams, options?: TransactionOptions) => Promise<void>;
    }
    updateDomainModule: {
        (params: IUpdateDomainModuleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateDomainModuleParams, options?: TransactionOptions) => Promise<void>;
    }
    withdraw: {
        (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let allowancesParams = (params: IAllowancesParams) => [params.param1,params.param2,params.param3];
        let allowances_call = async (params: IAllowancesParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('allowances',allowancesParams(params),options);
            return new BigNumber(result);
        }
        this.allowances = allowances_call
        let balanceOfParams = (params: IBalanceOfParams) => [params.param1,params.param2];
        let balanceOf_call = async (params: IBalanceOfParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('balanceOf',balanceOfParams(params),options);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let domainModuleParams = (params: IDomainModuleParams) => [params.param1,params.param2];
        let domainModule_call = async (params: IDomainModuleParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('domainModule',domainModuleParams(params),options);
            return result;
        }
        this.domainModule = domainModule_call
        let domainTypeParams = (params: IDomainTypeParams) => [params.param1,params.param2];
        let domainType_call = async (params: IDomainTypeParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('domainType',domainTypeParams(params),options);
            return new BigNumber(result);
        }
        this.domainType = domainType_call
        let getDomainInfoParams = (params: IGetDomainInfoParams) => [params.owner,params.domainName];
        let getDomainInfo_call = async (params: IGetDomainInfoParams, options?: TransactionOptions): Promise<{moduleType:BigNumber,module:string}> => {
            let result = await this.call('getDomainInfo',getDomainInfoParams(params),options);
            return {
                moduleType: new BigNumber(result.moduleType),
                module: result.module
            };
        }
        this.getDomainInfo = getDomainInfo_call
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
        let token_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('token',[],options);
            return result;
        }
        this.token = token_call
        let decreaseAllowanceParams = (params: IDecreaseAllowanceParams) => [params.spender,params.domainName,this.wallet.utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('decreaseAllowance',decreaseAllowanceParams(params),options);
            return result;
        }
        let decreaseAllowance_call = async (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('decreaseAllowance',decreaseAllowanceParams(params),options);
            return;
        }
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call:decreaseAllowance_call
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
        let depositParams = (params: IDepositParams) => [params.domainName,this.wallet.utils.toString(params.amount)];
        let deposit_send = async (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deposit',depositParams(params),options);
            return result;
        }
        let deposit_call = async (params: IDepositParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deposit',depositParams(params),options);
            return;
        }
        this.deposit = Object.assign(deposit_send, {
            call:deposit_call
        });
        let increaseAllowanceParams = (params: IIncreaseAllowanceParams) => [params.spender,params.domainName,this.wallet.utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('increaseAllowance',increaseAllowanceParams(params),options);
            return result;
        }
        let increaseAllowance_call = async (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('increaseAllowance',increaseAllowanceParams(params),options);
            return;
        }
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call:increaseAllowance_call
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
        let spendParams = (params: ISpendParams) => [params.owner,params.domainName,params.destination,this.wallet.utils.toString(params.amount)];
        let spend_send = async (params: ISpendParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('spend',spendParams(params),options);
            return result;
        }
        let spend_call = async (params: ISpendParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('spend',spendParams(params),options);
            return;
        }
        this.spend = Object.assign(spend_send, {
            call:spend_call
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
        let updateDomainInfoParams = (params: IUpdateDomainInfoParams) => [params.domainName,this.wallet.utils.toString(params.moduleType),params.module];
        let updateDomainInfo_send = async (params: IUpdateDomainInfoParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateDomainInfo',updateDomainInfoParams(params),options);
            return result;
        }
        let updateDomainInfo_call = async (params: IUpdateDomainInfoParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateDomainInfo',updateDomainInfoParams(params),options);
            return;
        }
        this.updateDomainInfo = Object.assign(updateDomainInfo_send, {
            call:updateDomainInfo_call
        });
        let updateDomainModuleParams = (params: IUpdateDomainModuleParams) => [params.domainName,params.module];
        let updateDomainModule_send = async (params: IUpdateDomainModuleParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateDomainModule',updateDomainModuleParams(params),options);
            return result;
        }
        let updateDomainModule_call = async (params: IUpdateDomainModuleParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateDomainModule',updateDomainModuleParams(params),options);
            return;
        }
        this.updateDomainModule = Object.assign(updateDomainModule_send, {
            call:updateDomainModule_call
        });
        let withdrawParams = (params: IWithdrawParams) => [params.domainName,this.wallet.utils.toString(params.amount)];
        let withdraw_send = async (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdraw',withdrawParams(params),options);
            return result;
        }
        let withdraw_call = async (params: IWithdrawParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('withdraw',withdrawParams(params),options);
            return;
        }
        this.withdraw = Object.assign(withdraw_send, {
            call:withdraw_call
        });
    }
}
export module DomainInfo{
    export interface ApprovalEvent {owner:string,domainName:string,spender:string,value:BigNumber,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface DepositEvent {owner:string,domainName:string,amount:BigNumber,newBalance:BigNumber,_event:Event}
    export interface SpendEvent {sender:string,owner:string,domainName:string,spender:string,amount:BigNumber,newBalance:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UpdateDomainInfoEvent {owner:string,domainName:string,domainType:BigNumber,module:string,_event:Event}
    export interface UpdateDomainModuleEvent {owner:string,domainName:string,module:string,_event:Event}
    export interface WithdrawEvent {owner:string,domainName:string,amount:BigNumber,newBalance:BigNumber,_event:Event}
}