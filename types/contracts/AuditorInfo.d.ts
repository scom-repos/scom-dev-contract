import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    token: string;
    cooldownPeriod: number | BigNumber;
}
export interface IGetAuditorsParams {
    auditorIdStart: number | BigNumber;
    length: number | BigNumber;
}
export declare class AuditorInfo extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAddAuditorEvent(receipt: TransactionReceipt): AuditorInfo.AddAuditorEvent[];
    decodeAddAuditorEvent(event: Event): AuditorInfo.AddAuditorEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): AuditorInfo.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): AuditorInfo.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): AuditorInfo.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): AuditorInfo.DeauthorizeEvent;
    parseDisableAuditorEvent(receipt: TransactionReceipt): AuditorInfo.DisableAuditorEvent[];
    decodeDisableAuditorEvent(event: Event): AuditorInfo.DisableAuditorEvent;
    parseSetCooldownPeriodEvent(receipt: TransactionReceipt): AuditorInfo.SetCooldownPeriodEvent[];
    decodeSetCooldownPeriodEvent(event: Event): AuditorInfo.SetCooldownPeriodEvent;
    parseStakeBondEvent(receipt: TransactionReceipt): AuditorInfo.StakeBondEvent[];
    decodeStakeBondEvent(event: Event): AuditorInfo.StakeBondEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): AuditorInfo.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): AuditorInfo.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): AuditorInfo.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): AuditorInfo.TransferOwnershipEvent;
    parseUnstakeBondRequestEvent(receipt: TransactionReceipt): AuditorInfo.UnstakeBondRequestEvent[];
    decodeUnstakeBondRequestEvent(event: Event): AuditorInfo.UnstakeBondRequestEvent;
    parseWithdrawBondEvent(receipt: TransactionReceipt): AuditorInfo.WithdrawBondEvent[];
    decodeWithdrawBondEvent(event: Event): AuditorInfo.WithdrawBondEvent;
    MAX_COOLDOWN_PERIOD: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    addAuditor: {
        (auditor: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditor: string, options?: TransactionOptions) => Promise<void>;
    };
    auditorBalance: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    auditorIdCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    auditorIds: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    auditorsData: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            auditor: string;
            status: BigNumber;
        }>;
    };
    cooldownPeriod: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    disableAuditor: {
        (auditor: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditor: string, options?: TransactionOptions) => Promise<void>;
    };
    getAuditors: {
        (params: IGetAuditorsParams, options?: TransactionOptions): Promise<{
            auditor: string;
            status: BigNumber;
        }[]>;
    };
    isActiveAuditor: {
        (account: string, options?: TransactionOptions): Promise<boolean>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    pendingWithdrawal: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            amount: BigNumber;
            releaseTime: BigNumber;
        }>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    setCooldownPeriod: {
        (cooldownPeriod: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (cooldownPeriod: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    stakeBond: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    token: {
        (options?: TransactionOptions): Promise<string>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    unstakeBondRequest: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    withdrawBond: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module AuditorInfo {
    interface AddAuditorEvent {
        auditor: string;
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
    interface DisableAuditorEvent {
        auditor: string;
        _event: Event;
    }
    interface SetCooldownPeriodEvent {
        cooldownPeriod: BigNumber;
        _event: Event;
    }
    interface StakeBondEvent {
        sender: string;
        amount: BigNumber;
        newBalance: BigNumber;
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
    interface UnstakeBondRequestEvent {
        sender: string;
        amount: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface WithdrawBondEvent {
        sender: string;
        amount: BigNumber;
        _event: Event;
    }
}
