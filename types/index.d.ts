/// <amd-module name="@scom/sc-core/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" />
declare module "@scom/sc-core/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" {
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
/// <amd-module name="@scom/sc-core/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" />
declare module "@scom/sc-core/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
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
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class ERC20 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20.TransferEvent;
        allowance: {
            (params: IAllowanceParams): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams): Promise<TransactionReceipt>;
            call: (params: IApproveParams) => Promise<boolean>;
        };
        balanceOf: {
            (account: string): Promise<BigNumber>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
        };
        name: {
            (): Promise<string>;
        };
        symbol: {
            (): Promise<string>;
        };
        totalSupply: {
            (): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams): Promise<TransactionReceipt>;
            call: (params: ITransferParams) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams) => Promise<boolean>;
        };
        private assign;
    }
    export module ERC20 {
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
/// <amd-module name="@scom/sc-core/contracts/AuditorInfo.json.ts" />
declare module "@scom/sc-core/contracts/AuditorInfo.json.ts" {
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
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/sc-core/contracts/AuditorInfo.ts" />
declare module "@scom/sc-core/contracts/AuditorInfo.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        token: string;
        cooldownPeriod: number | BigNumber;
    }
    export interface IGetAuditorsParams {
        auditorIdStart: number | BigNumber;
        length: number | BigNumber;
    }
    export class AuditorInfo extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
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
            (): Promise<BigNumber>;
        };
        addAuditor: {
            (auditor: string): Promise<TransactionReceipt>;
            call: (auditor: string) => Promise<void>;
        };
        auditorBalance: {
            (param1: number | BigNumber): Promise<BigNumber>;
        };
        auditorIdCount: {
            (): Promise<BigNumber>;
        };
        auditorIds: {
            (param1: string): Promise<BigNumber>;
        };
        auditorsData: {
            (param1: number | BigNumber): Promise<{
                auditor: string;
                status: BigNumber;
            }>;
        };
        cooldownPeriod: {
            (): Promise<BigNumber>;
        };
        deny: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        disableAuditor: {
            (auditor: string): Promise<TransactionReceipt>;
            call: (auditor: string) => Promise<void>;
        };
        getAuditors: {
            (params: IGetAuditorsParams): Promise<{
                auditor: string;
                status: BigNumber;
            }[]>;
        };
        isActiveAuditor: {
            (account: string): Promise<boolean>;
        };
        isPermitted: {
            (param1: string): Promise<boolean>;
        };
        newOwner: {
            (): Promise<string>;
        };
        owner: {
            (): Promise<string>;
        };
        pendingWithdrawal: {
            (param1: number | BigNumber): Promise<{
                amount: BigNumber;
                releaseTime: BigNumber;
            }>;
        };
        permit: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        setCooldownPeriod: {
            (cooldownPeriod: number | BigNumber): Promise<TransactionReceipt>;
            call: (cooldownPeriod: number | BigNumber) => Promise<void>;
        };
        stakeBond: {
            (amount: number | BigNumber): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber) => Promise<void>;
        };
        takeOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        token: {
            (): Promise<string>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        unstakeBondRequest: {
            (amount: number | BigNumber): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber) => Promise<void>;
        };
        withdrawBond: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        private assign;
    }
    export module AuditorInfo {
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
}
/// <amd-module name="@scom/sc-core/contracts/Authorization.json.ts" />
declare module "@scom/sc-core/contracts/Authorization.json.ts" {
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
/// <amd-module name="@scom/sc-core/contracts/Authorization.ts" />
declare module "@scom/sc-core/contracts/Authorization.ts" {
    import { IWallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-contract";
    export class Authorization extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): Authorization.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): Authorization.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): Authorization.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): Authorization.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Authorization.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): Authorization.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): Authorization.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): Authorization.TransferOwnershipEvent;
        deny: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        isPermitted: {
            (param1: string): Promise<boolean>;
        };
        newOwner: {
            (): Promise<string>;
        };
        owner: {
            (): Promise<string>;
        };
        permit: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        takeOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
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
/// <amd-module name="@scom/sc-core/contracts/DomainInfo.json.ts" />
declare module "@scom/sc-core/contracts/DomainInfo.json.ts" {
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
/// <amd-module name="@scom/sc-core/contracts/DomainInfo.ts" />
declare module "@scom/sc-core/contracts/DomainInfo.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
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
    export class DomainInfo extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(token: string): Promise<string>;
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
            (params: IAllowancesParams): Promise<BigNumber>;
        };
        balanceOf: {
            (params: IBalanceOfParams): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams) => Promise<void>;
        };
        deny: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        deposit: {
            (params: IDepositParams): Promise<TransactionReceipt>;
            call: (params: IDepositParams) => Promise<void>;
        };
        domainModule: {
            (params: IDomainModuleParams): Promise<string>;
        };
        domainType: {
            (params: IDomainTypeParams): Promise<BigNumber>;
        };
        getDomainInfo: {
            (params: IGetDomainInfoParams): Promise<{
                moduleType: BigNumber;
                module: string;
            }>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams) => Promise<void>;
        };
        isPermitted: {
            (param1: string): Promise<boolean>;
        };
        newOwner: {
            (): Promise<string>;
        };
        owner: {
            (): Promise<string>;
        };
        permit: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        spend: {
            (params: ISpendParams): Promise<TransactionReceipt>;
            call: (params: ISpendParams) => Promise<void>;
        };
        takeOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        token: {
            (): Promise<string>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        updateDomainInfo: {
            (params: IUpdateDomainInfoParams): Promise<TransactionReceipt>;
            call: (params: IUpdateDomainInfoParams) => Promise<void>;
        };
        updateDomainModule: {
            (params: IUpdateDomainModuleParams): Promise<TransactionReceipt>;
            call: (params: IUpdateDomainModuleParams) => Promise<void>;
        };
        withdraw: {
            (params: IWithdrawParams): Promise<TransactionReceipt>;
            call: (params: IWithdrawParams) => Promise<void>;
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
/// <amd-module name="@scom/sc-core/contracts/ModuleInfo.json.ts" />
declare module "@scom/sc-core/contracts/ModuleInfo.json.ts" {
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
/// <amd-module name="@scom/sc-core/contracts/ModuleInfo.ts" />
declare module "@scom/sc-core/contracts/ModuleInfo.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
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
    export class ModuleInfo extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseCurrentVersionEvent(receipt: TransactionReceipt): ModuleInfo.CurrentVersionEvent[];
        decodeCurrentVersionEvent(event: Event): ModuleInfo.CurrentVersionEvent;
        parseNewPackageEvent(receipt: TransactionReceipt): ModuleInfo.NewPackageEvent[];
        decodeNewPackageEvent(event: Event): ModuleInfo.NewPackageEvent;
        parseNewReleaseEvent(receipt: TransactionReceipt): ModuleInfo.NewReleaseEvent[];
        decodeNewReleaseEvent(event: Event): ModuleInfo.NewReleaseEvent;
        addPackage: {
            (packageName: string): Promise<TransactionReceipt>;
            call: (packageName: string) => Promise<void>;
        };
        addRelease: {
            (params: IAddReleaseParams): Promise<TransactionReceipt>;
            call: (params: IAddReleaseParams) => Promise<void>;
        };
        getAllOwnerPackages: {
            (owner: string): Promise<string[]>;
        };
        getAllOwnerPackagesAndHash: {
            (owner: string): Promise<{
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
            (packageHash: string): Promise<{
                version: string;
                uri: string;
            }[]>;
        };
        getBatchOwnerPackages: {
            (params: IGetBatchOwnerPackagesParams): Promise<string[]>;
        };
        getBatchOwnerPackagesAndHash: {
            (params: IGetBatchOwnerPackagesAndHashParams): Promise<{
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
            (params: IGetBatchpackageReleasesParams): Promise<{
                version: string;
                uri: string;
            }[]>;
        };
        ownerPackages: {
            (params: IOwnerPackagesParams): Promise<string>;
        };
        ownerPackagesIndex: {
            (params: IOwnerPackagesIndexParams): Promise<BigNumber>;
        };
        ownerPackagesLength: {
            (owner: string): Promise<BigNumber>;
        };
        packageProperties: {
            (param1: string): Promise<{
                owner: string;
                currVersion: string;
                currVersionHash: string;
            }>;
        };
        packageReleases: {
            (params: IPackageReleasesParams): Promise<{
                version: string;
                uri: string;
            }>;
        };
        packageReleasesIndex: {
            (params: IPackageReleasesIndexParams): Promise<BigNumber>;
        };
        packageReleasesLength: {
            (packageHash: string): Promise<BigNumber>;
        };
        setCurrentVersion: {
            (params: ISetCurrentVersionParams): Promise<TransactionReceipt>;
            call: (params: ISetCurrentVersionParams) => Promise<void>;
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
/// <amd-module name="@scom/sc-core/contracts/ProjectInfo.json.ts" />
declare module "@scom/sc-core/contracts/ProjectInfo.json.ts" {
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
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/sc-core/contracts/ProjectInfo.ts" />
declare module "@scom/sc-core/contracts/ProjectInfo.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        token: string;
        auditorInfo: string;
    }
    export interface IAddProjectAdminParams {
        projectId: number | BigNumber;
        admin: string;
    }
    export interface INewPackageParams {
        projectId: number | BigNumber;
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
    export interface INewProjectVersionParams {
        projectId: number | BigNumber;
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
    export interface IProjectVersionListParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IRemoveProjectAdminParams {
        projectId: number | BigNumber;
        admin: string;
    }
    export interface ISetPackageVersionToAuditFailedParams {
        packageVersionId: number | BigNumber;
        reportUri: string;
    }
    export interface ISetPackageVersionToAuditPassedParams {
        packageVersionId: number | BigNumber;
        reportUri: string;
    }
    export interface ISetProjectCurrentVersionParams {
        projectId: number | BigNumber;
        versionIdx: number | BigNumber;
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
    export interface IVoidProjectVersionParams {
        projectId: number | BigNumber;
        versionIdx: number | BigNumber;
    }
    export class ProjectInfo extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseAddAdminEvent(receipt: TransactionReceipt): ProjectInfo.AddAdminEvent[];
        decodeAddAdminEvent(event: Event): ProjectInfo.AddAdminEvent;
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
        parseNewProjectVersionEvent(receipt: TransactionReceipt): ProjectInfo.NewProjectVersionEvent[];
        decodeNewProjectVersionEvent(event: Event): ProjectInfo.NewProjectVersionEvent;
        parseRemoveAdminEvent(receipt: TransactionReceipt): ProjectInfo.RemoveAdminEvent[];
        decodeRemoveAdminEvent(event: Event): ProjectInfo.RemoveAdminEvent;
        parseSetPackageVersionStatusEvent(receipt: TransactionReceipt): ProjectInfo.SetPackageVersionStatusEvent[];
        decodeSetPackageVersionStatusEvent(event: Event): ProjectInfo.SetPackageVersionStatusEvent;
        parseSetProjectCurrentVersionEvent(receipt: TransactionReceipt): ProjectInfo.SetProjectCurrentVersionEvent[];
        decodeSetProjectCurrentVersionEvent(event: Event): ProjectInfo.SetProjectCurrentVersionEvent;
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
        parseVoidProjectVersionEvent(receipt: TransactionReceipt): ProjectInfo.VoidProjectVersionEvent[];
        decodeVoidProjectVersionEvent(event: Event): ProjectInfo.VoidProjectVersionEvent;
        addProjectAdmin: {
            (params: IAddProjectAdminParams): Promise<TransactionReceipt>;
            call: (params: IAddProjectAdminParams) => Promise<void>;
        };
        auditorInfo: {
            (): Promise<string>;
        };
        deny: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        isPermitted: {
            (param1: string): Promise<boolean>;
        };
        latestAuditedPackageVersion: {
            (param1: number | BigNumber): Promise<{
                packageId: BigNumber;
                version: {
                    major: BigNumber;
                    minor: BigNumber;
                    patch: BigNumber;
                };
                status: BigNumber;
                ipfsCid: string;
                reportUri: string;
            }>;
        };
        newOwner: {
            (): Promise<string>;
        };
        newPackage: {
            (params: INewPackageParams): Promise<TransactionReceipt>;
            call: (params: INewPackageParams) => Promise<BigNumber>;
        };
        newPackageVersion: {
            (params: INewPackageVersionParams): Promise<TransactionReceipt>;
            call: (params: INewPackageVersionParams) => Promise<BigNumber>;
        };
        newProject: {
            (ipfsCid: string): Promise<TransactionReceipt>;
            call: (ipfsCid: string) => Promise<BigNumber>;
        };
        newProjectVersion: {
            (params: INewProjectVersionParams): Promise<TransactionReceipt>;
            call: (params: INewProjectVersionParams) => Promise<BigNumber>;
        };
        owner: {
            (): Promise<string>;
        };
        ownersProjects: {
            (params: IOwnersProjectsParams): Promise<BigNumber>;
        };
        ownersProjectsInv: {
            (params: IOwnersProjectsInvParams): Promise<BigNumber>;
        };
        ownersProjectsLength: {
            (owner: string): Promise<BigNumber>;
        };
        packageVersions: {
            (param1: number | BigNumber): Promise<{
                packageId: BigNumber;
                version: {
                    major: BigNumber;
                    minor: BigNumber;
                    patch: BigNumber;
                };
                status: BigNumber;
                ipfsCid: string;
                reportUri: string;
            }>;
        };
        packageVersionsLength: {
            (): Promise<BigNumber>;
        };
        packageVersionsList: {
            (params: IPackageVersionsListParams): Promise<BigNumber>;
        };
        packageVersionsListLength: {
            (packageId: number | BigNumber): Promise<BigNumber>;
        };
        packages: {
            (param1: number | BigNumber): Promise<{
                projectId: BigNumber;
                currVersionIndex: BigNumber;
                status: BigNumber;
                ipfsCid: string;
            }>;
        };
        packagesLength: {
            (): Promise<BigNumber>;
        };
        permit: {
            (user: string): Promise<TransactionReceipt>;
            call: (user: string) => Promise<void>;
        };
        projectAdmin: {
            (params: IProjectAdminParams): Promise<string>;
        };
        projectAdminInv: {
            (params: IProjectAdminInvParams): Promise<BigNumber>;
        };
        projectAdminLength: {
            (projectId: number | BigNumber): Promise<BigNumber>;
        };
        projectBackerBalance: {
            (params: IProjectBackerBalanceParams): Promise<BigNumber>;
        };
        projectBalance: {
            (param1: number | BigNumber): Promise<BigNumber>;
        };
        projectCount: {
            (): Promise<BigNumber>;
        };
        projectCurrentVersion: {
            (param1: number | BigNumber): Promise<BigNumber>;
        };
        projectNewOwner: {
            (param1: number | BigNumber): Promise<string>;
        };
        projectOwner: {
            (param1: number | BigNumber): Promise<string>;
        };
        projectPackages: {
            (params: IProjectPackagesParams): Promise<BigNumber>;
        };
        projectPackagesInv: {
            (params: IProjectPackagesInvParams): Promise<BigNumber>;
        };
        projectPackagesLength: {
            (projectId: number | BigNumber): Promise<BigNumber>;
        };
        projectVersionList: {
            (params: IProjectVersionListParams): Promise<BigNumber>;
        };
        projectVersionListLength: {
            (projectId: number | BigNumber): Promise<BigNumber>;
        };
        projectVersions: {
            (param1: number | BigNumber): Promise<{
                projectId: BigNumber;
                version: BigNumber;
                ipfsCid: string;
                status: BigNumber;
                lastModifiedDate: BigNumber;
            }>;
        };
        projectVersionsInv: {
            (param1: string): Promise<BigNumber>;
        };
        projectVersionsLength: {
            (): Promise<BigNumber>;
        };
        removeProjectAdmin: {
            (params: IRemoveProjectAdminParams): Promise<TransactionReceipt>;
            call: (params: IRemoveProjectAdminParams) => Promise<void>;
        };
        setPackageVersionToAuditFailed: {
            (params: ISetPackageVersionToAuditFailedParams): Promise<TransactionReceipt>;
            call: (params: ISetPackageVersionToAuditFailedParams) => Promise<void>;
        };
        setPackageVersionToAuditPassed: {
            (params: ISetPackageVersionToAuditPassedParams): Promise<TransactionReceipt>;
            call: (params: ISetPackageVersionToAuditPassedParams) => Promise<void>;
        };
        setProjectCurrentVersion: {
            (params: ISetProjectCurrentVersionParams): Promise<TransactionReceipt>;
            call: (params: ISetProjectCurrentVersionParams) => Promise<void>;
        };
        stake: {
            (params: IStakeParams): Promise<TransactionReceipt>;
            call: (params: IStakeParams) => Promise<void>;
        };
        takeOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        takeProjectOwnership: {
            (projectId: number | BigNumber): Promise<TransactionReceipt>;
            call: (projectId: number | BigNumber) => Promise<void>;
        };
        token: {
            (): Promise<string>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        transferProjectOwnership: {
            (params: ITransferProjectOwnershipParams): Promise<TransactionReceipt>;
            call: (params: ITransferProjectOwnershipParams) => Promise<void>;
        };
        unstake: {
            (params: IUnstakeParams): Promise<TransactionReceipt>;
            call: (params: IUnstakeParams) => Promise<void>;
        };
        updatePackageIpfsCid: {
            (params: IUpdatePackageIpfsCidParams): Promise<TransactionReceipt>;
            call: (params: IUpdatePackageIpfsCidParams) => Promise<void>;
        };
        voidPackageVersion: {
            (packageVersionId: number | BigNumber): Promise<TransactionReceipt>;
            call: (packageVersionId: number | BigNumber) => Promise<void>;
        };
        voidProjectVersion: {
            (params: IVoidProjectVersionParams): Promise<TransactionReceipt>;
            call: (params: IVoidProjectVersionParams) => Promise<void>;
        };
        private assign;
    }
    export module ProjectInfo {
        interface AddAdminEvent {
            projectId: BigNumber;
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
            _event: Event;
        }
        interface NewProjectVersionEvent {
            projectId: BigNumber;
            projectVersionIdx: BigNumber;
            ipfsCid: string;
            _event: Event;
        }
        interface RemoveAdminEvent {
            projectId: BigNumber;
            admin: string;
            _event: Event;
        }
        interface SetPackageVersionStatusEvent {
            packageId: BigNumber;
            packageVersionId: BigNumber;
            status: BigNumber;
            _event: Event;
        }
        interface SetProjectCurrentVersionEvent {
            projectId: BigNumber;
            projectVersionIdx: BigNumber;
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
        interface VoidProjectVersionEvent {
            projectVersionIdx: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/sc-core/contracts/Scom.json.ts" />
declare module "@scom/sc-core/contracts/Scom.json.ts" {
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
/// <amd-module name="@scom/sc-core/contracts/Scom.ts" />
declare module "@scom/sc-core/contracts/Scom.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
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
    export class Scom extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): Scom.ApprovalEvent[];
        decodeApprovalEvent(event: Event): Scom.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): Scom.TransferEvent[];
        decodeTransferEvent(event: Event): Scom.TransferEvent;
        allowance: {
            (params: IAllowanceParams): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams): Promise<TransactionReceipt>;
            call: (params: IApproveParams) => Promise<boolean>;
        };
        balanceOf: {
            (account: string): Promise<BigNumber>;
        };
        cap: {
            (): Promise<BigNumber>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
        };
        mint: {
            (params: IMintParams): Promise<TransactionReceipt>;
            call: (params: IMintParams) => Promise<void>;
        };
        minter: {
            (): Promise<string>;
        };
        name: {
            (): Promise<string>;
        };
        symbol: {
            (): Promise<string>;
        };
        totalSupply: {
            (): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams): Promise<TransactionReceipt>;
            call: (params: ITransferParams) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams) => Promise<boolean>;
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
/// <amd-module name="@scom/sc-core/contracts/index.ts" />
declare module "@scom/sc-core/contracts/index.ts" {
    export { ERC20 } from "@scom/sc-core/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts";
    export { AuditorInfo } from "@scom/sc-core/contracts/AuditorInfo.ts";
    export { Authorization } from "@scom/sc-core/contracts/Authorization.ts";
    export { DomainInfo } from "@scom/sc-core/contracts/DomainInfo.ts";
    export { ModuleInfo } from "@scom/sc-core/contracts/ModuleInfo.ts";
    export { ProjectInfo } from "@scom/sc-core/contracts/ProjectInfo.ts";
    export { Scom } from "@scom/sc-core/contracts/Scom.ts";
}
/// <amd-module name="@scom/sc-core" />
declare module "@scom/sc-core" {
    import * as Contracts from "@scom/sc-core/contracts/index.ts";
    export { Contracts };
}
