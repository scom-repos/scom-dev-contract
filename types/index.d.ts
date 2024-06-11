import { IWallet, BigNumber } from "@ijstech/eth-wallet";
import * as Contracts from "./contracts/index";
export { Contracts };
export interface IDeployOptions {
    token: {
        address?: string;
        minter?: string;
        initSupplyTo?: string;
        initSupply?: string;
        totalSupply?: string;
    };
    auditorInfo: {
        foundation: string;
        minStakes: number | BigNumber;
        minEndorsementsRequired: number;
        cooldownPeriod: number;
        auditors?: string[];
    };
    projectInfo: {
        admins: string[];
    };
    audit?: {
        warningThreshold: number | BigNumber;
        passingThreshold: number | BigNumber;
        auditDuration: number | BigNumber;
        minAuditRequired: number | BigNumber;
    };
    vault?: {
        foundation: string;
        uniV3: string;
    };
}
export interface IDeployResult {
    token: string;
    domain: string;
    auditor: string;
    project: string;
    audit: string;
    vault: string;
}
export declare var DefaultDeployOptions: IDeployOptions;
export declare function deploy(wallet: IWallet, Config: IDeployOptions, onProgress: (msg: string) => void): Promise<IDeployResult>;
declare const _default: {
    Contracts: typeof Contracts;
    deploy: typeof deploy;
    DefaultDeployOptions: IDeployOptions;
};
export default _default;
