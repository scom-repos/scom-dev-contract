import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    foundation: string;
    scom: string;
    amm: string;
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
export interface IPublicSwapWithWETHParams {
    from: string;
    to: string;
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
export interface IUpdateReleaseSchduleParams {
    endTime: number | BigNumber;
    startingAmount: number | BigNumber;
    decrementDecimal: number | BigNumber;
}
export interface IWithdrawScomFromTrancheParams {
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
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Vault.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): Vault.TransferOwnershipEvent;
    parseUnlockEvent(receipt: TransactionReceipt): Vault.UnlockEvent[];
    decodeUnlockEvent(event: Event): Vault.UnlockEvent;
    parseWithdrawScomFromReleaseEvent(receipt: TransactionReceipt): Vault.WithdrawScomFromReleaseEvent[];
    decodeWithdrawScomFromReleaseEvent(event: Event): Vault.WithdrawScomFromReleaseEvent;
    parseWithdrawScomFromTrancheEvent(receipt: TransactionReceipt): Vault.WithdrawScomFromTrancheEvent[];
    decodeWithdrawScomFromTrancheEvent(event: Event): Vault.WithdrawScomFromTrancheEvent;
    amm: {
        (options?: TransactionOptions): Promise<string>;
    };
    amountUsedInTranche: {
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
    endTime: {
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
    publicSwapWithWETH: {
        (params: IPublicSwapWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPublicSwapWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    releaseAndSwap: {
        (params: IReleaseAndSwapParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IReleaseAndSwapParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    releaseAndSwapWithWETH: {
        (params: IReleaseAndSwapWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IReleaseAndSwapWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    releaseFromLocked: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    releaseFromUnlocked: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
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
        (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: number | BigNumber | TransactionOptions) => Promise<{
            amountScom: BigNumber;
            to: string;
        }>;
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
    unlock: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<BigNumber>;
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
    withdrawScomFromRelease: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    withdrawScomFromTranche: {
        (params: IWithdrawScomFromTrancheParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawScomFromTrancheParams, options?: TransactionOptions) => Promise<void>;
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
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
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
        _event: Event;
    }
    interface ReleaseEvent {
        amount: BigNumber;
        balance: BigNumber;
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
        _event: Event;
    }
    interface WithdrawScomFromTrancheEvent {
        amount: BigNumber;
        _event: Event;
    }
}
