import 'mocha';
import {Utils, Wallet} from "@ijstech/eth-wallet";
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
        it('New Project', async function(){
            let newProjectReceipt = await projectContract.newProject('abc');
            let newProjectEvent = projectContract.parseNewProjectEvent(newProjectReceipt)[0];
            
            let projectCount = await projectContract.projectCount();
            assert.strictEqual(newProjectEvent.projectId.toNumber() + 1, projectCount.toNumber());
            let projectFirstVersion = await projectContract.projectVersionList({ 
                param1: newProjectEvent.projectId.toNumber(),
                param2: 0
            });
            let projectCurrentVersion = await projectContract.projectCurrentVersion(newProjectEvent.projectId.toNumber());
            assert.strictEqual(projectFirstVersion.toNumber(), projectCurrentVersion.toNumber());
        })
    })
})