import 'mocha';

import {Utils, Wallet, Erc20, BigNumber} from "@ijstech/eth-wallet";
import {AuditorInfo, ProjectInfo, Scom} from '../src/contracts/index';
import * as Ganache from "ganache";
import * as assert from 'assert';

describe('##Contracts', function() {  
    this.timeout(40000);
    let provider = Ganache.provider({
        logging: {
            logger: {
                log: () => { }
            }
        }
    });        
    let wallet = new Wallet(provider);
    let token: Scom;   
    let auditorInfo: AuditorInfo;
    let projectInfo: ProjectInfo; 
    let accounts: string[];   
    let projectVersionMap: {[key: number]: any[]} = {};
    async function createNewProject(ipfsCid: string) {
        let newProjectReceipt = await projectInfo.newProject({name:'test', ipfsCid:ipfsCid});
        let newProjectEvent = projectInfo.parseNewProjectEvent(newProjectReceipt)[0];
        
        let projectCount = await projectInfo.projectCount();
        assert.strictEqual(newProjectEvent.projectId.toNumber() + 1, projectCount.toNumber());
        return newProjectEvent;
    }

    before(async function(){
        accounts = await wallet.accounts;
    })
    it('Deploy contracts', async function(){
        wallet.defaultAccount = accounts[0]; 
        token = new Scom(wallet);  
        await token.deploy({
            minter: accounts[0],
            initSupplyTo: accounts[0], 
            initSupply: Utils.toDecimals(999999), 
            totalSupply: Utils.toDecimals(999999)
        })   
        await token.transfer({
            amount: Utils.toDecimals(6000),
            to: accounts[1]
        })
        auditorInfo = new AuditorInfo(wallet);
        await auditorInfo.deploy({
            foundation: accounts[0],
            minStakes: 1,
            minEndorsementsRequired: 2,
            token: token.address,
            cooldownPeriod: 0
        });
        projectInfo = new ProjectInfo(wallet);
        await projectInfo.deploy({
            auditorInfo: auditorInfo.address,
            token: token.address
        });
    })    
    it('Create a new project and a project version', async function() {    
        let newProjectEvent = await createNewProject('bay1');
    })
    it('Add project admin and remove project admin', async function() {    
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.addProjectAdmin({
            projectId: 0,
            admin: accounts[1]
        });
        let projectAdmin = await projectInfo.projectAdmin({
            param1: 0,
            param2: 0
        });
        assert.strictEqual(projectAdmin, accounts[1]);
        await projectInfo.removeProjectAdmin({
            projectId: 0,
            admin: accounts[1]
        });
    })
    it('Create a new package', async function() { 
        wallet.defaultAccount = accounts[0]; 
        let newPackageReceipt = await projectInfo.newPackage({
            projectId: 0,
            name: 'test',
            category: '',
            ipfsCid: 'bbyy1'
        })
        await projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 1
            },
            ipfsCid: 'baad1'
        })
        let projectPackagesLength = await projectInfo.projectPackagesLength(0);
        for (let i = 0; i < projectPackagesLength.toNumber(); i++) {
            let packageId = await projectInfo.projectPackages({
                param1: 0,
                param2: i          
            })
            let packageInfo = await projectInfo.packages(packageId);
        }
    })
    it('Bump package patch version', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 2
            },
            ipfsCid: 'baad1'
        })
    })   
    it('Bump package minor version', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 1,
                patch: 1
            },
            ipfsCid: 'baad1'
        })
    }) 
    it('Bump package major version', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 1,
                minor: 0,
                patch: 2
            },
            ipfsCid: 'baad1'
        })
    })
    it('Stake to Project Id 0', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await token.approve({
            spender: projectInfo.address,
            amount: Utils.toDecimals(100)
        });
        await projectInfo.stake({
            projectId: 0,
            amount: Utils.toDecimals(100)
        })
        let backerBalance = await projectInfo.projectBackerBalance({
            param1: accounts[0],
            param2: 0
        })
        let projectBalance = await projectInfo.projectBalance(0);
        assert.strictEqual(backerBalance.toFixed(), Utils.toDecimals(100).toFixed());
        assert.strictEqual(projectBalance.toFixed(), Utils.toDecimals(100).toFixed());
    })
    it('Account 0: Unstake from Project Id 0', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.unstake({
            projectId: 0,
            amount: Utils.toDecimals(99)
        })
        let backerBalance = await projectInfo.projectBackerBalance({
            param1: accounts[0],
            param2: 0
        })
        let projectBalance = await projectInfo.projectBalance(0);
        assert.strictEqual(backerBalance.toFixed(), Utils.toDecimals(1).toFixed());
        assert.strictEqual(projectBalance.toFixed(), Utils.toDecimals(1).toFixed());
    })
    it('Account 1: Stake to Project Id 0', async function() { 
        wallet.defaultAccount = accounts[1]; 
        await token.approve({
            spender: projectInfo.address,
            amount: Utils.toDecimals(200)
        });
        await projectInfo.stake({
            projectId: 0,
            amount: Utils.toDecimals(200)
        })
        let backerBalance = await projectInfo.projectBackerBalance({
            param1: accounts[1],
            param2: 0
        })
        let projectBalance = await projectInfo.projectBalance(0);
        assert.strictEqual(backerBalance.toFixed(), Utils.toDecimals(200).toFixed());
        assert.strictEqual(projectBalance.toFixed(), Utils.toDecimals(201).toFixed());
    })
})