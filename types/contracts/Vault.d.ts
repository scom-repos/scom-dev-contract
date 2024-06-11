import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    foundation: string;
    scom: string;
    uniV3: string;
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
    startTime: number | BigNumber;
    endTime: number | BigNumber;
    decrementDecimal: number | BigNumber;
}
export interface IReleaseAndSwapParams {
    trancheIds: (number | BigNumber)[];
    to: string;
}
export interface IReleaseAndSwapWithWETHParams {
    trancheIds: (number | BigNumber)[];
    from: string;
    to: string;
}
export interface ISwapWithWETHParams {
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
export declare class Vault extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAuthorizeEvent(receipt: TransactionReceipt): Vault.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): Vault.AuthorizeEvent;
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
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Vault.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): Vault.StartOwnershipTransferEvent;
    parseSwapEvent(receipt: TransactionReceipt): Vault.SwapEvent[];
    decodeSwapEvent(event: Event): Vault.SwapEvent;
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
    claim: {
        (params: IClaimParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IClaimParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    claimWithWETH: {
        (params: IClaimWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IClaimWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    currTotalSupply: {
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
    releaseAndSwap: {
        (params: IReleaseAndSwapParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IReleaseAndSwapParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    releaseAndSwapWithWETH: {
        (params: IReleaseAndSwapWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IReleaseAndSwapWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
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
    startTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    startingAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    swap: {
        (to: string, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    swapWithWETH: {
        (params: ISwapWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
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
    totalAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    totalSupplyAt: {
        (timestamp: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
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
export declare module Vault {
    interface AuthorizeEvent {
        user: string;
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
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface SwapEvent {
        from: string;
        to: string;
        amountScom: BigNumber;
        amountEth: BigNumber;
        remainingBalance: BigNumber;
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
