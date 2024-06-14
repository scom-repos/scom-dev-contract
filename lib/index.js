"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploy = exports.DefaultDeployOptions = exports.Contracts = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Contracts = __importStar(require("./contracts/index"));
exports.Contracts = Contracts;
;
exports.DefaultDeployOptions = {
    token: {
        address: '',
        minter: '',
        initSupplyTo: '',
        initSupply: '0',
        totalSupply: '100000000'
    },
    auditorInfo: {
        foundation: '',
        foundationShare: eth_wallet_1.Utils.toDecimals("0.2"),
        minStakes: 1,
        minEndorsementsRequired: 2,
        cooldownPeriod: 60,
        auditors: []
    },
    projectInfo: {
        admins: []
    },
    audit: {
        warningThreshold: 600,
        passingThreshold: 900,
        auditDuration: 14 * 24 * 60 * 60,
        minAuditRequired: 3
    },
};
async function deployScom(wallet, Config) {
    let scomOptions = Config.token;
    let token = new Contracts.Scom(wallet);
    await token.deploy({
        minter: scomOptions.minter,
        initSupplyTo: scomOptions.initSupplyTo,
        initSupply: wallet.utils.toDecimals(scomOptions.initSupply),
        totalSupply: wallet.utils.toDecimals(scomOptions.totalSupply)
    });
    return token.address;
}
async function deployAuditorInfo(wallet, token, Config) {
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
        await auditorInfo.addAuditor({ auditor: auditorInfoOptions.auditors[i], isSuperAuditor: true });
    }
    return address;
}
async function deployProjectInfo(wallet, token, auditorInfo, Config) {
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
async function deployDomainInfo(wallet, token) {
    let domainInfo = new Contracts.DomainInfo(wallet);
    return await domainInfo.deploy(token);
}
async function deployAuditInfo(wallet, projectInfo, auditorInfo, Config) {
    let auditInfo = new Contracts.AuditInfo(wallet);
    return await auditInfo.deploy({ projectInfo, auditorInfo, ...Config.audit });
}
async function deployVault(wallet, scom, Config) {
    let vault = new Contracts.Vault(wallet);
    return await vault.deploy({ foundation: Config.vault.foundation, foundationShare: Config.auditorInfo.foundationShare, scom: scom, uniV3: Config.vault.uniV3 });
}
async function deploy(wallet, Config, onProgress) {
    let result = {
        token: '',
        domain: '',
        auditor: '',
        project: '',
        audit: '',
        vault: '',
    };
    onProgress('1/6 Deploy token contract');
    if (!Config.token?.address) {
        if (!Config.token.initSupplyTo) {
            onProgress('ERROR: token.initSupplyTo not defined!');
            return;
        }
        result.token = await deployScom(wallet, Config);
        onProgress(`token: ${result.token}`);
    }
    else
        result.token = Config.token.address;
    onProgress('2/6 Deploy domain contract');
    result.domain = await deployDomainInfo(wallet, result.token);
    onProgress(`domain: ${result.domain}`);
    onProgress('3/6 Deploy auditor contract');
    result.auditor = await deployAuditorInfo(wallet, result.token, Config);
    onProgress(`auditor: ${result.auditor}`);
    onProgress('4/6 Deploy project contract');
    result.project = await deployProjectInfo(wallet, result.token, result.auditor, Config);
    onProgress(`project: ${result.project}`);
    onProgress('5/6 Deploy audit contract');
    if (Config.audit) {
        result.audit = await deployAuditInfo(wallet, result.project, result.auditor, Config);
        onProgress(`audit: ${result.audit}`);
    }
    onProgress('6/6 Deploy vault contract');
    if (Config.vault) {
        result.vault = await deployVault(wallet, result.token, Config);
        onProgress(`vault: ${result.vault}`);
    }
    onProgress(JSON.stringify(result, null, 2));
    return result;
}
exports.deploy = deploy;
exports.default = {
    Contracts,
    deploy,
    DefaultDeployOptions: exports.DefaultDeployOptions
};
