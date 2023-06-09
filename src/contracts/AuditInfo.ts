import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./AuditInfo.json";
export interface IDeployParams {projectInfo:string;auditorInfo:string;warningThreshold:number|BigNumber;passingThreshold:number|BigNumber;auditDuration:number|BigNumber;minAuditRequired:number|BigNumber}
export interface IAddAuditReportParams {packageVersionsId:number|BigNumber;auditResult:number|BigNumber;ipfsCid:string}
export interface IAuditHistoryParams {param1:number|BigNumber;param2:number|BigNumber;param3:number|BigNumber}
export interface IAuditHistoryLengthParams {packageVersionsId:number|BigNumber;auditor:string}
export interface IPackageVersionsAuditorsParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IPackageVersionsAuditorsInvParams {param1:number|BigNumber;param2:string}
export class AuditInfo extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.projectInfo,params.auditorInfo,this.wallet.utils.toString(params.warningThreshold),this.wallet.utils.toString(params.passingThreshold),this.wallet.utils.toString(params.auditDuration),this.wallet.utils.toString(params.minAuditRequired)], options);
    }
    parseAddAuditReportEvent(receipt: TransactionReceipt): AuditInfo.AddAuditReportEvent[]{
        return this.parseEvents(receipt, "AddAuditReport").map(e=>this.decodeAddAuditReportEvent(e));
    }
    decodeAddAuditReportEvent(event: Event): AuditInfo.AddAuditReportEvent{
        let result = event.data;
        return {
            auditor: result.auditor,
            packageVersionsId: new BigNumber(result.packageVersionsId),
            auditResult: new BigNumber(result.auditResult),
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): AuditInfo.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): AuditInfo.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): AuditInfo.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): AuditInfo.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): AuditInfo.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): AuditInfo.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): AuditInfo.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): AuditInfo.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    THRESHOLD_BASE: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    addAuditReport: {
        (params: IAddAuditReportParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddAuditReportParams, options?: TransactionOptions) => Promise<void>;
    }
    auditDuration: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    auditHistory: {
        (params: IAuditHistoryParams, options?: TransactionOptions): Promise<{auditResult:BigNumber,ipfsCid:string,timestamp:BigNumber}>;
    }
    auditHistoryAuditorLength: {
        (packageVersionsId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    auditHistoryLength: {
        (params: IAuditHistoryLengthParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    auditorInfo: {
        (options?: TransactionOptions): Promise<string>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    getLastAuditResult: {
        (packageVersionsId:number|BigNumber, options?: TransactionOptions): Promise<{auditors:string[],results:BigNumber[]}>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    lastAuditResultBeforeAuditPeriod: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    latestAuditResult: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    minAuditRequired: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    packageVersionsAuditors: {
        (params: IPackageVersionsAuditorsParams, options?: TransactionOptions): Promise<string>;
    }
    packageVersionsAuditorsInv: {
        (params: IPackageVersionsAuditorsInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    passingThreshold: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    projectInfo: {
        (options?: TransactionOptions): Promise<string>;
    }
    setAuditDuration: {
        (auditDuration:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditDuration:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    setMinAuditRequired: {
        (minAuditRequired:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (minAuditRequired:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    setPassingThreshold: {
        (passingThreshold:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (passingThreshold:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    setWarningThreshold: {
        (warningThreshold:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (warningThreshold:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    warningThreshold: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    private assign(){
        let THRESHOLD_BASE_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('THRESHOLD_BASE',[],options);
            return new BigNumber(result);
        }
        this.THRESHOLD_BASE = THRESHOLD_BASE_call
        let auditDuration_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('auditDuration',[],options);
            return new BigNumber(result);
        }
        this.auditDuration = auditDuration_call
        let auditHistoryParams = (params: IAuditHistoryParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2),this.wallet.utils.toString(params.param3)];
        let auditHistory_call = async (params: IAuditHistoryParams, options?: TransactionOptions): Promise<{auditResult:BigNumber,ipfsCid:string,timestamp:BigNumber}> => {
            let result = await this.call('auditHistory',auditHistoryParams(params),options);
            return {
                auditResult: new BigNumber(result.auditResult),
                ipfsCid: result.ipfsCid,
                timestamp: new BigNumber(result.timestamp)
            };
        }
        this.auditHistory = auditHistory_call
        let auditHistoryAuditorLength_call = async (packageVersionsId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('auditHistoryAuditorLength',[this.wallet.utils.toString(packageVersionsId)],options);
            return new BigNumber(result);
        }
        this.auditHistoryAuditorLength = auditHistoryAuditorLength_call
        let auditHistoryLengthParams = (params: IAuditHistoryLengthParams) => [this.wallet.utils.toString(params.packageVersionsId),params.auditor];
        let auditHistoryLength_call = async (params: IAuditHistoryLengthParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('auditHistoryLength',auditHistoryLengthParams(params),options);
            return new BigNumber(result);
        }
        this.auditHistoryLength = auditHistoryLength_call
        let auditorInfo_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('auditorInfo',[],options);
            return result;
        }
        this.auditorInfo = auditorInfo_call
        let getLastAuditResult_call = async (packageVersionsId:number|BigNumber, options?: TransactionOptions): Promise<{auditors:string[],results:BigNumber[]}> => {
            let result = await this.call('getLastAuditResult',[this.wallet.utils.toString(packageVersionsId)],options);
            return {
                auditors: result.auditors,
                results: result.results.map(e=>new BigNumber(e))
            };
        }
        this.getLastAuditResult = getLastAuditResult_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let lastAuditResultBeforeAuditPeriod_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('lastAuditResultBeforeAuditPeriod',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.lastAuditResultBeforeAuditPeriod = lastAuditResultBeforeAuditPeriod_call
        let latestAuditResult_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('latestAuditResult',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.latestAuditResult = latestAuditResult_call
        let minAuditRequired_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('minAuditRequired',[],options);
            return new BigNumber(result);
        }
        this.minAuditRequired = minAuditRequired_call
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
        let packageVersionsAuditorsParams = (params: IPackageVersionsAuditorsParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let packageVersionsAuditors_call = async (params: IPackageVersionsAuditorsParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('packageVersionsAuditors',packageVersionsAuditorsParams(params),options);
            return result;
        }
        this.packageVersionsAuditors = packageVersionsAuditors_call
        let packageVersionsAuditorsInvParams = (params: IPackageVersionsAuditorsInvParams) => [this.wallet.utils.toString(params.param1),params.param2];
        let packageVersionsAuditorsInv_call = async (params: IPackageVersionsAuditorsInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('packageVersionsAuditorsInv',packageVersionsAuditorsInvParams(params),options);
            return new BigNumber(result);
        }
        this.packageVersionsAuditorsInv = packageVersionsAuditorsInv_call
        let passingThreshold_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('passingThreshold',[],options);
            return new BigNumber(result);
        }
        this.passingThreshold = passingThreshold_call
        let projectInfo_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('projectInfo',[],options);
            return result;
        }
        this.projectInfo = projectInfo_call
        let warningThreshold_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('warningThreshold',[],options);
            return new BigNumber(result);
        }
        this.warningThreshold = warningThreshold_call
        let addAuditReportParams = (params: IAddAuditReportParams) => [this.wallet.utils.toString(params.packageVersionsId),this.wallet.utils.toString(params.auditResult),params.ipfsCid];
        let addAuditReport_send = async (params: IAddAuditReportParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addAuditReport',addAuditReportParams(params),options);
            return result;
        }
        let addAuditReport_call = async (params: IAddAuditReportParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addAuditReport',addAuditReportParams(params),options);
            return;
        }
        this.addAuditReport = Object.assign(addAuditReport_send, {
            call:addAuditReport_call
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
        let setAuditDuration_send = async (auditDuration:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setAuditDuration',[this.wallet.utils.toString(auditDuration)],options);
            return result;
        }
        let setAuditDuration_call = async (auditDuration:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setAuditDuration',[this.wallet.utils.toString(auditDuration)],options);
            return;
        }
        this.setAuditDuration = Object.assign(setAuditDuration_send, {
            call:setAuditDuration_call
        });
        let setMinAuditRequired_send = async (minAuditRequired:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setMinAuditRequired',[this.wallet.utils.toString(minAuditRequired)],options);
            return result;
        }
        let setMinAuditRequired_call = async (minAuditRequired:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setMinAuditRequired',[this.wallet.utils.toString(minAuditRequired)],options);
            return;
        }
        this.setMinAuditRequired = Object.assign(setMinAuditRequired_send, {
            call:setMinAuditRequired_call
        });
        let setPassingThreshold_send = async (passingThreshold:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setPassingThreshold',[this.wallet.utils.toString(passingThreshold)],options);
            return result;
        }
        let setPassingThreshold_call = async (passingThreshold:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setPassingThreshold',[this.wallet.utils.toString(passingThreshold)],options);
            return;
        }
        this.setPassingThreshold = Object.assign(setPassingThreshold_send, {
            call:setPassingThreshold_call
        });
        let setWarningThreshold_send = async (warningThreshold:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setWarningThreshold',[this.wallet.utils.toString(warningThreshold)],options);
            return result;
        }
        let setWarningThreshold_call = async (warningThreshold:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setWarningThreshold',[this.wallet.utils.toString(warningThreshold)],options);
            return;
        }
        this.setWarningThreshold = Object.assign(setWarningThreshold_send, {
            call:setWarningThreshold_call
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
    }
}
export module AuditInfo{
    export interface AddAuditReportEvent {auditor:string,packageVersionsId:BigNumber,auditResult:BigNumber,ipfsCid:string,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
}