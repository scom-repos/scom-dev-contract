import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    token0: string;
    token1: string;
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
export interface ISwapParams {
    amount0Out: number | BigNumber;
    amount1Out: number | BigNumber;
    to: string;
    param4: string;
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
export declare class MockAmmPair extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): MockAmmPair.ApprovalEvent[];
    decodeApprovalEvent(event: Event): MockAmmPair.ApprovalEvent;
    parseBurnEvent(receipt: TransactionReceipt): MockAmmPair.BurnEvent[];
    decodeBurnEvent(event: Event): MockAmmPair.BurnEvent;
    parseMintEvent(receipt: TransactionReceipt): MockAmmPair.MintEvent[];
    decodeMintEvent(event: Event): MockAmmPair.MintEvent;
    parseSwapEvent(receipt: TransactionReceipt): MockAmmPair.SwapEvent[];
    decodeSwapEvent(event: Event): MockAmmPair.SwapEvent;
    parseTransferEvent(receipt: TransactionReceipt): MockAmmPair.TransferEvent[];
    decodeTransferEvent(event: Event): MockAmmPair.TransferEvent;
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
    burn: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    };
    getReserves: {
        (options?: TransactionOptions): Promise<{
            reserve0: BigNumber;
            reserve1: BigNumber;
            blockTimestampLast: BigNumber;
        }>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    };
    mint: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<BigNumber>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
    };
    reserve0: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    reserve1: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    skim: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<void>;
    };
    swap: {
        (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
    };
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    };
    sync: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    token0: {
        (options?: TransactionOptions): Promise<string>;
    };
    token1: {
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
export declare module MockAmmPair {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface BurnEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        to: string;
        _event: Event;
    }
    interface MintEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        sender: string;
        amount0In: BigNumber;
        amount1In: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
        to: string;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
