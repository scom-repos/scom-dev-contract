import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    token: string;
    foundation: string;
    minStakes: number | BigNumber;
    minEndorsementsRequired: number | BigNumber;
    cooldownPeriod: number | BigNumber;
}
export interface IAddAuditorParams {
    auditor: string;
    isSuperAuditor: boolean;
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
export interface IGetEndorsedByParams {
    endorsee: string;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetEndorsingParams {
    endorser: string;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetStakedByParams {
    auditor: string;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetStakerAuditorParams {
    staker: string;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IPenalizeParams {
    auditor: string;
    unfreezeAuditor: boolean;
    staker: string[];
    amount: (number | BigNumber)[];
}
export interface IRevokeEndorsementParams {
    auditor: string;
    doUpdate: boolean;
}
export interface IStakeBondParams {
    auditor: string;
    amount: number | BigNumber;
    doUpdate: boolean;
}
export interface IStakeToParams {
    param1: string;
    param2: string;
}
export interface IStakedByParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IStakedByInvParams {
    param1: string;
    param2: string;
}
export interface IStakerAuditorParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IUnstakeBondRequestParams {
    auditor: string;
    amount: number | BigNumber;
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
    parseEndorseAuditorEvent(receipt: TransactionReceipt): AuditorInfo.EndorseAuditorEvent[];
    decodeEndorseAuditorEvent(event: Event): AuditorInfo.EndorseAuditorEvent;
    parseFreezeAuditorEvent(receipt: TransactionReceipt): AuditorInfo.FreezeAuditorEvent[];
    decodeFreezeAuditorEvent(event: Event): AuditorInfo.FreezeAuditorEvent;
    parsePenalizeEvent(receipt: TransactionReceipt): AuditorInfo.PenalizeEvent[];
    decodePenalizeEvent(event: Event): AuditorInfo.PenalizeEvent;
    parseRevokeEndorsementEvent(receipt: TransactionReceipt): AuditorInfo.RevokeEndorsementEvent[];
    decodeRevokeEndorsementEvent(event: Event): AuditorInfo.RevokeEndorsementEvent;
    parseSetCooldownPeriodEvent(receipt: TransactionReceipt): AuditorInfo.SetCooldownPeriodEvent[];
    decodeSetCooldownPeriodEvent(event: Event): AuditorInfo.SetCooldownPeriodEvent;
    parseSetMinEndorsementsRequiredEvent(receipt: TransactionReceipt): AuditorInfo.SetMinEndorsementsRequiredEvent[];
    decodeSetMinEndorsementsRequiredEvent(event: Event): AuditorInfo.SetMinEndorsementsRequiredEvent;
    parseSetMinStakesEvent(receipt: TransactionReceipt): AuditorInfo.SetMinStakesEvent[];
    decodeSetMinStakesEvent(event: Event): AuditorInfo.SetMinStakesEvent;
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
        (params: IAddAuditorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddAuditorParams, options?: TransactionOptions) => Promise<void>;
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
    foundation: {
        (options?: TransactionOptions): Promise<string>;
    };
    freezeAuditor: {
        (auditor: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditor: string, options?: TransactionOptions) => Promise<void>;
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
    getEndorsedBy: {
        (params: IGetEndorsedByParams, options?: TransactionOptions): Promise<string[]>;
    };
    getEndorsing: {
        (params: IGetEndorsingParams, options?: TransactionOptions): Promise<string[]>;
    };
    getStakedBy: {
        (params: IGetStakedByParams, options?: TransactionOptions): Promise<string[]>;
    };
    getStakerAuditor: {
        (params: IGetStakerAuditorParams, options?: TransactionOptions): Promise<string[]>;
    };
    isActiveAuditor: {
        (auditor: string, options?: TransactionOptions): Promise<boolean>;
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
    penalize: {
        (params: IPenalizeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPenalizeParams, options?: TransactionOptions) => Promise<void>;
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
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    revokeEndorsement: {
        (params: IRevokeEndorsementParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRevokeEndorsementParams, options?: TransactionOptions) => Promise<void>;
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
    stakeTo: {
        (params: IStakeToParams, options?: TransactionOptions): Promise<{
            index: BigNumber;
            balance: BigNumber;
        }>;
    };
    stakedBy: {
        (params: IStakedByParams, options?: TransactionOptions): Promise<string>;
    };
    stakedByInv: {
        (params: IStakedByInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    stakedByLength: {
        (auditor: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    stakerAuditor: {
        (params: IStakerAuditorParams, options?: TransactionOptions): Promise<string>;
    };
    stakerAuditorLength: {
        (staker: string, options?: TransactionOptions): Promise<BigNumber>;
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
        (params: IUnstakeBondRequestParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeBondRequestParams, options?: TransactionOptions) => Promise<void>;
    };
    updateAuditorState: {
        (auditor: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (auditor: string, options?: TransactionOptions) => Promise<void>;
    };
    updateAuditorStateInBatch: {
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
        auditorId: BigNumber;
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
    interface EndorseAuditorEvent {
        endorser: string;
        endorsee: string;
        _event: Event;
    }
    interface FreezeAuditorEvent {
        auditor: string;
        _event: Event;
    }
    interface PenalizeEvent {
        auditor: string;
        staker: string;
        amount: BigNumber;
        auditorBalance: BigNumber;
        stakerAuditorBalance: BigNumber;
        _event: Event;
    }
    interface RevokeEndorsementEvent {
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
    interface SetMinStakesEvent {
        minStakes: BigNumber;
        _event: Event;
    }
    interface StakeBondEvent {
        sender: string;
        auditor: string;
        amount: BigNumber;
        auditorBalance: BigNumber;
        stakerAuditorBalance: BigNumber;
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
        auditor: string;
        amount: BigNumber;
        auditorBalance: BigNumber;
        stakerAuditorBalance: BigNumber;
        _event: Event;
    }
    interface WithdrawBondEvent {
        sender: string;
        amount: BigNumber;
        _event: Event;
    }
}
