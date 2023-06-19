import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./AuditorInfo.json";
export interface IDeployParams {token:string;foundation:string;minStakes:number|BigNumber;minEndorsementsRequired:number|BigNumber;cooldownPeriod:number|BigNumber}
export interface IAddAuditorParams {auditor:string;isSuperAuditor:boolean}
export interface IEndorseAuditorParams {auditor:string;doUpdate:boolean}
export interface IEndorsedByParams {param1:string;param2:number|BigNumber}
export interface IEndorsedByInvParams {param1:string;param2:string}
export interface IEndorsingParams {param1:string;param2:number|BigNumber}
export interface IEndorsingInvParams {param1:string;param2:string}
export interface IGetAuditorsParams {auditorIdStart:number|BigNumber;length:number|BigNumber}
export interface IGetEndorsedByParams {endorsee:string;start:number|BigNumber;length:number|BigNumber}
export interface IGetEndorsingParams {endorser:string;start:number|BigNumber;length:number|BigNumber}
export interface IGetStakedByParams {auditor:string;start:number|BigNumber;length:number|BigNumber}
export interface IGetStakerAuditorParams {staker:string;start:number|BigNumber;length:number|BigNumber}
export interface IPenalizeParams {auditor:string;unfreezeAuditor:boolean;staker:string[];amount:(number|BigNumber)[]}
export interface IRevokeEndorsementParams {auditor:string;doUpdate:boolean}
export interface IStakeBondParams {auditor:string;amount:number|BigNumber;doUpdate:boolean}
export interface IStakeToParams {param1:string;param2:string}
export interface IStakedByParams {param1:string;param2:number|BigNumber}
export interface IStakedByInvParams {param1:string;param2:string}
export interface IStakerAuditorParams {param1:string;param2:number|BigNumber}
export interface IUnstakeBondRequestParams {auditor:string;amount:number|BigNumber}
export class AuditorInfo extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.token,params.foundation,this.wallet.utils.toString(params.minStakes),this.wallet.utils.toString(params.minEndorsementsRequired),this.wallet.utils.toString(params.cooldownPeriod)], options);
    }
    parseAddAuditorEvent(receipt: TransactionReceipt): AuditorInfo.AddAuditorEvent[]{
        return this.parseEvents(receipt, "AddAuditor").map(e=>this.decodeAddAuditorEvent(e));
    }
    decodeAddAuditorEvent(event: Event): AuditorInfo.AddAuditorEvent{
        let result = event.data;
        return {
            auditorId: new BigNumber(result.auditorId),
            auditor: result.auditor,
            _event: event
        };
    }
    parseAuditorStateChangeEvent(receipt: TransactionReceipt): AuditorInfo.AuditorStateChangeEvent[]{
        return this.parseEvents(receipt, "AuditorStateChange").map(e=>this.decodeAuditorStateChangeEvent(e));
    }
    decodeAuditorStateChangeEvent(event: Event): AuditorInfo.AuditorStateChangeEvent{
        let result = event.data;
        return {
            auditor: result.auditor,
            newState: new BigNumber(result.newState),
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
    parseEndorseAuditorEvent(receipt: TransactionReceipt): AuditorInfo.EndorseAuditorEvent[]{
        return this.parseEvents(receipt, "EndorseAuditor").map(e=>this.decodeEndorseAuditorEvent(e));
    }
    decodeEndorseAuditorEvent(event: Event): AuditorInfo.EndorseAuditorEvent{
        let result = event.data;
        return {
            endorser: result.endorser,
            endorsee: result.endorsee,
            _event: event
        };
    }
    parsePenalizeEvent(receipt: TransactionReceipt): AuditorInfo.PenalizeEvent[]{
        return this.parseEvents(receipt, "Penalize").map(e=>this.decodePenalizeEvent(e));
    }
    decodePenalizeEvent(event: Event): AuditorInfo.PenalizeEvent{
        let result = event.data;
        return {
            auditor: result.auditor,
            staker: result.staker,
            amount: new BigNumber(result.amount),
            auditorBalance: new BigNumber(result.auditorBalance),
            stakerAuditorBalance: new BigNumber(result.stakerAuditorBalance),
            _event: event
        };
    }
    parseRevokeEndorsementEvent(receipt: TransactionReceipt): AuditorInfo.RevokeEndorsementEvent[]{
        return this.parseEvents(receipt, "RevokeEndorsement").map(e=>this.decodeRevokeEndorsementEvent(e));
    }
    decodeRevokeEndorsementEvent(event: Event): AuditorInfo.RevokeEndorsementEvent{
        let result = event.data;
        return {
            endorser: result.endorser,
            endorsee: result.endorsee,
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
    parseSetMinEndorsementsRequiredEvent(receipt: TransactionReceipt): AuditorInfo.SetMinEndorsementsRequiredEvent[]{
        return this.parseEvents(receipt, "SetMinEndorsementsRequired").map(e=>this.decodeSetMinEndorsementsRequiredEvent(e));
    }
    decodeSetMinEndorsementsRequiredEvent(event: Event): AuditorInfo.SetMinEndorsementsRequiredEvent{
        let result = event.data;
        return {
            minEndorsementsRequired: new BigNumber(result.minEndorsementsRequired),
            _event: event
        };
    }
    parseSetMinStakesEvent(receipt: TransactionReceipt): AuditorInfo.SetMinStakesEvent[]{
        return this.parseEvents(receipt, "SetMinStakes").map(e=>this.decodeSetMinStakesEvent(e));
    }
    decodeSetMinStakesEvent(event: Event): AuditorInfo.SetMinStakesEvent{
        let result = event.data;
        return {
            minStakes: new BigNumber(result.minStakes),
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
            auditor: result.auditor,
            amount: new BigNumber(result.amount),
            auditorBalance: new BigNumber(result.auditorBalance),
            stakerAuditorBalance: new BigNumber(result.stakerAuditorBalance),
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
            auditor: result.auditor,
            amount: new BigNumber(result.amount),
            auditorBalance: new BigNumber(result.auditorBalance),
            stakerAuditorBalance: new BigNumber(result.stakerAuditorBalance),
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
        (params: IAddAuditorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddAuditorParams, options?: TransactionOptions) => Promise<void>;
    }
    auditorIdCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    auditorIds: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    auditors: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    auditorsData: {
        (param1:string, options?: TransactionOptions): Promise<{status:BigNumber,balance:BigNumber,endorsementCount:BigNumber}>;
    }
    cooldownPeriod: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    endorseAuditor: {
        (params: IEndorseAuditorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IEndorseAuditorParams, options?: TransactionOptions) => Promise<void>;
    }
    endorsedBy: {
        (params: IEndorsedByParams, options?: TransactionOptions): Promise<string>;
    }
    endorsedByInv: {
        (params: IEndorsedByInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    endorsedByLength: {
        (endorsee:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    endorsing: {
        (params: IEndorsingParams, options?: TransactionOptions): Promise<string>;
    }
    endorsingInv: {
        (params: IEndorsingInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    endorsingLength: {
        (endorser:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    foundation: {
        (options?: TransactionOptions): Promise<string>;
    }
    freezeAuditor: {
        (auditor:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditor:string, options?: TransactionOptions) => Promise<void>;
    }
    getAuditors: {
        (params: IGetAuditorsParams, options?: TransactionOptions): Promise<{auditors:string[],auditorsData:{status:BigNumber,balance:BigNumber,endorsementCount:BigNumber}[]}>;
    }
    getEndorsedBy: {
        (params: IGetEndorsedByParams, options?: TransactionOptions): Promise<string[]>;
    }
    getEndorsing: {
        (params: IGetEndorsingParams, options?: TransactionOptions): Promise<string[]>;
    }
    getStakedBy: {
        (params: IGetStakedByParams, options?: TransactionOptions): Promise<string[]>;
    }
    getStakerAuditor: {
        (params: IGetStakerAuditorParams, options?: TransactionOptions): Promise<string[]>;
    }
    isActiveAuditor: {
        (auditor:string, options?: TransactionOptions): Promise<boolean>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    minEndorsementsRequired: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    minStakes: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    penalize: {
        (params: IPenalizeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPenalizeParams, options?: TransactionOptions) => Promise<void>;
    }
    pendingWithdrawal: {
        (param1:string, options?: TransactionOptions): Promise<{amount:BigNumber,releaseTime:BigNumber}>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    registerAuditor: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    revokeEndorsement: {
        (params: IRevokeEndorsementParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRevokeEndorsementParams, options?: TransactionOptions) => Promise<void>;
    }
    setCooldownPeriod: {
        (cooldownPeriod:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (cooldownPeriod:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    setMinEndorsementsRequired: {
        (minEndorsementsRequired:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (minEndorsementsRequired:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    setMinStakes: {
        (minStakes:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (minStakes:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    stakeBond: {
        (params: IStakeBondParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStakeBondParams, options?: TransactionOptions) => Promise<void>;
    }
    stakeTo: {
        (params: IStakeToParams, options?: TransactionOptions): Promise<{index:BigNumber,balance:BigNumber}>;
    }
    stakedBy: {
        (params: IStakedByParams, options?: TransactionOptions): Promise<string>;
    }
    stakedByInv: {
        (params: IStakedByInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    stakedByLength: {
        (auditor:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    stakerAuditor: {
        (params: IStakerAuditorParams, options?: TransactionOptions): Promise<string>;
    }
    stakerAuditorLength: {
        (staker:string, options?: TransactionOptions): Promise<BigNumber>;
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
        (params: IUnstakeBondRequestParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeBondRequestParams, options?: TransactionOptions) => Promise<void>;
    }
    updateAuditorState: {
        (auditor:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditor:string, options?: TransactionOptions) => Promise<void>;
    }
    updateAuditorStateInBatch: {
        (auditors:string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditors:string[], options?: TransactionOptions) => Promise<void>;
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
        let auditors_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('auditors',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.auditors = auditors_call
        let auditorsData_call = async (param1:string, options?: TransactionOptions): Promise<{status:BigNumber,balance:BigNumber,endorsementCount:BigNumber}> => {
            let result = await this.call('auditorsData',[param1],options);
            return {
                status: new BigNumber(result.status),
                balance: new BigNumber(result.balance),
                endorsementCount: new BigNumber(result.endorsementCount)
            };
        }
        this.auditorsData = auditorsData_call
        let cooldownPeriod_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('cooldownPeriod',[],options);
            return new BigNumber(result);
        }
        this.cooldownPeriod = cooldownPeriod_call
        let endorsedByParams = (params: IEndorsedByParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let endorsedBy_call = async (params: IEndorsedByParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('endorsedBy',endorsedByParams(params),options);
            return result;
        }
        this.endorsedBy = endorsedBy_call
        let endorsedByInvParams = (params: IEndorsedByInvParams) => [params.param1,params.param2];
        let endorsedByInv_call = async (params: IEndorsedByInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('endorsedByInv',endorsedByInvParams(params),options);
            return new BigNumber(result);
        }
        this.endorsedByInv = endorsedByInv_call
        let endorsedByLength_call = async (endorsee:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('endorsedByLength',[endorsee],options);
            return new BigNumber(result);
        }
        this.endorsedByLength = endorsedByLength_call
        let endorsingParams = (params: IEndorsingParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let endorsing_call = async (params: IEndorsingParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('endorsing',endorsingParams(params),options);
            return result;
        }
        this.endorsing = endorsing_call
        let endorsingInvParams = (params: IEndorsingInvParams) => [params.param1,params.param2];
        let endorsingInv_call = async (params: IEndorsingInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('endorsingInv',endorsingInvParams(params),options);
            return new BigNumber(result);
        }
        this.endorsingInv = endorsingInv_call
        let endorsingLength_call = async (endorser:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('endorsingLength',[endorser],options);
            return new BigNumber(result);
        }
        this.endorsingLength = endorsingLength_call
        let foundation_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('foundation',[],options);
            return result;
        }
        this.foundation = foundation_call
        let getAuditorsParams = (params: IGetAuditorsParams) => [this.wallet.utils.toString(params.auditorIdStart),this.wallet.utils.toString(params.length)];
        let getAuditors_call = async (params: IGetAuditorsParams, options?: TransactionOptions): Promise<{auditors:string[],auditorsData:{status:BigNumber,balance:BigNumber,endorsementCount:BigNumber}[]}> => {
            let result = await this.call('getAuditors',getAuditorsParams(params),options);
            return {
                auditors: result._auditors,
                auditorsData: result._auditorsData.map(e=>(
                    {
                        status: new BigNumber(e.status),
                        balance: new BigNumber(e.balance),
                        endorsementCount: new BigNumber(e.endorsementCount)
                    }
                ))
            };
        }
        this.getAuditors = getAuditors_call
        let getEndorsedByParams = (params: IGetEndorsedByParams) => [params.endorsee,this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getEndorsedBy_call = async (params: IGetEndorsedByParams, options?: TransactionOptions): Promise<string[]> => {
            let result = await this.call('getEndorsedBy',getEndorsedByParams(params),options);
            return result;
        }
        this.getEndorsedBy = getEndorsedBy_call
        let getEndorsingParams = (params: IGetEndorsingParams) => [params.endorser,this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getEndorsing_call = async (params: IGetEndorsingParams, options?: TransactionOptions): Promise<string[]> => {
            let result = await this.call('getEndorsing',getEndorsingParams(params),options);
            return result;
        }
        this.getEndorsing = getEndorsing_call
        let getStakedByParams = (params: IGetStakedByParams) => [params.auditor,this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getStakedBy_call = async (params: IGetStakedByParams, options?: TransactionOptions): Promise<string[]> => {
            let result = await this.call('getStakedBy',getStakedByParams(params),options);
            return result;
        }
        this.getStakedBy = getStakedBy_call
        let getStakerAuditorParams = (params: IGetStakerAuditorParams) => [params.staker,this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getStakerAuditor_call = async (params: IGetStakerAuditorParams, options?: TransactionOptions): Promise<string[]> => {
            let result = await this.call('getStakerAuditor',getStakerAuditorParams(params),options);
            return result;
        }
        this.getStakerAuditor = getStakerAuditor_call
        let isActiveAuditor_call = async (auditor:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isActiveAuditor',[auditor],options);
            return result;
        }
        this.isActiveAuditor = isActiveAuditor_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let minEndorsementsRequired_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('minEndorsementsRequired',[],options);
            return new BigNumber(result);
        }
        this.minEndorsementsRequired = minEndorsementsRequired_call
        let minStakes_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('minStakes',[],options);
            return new BigNumber(result);
        }
        this.minStakes = minStakes_call
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
        let pendingWithdrawal_call = async (param1:string, options?: TransactionOptions): Promise<{amount:BigNumber,releaseTime:BigNumber}> => {
            let result = await this.call('pendingWithdrawal',[param1],options);
            return {
                amount: new BigNumber(result.amount),
                releaseTime: new BigNumber(result.releaseTime)
            };
        }
        this.pendingWithdrawal = pendingWithdrawal_call
        let stakeToParams = (params: IStakeToParams) => [params.param1,params.param2];
        let stakeTo_call = async (params: IStakeToParams, options?: TransactionOptions): Promise<{index:BigNumber,balance:BigNumber}> => {
            let result = await this.call('stakeTo',stakeToParams(params),options);
            return {
                index: new BigNumber(result.index),
                balance: new BigNumber(result.balance)
            };
        }
        this.stakeTo = stakeTo_call
        let stakedByParams = (params: IStakedByParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let stakedBy_call = async (params: IStakedByParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('stakedBy',stakedByParams(params),options);
            return result;
        }
        this.stakedBy = stakedBy_call
        let stakedByInvParams = (params: IStakedByInvParams) => [params.param1,params.param2];
        let stakedByInv_call = async (params: IStakedByInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stakedByInv',stakedByInvParams(params),options);
            return new BigNumber(result);
        }
        this.stakedByInv = stakedByInv_call
        let stakedByLength_call = async (auditor:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stakedByLength',[auditor],options);
            return new BigNumber(result);
        }
        this.stakedByLength = stakedByLength_call
        let stakerAuditorParams = (params: IStakerAuditorParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let stakerAuditor_call = async (params: IStakerAuditorParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('stakerAuditor',stakerAuditorParams(params),options);
            return result;
        }
        this.stakerAuditor = stakerAuditor_call
        let stakerAuditorLength_call = async (staker:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stakerAuditorLength',[staker],options);
            return new BigNumber(result);
        }
        this.stakerAuditorLength = stakerAuditorLength_call
        let token_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('token',[],options);
            return result;
        }
        this.token = token_call
        let addAuditorParams = (params: IAddAuditorParams) => [params.auditor,params.isSuperAuditor];
        let addAuditor_send = async (params: IAddAuditorParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addAuditor',addAuditorParams(params),options);
            return result;
        }
        let addAuditor_call = async (params: IAddAuditorParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addAuditor',addAuditorParams(params),options);
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
        let endorseAuditorParams = (params: IEndorseAuditorParams) => [params.auditor,params.doUpdate];
        let endorseAuditor_send = async (params: IEndorseAuditorParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('endorseAuditor',endorseAuditorParams(params),options);
            return result;
        }
        let endorseAuditor_call = async (params: IEndorseAuditorParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('endorseAuditor',endorseAuditorParams(params),options);
            return;
        }
        this.endorseAuditor = Object.assign(endorseAuditor_send, {
            call:endorseAuditor_call
        });
        let freezeAuditor_send = async (auditor:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('freezeAuditor',[auditor],options);
            return result;
        }
        let freezeAuditor_call = async (auditor:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('freezeAuditor',[auditor],options);
            return;
        }
        this.freezeAuditor = Object.assign(freezeAuditor_send, {
            call:freezeAuditor_call
        });
        let penalizeParams = (params: IPenalizeParams) => [params.auditor,params.unfreezeAuditor,params.staker,this.wallet.utils.toString(params.amount)];
        let penalize_send = async (params: IPenalizeParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('penalize',penalizeParams(params),options);
            return result;
        }
        let penalize_call = async (params: IPenalizeParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('penalize',penalizeParams(params),options);
            return;
        }
        this.penalize = Object.assign(penalize_send, {
            call:penalize_call
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
        let registerAuditor_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('registerAuditor',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let registerAuditor_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('registerAuditor',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.registerAuditor = Object.assign(registerAuditor_send, {
            call:registerAuditor_call
        });
        let revokeEndorsementParams = (params: IRevokeEndorsementParams) => [params.auditor,params.doUpdate];
        let revokeEndorsement_send = async (params: IRevokeEndorsementParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('revokeEndorsement',revokeEndorsementParams(params),options);
            return result;
        }
        let revokeEndorsement_call = async (params: IRevokeEndorsementParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('revokeEndorsement',revokeEndorsementParams(params),options);
            return;
        }
        this.revokeEndorsement = Object.assign(revokeEndorsement_send, {
            call:revokeEndorsement_call
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
        let setMinEndorsementsRequired_send = async (minEndorsementsRequired:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setMinEndorsementsRequired',[this.wallet.utils.toString(minEndorsementsRequired)],options);
            return result;
        }
        let setMinEndorsementsRequired_call = async (minEndorsementsRequired:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setMinEndorsementsRequired',[this.wallet.utils.toString(minEndorsementsRequired)],options);
            return;
        }
        this.setMinEndorsementsRequired = Object.assign(setMinEndorsementsRequired_send, {
            call:setMinEndorsementsRequired_call
        });
        let setMinStakes_send = async (minStakes:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setMinStakes',[this.wallet.utils.toString(minStakes)],options);
            return result;
        }
        let setMinStakes_call = async (minStakes:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setMinStakes',[this.wallet.utils.toString(minStakes)],options);
            return;
        }
        this.setMinStakes = Object.assign(setMinStakes_send, {
            call:setMinStakes_call
        });
        let stakeBondParams = (params: IStakeBondParams) => [params.auditor,this.wallet.utils.toString(params.amount),params.doUpdate];
        let stakeBond_send = async (params: IStakeBondParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('stakeBond',stakeBondParams(params),options);
            return result;
        }
        let stakeBond_call = async (params: IStakeBondParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('stakeBond',stakeBondParams(params),options);
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
        let unstakeBondRequestParams = (params: IUnstakeBondRequestParams) => [params.auditor,this.wallet.utils.toString(params.amount)];
        let unstakeBondRequest_send = async (params: IUnstakeBondRequestParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unstakeBondRequest',unstakeBondRequestParams(params),options);
            return result;
        }
        let unstakeBondRequest_call = async (params: IUnstakeBondRequestParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('unstakeBondRequest',unstakeBondRequestParams(params),options);
            return;
        }
        this.unstakeBondRequest = Object.assign(unstakeBondRequest_send, {
            call:unstakeBondRequest_call
        });
        let updateAuditorState_send = async (auditor:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateAuditorState',[auditor],options);
            return result;
        }
        let updateAuditorState_call = async (auditor:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateAuditorState',[auditor],options);
            return;
        }
        this.updateAuditorState = Object.assign(updateAuditorState_send, {
            call:updateAuditorState_call
        });
        let updateAuditorStateInBatch_send = async (auditors:string[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateAuditorStateInBatch',[auditors],options);
            return result;
        }
        let updateAuditorStateInBatch_call = async (auditors:string[], options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateAuditorStateInBatch',[auditors],options);
            return;
        }
        this.updateAuditorStateInBatch = Object.assign(updateAuditorStateInBatch_send, {
            call:updateAuditorStateInBatch_call
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
    export interface AddAuditorEvent {auditorId:BigNumber,auditor:string,_event:Event}
    export interface AuditorStateChangeEvent {auditor:string,newState:BigNumber,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface EndorseAuditorEvent {endorser:string,endorsee:string,_event:Event}
    export interface PenalizeEvent {auditor:string,staker:string,amount:BigNumber,auditorBalance:BigNumber,stakerAuditorBalance:BigNumber,_event:Event}
    export interface RevokeEndorsementEvent {endorser:string,endorsee:string,_event:Event}
    export interface SetCooldownPeriodEvent {cooldownPeriod:BigNumber,_event:Event}
    export interface SetMinEndorsementsRequiredEvent {minEndorsementsRequired:BigNumber,_event:Event}
    export interface SetMinStakesEvent {minStakes:BigNumber,_event:Event}
    export interface StakeBondEvent {sender:string,auditor:string,amount:BigNumber,auditorBalance:BigNumber,stakerAuditorBalance:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnstakeBondRequestEvent {sender:string,auditor:string,amount:BigNumber,auditorBalance:BigNumber,stakerAuditorBalance:BigNumber,_event:Event}
    export interface WithdrawBondEvent {sender:string,amount:BigNumber,_event:Event}
}