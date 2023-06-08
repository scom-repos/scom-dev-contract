import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    vault: string;
    router: string;
}
export interface ISwapExactTokensForTokensParams {
    pair: string[];
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    deadline: number | BigNumber;
    trancheId: number | BigNumber;
    to: string;
    allocation: number | BigNumber;
    proof: string[];
}
export interface ISwapTokensForExactTokensParams {
    pair: string[];
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    deadline: number | BigNumber;
    trancheId: number | BigNumber;
    to: string;
    allocation: number | BigNumber;
    proof: string[];
}
export declare class RouterVaultWrapper extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAuthorizeEvent(receipt: TransactionReceipt): RouterVaultWrapper.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): RouterVaultWrapper.AuthorizeEvent;
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
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<void>;
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
export declare module RouterVaultWrapper {
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
    interface SwapEvent {
        trancheId: BigNumber;
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
