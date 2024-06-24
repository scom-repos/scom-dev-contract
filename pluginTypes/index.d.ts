/// <amd-module name="@scom/scom-portal-contract/contracts/AuditInfo.json.ts" />
declare module "@scom/scom-portal-contract/contracts/AuditInfo.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/AuditInfo.ts" />
declare module "@scom/scom-portal-contract/contracts/AuditInfo.ts" {
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
    export class AuditInfo extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddAuditReportEvent(receipt: TransactionReceipt): AuditInfo.AddAuditReportEvent[];
        decodeAddAuditReportEvent(event: Event): AuditInfo.AddAuditReportEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): AuditInfo.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): AuditInfo.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): AuditInfo.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): AuditInfo.DeauthorizeEvent;
        parseSetAuditDurationEvent(receipt: TransactionReceipt): AuditInfo.SetAuditDurationEvent[];
        decodeSetAuditDurationEvent(event: Event): AuditInfo.SetAuditDurationEvent;
        parseSetMinAuditRequiredEvent(receipt: TransactionReceipt): AuditInfo.SetMinAuditRequiredEvent[];
        decodeSetMinAuditRequiredEvent(event: Event): AuditInfo.SetMinAuditRequiredEvent;
        parseSetPassingThresholdEvent(receipt: TransactionReceipt): AuditInfo.SetPassingThresholdEvent[];
        decodeSetPassingThresholdEvent(event: Event): AuditInfo.SetPassingThresholdEvent;
        parseSetWarningThresholdEvent(receipt: TransactionReceipt): AuditInfo.SetWarningThresholdEvent[];
        decodeSetWarningThresholdEvent(event: Event): AuditInfo.SetWarningThresholdEvent;
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
            (packageVersionsId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
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
        packageVersionsAuditorsLength: {
            (packageVersionsId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
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
    export module AuditInfo {
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
        interface SetAuditDurationEvent {
            auditDuration: BigNumber;
            _event: Event;
        }
        interface SetMinAuditRequiredEvent {
            minAuditRequired: BigNumber;
            _event: Event;
        }
        interface SetPassingThresholdEvent {
            passingThreshold: BigNumber;
            _event: Event;
        }
        interface SetWarningThresholdEvent {
            warningThreshold: BigNumber;
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
}
/// <amd-module name="@scom/scom-portal-contract/contracts/AuditorInfo.json.ts" />
declare module "@scom/scom-portal-contract/contracts/AuditorInfo.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/AuditorInfo.ts" />
declare module "@scom/scom-portal-contract/contracts/AuditorInfo.ts" {
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
    export class AuditorInfo extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddAuditorEvent(receipt: TransactionReceipt): AuditorInfo.AddAuditorEvent[];
        decodeAddAuditorEvent(event: Event): AuditorInfo.AddAuditorEvent;
        parseAuditorStateChangeEvent(receipt: TransactionReceipt): AuditorInfo.AuditorStateChangeEvent[];
        decodeAuditorStateChangeEvent(event: Event): AuditorInfo.AuditorStateChangeEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): AuditorInfo.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): AuditorInfo.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): AuditorInfo.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): AuditorInfo.DeauthorizeEvent;
        parseEndorseAuditorEvent(receipt: TransactionReceipt): AuditorInfo.EndorseAuditorEvent[];
        decodeEndorseAuditorEvent(event: Event): AuditorInfo.EndorseAuditorEvent;
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
    export module AuditorInfo {
        interface AddAuditorEvent {
            auditorId: BigNumber;
            auditor: string;
            _event: Event;
        }
        interface AuditorStateChangeEvent {
            auditor: string;
            newState: BigNumber;
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
}
/// <amd-module name="@scom/scom-portal-contract/contracts/Authorization.json.ts" />
declare module "@scom/scom-portal-contract/contracts/Authorization.json.ts" {
    const _default_2: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/Authorization.ts" />
declare module "@scom/scom-portal-contract/contracts/Authorization.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
    export class Authorization extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): Authorization.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): Authorization.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): Authorization.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): Authorization.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Authorization.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): Authorization.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): Authorization.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): Authorization.TransferOwnershipEvent;
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
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
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module Authorization {
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
}
/// <amd-module name="@scom/scom-portal-contract/contracts/DomainInfo.json.ts" />
declare module "@scom/scom-portal-contract/contracts/DomainInfo.json.ts" {
    const _default_3: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/DomainInfo.ts" />
declare module "@scom/scom-portal-contract/contracts/DomainInfo.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAllowancesParams {
        param1: string;
        param2: string;
        param3: string;
    }
    export interface IBalanceOfParams {
        param1: string;
        param2: string;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        domainName: string;
        subtractedValue: number | BigNumber;
    }
    export interface IDepositParams {
        domainName: string;
        amount: number | BigNumber;
    }
    export interface IDomainModuleParams {
        param1: string;
        param2: string;
    }
    export interface IDomainTypeParams {
        param1: string;
        param2: string;
    }
    export interface IGetDomainInfoParams {
        owner: string;
        domainName: string;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        domainName: string;
        addedValue: number | BigNumber;
    }
    export interface ISpendParams {
        owner: string;
        domainName: string;
        destination: string;
        amount: number | BigNumber;
    }
    export interface IUpdateDomainInfoParams {
        domainName: string;
        moduleType: number | BigNumber;
        module: string;
    }
    export interface IUpdateDomainModuleParams {
        domainName: string;
        module: string;
    }
    export interface IWithdrawParams {
        domainName: string;
        amount: number | BigNumber;
    }
    export class DomainInfo extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(token: string, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): DomainInfo.ApprovalEvent[];
        decodeApprovalEvent(event: Event): DomainInfo.ApprovalEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): DomainInfo.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): DomainInfo.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): DomainInfo.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): DomainInfo.DeauthorizeEvent;
        parseDepositEvent(receipt: TransactionReceipt): DomainInfo.DepositEvent[];
        decodeDepositEvent(event: Event): DomainInfo.DepositEvent;
        parseSpendEvent(receipt: TransactionReceipt): DomainInfo.SpendEvent[];
        decodeSpendEvent(event: Event): DomainInfo.SpendEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): DomainInfo.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): DomainInfo.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): DomainInfo.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): DomainInfo.TransferOwnershipEvent;
        parseUpdateDomainInfoEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainInfoEvent[];
        decodeUpdateDomainInfoEvent(event: Event): DomainInfo.UpdateDomainInfoEvent;
        parseUpdateDomainModuleEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainModuleEvent[];
        decodeUpdateDomainModuleEvent(event: Event): DomainInfo.UpdateDomainModuleEvent;
        parseWithdrawEvent(receipt: TransactionReceipt): DomainInfo.WithdrawEvent[];
        decodeWithdrawEvent(event: Event): DomainInfo.WithdrawEvent;
        allowances: {
            (params: IAllowancesParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        balanceOf: {
            (params: IBalanceOfParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<void>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        deposit: {
            (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDepositParams, options?: TransactionOptions) => Promise<void>;
        };
        domainModule: {
            (params: IDomainModuleParams, options?: TransactionOptions): Promise<string>;
        };
        domainType: {
            (params: IDomainTypeParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getDomainInfo: {
            (params: IGetDomainInfoParams, options?: TransactionOptions): Promise<{
                moduleType: BigNumber;
                module: string;
            }>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<void>;
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
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        spend: {
            (params: ISpendParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISpendParams, options?: TransactionOptions) => Promise<void>;
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
        updateDomainInfo: {
            (params: IUpdateDomainInfoParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateDomainInfoParams, options?: TransactionOptions) => Promise<void>;
        };
        updateDomainModule: {
            (params: IUpdateDomainModuleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateDomainModuleParams, options?: TransactionOptions) => Promise<void>;
        };
        withdraw: {
            (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module DomainInfo {
        interface ApprovalEvent {
            owner: string;
            domainName: string;
            spender: string;
            value: BigNumber;
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
        interface DepositEvent {
            owner: string;
            domainName: string;
            amount: BigNumber;
            newBalance: BigNumber;
            _event: Event;
        }
        interface SpendEvent {
            sender: string;
            owner: string;
            domainName: string;
            spender: string;
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
        interface UpdateDomainInfoEvent {
            owner: string;
            domainName: string;
            domainType: BigNumber;
            module: string;
            _event: Event;
        }
        interface UpdateDomainModuleEvent {
            owner: string;
            domainName: string;
            module: string;
            _event: Event;
        }
        interface WithdrawEvent {
            owner: string;
            domainName: string;
            amount: BigNumber;
            newBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-portal-contract/contracts/ModuleInfo.json.ts" />
declare module "@scom/scom-portal-contract/contracts/ModuleInfo.json.ts" {
    const _default_4: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/ModuleInfo.ts" />
declare module "@scom/scom-portal-contract/contracts/ModuleInfo.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddReleaseParams {
        packageHash: string;
        version: string;
        uri: string;
        pulishRelease: boolean;
    }
    export interface IGetBatchOwnerPackagesParams {
        owner: string;
        from: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetBatchOwnerPackagesAndHashParams {
        owner: string;
        from: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetBatchpackageReleasesParams {
        packageHash: string;
        from: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IOwnerPackagesParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IOwnerPackagesIndexParams {
        param1: string;
        param2: string;
    }
    export interface IPackageReleasesParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IPackageReleasesIndexParams {
        param1: string;
        param2: string;
    }
    export interface ISetCurrentVersionParams {
        packageHash: string;
        version: string;
    }
    export class ModuleInfo extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseCurrentVersionEvent(receipt: TransactionReceipt): ModuleInfo.CurrentVersionEvent[];
        decodeCurrentVersionEvent(event: Event): ModuleInfo.CurrentVersionEvent;
        parseNewPackageEvent(receipt: TransactionReceipt): ModuleInfo.NewPackageEvent[];
        decodeNewPackageEvent(event: Event): ModuleInfo.NewPackageEvent;
        parseNewReleaseEvent(receipt: TransactionReceipt): ModuleInfo.NewReleaseEvent[];
        decodeNewReleaseEvent(event: Event): ModuleInfo.NewReleaseEvent;
        addPackage: {
            (packageName: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (packageName: string, options?: TransactionOptions) => Promise<void>;
        };
        addRelease: {
            (params: IAddReleaseParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddReleaseParams, options?: TransactionOptions) => Promise<void>;
        };
        getAllOwnerPackages: {
            (owner: string, options?: TransactionOptions): Promise<string[]>;
        };
        getAllOwnerPackagesAndHash: {
            (owner: string, options?: TransactionOptions): Promise<{
                packageNames: string[];
                packageHashes: string[];
                packages: {
                    owner: string;
                    currVersion: string;
                    currVersionHash: string;
                }[];
            }>;
        };
        getAllpackageReleases: {
            (packageHash: string, options?: TransactionOptions): Promise<{
                version: string;
                uri: string;
            }[]>;
        };
        getBatchOwnerPackages: {
            (params: IGetBatchOwnerPackagesParams, options?: TransactionOptions): Promise<string[]>;
        };
        getBatchOwnerPackagesAndHash: {
            (params: IGetBatchOwnerPackagesAndHashParams, options?: TransactionOptions): Promise<{
                packageNames: string[];
                packageHashes: string[];
                packages: {
                    owner: string;
                    currVersion: string;
                    currVersionHash: string;
                }[];
            }>;
        };
        getBatchpackageReleases: {
            (params: IGetBatchpackageReleasesParams, options?: TransactionOptions): Promise<{
                version: string;
                uri: string;
            }[]>;
        };
        ownerPackages: {
            (params: IOwnerPackagesParams, options?: TransactionOptions): Promise<string>;
        };
        ownerPackagesIndex: {
            (params: IOwnerPackagesIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        ownerPackagesLength: {
            (owner: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        packageProperties: {
            (param1: string, options?: TransactionOptions): Promise<{
                owner: string;
                currVersion: string;
                currVersionHash: string;
            }>;
        };
        packageReleases: {
            (params: IPackageReleasesParams, options?: TransactionOptions): Promise<{
                version: string;
                uri: string;
            }>;
        };
        packageReleasesIndex: {
            (params: IPackageReleasesIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        packageReleasesLength: {
            (packageHash: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        setCurrentVersion: {
            (params: ISetCurrentVersionParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetCurrentVersionParams, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module ModuleInfo {
        interface CurrentVersionEvent {
            packageHash: string;
            version: string;
            currVersionHash: string;
            _event: Event;
        }
        interface NewPackageEvent {
            owner: string;
            packageName: string;
            packageHash: string;
            _event: Event;
        }
        interface NewReleaseEvent {
            packageHash: string;
            version: string;
            uri: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-portal-contract/contracts/NFTManager.json.ts" />
declare module "@scom/scom-portal-contract/contracts/NFTManager.json.ts" {
    const _default_5: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/NFTManager.ts" />
declare module "@scom/scom-portal-contract/contracts/NFTManager.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        scom: string;
        protocolFeeTo: string;
    }
    export interface IAddNftParams {
        nft: string;
        desc: string;
        stakes: number | BigNumber;
        protocolFee: number | BigNumber;
        enabled: boolean;
    }
    export interface IAddStakesParams {
        nft: string;
        tokenId: number | BigNumber;
        stakes: number | BigNumber;
    }
    export interface IBurnParams {
        nft: string;
        tokenId: number | BigNumber;
    }
    export interface IGetNftsParams {
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IStakedParams {
        param1: string;
        param2: string;
        param3: number | BigNumber;
    }
    export class NFTManager extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddStakesEvent(receipt: TransactionReceipt): NFTManager.AddStakesEvent[];
        decodeAddStakesEvent(event: Event): NFTManager.AddStakesEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): NFTManager.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): NFTManager.AuthorizeEvent;
        parseBurnEvent(receipt: TransactionReceipt): NFTManager.BurnEvent[];
        decodeBurnEvent(event: Event): NFTManager.BurnEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): NFTManager.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): NFTManager.DeauthorizeEvent;
        parseMintEvent(receipt: TransactionReceipt): NFTManager.MintEvent[];
        decodeMintEvent(event: Event): NFTManager.MintEvent;
        parseNewNFTEvent(receipt: TransactionReceipt): NFTManager.NewNFTEvent[];
        decodeNewNFTEvent(event: Event): NFTManager.NewNFTEvent;
        parsePauseEvent(receipt: TransactionReceipt): NFTManager.PauseEvent[];
        decodePauseEvent(event: Event): NFTManager.PauseEvent;
        parseResumeEvent(receipt: TransactionReceipt): NFTManager.ResumeEvent[];
        decodeResumeEvent(event: Event): NFTManager.ResumeEvent;
        parseSetProtocolFeeToEvent(receipt: TransactionReceipt): NFTManager.SetProtocolFeeToEvent[];
        decodeSetProtocolFeeToEvent(event: Event): NFTManager.SetProtocolFeeToEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): NFTManager.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): NFTManager.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): NFTManager.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): NFTManager.TransferOwnershipEvent;
        addNft: {
            (params: IAddNftParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddNftParams, options?: TransactionOptions) => Promise<void>;
        };
        addStakes: {
            (params: IAddStakesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddStakesParams, options?: TransactionOptions) => Promise<void>;
        };
        burn: {
            (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IBurnParams, options?: TransactionOptions) => Promise<void>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        getNfts: {
            (params: IGetNftsParams, options?: TransactionOptions): Promise<{
                nft: string;
                desc: string;
                stakes: BigNumber;
                protocolFee: BigNumber;
                paused: boolean;
            }[]>;
        };
        invNfts: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        mint: {
            (nft: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (nft: string, options?: TransactionOptions) => Promise<BigNumber>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        nfts: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                nft: string;
                desc: string;
                stakes: BigNumber;
                protocolFee: BigNumber;
                paused: boolean;
            }>;
        };
        nftsLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        pauseNFT: {
            (nft: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (nft: string, options?: TransactionOptions) => Promise<void>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        protocolFeeBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeTo: {
            (options?: TransactionOptions): Promise<string>;
        };
        resumeNFT: {
            (nft: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (nft: string, options?: TransactionOptions) => Promise<void>;
        };
        scom: {
            (options?: TransactionOptions): Promise<string>;
        };
        setProtocolFeeTo: {
            (protocolFeeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (protocolFeeTo: string, options?: TransactionOptions) => Promise<void>;
        };
        staked: {
            (params: IStakedParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        transferProtocolFee: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module NFTManager {
        interface AddStakesEvent {
            minter: string;
            nft: string;
            tokenId: BigNumber;
            stakes: BigNumber;
            _event: Event;
        }
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface BurnEvent {
            burner: string;
            nft: string;
            tokenId: BigNumber;
            _event: Event;
        }
        interface DeauthorizeEvent {
            user: string;
            _event: Event;
        }
        interface MintEvent {
            minter: string;
            nft: string;
            tokenId: BigNumber;
            stakes: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface NewNFTEvent {
            nft: string;
            stakes: BigNumber;
            protocolFee: BigNumber;
            enabled: boolean;
            _event: Event;
        }
        interface PauseEvent {
            nft: string;
            _event: Event;
        }
        interface ResumeEvent {
            nft: string;
            _event: Event;
        }
        interface SetProtocolFeeToEvent {
            protocolFeeTo: string;
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
}
/// <amd-module name="@scom/scom-portal-contract/contracts/NodeNFT.json.ts" />
declare module "@scom/scom-portal-contract/contracts/NodeNFT.json.ts" {
    const _default_6: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_6;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/NodeNFT.ts" />
declare module "@scom/scom-portal-contract/contracts/NodeNFT.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
        baseURI: string;
        manager: string;
        stakeRequired: number | BigNumber;
        protocolFee: number | BigNumber;
    }
    export interface IAddStakesParams {
        to: string;
        tokenId: number | BigNumber;
    }
    export interface IApproveParams {
        to: string;
        tokenId: number | BigNumber;
    }
    export interface IBurnParams {
        from: string;
        tokenId: number | BigNumber;
    }
    export interface IIsApprovedForAllParams {
        owner: string;
        operator: string;
    }
    export interface ISafeTransferFromParams {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }
    export interface ISafeTransferFrom_1Params {
        from: string;
        to: string;
        tokenId: number | BigNumber;
        data: string;
    }
    export interface ISetApprovalForAllParams {
        operator: string;
        approved: boolean;
    }
    export interface ITokenOfOwnerByIndexParams {
        owner: string;
        index: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }
    export class NodeNFT extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddStakesEvent(receipt: TransactionReceipt): NodeNFT.AddStakesEvent[];
        decodeAddStakesEvent(event: Event): NodeNFT.AddStakesEvent;
        parseApprovalEvent(receipt: TransactionReceipt): NodeNFT.ApprovalEvent[];
        decodeApprovalEvent(event: Event): NodeNFT.ApprovalEvent;
        parseApprovalForAllEvent(receipt: TransactionReceipt): NodeNFT.ApprovalForAllEvent[];
        decodeApprovalForAllEvent(event: Event): NodeNFT.ApprovalForAllEvent;
        parseAttributeEvent(receipt: TransactionReceipt): NodeNFT.AttributeEvent[];
        decodeAttributeEvent(event: Event): NodeNFT.AttributeEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): NodeNFT.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): NodeNFT.AuthorizeEvent;
        parseCustomAttributeEvent(receipt: TransactionReceipt): NodeNFT.CustomAttributeEvent[];
        decodeCustomAttributeEvent(event: Event): NodeNFT.CustomAttributeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): NodeNFT.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): NodeNFT.DeauthorizeEvent;
        parseSetBaseURIEvent(receipt: TransactionReceipt): NodeNFT.SetBaseURIEvent[];
        decodeSetBaseURIEvent(event: Event): NodeNFT.SetBaseURIEvent;
        parseSetProtocolFeeEvent(receipt: TransactionReceipt): NodeNFT.SetProtocolFeeEvent[];
        decodeSetProtocolFeeEvent(event: Event): NodeNFT.SetProtocolFeeEvent;
        parseSetStakeRequiredEvent(receipt: TransactionReceipt): NodeNFT.SetStakeRequiredEvent[];
        decodeSetStakeRequiredEvent(event: Event): NodeNFT.SetStakeRequiredEvent;
        parseStakeEvent(receipt: TransactionReceipt): NodeNFT.StakeEvent[];
        decodeStakeEvent(event: Event): NodeNFT.StakeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): NodeNFT.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): NodeNFT.StartOwnershipTransferEvent;
        parseTransferEvent(receipt: TransactionReceipt): NodeNFT.TransferEvent[];
        decodeTransferEvent(event: Event): NodeNFT.TransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): NodeNFT.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): NodeNFT.TransferOwnershipEvent;
        parseUnstakeEvent(receipt: TransactionReceipt): NodeNFT.UnstakeEvent[];
        decodeUnstakeEvent(event: Event): NodeNFT.UnstakeEvent;
        addStakes: {
            (params: IAddStakesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddStakesParams, options?: TransactionOptions) => Promise<void>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<void>;
        };
        balanceOf: {
            (owner: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        baseURI: {
            (options?: TransactionOptions): Promise<string>;
        };
        burn: {
            (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IBurnParams, options?: TransactionOptions) => Promise<void>;
        };
        counter: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        creationDate: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        destoryDate: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        getApproved: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        isApprovedForAll: {
            (params: IIsApprovedForAllParams, options?: TransactionOptions): Promise<boolean>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        lastStakeDate: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        manager: {
            (options?: TransactionOptions): Promise<string>;
        };
        mint: {
            (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: TransactionOptions) => Promise<BigNumber>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        ownerOf: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        protocolFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        safeTransferFrom: {
            (params: ISafeTransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISafeTransferFromParams, options?: TransactionOptions) => Promise<void>;
        };
        safeTransferFrom_1: {
            (params: ISafeTransferFrom_1Params, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISafeTransferFrom_1Params, options?: TransactionOptions) => Promise<void>;
        };
        setApprovalForAll: {
            (params: ISetApprovalForAllParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetApprovalForAllParams, options?: TransactionOptions) => Promise<void>;
        };
        setBaseURI: {
            (baseURI: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (baseURI: string, options?: TransactionOptions) => Promise<void>;
        };
        setProtocolFee: {
            (protocolFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        setStakeRequired: {
            (stakeRequired: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (stakeRequired: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        stakeRequired: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        supportsInterface: {
            (interfaceId: string, options?: TransactionOptions): Promise<boolean>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        tokenByIndex: {
            (index: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        tokenOfOwnerByIndex: {
            (params: ITokenOfOwnerByIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        tokenURI: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module NodeNFT {
        interface AddStakesEvent {
            who: string;
            tokenId: BigNumber;
            _event: Event;
        }
        interface ApprovalEvent {
            owner: string;
            approved: string;
            tokenId: BigNumber;
            _event: Event;
        }
        interface ApprovalForAllEvent {
            owner: string;
            operator: string;
            approved: boolean;
            _event: Event;
        }
        interface AttributeEvent {
            tokenId: BigNumber;
            attribute: BigNumber;
            _event: Event;
        }
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface CustomAttributeEvent {
            tokenId: BigNumber;
            attribute: BigNumber;
            _event: Event;
        }
        interface DeauthorizeEvent {
            user: string;
            _event: Event;
        }
        interface SetBaseURIEvent {
            baseURI: string;
            _event: Event;
        }
        interface SetProtocolFeeEvent {
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SetStakeRequiredEvent {
            stakeRequired: BigNumber;
            _event: Event;
        }
        interface StakeEvent {
            who: string;
            tokenId: BigNumber;
            _event: Event;
        }
        interface StartOwnershipTransferEvent {
            user: string;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            tokenId: BigNumber;
            _event: Event;
        }
        interface TransferOwnershipEvent {
            user: string;
            _event: Event;
        }
        interface UnstakeEvent {
            who: string;
            tokenId: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-portal-contract/contracts/ProjectInfo.json.ts" />
declare module "@scom/scom-portal-contract/contracts/ProjectInfo.json.ts" {
    const _default_7: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_7;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/ProjectInfo.ts" />
declare module "@scom/scom-portal-contract/contracts/ProjectInfo.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        token: string;
        auditorInfo: string;
    }
    export interface IAddPackageAdminParams {
        packageId: number | BigNumber;
        admin: string;
    }
    export interface IAddProjectAdminParams {
        projectId: number | BigNumber;
        admin: string;
    }
    export interface INewPackageParams {
        projectId: number | BigNumber;
        name: string;
        category: string;
        ipfsCid: string;
    }
    export interface INewPackageVersionParams {
        projectId: number | BigNumber;
        packageId: number | BigNumber;
        version: {
            major: number | BigNumber;
            minor: number | BigNumber;
            patch: number | BigNumber;
        };
        ipfsCid: string;
    }
    export interface INewProjectParams {
        name: string;
        ipfsCid: string;
    }
    export interface IOwnersProjectsParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IOwnersProjectsInvParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IPackageAdminParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IPackageAdminInvParams {
        param1: number | BigNumber;
        param2: string;
    }
    export interface IPackageNameParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IPackageNameInvParams {
        param1: number | BigNumber;
        param2: string;
    }
    export interface IPackageVersionsListParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IProjectAdminParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IProjectAdminInvParams {
        param1: number | BigNumber;
        param2: string;
    }
    export interface IProjectBackerBalanceParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IProjectPackagesParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IProjectPackagesInvParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IRemovePackageAdminParams {
        packageId: number | BigNumber;
        admin: string;
    }
    export interface IRemoveProjectAdminParams {
        projectId: number | BigNumber;
        admin: string;
    }
    export interface IStakeParams {
        projectId: number | BigNumber;
        amount: number | BigNumber;
    }
    export interface ITransferProjectOwnershipParams {
        projectId: number | BigNumber;
        newOwner: string;
    }
    export interface IUnstakeParams {
        projectId: number | BigNumber;
        amount: number | BigNumber;
    }
    export interface IUpdatePackageIpfsCidParams {
        projectId: number | BigNumber;
        packageId: number | BigNumber;
        ipfsCid: string;
    }
    export interface IUpdatePackageNameParams {
        projectId: number | BigNumber;
        packageId: number | BigNumber;
        name: string;
    }
    export interface IUpdatePackageVersionIpfsCidParams {
        packageVersionId: number | BigNumber;
        ipfsCid: string;
    }
    export interface IUpdateProjectIpfsCidParams {
        projectId: number | BigNumber;
        ipfsCid: string;
    }
    export interface IUpdateProjectNameParams {
        projectId: number | BigNumber;
        name: string;
    }
    export class ProjectInfo extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddAdminEvent(receipt: TransactionReceipt): ProjectInfo.AddAdminEvent[];
        decodeAddAdminEvent(event: Event): ProjectInfo.AddAdminEvent;
        parseAddPackageAdminEvent(receipt: TransactionReceipt): ProjectInfo.AddPackageAdminEvent[];
        decodeAddPackageAdminEvent(event: Event): ProjectInfo.AddPackageAdminEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): ProjectInfo.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): ProjectInfo.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): ProjectInfo.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): ProjectInfo.DeauthorizeEvent;
        parseNewPackageEvent(receipt: TransactionReceipt): ProjectInfo.NewPackageEvent[];
        decodeNewPackageEvent(event: Event): ProjectInfo.NewPackageEvent;
        parseNewPackageVersionEvent(receipt: TransactionReceipt): ProjectInfo.NewPackageVersionEvent[];
        decodeNewPackageVersionEvent(event: Event): ProjectInfo.NewPackageVersionEvent;
        parseNewProjectEvent(receipt: TransactionReceipt): ProjectInfo.NewProjectEvent[];
        decodeNewProjectEvent(event: Event): ProjectInfo.NewProjectEvent;
        parseRemoveAdminEvent(receipt: TransactionReceipt): ProjectInfo.RemoveAdminEvent[];
        decodeRemoveAdminEvent(event: Event): ProjectInfo.RemoveAdminEvent;
        parseRemovePackageAdminEvent(receipt: TransactionReceipt): ProjectInfo.RemovePackageAdminEvent[];
        decodeRemovePackageAdminEvent(event: Event): ProjectInfo.RemovePackageAdminEvent;
        parseSetPackageVersionStatusEvent(receipt: TransactionReceipt): ProjectInfo.SetPackageVersionStatusEvent[];
        decodeSetPackageVersionStatusEvent(event: Event): ProjectInfo.SetPackageVersionStatusEvent;
        parseStakeEvent(receipt: TransactionReceipt): ProjectInfo.StakeEvent[];
        decodeStakeEvent(event: Event): ProjectInfo.StakeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): ProjectInfo.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): ProjectInfo.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): ProjectInfo.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): ProjectInfo.TransferOwnershipEvent;
        parseTransferProjectOwnershipEvent(receipt: TransactionReceipt): ProjectInfo.TransferProjectOwnershipEvent[];
        decodeTransferProjectOwnershipEvent(event: Event): ProjectInfo.TransferProjectOwnershipEvent;
        parseUnstakeEvent(receipt: TransactionReceipt): ProjectInfo.UnstakeEvent[];
        decodeUnstakeEvent(event: Event): ProjectInfo.UnstakeEvent;
        parseUpdatePackageIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageIpfsCidEvent[];
        decodeUpdatePackageIpfsCidEvent(event: Event): ProjectInfo.UpdatePackageIpfsCidEvent;
        parseUpdatePackageNameEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageNameEvent[];
        decodeUpdatePackageNameEvent(event: Event): ProjectInfo.UpdatePackageNameEvent;
        parseUpdatePackageVersionIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageVersionIpfsCidEvent[];
        decodeUpdatePackageVersionIpfsCidEvent(event: Event): ProjectInfo.UpdatePackageVersionIpfsCidEvent;
        parseUpdateProjectIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdateProjectIpfsCidEvent[];
        decodeUpdateProjectIpfsCidEvent(event: Event): ProjectInfo.UpdateProjectIpfsCidEvent;
        parseUpdateProjectNameEvent(receipt: TransactionReceipt): ProjectInfo.UpdateProjectNameEvent[];
        decodeUpdateProjectNameEvent(event: Event): ProjectInfo.UpdateProjectNameEvent;
        addPackageAdmin: {
            (params: IAddPackageAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddPackageAdminParams, options?: TransactionOptions) => Promise<void>;
        };
        addProjectAdmin: {
            (params: IAddProjectAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddProjectAdminParams, options?: TransactionOptions) => Promise<void>;
        };
        auditorInfo: {
            (options?: TransactionOptions): Promise<string>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        newPackage: {
            (params: INewPackageParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: INewPackageParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        newPackageVersion: {
            (params: INewPackageVersionParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: INewPackageVersionParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        newProject: {
            (params: INewProjectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: INewProjectParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        ownersProjects: {
            (params: IOwnersProjectsParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        ownersProjectsInv: {
            (params: IOwnersProjectsInvParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        ownersProjectsLength: {
            (owner: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        packageAdmin: {
            (params: IPackageAdminParams, options?: TransactionOptions): Promise<string>;
        };
        packageAdminInv: {
            (params: IPackageAdminInvParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        packageAdminLength: {
            (packageId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        packageName: {
            (params: IPackageNameParams, options?: TransactionOptions): Promise<string>;
        };
        packageNameInv: {
            (params: IPackageNameInvParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        packageVersions: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                packageId: BigNumber;
                version: {
                    major: BigNumber;
                    minor: BigNumber;
                    patch: BigNumber;
                };
                status: BigNumber;
                ipfsCid: string;
                timestamp: BigNumber;
            }>;
        };
        packageVersionsLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        packageVersionsList: {
            (params: IPackageVersionsListParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        packageVersionsListLength: {
            (packageId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        packages: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                projectId: BigNumber;
                currVersionIndex: BigNumber;
                ipfsCid: string;
                category: string;
                status: BigNumber;
            }>;
        };
        packagesLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        projectAdmin: {
            (params: IProjectAdminParams, options?: TransactionOptions): Promise<string>;
        };
        projectAdminInv: {
            (params: IProjectAdminInvParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        projectAdminLength: {
            (projectId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        projectBackerBalance: {
            (params: IProjectBackerBalanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        projectBalance: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        projectCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        projectIpfsCid: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        projectName: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        projectNameInv: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        projectNewOwner: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        projectOwner: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        projectPackages: {
            (params: IProjectPackagesParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        projectPackagesInv: {
            (params: IProjectPackagesInvParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        projectPackagesLength: {
            (projectId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        removePackageAdmin: {
            (params: IRemovePackageAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemovePackageAdminParams, options?: TransactionOptions) => Promise<void>;
        };
        removeProjectAdmin: {
            (params: IRemoveProjectAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveProjectAdminParams, options?: TransactionOptions) => Promise<void>;
        };
        setPackageVersionToAuditing: {
            (packageVersionId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (packageVersionId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        stake: {
            (params: IStakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IStakeParams, options?: TransactionOptions) => Promise<void>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        takeProjectOwnership: {
            (projectId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (projectId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        transferProjectOwnership: {
            (params: ITransferProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferProjectOwnershipParams, options?: TransactionOptions) => Promise<void>;
        };
        unstake: {
            (params: IUnstakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnstakeParams, options?: TransactionOptions) => Promise<void>;
        };
        updatePackageIpfsCid: {
            (params: IUpdatePackageIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdatePackageIpfsCidParams, options?: TransactionOptions) => Promise<void>;
        };
        updatePackageName: {
            (params: IUpdatePackageNameParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdatePackageNameParams, options?: TransactionOptions) => Promise<void>;
        };
        updatePackageVersionIpfsCid: {
            (params: IUpdatePackageVersionIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdatePackageVersionIpfsCidParams, options?: TransactionOptions) => Promise<void>;
        };
        updateProjectIpfsCid: {
            (params: IUpdateProjectIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateProjectIpfsCidParams, options?: TransactionOptions) => Promise<void>;
        };
        updateProjectName: {
            (params: IUpdateProjectNameParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateProjectNameParams, options?: TransactionOptions) => Promise<void>;
        };
        voidPackageVersion: {
            (packageVersionId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (packageVersionId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module ProjectInfo {
        interface AddAdminEvent {
            projectId: BigNumber;
            admin: string;
            _event: Event;
        }
        interface AddPackageAdminEvent {
            packageId: BigNumber;
            admin: string;
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
        interface NewPackageEvent {
            projectId: BigNumber;
            packageId: BigNumber;
            name: string;
            ipfsCid: string;
            _event: Event;
        }
        interface NewPackageVersionEvent {
            packageId: BigNumber;
            packageVersionId: BigNumber;
            version: {
                major: BigNumber;
                minor: BigNumber;
                patch: BigNumber;
            };
            _event: Event;
        }
        interface NewProjectEvent {
            projectId: BigNumber;
            owner: string;
            name: string;
            ipfsCid: string;
            _event: Event;
        }
        interface RemoveAdminEvent {
            projectId: BigNumber;
            admin: string;
            _event: Event;
        }
        interface RemovePackageAdminEvent {
            packageId: BigNumber;
            admin: string;
            _event: Event;
        }
        interface SetPackageVersionStatusEvent {
            packageId: BigNumber;
            packageVersionId: BigNumber;
            status: BigNumber;
            _event: Event;
        }
        interface StakeEvent {
            sender: string;
            projectId: BigNumber;
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
        interface TransferProjectOwnershipEvent {
            projectId: BigNumber;
            newOwner: string;
            _event: Event;
        }
        interface UnstakeEvent {
            sender: string;
            projectId: BigNumber;
            amount: BigNumber;
            newBalance: BigNumber;
            _event: Event;
        }
        interface UpdatePackageIpfsCidEvent {
            packageId: BigNumber;
            ipfsCid: string;
            _event: Event;
        }
        interface UpdatePackageNameEvent {
            packageId: BigNumber;
            name: string;
            _event: Event;
        }
        interface UpdatePackageVersionIpfsCidEvent {
            packageId: BigNumber;
            packageVersionId: BigNumber;
            ipfsCid: string;
            _event: Event;
        }
        interface UpdateProjectIpfsCidEvent {
            projectId: BigNumber;
            ipfsCid: string;
            _event: Event;
        }
        interface UpdateProjectNameEvent {
            projectId: BigNumber;
            name: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-portal-contract/contracts/RouterVaultWrapper.json.ts" />
declare module "@scom/scom-portal-contract/contracts/RouterVaultWrapper.json.ts" {
    const _default_8: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_8;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/RouterVaultWrapper.ts" />
declare module "@scom/scom-portal-contract/contracts/RouterVaultWrapper.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        vault: string;
        router: string;
    }
    export interface IClaimExactInParams {
        pair: string[];
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        deadline: number | BigNumber;
        trancheId: number | BigNumber;
        to: string;
        allocation: number | BigNumber;
        proof: string[];
    }
    export interface IClaimExactOutParams {
        pair: string[];
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        deadline: number | BigNumber;
        trancheId: number | BigNumber;
        to: string;
        allocation: number | BigNumber;
        proof: string[];
    }
    export interface ISwapExactInParams {
        pair: string[];
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        deadline: number | BigNumber;
        trancheIds: (number | BigNumber)[];
        to: string;
    }
    export interface ISwapExactOutParams {
        pair: string[];
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        deadline: number | BigNumber;
        trancheIds: (number | BigNumber)[];
        to: string;
    }
    export class RouterVaultWrapper extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): RouterVaultWrapper.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): RouterVaultWrapper.AuthorizeEvent;
        parseClaimEvent(receipt: TransactionReceipt): RouterVaultWrapper.ClaimEvent[];
        decodeClaimEvent(event: Event): RouterVaultWrapper.ClaimEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): RouterVaultWrapper.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): RouterVaultWrapper.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): RouterVaultWrapper.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): RouterVaultWrapper.StartOwnershipTransferEvent;
        parseSwapEvent(receipt: TransactionReceipt): RouterVaultWrapper.SwapEvent[];
        decodeSwapEvent(event: Event): RouterVaultWrapper.SwapEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): RouterVaultWrapper.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): RouterVaultWrapper.TransferOwnershipEvent;
        parseUpdateRouterEvent(receipt: TransactionReceipt): RouterVaultWrapper.UpdateRouterEvent[];
        decodeUpdateRouterEvent(event: Event): RouterVaultWrapper.UpdateRouterEvent;
        claimExactIn: {
            (params: IClaimExactInParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IClaimExactInParams, options?: TransactionOptions) => Promise<void>;
        };
        claimExactOut: {
            (params: IClaimExactOutParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IClaimExactOutParams, options?: TransactionOptions) => Promise<void>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
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
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        router: {
            (options?: TransactionOptions): Promise<string>;
        };
        swapExactIn: {
            (params: ISwapExactInParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactInParams, options?: TransactionOptions) => Promise<void>;
        };
        swapExactOut: {
            (params: ISwapExactOutParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactOutParams, options?: TransactionOptions) => Promise<void>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        updateRouter: {
            (router: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (router: string, options?: TransactionOptions) => Promise<void>;
        };
        vault: {
            (options?: TransactionOptions): Promise<string>;
        };
        weth: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module RouterVaultWrapper {
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface ClaimEvent {
            trancheId: BigNumber;
            sender: string;
            inToken: string;
            inAmount: BigNumber;
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
        interface SwapEvent {
            trancheId: BigNumber[];
            sender: string;
            inToken: string;
            inAmount: BigNumber;
            _event: Event;
        }
        interface TransferOwnershipEvent {
            user: string;
            _event: Event;
        }
        interface UpdateRouterEvent {
            router: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-portal-contract/contracts/Scom.json.ts" />
declare module "@scom/scom-portal-contract/contracts/Scom.json.ts" {
    const _default_9: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_9;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/Scom.ts" />
declare module "@scom/scom-portal-contract/contracts/Scom.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        minter: string;
        initSupplyTo: string;
        initSupply: number | BigNumber;
        totalSupply: number | BigNumber;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class Scom extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): Scom.ApprovalEvent[];
        decodeApprovalEvent(event: Event): Scom.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): Scom.TransferEvent[];
        decodeTransferEvent(event: Event): Scom.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        cap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
        };
        minter: {
            (options?: TransactionOptions): Promise<string>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        private assign;
    }
    export module Scom {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-portal-contract/contracts/Vault.json.ts" />
declare module "@scom/scom-portal-contract/contracts/Vault.json.ts" {
    const _default_10: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_10;
}
/// <amd-module name="@scom/scom-portal-contract/contracts/Vault.ts" />
declare module "@scom/scom-portal-contract/contracts/Vault.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        foundation: string;
        foundationShare: number | BigNumber;
        scom: string;
        uniV3: string;
    }
    export interface IBuyWithWETHParams {
        from: string;
        to: string;
    }
    export interface IClaimParams {
        trancheId: number | BigNumber;
        to: string;
        allocation: number | BigNumber;
        proof: string[];
    }
    export interface IClaimWithWETHParams {
        trancheId: number | BigNumber;
        from: string;
        to: string;
        allocation: number | BigNumber;
        proof: string[];
    }
    export interface ILockParams {
        presale: number | BigNumber;
        startTime: number | BigNumber;
        endTime: number | BigNumber;
        decrementDecimal: number | BigNumber;
    }
    export interface IReleaseAndBuyParams {
        trancheIds: (number | BigNumber)[];
        to: string;
    }
    export interface IReleaseAndBuyWithWETHParams {
        trancheIds: (number | BigNumber)[];
        from: string;
        to: string;
    }
    export interface IUniswapV3MintCallbackParams {
        amount0Owed: number | BigNumber;
        amount1Owed: number | BigNumber;
        param3: string;
    }
    export interface IUpdateReleaseSchduleParams {
        endTime: number | BigNumber;
        startingAmount: number | BigNumber;
        decrementDecimal: number | BigNumber;
    }
    export interface IWithdrawFromTrancheParams {
        trancheIds: (number | BigNumber)[];
        amountScom: (number | BigNumber)[];
    }
    export class Vault extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): Vault.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): Vault.AuthorizeEvent;
        parseBuyEvent(receipt: TransactionReceipt): Vault.BuyEvent[];
        decodeBuyEvent(event: Event): Vault.BuyEvent;
        parseClaimEvent(receipt: TransactionReceipt): Vault.ClaimEvent[];
        decodeClaimEvent(event: Event): Vault.ClaimEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): Vault.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): Vault.DeauthorizeEvent;
        parseDirectReleaseEvent(receipt: TransactionReceipt): Vault.DirectReleaseEvent[];
        decodeDirectReleaseEvent(event: Event): Vault.DirectReleaseEvent;
        parseLockEvent(receipt: TransactionReceipt): Vault.LockEvent[];
        decodeLockEvent(event: Event): Vault.LockEvent;
        parseNewTrancheEvent(receipt: TransactionReceipt): Vault.NewTrancheEvent[];
        decodeNewTrancheEvent(event: Event): Vault.NewTrancheEvent;
        parseReleaseEvent(receipt: TransactionReceipt): Vault.ReleaseEvent[];
        decodeReleaseEvent(event: Event): Vault.ReleaseEvent;
        parseSellEvent(receipt: TransactionReceipt): Vault.SellEvent[];
        decodeSellEvent(event: Event): Vault.SellEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Vault.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): Vault.StartOwnershipTransferEvent;
        parseTrancheReleaseEvent(receipt: TransactionReceipt): Vault.TrancheReleaseEvent[];
        decodeTrancheReleaseEvent(event: Event): Vault.TrancheReleaseEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): Vault.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): Vault.TransferOwnershipEvent;
        parseUnlockEvent(receipt: TransactionReceipt): Vault.UnlockEvent[];
        decodeUnlockEvent(event: Event): Vault.UnlockEvent;
        parseWithdrawScomFromReleaseEvent(receipt: TransactionReceipt): Vault.WithdrawScomFromReleaseEvent[];
        decodeWithdrawScomFromReleaseEvent(event: Event): Vault.WithdrawScomFromReleaseEvent;
        parseWithdrawScomFromTrancheEvent(receipt: TransactionReceipt): Vault.WithdrawScomFromTrancheEvent[];
        decodeWithdrawScomFromTrancheEvent(event: Event): Vault.WithdrawScomFromTrancheEvent;
        availableBalanceInTranche: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        buyScom: {
            (to: string, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
        };
        buyWithWETH: {
            (params: IBuyWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IBuyWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        claim: {
            (params: IClaimParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IClaimParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
        };
        claimWithWETH: {
            (params: IClaimWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IClaimWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        currUnlockedAmount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decrementDecimal: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        directRelease: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        endTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        fee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        foundation: {
            (options?: TransactionOptions): Promise<string>;
        };
        foundationShare: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        lastUnlockedAmount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastUpdate: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lock: {
            (params: ILockParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ILockParams, options?: TransactionOptions) => Promise<void>;
        };
        lockedAmount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        maxTick: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        minTick: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        newTranche: {
            (tranche: {
                startTime: number | BigNumber;
                limitedClaimEndTime: number | BigNumber;
                unlimitedClaimEndTime: number | BigNumber;
                amount: number | BigNumber;
                merkleRoot: string;
                ipfsCid: string;
            }, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tranche: {
                startTime: number | BigNumber;
                limitedClaimEndTime: number | BigNumber;
                unlimitedClaimEndTime: number | BigNumber;
                amount: number | BigNumber;
                merkleRoot: string;
                ipfsCid: string;
            }, options?: TransactionOptions) => Promise<void>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        releaseAndBuy: {
            (params: IReleaseAndBuyParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IReleaseAndBuyParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
        };
        releaseAndBuyWithWETH: {
            (params: IReleaseAndBuyWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IReleaseAndBuyWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        releaseTranche: {
            (trancheIds: (number | BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trancheIds: (number | BigNumber)[], options?: TransactionOptions) => Promise<BigNumber>;
        };
        releasedAmount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        scom: {
            (options?: TransactionOptions): Promise<string>;
        };
        sellScom: {
            (amountScom: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amountScom: number | BigNumber, options?: TransactionOptions) => Promise<BigNumber>;
        };
        startTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        startingAmount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        tickSpacing: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        token0IsScom: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        trancheInfo: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                startTime: BigNumber;
                limitedClaimEndTime: BigNumber;
                unlimitedClaimEndTime: BigNumber;
                amount: BigNumber;
                merkleRoot: string;
                ipfsCid: string;
            }>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        uniV3: {
            (options?: TransactionOptions): Promise<string>;
        };
        uniswapV3MintCallback: {
            (params: IUniswapV3MintCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUniswapV3MintCallbackParams, options?: TransactionOptions) => Promise<void>;
        };
        unlock: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<BigNumber>;
        };
        unlockAndRelease: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        unlockedAmount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        unlockedAmountAt: {
            (timestamp: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        updateReleaseSchdule: {
            (params: IUpdateReleaseSchduleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateReleaseSchduleParams, options?: TransactionOptions) => Promise<void>;
        };
        usedAllocation: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        weth: {
            (options?: TransactionOptions): Promise<string>;
        };
        withdrawFromRelease: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        withdrawFromTranche: {
            (params: IWithdrawFromTrancheParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IWithdrawFromTrancheParams, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module Vault {
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface BuyEvent {
            from: string;
            to: string;
            amountScom: BigNumber;
            amountEth: BigNumber;
            remainingBalance: BigNumber;
            _event: Event;
        }
        interface ClaimEvent {
            trancheId: BigNumber;
            from: string;
            to: string;
            amountScom: BigNumber;
            amountEth: BigNumber;
            remainingBalance: BigNumber;
            _event: Event;
        }
        interface DeauthorizeEvent {
            user: string;
            _event: Event;
        }
        interface DirectReleaseEvent {
            amount: BigNumber;
            unlockedAmount: BigNumber;
            releasedAmount: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            start: BigNumber;
            end: BigNumber;
            rate: BigNumber;
            initAmount: BigNumber;
            _event: Event;
        }
        interface NewTrancheEvent {
            trancheId: BigNumber;
            unlockedAmount: BigNumber;
            _event: Event;
        }
        interface ReleaseEvent {
            trancheIds: BigNumber[];
            amount: BigNumber;
            releasedAmount: BigNumber;
            _event: Event;
        }
        interface SellEvent {
            from: string;
            amountScom: BigNumber;
            amountEth: BigNumber;
            remainingBalance: BigNumber;
            _event: Event;
        }
        interface StartOwnershipTransferEvent {
            user: string;
            _event: Event;
        }
        interface TrancheReleaseEvent {
            trancheId: BigNumber;
            _event: Event;
        }
        interface TransferOwnershipEvent {
            user: string;
            _event: Event;
        }
        interface UnlockEvent {
            unlock: BigNumber;
            available: BigNumber;
            balance: BigNumber;
            _event: Event;
        }
        interface WithdrawScomFromReleaseEvent {
            amount: BigNumber;
            balance: BigNumber;
            _event: Event;
        }
        interface WithdrawScomFromTrancheEvent {
            trancheId: BigNumber;
            amount: BigNumber;
            remainingBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-portal-contract/contracts/index.ts" />
declare module "@scom/scom-portal-contract/contracts/index.ts" {
    export { AuditInfo } from "@scom/scom-portal-contract/contracts/AuditInfo.ts";
    export { AuditorInfo } from "@scom/scom-portal-contract/contracts/AuditorInfo.ts";
    export { Authorization } from "@scom/scom-portal-contract/contracts/Authorization.ts";
    export { DomainInfo } from "@scom/scom-portal-contract/contracts/DomainInfo.ts";
    export { ModuleInfo } from "@scom/scom-portal-contract/contracts/ModuleInfo.ts";
    export { NFTManager } from "@scom/scom-portal-contract/contracts/NFTManager.ts";
    export { NodeNFT } from "@scom/scom-portal-contract/contracts/NodeNFT.ts";
    export { ProjectInfo } from "@scom/scom-portal-contract/contracts/ProjectInfo.ts";
    export { RouterVaultWrapper } from "@scom/scom-portal-contract/contracts/RouterVaultWrapper.ts";
    export { Scom } from "@scom/scom-portal-contract/contracts/Scom.ts";
    export { Vault } from "@scom/scom-portal-contract/contracts/Vault.ts";
}
/// <amd-module name="@scom/scom-portal-contract" />
declare module "@scom/scom-portal-contract" {
    import { IWallet, BigNumber } from "@ijstech/eth-wallet";
    import * as Contracts from "@scom/scom-portal-contract/contracts/index.ts";
    export { Contracts };
    export interface IDeployOptions {
        token: {
            address?: string;
            minter?: string;
            initSupplyTo?: string;
            initSupply?: string;
            totalSupply?: string;
        };
        auditorInfo?: {
            foundation: string;
            foundationShare: BigNumber;
            minStakes: number | BigNumber;
            minEndorsementsRequired: number;
            cooldownPeriod: number;
            auditors?: string[];
        };
        projectInfo?: {
            admins: string[];
        };
        audit?: {
            warningThreshold: number | BigNumber;
            passingThreshold: number | BigNumber;
            auditDuration: number | BigNumber;
            minAuditRequired: number | BigNumber;
        };
        vault?: {
            foundation: string;
            uniV3: string;
        };
        nft?: {
            protocolFeeTo: string;
        };
    }
    export interface IDeployResult {
        token: string;
        domain: string;
        auditor: string;
        project: string;
        audit: string;
        vault: string;
        nft: {
            manager: string;
            nft: {
                [name: string]: string;
            };
        };
    }
    export var DefaultDeployOptions: IDeployOptions;
    export function deploy(wallet: IWallet, Config: IDeployOptions, onProgress: (msg: string) => void): Promise<IDeployResult>;
    const _default_11: {
        Contracts: typeof Contracts;
        deploy: typeof deploy;
        DefaultDeployOptions: IDeployOptions;
    };
    export default _default_11;
}
