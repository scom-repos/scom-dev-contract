import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    projectInfo: string;
    auditorInfo: string;
    warningThreshold: number | BigNumber;
    passingThreshold: number | BigNumber;
    auditDuration: number | BigNumber;
    minAuditRequired: number | BigNumber;
}
export interface IAddAuditReportParams {
    packageVersionsId: number | BigNumber;
    auditResult: number | BigNumber;
    ipfsCid: string;
}
export interface IAuditHistoryParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
    param3: number | BigNumber;
}
export interface IAuditHistoryLengthParams {
    packageVersionsId: number | BigNumber;
    auditor: string;
}
export interface IPackageVersionsAuditorsParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IPackageVersionsAuditorsInvParams {
    param1: number | BigNumber;
    param2: string;
}
export declare class AuditInfo extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAddAuditReportEvent(receipt: TransactionReceipt): AuditInfo.AddAuditReportEvent[];
    decodeAddAuditReportEvent(event: Event): AuditInfo.AddAuditReportEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): AuditInfo.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): AuditInfo.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): AuditInfo.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): AuditInfo.DeauthorizeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): AuditInfo.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): AuditInfo.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): AuditInfo.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): AuditInfo.TransferOwnershipEvent;
    THRESHOLD_BASE: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    addAuditReport: {
        (params: IAddAuditReportParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddAuditReportParams, options?: TransactionOptions) => Promise<void>;
    };
    auditDuration: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    auditHistory: {
        (params: IAuditHistoryParams, options?: TransactionOptions): Promise<{
            auditResult: BigNumber;
            ipfsCid: string;
            timestamp: BigNumber;
        }>;
    };
    auditHistoryAuditorLength: {
        (packageVersionsId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    auditHistoryLength: {
        (params: IAuditHistoryLengthParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    auditorInfo: {
        (options?: TransactionOptions): Promise<string>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    getLastAuditResult: {
        (packageVersionsId: number | BigNumber, options?: TransactionOptions): Promise<{
            auditors: string[];
            results: BigNumber[];
        }>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    lastAuditResultBeforeAuditPeriod: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    latestAuditResult: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    minAuditRequired: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    packageVersionsAuditors: {
        (params: IPackageVersionsAuditorsParams, options?: TransactionOptions): Promise<string>;
    };
    packageVersionsAuditorsInv: {
        (params: IPackageVersionsAuditorsInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    passingThreshold: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    projectInfo: {
        (options?: TransactionOptions): Promise<string>;
    };
    setAuditDuration: {
        (auditDuration: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditDuration: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setMinAuditRequired: {
        (minAuditRequired: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (minAuditRequired: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setPassingThreshold: {
        (passingThreshold: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (passingThreshold: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setWarningThreshold: {
        (warningThreshold: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (warningThreshold: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    warningThreshold: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    private assign;
}
export declare module AuditInfo {
    interface AddAuditReportEvent {
        auditor: string;
        packageVersionsId: BigNumber;
        auditResult: BigNumber;
        ipfsCid: string;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
}
