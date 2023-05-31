import 'mocha';
import {BigNumber, Utils, Wallet} from "@ijstech/eth-wallet";
import {Contracts, deploy, DefaultDeployOptions} from '../src';
import * as Ganache from "ganache";
import * as assert from 'assert';

describe('## SC-Contract', async function() {
    this.timeout(20000);
    let accounts: string[];
    let provider = Ganache.provider({
        logging: {
            logger: {
                log: () => { }
            }
        }
    });

    let domainContract: Contracts.DomainInfo;
    let tokenContract: Contracts.Scom;   
    let projectContract: Contracts.ProjectInfo;
    
    const wallet = new Wallet(provider); 
    before(async function(){
        accounts = await wallet.accounts; 
        wallet.defaultAccount = accounts[0];

    });
    describe('##DomainInfo', async function(){
        it('Deploy contract', async function(){
            DefaultDeployOptions.token.initSupply = '1000000'
            DefaultDeployOptions.token.initSupplyTo = accounts[0];
            DefaultDeployOptions.token.minter = accounts[0];
            let result = await deploy(wallet, DefaultDeployOptions, (msg)=>{
                // console.dir(msg);
            });
            domainContract = new Contracts.DomainInfo(wallet, result.domain);
            tokenContract = new Contracts.Scom(wallet, result.token);
            projectContract = new Contracts.ProjectInfo(wallet, result.project);
        });
        it('Set Domain Info', async function(){
            let result = await domainContract.updateDomainInfo({
                domainName: 'localhost',
                moduleType: 1,
                module: 'abc'
            })
        });
        it('Get Domain Info', async function(){
            let result = await domainContract.getDomainInfo({
                domainName: 'localhost',
                owner: accounts[0]
            });
            assert.strictEqual(result.module, 'abc')
        })
        it('Deposit', async function(){
            await tokenContract.approve({
                spender: domainContract.address,
                amount: Utils.toDecimals(300)
            })
            let result = await domainContract.deposit({
                domainName: 'localhost',
                amount: Utils.toDecimals(300)
            });
        })
        it('Withdraw', async function(){
            let result = await domainContract.withdraw({
                domainName: 'localhost',
                amount: Utils.toDecimals(220)
            });
            let balance = await domainContract.balanceOf({
                param1: accounts[0],
                param2: 'localhost'
            })
            assert.strictEqual(balance.toFixed(), Utils.toDecimals(80).toFixed())
        })
        it('Increase Allowance', async function(){
            await domainContract.increaseAllowance({
                spender: accounts[1],
                domainName: 'localhost',
                addedValue: Utils.toDecimals(40)
            });
            let result = await domainContract.allowances({
                param1: accounts[0],
                param2: 'localhost',
                param3: accounts[1]
            })
            assert.strictEqual(Utils.fromDecimals(result).toNumber(), 40)
        })
        it('Decrease Allowance', async function(){
            await domainContract.decreaseAllowance({
                spender: accounts[1],
                domainName: 'localhost',
                subtractedValue: Utils.toDecimals(10)
            });
            let result = await domainContract.allowances({
                param1: accounts[0],
                param2: 'localhost',
                param3: accounts[1]
            })
            assert.strictEqual(Utils.fromDecimals(result).toNumber(), 30)
        })
        it('Spend', async function(){
            let result = await domainContract.spend({
                owner: accounts[0],
                domainName: 'localhost',
                destination: accounts[1],
                amount: Utils.toDecimals(15)
            });
            let balance = await tokenContract.balanceOf(accounts[1]);
            assert.strictEqual(Utils.fromDecimals(balance).toNumber(), 15);
        })  
        it('Allowance Balance', async function(){
            let result = await domainContract.allowances({
                param1: accounts[0],
                param2: 'localhost',
                param3: accounts[1]
            })
            assert.strictEqual(Utils.fromDecimals(result).toNumber(), 15)
        }) 
    });
    describe('##ProjectInfo', async function(){
        before(async function(){
            wallet.defaultAccount = accounts[0]; 
        })
        it('New Invalid Project', async function() {
            try {
                await projectContract.newProject({
                    name: '_abc',
                    ipfsCid: 'abc'
                });
            } catch (err) {
                assert.strictEqual(err.data.reason, 'invalid project name');
                return;
            }  
            throw new Error('Exception not catched');
        })
        it('New Project', async function(){
            let newProjectReceipt = await projectContract.newProject({
                name: 'abc',
                ipfsCid: 'abc'
            });
            let newProjectEvent = projectContract.parseNewProjectEvent(newProjectReceipt)[0];
            
            let projectCount = await projectContract.projectCount();
            assert.strictEqual(newProjectEvent.projectId.toNumber() + 1, projectCount.toNumber());
            let name = await projectContract.projectName(newProjectEvent.projectId);
            let ipfsCid = await projectContract.projectIpfsCid(newProjectEvent.projectId);
            assert.strictEqual(name, 'abc');
            assert.strictEqual(ipfsCid, 'abc');
        })
        it('Duplicate Project Name', async function() {
            try {
                await projectContract.newProject({
                    name: 'abc',
                    ipfsCid: 'abc'
                });
            } catch (err) {
                assert.strictEqual(err.data.reason, 'invalid project name');
                return;
            }  
            throw new Error('Exception not catched');
        })
        it('Update Project Name', async function() {
            await projectContract.updateProjectName({
                projectId: 0,
                name: 'scom'
            });
            let name = await projectContract.projectName(0);
            assert.strictEqual(name, 'scom');
        })
        it('Update Project IpfsCid', async function() {
            await projectContract.updateProjectIpfsCid({
                projectId: 0,
                ipfsCid: 'abcd'
            });
            let ipfsCid = await projectContract.projectIpfsCid(0);
            assert.strictEqual(ipfsCid, 'abcd');
        })
        it('New Invalid Package', async function() {
            try {
                await projectContract.newPackage({
                    projectId: 0,
                    name: '???',
                    ipfsCid: ''
                });
            } catch (err) {
                assert.strictEqual(err.data.reason, 'invalid package name');
                return;
            }
            throw new Error('Exception not catched');
        })
        it('New Package', async function() {
            let newPackageReceipt = await projectContract.newPackage({
                projectId: 0,
                name: 'package',
                ipfsCid: 'abc'
            });
            let newPackageEvent = projectContract.parseNewPackageEvent(newPackageReceipt)[0];
            let packageInfo = await projectContract.packages(newPackageEvent.packageId);
            assert.strictEqual(packageInfo.projectId.toNumber(), 0);
            assert.strictEqual(packageInfo.ipfsCid, 'abc');
        })
        it('Duplicate Package Name', async function() {
            try {
                await projectContract.newPackage({
                    projectId: 0,
                    name: 'package',
                    ipfsCid: 'abc'
                });
            } catch (err) {
                assert.strictEqual(err.data.reason, 'invalid package name');
                return;
            }  
            throw new Error('Exception not catched');
        })
        it('Duplicate Package Name (different project)', async function() {
            let newProjectReceipt = await projectContract.newProject({
                name: 'xxx',
                ipfsCid: 'abc'
            });
            let newProjectEvent = projectContract.parseNewProjectEvent(newProjectReceipt)[0];
            
            let newPackageReceipt = await projectContract.newPackage({
                projectId: newProjectEvent.projectId,
                name: 'package',
                ipfsCid: 'abc'
            });
            let newPackageEvent = projectContract.parseNewPackageEvent(newPackageReceipt)[0];
            let packageInfo = await projectContract.packages(newPackageEvent.packageId);
            assert.strictEqual(packageInfo.projectId.toNumber(), 1);
            assert.strictEqual(packageInfo.ipfsCid, 'abc');
        })
        it('Update Package Name', async function() {
            await projectContract.updatePackageName({
                projectId: 0,
                packageId: 0,
                name: 'portal'
            });
            let name = await projectContract.packageName({
                param1: 0,
                param2: 0
            });
            assert.strictEqual(name, 'portal');
        })
        it('Add Package Admin', async function() {
            await projectContract.addPackageAdmin({
                packageId: 0,
                admin: accounts[1]
            });
            let length = await projectContract.packageAdminLength(0);
            assert.strictEqual(length.toNumber(), 1);
            let idx = await projectContract.packageAdminInv({
                param1: 0,
                param2: accounts[1]
            });
            let admin = await projectContract.packageAdmin({
                param1: 0,
                param2: idx
            });
            assert.strictEqual(admin, accounts[1]);
        })
        it('New Package Version', async function() {
            let version = {
                major: new BigNumber(0),
                minor: new BigNumber(1),
                patch: new BigNumber(0)
            }
            let receipt = await projectContract.newPackageVersion({
                projectId: 0,
                packageId: 0,
                version: version,
                ipfsCid: 'abc'
            });
            let event = projectContract.parseNewPackageVersionEvent(receipt)[0];
            let packageVersion = await projectContract.packageVersions(event.packageVersionId);
            assert.deepStrictEqual(packageVersion.version, version);
            assert.strictEqual(packageVersion.status.toNumber(), 0);
        })
        it('Update Package Version IpfsCid', async function() {
            wallet.defaultAccount = accounts[1]; 
            let packageVersionId = 0;
            await projectContract.updatePackageVersionIpfsCid({
                packageVersionId,
                ipfsCid: 'baf'
            });
            let packageVersion = await projectContract.packageVersions(packageVersionId);
            assert.strictEqual(packageVersion.ipfsCid, 'baf');
        })
        it('Remove Package Admin', async function() {
            wallet.defaultAccount = accounts[0]; 
            await projectContract.removePackageAdmin({
                packageId: 0,
                admin: accounts[1]
            });
            let length = await projectContract.packageAdminLength(0);
            assert.strictEqual(length.toNumber(), 0);
        })
        it('Set Package Version To Auditing', async function() {
            let packageVersionId = 0;
            await projectContract.setPackageVersionToAuditing(packageVersionId);
            let packageVersion = await projectContract.packageVersions(packageVersionId);
            assert.strictEqual(packageVersion.status.toNumber(), 1);
        })
        it('Update Package Version IpfsCid (not under working)', async function() {
            try {
                await projectContract.updatePackageVersionIpfsCid({
                    packageVersionId: 0,
                    ipfsCid: 'baf'
                });
            } catch (err) {
                assert.strictEqual(err.data.reason, 'not under working');
                return;
            }
            throw new Error('Exception not catched');
        })
    })
})