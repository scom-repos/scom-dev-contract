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
export declare class DomainInfo extends _Contract {
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
export declare module DomainInfo {
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
