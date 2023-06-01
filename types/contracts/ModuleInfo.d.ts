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
export declare class ModuleInfo extends _Contract {
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
export declare module ModuleInfo {
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
