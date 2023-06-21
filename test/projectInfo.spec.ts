import 'mocha';

import {Utils, Wallet, Erc20, BigNumber} from "@ijstech/eth-wallet";
import {AuditorInfo, ProjectInfo, Scom} from '../src/contracts/index';
import * as Ganache from "ganache";
import * as assert from 'assert';
import { assertEqual, getProvider, expectToFail, print } from './helper';


describe('## Project', function() {  
    this.timeout(40000);
    let wallet = new Wallet(getProvider());
    let token: Scom;   
    let auditorInfo: AuditorInfo;
    let projectInfo: ProjectInfo; 
    let accounts: string[];   
    let projectVersionMap: {[key: number]: any[]} = {};

    let deployer: string;
    let foundation: string;
    let projectOwner: string;
    let projectOwner2: string;
    let projectAdmin: string;
    let backer1: string;
    let backer2: string;
    let nobody: string;
    before(async function(){
        accounts = await wallet.accounts;
        deployer = accounts[0];
        foundation = accounts[1];
        projectOwner = accounts[2];
        projectOwner2 = accounts[3];
        projectAdmin = accounts[4];
        backer1 = accounts[5];
        backer2 = accounts[6];
        nobody = accounts[7];
    })
    it('Deploy contracts', async function(){
        wallet.defaultAccount = deployer; 
        token = new Scom(wallet);  
        await token.deploy({
            minter: deployer,
            initSupplyTo: deployer, 
            initSupply: Utils.toDecimals(999999), 
            totalSupply: Utils.toDecimals(999999)
        })   
        await token.transfer({
            amount: Utils.toDecimals(6000),
            to: foundation
        })
        auditorInfo = new AuditorInfo(wallet);
        await auditorInfo.deploy({
            foundation: foundation,
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
        wallet.defaultAccount = projectOwner;

        let newProjectReceipt = await projectInfo.newProject({name:'test', ipfsCid:'bay1'});
        let newProjectEvent = projectInfo.parseNewProjectEvent(newProjectReceipt);
        assertEqual(newProjectEvent.length, 1);
        assertEqual(newProjectEvent[0], {
            projectId: 0, 
            owner: projectOwner, 
            name: 'test', 
            ipfsCid: 'bay1'
        }, true);
        let projectId = newProjectEvent[0].projectId;;
        assertEqual(await projectInfo.projectOwner(projectId), projectOwner);
        assertEqual(await projectInfo.ownersProjects({param1:projectOwner, param2:0}), projectId);
        assertEqual(await projectInfo.ownersProjectsInv({param1:projectOwner, param2:projectId}), 0);
        assertEqual(await projectInfo.ownersProjectsLength(projectOwner), 1);
        assertEqual(await projectInfo.projectName(projectId), 'test');
        assertEqual(await projectInfo.projectNameInv('test'), projectId);
        assertEqual(await projectInfo.projectIpfsCid(projectId), 'bay1');
        let projectCount = await projectInfo.projectCount();
        assert.strictEqual(newProjectEvent[0].projectId.toNumber() + 1, projectCount.toNumber());

        wallet.defaultAccount = nobody;
        await expectToFail(projectInfo.newProject({name:'test', ipfsCid:'bay1'}), 'invalid project name');
        await expectToFail(projectInfo.newProject({name:'Test', ipfsCid:'bay1'}), 'invalid project name');
        await expectToFail(projectInfo.newProject({name:'testTest', ipfsCid:'bay1'}), 'invalid project name');
        await projectInfo.newProject({name:'test123', ipfsCid:'bay1'});
        await projectInfo.newProject({name:'test-123', ipfsCid:'bay1'});
        await projectInfo.newProject({name:'test_123', ipfsCid:'bay1'});
    })
    it('Add project admin and remove project admin', async function() {    
        wallet.defaultAccount = projectOwner; 
        let receipt = await projectInfo.addProjectAdmin({
            projectId: 0,
            admin: projectAdmin
        });
        let event = projectInfo.parseAddAdminEvent(receipt);
        assertEqual(event[0], {
            projectId: 0,
            admin: projectAdmin
        },
        true);
        let _projectAdmin = await projectInfo.projectAdmin({
            param1: 0,
            param2: 0
        });
        assert.strictEqual(_projectAdmin, projectAdmin);
        assertEqual(await projectInfo.projectAdminInv({param1:0, param2:projectOwner}), new BigNumber(0));
        await expectToFail(projectInfo.addProjectAdmin({
            projectId: 0,
            admin: projectAdmin
        }), "already an admin");
    })
    it('Create a new package', async function() { 
        wallet.defaultAccount = projectOwner; 
        let newPackageReceipt = await projectInfo.newPackage({
            projectId: 0,
            name: 'test',
            category: '',
            ipfsCid: 'bbyy1'
        })
        let event = projectInfo.parseNewPackageEvent(newPackageReceipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            projectId: 0, 
            packageId: 0, 
            name: 'test',
            ipfsCid: 'bbyy1'
        },
        true);
        assertEqual(await projectInfo.packages(0), {
            projectId: 0,
            currVersionIndex: 0,
            ipfsCid: 'bbyy1',
            category: Utils.stringToBytes32(''),
            status: 1
        });
        assertEqual(await projectInfo.projectPackagesLength(0), 1);
        assertEqual(await projectInfo.packageName({param1:0, param2:0}), 'test');
        assertEqual(await projectInfo.packageNameInv({param1:0, param2:'test'}), 0);
        assertEqual(await projectInfo.packagesLength(), 1);
        assertEqual(await projectInfo.projectPackages({param1:0, param2:0}), 0);
        assertEqual(await projectInfo.projectPackagesLength(0), 1);

        // create another package
        await projectInfo.newPackage({
            projectId: 0,
            name: 'test1',
            category: '',
            ipfsCid: 'bbyy1'
        });

        // update package
        let receipt = await projectInfo.updatePackageName({projectId:0, packageId:0, name:"test-test"});
        let event2 = projectInfo.parseUpdatePackageNameEvent(receipt);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            packageId: 0, 
            name: 'test-test'
        },
        true);

        // can update to the same name
        await projectInfo.updatePackageName({projectId:0, packageId:0, name:"test-test"});
        await projectInfo.updatePackageName({projectId:0, packageId:1, name:"test1"});
        assertEqual(await projectInfo.packageName({param1:0, param2:0}), 'test-test');
        assertEqual(await projectInfo.packageNameInv({param1:0, param2:'test-test'}), 0);

        // cannot update to an existing name
        await expectToFail(projectInfo.updatePackageName({projectId:0, packageId:0, name:"test1"}), 'invalid package name');
        // cannot add package with an existing name
        await expectToFail(projectInfo.newPackage({
            projectId: 0,
            name: 'test1',
            category: '',
            ipfsCid: 'bbyy1'
        }), 'invalid package name');

        wallet.defaultAccount = nobody; 
        await expectToFail(projectInfo.newPackage({
            projectId: 0,
            name: 'test2',
            category: '',
            ipfsCid: 'bbyy1'
        }), 'not from admin');
    })
    it ('new package version', async function(){
        wallet.defaultAccount = projectAdmin; 
        let receipt = await projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 1
            },
            ipfsCid: 'baad1'
        })
        let event3 = projectInfo.parseNewPackageVersionEvent(receipt);
        assertEqual(event3.length, 1);
        assertEqual(event3[0], {
            packageId: 0, 
            packageVersionId: 0, 
            version: {
                major: 0,
                minor: 0,
                patch: 1
            }
        },
        true);
        assertEqual(await projectInfo.packageVersionsListLength(0), 1);
        assertEqual(await projectInfo.packageVersionsList({param1:0, param2:0}), 0);
        assertEqual(await projectInfo.packageVersions(0), {
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 1
            },
            status: 1,
            ipfsCid: 'baad1',
            timestamp: await wallet.getBlockTimestamp()
        });
        assertEqual(await projectInfo.packageVersionsLength(), 1);

        wallet.defaultAccount = nobody; 
        await expectToFail(projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 1
            },
            ipfsCid: 'baad1'
        }), 'not from admin');
    })
    it('Bump package patch version', async function() { 
        wallet.defaultAccount = projectAdmin; 
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
        await expectToFail(projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 1
            },
            ipfsCid: 'baad1'
        }), "patch version must be bumped");
    })   
    it('Bump package minor version', async function() { 
        wallet.defaultAccount = projectAdmin; 
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
        await expectToFail(projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 1
            },
            ipfsCid: 'baad1'
        }), "minor version must be bumped");
    }) 
    it('Bump package major version', async function() { 
        wallet.defaultAccount = projectAdmin; 
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
        await expectToFail(projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 1
            },
            ipfsCid: 'baad1'
        }), "major version must be bumped");
    })
    it ('Void package', async function () {
        wallet.defaultAccount = nobody; 
        await expectToFail(projectInfo.voidPackageVersion(0), "not from admin");

        wallet.defaultAccount = projectAdmin; 
        await projectInfo.voidPackageVersion(0);
        assertEqual(await projectInfo.packageVersions(0), {status:0}, true);
    })
    it('Remove project admin', async function() { 
        wallet.defaultAccount = projectAdmin; 
        await expectToFail(projectInfo.removeProjectAdmin({
            projectId: 0,
            admin: projectOwner
        }), "not from owner");
        wallet.defaultAccount = projectOwner; 
        await expectToFail(projectInfo.removeProjectAdmin({
            projectId: 0,
            admin: projectOwner
        }), "not an admin");
        let receipt = await projectInfo.removeProjectAdmin({
            projectId: 0,
            admin: projectAdmin
        });
        let event = projectInfo.parseRemoveAdminEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {projectId: 0, admin: projectAdmin}, true);
        assertEqual(await projectInfo.projectAdminLength(0), 0);
        assertEqual(await projectInfo.projectAdminInv({param1:0, param2:projectAdmin}), 0);

        wallet.defaultAccount = projectAdmin; 
        await expectToFail(projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 2,
                minor: 0,
                patch: 0
            },
            ipfsCid: 'baad1'
        }), "not from admin");
    })
    it('Stake to Project Id 0', async function() { 
        wallet.defaultAccount = deployer;
        await token.transfer({
            to: backer1,
            amount: Utils.toDecimals(100)
        });
        wallet.defaultAccount = backer1; 
        await token.approve({
            spender: projectInfo.address,
            amount: Utils.toDecimals(100)
        });
        let receipt = await projectInfo.stake({
            projectId: 0,
            amount: Utils.toDecimals(100)
        });
        let event = projectInfo.parseStakeEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            sender: backer1, 
            projectId: 0,
            amount: Utils.toDecimals(100), 
            newBalance: Utils.toDecimals(100)
        }, true);

        let backerBalance = await projectInfo.projectBackerBalance({
            param1: backer1,
            param2: 0
        })
        let projectBalance = await projectInfo.projectBalance(0);
        assert.strictEqual(backerBalance.toFixed(), Utils.toDecimals(100).toFixed());
        assert.strictEqual(projectBalance.toFixed(), Utils.toDecimals(100).toFixed());
    })
    it('Account 0: Unstake from Project Id 0', async function() { 
        wallet.defaultAccount = backer1; 
        let receipt = await projectInfo.unstake({
            projectId: 0,
            amount: Utils.toDecimals(99)
        });
        let event = projectInfo.parseUnstakeEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {
            sender: backer1, 
            projectId: 0,
            amount: Utils.toDecimals(99), 
            newBalance: Utils.toDecimals(1)
        }, true);

        let backerBalance = await projectInfo.projectBackerBalance({
            param1: backer1,
            param2: 0
        })
        let projectBalance = await projectInfo.projectBalance(0);
        assert.strictEqual(backerBalance.toFixed(), Utils.toDecimals(1).toFixed());
        assert.strictEqual(projectBalance.toFixed(), Utils.toDecimals(1).toFixed());
    })
    it('Account 1: Stake to Project Id 0', async function() { 
        wallet.defaultAccount = deployer;
        await token.transfer({
            to: backer2,
            amount: Utils.toDecimals(200)
        });
        wallet.defaultAccount = backer2; 
        await token.approve({
            spender: projectInfo.address,
            amount: Utils.toDecimals(200)
        });
        await projectInfo.stake({
            projectId: 0,
            amount: Utils.toDecimals(200)
        })
        let backerBalance = await projectInfo.projectBackerBalance({
            param1: backer2,
            param2: 0
        })
        let projectBalance = await projectInfo.projectBalance(0);
        assert.strictEqual(backerBalance.toFixed(), Utils.toDecimals(200).toFixed());
        assert.strictEqual(projectBalance.toFixed(), Utils.toDecimals(201).toFixed());
    })
    it('transfer project owner', async function() { 
        wallet.defaultAccount = nobody;
        await expectToFail(projectInfo.transferProjectOwnership({projectId:0, newOwner:projectOwner2}), 'not from owner');
        wallet.defaultAccount = projectOwner;
        let receipt = await projectInfo.transferProjectOwnership({projectId:0, newOwner:projectOwner2});
        assertEqual(await projectInfo.projectOwner(0), projectOwner);
        assertEqual(await projectInfo.projectNewOwner(0), projectOwner2);

        wallet.defaultAccount = nobody;
        await expectToFail(projectInfo.takeProjectOwnership(0), 'not from new owner');
        wallet.defaultAccount = projectOwner2;
        receipt = await projectInfo.takeProjectOwnership(0);
        let event = projectInfo.parseTransferProjectOwnershipEvent(receipt);
        assertEqual(event.length, 1);
        assertEqual(event[0], {projectId: 0, newOwner: projectOwner2}, true);
        // remove owner event ?
        assertEqual(await projectInfo.ownersProjectsLength(projectOwner), 0);
        // assertEqual(await projectInfo.ownersProjectsInv({param1:projectOwner, param2:0}), 0);
        assertEqual(await projectInfo.ownersProjectsLength(projectOwner2), 1);
        assertEqual(await projectInfo.ownersProjects({param1:projectOwner2, param2:0}), 0);
        assertEqual(await projectInfo.ownersProjectsInv({param1:projectOwner2, param2:0}), 0);
        assertEqual(await projectInfo.projectOwner(0), projectOwner2);
        assertEqual(await projectInfo.projectNewOwner(0), Utils.nullAddress);
    })
})