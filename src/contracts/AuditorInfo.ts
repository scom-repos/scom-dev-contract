import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./AuditorInfo.json";

export interface IDeployParams {token:string;cooldownPeriod:number|BigNumber}
export interface IGetAuditorsParams {auditorIdStart:number|BigNumber;length:number|BigNumber}
export class AuditorInfo extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.token,this.wallet.utils.toString(params.cooldownPeriod)], options);
    }
    parseAddAuditorEvent(receipt: TransactionReceipt): AuditorInfo.AddAuditorEvent[]{
        return this.parseEvents(receipt, "AddAuditor").map(e=>this.decodeAddAuditorEvent(e));
    }
    decodeAddAuditorEvent(event: Event): AuditorInfo.AddAuditorEvent{
        let result = event.data;
        return {
            auditor: result.auditor,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): AuditorInfo.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): AuditorInfo.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): AuditorInfo.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): AuditorInfo.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDisableAuditorEvent(receipt: TransactionReceipt): AuditorInfo.DisableAuditorEvent[]{
        return this.parseEvents(receipt, "DisableAuditor").map(e=>this.decodeDisableAuditorEvent(e));
    }
    decodeDisableAuditorEvent(event: Event): AuditorInfo.DisableAuditorEvent{
        let result = event.data;
        return {
            auditor: result.auditor,
            _event: event
        };
    }
    parseSetCooldownPeriodEvent(receipt: TransactionReceipt): AuditorInfo.SetCooldownPeriodEvent[]{
        return this.parseEvents(receipt, "SetCooldownPeriod").map(e=>this.decodeSetCooldownPeriodEvent(e));
    }
    decodeSetCooldownPeriodEvent(event: Event): AuditorInfo.SetCooldownPeriodEvent{
        let result = event.data;
        return {
            cooldownPeriod: new BigNumber(result.cooldownPeriod),
            _event: event
        };
    }
    parseStakeBondEvent(receipt: TransactionReceipt): AuditorInfo.StakeBondEvent[]{
        return this.parseEvents(receipt, "StakeBond").map(e=>this.decodeStakeBondEvent(e));
    }
    decodeStakeBondEvent(event: Event): AuditorInfo.StakeBondEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): AuditorInfo.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): AuditorInfo.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): AuditorInfo.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): AuditorInfo.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnstakeBondRequestEvent(receipt: TransactionReceipt): AuditorInfo.UnstakeBondRequestEvent[]{
        return this.parseEvents(receipt, "UnstakeBondRequest").map(e=>this.decodeUnstakeBondRequestEvent(e));
    }
    decodeUnstakeBondRequestEvent(event: Event): AuditorInfo.UnstakeBondRequestEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseWithdrawBondEvent(receipt: TransactionReceipt): AuditorInfo.WithdrawBondEvent[]{
        return this.parseEvents(receipt, "WithdrawBond").map(e=>this.decodeWithdrawBondEvent(e));
    }
    decodeWithdrawBondEvent(event: Event): AuditorInfo.WithdrawBondEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    MAX_COOLDOWN_PERIOD: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    addAuditor: {
        (auditor:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditor:string, options?: TransactionOptions) => Promise<void>;
    }
    auditorBalance: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    auditorIdCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    auditorIds: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    auditorsData: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{auditor:string,status:BigNumber}>;
    }
    cooldownPeriod: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    disableAuditor: {
        (auditor:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditor:string, options?: TransactionOptions) => Promise<void>;
    }
    getAuditors: {
        (params: IGetAuditorsParams, options?: TransactionOptions): Promise<{auditor:string,status:BigNumber}[]>;
    }
    isActiveAuditor: {
        (account:string, options?: TransactionOptions): Promise<boolean>;
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
    pendingWithdrawal: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{amount:BigNumber,releaseTime:BigNumber}>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    setCooldownPeriod: {
        (cooldownPeriod:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (cooldownPeriod:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    stakeBond: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
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
    unstakeBondRequest: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    withdrawBond: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let MAX_COOLDOWN_PERIOD_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('MAX_COOLDOWN_PERIOD',[],options);
            return new BigNumber(result);
        }
        this.MAX_COOLDOWN_PERIOD = MAX_COOLDOWN_PERIOD_call
        let auditorBalance_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('auditorBalance',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.auditorBalance = auditorBalance_call
        let auditorIdCount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('auditorIdCount',[],options);
            return new BigNumber(result);
        }
        this.auditorIdCount = auditorIdCount_call
        let auditorIds_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('auditorIds',[param1],options);
            return new BigNumber(result);
        }
        this.auditorIds = auditorIds_call
        let auditorsData_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{auditor:string,status:BigNumber}> => {
            let result = await this.call('auditorsData',[this.wallet.utils.toString(param1)],options);
            return {
                auditor: result.auditor,
                status: new BigNumber(result.status)
            };
        }
        this.auditorsData = auditorsData_call
        let cooldownPeriod_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('cooldownPeriod',[],options);
            return new BigNumber(result);
        }
        this.cooldownPeriod = cooldownPeriod_call
        let getAuditorsParams = (params: IGetAuditorsParams) => [this.wallet.utils.toString(params.auditorIdStart),this.wallet.utils.toString(params.length)];
        let getAuditors_call = async (params: IGetAuditorsParams, options?: TransactionOptions): Promise<{auditor:string,status:BigNumber}[]> => {
            let result = await this.call('getAuditors',getAuditorsParams(params),options);
            return (result.map(e=>(
                {
                    auditor: e.auditor,
                    status: new BigNumber(e.status)
                }
            )));
        }
        this.getAuditors = getAuditors_call
        let isActiveAuditor_call = async (account:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isActiveAuditor',[account],options);
            return result;
        }
        this.isActiveAuditor = isActiveAuditor_call
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
        let pendingWithdrawal_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{amount:BigNumber,releaseTime:BigNumber}> => {
            let result = await this.call('pendingWithdrawal',[this.wallet.utils.toString(param1)],options);
            return {
                amount: new BigNumber(result.amount),
                releaseTime: new BigNumber(result.releaseTime)
            };
        }
        this.pendingWithdrawal = pendingWithdrawal_call
        let token_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('token',[],options);
            return result;
        }
        this.token = token_call
        let addAuditor_send = async (auditor:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addAuditor',[auditor],options);
            return result;
        }
        let addAuditor_call = async (auditor:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addAuditor',[auditor],options);
            return;
        }
        this.addAuditor = Object.assign(addAuditor_send, {
            call:addAuditor_call
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
        let disableAuditor_send = async (auditor:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('disableAuditor',[auditor],options);
            return result;
        }
        let disableAuditor_call = async (auditor:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('disableAuditor',[auditor],options);
            return;
        }
        this.disableAuditor = Object.assign(disableAuditor_send, {
            call:disableAuditor_call
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
        let setCooldownPeriod_send = async (cooldownPeriod:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setCooldownPeriod',[this.wallet.utils.toString(cooldownPeriod)],options);
            return result;
        }
        let setCooldownPeriod_call = async (cooldownPeriod:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setCooldownPeriod',[this.wallet.utils.toString(cooldownPeriod)],options);
            return;
        }
        this.setCooldownPeriod = Object.assign(setCooldownPeriod_send, {
            call:setCooldownPeriod_call
        });
        let stakeBond_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('stakeBond',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let stakeBond_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('stakeBond',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.stakeBond = Object.assign(stakeBond_send, {
            call:stakeBond_call
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
        let unstakeBondRequest_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unstakeBondRequest',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let unstakeBondRequest_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('unstakeBondRequest',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.unstakeBondRequest = Object.assign(unstakeBondRequest_send, {
            call:unstakeBondRequest_call
        });
        let withdrawBond_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdrawBond',[],options);
            return result;
        }
        let withdrawBond_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('withdrawBond',[],options);
            return;
        }
        this.withdrawBond = Object.assign(withdrawBond_send, {
            call:withdrawBond_call
        });
    }
}
export module AuditorInfo{
    export interface AddAuditorEvent {auditor:string,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface DisableAuditorEvent {auditor:string,_event:Event}
    export interface SetCooldownPeriodEvent {cooldownPeriod:BigNumber,_event:Event}
    export interface StakeBondEvent {sender:string,amount:BigNumber,newBalance:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnstakeBondRequestEvent {sender:string,amount:BigNumber,newBalance:BigNumber,_event:Event}
    export interface WithdrawBondEvent {sender:string,amount:BigNumber,_event:Event}
}