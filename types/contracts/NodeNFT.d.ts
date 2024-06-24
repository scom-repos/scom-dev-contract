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
export declare class NodeNFT extends _Contract {
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
export declare module NodeNFT {
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
