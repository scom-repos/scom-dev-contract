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
export declare class NFTManager extends _Contract {
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
export declare module NFTManager {
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
