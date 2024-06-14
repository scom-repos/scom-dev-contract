import {IWallet, BigNumber, Utils} from "@ijstech/eth-wallet";
import * as Contracts from "./contracts/index";
export {Contracts};

export interface IDeployOptions{
    token: {
        address?: string;
        minter?: string;
        initSupplyTo?: string;
        initSupply?: string;
        totalSupply?: string;
    };
    auditorInfo: {
        foundation: string;
        foundationShare: BigNumber;
        minStakes: number|BigNumber;
        minEndorsementsRequired: number;
        cooldownPeriod: number;
        auditors?: string[];
    };
    projectInfo: {
        admins: string[];
    };
    audit?: {
        warningThreshold: number|BigNumber;
        passingThreshold: number|BigNumber;
        auditDuration: number|BigNumber;
        minAuditRequired: number|BigNumber;
    };
    vault?: {
        foundation: string;
        uniV3: string;
    }
};
export interface IDeployResult{
    token: string;
    domain: string;
    auditor: string;
    project: string;
    audit: string;
    vault: string;
}
export var DefaultDeployOptions: IDeployOptions = {
    token: {
        address: '',
        minter: '',
        initSupplyTo: '',
        initSupply: '0',
        totalSupply: '100000000'
    },
    auditorInfo: {
        foundation: '',
        foundationShare: Utils.toDecimals("0.2"),
        minStakes: 1,
        minEndorsementsRequired: 2,
        cooldownPeriod: 60,
        auditors: []
    },
    projectInfo: {
        admins: []
    },
    audit: {
        warningThreshold: 600, // base 10e3
        passingThreshold: 900, // base 10e3
        auditDuration: 14 * 24*60*60,  // 14 days
        minAuditRequired: 3
    },
    // vault: {
    //     foundation: '',
    //     uniV3: ''
    // }
};
async function deployScom(wallet: IWallet, Config: IDeployOptions): Promise<string> {
    let scomOptions = Config.token;
    let token = new Contracts.Scom(wallet);  
    await token.deploy({
        minter: scomOptions.minter,
        initSupplyTo: scomOptions.initSupplyTo, 
        initSupply: wallet.utils.toDecimals(scomOptions.initSupply), 
        totalSupply: wallet.utils.toDecimals(scomOptions.totalSupply)
    })  
    return token.address;
}

async function deployAuditorInfo(wallet: IWallet, token: string, Config: IDeployOptions): Promise<string> {
    let auditorInfoOptions = Config.auditorInfo;
    let auditorInfo = new Contracts.AuditorInfo(wallet);
    let address = await auditorInfo.deploy({
        token,
        foundation: auditorInfoOptions.foundation,
        minStakes: wallet.utils.toDecimals(auditorInfoOptions.minStakes),
        minEndorsementsRequired: auditorInfoOptions.minEndorsementsRequired,
        cooldownPeriod: auditorInfoOptions.cooldownPeriod
    });
    for (let i = 0; i < auditorInfoOptions.auditors.length; i++) {
        await auditorInfo.addAuditor({auditor:auditorInfoOptions.auditors[i], isSuperAuditor:true});
    }
    return address;
}

async function deployProjectInfo(wallet: IWallet, token: string, auditorInfo: string, Config: IDeployOptions): Promise<string> {

    let projectInfoOptions = Config.projectInfo;
    let projectInfo = new Contracts.ProjectInfo(wallet);
    let address = await projectInfo.deploy({
        auditorInfo,
        token
    });
    for (let i = 0; i < projectInfoOptions.admins.length; i++) {
        await projectInfo.permit(projectInfoOptions.admins[i]);
    }
    return address;
}

async function deployDomainInfo(wallet: IWallet, token: string) {
    let domainInfo = new Contracts.DomainInfo(wallet);
    return await domainInfo.deploy(token);
}

async function deployAuditInfo(wallet: IWallet, projectInfo: string, auditorInfo: string, Config: IDeployOptions) {
    let auditInfo = new Contracts.AuditInfo(wallet);
    return await auditInfo.deploy({projectInfo, auditorInfo, ...Config.audit});
}

async function deployVault(wallet: IWallet, scom: string, Config: IDeployOptions) {
    let vault = new Contracts.Vault(wallet);
    return await vault.deploy({foundation: Config.vault.foundation, foundationShare: Config.auditorInfo.foundationShare, scom:scom, uniV3: Config.vault.uniV3});
}

export async function deploy(wallet: IWallet, Config: IDeployOptions, onProgress:(msg:string)=>void): Promise<IDeployResult> {
    let result: IDeployResult = {
        token: '',
        domain: '',
        auditor: '',
        project: '',
        audit: '',
        vault: '',
    };
    onProgress('1/6 Deploy token contract')
    if (!Config.token?.address){        
        if (!Config.token.initSupplyTo){
            onProgress('ERROR: token.initSupplyTo not defined!')
            return;
        }
        result.token = await deployScom(wallet, Config);
        onProgress(`token: ${result.token}`)
    }
    else
        result.token = Config.token.address;
    onProgress('2/6 Deploy domain contract')
    result.domain = await deployDomainInfo(wallet, result.token);
    onProgress(`domain: ${result.domain}`)
    onProgress('3/6 Deploy auditor contract')
    result.auditor = await deployAuditorInfo(wallet, result.token, Config);
    onProgress(`auditor: ${result.auditor}`)
    onProgress('4/6 Deploy project contract')
    result.project = await deployProjectInfo(wallet, result.token, result.auditor, Config);
    onProgress(`project: ${result.project}`)
    onProgress('5/6 Deploy audit contract')
    if (Config.audit) {
        result.audit = await deployAuditInfo(wallet, result.project, result.auditor, Config);
        onProgress(`audit: ${result.audit}`)
    }
    onProgress('6/6 Deploy vault contract')
    if (Config.vault) {
        result.vault = await deployVault(wallet, result.token, Config);
        onProgress(`vault: ${result.vault}`)
    }

    onProgress(JSON.stringify(result, null, 2))
    return result;
}
export default {
    Contracts,
    deploy,
    DefaultDeployOptions
};