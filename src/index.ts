import { BigNumber } from "@ijstech/eth-contract";
import  * as Contracts from "./contracts/index";
export {Contracts};
// export interface DeployOptions{
//     scom: {
//         address?: string;
//         minter?: string;
//         initSupplyTo?: BigNumber;
//         initSupply?: BigNumber;
//         totalSupply?: BigNumber;
//     };
//     auditorInfo: {
//         cooldownPeriod: number;
//         auditors?: string[];
//     };
//     projectInfo: {
//         admins: string[];
//     };
// };
// async function deployScom(wallet: Wallet, Config) {
//     let {scomOptions} = Config.deployOptions;
//     let token = new Contracts.Scom(wallet);  
//     await token.deploy({
//         minter: scomOptions.minter,
//         initSupplyTo: scomOptions.initSupplyTo, 
//         initSupply: Utils.toDecimals(scomOptions.initSupply), 
//         totalSupply: Utils.toDecimals(scomOptions.totalSupply)
//     })  
//     return token.address;
// }

// async function deployAuditorInfo(wallet: Wallet, token: string) {
//     let {auditorInfoOptions} = Config.deployOptions;
//     let auditorInfo = new Contracts.AuditorInfo(wallet);
//     let address = await auditorInfo.deploy({
//         token,
//         cooldownPeriod: auditorInfoOptions.cooldownPeriod
//     });
//     console.log('AuditorInfo', address);
//     for (let i = 0; i < auditorInfoOptions.auditors.length; i++) {
//         await auditorInfo.addAuditor(auditorInfoOptions.auditors[i]);
//     }
//     return address;
// }

// async function deployProjectInfo(wallet: Wallet, token: string, auditorInfo: string) {
//     let {projectInfoOptions} = Config.deployOptions;
//     let projectInfo = new Contracts.ProjectInfo(wallet);
//     let address = await projectInfo.deploy({
//         auditorInfo,
//         token
//     });
//     console.log('ProjectInfo', address)
//     for (let i = 0; i < projectInfoOptions.admins.length; i++) {
//         await projectInfo.permit(projectInfoOptions.admins[i]);
//     }
// }

// async function deployDomainInfo(wallet: Wallet, token: string) {
//     let domainInfo = new Contracts.DomainInfo(wallet);
//     let address = await domainInfo.deploy(token);
//     console.log('DomainInfo', address)
// }

// export async function deploy() {
//     let {rpcUrl, deployer} = Config;
//     let provider = rpcUrl;
//     let wallet = new Wallet(provider, deployer);
//     // let token = await deployScom(wallet);
//     // await deployDomainInfo(wallet, token);
//     // let auditorInfo = await deployAuditorInfo(wallet, token);
//     let token = '0xf5debAAcB2Df6854D16BFD51cC12E5c0C4a51Ba9';
//     let auditorInfo = '0x79Aed3ac5056EdA1119812b26046e913E769BD8a';
//     await deployProjectInfo(wallet, token, auditorInfo);
// }