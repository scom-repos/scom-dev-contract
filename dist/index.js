define("@scom/portal-contract/contracts/AuditInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/AuditInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract ProjectInfo", "name": "_projectInfo", "type": "address" }, { "internalType": "contract AuditorInfo", "name": "_auditorInfo", "type": "address" }, { "internalType": "uint256", "name": "_warningThreshold", "type": "uint256" }, { "internalType": "uint256", "name": "_passedThreshold", "type": "uint256" }, { "internalType": "uint256", "name": "_auditDuration", "type": "uint256" }, { "internalType": "uint256", "name": "_minAuditRequired", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }, { "indexed": false, "internalType": "enum AuditInfo.AuditResult", "name": "auditResult", "type": "uint8" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "AddAuditReport", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [], "name": "THRESHOLD_BASE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }, { "internalType": "enum AuditInfo.AuditResult", "name": "auditResult", "type": "uint8" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "addAuditReport", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "auditDuration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "auditHistory", "outputs": [{ "internalType": "enum AuditInfo.AuditResult", "name": "auditResult", "type": "uint8" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }], "name": "auditHistoryAuditorLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }, { "internalType": "address", "name": "auditor", "type": "address" }], "name": "auditHistoryLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "auditorInfo", "outputs": [{ "internalType": "contract AuditorInfo", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }], "name": "getLastAuditResult", "outputs": [{ "internalType": "address[]", "name": "auditors", "type": "address[]" }, { "internalType": "enum AuditInfo.AuditResult[]", "name": "results", "type": "uint8[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lastAuditResultBeforeAuditPeriod", "outputs": [{ "internalType": "enum AuditInfo.AuditResult", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "latestAuditResult", "outputs": [{ "internalType": "enum AuditInfo.AuditResult", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "minAuditRequired", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageVersionsAuditors", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "packageVersionsAuditorsInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "passedThreshold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "projectInfo", "outputs": [{ "internalType": "contract ProjectInfo", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_auditDuration", "type": "uint256" }], "name": "setAuditDuration", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_minAuditRequired", "type": "uint256" }], "name": "setMinAuditRequired", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_passedThreshold", "type": "uint256" }], "name": "setPassedThreshold", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_warningThreshold", "type": "uint256" }], "name": "setWarningThreshold", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "warningThreshold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162001b9738038062001b97833981016040819052620000349162000105565b600080546001600160a01b031916331790556001600355600b54831180156200005f57506103e88311155b620000a45760405162461bcd60e51b81526020600482015260116024820152701a5b9d985b1a59081d1a1c995cda1bdb19607a1b604482015260640160405180910390fd5b600480546001600160a01b039788166001600160a01b0319918216179091556005805496909716951694909417909455600b91909155600c55600e91909155600d5562000168565b6001600160a01b03811681146200010257600080fd5b50565b60008060008060008060c087890312156200011f57600080fd5b86516200012c81620000ec565b60208801519096506200013f81620000ec565b6040880151606089015160808a015160a0909a0151989b929a5090989097909650945092505050565b611a1f80620001786000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c806375a320b3116100f9578063a8e5ed2111610097578063d4ee1d9011610071578063d4ee1d9014610426578063e3dcc52614610446578063f2fde38b14610467578063fd9116481461047a57600080fd5b8063a8e5ed21146103dd578063ac1c4f4c146103e6578063be12f7531461040657600080fd5b80638da5cb5b116100d35780638da5cb5b1461038e5780639c52a7f1146103ae578063a2f55ae5146103c1578063a488437e146103d457600080fd5b806375a320b31461034f5780637aec8142146103725780637e901afd1461038557600080fd5b80632de703f9116101665780635bc8f9b8116101405780635bc8f9b8146102ff5780635d6bade01461032157806360536172146103345780636dfc33aa1461033c57600080fd5b80632de703f91461028e5780633fd8cc4e146102b957806357d441cb146102ec57600080fd5b806311fd63b81161019757806311fd63b81461021f578063185b69101461023657806328e6c8ab1461027b57600080fd5b8063057cd7f9146101be578063083ba199146101d35780630fac34511461020c575b600080fd5b6101d16101cc36600461130e565b610483565b005b6101f66101e136600461130e565b60096020526000908152604090205460ff1681565b6040516102039190611391565b60405180910390f35b6101d161021a36600461130e565b6104ac565b610228600d5481565b604051908152602001610203565b6004546102569073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610203565b6102286102893660046113c8565b6104d5565b61022861029c3660046113c8565b600860209081526000928352604080842090915290825290205481565b6102dc6102c73660046113f4565b60026020526000908152604090205460ff1681565b6040519015158152602001610203565b6101d16102fa366004611426565b6105db565b61031261030d3660046114af565b610bfb565b6040516102039392919061150b565b61025661032f366004611572565b610ce6565b6101d1610d2b565b6101d161034a36600461130e565b610e55565b6101f661035d36600461130e565b600a6020526000908152604090205460ff1681565b6101d161038036600461130e565b610e7e565b610228600c5481565b6000546102569073ffffffffffffffffffffffffffffffffffffffff1681565b6101d16103bc3660046113f4565b610ea7565b6101d16103cf3660046113f4565b610f4e565b6102286103e881565b610228600e5481565b6005546102569073ffffffffffffffffffffffffffffffffffffffff1681565b61022861041436600461130e565b60009081526007602052604090205490565b6001546102569073ffffffffffffffffffffffffffffffffffffffff1681565b61045961045436600461130e565b610ff1565b604051610203929190611594565b6101d16104753660046113f4565b6111de565b610228600b5481565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104a757600080fd5b600c55565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104d057600080fd5b600e55565b6000828152600660205260408120805473ffffffffffffffffffffffffffffffffffffffff84169190839061050c5761050c61162c565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff160361056557600083815260076020526040812080549091906105525761055261162c565b60009182526020909120015490506105d5565b600083815260086020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915290205480156105ce5760008481526007602052604090208054829081106105bb576105bb61162c565b60009182526020909120015491506105d3565b600091505b505b92915050565b6005546040517fb7419ee100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b7419ee190602401602060405180830381865afa158015610649573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066d919061165b565b6106d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e6f742066726f6d206163746976652061756469746f7200000000000000000060448201526064015b60405180910390fd5b600084815260076020526040812054908190036107685760008581526006602090815260408083208054600181810183559185528385200180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915589855260088452828520908552835281842085905588845260079092528220805490910181559052610809565b6000858152600860209081526040808320338452909152812054908190036108035760008681526006602090815260408083208054600181810183559185528385200180547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091558a855260088452828520908552835281842086905589845260079092528220805490910181559052610807565b8091505b505b60008581526007602052604090208054829081106108295761082961162c565b90600052602060002001604051806060016040528086600281111561085057610850611327565b815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250504260209384015250835460018181018655948252919020825160039092020180549293909283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909116908360028111156108ea576108ea611327565b021790555060208281015180516109079260018501920190611275565b50604082015181600201555050843373ffffffffffffffffffffffffffffffffffffffff167f68f77877df899ccf85484ce7965cbf190f87968c4601e950ed6cac43031a4a8686868660405161095f9392919061167d565b60405180910390a3600085815260076020526040902054600d548110610bf3576000805b82811015610a255760008881526007602052604081208054839081106109ab576109ab61162c565b600091825260209091200190506002815482906109ca90600190611707565b815481106109da576109da61162c565b600091825260209091206003909102015460ff1660028111156109ff576109ff611327565b03610a125782610a0e8161171e565b9350505b5080610a1d8161171e565b915050610983565b5060006103e8600c5484610a399190611756565b610a439190611793565b821015610a7a576103e8600b5484610a5b9190611756565b610a659190611793565b821015610a73576000610a7d565b6001610a7d565b60025b6000898152600960205260409020805491925082917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115610ac857610ac8611327565b0217905550600480546040517f723dd3da0000000000000000000000000000000000000000000000000000000081529182018a905260009173ffffffffffffffffffffffffffffffffffffffff9091169063723dd3da90602401600060405180830381865afa158015610b3f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b8591908101906118a3565b945050505050600e5481610b99919061197e565b421015610bef576000898152600a6020526040902080548391907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115610be957610be9611327565b02179055505b5050505b505050505050565b60076020528260005260406000208281548110610c1757600080fd5b906000526020600020018181548110610c2f57600080fd5b60009182526020909120600390910201805460018201805460ff9092169550919350909150610c5d90611996565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8990611996565b8015610cd65780601f10610cab57610100808354040283529160200191610cd6565b820191906000526020600020905b815481529060010190602001808311610cb957829003601f168201915b5050505050908060020154905083565b60066020528160005260406000208181548110610d0257600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610dd2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016106cf565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e7957600080fd5b600d55565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ea257600080fd5b600b55565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ecb57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f7257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610f43565b60008181526007602052604090205460609081908067ffffffffffffffff81111561101e5761101e6117ce565b604051908082528060200260200182016040528015611047578160200160208202803683370190505b5092508067ffffffffffffffff811115611063576110636117ce565b60405190808252806020026020018201604052801561108c578160200160208202803683370190505b50915060005b818110156111d75760008581526006602052604090208054829081106110ba576110ba61162c565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168482815181106110f7576110f761162c565b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101820152600086815260079091526040812080548390811061113b5761113b61162c565b90600052602060002001905080600182805490506111599190611707565b815481106111695761116961162c565b6000918252602090912060039091020154845160ff909116908590849081106111945761119461162c565b602002602001019060028111156111ad576111ad611327565b908160028111156111c0576111c0611327565b9052508190506111cf8161171e565b915050611092565b5050915091565b60005473ffffffffffffffffffffffffffffffffffffffff16331461120257600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610f43565b82805461128190611996565b90600052602060002090601f0160209004810192826112a357600085556112e9565b82601f106112bc57805160ff19168380011785556112e9565b828001600101855582156112e9579182015b828111156112e95782518255916020019190600101906112ce565b506112f59291506112f9565b5090565b5b808211156112f557600081556001016112fa565b60006020828403121561132057600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6003811061138d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b602081016105d58284611356565b803573ffffffffffffffffffffffffffffffffffffffff811681146113c357600080fd5b919050565b600080604083850312156113db57600080fd5b823591506113eb6020840161139f565b90509250929050565b60006020828403121561140657600080fd5b61140f8261139f565b9392505050565b6003811061142357600080fd5b50565b6000806000806060858703121561143c57600080fd5b84359350602085013561144e81611416565b9250604085013567ffffffffffffffff8082111561146b57600080fd5b818701915087601f83011261147f57600080fd5b81358181111561148e57600080fd5b8860208285010111156114a057600080fd5b95989497505060200194505050565b6000806000606084860312156114c457600080fd5b505081359360208301359350604090920135919050565b60005b838110156114f65781810151838201526020016114de565b83811115611505576000848401525b50505050565b6115158185611356565b60606020820152600083518060608401526115378160808501602088016114db565b604083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160160800192915050565b6000806040838503121561158557600080fd5b50508035926020909101359150565b604080825283519082018190526000906020906060840190828701845b828110156115e357815173ffffffffffffffffffffffffffffffffffffffff16845292840192908401906001016115b1565b5050508381038285015284518082528583019183019060005b8181101561161f5761160f838551611356565b92840192918401916001016115fc565b5090979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561166d57600080fd5b8151801515811461140f57600080fd5b6116878185611356565b60406020820152816040820152818360608301376000818301606090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015611719576117196116d8565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361174f5761174f6116d8565b5060010190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561178e5761178e6116d8565b500290565b6000826117c9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261180e57600080fd5b815167ffffffffffffffff80821115611829576118296117ce565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561186f5761186f6117ce565b8160405283815286602085880101111561188857600080fd5b6118998460208301602089016114db565b9695505050505050565b600080600080600085870360e08112156118bc57600080fd5b8651955060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820112156118f057600080fd5b506040516060810167ffffffffffffffff8282108183111715611915576119156117ce565b816040526020890151835260408901516020840152606089015160408401528296506080890151925061194783611416565b60a08901519295508083111561195c57600080fd5b505061196a888289016117fd565b92505060c086015190509295509295909350565b60008219821115611991576119916116d8565b500190565b600181811c908216806119aa57607f821691505b6020821081036119e3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea264697066735822122011bb8a9b4c8973fdfaa97d1efd89312a5771228fa94224772b5db3e7e131cfa864736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/AuditInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/AuditInfo.json.ts"], function (require, exports, eth_contract_1, AuditInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuditInfo = void 0;
    class AuditInfo extends eth_contract_1.Contract {
        constructor(wallet, address) {
            super(wallet, address, AuditInfo_json_1.default.abi, AuditInfo_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.projectInfo, params.auditorInfo, this.wallet.utils.toString(params.warningThreshold), this.wallet.utils.toString(params.passedThreshold), this.wallet.utils.toString(params.auditDuration), this.wallet.utils.toString(params.minAuditRequired)], options);
        }
        parseAddAuditReportEvent(receipt) {
            return this.parseEvents(receipt, "AddAuditReport").map(e => this.decodeAddAuditReportEvent(e));
        }
        decodeAddAuditReportEvent(event) {
            let result = event.data;
            return {
                auditor: result.auditor,
                packageVersionsId: new eth_contract_1.BigNumber(result.packageVersionsId),
                auditResult: new eth_contract_1.BigNumber(result.auditResult),
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        assign() {
            let THRESHOLD_BASE_call = async (options) => {
                let result = await this.call('THRESHOLD_BASE', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.THRESHOLD_BASE = THRESHOLD_BASE_call;
            let auditDuration_call = async (options) => {
                let result = await this.call('auditDuration', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.auditDuration = auditDuration_call;
            let auditHistoryParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2), this.wallet.utils.toString(params.param3)];
            let auditHistory_call = async (params, options) => {
                let result = await this.call('auditHistory', auditHistoryParams(params), options);
                return {
                    auditResult: new eth_contract_1.BigNumber(result.auditResult),
                    ipfsCid: result.ipfsCid,
                    timestamp: new eth_contract_1.BigNumber(result.timestamp)
                };
            };
            this.auditHistory = auditHistory_call;
            let auditHistoryAuditorLength_call = async (packageVersionsId, options) => {
                let result = await this.call('auditHistoryAuditorLength', [this.wallet.utils.toString(packageVersionsId)], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.auditHistoryAuditorLength = auditHistoryAuditorLength_call;
            let auditHistoryLengthParams = (params) => [this.wallet.utils.toString(params.packageVersionsId), params.auditor];
            let auditHistoryLength_call = async (params, options) => {
                let result = await this.call('auditHistoryLength', auditHistoryLengthParams(params), options);
                return new eth_contract_1.BigNumber(result);
            };
            this.auditHistoryLength = auditHistoryLength_call;
            let auditorInfo_call = async (options) => {
                let result = await this.call('auditorInfo', [], options);
                return result;
            };
            this.auditorInfo = auditorInfo_call;
            let getLastAuditResult_call = async (packageVersionsId, options) => {
                let result = await this.call('getLastAuditResult', [this.wallet.utils.toString(packageVersionsId)], options);
                return {
                    auditors: result.auditors,
                    results: result.results.map(e => new eth_contract_1.BigNumber(e))
                };
            };
            this.getLastAuditResult = getLastAuditResult_call;
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let lastAuditResultBeforeAuditPeriod_call = async (param1, options) => {
                let result = await this.call('lastAuditResultBeforeAuditPeriod', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.lastAuditResultBeforeAuditPeriod = lastAuditResultBeforeAuditPeriod_call;
            let latestAuditResult_call = async (param1, options) => {
                let result = await this.call('latestAuditResult', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.latestAuditResult = latestAuditResult_call;
            let minAuditRequired_call = async (options) => {
                let result = await this.call('minAuditRequired', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.minAuditRequired = minAuditRequired_call;
            let newOwner_call = async (options) => {
                let result = await this.call('newOwner', [], options);
                return result;
            };
            this.newOwner = newOwner_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let packageVersionsAuditorsParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let packageVersionsAuditors_call = async (params, options) => {
                let result = await this.call('packageVersionsAuditors', packageVersionsAuditorsParams(params), options);
                return result;
            };
            this.packageVersionsAuditors = packageVersionsAuditors_call;
            let packageVersionsAuditorsInvParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
            let packageVersionsAuditorsInv_call = async (params, options) => {
                let result = await this.call('packageVersionsAuditorsInv', packageVersionsAuditorsInvParams(params), options);
                return new eth_contract_1.BigNumber(result);
            };
            this.packageVersionsAuditorsInv = packageVersionsAuditorsInv_call;
            let passedThreshold_call = async (options) => {
                let result = await this.call('passedThreshold', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.passedThreshold = passedThreshold_call;
            let projectInfo_call = async (options) => {
                let result = await this.call('projectInfo', [], options);
                return result;
            };
            this.projectInfo = projectInfo_call;
            let warningThreshold_call = async (options) => {
                let result = await this.call('warningThreshold', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.warningThreshold = warningThreshold_call;
            let addAuditReportParams = (params) => [this.wallet.utils.toString(params.packageVersionsId), this.wallet.utils.toString(params.auditResult), params.ipfsCid];
            let addAuditReport_send = async (params, options) => {
                let result = await this.send('addAuditReport', addAuditReportParams(params), options);
                return result;
            };
            let addAuditReport_call = async (params, options) => {
                let result = await this.call('addAuditReport', addAuditReportParams(params), options);
                return;
            };
            this.addAuditReport = Object.assign(addAuditReport_send, {
                call: addAuditReport_call
            });
            let deny_send = async (user, options) => {
                let result = await this.send('deny', [user], options);
                return result;
            };
            let deny_call = async (user, options) => {
                let result = await this.call('deny', [user], options);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let permit_send = async (user, options) => {
                let result = await this.send('permit', [user], options);
                return result;
            };
            let permit_call = async (user, options) => {
                let result = await this.call('permit', [user], options);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let setAuditDuration_send = async (auditDuration, options) => {
                let result = await this.send('setAuditDuration', [this.wallet.utils.toString(auditDuration)], options);
                return result;
            };
            let setAuditDuration_call = async (auditDuration, options) => {
                let result = await this.call('setAuditDuration', [this.wallet.utils.toString(auditDuration)], options);
                return;
            };
            this.setAuditDuration = Object.assign(setAuditDuration_send, {
                call: setAuditDuration_call
            });
            let setMinAuditRequired_send = async (minAuditRequired, options) => {
                let result = await this.send('setMinAuditRequired', [this.wallet.utils.toString(minAuditRequired)], options);
                return result;
            };
            let setMinAuditRequired_call = async (minAuditRequired, options) => {
                let result = await this.call('setMinAuditRequired', [this.wallet.utils.toString(minAuditRequired)], options);
                return;
            };
            this.setMinAuditRequired = Object.assign(setMinAuditRequired_send, {
                call: setMinAuditRequired_call
            });
            let setPassedThreshold_send = async (passedThreshold, options) => {
                let result = await this.send('setPassedThreshold', [this.wallet.utils.toString(passedThreshold)], options);
                return result;
            };
            let setPassedThreshold_call = async (passedThreshold, options) => {
                let result = await this.call('setPassedThreshold', [this.wallet.utils.toString(passedThreshold)], options);
                return;
            };
            this.setPassedThreshold = Object.assign(setPassedThreshold_send, {
                call: setPassedThreshold_call
            });
            let setWarningThreshold_send = async (warningThreshold, options) => {
                let result = await this.send('setWarningThreshold', [this.wallet.utils.toString(warningThreshold)], options);
                return result;
            };
            let setWarningThreshold_call = async (warningThreshold, options) => {
                let result = await this.call('setWarningThreshold', [this.wallet.utils.toString(warningThreshold)], options);
                return;
            };
            this.setWarningThreshold = Object.assign(setWarningThreshold_send, {
                call: setWarningThreshold_call
            });
            let takeOwnership_send = async (options) => {
                let result = await this.send('takeOwnership', [], options);
                return result;
            };
            let takeOwnership_call = async (options) => {
                let result = await this.call('takeOwnership', [], options);
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
        }
    }
    AuditInfo._abi = AuditInfo_json_1.default.abi;
    exports.AuditInfo = AuditInfo;
});
define("@scom/portal-contract/contracts/AuditorInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/AuditorInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_cooldownPeriod", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }], "name": "AddAuditor", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }], "name": "DisableAuditor", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cooldownPeriod", "type": "uint256" }], "name": "SetCooldownPeriod", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "StakeBond", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "UnstakeBondRequest", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "WithdrawBond", "type": "event" },
            { "inputs": [], "name": "MAX_COOLDOWN_PERIOD", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }], "name": "addAuditor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "auditorBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "auditorIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "auditorIds", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "auditorsData", "outputs": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "enum AuditorInfo.AuditorStatus", "name": "status", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "cooldownPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }], "name": "disableAuditor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "auditorIdStart", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getAuditors", "outputs": [{ "components": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "enum AuditorInfo.AuditorStatus", "name": "status", "type": "uint8" }], "internalType": "struct AuditorInfo.AuditorData[]", "name": "auditors", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isActiveAuditor", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pendingWithdrawal", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "releaseTime", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_cooldownPeriod", "type": "uint256" }], "name": "setCooldownPeriod", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stakeBond", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "unstakeBondRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "withdrawBond", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a060405234801561001057600080fd5b50604051611fc3380380611fc383398101604081905261002f9161005d565b600080546001600160a01b0319163317905560016003556001600160a01b0391909116608052600555610097565b6000806040838503121561007057600080fd5b82516001600160a01b038116811461008757600080fd5b6020939093015192949293505050565b608051611eee6100d5600039600081816104180152818161097d01528181610bce015281816115b00152818161164c01526116a40152611eee6000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806380ea3de1116100e3578063bcdb851d1161008c578063f2fde38b11610066578063f2fde38b146103ed578063f5d0278414610400578063fc0c546a1461041357600080fd5b8063bcdb851d146103b1578063d4ee1d90146103ba578063e429cef1146103da57600080fd5b80639c52a7f1116100bd5780639c52a7f114610378578063a2f55ae51461038b578063b7419ee11461039e57600080fd5b806380ea3de1146103005780638c345172146103135780638da5cb5b1461033357600080fd5b80635f3416fb1161014557806366eb9cec1161011f57806366eb9cec146102c557806369b68f20146102cd57806377903d72146102e057600080fd5b80635f3416fb1461023c578063605361721461025c57806360c4aa1f1461026457600080fd5b806313d5e8861161017657806313d5e886146101c35780633fd8cc4e146101ff578063556d1a091461023257600080fd5b806304646a49146101925780630f1c6ec6146101ae575b600080fd5b61019b60055481565b6040519081526020015b60405180910390f35b6101c16101bc366004611b7d565b61043a565b005b6101ea6101d1366004611b7d565b6009602052600090815260409020805460019091015482565b604080519283526020830191909152016101a5565b61022261020d366004611b96565b60026020526000908152604090205460ff1681565b60405190151581526020016101a5565b61019b62093a8081565b61019b61024a366004611b96565b60076020526000908152604090205481565b6101c1610667565b6102b7610272366004611b7d565b60066020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900460ff1682565b6040516101a5929190611c36565b6101c1610791565b6101c16102db366004611b7d565b6109d6565b6102f36102ee366004611c60565b610ca2565b6040516101a59190611c82565b6101c161030e366004611b7d565b610e0b565b61019b610321366004611b7d565b60086020526000908152604090205481565b6000546103539073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a5565b6101c1610386366004611b96565b610ed8565b6101c1610399366004611b96565b610f78565b6102226103ac366004611b96565b61101b565b61019b60045481565b6001546103539073ffffffffffffffffffffffffffffffffffffffff1681565b6101c16103e8366004611b96565b611090565b6101c16103fb366004611b96565b611310565b6101c161040e366004611b96565b6113a7565b6103537f000000000000000000000000000000000000000000000000000000000000000081565b33600090815260076020526040902054801580159061049257506000808281526006602052604090205474010000000000000000000000000000000000000000900460ff16600181111561049057610490611bcc565b145b6104fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e6f742066726f6d206163746976652061756469746f7200000000000000000060448201526064015b60405180910390fd5b600260035403610569576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104f4565b6002600355816105d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d20300000000000000000000000000000000000000000000060448201526064016104f4565b6105de8261157f565b3360009081526007602090815260408083205480845260089092528220549294509161060b908590611d1f565b600083815260086020908152604091829020839055815187815290810183905291925033917fef09830aa6d9761a05de9164a872a4bdc0fcf49518db2cf33b7ec0fbac8c24a391015b60405180910390a2505060016003555050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461070e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016104f4565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b3360009081526007602052604090205480158015906107e957506000808281526006602052604090205474010000000000000000000000000000000000000000900460ff1660018111156107e7576107e7611bcc565b145b61084f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e6f742066726f6d206163746976652061756469746f7200000000000000000060448201526064016104f4565b6002600354036108bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104f4565b6002600355336000908152600760209081526040808320548084526009909252909120600181015442101561094c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c65617365207761697400000000000000000000000000000000000000000060448201526064016104f4565b80546000838152600960205260408120818155600101556109a473ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163383611734565b60405181815233907f1e85dc785ce23b2937c3586b4fe81fb37118b9318e9203bea983f2c5bb6ca59590602001610654565b336000908152600760205260409020548015801590610a2e57506000808281526006602052604090205474010000000000000000000000000000000000000000900460ff166001811115610a2c57610a2c611bcc565b145b610a94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e6f742066726f6d206163746976652061756469746f7200000000000000000060448201526064016104f4565b600260035403610b00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104f4565b600260035581610b6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d20300000000000000000000000000000000000000000000060448201526064016104f4565b336000908152600760209081526040808320548084526008909252822054909190610b98908590611d37565b600083815260086020526040812082905560055491925003610c2f57610bf573ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163386611734565b60405184815233907f1e85dc785ce23b2937c3586b4fe81fb37118b9318e9203bea983f2c5bb6ca5959060200160405180910390a2610c6a565b6000828152600960205260408120805490918691839190610c51908490611d1f565b9091555050600554610c639042611d1f565b6001909101555b604080518581526020810183905233917fb598aaefbe74e8588e20f67924733ccc5a3aa971e912603f0e2dd34d516cf7fc9101610654565b60606004546001610cb39190611d1f565b610cbd8385611d1f565b1115610cdf5782600454610cd19190611d37565b610cdc906001611d1f565b91505b8167ffffffffffffffff811115610cf857610cf8611d4e565b604051908082528060200260200182016040528015610d3d57816020015b6040805180820190915260008082526020820152815260200190600190039081610d165790505b50905060005b82811015610e04576000848152600660209081526040918290208251808401909352805473ffffffffffffffffffffffffffffffffffffffff81168452909183019074010000000000000000000000000000000000000000900460ff166001811115610db157610db1611bcc565b6001811115610dc257610dc2611bcc565b81525050828281518110610dd857610dd8611d7d565b60200260200101819052508380610dee90611dac565b9450508080610dfc90611dac565b915050610d43565b5092915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e2f57600080fd5b62093a80811115610e9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4d617820636f6f6c646f776e20706572696f64203e2031207765656b2100000060448201526064016104f4565b60058190556040518181527f94714a16ed27a5dc1201f16c27868fa024cb3b7420dd30baa7d06854c4cc54b3906020015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314610efc57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610ecd565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f9c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610ecd565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260076020526040812054801580159061108957506000808281526006602052604090205474010000000000000000000000000000000000000000900460ff16600181111561108757611087611bcc565b145b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146110b457600080fd5b73ffffffffffffffffffffffffffffffffffffffff8116600090815260076020526040812054908190036111ff576004600081546110f190611dac565b91829055506040805180820190915273ffffffffffffffffffffffffffffffffffffffff84168152909150602081016000905260008281526006602090815260409091208251815473ffffffffffffffffffffffffffffffffffffffff9091167fffffffffffffffffffffffff000000000000000000000000000000000000000082168117835592840151919283917fffffffffffffffffffffff0000000000000000000000000000000000000000001617740100000000000000000000000000000000000000008360018111156111cb576111cb611bcc565b0217905550505073ffffffffffffffffffffffffffffffffffffffff821660009081526007602052604090208190556112cb565b60008181526006602052604090206001815474010000000000000000000000000000000000000000900460ff16600181111561123d5761123d611bcc565b146112a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f61756469746f7220616c7265616479206578697374730000000000000000000060448201526064016104f4565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690555b60405173ffffffffffffffffffffffffffffffffffffffff8316907fed1ecf94eb5bfce7b0aaeb460f42f04a1844abdd664b74d4144d81006800088290600090a25050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461133457600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610ecd565b60005473ffffffffffffffffffffffffffffffffffffffff1633146113cb57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526007602052604090205480611458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f61756469746f72206e6f7420657869737400000000000000000000000000000060448201526064016104f4565b600081815260066020526040812090815474010000000000000000000000000000000000000000900460ff16600181111561149557611495611bcc565b146114fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f61756469746f7220616c72656164792064697361626c6564000000000000000060448201526064016104f4565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000017815560405173ffffffffffffffffffffffffffffffffffffffff8416907ff275d9cb928f95f37ce1edc602232801d265d6f9499e2bd2b68775168f4267db90600090a2505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561160c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116309190611de4565b905061167473ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633308561180d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015611700573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117249190611de4565b61172e9190611d37565b92915050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526118089084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611871565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261186b9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611786565b50505050565b60006118d3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661197d9092919063ffffffff16565b80519091501561180857808060200190518101906118f19190611dfd565b611808576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104f4565b606061198c8484600085611994565b949350505050565b606082471015611a26576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104f4565b73ffffffffffffffffffffffffffffffffffffffff85163b611aa4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104f4565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611acd9190611e4b565b60006040518083038185875af1925050503d8060008114611b0a576040519150601f19603f3d011682016040523d82523d6000602084013e611b0f565b606091505b5091509150611b1f828286611b2a565b979650505050505050565b60608315611b39575081611089565b825115611b495782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f49190611e67565b600060208284031215611b8f57600080fd5b5035919050565b600060208284031215611ba857600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461108957600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110611c32577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b73ffffffffffffffffffffffffffffffffffffffff83168152604081016110896020830184611bfb565b60008060408385031215611c7357600080fd5b50508035926020909101359150565b602080825282518282018190526000919060409081850190868401855b82811015611ce3578151805173ffffffffffffffffffffffffffffffffffffffff168552860151611cd287860182611bfb565b509284019290850190600101611c9f565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611d3257611d32611cf0565b500190565b600082821015611d4957611d49611cf0565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ddd57611ddd611cf0565b5060010190565b600060208284031215611df657600080fd5b5051919050565b600060208284031215611e0f57600080fd5b8151801515811461108957600080fd5b60005b83811015611e3a578181015183820152602001611e22565b8381111561186b5750506000910152565b60008251611e5d818460208701611e1f565b9190910192915050565b6020815260008251806020840152611e86816040850160208701611e1f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220c12ea9f668b474ddc5db1338858782c5ef49baca746f1ec1ef26e3d48f8a2e2664736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/AuditorInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/AuditorInfo.json.ts"], function (require, exports, eth_contract_2, AuditorInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuditorInfo = void 0;
    class AuditorInfo extends eth_contract_2.Contract {
        constructor(wallet, address) {
            super(wallet, address, AuditorInfo_json_1.default.abi, AuditorInfo_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.token, this.wallet.utils.toString(params.cooldownPeriod)], options);
        }
        parseAddAuditorEvent(receipt) {
            return this.parseEvents(receipt, "AddAuditor").map(e => this.decodeAddAuditorEvent(e));
        }
        decodeAddAuditorEvent(event) {
            let result = event.data;
            return {
                auditor: result.auditor,
                _event: event
            };
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDisableAuditorEvent(receipt) {
            return this.parseEvents(receipt, "DisableAuditor").map(e => this.decodeDisableAuditorEvent(e));
        }
        decodeDisableAuditorEvent(event) {
            let result = event.data;
            return {
                auditor: result.auditor,
                _event: event
            };
        }
        parseSetCooldownPeriodEvent(receipt) {
            return this.parseEvents(receipt, "SetCooldownPeriod").map(e => this.decodeSetCooldownPeriodEvent(e));
        }
        decodeSetCooldownPeriodEvent(event) {
            let result = event.data;
            return {
                cooldownPeriod: new eth_contract_2.BigNumber(result.cooldownPeriod),
                _event: event
            };
        }
        parseStakeBondEvent(receipt) {
            return this.parseEvents(receipt, "StakeBond").map(e => this.decodeStakeBondEvent(e));
        }
        decodeStakeBondEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                amount: new eth_contract_2.BigNumber(result.amount),
                newBalance: new eth_contract_2.BigNumber(result.newBalance),
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseUnstakeBondRequestEvent(receipt) {
            return this.parseEvents(receipt, "UnstakeBondRequest").map(e => this.decodeUnstakeBondRequestEvent(e));
        }
        decodeUnstakeBondRequestEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                amount: new eth_contract_2.BigNumber(result.amount),
                newBalance: new eth_contract_2.BigNumber(result.newBalance),
                _event: event
            };
        }
        parseWithdrawBondEvent(receipt) {
            return this.parseEvents(receipt, "WithdrawBond").map(e => this.decodeWithdrawBondEvent(e));
        }
        decodeWithdrawBondEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                amount: new eth_contract_2.BigNumber(result.amount),
                _event: event
            };
        }
        assign() {
            let MAX_COOLDOWN_PERIOD_call = async (options) => {
                let result = await this.call('MAX_COOLDOWN_PERIOD', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.MAX_COOLDOWN_PERIOD = MAX_COOLDOWN_PERIOD_call;
            let auditorBalance_call = async (param1, options) => {
                let result = await this.call('auditorBalance', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.auditorBalance = auditorBalance_call;
            let auditorIdCount_call = async (options) => {
                let result = await this.call('auditorIdCount', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.auditorIdCount = auditorIdCount_call;
            let auditorIds_call = async (param1, options) => {
                let result = await this.call('auditorIds', [param1], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.auditorIds = auditorIds_call;
            let auditorsData_call = async (param1, options) => {
                let result = await this.call('auditorsData', [this.wallet.utils.toString(param1)], options);
                return {
                    auditor: result.auditor,
                    status: new eth_contract_2.BigNumber(result.status)
                };
            };
            this.auditorsData = auditorsData_call;
            let cooldownPeriod_call = async (options) => {
                let result = await this.call('cooldownPeriod', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.cooldownPeriod = cooldownPeriod_call;
            let getAuditorsParams = (params) => [this.wallet.utils.toString(params.auditorIdStart), this.wallet.utils.toString(params.length)];
            let getAuditors_call = async (params, options) => {
                let result = await this.call('getAuditors', getAuditorsParams(params), options);
                return (result.map(e => ({
                    auditor: e.auditor,
                    status: new eth_contract_2.BigNumber(e.status)
                })));
            };
            this.getAuditors = getAuditors_call;
            let isActiveAuditor_call = async (account, options) => {
                let result = await this.call('isActiveAuditor', [account], options);
                return result;
            };
            this.isActiveAuditor = isActiveAuditor_call;
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let newOwner_call = async (options) => {
                let result = await this.call('newOwner', [], options);
                return result;
            };
            this.newOwner = newOwner_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let pendingWithdrawal_call = async (param1, options) => {
                let result = await this.call('pendingWithdrawal', [this.wallet.utils.toString(param1)], options);
                return {
                    amount: new eth_contract_2.BigNumber(result.amount),
                    releaseTime: new eth_contract_2.BigNumber(result.releaseTime)
                };
            };
            this.pendingWithdrawal = pendingWithdrawal_call;
            let token_call = async (options) => {
                let result = await this.call('token', [], options);
                return result;
            };
            this.token = token_call;
            let addAuditor_send = async (auditor, options) => {
                let result = await this.send('addAuditor', [auditor], options);
                return result;
            };
            let addAuditor_call = async (auditor, options) => {
                let result = await this.call('addAuditor', [auditor], options);
                return;
            };
            this.addAuditor = Object.assign(addAuditor_send, {
                call: addAuditor_call
            });
            let deny_send = async (user, options) => {
                let result = await this.send('deny', [user], options);
                return result;
            };
            let deny_call = async (user, options) => {
                let result = await this.call('deny', [user], options);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let disableAuditor_send = async (auditor, options) => {
                let result = await this.send('disableAuditor', [auditor], options);
                return result;
            };
            let disableAuditor_call = async (auditor, options) => {
                let result = await this.call('disableAuditor', [auditor], options);
                return;
            };
            this.disableAuditor = Object.assign(disableAuditor_send, {
                call: disableAuditor_call
            });
            let permit_send = async (user, options) => {
                let result = await this.send('permit', [user], options);
                return result;
            };
            let permit_call = async (user, options) => {
                let result = await this.call('permit', [user], options);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let setCooldownPeriod_send = async (cooldownPeriod, options) => {
                let result = await this.send('setCooldownPeriod', [this.wallet.utils.toString(cooldownPeriod)], options);
                return result;
            };
            let setCooldownPeriod_call = async (cooldownPeriod, options) => {
                let result = await this.call('setCooldownPeriod', [this.wallet.utils.toString(cooldownPeriod)], options);
                return;
            };
            this.setCooldownPeriod = Object.assign(setCooldownPeriod_send, {
                call: setCooldownPeriod_call
            });
            let stakeBond_send = async (amount, options) => {
                let result = await this.send('stakeBond', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let stakeBond_call = async (amount, options) => {
                let result = await this.call('stakeBond', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.stakeBond = Object.assign(stakeBond_send, {
                call: stakeBond_call
            });
            let takeOwnership_send = async (options) => {
                let result = await this.send('takeOwnership', [], options);
                return result;
            };
            let takeOwnership_call = async (options) => {
                let result = await this.call('takeOwnership', [], options);
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let unstakeBondRequest_send = async (amount, options) => {
                let result = await this.send('unstakeBondRequest', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let unstakeBondRequest_call = async (amount, options) => {
                let result = await this.call('unstakeBondRequest', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.unstakeBondRequest = Object.assign(unstakeBondRequest_send, {
                call: unstakeBondRequest_call
            });
            let withdrawBond_send = async (options) => {
                let result = await this.send('withdrawBond', [], options);
                return result;
            };
            let withdrawBond_call = async (options) => {
                let result = await this.call('withdrawBond', [], options);
                return;
            };
            this.withdrawBond = Object.assign(withdrawBond_send, {
                call: withdrawBond_call
            });
        }
    }
    AuditorInfo._abi = AuditorInfo_json_1.default.abi;
    exports.AuditorInfo = AuditorInfo;
});
define("@scom/portal-contract/contracts/Authorization.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/Authorization.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916331790556104e4806100326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639c52a7f11161005b5780639c52a7f114610109578063a2f55ae51461011c578063d4ee1d901461012f578063f2fde38b1461014f57600080fd5b80633fd8cc4e1461008257806360536172146100ba5780638da5cb5b146100c4575b600080fd5b6100a5610090366004610471565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100c2610162565b005b6000546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b1565b6100c2610117366004610471565b610290565b6100c261012a366004610471565b610337565b6001546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b6100c261015d366004610471565b6103da565b60015473ffffffffffffffffffffffffffffffffffffffff16331461020d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b457600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161032c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103fe57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161032c565b60006020828403121561048357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104a757600080fd5b939250505056fea2646970667358221220b6523287b342d9ec3fca18b09875ca00358cfbd586d642b53bb7ac292207227664736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/Authorization.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/Authorization.json.ts"], function (require, exports, eth_contract_3, Authorization_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Authorization = void 0;
    class Authorization extends eth_contract_3.Contract {
        constructor(wallet, address) {
            super(wallet, address, Authorization_json_1.default.abi, Authorization_json_1.default.bytecode);
            this.assign();
        }
        deploy(options) {
            return this.__deploy([], options);
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        assign() {
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let newOwner_call = async (options) => {
                let result = await this.call('newOwner', [], options);
                return result;
            };
            this.newOwner = newOwner_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let deny_send = async (user, options) => {
                let result = await this.send('deny', [user], options);
                return result;
            };
            let deny_call = async (user, options) => {
                let result = await this.call('deny', [user], options);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let permit_send = async (user, options) => {
                let result = await this.send('permit', [user], options);
                return result;
            };
            let permit_call = async (user, options) => {
                let result = await this.call('permit', [user], options);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let takeOwnership_send = async (options) => {
                let result = await this.send('takeOwnership', [], options);
                return result;
            };
            let takeOwnership_call = async (options) => {
                let result = await this.call('takeOwnership', [], options);
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
        }
    }
    Authorization._abi = Authorization_json_1.default.abi;
    exports.Authorization = Authorization;
});
define("@scom/portal-contract/contracts/DomainInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/DomainInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Deposit", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Spend", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "uint8", "name": "domainType", "type": "uint8" }, { "indexed": false, "internalType": "string", "name": "module", "type": "string" }], "name": "UpdateDomainInfo", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "string", "name": "module", "type": "string" }], "name": "UpdateDomainModule", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Withdraw", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "domainModule", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "domainType", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "domainName", "type": "string" }], "name": "getDomainInfo", "outputs": [{ "internalType": "uint8", "name": "moduleType", "type": "uint8" }, { "internalType": "string", "name": "module", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "address", "name": "destination", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "spend", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint8", "name": "moduleType", "type": "uint8" }, { "internalType": "string", "name": "module", "type": "string" }], "name": "updateDomainInfo", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "string", "name": "module", "type": "string" }], "name": "updateDomainModule", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a060405234801561001057600080fd5b50604051620023333803806200233383398101604081905261003191610059565b600080546001600160a01b0319163317905560016003556001600160a01b0316608052610089565b60006020828403121561006b57600080fd5b81516001600160a01b038116811461008257600080fd5b9392505050565b60805161226b620000c8600039600081816103fd0152818161058601528181610d5401528181611564015281816116000152611658015261226b6000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c80638e27d719116100cd578063b9b092c811610081578063e80ef21611610066578063e80ef216146103d2578063f2fde38b146103e5578063fc0c546a146103f857600080fd5b8063b9b092c814610376578063d4ee1d90146103b257600080fd5b80639d204278116100b25780639d204278146102f2578063a2f55ae514610343578063a7b055b31461035657600080fd5b80638e27d719146102cc5780639c52a7f1146102df57600080fd5b806360536172116101245780637709aac7116101095780637709aac7146102615780637ee9cef0146102745780638da5cb5b1461028757600080fd5b806360536172146102095780636de9c6e61461021157600080fd5b806337ac63b71161015557806337ac63b7146101995780633b80430f146101ac5780633fd8cc4e146101d657600080fd5b806330b39a62146101715780633518785014610186575b600080fd5b61018461017f366004611b5a565b61041f565b005b610184610194366004611ba6565b61060c565b6101846101a7366004611c5a565b6106f6565b6101bf6101ba366004611cb4565b61077c565b6040516101cd929190611d7d565b60405180910390f35b6101f96101e4366004611d99565b60026020526000908152604090205460ff1681565b60405190151581526020016101cd565b6101846108a2565b61025361021f366004611e8e565b6007602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205481565b6040519081526020016101cd565b61018461026f366004611eec565b6109cc565b610184610282366004611f58565b610a65565b6000546102a79073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101cd565b6101846102da366004611b5a565b610e0b565b6101846102ed366004611d99565b610f99565b610331610300366004611fc5565b6005602090815260009283526040909220815180830184018051928152908401929093019190912091525460ff1681565b60405160ff90911681526020016101cd565b610184610351366004611d99565b611040565b610369610364366004611fc5565b6110e3565b6040516101cd9190612013565b610253610384366004611fc5565b6006602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6001546102a79073ffffffffffffffffffffffffffffffffffffffff1681565b6101846103e0366004611c5a565b611199565b6101846103f3366004611d99565b611213565b6102a77f000000000000000000000000000000000000000000000000000000000000000081565b600260035403610490576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600355806104fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610487565b33600090815260066020526040808220905183919061051e9087908790612026565b9081526020016040518091039020546105379190612065565b33600090815260066020526040908190209051919250829161055c9087908790612026565b908152604051908190036020019020556105ad73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633846112aa565b3373ffffffffffffffffffffffffffffffffffffffff167fcab96aa5dae2c7c5f897bf248f4f8531bb6fe7d29c7fac163391926e0bef8313858585856040516105f994939291906120c5565b60405180910390a2505060016003555050565b33600090815260046020526040908190209051839183916106309089908990612026565b90815260405190819003602001902061064a929091611a5a565b503360009081526005602052604090819020905184919061066e9088908890612026565b908152604051908190036020018120805460ff939093167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009093169290921790915533907f1dd5cf9af64bf7411cd2222bc84149ef8841a58465c912adc512580b717b0335906106e790889088908890889088906120ec565b60405180910390a25050505050565b6000805473ffffffffffffffffffffffffffffffffffffffff16815260076020526040808220905161072b9086908690612026565b908152604080516020928190038301902073ffffffffffffffffffffffffffffffffffffffff8816600090815292529020549050610775338585886107708787612065565b611383565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600560205260408082209051606091906107b59086908690612026565b9081526040805191829003602090810183205473ffffffffffffffffffffffffffffffffffffffff89166000908152600490925291902060ff9091169350906108019086908690612026565b9081526020016040518091039020805461081a90612128565b80601f016020809104026020016040519081016040528092919081815260200182805461084690612128565b80156108935780601f1061086857610100808354040283529160200191610893565b820191906000526020600020905b81548152906001019060200180831161087657829003601f168201915b50505050509050935093915050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610949576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610487565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b33600090815260046020526040908190209051839183916109f09088908890612026565b908152604051908190036020019020610a0a929091611a5a565b503373ffffffffffffffffffffffffffffffffffffffff167f8fdcf277ae4a11f2263407e04c5a0ca73a95a5143412f6701a3803ec74e8e68e85858585604051610a57949392919061217b565b60405180910390a250505050565b600260035403610ad1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610487565b600260035580610b3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610487565b73ffffffffffffffffffffffffffffffffffffffff8216610bba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f7472616e7366657220746f207a65726f206164647265737300000000000000006044820152606401610487565b73ffffffffffffffffffffffffffffffffffffffff85166000908152600760205260408082209051610bef9087908790612026565b908152604080516020928190038301902073ffffffffffffffffffffffffffffffffffffffff861660009081529252902054905081811015610c8d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f696e73756666696369656e7420616c6c6f77616e6365000000000000000000006044820152606401610487565b73ffffffffffffffffffffffffffffffffffffffff86166000908152600660205260408082209051849190610cc59089908990612026565b908152602001604051809103902054610cde9190612065565b73ffffffffffffffffffffffffffffffffffffffff88166000908152600660205260409081902090519192508291610d199089908990612026565b90815260405190819003602001902055610d3a878787876107708888612065565b610d7b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001685856112aa565b8373ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fd7c0b15ea32a9948b06fee27d39c83085ad847db085fd4fd3e723a0268a3ff4689898887604051610df594939291906120c5565b60405180910390a4505060016003555050505050565b600260035403610e77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610487565b600260035580610ee3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610487565b610eec81611533565b3360009081526006602052604080822090519293509091839190610f139087908790612026565b908152602001604051809103902054610f2c91906121a2565b336000908152600660205260409081902090519192508291610f519087908790612026565b9081526040519081900360200181209190915533907fc9c6fab6ecbdd99f0fff2b919fb3ff1ef9ec3e382592cd5323cbb3571da624fc906105f99087908790879087906120c5565b60005473ffffffffffffffffffffffffffffffffffffffff163314610fbd57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461106457600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101611035565b600460209081526000928352604090922081518083018401805192815290840192909301919091209152805461111890612128565b80601f016020809104026020016040519081016040528092919081815260200182805461114490612128565b80156111915780601f1061116657610100808354040283529160200191611191565b820191906000526020600020905b81548152906001019060200180831161117457829003601f168201915b505050505081565b6000805473ffffffffffffffffffffffffffffffffffffffff1681526007602052604080822090516111ce9086908690612026565b908152604080516020928190038301902073ffffffffffffffffffffffffffffffffffffffff88166000908152925290205490506107753385858861077087876121a2565b60005473ffffffffffffffffffffffffffffffffffffffff16331461123757600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001611035565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261137e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526116e8565b505050565b73ffffffffffffffffffffffffffffffffffffffff8516611400576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f617070726f76652066726f6d20746865207a65726f20616464726573730000006044820152606401610487565b73ffffffffffffffffffffffffffffffffffffffff821661147d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f617070726f766520746f20746865207a65726f206164647265737300000000006044820152606401610487565b73ffffffffffffffffffffffffffffffffffffffff85166000908152600760205260409081902090518291906114b69087908790612026565b90815260408051918290036020908101832073ffffffffffffffffffffffffffffffffffffffff808816600081815292909352929020939093558716907fa6c0f34eded777ad8c063a30e4aaa434929cbc9810c83ef9e7e036fd9f1ef92b90611524908890889087906121ba565b60405180910390a35050505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156115c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e491906121de565b905061162873ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163330856117f4565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156116b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d891906121de565b6116e29190612065565b92915050565b600061174a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166118589092919063ffffffff16565b80519091501561137e578080602001905181019061176891906121f7565b61137e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610487565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526118529085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016112fc565b50505050565b60606118678484600085611871565b90505b9392505050565b606082471015611903576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610487565b73ffffffffffffffffffffffffffffffffffffffff85163b611981576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610487565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516119aa9190612219565b60006040518083038185875af1925050503d80600081146119e7576040519150601f19603f3d011682016040523d82523d6000602084013e6119ec565b606091505b50915091506119fc828286611a07565b979650505050505050565b60608315611a1657508161186a565b825115611a265782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104879190612013565b828054611a6690612128565b90600052602060002090601f016020900481019282611a885760008555611aec565b82601f10611abf578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555611aec565b82800160010185558215611aec579182015b82811115611aec578235825591602001919060010190611ad1565b50611af8929150611afc565b5090565b5b80821115611af85760008155600101611afd565b60008083601f840112611b2357600080fd5b50813567ffffffffffffffff811115611b3b57600080fd5b602083019150836020828501011115611b5357600080fd5b9250929050565b600080600060408486031215611b6f57600080fd5b833567ffffffffffffffff811115611b8657600080fd5b611b9286828701611b11565b909790965060209590950135949350505050565b600080600080600060608688031215611bbe57600080fd5b853567ffffffffffffffff80821115611bd657600080fd5b611be289838a01611b11565b90975095506020880135915060ff82168214611bfd57600080fd5b90935060408701359080821115611c1357600080fd5b50611c2088828901611b11565b969995985093965092949392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c5557600080fd5b919050565b60008060008060608587031215611c7057600080fd5b611c7985611c31565b9350602085013567ffffffffffffffff811115611c9557600080fd5b611ca187828801611b11565b9598909750949560400135949350505050565b600080600060408486031215611cc957600080fd5b611cd284611c31565b9250602084013567ffffffffffffffff811115611cee57600080fd5b611cfa86828701611b11565b9497909650939450505050565b60005b83811015611d22578181015183820152602001611d0a565b838111156118525750506000910152565b60008151808452611d4b816020860160208601611d07565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60ff831681526040602082015260006118676040830184611d33565b600060208284031215611dab57600080fd5b61186a82611c31565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112611df457600080fd5b813567ffffffffffffffff80821115611e0f57611e0f611db4565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611e5557611e55611db4565b81604052838152866020858801011115611e6e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600060608486031215611ea357600080fd5b611eac84611c31565b9250602084013567ffffffffffffffff811115611ec857600080fd5b611ed486828701611de3565b925050611ee360408501611c31565b90509250925092565b60008060008060408587031215611f0257600080fd5b843567ffffffffffffffff80821115611f1a57600080fd5b611f2688838901611b11565b90965094506020870135915080821115611f3f57600080fd5b50611f4c87828801611b11565b95989497509550505050565b600080600080600060808688031215611f7057600080fd5b611f7986611c31565b9450602086013567ffffffffffffffff811115611f9557600080fd5b611fa188828901611b11565b9095509350611fb4905060408701611c31565b949793965091946060013592915050565b60008060408385031215611fd857600080fd5b611fe183611c31565b9150602083013567ffffffffffffffff811115611ffd57600080fd5b61200985828601611de3565b9150509250929050565b60208152600061186a6020830184611d33565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561207757612077612036565b500390565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6060815260006120d960608301868861207c565b6020830194909452506040015292915050565b60608152600061210060608301878961207c565b60ff86166020840152828103604084015261211c81858761207c565b98975050505050505050565b600181811c9082168061213c57607f821691505b602082108103612175577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60408152600061218f60408301868861207c565b82810360208401526119fc81858761207c565b600082198211156121b5576121b5612036565b500190565b6040815260006121ce60408301858761207c565b9050826020830152949350505050565b6000602082840312156121f057600080fd5b5051919050565b60006020828403121561220957600080fd5b8151801515811461186a57600080fd5b6000825161222b818460208701611d07565b919091019291505056fea2646970667358221220d415c91cad8a0502b251b35f1f45bdf06762cb342567318beba66982dcd0ba8e64736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/DomainInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/DomainInfo.json.ts"], function (require, exports, eth_contract_4, DomainInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DomainInfo = void 0;
    class DomainInfo extends eth_contract_4.Contract {
        constructor(wallet, address) {
            super(wallet, address, DomainInfo_json_1.default.abi, DomainInfo_json_1.default.bytecode);
            this.assign();
        }
        deploy(token, options) {
            return this.__deploy([token], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                domainName: result.domainName,
                spender: result.spender,
                value: new eth_contract_4.BigNumber(result.value),
                _event: event
            };
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDepositEvent(receipt) {
            return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
        }
        decodeDepositEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                domainName: result.domainName,
                amount: new eth_contract_4.BigNumber(result.amount),
                newBalance: new eth_contract_4.BigNumber(result.newBalance),
                _event: event
            };
        }
        parseSpendEvent(receipt) {
            return this.parseEvents(receipt, "Spend").map(e => this.decodeSpendEvent(e));
        }
        decodeSpendEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                owner: result.owner,
                domainName: result.domainName,
                spender: result.spender,
                amount: new eth_contract_4.BigNumber(result.amount),
                newBalance: new eth_contract_4.BigNumber(result.newBalance),
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseUpdateDomainInfoEvent(receipt) {
            return this.parseEvents(receipt, "UpdateDomainInfo").map(e => this.decodeUpdateDomainInfoEvent(e));
        }
        decodeUpdateDomainInfoEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                domainName: result.domainName,
                domainType: new eth_contract_4.BigNumber(result.domainType),
                module: result.module,
                _event: event
            };
        }
        parseUpdateDomainModuleEvent(receipt) {
            return this.parseEvents(receipt, "UpdateDomainModule").map(e => this.decodeUpdateDomainModuleEvent(e));
        }
        decodeUpdateDomainModuleEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                domainName: result.domainName,
                module: result.module,
                _event: event
            };
        }
        parseWithdrawEvent(receipt) {
            return this.parseEvents(receipt, "Withdraw").map(e => this.decodeWithdrawEvent(e));
        }
        decodeWithdrawEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                domainName: result.domainName,
                amount: new eth_contract_4.BigNumber(result.amount),
                newBalance: new eth_contract_4.BigNumber(result.newBalance),
                _event: event
            };
        }
        assign() {
            let allowancesParams = (params) => [params.param1, params.param2, params.param3];
            let allowances_call = async (params, options) => {
                let result = await this.call('allowances', allowancesParams(params), options);
                return new eth_contract_4.BigNumber(result);
            };
            this.allowances = allowances_call;
            let balanceOfParams = (params) => [params.param1, params.param2];
            let balanceOf_call = async (params, options) => {
                let result = await this.call('balanceOf', balanceOfParams(params), options);
                return new eth_contract_4.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let domainModuleParams = (params) => [params.param1, params.param2];
            let domainModule_call = async (params, options) => {
                let result = await this.call('domainModule', domainModuleParams(params), options);
                return result;
            };
            this.domainModule = domainModule_call;
            let domainTypeParams = (params) => [params.param1, params.param2];
            let domainType_call = async (params, options) => {
                let result = await this.call('domainType', domainTypeParams(params), options);
                return new eth_contract_4.BigNumber(result);
            };
            this.domainType = domainType_call;
            let getDomainInfoParams = (params) => [params.owner, params.domainName];
            let getDomainInfo_call = async (params, options) => {
                let result = await this.call('getDomainInfo', getDomainInfoParams(params), options);
                return {
                    moduleType: new eth_contract_4.BigNumber(result.moduleType),
                    module: result.module
                };
            };
            this.getDomainInfo = getDomainInfo_call;
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let newOwner_call = async (options) => {
                let result = await this.call('newOwner', [], options);
                return result;
            };
            this.newOwner = newOwner_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let token_call = async (options) => {
                let result = await this.call('token', [], options);
                return result;
            };
            this.token = token_call;
            let decreaseAllowanceParams = (params) => [params.spender, params.domainName, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let deny_send = async (user, options) => {
                let result = await this.send('deny', [user], options);
                return result;
            };
            let deny_call = async (user, options) => {
                let result = await this.call('deny', [user], options);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let depositParams = (params) => [params.domainName, this.wallet.utils.toString(params.amount)];
            let deposit_send = async (params, options) => {
                let result = await this.send('deposit', depositParams(params), options);
                return result;
            };
            let deposit_call = async (params, options) => {
                let result = await this.call('deposit', depositParams(params), options);
                return;
            };
            this.deposit = Object.assign(deposit_send, {
                call: deposit_call
            });
            let increaseAllowanceParams = (params) => [params.spender, params.domainName, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let permit_send = async (user, options) => {
                let result = await this.send('permit', [user], options);
                return result;
            };
            let permit_call = async (user, options) => {
                let result = await this.call('permit', [user], options);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let spendParams = (params) => [params.owner, params.domainName, params.destination, this.wallet.utils.toString(params.amount)];
            let spend_send = async (params, options) => {
                let result = await this.send('spend', spendParams(params), options);
                return result;
            };
            let spend_call = async (params, options) => {
                let result = await this.call('spend', spendParams(params), options);
                return;
            };
            this.spend = Object.assign(spend_send, {
                call: spend_call
            });
            let takeOwnership_send = async (options) => {
                let result = await this.send('takeOwnership', [], options);
                return result;
            };
            let takeOwnership_call = async (options) => {
                let result = await this.call('takeOwnership', [], options);
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let updateDomainInfoParams = (params) => [params.domainName, this.wallet.utils.toString(params.moduleType), params.module];
            let updateDomainInfo_send = async (params, options) => {
                let result = await this.send('updateDomainInfo', updateDomainInfoParams(params), options);
                return result;
            };
            let updateDomainInfo_call = async (params, options) => {
                let result = await this.call('updateDomainInfo', updateDomainInfoParams(params), options);
                return;
            };
            this.updateDomainInfo = Object.assign(updateDomainInfo_send, {
                call: updateDomainInfo_call
            });
            let updateDomainModuleParams = (params) => [params.domainName, params.module];
            let updateDomainModule_send = async (params, options) => {
                let result = await this.send('updateDomainModule', updateDomainModuleParams(params), options);
                return result;
            };
            let updateDomainModule_call = async (params, options) => {
                let result = await this.call('updateDomainModule', updateDomainModuleParams(params), options);
                return;
            };
            this.updateDomainModule = Object.assign(updateDomainModule_send, {
                call: updateDomainModule_call
            });
            let withdrawParams = (params) => [params.domainName, this.wallet.utils.toString(params.amount)];
            let withdraw_send = async (params, options) => {
                let result = await this.send('withdraw', withdrawParams(params), options);
                return result;
            };
            let withdraw_call = async (params, options) => {
                let result = await this.call('withdraw', withdrawParams(params), options);
                return;
            };
            this.withdraw = Object.assign(withdraw_send, {
                call: withdraw_call
            });
        }
    }
    DomainInfo._abi = DomainInfo_json_1.default.abi;
    exports.DomainInfo = DomainInfo;
});
define("@scom/portal-contract/contracts/ModuleInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/ModuleInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "indexed": true, "internalType": "string", "name": "version", "type": "string" }, { "indexed": true, "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "name": "CurrentVersion", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "string", "name": "packageName", "type": "string" }, { "indexed": true, "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }], "name": "NewPackage", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "indexed": true, "internalType": "string", "name": "version", "type": "string" }, { "indexed": false, "internalType": "string", "name": "uri", "type": "string" }], "name": "NewRelease", "type": "event" },
            { "inputs": [{ "internalType": "string", "name": "packageName", "type": "string" }], "name": "addPackage", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }, { "internalType": "bool", "name": "pulishRelease", "type": "bool" }], "name": "addRelease", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "getAllOwnerPackages", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "getAllOwnerPackagesAndHash", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }, { "internalType": "bytes32[]", "name": "packageHashes", "type": "bytes32[]" }, { "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "currVersion", "type": "string" }, { "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "internalType": "struct ModuleInfo.Package[]", "name": "packages", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }], "name": "getAllpackageReleases", "outputs": [{ "components": [{ "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }], "internalType": "struct ModuleInfo.Release[]", "name": "releases", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "from", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getBatchOwnerPackages", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "from", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getBatchOwnerPackagesAndHash", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }, { "internalType": "bytes32[]", "name": "packageHashes", "type": "bytes32[]" }, { "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "currVersion", "type": "string" }, { "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "internalType": "struct ModuleInfo.Package[]", "name": "packages", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "internalType": "uint256", "name": "from", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getBatchpackageReleases", "outputs": [{ "components": [{ "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }], "internalType": "struct ModuleInfo.Release[]", "name": "releases", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownerPackages", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "ownerPackagesIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "ownerPackagesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "packageProperties", "outputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "currVersion", "type": "string" }, { "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageReleases", "outputs": [{ "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "string", "name": "", "type": "string" }], "name": "packageReleasesIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }], "name": "packageReleasesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "internalType": "string", "name": "version", "type": "string" }], "name": "setCurrentVersion", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b50612688806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636b13706411610097578063b8b921e611610066578063b8b921e614610274578063bcb6a21a146102b0578063c7ecf2be146102d0578063e834198e1461030c57600080fd5b80636b1370641461020d5780638953480314610220578063ae0efa5914610240578063b40eb9a81461025357600080fd5b806342b4fb70116100d357806342b4fb701461019857806347cebd3e146101ab578063537eb5e2146101cd57806357eae14c146101ed57600080fd5b80630ace8c9a1461010557806323d7cd791461011a57806330bc5ed4146101635780633b3aa3c514610176575b600080fd5b610118610113366004611cbf565b61031f565b005b610150610128366004611d2a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b6040519081526020015b60405180910390f35b610118610171366004611d4c565b610520565b610189610184366004611ddd565b6107ea565b60405161015a93929190611efc565b6101186101a6366004611ffb565b610bf8565b6101be6101b9366004612047565b610d74565b60405161015a93929190612060565b6101e06101db36600461209f565b610e36565b60405161015a91906120cb565b6102006101fb36600461216e565b611076565b60405161015a9190612198565b61018961021b366004611d2a565b61112f565b61023361022e366004611ddd565b6114a9565b60405161015a91906121ab565b61023361024e366004611d2a565b611652565b6102666102613660046121be565b61174e565b60405161015a9291906121e0565b6101506102823660046122e8565b6002602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6101506102be366004612047565b60009081526003602052604090205490565b6101506102de366004612336565b6004602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6101e061031a366004612047565b61189f565b3360009081526001602052604090208054158061039757503360009081526002602052604090819020905161039791839161035d9087908790612367565b9081526020016040518091039020548154811061037c5761037c612377565b906000526020600020018484611a2a9290919263ffffffff16565b610402576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f7061636b61676520616c7265616479206578697374730000000000000000000060448201526064015b60405180910390fd5b8054336000908152600260205260409081902090516104249086908690612367565b9081526040516020918190038201902091909155815460018101835560008381529190912061045591018484611b4b565b50600033848460405160200161046d939291906123a6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008181529182905291902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055915081906104e89086908690612367565b6040519081900381209033907f579649d2aa6da55b0268fdeb659787ece76b47a589d697e308c7ebf945f9c94f90600090a450505050565b60008681526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1633146105ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f742066726f6d207061636b616765206f776e65720000000000000000000060448201526064016103f9565b600086815260036020526040902080541580610623575061062381600460008a815260200190815260200160002088886040516105eb929190612367565b9081526020016040518091039020548154811061060a5761060a612377565b6000918252602090912088918891600290910201611a2a565b610689576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f76657273696f6e20616c7265616479206578697374730000000000000000000060448201526064016103f9565b80546000888152600460205260409081902090516106aa9089908990612367565b908152604080519182900360209081018320939093556060601f8901849004909302820183018152810187815283928291908a908a9081908501838280828437600092019190915250505090825250604080516020601f8901819004810282018101909252878152918101919088908890819084018382808284376000920182905250939094525050835460018101855593815260209081902083518051949560020290910193610762935084929190910190611bed565b50602082810151805161077b9260018501920190611bed565b505050858560405161078e929190612367565b6040518091039020877fb9746d38e4663162c7b0943efcc013d2012228d3e30313994da19f6a5a141ee486866040516107c89291906123e5565b60405180910390a381156107e1576107e1878787611a86565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604090205460609081908190806108228688612461565b1115610835576108328682612479565b94505b8467ffffffffffffffff81111561084e5761084e61220e565b60405190808252806020026020018201604052801561088157816020015b606081526020019060019003908161086c5790505b5093508467ffffffffffffffff81111561089d5761089d61220e565b6040519080825280602002602001820160405280156108c6578160200160208202803683370190505b5092508467ffffffffffffffff8111156108e2576108e261220e565b60405190808252806020026020018201604052801561093257816020015b604080516060808201835260008083526020830191909152918101919091528152602001906001900390816109005790505b50915060005b85811015610bed5773ffffffffffffffffffffffffffffffffffffffff8816600090815260016020526040902080548890811061097757610977612377565b90600052602060002001805461098c90612490565b80601f01602080910402602001604051908101604052809291908181526020018280546109b890612490565b8015610a055780601f106109da57610100808354040283529160200191610a05565b820191906000526020600020905b8154815290600101906020018083116109e857829003601f168201915b5050505050858281518110610a1c57610a1c612377565b602002602001018190525087858281518110610a3a57610a3a612377565b6020026020010151604051602001610a539291906124e3565b60405160208183030381529060405280519060200120848281518110610a7b57610a7b612377565b602002602001018181525050600080858381518110610a9c57610a9c612377565b602002602001015181526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054610b2390612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4f90612490565b8015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b50505050508152602001600282015481525050838281518110610bc157610bc1612377565b60200260200101819052508680610bd79061252e565b9750508080610be59061252e565b915050610938565b505093509350939050565b60008381526020819052604090205473ffffffffffffffffffffffffffffffffffffffff163314610c85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f742066726f6d207061636b616765206f776e65720000000000000000000060448201526064016103f9565b6000838152600360205260409020805415801590610cfd5750610cfd81600460008781526020019081526020016000208585604051610cc5929190612367565b90815260200160405180910390205481548110610ce457610ce4612377565b6000918252602090912085918591600290910201611a2a565b610d63576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f76657273696f6e206e6f7420657869737473000000000000000000000000000060448201526064016103f9565b610d6e848484611a86565b50505050565b6000602081905290815260409020805460018201805473ffffffffffffffffffffffffffffffffffffffff9092169291610dad90612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd990612490565b8015610e265780601f10610dfb57610100808354040283529160200191610e26565b820191906000526020600020905b815481529060010190602001808311610e0957829003601f168201915b5050505050908060020154905083565b60008381526003602052604090205460609080610e538486612461565b1115610e6657610e638482612479565b92505b8267ffffffffffffffff811115610e7f57610e7f61220e565b604051908082528060200260200182016040528015610ec457816020015b6040805180820190915260608082526020820152815260200190600190039081610e9d5790505b50915060005b8381101561106d576000868152600360205260409020805486908110610ef257610ef2612377565b9060005260206000209060020201604051806040016040529081600082018054610f1b90612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4790612490565b8015610f945780601f10610f6957610100808354040283529160200191610f94565b820191906000526020600020905b815481529060010190602001808311610f7757829003601f168201915b50505050508152602001600182018054610fad90612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610fd990612490565b80156110265780601f10610ffb57610100808354040283529160200191611026565b820191906000526020600020905b81548152906001019060200180831161100957829003601f168201915b50505050508152505083828151811061104157611041612377565b602002602001018190525084806110579061252e565b95505080806110659061252e565b915050610eca565b50509392505050565b6001602052816000526040600020818154811061109257600080fd5b906000526020600020016000915091505080546110ae90612490565b80601f01602080910402602001604051908101604052809291908181526020018280546110da90612490565b80156111275780601f106110fc57610100808354040283529160200191611127565b820191906000526020600020905b81548152906001019060200180831161110a57829003601f168201915b505050505081565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602090815260408083208054825181850281018501909352808352606094859485949392919084015b8282101561122257838290600052602060002001805461119590612490565b80601f01602080910402602001604051908101604052809291908181526020018280546111c190612490565b801561120e5780601f106111e35761010080835404028352916020019161120e565b820191906000526020600020905b8154815290600101906020018083116111f157829003601f168201915b505050505081526020019060010190611176565b505082519295508291505067ffffffffffffffff8111156112455761124561220e565b60405190808252806020026020018201604052801561126e578160200160208202803683370190505b5092508067ffffffffffffffff81111561128a5761128a61220e565b6040519080825280602002602001820160405280156112da57816020015b604080516060808201835260008083526020830191909152918101919091528152602001906001900390816112a85790505b50915060005b818110156114a057858582815181106112fb576112fb612377565b60200260200101516040516020016113149291906124e3565b6040516020818303038152906040528051906020012084828151811061133c5761133c612377565b60200260200101818152505060008085838151811061135d5761135d612377565b602002602001015181526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546113e490612490565b80601f016020809104026020016040519081016040528092919081815260200182805461141090612490565b801561145d5780601f106114325761010080835404028352916020019161145d565b820191906000526020600020905b81548152906001019060200180831161144057829003601f168201915b5050505050815260200160028201548152505083828151811061148257611482612377565b602002602001018190525080806114989061252e565b9150506112e0565b50509193909250565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902054606090806114dd8486612461565b11156114f0576114ed8482612479565b92505b8267ffffffffffffffff8111156115095761150961220e565b60405190808252806020026020018201604052801561153c57816020015b60608152602001906001900390816115275790505b50915060005b8381101561106d5773ffffffffffffffffffffffffffffffffffffffff8616600090815260016020526040902080548690811061158157611581612377565b90600052602060002001805461159690612490565b80601f01602080910402602001604051908101604052809291908181526020018280546115c290612490565b801561160f5780601f106115e45761010080835404028352916020019161160f565b820191906000526020600020905b8154815290600101906020018083116115f257829003601f168201915b505050505083828151811061162657611626612377565b6020026020010181905250848061163c9061252e565b955050808061164a9061252e565b915050611542565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160209081526040808320805482518185028101850190935280835260609492939192909184015b828210156117435783829060005260206000200180546116b690612490565b80601f01602080910402602001604051908101604052809291908181526020018280546116e290612490565b801561172f5780601f106117045761010080835404028352916020019161172f565b820191906000526020600020905b81548152906001019060200180831161171257829003601f168201915b505050505081526020019060010190611697565b505050509050919050565b6003602052816000526040600020818154811061176a57600080fd5b90600052602060002090600202016000915091505080600001805461178e90612490565b80601f01602080910402602001604051908101604052809291908181526020018280546117ba90612490565b80156118075780601f106117dc57610100808354040283529160200191611807565b820191906000526020600020905b8154815290600101906020018083116117ea57829003601f168201915b50505050509080600101805461181c90612490565b80601f016020809104026020016040519081016040528092919081815260200182805461184890612490565b80156118955780601f1061186a57610100808354040283529160200191611895565b820191906000526020600020905b81548152906001019060200180831161187857829003601f168201915b5050505050905082565b606060036000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015611743578382906000526020600020906002020160405180604001604052908160008201805461190790612490565b80601f016020809104026020016040519081016040528092919081815260200182805461193390612490565b80156119805780601f1061195557610100808354040283529160200191611980565b820191906000526020600020905b81548152906001019060200180831161196357829003601f168201915b5050505050815260200160018201805461199990612490565b80601f01602080910402602001604051908101604052809291908181526020018280546119c590612490565b8015611a125780601f106119e757610100808354040283529160200191611a12565b820191906000526020600020905b8154815290600101906020018083116119f557829003601f168201915b505050505081525050815260200190600101906118d4565b600081604051602001611a3d9190612566565b604051602081830303815290604052805190602001208484604051602001611a66929190612367565b604051602081830303815290604052805190602001201490509392505050565b6000838152602081905260409020611aa2906001018383611b4b565b506000838383604051602001611aba93929190612638565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008881529182905291902060020181905591508190611b139085908590612367565b6040519081900381209086907f571fbb5167d8bdf75368372c7ff4760e0f3f94fd3ddc5b7dda1735fc5eca793e90600090a450505050565b828054611b5790612490565b90600052602060002090601f016020900481019282611b795760008555611bdd565b82601f10611bb0578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555611bdd565b82800160010185558215611bdd579182015b82811115611bdd578235825591602001919060010190611bc2565b50611be9929150611c61565b5090565b828054611bf990612490565b90600052602060002090601f016020900481019282611c1b5760008555611bdd565b82601f10611c3457805160ff1916838001178555611bdd565b82800160010185558215611bdd579182015b82811115611bdd578251825591602001919060010190611c46565b5b80821115611be95760008155600101611c62565b60008083601f840112611c8857600080fd5b50813567ffffffffffffffff811115611ca057600080fd5b602083019150836020828501011115611cb857600080fd5b9250929050565b60008060208385031215611cd257600080fd5b823567ffffffffffffffff811115611ce957600080fd5b611cf585828601611c76565b90969095509350505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d2557600080fd5b919050565b600060208284031215611d3c57600080fd5b611d4582611d01565b9392505050565b60008060008060008060808789031215611d6557600080fd5b86359550602087013567ffffffffffffffff80821115611d8457600080fd5b611d908a838b01611c76565b90975095506040890135915080821115611da957600080fd5b50611db689828a01611c76565b90945092505060608701358015158114611dcf57600080fd5b809150509295509295509295565b600080600060608486031215611df257600080fd5b611dfb84611d01565b95602085013595506040909401359392505050565b60005b83811015611e2b578181015183820152602001611e13565b83811115610d6e5750506000910152565b60008151808452611e54816020860160208601611e10565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015611eef577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868403018952611edd838351611e3c565b98840198925090830190600101611ea3565b5090979650505050505050565b60006060808352611f0f81840187611e86565b83810360208581019190915286518083528782019282019060005b81811015611f4657845183529383019391830191600101611f2a565b505060409250858103838701528087518083528383019150838160051b840101848a0160005b83811015611fe9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868403018552815173ffffffffffffffffffffffffffffffffffffffff8151168452878101518a89860152611fcc8b860182611e3c565b918a0151948a019490945294870194925090860190600101611f6c565b50909c9b505050505050505050505050565b60008060006040848603121561201057600080fd5b83359250602084013567ffffffffffffffff81111561202e57600080fd5b61203a86828701611c76565b9497909650939450505050565b60006020828403121561205957600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8416815260606020820152600061208f6060830185611e3c565b9050826040830152949350505050565b6000806000606084860312156120b457600080fd5b505081359360208301359350604090920135919050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015612160577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08984030185528151805187855261213488860182611e3c565b91890151858303868b015291905061214c8183611e3c565b9689019694505050908601906001016120f2565b509098975050505050505050565b6000806040838503121561218157600080fd5b61218a83611d01565b946020939093013593505050565b602081526000611d456020830184611e3c565b602081526000611d456020830184611e86565b600080604083850312156121d157600080fd5b50508035926020909101359150565b6040815260006121f36040830185611e3c565b82810360208401526122058185611e3c565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261224e57600080fd5b813567ffffffffffffffff808211156122695761226961220e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156122af576122af61220e565b816040528381528660208588010111156122c857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156122fb57600080fd5b61230483611d01565b9150602083013567ffffffffffffffff81111561232057600080fd5b61232c8582860161223d565b9150509250929050565b6000806040838503121561234957600080fd5b82359150602083013567ffffffffffffffff81111561232057600080fd5b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008460601b168152818360148301376000910160140190815292915050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561247457612474612432565b500190565b60008282101561248b5761248b612432565b500390565b600181811c908216806124a457607f821691505b6020821081036124dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008360601b16815260008251612520816014850160208701611e10565b919091016014019392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361255f5761255f612432565b5060010190565b600080835481600182811c91508083168061258257607f831692505b602080841082036125ba577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b8180156125ce57600181146125fd5761262a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168952848901965061262a565b60008a81526020902060005b868110156126225781548b820152908501908301612609565b505084890196505b509498975050505050505050565b83815281836020830137600091016020019081529291505056fea264697066735822122031d0aef7642ea469eae6c6a7a10a95fe9a52019c1313db7d3b579d79fb10859a64736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/ModuleInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/ModuleInfo.json.ts"], function (require, exports, eth_contract_5, ModuleInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModuleInfo = void 0;
    class ModuleInfo extends eth_contract_5.Contract {
        constructor(wallet, address) {
            super(wallet, address, ModuleInfo_json_1.default.abi, ModuleInfo_json_1.default.bytecode);
            this.assign();
        }
        deploy(options) {
            return this.__deploy([], options);
        }
        parseCurrentVersionEvent(receipt) {
            return this.parseEvents(receipt, "CurrentVersion").map(e => this.decodeCurrentVersionEvent(e));
        }
        decodeCurrentVersionEvent(event) {
            let result = event.data;
            return {
                packageHash: result.packageHash,
                version: result.version,
                currVersionHash: result.currVersionHash,
                _event: event
            };
        }
        parseNewPackageEvent(receipt) {
            return this.parseEvents(receipt, "NewPackage").map(e => this.decodeNewPackageEvent(e));
        }
        decodeNewPackageEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                packageName: result.packageName,
                packageHash: result.packageHash,
                _event: event
            };
        }
        parseNewReleaseEvent(receipt) {
            return this.parseEvents(receipt, "NewRelease").map(e => this.decodeNewReleaseEvent(e));
        }
        decodeNewReleaseEvent(event) {
            let result = event.data;
            return {
                packageHash: result.packageHash,
                version: result.version,
                uri: result.uri,
                _event: event
            };
        }
        assign() {
            let getAllOwnerPackages_call = async (owner, options) => {
                let result = await this.call('getAllOwnerPackages', [owner], options);
                return result;
            };
            this.getAllOwnerPackages = getAllOwnerPackages_call;
            let getAllOwnerPackagesAndHash_call = async (owner, options) => {
                let result = await this.call('getAllOwnerPackagesAndHash', [owner], options);
                return {
                    packageNames: result.packageNames,
                    packageHashes: result.packageHashes,
                    packages: result.packages.map(e => ({
                        owner: e.owner,
                        currVersion: e.currVersion,
                        currVersionHash: e.currVersionHash
                    }))
                };
            };
            this.getAllOwnerPackagesAndHash = getAllOwnerPackagesAndHash_call;
            let getAllpackageReleases_call = async (packageHash, options) => {
                let result = await this.call('getAllpackageReleases', [this.wallet.utils.stringToBytes32(packageHash)], options);
                return (result.map(e => ({
                    version: e.version,
                    uri: e.uri
                })));
            };
            this.getAllpackageReleases = getAllpackageReleases_call;
            let getBatchOwnerPackagesParams = (params) => [params.owner, this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.length)];
            let getBatchOwnerPackages_call = async (params, options) => {
                let result = await this.call('getBatchOwnerPackages', getBatchOwnerPackagesParams(params), options);
                return result;
            };
            this.getBatchOwnerPackages = getBatchOwnerPackages_call;
            let getBatchOwnerPackagesAndHashParams = (params) => [params.owner, this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.length)];
            let getBatchOwnerPackagesAndHash_call = async (params, options) => {
                let result = await this.call('getBatchOwnerPackagesAndHash', getBatchOwnerPackagesAndHashParams(params), options);
                return {
                    packageNames: result.packageNames,
                    packageHashes: result.packageHashes,
                    packages: result.packages.map(e => ({
                        owner: e.owner,
                        currVersion: e.currVersion,
                        currVersionHash: e.currVersionHash
                    }))
                };
            };
            this.getBatchOwnerPackagesAndHash = getBatchOwnerPackagesAndHash_call;
            let getBatchpackageReleasesParams = (params) => [this.wallet.utils.stringToBytes32(params.packageHash), this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.length)];
            let getBatchpackageReleases_call = async (params, options) => {
                let result = await this.call('getBatchpackageReleases', getBatchpackageReleasesParams(params), options);
                return (result.map(e => ({
                    version: e.version,
                    uri: e.uri
                })));
            };
            this.getBatchpackageReleases = getBatchpackageReleases_call;
            let ownerPackagesParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let ownerPackages_call = async (params, options) => {
                let result = await this.call('ownerPackages', ownerPackagesParams(params), options);
                return result;
            };
            this.ownerPackages = ownerPackages_call;
            let ownerPackagesIndexParams = (params) => [params.param1, params.param2];
            let ownerPackagesIndex_call = async (params, options) => {
                let result = await this.call('ownerPackagesIndex', ownerPackagesIndexParams(params), options);
                return new eth_contract_5.BigNumber(result);
            };
            this.ownerPackagesIndex = ownerPackagesIndex_call;
            let ownerPackagesLength_call = async (owner, options) => {
                let result = await this.call('ownerPackagesLength', [owner], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.ownerPackagesLength = ownerPackagesLength_call;
            let packageProperties_call = async (param1, options) => {
                let result = await this.call('packageProperties', [this.wallet.utils.stringToBytes32(param1)], options);
                return {
                    owner: result.owner,
                    currVersion: result.currVersion,
                    currVersionHash: result.currVersionHash
                };
            };
            this.packageProperties = packageProperties_call;
            let packageReleasesParams = (params) => [this.wallet.utils.stringToBytes32(params.param1), this.wallet.utils.toString(params.param2)];
            let packageReleases_call = async (params, options) => {
                let result = await this.call('packageReleases', packageReleasesParams(params), options);
                return {
                    version: result.version,
                    uri: result.uri
                };
            };
            this.packageReleases = packageReleases_call;
            let packageReleasesIndexParams = (params) => [this.wallet.utils.stringToBytes32(params.param1), params.param2];
            let packageReleasesIndex_call = async (params, options) => {
                let result = await this.call('packageReleasesIndex', packageReleasesIndexParams(params), options);
                return new eth_contract_5.BigNumber(result);
            };
            this.packageReleasesIndex = packageReleasesIndex_call;
            let packageReleasesLength_call = async (packageHash, options) => {
                let result = await this.call('packageReleasesLength', [this.wallet.utils.stringToBytes32(packageHash)], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.packageReleasesLength = packageReleasesLength_call;
            let addPackage_send = async (packageName, options) => {
                let result = await this.send('addPackage', [packageName], options);
                return result;
            };
            let addPackage_call = async (packageName, options) => {
                let result = await this.call('addPackage', [packageName], options);
                return;
            };
            this.addPackage = Object.assign(addPackage_send, {
                call: addPackage_call
            });
            let addReleaseParams = (params) => [this.wallet.utils.stringToBytes32(params.packageHash), params.version, params.uri, params.pulishRelease];
            let addRelease_send = async (params, options) => {
                let result = await this.send('addRelease', addReleaseParams(params), options);
                return result;
            };
            let addRelease_call = async (params, options) => {
                let result = await this.call('addRelease', addReleaseParams(params), options);
                return;
            };
            this.addRelease = Object.assign(addRelease_send, {
                call: addRelease_call
            });
            let setCurrentVersionParams = (params) => [this.wallet.utils.stringToBytes32(params.packageHash), params.version];
            let setCurrentVersion_send = async (params, options) => {
                let result = await this.send('setCurrentVersion', setCurrentVersionParams(params), options);
                return result;
            };
            let setCurrentVersion_call = async (params, options) => {
                let result = await this.call('setCurrentVersion', setCurrentVersionParams(params), options);
                return;
            };
            this.setCurrentVersion = Object.assign(setCurrentVersion_send, {
                call: setCurrentVersion_call
            });
        }
    }
    ModuleInfo._abi = ModuleInfo_json_1.default.abi;
    exports.ModuleInfo = ModuleInfo;
});
define("@scom/portal-contract/contracts/ProjectInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/ProjectInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }, { "internalType": "contract AuditorInfo", "name": "_auditorInfo", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "admin", "type": "address" }], "name": "AddAdmin", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "admin", "type": "address" }], "name": "AddPackageAdmin", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "NewPackage", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "major", "type": "uint256" }, { "internalType": "uint256", "name": "minor", "type": "uint256" }, { "internalType": "uint256", "name": "patch", "type": "uint256" }], "indexed": false, "internalType": "struct ProjectInfo.SemVer", "name": "version", "type": "tuple" }], "name": "NewPackageVersion", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "NewProject", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "admin", "type": "address" }], "name": "RemoveAdmin", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "admin", "type": "address" }], "name": "RemovePackageAdmin", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "indexed": false, "internalType": "enum ProjectInfo.PackageVersionStatus", "name": "status", "type": "uint8" }], "name": "SetPackageVersionStatus", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Stake", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "TransferProjectOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Unstake", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "UpdatePackageIpfsCid", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }], "name": "UpdatePackageName", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "UpdatePackageVersionIpfsCid", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "UpdateProjectIpfsCid", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }], "name": "UpdateProjectName", "type": "event" },
            { "inputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }], "name": "addPackageAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }], "name": "addProjectAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "auditorInfo", "outputs": [{ "internalType": "contract AuditorInfo", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "bytes32", "name": "category", "type": "bytes32" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "newPackage", "outputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "major", "type": "uint256" }, { "internalType": "uint256", "name": "minor", "type": "uint256" }, { "internalType": "uint256", "name": "patch", "type": "uint256" }], "internalType": "struct ProjectInfo.SemVer", "name": "version", "type": "tuple" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "newPackageVersion", "outputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "newProject", "outputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownersProjects", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownersProjectsInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "ownersProjectsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageAdmin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "packageAdminInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }], "name": "packageAdminLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageName", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "packageNameInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageVersions", "outputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "major", "type": "uint256" }, { "internalType": "uint256", "name": "minor", "type": "uint256" }, { "internalType": "uint256", "name": "patch", "type": "uint256" }], "internalType": "struct ProjectInfo.SemVer", "name": "version", "type": "tuple" }, { "internalType": "enum ProjectInfo.PackageVersionStatus", "name": "status", "type": "uint8" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "packageVersionsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageVersionsList", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }], "name": "packageVersionsListLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packages", "outputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "currVersionIndex", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }, { "internalType": "bytes32", "name": "category", "type": "bytes32" }, { "internalType": "enum ProjectInfo.PackageStatus", "name": "status", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "packagesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectAdmin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "projectAdminInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "name": "projectAdminLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectBackerBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "projectCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectIpfsCid", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectName", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "name": "projectNameInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectNewOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectPackages", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectPackagesInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "name": "projectPackagesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }], "name": "removePackageAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }], "name": "removeProjectAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }], "name": "setPackageVersionToAuditing", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "name": "takeProjectOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferProjectOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "updatePackageIpfsCid", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }], "name": "updatePackageName", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "updatePackageVersionIpfsCid", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "updateProjectIpfsCid", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }], "name": "updateProjectName", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }], "name": "voidPackageVersion", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b506040516200557a3803806200557a833981016040819052620000349162000088565b600080546001600160a01b0319908116331790915560016003556001600160a01b0392831660805260048054929093169116179055620000c7565b6001600160a01b03811681146200008557600080fd5b50565b600080604083850312156200009c57600080fd5b8251620000a9816200006f565b6020840151909250620000bc816200006f565b809150509250929050565b60805161547b620000ff600039600081816109270152818161261a01528181613e2401528181613ec00152613f18015261547b6000f3fe608060405234801561001057600080fd5b506004361061036d5760003560e01c80638da5cb5b116101d3578063c341468311610104578063f032a6c5116100a2578063fb10856d1161007c578063fb10856d146108d7578063fb34907814610902578063fc0c546a14610922578063fc7a86ae1461094957600080fd5b8063f032a6c51461085d578063f2fde38b14610899578063f88668c5146108ac57600080fd5b8063ccbeffc2116100de578063ccbeffc2146107c9578063d4ee1d90146107ff578063d99f367f1461081f578063dfecbd8e1461084a57600080fd5b8063c341468314610790578063c727a2ea146107a3578063c9d6b13d146107b657600080fd5b8063abcfb19011610171578063bfadf0421161014b578063bfadf0421461070e578063c107979214610739578063c113aeb014610759578063c216212a1461076c57600080fd5b8063abcfb190146106c8578063ac1c4f4c146106db578063beaf2d35146106fb57600080fd5b80639e2c8a5b116101ad5780639e2c8a5b1461067c578063a2f55ae51461068f578063a6ddbf69146106a2578063a828477c146106b557600080fd5b80638da5cb5b1461061e578063977f39701461063e5780639c52a7f11461066957600080fd5b806336fbad26116102ad578063758a5b031161024b5780637d8c0ef1116102255780637d8c0ef1146105af57806387899a36146105c257806387bfc51f146105d557806389fe08f8146105e857600080fd5b8063758a5b03146105765780637b0472f0146105895780637b2246dc1461059c57600080fd5b8063557de32811610287578063557de328146104ff578063605361721461053757806371b439c61461053f578063723dd3da1461055257600080fd5b806336fbad26146104bb5780633fd8cc4e146104c45780634f24c5fa146104f757600080fd5b806329d1e7491161031a57806332799c57116102f457806332799c5714610457578063368e98521461048257806336b44a191461049557806336c9ac76146104a857600080fd5b806329d1e749146103f757806329d91b6c146104175780632e0cc82b1461043757600080fd5b806311187a5f1161034b57806311187a5f146103b15780631251c946146103c457806324115090146103d757600080fd5b8063068c539114610372578063087d9886146103875780630d1706731461039e575b600080fd5b610385610380366004614b1b565b61097f565b005b6011545b6040519081526020015b60405180910390f35b6103856103ac366004614b90565b610ba3565b6103856103bf366004614b90565b610e07565b6103856103d2366004614bdc565b610fd2565b61038b6103e5366004614bdc565b6000908152600f602052604090205490565b61038b610405366004614bdc565b60009081526018602052604090205490565b61042a610425366004614bf5565b6110fb565b6040516103959190614c8d565b61038b610445366004614bdc565b60009081526016602052604090205490565b61038b610465366004614ca0565b600d60209081526000928352604080842090915290825290205481565b610385610490366004614b1b565b6111a0565b61038b6104a3366004614cca565b61143a565b61042a6104b6366004614bdc565b6117d8565b61038b60055481565b6104e76104d2366004614d4d565b60026020526000908152604090205460ff1681565b6040519015158152602001610395565b60125461038b565b61051261050d366004614bf5565b6117f1565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610395565b610385611836565b61038b61054d366004614bf5565b611960565b610565610560366004614bdc565b611991565b604051610395959493929190614dab565b61038b610584366004614e04565b611a81565b610385610597366004614bf5565b611c62565b6103856105aa366004614b1b565b611df3565b61038b6105bd366004614ca0565b612126565b6103856105d0366004614e70565b612142565b6105126105e3366004614bf5565b612400565b6105126105f6366004614bdc565b600b6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6000546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b61064c366004614b1b565b601060209081526000928352604080842090915290825290205481565b610385610677366004614d4d565b61241c565b61038561068a366004614bf5565b6124c3565b61038561069d366004614d4d565b61267b565b6103856106b0366004614b1b565b61271e565b61042a6106c3366004614bdc565b6129d6565b6103856106d6366004614e70565b6129ef565b6004546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b610709366004614ee6565b612c33565b61038b61071c366004614b1b565b601760209081526000928352604080842090915290825290205481565b61038b610747366004614bdc565b60009081526013602052604090205490565b610385610767366004614bdc565b6132ac565b61077f61077a366004614bdc565b6133d0565b604051610395959493929190614fb4565b61038561079e366004614b90565b6134a2565b6103856107b1366004614bdc565b613678565b61038b6107c4366004614bf5565b613806565b61038b6107d7366004614d4d565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c602052604090205490565b6001546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b61082d366004614ca0565b600760209081526000928352604080842090915290825290205481565b610385610858366004614b1b565b613822565b61038b61086b3660046150a6565b6015602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6103856108a7366004614d4d565b613905565b61038b6108ba3660046150ed565b805160208183018101805160098252928201919093012091525481565b61038b6108e5366004614bf5565b601960209081526000928352604080842090915290825290205481565b61038b610910366004614bdc565b60066020526000908152604090205481565b6105127f000000000000000000000000000000000000000000000000000000000000000081565b610512610957366004614bdc565b600e6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314610a13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e657200000000000000000000000000000000000060448201526064015b60405180910390fd5b6000838152600f60205260409020541580610a9857506000838152600f602090815260408083206010835281842073ffffffffffffffffffffffffffffffffffffffff8716808652935292205482549192918110610a7357610a73615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b610afe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c726561647920612061646d696e00000000000000000000000000000000006044820152606401610a0a565b6000838152600f6020818152604080842080546010845282862073ffffffffffffffffffffffffffffffffffffffff891680885290855283872082905594845260018101825590855291842090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168317905551909185917f223ed65ee8c25e2e5c9d766412212deb5a8966c1a32b6608f0e65bd7f1ff89359190a3505050565b6000838152600f6020526040902054839015801590610c1557506000818152600f602090815260408083206010835281842033808652935292205482549192918110610bf157610bf1615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80610c4357506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b610ca9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b600083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929350610cf1925087915083905061399c565b610d57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6a656374206e616d650000000000000000000000006044820152606401610a0a565b600085815260086020526040908190209051600991610d75916151a4565b908152604080516020928190038301902060009081905587815260088352208251610da2928401906149c7565b5084600982604051610db49190615276565b908152602001604051809103902081905550847fdaa562afcb682535ccff278b5881e249435b61d592905fa2fe0f33a9a363e11b8585604051610df89291906152db565b60405180910390a25050505050565b6000838152600f6020526040902054839015801590610e7957506000818152600f602090815260408083206010835281842033808652935292205482549192918110610e5557610e55615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80610ea757506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b610f0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6005548410610f78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c69642070726f6a65637449640000000000000000000000000000006044820152606401610a0a565b6000848152600a60205260409020610f91908484614a4b565b50837fc3aaa2655bd006e3aa89d43d7df93d47dd9392fec712a0ffea9e2fd5b58f7b388484604051610fc49291906152db565b60405180910390a250505050565b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff16331461105f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742066726f6d206e6577206f776e657200000000000000000000000000006044820152606401610a0a565b6000818152600b6020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000008082163317909255600e9093529220805490921690915573ffffffffffffffffffffffffffffffffffffffff166110ca8183613b2a565b604051339083907fd76f6b3fb9ea3802f0403d54d37db427cea79df08cd8817552eb23790d2b549190600090a35050565b60146020908152600092835260408084209091529082529020805461111f90615151565b80601f016020809104026020016040519081016040528092919081815260200182805461114b90615151565b80156111985780601f1061116d57610100808354040283529160200191611198565b820191906000526020600020905b81548152906001019060200180831161117b57829003601f168201915b505050505081565b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff16331461122f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b600083815260106020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452825280832054868452600f9092528220549091906112799060019061531e565b90508082101561134c576000858152600f602052604081208054839081106112a3576112a3615122565b600091825260208083209091015488835260108252604080842073ffffffffffffffffffffffffffffffffffffffff909216808552918352808420879055898452600f9092529120805491925082918590811061130257611302615122565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b600085815260106020908152604080832073ffffffffffffffffffffffffffffffffffffffff881684528252808320839055878352600f909152902080548061139757611397615335565b60008281526020812082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590910190915560405173ffffffffffffffffffffffffffffffffffffffff86169187917f6f99f547e1793782dd433d72ded398bd72f423ed3fe41650df9b0fae5008f33d9190a35050505050565b6000868152600f60205260408120548790158015906114ac57506000818152600f60209081526040808320601083528184203380865293529220548254919291811061148857611488615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806114da57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b611540576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011805490509150600087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061159192508b915085905083613c84565b6115f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c6964207061636b616765206e616d650000000000000000000000006044820152606401610a0a565b60116040518060a001604052808b81526020016000815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020810189905260400160019052815460018181018455600093845260209384902083516005909302019182558383015190820155604082015180519293919261169a92600285019201906149c7565b506060820151600382015560808201516004820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183818111156116e5576116e5614d68565b02179055505050600089815260146020908152604080832086845282529091208251611713928401906149c7565b5082601560008b8152602001908152602001600020826040516117369190615276565b90815260408051602092819003830190209290925560008b8152601882528281208054600181018255908252828220018690558b8152601a90915220548151111561178d57805160008a8152601a60205260409020555b82897ffa6aee631c6b190fd8d9fbeda093ea95ec6e8f4b2d87cd3884a4445ffd9211208a8a89896040516117c49493929190615364565b60405180910390a350509695505050505050565b600a602052600090815260409020805461111f90615151565b6016602052816000526040600020818154811061180d57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146118dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a0a565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b6013602052816000526040600020818154811061197c57600080fd5b90600052602060002001600091509150505481565b601281815481106119a157600080fd5b600091825260209182902060079091020180546040805160608101825260018401548152600284015494810194909452600383015490840152600482015460058301805492955060ff90911692916119f890615151565b80601f0160208091040260200160405190810160405280929190818152602001828054611a2490615151565b8015611a715780601f10611a4657610100808354040283529160200191611a71565b820191906000526020600020905b815481529060010190602001808311611a5457829003601f168201915b5050505050908060060154905085565b600554604080516020601f87018190048102820181019092528581526000918790879081908401838280828437600092019190915250929350611aca925084915083905061399c565b611b30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6a656374206e616d650000000000000000000000006044820152606401610a0a565b6000828152600b6020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091558352600c82528083208054600d8452828520878652845282852081905560018101825590845282842001859055848352600882529091208251611bb1928401906149c7565b5081600982604051611bc39190615276565b9081526040805160209281900383019020929092556000848152600a90915220611bee908585614a4b565b5060058054906000611bff8361538b565b91905055503373ffffffffffffffffffffffffffffffffffffffff16827f9ab04f24c89dafa22164ed8f6de07a0b21fb8d93a7b761ef1212fc9a997e8d5388888888604051611c519493929190615364565b60405180910390a350949350505050565b600260035403611cce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a0a565b600260035580611d3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610a0a565b611d4381613df3565b33600090815260076020908152604080832086845290915281205491925090611d6d9083906153c3565b33600090815260076020908152604080832087845282528083208490556006909152812080549293508492909190611da69084906153c3565b90915550506040805183815260208101839052849133917ff556991011e831bcfac4f406d547e5e32cdd98267efab83935230d5f8d02c44691015b60405180910390a35050600160035550565b60115482908110611e60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b600060118281548110611e7557611e75615122565b6000918252602080832060059092029091018054808452600b9092526040909220549192509073ffffffffffffffffffffffffffffffffffffffff163314611f19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b600085815260176020908152604080832073ffffffffffffffffffffffffffffffffffffffff881684528252808320548884526016909252822054909190611f639060019061531e565b905080821015612036576000878152601660205260408120805483908110611f8d57611f8d615122565b60009182526020808320909101548a835260178252604080842073ffffffffffffffffffffffffffffffffffffffff9092168085529183528084208790558b8452601690925291208054919250829185908110611fec57611fec615122565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b600087815260176020908152604080832073ffffffffffffffffffffffffffffffffffffffff8a16845282528083208390558983526016909152902080548061208157612081615335565b60008281526020812082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590910190915560405173ffffffffffffffffffffffffffffffffffffffff88169189917f68ae736c2c34a7e53507d009996d4f68a3f4daa5386f03f5672bfae701d4078a9190a350505050505050565b600c602052816000526040600020818154811061197c57600080fd5b6000848152600f60205260409020548490158015906121b457506000818152600f60209081526040808320601083528184203380865293529220548254919291811061219057612190615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806121e257506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612248576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b600083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929350612291925088915087905083613c84565b6122f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c6964207061636b616765206e616d650000000000000000000000006044820152606401610a0a565b6000868152601560209081526040808320601483528184208985529092529182902091519091612326916151a4565b908152604080516020928190038301902060009081905588815260148352818120888252835220825161235b928401906149c7565b5084601560008881526020019081526020016000208260405161237e9190615276565b908152602001604051809103902081905550601a600087815260200190815260200160002054815111156123be5780516000878152601a60205260409020555b847ffefb07da0d267ba7a9bdd0d55154b06358bbac3326916bcaeedc87adbcdb3d0385856040516123f09291906152db565b60405180910390a2505050505050565b600f602052816000526040600020818154811061180d57600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff16331461244057600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60026003540361252f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a0a565b60026003558061259b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610a0a565b3360009081526007602090815260408083208584529091528120546125c190839061531e565b336000908152600760209081526040808320878452825280832084905560069091528120805492935084929091906125fa90849061531e565b90915550612641905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163384613fa2565b6040805183815260208101839052849133917ffbd65cfd6de1493db337385c0712095397ecbd0504df64b861cdfceb80c7b4229101611de1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461269f57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016124b8565b6011548290811061278b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b6000601182815481106127a0576127a0615122565b6000918252602080832060059092029091018054808452600b9092526040909220549192509073ffffffffffffffffffffffffffffffffffffffff163314612844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b60008581526016602052604090205415806128c9575060008581526016602090815260408083206017835281842073ffffffffffffffffffffffffffffffffffffffff89168086529352922054825491929181106128a4576128a4615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b61292f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c726561647920612061646d696e00000000000000000000000000000000006044820152606401610a0a565b600085815260166020818152604080842080546017845282862073ffffffffffffffffffffffffffffffffffffffff8b1680885290855283872082905594845260018101825590855291842090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168317905551909187917f1e2202e3f0fa61b74c5e417a0c222f963a53a4a02cac56ef30069e6f7335347a9190a35050505050565b6008602052600090815260409020805461111f90615151565b6000848152600f6020526040902054849015801590612a6157506000818152600f602090815260408083206010835281842033808652935292205482549192918110612a3d57612a3d615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80612a8f57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612af5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011548410612b60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b600060118581548110612b7557612b75615122565b9060005260206000209060050201905085816000015414612bf2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70726f6a65637449642f7061636b6167654964206e6f74206d617463680000006044820152606401610a0a565b612c00600282018585614a4b565b50847f26fb0729afd95719cada7729b90195198a6f35edd9383154a3c42ed9f973911f85856040516123f09291906152db565b6000858152600f6020526040812054869015801590612ca557506000818152600f602090815260408083206010835281842033808652935292205482549192918110612c8157612c81615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80612cd357506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612d39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011548610612da4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b8660118781548110612db857612db8615122565b90600052602060002090600502016000015414612e31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70726f6a65637449642f7061636b6167654964206e6f74206d617463680000006044820152606401610a0a565b6000868152601360205260409020548015613132576000878152601360205260408120612e5f60018461531e565b81548110612e6f57612e6f615122565b90600052602060002001549050600060128281548110612e9157612e91615122565b60009182526020918290206040805160a08101825260079093029091018054835281516060810183526001820154815260028083015482870152600383015482850152948401526004810154929390929184019160ff1690811115612ef857612ef8614d68565b6002811115612f0957612f09614d68565b8152602001600582018054612f1d90615151565b80601f0160208091040260200160405190810160405280929190818152602001828054612f4990615151565b8015612f965780601f10612f6b57610100808354040283529160200191612f96565b820191906000526020600020905b815481529060010190602001808311612f7957829003601f168201915b5050505050815260200160068201548152505090508760000151816020015160000151036130c05787602001518160200151602001510361304b57806020015160400151886040015111613046576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f70617463682076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b61312f565b806020015160200151886020015111613046576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6d696e6f722076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b60208101515188511161312f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6d616a6f722076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b50505b601280546000898152601360209081526040808320805460018101825590845282842001849055805160a0810182528c81529182018b905292965091820190815260200187878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250504260209384015250835460018181018655948252908290208351600790920201908155828201518051828601559182015160028083019190915560409283015160038301559183015160048201805494959294919390927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009092169190849081111561323b5761323b614d68565b02179055506060820151805161325b9160058401916020909101906149c7565b5060808201518160060155505082877f30b46001c7b708476546827f01ccfda71f20291b9283deca04e05953fc5915888860405161329991906153db565b60405180910390a3505095945050505050565b6012548110613317576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b60006012828154811061332c5761332c615122565b6000918252602090912060079091020190506002600482015460ff16600281111561335957613359614d68565b036133c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f616c726561647920766f696465640000000000000000000000000000000000006044820152606401610a0a565b6133cc8183600261407b565b5050565b601181815481106133e057600080fd5b906000526020600020906005020160009150905080600001549080600101549080600201805461340f90615151565b80601f016020809104026020016040519081016040528092919081815260200182805461343b90615151565b80156134885780601f1061345d57610100808354040283529160200191613488565b820191906000526020600020905b81548152906001019060200180831161346b57829003601f168201915b50505050600383015460049093015491929160ff16905085565b601254831061350d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b60006012848154811061352257613522615122565b6000918252602082206007909102019150600482015460ff16600281111561354c5761354c614d68565b146135b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420756e64657220776f726b696e670000000000000000000000000000006044820152606401610a0a565b80546135be90614101565b613624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b613632600582018484614a4b565b508381600001547f097b4eb6f8403c2a7c0a11a6030a86be5f926638aa685eb855dcb634bffa6272858560405161366a9291906152db565b60405180910390a350505050565b60125481106136e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b6000601282815481106136f8576136f8615122565b6000918252602082206007909102019150600482015460ff16600281111561372257613722614d68565b14613789576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420756e64657220776f726b696e670000000000000000000000000000006044820152606401610a0a565b805461379490614101565b6137fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6133cc8183600161407b565b6018602052816000526040600020818154811061197c57600080fd5b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146138b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b506000918252600e602052604090912080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461392957600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016124b8565b600081516000036139af57506000613b24565b6000838152601a60205260408120546139c95760016139d9565b6000848152601a60205260409020545b90506139e76001606461531e565b8184516139f491906153c3565b1115613a04576000915050613b24565b83600984604051613a159190615276565b90815260200160405180910390205414613b1757600060086000600986604051613a3f9190615276565b90815260200160405180910390205481526020019081526020016000208054613a6790615151565b80601f0160208091040260200160405190810160405280929190818152602001828054613a9390615151565b8015613ae05780601f10613ab557610100808354040283529160200191613ae0565b820191906000526020600020905b815481529060010190602001808311613ac357829003601f168201915b5050505050905080518451148015613b05575080805190602001208480519060200120145b15613b1557600092505050613b24565b505b613b208361425b565b9150505b92915050565b73ffffffffffffffffffffffffffffffffffffffff82166000818152600d60209081526040808320858452825280832054938352600c909152812054613b729060019061531e565b905080821015613c1e5773ffffffffffffffffffffffffffffffffffffffff84166000908152600c60205260408120805483908110613bb357613bb3615122565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff8816808452600d835260408085208386528452808520889055908452600c90925291208054919250829185908110613c1057613c10615122565b600091825260209091200155505b73ffffffffffffffffffffffffffffffffffffffff84166000818152600d602090815260408083208784528252808320839055928252600c905220805480613c6857613c68615335565b6001900381819060005260206000200160009055905550505050565b60008151600003613c9757506000613dec565b613ca36001606461531e565b825160008681526008602052604090208054613cbe90615151565b613cc99291506153c3565b1115613cd757506000613dec565b6000848152601560205260408082209051613cf3908590615276565b9081526020016040518091039020549050838114613ddf57600085815260146020908152604080832084845290915281208054613d2f90615151565b80601f0160208091040260200160405190810160405280929190818152602001828054613d5b90615151565b8015613da85780601f10613d7d57610100808354040283529160200191613da8565b820191906000526020600020905b815481529060010190602001808311613d8b57829003601f168201915b5050505050905080518451148015613dcd575080805190602001208480519060200120145b15613ddd57600092505050613dec565b505b613de88361425b565b9150505b9392505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015613e80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ea491906153fc565b9050613ee873ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333085614657565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015613f74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f9891906153fc565b613b24919061531e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526140769084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526146bb565b505050565b6004830180548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660018360028111156140ba576140ba614d68565b02179055508183600001547fecd286616049aec5a52fa7273fbce1b7652affad46cd95c127e03ee4958fec14836040516140f49190615415565b60405180910390a3505050565b6000806011838154811061411757614117615122565b6000918252602080832060059092029091018054808452600f909252604090922054919250901580159061419e57506000818152600f60209081526040808320601083528184203380865293529220548254919291811061417a5761417a615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806141cc57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b8061424257506000848152601660205260409020541580159061424257506000848152601660209081526040808320601783528184203380865293529220548254919291811061421e5761421e615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b15614251575060019392505050565b5060009392505050565b6000607a60f81b8260008151811061427557614275615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001611156142aa57506000919050565b606160f81b826000815181106142c2576142c2615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001610156143ef57603960f81b8260008151811061430757614307615122565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016111561433c57506000919050565b603060f81b8260008151811061435457614354615122565b01602001517fff00000000000000000000000000000000000000000000000000000000000000161080156143e257508160008151811061439657614396615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f2d0000000000000000000000000000000000000000000000000000000000000014155b156143ef57506000919050565b60015b825181101561464e57606160f81b83828151811061441257614412615122565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016108015906144835750607a60f81b83828151811061445957614459615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001611155b61463c57603060f81b83828151811061449e5761449e615122565b01602001517fff00000000000000000000000000000000000000000000000000000000000000161080159061450f5750603960f81b8382815181106144e5576144e5615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001611155b61463c5782818151811061452557614525615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f2d000000000000000000000000000000000000000000000000000000000000001461463c5782818151811061458557614585615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f5f000000000000000000000000000000000000000000000000000000000000001461463c578281815181106145e5576145e5615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f2e000000000000000000000000000000000000000000000000000000000000001461463c5750600092915050565b806146468161538b565b9150506143f2565b50600192915050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526146b59085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401613ff4565b50505050565b600061471d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166147c79092919063ffffffff16565b805190915015614076578080602001905181019061473b9190615423565b614076576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a0a565b60606147d684846000856147de565b949350505050565b606082471015614870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a0a565b73ffffffffffffffffffffffffffffffffffffffff85163b6148ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a0a565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516149179190615276565b60006040518083038185875af1925050503d8060008114614954576040519150601f19603f3d011682016040523d82523d6000602084013e614959565b606091505b5091509150614969828286614974565b979650505050505050565b60608315614983575081613dec565b8251156149935782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0a9190614c8d565b8280546149d390615151565b90600052602060002090601f0160209004810192826149f55760008555614a3b565b82601f10614a0e57805160ff1916838001178555614a3b565b82800160010185558215614a3b579182015b82811115614a3b578251825591602001919060010190614a20565b50614a47929150614add565b5090565b828054614a5790615151565b90600052602060002090601f016020900481019282614a795760008555614a3b565b82601f10614ab0578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555614a3b565b82800160010185558215614a3b579182015b82811115614a3b578235825591602001919060010190614ac2565b5b80821115614a475760008155600101614ade565b803573ffffffffffffffffffffffffffffffffffffffff81168114614b1657600080fd5b919050565b60008060408385031215614b2e57600080fd5b82359150614b3e60208401614af2565b90509250929050565b60008083601f840112614b5957600080fd5b50813567ffffffffffffffff811115614b7157600080fd5b602083019150836020828501011115614b8957600080fd5b9250929050565b600080600060408486031215614ba557600080fd5b83359250602084013567ffffffffffffffff811115614bc357600080fd5b614bcf86828701614b47565b9497909650939450505050565b600060208284031215614bee57600080fd5b5035919050565b60008060408385031215614c0857600080fd5b50508035926020909101359150565b60005b83811015614c32578181015183820152602001614c1a565b838111156146b55750506000910152565b60008151808452614c5b816020860160208601614c17565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000613dec6020830184614c43565b60008060408385031215614cb357600080fd5b614cbc83614af2565b946020939093013593505050565b60008060008060008060808789031215614ce357600080fd5b86359550602087013567ffffffffffffffff80821115614d0257600080fd5b614d0e8a838b01614b47565b9097509550604089013594506060890135915080821115614d2e57600080fd5b50614d3b89828a01614b47565b979a9699509497509295939492505050565b600060208284031215614d5f57600080fd5b613dec82614af2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110614da757614da7614d68565b9052565b858152614dcf60208201868051825260208082015190830152604090810151910152565b614ddc6080820185614d97565b60e060a08201526000614df260e0830185614c43565b90508260c08301529695505050505050565b60008060008060408587031215614e1a57600080fd5b843567ffffffffffffffff80821115614e3257600080fd5b614e3e88838901614b47565b90965094506020870135915080821115614e5757600080fd5b50614e6487828801614b47565b95989497509550505050565b60008060008060608587031215614e8657600080fd5b8435935060208501359250604085013567ffffffffffffffff811115614eab57600080fd5b614e6487828801614b47565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080600080600085870360c0811215614eff57600080fd5b863595506020870135945060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc082011215614f3a57600080fd5b506040516060810167ffffffffffffffff8282108183111715614f5f57614f5f614eb7565b8160405260408901358352606089013560208401526080890135604084015282955060a0890135925080831115614f9557600080fd5b5050614fa388828901614b47565b969995985093965092949392505050565b85815284602082015260a060408201526000614fd360a0830186614c43565b905083606083015260028310614feb57614feb614d68565b8260808301529695505050505050565b600082601f83011261500c57600080fd5b813567ffffffffffffffff8082111561502757615027614eb7565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561506d5761506d614eb7565b8160405283815286602085880101111561508657600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156150b957600080fd5b82359150602083013567ffffffffffffffff8111156150d757600080fd5b6150e385828601614ffb565b9150509250929050565b6000602082840312156150ff57600080fd5b813567ffffffffffffffff81111561511657600080fd5b613b2084828501614ffb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061516557607f821691505b60208210810361519e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600080835481600182811c9150808316806151c057607f831692505b602080841082036151f8577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b81801561520c576001811461523b57615268565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528489019650615268565b60008a81526020902060005b868110156152605781548b820152908501908301615247565b505084890196505b509498975050505050505050565b60008251615288818460208701614c17565b9190910192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6020815260006147d6602083018486615292565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015615330576153306152ef565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b604081526000615378604083018688615292565b8281036020840152614969818587615292565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036153bc576153bc6152ef565b5060010190565b600082198211156153d6576153d66152ef565b500190565b81518152602080830151908201526040808301519082015260608101613b24565b60006020828403121561540e57600080fd5b5051919050565b60208101613b248284614d97565b60006020828403121561543557600080fd5b81518015158114613dec57600080fdfea264697066735822122017153e41c58d27ca12240b3fe1e286c751095e3241a2c84b80aae5c681b263c464736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/ProjectInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/ProjectInfo.json.ts"], function (require, exports, eth_contract_6, ProjectInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectInfo = void 0;
    class ProjectInfo extends eth_contract_6.Contract {
        constructor(wallet, address) {
            super(wallet, address, ProjectInfo_json_1.default.abi, ProjectInfo_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.token, params.auditorInfo], options);
        }
        parseAddAdminEvent(receipt) {
            return this.parseEvents(receipt, "AddAdmin").map(e => this.decodeAddAdminEvent(e));
        }
        decodeAddAdminEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                admin: result.admin,
                _event: event
            };
        }
        parseAddPackageAdminEvent(receipt) {
            return this.parseEvents(receipt, "AddPackageAdmin").map(e => this.decodeAddPackageAdminEvent(e));
        }
        decodeAddPackageAdminEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                admin: result.admin,
                _event: event
            };
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseNewPackageEvent(receipt) {
            return this.parseEvents(receipt, "NewPackage").map(e => this.decodeNewPackageEvent(e));
        }
        decodeNewPackageEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                packageId: new eth_contract_6.BigNumber(result.packageId),
                name: result.name,
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseNewPackageVersionEvent(receipt) {
            return this.parseEvents(receipt, "NewPackageVersion").map(e => this.decodeNewPackageVersionEvent(e));
        }
        decodeNewPackageVersionEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                packageVersionId: new eth_contract_6.BigNumber(result.packageVersionId),
                version: {
                    major: new eth_contract_6.BigNumber(result.version.major),
                    minor: new eth_contract_6.BigNumber(result.version.minor),
                    patch: new eth_contract_6.BigNumber(result.version.patch)
                },
                _event: event
            };
        }
        parseNewProjectEvent(receipt) {
            return this.parseEvents(receipt, "NewProject").map(e => this.decodeNewProjectEvent(e));
        }
        decodeNewProjectEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                owner: result.owner,
                name: result.name,
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseRemoveAdminEvent(receipt) {
            return this.parseEvents(receipt, "RemoveAdmin").map(e => this.decodeRemoveAdminEvent(e));
        }
        decodeRemoveAdminEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                admin: result.admin,
                _event: event
            };
        }
        parseRemovePackageAdminEvent(receipt) {
            return this.parseEvents(receipt, "RemovePackageAdmin").map(e => this.decodeRemovePackageAdminEvent(e));
        }
        decodeRemovePackageAdminEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                admin: result.admin,
                _event: event
            };
        }
        parseSetPackageVersionStatusEvent(receipt) {
            return this.parseEvents(receipt, "SetPackageVersionStatus").map(e => this.decodeSetPackageVersionStatusEvent(e));
        }
        decodeSetPackageVersionStatusEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                packageVersionId: new eth_contract_6.BigNumber(result.packageVersionId),
                status: new eth_contract_6.BigNumber(result.status),
                _event: event
            };
        }
        parseStakeEvent(receipt) {
            return this.parseEvents(receipt, "Stake").map(e => this.decodeStakeEvent(e));
        }
        decodeStakeEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                projectId: new eth_contract_6.BigNumber(result.projectId),
                amount: new eth_contract_6.BigNumber(result.amount),
                newBalance: new eth_contract_6.BigNumber(result.newBalance),
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferProjectOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferProjectOwnership").map(e => this.decodeTransferProjectOwnershipEvent(e));
        }
        decodeTransferProjectOwnershipEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                newOwner: result.newOwner,
                _event: event
            };
        }
        parseUnstakeEvent(receipt) {
            return this.parseEvents(receipt, "Unstake").map(e => this.decodeUnstakeEvent(e));
        }
        decodeUnstakeEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                projectId: new eth_contract_6.BigNumber(result.projectId),
                amount: new eth_contract_6.BigNumber(result.amount),
                newBalance: new eth_contract_6.BigNumber(result.newBalance),
                _event: event
            };
        }
        parseUpdatePackageIpfsCidEvent(receipt) {
            return this.parseEvents(receipt, "UpdatePackageIpfsCid").map(e => this.decodeUpdatePackageIpfsCidEvent(e));
        }
        decodeUpdatePackageIpfsCidEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseUpdatePackageNameEvent(receipt) {
            return this.parseEvents(receipt, "UpdatePackageName").map(e => this.decodeUpdatePackageNameEvent(e));
        }
        decodeUpdatePackageNameEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                name: result.name,
                _event: event
            };
        }
        parseUpdatePackageVersionIpfsCidEvent(receipt) {
            return this.parseEvents(receipt, "UpdatePackageVersionIpfsCid").map(e => this.decodeUpdatePackageVersionIpfsCidEvent(e));
        }
        decodeUpdatePackageVersionIpfsCidEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                packageVersionId: new eth_contract_6.BigNumber(result.packageVersionId),
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseUpdateProjectIpfsCidEvent(receipt) {
            return this.parseEvents(receipt, "UpdateProjectIpfsCid").map(e => this.decodeUpdateProjectIpfsCidEvent(e));
        }
        decodeUpdateProjectIpfsCidEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseUpdateProjectNameEvent(receipt) {
            return this.parseEvents(receipt, "UpdateProjectName").map(e => this.decodeUpdateProjectNameEvent(e));
        }
        decodeUpdateProjectNameEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                name: result.name,
                _event: event
            };
        }
        assign() {
            let auditorInfo_call = async (options) => {
                let result = await this.call('auditorInfo', [], options);
                return result;
            };
            this.auditorInfo = auditorInfo_call;
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let newOwner_call = async (options) => {
                let result = await this.call('newOwner', [], options);
                return result;
            };
            this.newOwner = newOwner_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let ownersProjectsParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let ownersProjects_call = async (params, options) => {
                let result = await this.call('ownersProjects', ownersProjectsParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.ownersProjects = ownersProjects_call;
            let ownersProjectsInvParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let ownersProjectsInv_call = async (params, options) => {
                let result = await this.call('ownersProjectsInv', ownersProjectsInvParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.ownersProjectsInv = ownersProjectsInv_call;
            let ownersProjectsLength_call = async (owner, options) => {
                let result = await this.call('ownersProjectsLength', [owner], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.ownersProjectsLength = ownersProjectsLength_call;
            let packageAdminParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let packageAdmin_call = async (params, options) => {
                let result = await this.call('packageAdmin', packageAdminParams(params), options);
                return result;
            };
            this.packageAdmin = packageAdmin_call;
            let packageAdminInvParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
            let packageAdminInv_call = async (params, options) => {
                let result = await this.call('packageAdminInv', packageAdminInvParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageAdminInv = packageAdminInv_call;
            let packageAdminLength_call = async (packageId, options) => {
                let result = await this.call('packageAdminLength', [this.wallet.utils.toString(packageId)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageAdminLength = packageAdminLength_call;
            let packageNameParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let packageName_call = async (params, options) => {
                let result = await this.call('packageName', packageNameParams(params), options);
                return result;
            };
            this.packageName = packageName_call;
            let packageNameInvParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.stringToBytes(params.param2)];
            let packageNameInv_call = async (params, options) => {
                let result = await this.call('packageNameInv', packageNameInvParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageNameInv = packageNameInv_call;
            let packageVersions_call = async (param1, options) => {
                let result = await this.call('packageVersions', [this.wallet.utils.toString(param1)], options);
                return {
                    packageId: new eth_contract_6.BigNumber(result.packageId),
                    version: {
                        major: new eth_contract_6.BigNumber(result.version.major),
                        minor: new eth_contract_6.BigNumber(result.version.minor),
                        patch: new eth_contract_6.BigNumber(result.version.patch)
                    },
                    status: new eth_contract_6.BigNumber(result.status),
                    ipfsCid: result.ipfsCid,
                    timestamp: new eth_contract_6.BigNumber(result.timestamp)
                };
            };
            this.packageVersions = packageVersions_call;
            let packageVersionsLength_call = async (options) => {
                let result = await this.call('packageVersionsLength', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageVersionsLength = packageVersionsLength_call;
            let packageVersionsListParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let packageVersionsList_call = async (params, options) => {
                let result = await this.call('packageVersionsList', packageVersionsListParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageVersionsList = packageVersionsList_call;
            let packageVersionsListLength_call = async (packageId, options) => {
                let result = await this.call('packageVersionsListLength', [this.wallet.utils.toString(packageId)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageVersionsListLength = packageVersionsListLength_call;
            let packages_call = async (param1, options) => {
                let result = await this.call('packages', [this.wallet.utils.toString(param1)], options);
                return {
                    projectId: new eth_contract_6.BigNumber(result.projectId),
                    currVersionIndex: new eth_contract_6.BigNumber(result.currVersionIndex),
                    ipfsCid: result.ipfsCid,
                    category: result.category,
                    status: new eth_contract_6.BigNumber(result.status)
                };
            };
            this.packages = packages_call;
            let packagesLength_call = async (options) => {
                let result = await this.call('packagesLength', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packagesLength = packagesLength_call;
            let projectAdminParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let projectAdmin_call = async (params, options) => {
                let result = await this.call('projectAdmin', projectAdminParams(params), options);
                return result;
            };
            this.projectAdmin = projectAdmin_call;
            let projectAdminInvParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
            let projectAdminInv_call = async (params, options) => {
                let result = await this.call('projectAdminInv', projectAdminInvParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectAdminInv = projectAdminInv_call;
            let projectAdminLength_call = async (projectId, options) => {
                let result = await this.call('projectAdminLength', [this.wallet.utils.toString(projectId)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectAdminLength = projectAdminLength_call;
            let projectBackerBalanceParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let projectBackerBalance_call = async (params, options) => {
                let result = await this.call('projectBackerBalance', projectBackerBalanceParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectBackerBalance = projectBackerBalance_call;
            let projectBalance_call = async (param1, options) => {
                let result = await this.call('projectBalance', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectBalance = projectBalance_call;
            let projectCount_call = async (options) => {
                let result = await this.call('projectCount', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectCount = projectCount_call;
            let projectIpfsCid_call = async (param1, options) => {
                let result = await this.call('projectIpfsCid', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.projectIpfsCid = projectIpfsCid_call;
            let projectName_call = async (param1, options) => {
                let result = await this.call('projectName', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.projectName = projectName_call;
            let projectNameInv_call = async (param1, options) => {
                let result = await this.call('projectNameInv', [this.wallet.utils.stringToBytes(param1)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectNameInv = projectNameInv_call;
            let projectNewOwner_call = async (param1, options) => {
                let result = await this.call('projectNewOwner', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.projectNewOwner = projectNewOwner_call;
            let projectOwner_call = async (param1, options) => {
                let result = await this.call('projectOwner', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.projectOwner = projectOwner_call;
            let projectPackagesParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let projectPackages_call = async (params, options) => {
                let result = await this.call('projectPackages', projectPackagesParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectPackages = projectPackages_call;
            let projectPackagesInvParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let projectPackagesInv_call = async (params, options) => {
                let result = await this.call('projectPackagesInv', projectPackagesInvParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectPackagesInv = projectPackagesInv_call;
            let projectPackagesLength_call = async (projectId, options) => {
                let result = await this.call('projectPackagesLength', [this.wallet.utils.toString(projectId)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectPackagesLength = projectPackagesLength_call;
            let token_call = async (options) => {
                let result = await this.call('token', [], options);
                return result;
            };
            this.token = token_call;
            let addPackageAdminParams = (params) => [this.wallet.utils.toString(params.packageId), params.admin];
            let addPackageAdmin_send = async (params, options) => {
                let result = await this.send('addPackageAdmin', addPackageAdminParams(params), options);
                return result;
            };
            let addPackageAdmin_call = async (params, options) => {
                let result = await this.call('addPackageAdmin', addPackageAdminParams(params), options);
                return;
            };
            this.addPackageAdmin = Object.assign(addPackageAdmin_send, {
                call: addPackageAdmin_call
            });
            let addProjectAdminParams = (params) => [this.wallet.utils.toString(params.projectId), params.admin];
            let addProjectAdmin_send = async (params, options) => {
                let result = await this.send('addProjectAdmin', addProjectAdminParams(params), options);
                return result;
            };
            let addProjectAdmin_call = async (params, options) => {
                let result = await this.call('addProjectAdmin', addProjectAdminParams(params), options);
                return;
            };
            this.addProjectAdmin = Object.assign(addProjectAdmin_send, {
                call: addProjectAdmin_call
            });
            let deny_send = async (user, options) => {
                let result = await this.send('deny', [user], options);
                return result;
            };
            let deny_call = async (user, options) => {
                let result = await this.call('deny', [user], options);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let newPackageParams = (params) => [this.wallet.utils.toString(params.projectId), params.name, this.wallet.utils.stringToBytes32(params.category), params.ipfsCid];
            let newPackage_send = async (params, options) => {
                let result = await this.send('newPackage', newPackageParams(params), options);
                return result;
            };
            let newPackage_call = async (params, options) => {
                let result = await this.call('newPackage', newPackageParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.newPackage = Object.assign(newPackage_send, {
                call: newPackage_call
            });
            let newPackageVersionParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.packageId), [this.wallet.utils.toString(params.version.major), this.wallet.utils.toString(params.version.minor), this.wallet.utils.toString(params.version.patch)], params.ipfsCid];
            let newPackageVersion_send = async (params, options) => {
                let result = await this.send('newPackageVersion', newPackageVersionParams(params), options);
                return result;
            };
            let newPackageVersion_call = async (params, options) => {
                let result = await this.call('newPackageVersion', newPackageVersionParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.newPackageVersion = Object.assign(newPackageVersion_send, {
                call: newPackageVersion_call
            });
            let newProjectParams = (params) => [params.name, params.ipfsCid];
            let newProject_send = async (params, options) => {
                let result = await this.send('newProject', newProjectParams(params), options);
                return result;
            };
            let newProject_call = async (params, options) => {
                let result = await this.call('newProject', newProjectParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.newProject = Object.assign(newProject_send, {
                call: newProject_call
            });
            let permit_send = async (user, options) => {
                let result = await this.send('permit', [user], options);
                return result;
            };
            let permit_call = async (user, options) => {
                let result = await this.call('permit', [user], options);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let removePackageAdminParams = (params) => [this.wallet.utils.toString(params.packageId), params.admin];
            let removePackageAdmin_send = async (params, options) => {
                let result = await this.send('removePackageAdmin', removePackageAdminParams(params), options);
                return result;
            };
            let removePackageAdmin_call = async (params, options) => {
                let result = await this.call('removePackageAdmin', removePackageAdminParams(params), options);
                return;
            };
            this.removePackageAdmin = Object.assign(removePackageAdmin_send, {
                call: removePackageAdmin_call
            });
            let removeProjectAdminParams = (params) => [this.wallet.utils.toString(params.projectId), params.admin];
            let removeProjectAdmin_send = async (params, options) => {
                let result = await this.send('removeProjectAdmin', removeProjectAdminParams(params), options);
                return result;
            };
            let removeProjectAdmin_call = async (params, options) => {
                let result = await this.call('removeProjectAdmin', removeProjectAdminParams(params), options);
                return;
            };
            this.removeProjectAdmin = Object.assign(removeProjectAdmin_send, {
                call: removeProjectAdmin_call
            });
            let setPackageVersionToAuditing_send = async (packageVersionId, options) => {
                let result = await this.send('setPackageVersionToAuditing', [this.wallet.utils.toString(packageVersionId)], options);
                return result;
            };
            let setPackageVersionToAuditing_call = async (packageVersionId, options) => {
                let result = await this.call('setPackageVersionToAuditing', [this.wallet.utils.toString(packageVersionId)], options);
                return;
            };
            this.setPackageVersionToAuditing = Object.assign(setPackageVersionToAuditing_send, {
                call: setPackageVersionToAuditing_call
            });
            let stakeParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.amount)];
            let stake_send = async (params, options) => {
                let result = await this.send('stake', stakeParams(params), options);
                return result;
            };
            let stake_call = async (params, options) => {
                let result = await this.call('stake', stakeParams(params), options);
                return;
            };
            this.stake = Object.assign(stake_send, {
                call: stake_call
            });
            let takeOwnership_send = async (options) => {
                let result = await this.send('takeOwnership', [], options);
                return result;
            };
            let takeOwnership_call = async (options) => {
                let result = await this.call('takeOwnership', [], options);
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let takeProjectOwnership_send = async (projectId, options) => {
                let result = await this.send('takeProjectOwnership', [this.wallet.utils.toString(projectId)], options);
                return result;
            };
            let takeProjectOwnership_call = async (projectId, options) => {
                let result = await this.call('takeProjectOwnership', [this.wallet.utils.toString(projectId)], options);
                return;
            };
            this.takeProjectOwnership = Object.assign(takeProjectOwnership_send, {
                call: takeProjectOwnership_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let transferProjectOwnershipParams = (params) => [this.wallet.utils.toString(params.projectId), params.newOwner];
            let transferProjectOwnership_send = async (params, options) => {
                let result = await this.send('transferProjectOwnership', transferProjectOwnershipParams(params), options);
                return result;
            };
            let transferProjectOwnership_call = async (params, options) => {
                let result = await this.call('transferProjectOwnership', transferProjectOwnershipParams(params), options);
                return;
            };
            this.transferProjectOwnership = Object.assign(transferProjectOwnership_send, {
                call: transferProjectOwnership_call
            });
            let unstakeParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.amount)];
            let unstake_send = async (params, options) => {
                let result = await this.send('unstake', unstakeParams(params), options);
                return result;
            };
            let unstake_call = async (params, options) => {
                let result = await this.call('unstake', unstakeParams(params), options);
                return;
            };
            this.unstake = Object.assign(unstake_send, {
                call: unstake_call
            });
            let updatePackageIpfsCidParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.packageId), params.ipfsCid];
            let updatePackageIpfsCid_send = async (params, options) => {
                let result = await this.send('updatePackageIpfsCid', updatePackageIpfsCidParams(params), options);
                return result;
            };
            let updatePackageIpfsCid_call = async (params, options) => {
                let result = await this.call('updatePackageIpfsCid', updatePackageIpfsCidParams(params), options);
                return;
            };
            this.updatePackageIpfsCid = Object.assign(updatePackageIpfsCid_send, {
                call: updatePackageIpfsCid_call
            });
            let updatePackageNameParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.packageId), params.name];
            let updatePackageName_send = async (params, options) => {
                let result = await this.send('updatePackageName', updatePackageNameParams(params), options);
                return result;
            };
            let updatePackageName_call = async (params, options) => {
                let result = await this.call('updatePackageName', updatePackageNameParams(params), options);
                return;
            };
            this.updatePackageName = Object.assign(updatePackageName_send, {
                call: updatePackageName_call
            });
            let updatePackageVersionIpfsCidParams = (params) => [this.wallet.utils.toString(params.packageVersionId), params.ipfsCid];
            let updatePackageVersionIpfsCid_send = async (params, options) => {
                let result = await this.send('updatePackageVersionIpfsCid', updatePackageVersionIpfsCidParams(params), options);
                return result;
            };
            let updatePackageVersionIpfsCid_call = async (params, options) => {
                let result = await this.call('updatePackageVersionIpfsCid', updatePackageVersionIpfsCidParams(params), options);
                return;
            };
            this.updatePackageVersionIpfsCid = Object.assign(updatePackageVersionIpfsCid_send, {
                call: updatePackageVersionIpfsCid_call
            });
            let updateProjectIpfsCidParams = (params) => [this.wallet.utils.toString(params.projectId), params.ipfsCid];
            let updateProjectIpfsCid_send = async (params, options) => {
                let result = await this.send('updateProjectIpfsCid', updateProjectIpfsCidParams(params), options);
                return result;
            };
            let updateProjectIpfsCid_call = async (params, options) => {
                let result = await this.call('updateProjectIpfsCid', updateProjectIpfsCidParams(params), options);
                return;
            };
            this.updateProjectIpfsCid = Object.assign(updateProjectIpfsCid_send, {
                call: updateProjectIpfsCid_call
            });
            let updateProjectNameParams = (params) => [this.wallet.utils.toString(params.projectId), params.name];
            let updateProjectName_send = async (params, options) => {
                let result = await this.send('updateProjectName', updateProjectNameParams(params), options);
                return result;
            };
            let updateProjectName_call = async (params, options) => {
                let result = await this.call('updateProjectName', updateProjectNameParams(params), options);
                return;
            };
            this.updateProjectName = Object.assign(updateProjectName_send, {
                call: updateProjectName_call
            });
            let voidPackageVersion_send = async (packageVersionId, options) => {
                let result = await this.send('voidPackageVersion', [this.wallet.utils.toString(packageVersionId)], options);
                return result;
            };
            let voidPackageVersion_call = async (packageVersionId, options) => {
                let result = await this.call('voidPackageVersion', [this.wallet.utils.toString(packageVersionId)], options);
                return;
            };
            this.voidPackageVersion = Object.assign(voidPackageVersion_send, {
                call: voidPackageVersion_call
            });
        }
    }
    ProjectInfo._abi = ProjectInfo_json_1.default.abi;
    exports.ProjectInfo = ProjectInfo;
});
define("@scom/portal-contract/contracts/RouterVaultWrapper.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/RouterVaultWrapper.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract Vault", "name": "_vault", "type": "address" }, { "internalType": "contract IOSWAP_HybridRouter2", "name": "_router", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "salesId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "inToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "inAmount", "type": "uint256" }], "name": "Swap", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract IOSWAP_HybridRouter2", "name": "router", "type": "address" }], "name": "UpdateRouter", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "router", "outputs": [{ "internalType": "contract IOSWAP_HybridRouter2", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "salesId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "swapExactTokensForTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "salesId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "swapTokensForExactTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IOSWAP_HybridRouter2", "name": "_router", "type": "address" }], "name": "updateRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "vault", "outputs": [{ "internalType": "contract Vault", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "weth", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162001f7938038062001f79833981016040819052620000349162000112565b60008054336001600160a01b0319918216179091556003805482166001600160a01b038581169182179092556004805490931691841691909117825560408051633fc8cef360e01b815290519192633fc8cef39282820192602092908290030181865afa158015620000aa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d0919062000151565b600580546001600160a01b0319166001600160a01b039290921691909117905550620001789050565b6001600160a01b03811681146200010f57600080fd5b50565b600080604083850312156200012657600080fd5b82516200013381620000f9565b60208401519092506200014681620000f9565b809150509250929050565b6000602082840312156200016457600080fd5b81516200017181620000f9565b9392505050565b611df180620001886000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063a2f55ae51161008c578063d4ee1d9011610066578063d4ee1d90146101ea578063f2fde38b1461020a578063f887ea401461021d578063fbfa77cf1461023d57600080fd5b8063a2f55ae5146101b1578063b65b23c1146101c4578063c851cc32146101d757600080fd5b806362503e7c116100bd57806362503e7c1461016b5780638da5cb5b1461017e5780639c52a7f11461019e57600080fd5b80633fc8cef3146100e45780633fd8cc4e1461012e5780636053617214610161575b600080fd5b6005546101049073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61015161013c3660046117ab565b60026020526000908152604090205460ff1681565b6040519015158152602001610125565b61016961025d565b005b610169610179366004611814565b61038c565b6000546101049073ffffffffffffffffffffffffffffffffffffffff1681565b6101696101ac3660046117ab565b6107a6565b6101696101bf3660046117ab565b61084d565b6101696101d2366004611814565b6108f0565b6101696101e53660046117ab565b610dbe565b6001546101049073ffffffffffffffffffffffffffffffffffffffff1681565b6101696102183660046117ab565b610ed0565b6004546101049073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101049073ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff163314610309576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b323314801561039a5750333b155b610400576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e6420757365720000000000000000000000000000006044820152606401610300565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8d8d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b815260040161048493929190611922565b600060405180830381865afa1580156104a1573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104e79190810190611a72565b9050806000815181106104fc576104fc611aa7565b602002602001015191505061051281338b610f67565b60045490995061053c9073ffffffffffffffffffffffffffffffffffffffff83811691168b6110be565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166365d9e64b8b8b8f8f87600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168f600067ffffffffffffffff8111156105bf576105bf61195c565b6040519080825280601f01601f1916602001820160405280156105e9576020820181803683370190505b506040518963ffffffff1660e01b815260040161060d989796959493929190611b4c565b6000604051808303816000875af115801561062c573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526106729190810190611bb8565b6003546040517ffe49cff800000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff16915063fe49cff8906106d2908a908a908a908a908a90600401611c73565b6020604051808303816000875af11580156106f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107159190611cf3565b50867fee16dac19b14281c11b058c92c0f31a14e74cd4be2e49cd88ea9c13afe9a529833848460008151811061074d5761074d611aa7565b60200260200101516040516107909392919073ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b60405180910390a2505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107ca57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461087157600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610842565b32331480156108fe5750333b155b610964576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e6420757365720000000000000000000000000000006044820152606401610300565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8d8d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b81526004016109e893929190611922565b600060405180830381865afa158015610a05573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a4b9190810190611a72565b905080600081518110610a6057610a60611aa7565b6020026020010151915050610a7681338a610f67565b600454909850610aa09073ffffffffffffffffffffffffffffffffffffffff83811691168a6110be565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c1385f248b8b8f8f600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168f600067ffffffffffffffff811115610b4557610b4561195c565b6040519080825280601f01601f191660200182016040528015610b6f576020820181803683370190505b506040518963ffffffff1660e01b8152600401610b93989796959493929190611b4c565b6000604051808303816000875af1158015610bb2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610bf89190810190611bb8565b6003546040517ffe49cff800000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff16915063fe49cff890610c58908a908a908a908a908a90600401611c73565b6020604051808303816000875af1158015610c77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9b9190611cf3565b50867fee16dac19b14281c11b058c92c0f31a14e74cd4be2e49cd88ea9c13afe9a5298338484600081518110610cd357610cd3611aa7565b6020026020010151604051610d169392919073ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b60405180910390a280600081518110610d3157610d31611aa7565b6020026020010151891115610db057610d883382600081518110610d5757610d57611aa7565b60200260200101518b610d6a9190611d3b565b73ffffffffffffffffffffffffffffffffffffffff85169190611240565b600454610db09073ffffffffffffffffffffffffffffffffffffffff8481169116600061129b565b505050505050505050505050565b3360009081526002602052604090205460ff16610e5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610300565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527fd5f5b4d616f94f5e10b2955392470790b3fdde7c0c0b68bd1f3ea635e2caa8d790602001610842565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ef457600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610842565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610fd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff89190611cf3565b905061101c73ffffffffffffffffffffffffffffffffffffffff851684308561141d565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015611088573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ac9190611cf3565b6110b69190611d3b565b949350505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611135573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111599190611cf3565b6111639190611d52565b60405173ffffffffffffffffffffffffffffffffffffffff851660248201526044810182905290915061123a9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261147b565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526112969084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016111b8565b505050565b80158061133b57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113399190611cf3565b155b6113c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610300565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526112969084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016111b8565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261123a9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016111b8565b60006114dd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115879092919063ffffffff16565b80519091501561129657808060200190518101906114fb9190611d6a565b611296576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610300565b60606110b6848460008561159d565b9392505050565b60608247101561162f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610300565b73ffffffffffffffffffffffffffffffffffffffff85163b6116ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610300565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516116d69190611d8c565b60006040518083038185875af1925050503d8060008114611713576040519150601f19603f3d011682016040523d82523d6000602084013e611718565b606091505b5091509150611728828286611733565b979650505050505050565b60608315611742575081611596565b8251156117525782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103009190611da8565b73ffffffffffffffffffffffffffffffffffffffff811681146117a857600080fd5b50565b6000602082840312156117bd57600080fd5b813561159681611786565b60008083601f8401126117da57600080fd5b50813567ffffffffffffffff8111156117f257600080fd5b6020830191508360208260051b850101111561180d57600080fd5b9250929050565b6000806000806000806000806000806101008b8d03121561183457600080fd5b8a3567ffffffffffffffff8082111561184c57600080fd5b6118588e838f016117c8565b909c509a5060208d0135995060408d0135985060608d0135975060808d0135965060a08d0135915061188982611786565b90945060c08c0135935060e08c013590808211156118a657600080fd5b506118b38d828e016117c8565b915080935050809150509295989b9194979a5092959850565b8183526000602080850194508260005b858110156119175781356118ef81611786565b73ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016118dc565b509495945050505050565b6040815260006119366040830185876118cc565b905073ffffffffffffffffffffffffffffffffffffffff83166020830152949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156119d2576119d261195c565b604052919050565b600067ffffffffffffffff8211156119f4576119f461195c565b5060051b60200190565b600082601f830112611a0f57600080fd5b81516020611a24611a1f836119da565b61198b565b82815260059290921b84018101918181019086841115611a4357600080fd5b8286015b84811015611a67578051611a5a81611786565b8352918301918301611a47565b509695505050505050565b600060208284031215611a8457600080fd5b815167ffffffffffffffff811115611a9b57600080fd5b6110b6848285016119fe565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60005b83811015611af1578181015183820152602001611ad9565b8381111561123a5750506000910152565b60008151808452611b1a816020860160208601611ad6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b88815287602082015260e060408201526000611b6c60e08301888a6118cc565b73ffffffffffffffffffffffffffffffffffffffff87811660608501528616608084015260a0830185905282810360c0840152611ba98185611b02565b9b9a5050505050505050505050565b60008060408385031215611bcb57600080fd5b825167ffffffffffffffff80821115611be357600080fd5b611bef868387016119fe565b9350602091508185015181811115611c0657600080fd5b85019050601f81018613611c1957600080fd5b8051611c27611a1f826119da565b81815260059190911b82018301908381019088831115611c4657600080fd5b928401925b82841015611c6457835182529284019290840190611c4b565b80955050505050509250929050565b85815273ffffffffffffffffffffffffffffffffffffffff851660208201528360408201526080606082015281608082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115611cd457600080fd5b8260051b808560a08501376000920160a0019182525095945050505050565b600060208284031215611d0557600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015611d4d57611d4d611d0c565b500390565b60008219821115611d6557611d65611d0c565b500190565b600060208284031215611d7c57600080fd5b8151801515811461159657600080fd5b60008251611d9e818460208701611ad6565b9190910192915050565b6020815260006115966020830184611b0256fea264697066735822122058b88f1fdba9d86510bab0951001079b1f7551f7ed9b4f1672c7ec405991f97464736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/RouterVaultWrapper.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/RouterVaultWrapper.json.ts"], function (require, exports, eth_contract_7, RouterVaultWrapper_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RouterVaultWrapper = void 0;
    class RouterVaultWrapper extends eth_contract_7.Contract {
        constructor(wallet, address) {
            super(wallet, address, RouterVaultWrapper_json_1.default.abi, RouterVaultWrapper_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.vault, params.router], options);
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseSwapEvent(receipt) {
            return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
        }
        decodeSwapEvent(event) {
            let result = event.data;
            return {
                salesId: new eth_contract_7.BigNumber(result.salesId),
                sender: result.sender,
                inToken: result.inToken,
                inAmount: new eth_contract_7.BigNumber(result.inAmount),
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseUpdateRouterEvent(receipt) {
            return this.parseEvents(receipt, "UpdateRouter").map(e => this.decodeUpdateRouterEvent(e));
        }
        decodeUpdateRouterEvent(event) {
            let result = event.data;
            return {
                router: result.router,
                _event: event
            };
        }
        assign() {
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let newOwner_call = async (options) => {
                let result = await this.call('newOwner', [], options);
                return result;
            };
            this.newOwner = newOwner_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let router_call = async (options) => {
                let result = await this.call('router', [], options);
                return result;
            };
            this.router = router_call;
            let vault_call = async (options) => {
                let result = await this.call('vault', [], options);
                return result;
            };
            this.vault = vault_call;
            let weth_call = async (options) => {
                let result = await this.call('weth', [], options);
                return result;
            };
            this.weth = weth_call;
            let deny_send = async (user, options) => {
                let result = await this.send('deny', [user], options);
                return result;
            };
            let deny_call = async (user, options) => {
                let result = await this.call('deny', [user], options);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let permit_send = async (user, options) => {
                let result = await this.send('permit', [user], options);
                return result;
            };
            let permit_call = async (user, options) => {
                let result = await this.call('permit', [user], options);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let swapExactTokensForTokensParams = (params) => [params.pair, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.salesId), params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
            let swapExactTokensForTokens_send = async (params, options) => {
                let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
                return result;
            };
            let swapExactTokensForTokens_call = async (params, options) => {
                let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
                return;
            };
            this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
                call: swapExactTokensForTokens_call
            });
            let swapTokensForExactTokensParams = (params) => [params.pair, this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.salesId), params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
            let swapTokensForExactTokens_send = async (params, options) => {
                let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
                return result;
            };
            let swapTokensForExactTokens_call = async (params, options) => {
                let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
                return;
            };
            this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
                call: swapTokensForExactTokens_call
            });
            let takeOwnership_send = async (options) => {
                let result = await this.send('takeOwnership', [], options);
                return result;
            };
            let takeOwnership_call = async (options) => {
                let result = await this.call('takeOwnership', [], options);
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let updateRouter_send = async (router, options) => {
                let result = await this.send('updateRouter', [router], options);
                return result;
            };
            let updateRouter_call = async (router, options) => {
                let result = await this.call('updateRouter', [router], options);
                return;
            };
            this.updateRouter = Object.assign(updateRouter_send, {
                call: updateRouter_call
            });
        }
    }
    RouterVaultWrapper._abi = RouterVaultWrapper_json_1.default.abi;
    exports.RouterVaultWrapper = RouterVaultWrapper;
});
define("@scom/portal-contract/contracts/Scom.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/Scom.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "_minter", "type": "address" }, { "internalType": "address", "name": "initSupplyTo", "type": "address" }, { "internalType": "uint256", "name": "initSupply", "type": "uint256" }, { "internalType": "uint256", "name": "totalSupply", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "minter", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60c06040523480156200001157600080fd5b50604051620012b3380380620012b3833981016040819052620000349162000349565b60408051808201825260048082526353434f4d60e01b60208084018281528551808701909652928552840152815184939162000074916003919062000286565b5080516200008a90600490602084019062000286565b50505060008111620000e35760405162461bcd60e51b815260206004820152601560248201527f45524332304361707065643a206361702069732030000000000000000000000060448201526064015b60405180910390fd5b6080526001600160a01b03841660a052620000ff838362000109565b50505050620003f4565b60805181620001226200019960201b620003521760201c565b6200012e919062000391565b11156200017e5760405162461bcd60e51b815260206004820152601960248201527f45524332304361707065643a20636170206578636565646564000000000000006044820152606401620000da565b6200019582826200019f60201b620005681760201c565b5050565b60025490565b6001600160a01b038216620001f75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401620000da565b80600260008282546200020b919062000391565b90915550506001600160a01b038216600090815260208190526040812080548392906200023a90849062000391565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a362000195565b8280546200029490620003b8565b90600052602060002090601f016020900481019282620002b8576000855562000303565b82601f10620002d357805160ff191683800117855562000303565b8280016001018555821562000303579182015b8281111562000303578251825591602001919060010190620002e6565b506200031192915062000315565b5090565b5b8082111562000311576000815560010162000316565b80516001600160a01b03811681146200034457600080fd5b919050565b600080600080608085870312156200036057600080fd5b6200036b856200032c565b93506200037b602086016200032c565b6040860151606090960151949790965092505050565b60008219821115620003b357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003cd57607f821691505b602082108103620003ee57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a051610e8b620004286000396000818161011201526103e00152600081816101b20152610bc70152610e8b6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b4114610234578063a457c2d71461023c578063a9059cbb1461024f578063dd62ed3e1461026257600080fd5b806339509351146101d657806340c10f19146101e957806370a08231146101fe57600080fd5b806318160ddd116100c857806318160ddd1461017c57806323b872dd1461018e578063313ce567146101a1578063355274ea146101b057600080fd5b806306fdde03146100ef578063075461721461010d578063095ea7b314610159575b600080fd5b6100f76102a8565b6040516101049190610c6c565b60405180910390f35b6101347f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610104565b61016c610167366004610d08565b61033a565b6040519015158152602001610104565b6002545b604051908152602001610104565b61016c61019c366004610d32565b610358565b60405160128152602001610104565b7f0000000000000000000000000000000000000000000000000000000000000000610180565b61016c6101e4366004610d08565b61037c565b6101fc6101f7366004610d08565b6103c8565b005b61018061020c366004610d6e565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100f761047a565b61016c61024a366004610d08565b610489565b61016c61025d366004610d08565b61055a565b610180610270366004610d90565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102b790610dc3565b80601f01602080910402602001604051908101604052809291908181526020018280546102e390610dc3565b80156103305780601f1061030557610100808354040283529160200191610330565b820191906000526020600020905b81548152906001019060200180831161031357829003601f168201915b5050505050905090565b600033610348818585610688565b5060019392505050565b60025490565b60003361036685828561083b565b610371858585610912565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061034890829086906103c3908790610e16565b610688565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461046c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d206d696e746572000000000000000000000000000000000060448201526064015b60405180910390fd5b6104768282610bc5565b5050565b6060600480546102b790610dc3565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561054d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610463565b6103718286868403610688565b600033610348818585610912565b73ffffffffffffffffffffffffffffffffffffffff82166105e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610463565b80600260008282546105f79190610e16565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610631908490610e16565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff831661072a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610463565b73ffffffffffffffffffffffffffffffffffffffff82166107cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610463565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461090c57818110156108ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610463565b61090c8484848403610688565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166109b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610463565b73ffffffffffffffffffffffffffffffffffffffff8216610a58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610463565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610b0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610463565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610b52908490610e16565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bb891815260200190565b60405180910390a361090c565b7f000000000000000000000000000000000000000000000000000000000000000081610bf060025490565b610bfa9190610e16565b1115610c62576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f45524332304361707065643a20636170206578636565646564000000000000006044820152606401610463565b6104768282610568565b600060208083528351808285015260005b81811015610c9957858101830151858201604001528201610c7d565b81811115610cab576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610d0357600080fd5b919050565b60008060408385031215610d1b57600080fd5b610d2483610cdf565b946020939093013593505050565b600080600060608486031215610d4757600080fd5b610d5084610cdf565b9250610d5e60208501610cdf565b9150604084013590509250925092565b600060208284031215610d8057600080fd5b610d8982610cdf565b9392505050565b60008060408385031215610da357600080fd5b610dac83610cdf565b9150610dba60208401610cdf565b90509250929050565b600181811c90821680610dd757607f821691505b602082108103610e10577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115610e50577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea26469706673582212201a028a0224b1ef18991fd089455ec00cef28a55923216571eaa4fb6e61b9a35f64736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/Scom.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/Scom.json.ts"], function (require, exports, eth_contract_8, Scom_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scom = void 0;
    class Scom extends eth_contract_8.Contract {
        constructor(wallet, address) {
            super(wallet, address, Scom_json_1.default.abi, Scom_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.minter, params.initSupplyTo, this.wallet.utils.toString(params.initSupply), this.wallet.utils.toString(params.totalSupply)], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_8.BigNumber(result.value),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_8.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_8.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let cap_call = async (options) => {
                let result = await this.call('cap', [], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.cap = cap_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.decimals = decimals_call;
            let minter_call = async (options) => {
                let result = await this.call('minter', [], options);
                return result;
            };
            this.minter = minter_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let mintParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let mint_send = async (params, options) => {
                let result = await this.send('mint', mintParams(params), options);
                return result;
            };
            let mint_call = async (params, options) => {
                let result = await this.call('mint', mintParams(params), options);
                return;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
            });
            let transferParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
        }
    }
    Scom._abi = Scom_json_1.default.abi;
    exports.Scom = Scom;
});
define("@scom/portal-contract/contracts/Vault.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/Vault.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "_foundation", "type": "address" }, { "internalType": "contract Scom", "name": "_scom", "type": "address" }, { "internalType": "contract AMM", "name": "_amm", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "buyer", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountScom", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountEth", "type": "uint256" }], "name": "Buy", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "salesId", "type": "uint256" }], "name": "NewSale", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [], "name": "amm", "outputs": [{ "internalType": "contract AMM", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "amountUsedInSale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "availableAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "salesId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "buy", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "salesId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "buyWithWETH", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "currReleaseAmount", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decrementDecimal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "foundation", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "initialReleaseAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "lasReleaseAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "lastUpdate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "components": [{ "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "limitedPrivateSaleEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "unlimitedPrivateSaleEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes32", "name": "merkleRoot", "type": "bytes32" }, { "internalType": "bytes", "name": "ipfsCid", "type": "bytes" }], "internalType": "struct Vault.Sale", "name": "sale", "type": "tuple" }], "name": "newSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "oneMinusDecrement", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "publicBuy", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [], "name": "publicSaleAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "release", "outputs": [{ "internalType": "uint256", "name": "newRelease", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "salesIds", "type": "uint256[]" }], "name": "releaseAndBuy", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "salesIds", "type": "uint256[]" }], "name": "releaseToPublic", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "sales", "outputs": [{ "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "limitedPrivateSaleEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "unlimitedPrivateSaleEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes32", "name": "merkleRoot", "type": "bytes32" }, { "internalType": "bytes", "name": "ipfsCid", "type": "bytes" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "scom", "outputs": [{ "internalType": "contract Scom", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }, { "internalType": "uint256", "name": "_decrementDecimal", "type": "uint256" }], "name": "start", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "token0IsScom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "totalSuppyAt", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_endTime", "type": "uint256" }, { "internalType": "uint256", "name": "_initialReleaseAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_decrementDecimal", "type": "uint256" }], "name": "updateReleaseSchdule", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "usedAllocation", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "weth", "outputs": [{ "internalType": "contract IWETH", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "6101006040523480156200001257600080fd5b5060405162002e2738038062002e2783398101604081905262000035916200019a565b600080546001600160a01b0319908116331782556001600355600480546001600160a01b038781169190931617815584821660805290831660a081905260408051630dfe168160e01b815290519192630dfe16819282820192602092908290030181865afa158015620000ac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d29190620001ee565b90506000826001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000115573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013b9190620001ee565b9050836001600160a01b0316826001600160a01b031614620001605760008262000164565b6001815b6001600160a01b031660c052151560e05250620002159350505050565b6001600160a01b03811681146200019757600080fd5b50565b600080600060608486031215620001b057600080fd5b8351620001bd8162000181565b6020850151909350620001d08162000181565b6040850151909250620001e38162000181565b809150509250925092565b6000602082840312156200020157600080fd5b81516200020e8162000181565b9392505050565b60805160a05160c05160e051612b45620002e2600039600081816103930152818161166f0152611c1201526000818161031f015281816112e9015281816118230152818161192001528181611d6c0152611e040152600081816102b0015281816115db015281816118e101528181611942015281816119b201528181611b7e01528181611d4501528181611e2801528181611e9a0152611f4401526000818161065001528181610b4b015281816118bf01528181611a3a01528181611d230152611f220152612b456000f3fe60806040526004361061024e5760003560e01c806391f7cfb911610138578063d4ee1d90116100b0578063f1d27a9b1161007f578063f61084f911610064578063f61084f9146106f5578063fca63fa5146106fd578063fe49cff81461071357600080fd5b8063f1d27a9b146106b5578063f2fde38b146106d557600080fd5b8063d4ee1d9014610611578063da6a50151461063e578063db5fc47214610672578063e680bbec1461068857600080fd5b8063a4e81c0f11610107578063c0463711116100ec578063c0463711146105d0578063c8f49b6c146105e6578063cb580151146105fc57600080fd5b8063a4e81c0f1461057e578063b5f522f71461059e57600080fd5b806391f7cfb9146104fb578063939e48f9146105115780639c52a7f11461053e578063a2f55ae51461055e57600080fd5b806353f9a90a116101cb57806378e979251161019a5780638985abc81161017f5780638985abc8146104a25780638da5cb5b146104b85780638e58ca44146104e557600080fd5b806378e979251461047757806386d1a69f1461048d57600080fd5b806353f9a90a146104025780636053617214610422578063641ccd831461043757806365edfb621461045757600080fd5b80633fc8cef31161022257806341ea52631161020757806341ea52631461038157806341fbb050146103b5578063439b19bd146103e257600080fd5b80633fc8cef31461030d5780633fd8cc4e1461034157600080fd5b8062943599146102535780631a39d8ef146102755780632a9439451461029e5780633197cbb6146102f7575b600080fd5b34801561025f57600080fd5b5061027361026e366004612406565b610726565b005b34801561028157600080fd5b5061028b60055481565b6040519081526020015b60405180910390f35b3480156102aa57600080fd5b506102d27f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610295565b34801561030357600080fd5b5061028b60075481565b34801561031957600080fd5b506102d27f000000000000000000000000000000000000000000000000000000000000000081565b34801561034d57600080fd5b5061037161035c366004612456565b60026020526000908152604090205460ff1681565b6040519015158152602001610295565b34801561038d57600080fd5b506103717f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c157600080fd5b506004546102d29073ffffffffffffffffffffffffffffffffffffffff1681565b3480156103ee57600080fd5b5061028b6103fd3660046124bd565b610764565b34801561040e57600080fd5b5061028b61041d366004612525565b6107f8565b34801561042e57600080fd5b5061027361088a565b34801561044357600080fd5b50610273610452366004612406565b6109b4565b34801561046357600080fd5b5061028b610472366004612525565b610c3f565b34801561048357600080fd5b5061028b60065481565b34801561049957600080fd5b5061028b610cbc565b3480156104ae57600080fd5b5061028b60115481565b3480156104c457600080fd5b506000546102d29073ffffffffffffffffffffffffffffffffffffffff1681565b3480156104f157600080fd5b5061028b60085481565b34801561050757600080fd5b5061028b600d5481565b34801561051d57600080fd5b5061028b61052c366004612567565b60106020526000908152604090205481565b34801561054a57600080fd5b50610273610559366004612456565b610cfa565b34801561056a57600080fd5b50610273610579366004612456565b610da1565b34801561058a57600080fd5b50610273610599366004612580565b610e44565b3480156105aa57600080fd5b506105be6105b9366004612567565b611088565b60405161029596959493929190612635565b3480156105dc57600080fd5b5061028b600b5481565b3480156105f257600080fd5b5061028b60095481565b34801561060857600080fd5b5061028b61115c565b34801561061d57600080fd5b506001546102d29073ffffffffffffffffffffffffffffffffffffffff1681565b34801561064a57600080fd5b506102d27f000000000000000000000000000000000000000000000000000000000000000081565b34801561067e57600080fd5b5061028b600c5481565b34801561069457600080fd5b5061028b6106a3366004612567565b600f6020526000908152604090205481565b3480156106c157600080fd5b5061028b6106d0366004612567565b61116c565b3480156106e157600080fd5b506102736106f0366004612456565b6111d0565b61028b611267565b34801561070957600080fd5b5061028b600a5481565b61028b6107213660046124bd565b611271565b60005473ffffffffffffffffffffffffffffffffffffffff16331461074a57600080fd5b610752610cbc565b50600792909255600991909155600855565b60006002600354036107d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026003556107e98686868686611371565b60016003559695505050505050565b6000600260035403610866576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016107ce565b60026003556108758383611ac3565b5061087e611b77565b60016003559392505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610931576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016107ce565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109d857600080fd5b60055415610a42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c72656164792073746172746564000000000000000000000000000000000060448201526064016107ce565b818310610aab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f696e76616c696420737461727454696d65202f20656e6454696d65000000000060448201526064016107ce565b670de0b6b3a7640000811115610b1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c69642064656372656d656e7400000000000000000000000000000060448201526064016107ce565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610ba7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcb9190612672565b600555600683905560078290556009819055610bef81670de0b6b3a76400006126ba565b600a55600954600654600754610c179291610c09916126ba565b670de0b6b3a7640000611f6e565b670de0b6b3a7640000600554610c2d91906126d1565b610c37919061270e565b600855505050565b6000600260035403610cad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016107ce565b600260035561087e8383611ac3565b600080610cc761115c565b9050600c5481610cd791906126ba565b915081600d6000828254610ceb9190612749565b9091555050600c5542600b5590565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d1e57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314610dc557600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610d96565b3360009081526002602052604090205460ff16610ee3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016107ce565b610eeb610cbc565b508060200135600654108015610f0957508060400135816020013511155b610f6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f696e76616c6964207374617274202f20656e642074696d65200000000000000060448201526064016107ce565b600d54610f81606083013560026126d1565b10610fe8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420616d6f756e7400000000000000000000000000000000000060448201526064016107ce565b600e805460018101825560009190915281600682027fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd01611029828261294c565b5061103b9050606083013560026126d1565b600d600082825461104c91906126ba565b90915550506040518181527f5d5a2851a4a359bb06f51320f4edc76a093cfb8d9ec794ef14d3de5276ca762f9060200160405180910390a15050565b600e818154811061109857600080fd5b90600052602060002090600602016000915090508060000154908060010154908060020154908060030154908060040154908060050180546110d990612790565b80601f016020809104026020016040519081016040528092919081815260200182805461110590612790565b80156111525780601f1061112757610100808354040283529160200191611152565b820191906000526020600020905b81548152906001019060200180831161113557829003601f168201915b5050505050905086565b60006111674261116c565b905090565b600060075482111561118057505060055490565b60006006548361119091906126ba565b9050670de0b6b3a76400006111b060095483670de0b6b3a7640000611f6e565b6008546111bd91906126d1565b6111c7919061270e565b9150505b919050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146111f457600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610d96565b6000611167611b77565b60006002600354036112df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016107ce565b60026003819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561134f57600080fd5b505af1158015611363573d6000803e3d6000fd5b50505050506107e986868686865b600080600e8781548110611387576113876129e9565b906000526020600020906006020190506000816003015411611405576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f696e76616c69642073616c65730000000000000000000000000000000000000060448201526064016107ce565b8054421161146f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f6e6f74207374617274656400000000000000000000000000000000000000000060448201526064016107ce565b6040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b166020820152603481018690526000906054016040516020818303038152906040528051906020012090506114d28585846004015484611fb6565b611538576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6d65726b6c652070726f6f66206661696c65640000000000000000000000000060448201526064016107ce565b600081815260106020526040812054611552903490612749565b9050868111156115be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6578636365656420616c6c6f636174696f6e000000000000000000000000000060448201526064016107ce565b8060106000848152602001908152602001600020819055506000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015611644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116689190612a36565b50915091507f000000000000000000000000000000000000000000000000000000000000000061169457905b806dffffffffffffffffffffffffffff16826dffffffffffffffffffffffffffff16346116c191906126d1565b6116cb919061270e565b955042856001015410156117485788861115611743576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420616d6f756e7400000000000000000000000000000000000060448201526064016107ce565b6117cf565b600385015460008c8152600f6020526040902054611767908890612749565b11156117cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420616d6f756e7400000000000000000000000000000000000060448201526064016107ce565b60008b8152600f6020526040812080548892906117ed908490612749565b90915550506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561187f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118a39190612672565b905061190673ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000089611fce565b61196773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083611fce565b600480546040517f6a62784200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216928101929092527f00000000000000000000000000000000000000000000000000000000000000001690636a627842906024016020604051808303816000875af11580156119fb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1f9190612672565b50611a6173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168c89611fce565b604080518881526020810183905273ffffffffffffffffffffffffffffffffffffffff8d169133917f89f5adc174562e07c9c9b1cae7109bbecb21cf9d1b2847e550042b8653c54a0e910160405180910390a350505050505095945050505050565b600080825b80821015611b6a576000858584818110611ae457611ae46129e9565b9050602002013590506000600e8281548110611b0257611b026129e9565b906000526020600020906006020190504281600201541015611b5d576000828152600f60205260409020546003820154611b3c91906126ba565b611b469086612749565b60038201546000848152600f602052604090205594505b5050600190910190611ac8565b5050601181905592915050565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015611be7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c0b9190612a36565b50915091507f0000000000000000000000000000000000000000000000000000000000000000611c3757905b806dffffffffffffffffffffffffffff16826dffffffffffffffffffffffffffff1634611c6491906126d1565b611c6e919061270e565b601154909350611c7f8460026126d1565b1115611ce7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f696e73756666696369656e7420616d6f756e740000000000000000000000000060448201526064016107ce565b611cf28360026126d1565b60116000828254611d0391906126ba565b90915550611d6a905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000085611fce565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b158015611dd257600080fd5b505af1158015611de6573d6000803e3d6000fd5b50611e4f93505073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691507f0000000000000000000000000000000000000000000000000000000000000000905034611fce565b600480546040517f6a62784200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216928101929092527f00000000000000000000000000000000000000000000000000000000000000001690636a627842906024016020604051808303816000875af1158015611ee3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f079190612672565b50611f6973ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000085611fce565b505090565b6000611f7a84836126ba565b82611f9086611f8a876001612749565b86612060565b611f9a90856126ba565b611fa491906126d1565b611fae919061270e565b949350505050565b600082611fc486868561211e565b1495945050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261205b90849061216c565b505050565b60008380156121005760018416801561207b5785925061207f565b8392505b50600283046002850494505b84156120fa5785860286878204146120a257600080fd5b818101818110156120b257600080fd5b85900496505060018516156120ef5785830283878204141587151516156120d857600080fd5b818101818110156120e857600080fd5b8590049350505b60028504945061208b565b50612116565b8380156121105760009250612114565b8392505b505b509392505050565b600081815b848110156121615761214d82878784818110612141576121416129e9565b90506020020135612278565b91508061215981612a86565b915050612123565b5090505b9392505050565b60006121ce826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122a49092919063ffffffff16565b80519091501561205b57808060200190518101906121ec9190612abe565b61205b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016107ce565b6000818310612294576000828152602084905260409020612165565b5060009182526020526040902090565b6060611fae84846000858573ffffffffffffffffffffffffffffffffffffffff85163b61232d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107ce565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516123569190612ae0565b60006040518083038185875af1925050503d8060008114612393576040519150601f19603f3d011682016040523d82523d6000602084013e612398565b606091505b50915091506123a88282866123b3565b979650505050505050565b606083156123c2575081612165565b8251156123d25782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ce9190612afc565b60008060006060848603121561241b57600080fd5b505081359360208301359350604090920135919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146111cb57600080fd5b60006020828403121561246857600080fd5b61216582612432565b60008083601f84011261248357600080fd5b50813567ffffffffffffffff81111561249b57600080fd5b6020830191508360208260051b85010111156124b657600080fd5b9250929050565b6000806000806000608086880312156124d557600080fd5b853594506124e560208701612432565b935060408601359250606086013567ffffffffffffffff81111561250857600080fd5b61251488828901612471565b969995985093965092949392505050565b6000806020838503121561253857600080fd5b823567ffffffffffffffff81111561254f57600080fd5b61255b85828601612471565b90969095509350505050565b60006020828403121561257957600080fd5b5035919050565b60006020828403121561259257600080fd5b813567ffffffffffffffff8111156125a957600080fd5b820160c0818503121561216557600080fd5b60005b838110156125d65781810151838201526020016125be565b838111156125e5576000848401525b50505050565b600081518084526126038160208601602086016125bb565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b86815285602082015284604082015283606082015282608082015260c060a0820152600061266660c08301846125eb565b98975050505050505050565b60006020828403121561268457600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156126cc576126cc61268b565b500390565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156127095761270961268b565b500290565b600082612744577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000821982111561275c5761275c61268b565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c908216806127a457607f821691505b6020821081036127dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561205b57600081815260208120601f850160051c8101602086101561280a5750805b601f850160051c820191505b8181101561282957828155600101612816565b505050505050565b67ffffffffffffffff83111561284957612849612761565b61285d836128578354612790565b836127e3565b6000601f8411600181146128af57600085156128795750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355612945565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156128fe57868501358255602094850194600190920191016128de565b5086821015612939577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b813581556020820135600182015560408201356002820155606082013560038201556080820135600482015560a08201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18336030181126129ad57600080fd5b8201803567ffffffffffffffff8111156129c657600080fd5b6020820191508036038213156129db57600080fd5b6125e5818360058601612831565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80516dffffffffffffffffffffffffffff811681146111cb57600080fd5b600080600060608486031215612a4b57600080fd5b612a5484612a18565b9250612a6260208501612a18565b9150604084015163ffffffff81168114612a7b57600080fd5b809150509250925092565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612ab757612ab761268b565b5060010190565b600060208284031215612ad057600080fd5b8151801515811461216557600080fd5b60008251612af28184602087016125bb565b9190910192915050565b60208152600061216560208301846125eb56fea2646970667358221220f346d884d233b0ef8d6e1d3e65588e78161c61e9006107b3a830800842b6907a64736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/Vault.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/Vault.json.ts"], function (require, exports, eth_contract_9, Vault_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vault = void 0;
    class Vault extends eth_contract_9.Contract {
        constructor(wallet, address) {
            super(wallet, address, Vault_json_1.default.abi, Vault_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.foundation, params.scom, params.amm], options);
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseBuyEvent(receipt) {
            return this.parseEvents(receipt, "Buy").map(e => this.decodeBuyEvent(e));
        }
        decodeBuyEvent(event) {
            let result = event.data;
            return {
                buyer: result.buyer,
                to: result.to,
                amountScom: new eth_contract_9.BigNumber(result.amountScom),
                amountEth: new eth_contract_9.BigNumber(result.amountEth),
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseNewSaleEvent(receipt) {
            return this.parseEvents(receipt, "NewSale").map(e => this.decodeNewSaleEvent(e));
        }
        decodeNewSaleEvent(event) {
            let result = event.data;
            return {
                salesId: new eth_contract_9.BigNumber(result.salesId),
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        assign() {
            let amm_call = async (options) => {
                let result = await this.call('amm', [], options);
                return result;
            };
            this.amm = amm_call;
            let amountUsedInSale_call = async (param1, options) => {
                let result = await this.call('amountUsedInSale', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.amountUsedInSale = amountUsedInSale_call;
            let availableAmount_call = async (options) => {
                let result = await this.call('availableAmount', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.availableAmount = availableAmount_call;
            let currReleaseAmount_call = async (options) => {
                let result = await this.call('currReleaseAmount', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.currReleaseAmount = currReleaseAmount_call;
            let decrementDecimal_call = async (options) => {
                let result = await this.call('decrementDecimal', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.decrementDecimal = decrementDecimal_call;
            let endTime_call = async (options) => {
                let result = await this.call('endTime', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.endTime = endTime_call;
            let foundation_call = async (options) => {
                let result = await this.call('foundation', [], options);
                return result;
            };
            this.foundation = foundation_call;
            let initialReleaseAmount_call = async (options) => {
                let result = await this.call('initialReleaseAmount', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.initialReleaseAmount = initialReleaseAmount_call;
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let lasReleaseAmount_call = async (options) => {
                let result = await this.call('lasReleaseAmount', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.lasReleaseAmount = lasReleaseAmount_call;
            let lastUpdate_call = async (options) => {
                let result = await this.call('lastUpdate', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.lastUpdate = lastUpdate_call;
            let newOwner_call = async (options) => {
                let result = await this.call('newOwner', [], options);
                return result;
            };
            this.newOwner = newOwner_call;
            let oneMinusDecrement_call = async (options) => {
                let result = await this.call('oneMinusDecrement', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.oneMinusDecrement = oneMinusDecrement_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let publicSaleAmount_call = async (options) => {
                let result = await this.call('publicSaleAmount', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.publicSaleAmount = publicSaleAmount_call;
            let sales_call = async (param1, options) => {
                let result = await this.call('sales', [this.wallet.utils.toString(param1)], options);
                return {
                    startTime: new eth_contract_9.BigNumber(result.startTime),
                    limitedPrivateSaleEndTime: new eth_contract_9.BigNumber(result.limitedPrivateSaleEndTime),
                    unlimitedPrivateSaleEndTime: new eth_contract_9.BigNumber(result.unlimitedPrivateSaleEndTime),
                    amount: new eth_contract_9.BigNumber(result.amount),
                    merkleRoot: result.merkleRoot,
                    ipfsCid: result.ipfsCid
                };
            };
            this.sales = sales_call;
            let scom_call = async (options) => {
                let result = await this.call('scom', [], options);
                return result;
            };
            this.scom = scom_call;
            let startTime_call = async (options) => {
                let result = await this.call('startTime', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.startTime = startTime_call;
            let token0IsScom_call = async (options) => {
                let result = await this.call('token0IsScom', [], options);
                return result;
            };
            this.token0IsScom = token0IsScom_call;
            let totalAmount_call = async (options) => {
                let result = await this.call('totalAmount', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.totalAmount = totalAmount_call;
            let totalSuppyAt_call = async (timestamp, options) => {
                let result = await this.call('totalSuppyAt', [this.wallet.utils.toString(timestamp)], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.totalSuppyAt = totalSuppyAt_call;
            let usedAllocation_call = async (param1, options) => {
                let result = await this.call('usedAllocation', [this.wallet.utils.stringToBytes32(param1)], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.usedAllocation = usedAllocation_call;
            let weth_call = async (options) => {
                let result = await this.call('weth', [], options);
                return result;
            };
            this.weth = weth_call;
            let buyParams = (params) => [this.wallet.utils.toString(params.salesId), params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
            let buy_send = async (params, options) => {
                let result = await this.send('buy', buyParams(params), options);
                return result;
            };
            let buy_call = async (params, options) => {
                let result = await this.call('buy', buyParams(params), options);
                return new eth_contract_9.BigNumber(result);
            };
            this.buy = Object.assign(buy_send, {
                call: buy_call
            });
            let buyWithWETHParams = (params) => [this.wallet.utils.toString(params.salesId), params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
            let buyWithWETH_send = async (params, options) => {
                let result = await this.send('buyWithWETH', buyWithWETHParams(params), options);
                return result;
            };
            let buyWithWETH_call = async (params, options) => {
                let result = await this.call('buyWithWETH', buyWithWETHParams(params), options);
                return new eth_contract_9.BigNumber(result);
            };
            this.buyWithWETH = Object.assign(buyWithWETH_send, {
                call: buyWithWETH_call
            });
            let deny_send = async (user, options) => {
                let result = await this.send('deny', [user], options);
                return result;
            };
            let deny_call = async (user, options) => {
                let result = await this.call('deny', [user], options);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let newSale_send = async (sale, options) => {
                let result = await this.send('newSale', [[this.wallet.utils.toString(sale.startTime), this.wallet.utils.toString(sale.limitedPrivateSaleEndTime), this.wallet.utils.toString(sale.unlimitedPrivateSaleEndTime), this.wallet.utils.toString(sale.amount), this.wallet.utils.stringToBytes32(sale.merkleRoot), this.wallet.utils.stringToBytes(sale.ipfsCid)]], options);
                return result;
            };
            let newSale_call = async (sale, options) => {
                let result = await this.call('newSale', [[this.wallet.utils.toString(sale.startTime), this.wallet.utils.toString(sale.limitedPrivateSaleEndTime), this.wallet.utils.toString(sale.unlimitedPrivateSaleEndTime), this.wallet.utils.toString(sale.amount), this.wallet.utils.stringToBytes32(sale.merkleRoot), this.wallet.utils.stringToBytes(sale.ipfsCid)]], options);
                return;
            };
            this.newSale = Object.assign(newSale_send, {
                call: newSale_call
            });
            let permit_send = async (user, options) => {
                let result = await this.send('permit', [user], options);
                return result;
            };
            let permit_call = async (user, options) => {
                let result = await this.call('permit', [user], options);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let publicBuy_send = async (options) => {
                let result = await this.send('publicBuy', [], options);
                return result;
            };
            let publicBuy_call = async (options) => {
                let result = await this.call('publicBuy', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.publicBuy = Object.assign(publicBuy_send, {
                call: publicBuy_call
            });
            let release_send = async (options) => {
                let result = await this.send('release', [], options);
                return result;
            };
            let release_call = async (options) => {
                let result = await this.call('release', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.release = Object.assign(release_send, {
                call: release_call
            });
            let releaseAndBuy_send = async (salesIds, options) => {
                let result = await this.send('releaseAndBuy', [this.wallet.utils.toString(salesIds)], options);
                return result;
            };
            let releaseAndBuy_call = async (salesIds, options) => {
                let result = await this.call('releaseAndBuy', [this.wallet.utils.toString(salesIds)], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.releaseAndBuy = Object.assign(releaseAndBuy_send, {
                call: releaseAndBuy_call
            });
            let releaseToPublic_send = async (salesIds, options) => {
                let result = await this.send('releaseToPublic', [this.wallet.utils.toString(salesIds)], options);
                return result;
            };
            let releaseToPublic_call = async (salesIds, options) => {
                let result = await this.call('releaseToPublic', [this.wallet.utils.toString(salesIds)], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.releaseToPublic = Object.assign(releaseToPublic_send, {
                call: releaseToPublic_call
            });
            let startParams = (params) => [this.wallet.utils.toString(params.startTime), this.wallet.utils.toString(params.endTime), this.wallet.utils.toString(params.decrementDecimal)];
            let start_send = async (params, options) => {
                let result = await this.send('start', startParams(params), options);
                return result;
            };
            let start_call = async (params, options) => {
                let result = await this.call('start', startParams(params), options);
                return;
            };
            this.start = Object.assign(start_send, {
                call: start_call
            });
            let takeOwnership_send = async (options) => {
                let result = await this.send('takeOwnership', [], options);
                return result;
            };
            let takeOwnership_call = async (options) => {
                let result = await this.call('takeOwnership', [], options);
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let updateReleaseSchduleParams = (params) => [this.wallet.utils.toString(params.endTime), this.wallet.utils.toString(params.initialReleaseAmount), this.wallet.utils.toString(params.decrementDecimal)];
            let updateReleaseSchdule_send = async (params, options) => {
                let result = await this.send('updateReleaseSchdule', updateReleaseSchduleParams(params), options);
                return result;
            };
            let updateReleaseSchdule_call = async (params, options) => {
                let result = await this.call('updateReleaseSchdule', updateReleaseSchduleParams(params), options);
                return;
            };
            this.updateReleaseSchdule = Object.assign(updateReleaseSchdule_send, {
                call: updateReleaseSchdule_call
            });
        }
    }
    Vault._abi = Vault_json_1.default.abi;
    exports.Vault = Vault;
});
define("@scom/portal-contract/contracts/index.ts", ["require", "exports", "@scom/portal-contract/contracts/AuditInfo.ts", "@scom/portal-contract/contracts/AuditorInfo.ts", "@scom/portal-contract/contracts/Authorization.ts", "@scom/portal-contract/contracts/DomainInfo.ts", "@scom/portal-contract/contracts/ModuleInfo.ts", "@scom/portal-contract/contracts/ProjectInfo.ts", "@scom/portal-contract/contracts/RouterVaultWrapper.ts", "@scom/portal-contract/contracts/Scom.ts", "@scom/portal-contract/contracts/Vault.ts"], function (require, exports, AuditInfo_1, AuditorInfo_1, Authorization_1, DomainInfo_1, ModuleInfo_1, ProjectInfo_1, RouterVaultWrapper_1, Scom_1, Vault_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vault = exports.Scom = exports.RouterVaultWrapper = exports.ProjectInfo = exports.ModuleInfo = exports.DomainInfo = exports.Authorization = exports.AuditorInfo = exports.AuditInfo = void 0;
    Object.defineProperty(exports, "AuditInfo", { enumerable: true, get: function () { return AuditInfo_1.AuditInfo; } });
    Object.defineProperty(exports, "AuditorInfo", { enumerable: true, get: function () { return AuditorInfo_1.AuditorInfo; } });
    Object.defineProperty(exports, "Authorization", { enumerable: true, get: function () { return Authorization_1.Authorization; } });
    Object.defineProperty(exports, "DomainInfo", { enumerable: true, get: function () { return DomainInfo_1.DomainInfo; } });
    Object.defineProperty(exports, "ModuleInfo", { enumerable: true, get: function () { return ModuleInfo_1.ModuleInfo; } });
    Object.defineProperty(exports, "ProjectInfo", { enumerable: true, get: function () { return ProjectInfo_1.ProjectInfo; } });
    Object.defineProperty(exports, "RouterVaultWrapper", { enumerable: true, get: function () { return RouterVaultWrapper_1.RouterVaultWrapper; } });
    Object.defineProperty(exports, "Scom", { enumerable: true, get: function () { return Scom_1.Scom; } });
    Object.defineProperty(exports, "Vault", { enumerable: true, get: function () { return Vault_1.Vault; } });
});
define("@scom/portal-contract", ["require", "exports", "@scom/portal-contract/contracts/index.ts"], function (require, exports, Contracts) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deploy = exports.DefaultDeployOptions = exports.Contracts = void 0;
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
        },
        audit: {
            warningThreshold: 600,
            passedThreshold: 900,
            auditDuration: 14 * 24 * 60 * 60,
            minAuditRequired: 3
        },
        vault: {
            foundation: '',
            amm: ''
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
    async function deployAuditInfo(wallet, projectInfo, auditorInfo, Config) {
        let auditInfo = new Contracts.AuditInfo(wallet);
        return await auditInfo.deploy(Object.assign({ projectInfo, auditorInfo }, Config.audit));
    }
    async function deployVault(wallet, scom, Config) {
        let vault = new Contracts.Vault(wallet);
        return await vault.deploy({ foundation: Config.vault.foundation, scom: scom, amm: Config.vault.amm });
    }
    async function deploy(wallet, Config, onProgress) {
        var _a;
        let result = {
            token: '',
            domain: '',
            auditor: '',
            project: '',
            audit: '',
            vault: '',
        };
        onProgress('1/6 Deploy token contract');
        if (!((_a = Config.token) === null || _a === void 0 ? void 0 : _a.address)) {
            if (!Config.token.initSupplyTo) {
                onProgress('ERROR: token.initSupplyTo not defined!');
                return;
            }
            result.token = await deployScom(wallet, Config);
        }
        else
            result.token = Config.token.address;
        onProgress('2/6 Deploy domain contract');
        result.domain = await deployDomainInfo(wallet, result.token);
        onProgress('3/6 Deploy auditor contract');
        result.auditor = await deployAuditorInfo(wallet, result.token, Config);
        onProgress('4/6 Deploy project contract');
        result.project = await deployProjectInfo(wallet, result.token, result.auditor, Config);
        onProgress('5/6 Deploy audit contract');
        if (Config.audit)
            result.audit = await deployAuditInfo(wallet, result.project, result.auditor, Config);
        onProgress('6/6 Deploy vault contract');
        if (Config.vault)
            result.vault = await deployVault(wallet, result.token, Config);
        return result;
    }
    exports.deploy = deploy;
    exports.default = {
        Contracts,
        deploy,
        DefaultDeployOptions: exports.DefaultDeployOptions
    };
});
