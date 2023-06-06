import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    foundation: string;
    scom: string;
    amm: string;
}
export interface IBuyParams {
    salesId: number | BigNumber;
    to: string;
    allocation: number | BigNumber;
    proof: string[];
}
export interface IBuyWithWETHParams {
    salesId: number | BigNumber;
    to: string;
    allocation: number | BigNumber;
    proof: string[];
}
export interface IReleaseAndBuyParams {
    salesIds: (number | BigNumber)[];
    to: string;
}
export interface IReleaseAndBuyWithWETHParams {
    salesIds: (number | BigNumber)[];
    to: string;
}
export interface IStartParams {
    startTime: number | BigNumber;
    endTime: number | BigNumber;
    decrementDecimal: number | BigNumber;
}
export interface IUpdateReleaseSchduleParams {
    endTime: number | BigNumber;
    initialReleaseAmount: number | BigNumber;
    decrementDecimal: number | BigNumber;
}
export declare class Vault extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAuthorizeEvent(receipt: TransactionReceipt): Vault.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): Vault.AuthorizeEvent;
    parseBuyEvent(receipt: TransactionReceipt): Vault.BuyEvent[];
    decodeBuyEvent(event: Event): Vault.BuyEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): Vault.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): Vault.DeauthorizeEvent;
    parseNewSaleEvent(receipt: TransactionReceipt): Vault.NewSaleEvent[];
    decodeNewSaleEvent(event: Event): Vault.NewSaleEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Vault.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): Vault.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Vault.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): Vault.TransferOwnershipEvent;
    amm: {
        (options?: TransactionOptions): Promise<string>;
    };
    amountUsedInSale: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    availableAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    buy: {
        (params: IBuyParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBuyParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    buyWithWETH: {
        (params: IBuyWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBuyWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    currReleaseAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    decrementDecimal: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    endTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    foundation: {
        (options?: TransactionOptions): Promise<string>;
    };
    initialReleaseAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    lasReleaseAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    lastUpdate: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    newSale: {
        (sale: {
            startTime: number | BigNumber;
            limitedPrivateSaleEndTime: number | BigNumber;
            unlimitedPrivateSaleEndTime: number | BigNumber;
            amount: number | BigNumber;
            merkleRoot: string;
            ipfsCid: string;
        }, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (sale: {
            startTime: number | BigNumber;
            limitedPrivateSaleEndTime: number | BigNumber;
            unlimitedPrivateSaleEndTime: number | BigNumber;
            amount: number | BigNumber;
            merkleRoot: string;
            ipfsCid: string;
        }, options?: TransactionOptions) => Promise<void>;
    };
    oneMinusDecrement: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    publicBuy: {
        (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: number | BigNumber | TransactionOptions) => Promise<{
            amountScom: BigNumber;
            to: string;
        }>;
    };
    publicBuyWithWETH: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<BigNumber>;
    };
    publicSaleAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    release: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<BigNumber>;
    };
    releaseAndBuy: {
        (params: IReleaseAndBuyParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IReleaseAndBuyParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    releaseAndBuyWithWETH: {
        (params: IReleaseAndBuyWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IReleaseAndBuyWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    releaseToPublic: {
        (salesIds: (number | BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (salesIds: (number | BigNumber)[], options?: TransactionOptions) => Promise<BigNumber>;
    };
    sales: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            startTime: BigNumber;
            limitedPrivateSaleEndTime: BigNumber;
            unlimitedPrivateSaleEndTime: BigNumber;
            amount: BigNumber;
            merkleRoot: string;
            ipfsCid: string;
        }>;
    };
    scom: {
        (options?: TransactionOptions): Promise<string>;
    };
    start: {
        (params: IStartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStartParams, options?: TransactionOptions) => Promise<void>;
    };
    startTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    token0IsScom: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    totalAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    totalSuppyAt: {
        (timestamp: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
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
    private assign;
}
export declare module Vault {
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface BuyEvent {
        to: string;
        amountScom: BigNumber;
        amountEth: BigNumber;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface NewSaleEvent {
        salesId: BigNumber;
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
