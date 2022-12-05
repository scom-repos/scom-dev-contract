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
        cooldownPeriod: 60,
        auditors: []
    },
    projectInfo: {
        admins: []
    }
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
        cooldownPeriod: auditorInfoOptions.cooldownPeriod
    });
    for (let i = 0; i < auditorInfoOptions.auditors.length; i++) {
        await auditorInfo.addAuditor(auditorInfoOptions.auditors[i]);
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
async function deploy(wallet, Config, onProgress) {
    var _a;
    let result = {
        token: '',
        domain: '',
        auditor: '',
        project: ''
    };
    if (!Config.token.initSupplyTo) {
        onProgress('ERROR: token.initSupplyTo not defined!');
        return;
    }
    onProgress('1/4 Deploy token contract');
    if (!((_a = Config.token) === null || _a === void 0 ? void 0 : _a.address)) {
        result.token = await deployScom(wallet, Config);
    }
    else
        result.token = Config.token.address;
    onProgress('2/4 Deploy domain contract');
    result.domain = await deployDomainInfo(wallet, result.token);
    onProgress('3/4 Deploy auditor contract');
    result.auditor = await deployAuditorInfo(wallet, result.token, Config);
    onProgress('4/4 Deploy project contract');
    result.project = await deployProjectInfo(wallet, result.token, result.auditor, Config);
    return result;
}
exports.deploy = deploy;
exports.default = {
    Contracts,
    deploy,
    DefaultDeployOptions: exports.DefaultDeployOptions
};
