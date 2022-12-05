import {IWallet} from "@ijstech/eth-contract";
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
        cooldownPeriod: number;
        auditors?: string[];
    };
    projectInfo: {
        admins: string[];
    };
};
export interface IDeployResult{
    token: string;
    domain: string;
    auditor: string;
    project: string;
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
        cooldownPeriod: 60,
        auditors: []
    },
    projectInfo: {
        admins: []
    }
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
        cooldownPeriod: auditorInfoOptions.cooldownPeriod
    });
    for (let i = 0; i < auditorInfoOptions.auditors.length; i++) {
        await auditorInfo.addAuditor(auditorInfoOptions.auditors[i]);
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

export async function deploy(wallet: IWallet, Config: IDeployOptions, onProgress:(msg:string)=>void): Promise<IDeployResult> {
    let result: IDeployResult = {
        token: '',
        domain: '',
        auditor: '',
        project: ''
    };
    if (!Config.token.initSupplyTo){
        onProgress('ERROR: token.initSupplyTo not defined!')
        return;
    }
    onProgress('1/4 Deploy token contract')
    if (!Config.token?.address){        
        result.token = await deployScom(wallet, Config);
    }
    else
        result.token = Config.token.address;
    onProgress('2/4 Deploy domain contract')
    result.domain = await deployDomainInfo(wallet, result.token);
    onProgress('3/4 Deploy auditor contract')
    result.auditor = await deployAuditorInfo(wallet, result.token, Config);
    onProgress('4/4 Deploy project contract')
    result.project = await deployProjectInfo(wallet, result.token, result.auditor, Config);
    return result;
}
export default {
    Contracts,
    deploy,
    DefaultDeployOptions
};