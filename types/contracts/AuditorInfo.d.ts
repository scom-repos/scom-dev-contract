import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    token: string;
    minStakes: number | BigNumber;
    minEndorsementsRequired: number | BigNumber;
    cooldownPeriod: number | BigNumber;
}
export interface IEndorseAuditorParams {
    auditor: string;
    doUpdate: boolean;
}
export interface IEndorsedByParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IEndorsedByInvParams {
    param1: string;
    param2: string;
}
export interface IEndorsingParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IEndorsingInvParams {
    param1: string;
    param2: string;
}
export interface IGetAuditorsParams {
    auditorIdStart: number | BigNumber;
    length: number | BigNumber;
}
export interface IRemoveEndorsementParams {
    auditor: string;
    doUpdate: boolean;
}
export interface IStakeBondParams {
    amount: number | BigNumber;
    doUpdate: boolean;
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
    parseEndorseAuditorEvent(receipt: TransactionReceipt): AuditorInfo.EndorseAuditorEvent[];
    decodeEndorseAuditorEvent(event: Event): AuditorInfo.EndorseAuditorEvent;
    parseSetCooldownPeriodEvent(receipt: TransactionReceipt): AuditorInfo.SetCooldownPeriodEvent[];
    decodeSetCooldownPeriodEvent(event: Event): AuditorInfo.SetCooldownPeriodEvent;
    parseSetMinEndorsementsRequiredEvent(receipt: TransactionReceipt): AuditorInfo.SetMinEndorsementsRequiredEvent[];
    decodeSetMinEndorsementsRequiredEvent(event: Event): AuditorInfo.SetMinEndorsementsRequiredEvent;
    parseSetMinStakeEvent(receipt: TransactionReceipt): AuditorInfo.SetMinStakeEvent[];
    decodeSetMinStakeEvent(event: Event): AuditorInfo.SetMinStakeEvent;
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
    auditorIdCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    auditorIds: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    auditors: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    auditorsData: {
        (param1: string, options?: TransactionOptions): Promise<{
            status: BigNumber;
            balance: BigNumber;
            endorsementCount: BigNumber;
        }>;
    };
    cooldownPeriod: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    endorseAuditor: {
        (params: IEndorseAuditorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IEndorseAuditorParams, options?: TransactionOptions) => Promise<void>;
    };
    endorsedBy: {
        (params: IEndorsedByParams, options?: TransactionOptions): Promise<string>;
    };
    endorsedByInv: {
        (params: IEndorsedByInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    endorsedByLength: {
        (endorsee: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    endorsing: {
        (params: IEndorsingParams, options?: TransactionOptions): Promise<string>;
    };
    endorsingInv: {
        (params: IEndorsingInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    endorsingLength: {
        (endorser: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    getAuditors: {
        (params: IGetAuditorsParams, options?: TransactionOptions): Promise<{
            auditors: string[];
            auditorsData: {
                status: BigNumber;
                balance: BigNumber;
                endorsementCount: BigNumber;
            }[];
        }>;
    };
    isActiveAuditor: {
        (account: string, options?: TransactionOptions): Promise<boolean>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    minEndorsementsRequired: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    minStakes: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    pendingWithdrawal: {
        (param1: string, options?: TransactionOptions): Promise<{
            amount: BigNumber;
            releaseTime: BigNumber;
        }>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    registerAuditor: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    removeEndorsement: {
        (params: IRemoveEndorsementParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveEndorsementParams, options?: TransactionOptions) => Promise<void>;
    };
    setCooldownPeriod: {
        (cooldownPeriod: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (cooldownPeriod: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setMinEndorsementsRequired: {
        (minEndorsementsRequired: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (minEndorsementsRequired: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setMinStakes: {
        (minStakes: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (minStakes: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    stakeBond: {
        (params: IStakeBondParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStakeBondParams, options?: TransactionOptions) => Promise<void>;
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
    updateAudtorState: {
        (auditor: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditor: string, options?: TransactionOptions) => Promise<void>;
    };
    updateEndorsementCountBatch: {
        (auditors: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditors: string[], options?: TransactionOptions) => Promise<void>;
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
    interface EndorseAuditorEvent {
        endorser: string;
        endorsee: string;
        _event: Event;
    }
    interface SetCooldownPeriodEvent {
        cooldownPeriod: BigNumber;
        _event: Event;
    }
    interface SetMinEndorsementsRequiredEvent {
        minEndorsementsRequired: BigNumber;
        _event: Event;
    }
    interface SetMinStakeEvent {
        minStake: BigNumber;
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
