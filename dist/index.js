define("@scom/portal-contract/contracts/AuditInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/AuditInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract ProjectInfo", "name": "_projectInfo", "type": "address" }, { "internalType": "contract AuditorInfo", "name": "_auditorInfo", "type": "address" }, { "internalType": "uint256", "name": "_warningThreshold", "type": "uint256" }, { "internalType": "uint256", "name": "_passingThreshold", "type": "uint256" }, { "internalType": "uint256", "name": "_auditDuration", "type": "uint256" }, { "internalType": "uint256", "name": "_minAuditRequired", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }, { "indexed": false, "internalType": "enum AuditInfo.AuditResult", "name": "auditResult", "type": "uint8" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "AddAuditReport", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "auditDuration", "type": "uint256" }], "name": "SetAuditDuration", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minAuditRequired", "type": "uint256" }], "name": "SetMinAuditRequired", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "passingThreshold", "type": "uint256" }], "name": "SetPassingThreshold", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "warningThreshold", "type": "uint256" }], "name": "SetWarningThreshold", "type": "event" },
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
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }], "name": "latestAuditResult", "outputs": [{ "internalType": "enum AuditInfo.AuditResult", "name": "result", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "minAuditRequired", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageVersionsAuditors", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "packageVersionsAuditorsInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "passingThreshold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "projectInfo", "outputs": [{ "internalType": "contract ProjectInfo", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_auditDuration", "type": "uint256" }], "name": "setAuditDuration", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_minAuditRequired", "type": "uint256" }], "name": "setMinAuditRequired", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_passingThreshold", "type": "uint256" }], "name": "setPassingThreshold", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_warningThreshold", "type": "uint256" }], "name": "setWarningThreshold", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "warningThreshold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162001db338038062001db383398101604081905262000034916200016b565b600080546001600160a01b031916331790556001600355828410620000b75760405162461bcd60e51b815260206004820152602e60248201527f7761726e696e675468726573686f6c642067726561746572207468616e20706160448201526d1cdcda5b99d51a1c995cda1bdb1960921b60648201526084015b60405180910390fd5b6103e883106200010a5760405162461bcd60e51b815260206004820152601f60248201527f70617373696e675468726573686f6c642067726561746572207468616e2031006044820152606401620000ae565b600480546001600160a01b039788166001600160a01b0319918216179091556005805496909716951694909417909455600a91909155600b55600d91909155600c55620001ce565b6001600160a01b03811681146200016857600080fd5b50565b60008060008060008060c087890312156200018557600080fd5b8651620001928162000152565b6020880151909650620001a58162000152565b6040880151606089015160808a015160a0909a0151989b929a5090989097909650945092505050565b611bd580620001de6000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636dfc33aa116100f9578063a8e5ed2111610097578063d4ee1d9011610071578063d4ee1d9014610416578063e3dcc52614610436578063f2fde38b14610457578063fd9116481461046a57600080fd5b8063a8e5ed21146103cd578063ac1c4f4c146103d6578063be12f753146103f657600080fd5b80638da5cb5b116100d35780638da5cb5b1461037e5780639c52a7f11461039e578063a2f55ae5146103b1578063a488437e146103c457600080fd5b80636dfc33aa1461033557806375a320b3146103485780637aec81421461036b57600080fd5b80632de703f9116101665780635bc8f9b8116101405780635bc8f9b8146102ef5780635d6bade0146103115780636053617214610324578063620793d91461032c57600080fd5b80632de703f91461027e5780633fd8cc4e146102a957806357d441cb146102dc57600080fd5b8063185b691011610197578063185b69101461021357806328e6c8ab146102585780632c56943e1461026b57600080fd5b8063083ba199146101be5780630fac3451146101e757806311fd63b8146101fc575b600080fd5b6101d16101cc366004611505565b610473565b6040516101de9190611588565b60405180910390f35b6101fa6101f5366004611505565b61058a565b005b610205600c5481565b6040519081526020016101de565b6004546102339073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101de565b6102056102663660046115bf565b6105ea565b6101fa610279366004611505565b6106f0565b61020561028c3660046115bf565b600860209081526000928352604080842090915290825290205481565b6102cc6102b73660046115eb565b60026020526000908152604090205460ff1681565b60405190151581526020016101de565b6101fa6102ea36600461161d565b61084a565b6103026102fd3660046116a6565b610d08565b6040516101de93929190611702565b61023361031f366004611769565b610df3565b6101fa610e38565b610205600b5481565b6101fa610343366004611505565b610f62565b6101d1610356366004611505565b60096020526000908152604090205460ff1681565b6101fa610379366004611505565b610fbb565b6000546102339073ffffffffffffffffffffffffffffffffffffffff1681565b6101fa6103ac3660046115eb565b6110a5565b6101fa6103bf3660046115eb565b611145565b6102056103e881565b610205600d5481565b6005546102339073ffffffffffffffffffffffffffffffffffffffff1681565b610205610404366004611505565b60009081526007602052604090205490565b6001546102339073ffffffffffffffffffffffffffffffffffffffff1681565b610449610444366004611505565b6111e8565b6040516101de92919061178b565b6101fa6104653660046115eb565b6113d5565b610205600a5481565b600081815260076020526040812054600c54811061057f576000805b828110156105275760008581526007602052604081208054839081106104b7576104b7611823565b600091825260209091200190506002815482906104d690600190611881565b815481106104e6576104e6611823565b600091825260209091206003909102015460ff16600281111561050b5761050b61151e565b0361051e578261051a81611898565b9350505b5060010161048f565b600b5461053490846118d0565b6105406103e8846118d0565b101561057357600a5461055390846118d0565b61055f6103e8846118d0565b101561056c576000610576565b6001610576565b60025b93505050610584565b600091505b50919050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105ae57600080fd5b600d8190556040518181527f10c2ffc61239abf87ea5f24df6ee5eb842ff8dc07cfe81608c2d649815caa7df906020015b60405180910390a150565b6000828152600660205260408120805473ffffffffffffffffffffffffffffffffffffffff84169190839061062157610621611823565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff160361067a576000838152600760205260408120805490919061066757610667611823565b60009182526020909120015490506106ea565b600083815260086020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915290205480156106e35760008481526007602052604090208054829081106106d0576106d0611823565b60009182526020909120015491506106e8565b600091505b505b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461071457600080fd5b80600a54106107aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f70617373696e675468726573686f6c64206c657373207468616e207761726e6960448201527f6e675468726573686f6c6400000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103e88110610815576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f70617373696e675468726573686f6c6420677265746572207468616e2031000060448201526064016107a1565b600b8190556040518181527f1850473dbbf65a76c75415504adba6bfad8cb105d77b32d4e8af31c21936ab25906020016105df565b6005546040517fb7419ee100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b7419ee190602401602060405180830381865afa1580156108b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108dc919061190d565b610942576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e6f742066726f6d206163746976652061756469746f7200000000000000000060448201526064016107a1565b600084815260076020526040812054908190036109d25760008581526006602090815260408083208054600181810183559185528385200180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915589855260088452828520908552835281842085905588845260079092528220805490910181559052610a73565b600085815260086020908152604080832033845290915281205490819003610a6d5760008681526006602090815260408083208054600181810183559185528385200180547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091558a855260088452828520908552835281842086905589845260079092528220805490910181559052610a71565b8091505b505b6000858152600760205260409020805482908110610a9357610a93611823565b906000526020600020016040518060600160405280866002811115610aba57610aba61151e565b815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250504260209384015250835460018181018655948252919020825160039092020180549293909283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911690836002811115610b5457610b5461151e565b02179055506020828101518051610b71926001850192019061146c565b50604082015181600201555050843373ffffffffffffffffffffffffffffffffffffffff167f68f77877df899ccf85484ce7965cbf190f87968c4601e950ed6cac43031a4a86868686604051610bc99392919061192f565b60405180910390a36000610bdc86610473565b600480546040517f723dd3da00000000000000000000000000000000000000000000000000000000815291820189905291925060009173ffffffffffffffffffffffffffffffffffffffff169063723dd3da90602401600060405180830381865afa158015610c4f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c959190810190611a5f565b945050505050600d5481610ca99190611b3a565b421015610cff57600087815260096020526040902080548391907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115610cf957610cf961151e565b02179055505b50505050505050565b60076020528260005260406000208281548110610d2457600080fd5b906000526020600020018181548110610d3c57600080fd5b60009182526020909120600390910201805460018201805460ff9092169550919350909150610d6a90611b52565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9690611b52565b8015610de35780601f10610db857610100808354040283529160200191610de3565b820191906000526020600020905b815481529060010190602001808311610dc657829003601f168201915b5050505050908060020154905083565b60066020528160005260406000208181548110610e0f57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610edf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016107a1565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f8657600080fd5b600c8190556040518181527f8a26512c3624ad9cd85a10292c3dc1cd6a15569dee4d6b0c275436f5086e7887906020016105df565b60005473ffffffffffffffffffffffffffffffffffffffff163314610fdf57600080fd5b600b548110611070576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f7761726e696e675468726573686f6c642067726561746572207468616e20706160448201527f7373696e675468726573686f6c6400000000000000000000000000000000000060648201526084016107a1565b600a8190556040518181527fa3c6dd9fefe31e2a42078f8cb943e48f2d4f594e3b11a9d3a8dbb1509c93b383906020016105df565b60005473ffffffffffffffffffffffffffffffffffffffff1633146110c957600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491016105df565b60005473ffffffffffffffffffffffffffffffffffffffff16331461116957600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016105df565b60008181526007602052604090205460609081908067ffffffffffffffff8111156112155761121561198a565b60405190808252806020026020018201604052801561123e578160200160208202803683370190505b5092508067ffffffffffffffff81111561125a5761125a61198a565b604051908082528060200260200182016040528015611283578160200160208202803683370190505b50915060005b818110156113ce5760008581526006602052604090208054829081106112b1576112b1611823565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168482815181106112ee576112ee611823565b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101820152600086815260079091526040812080548390811061133257611332611823565b90600052602060002001905080600182805490506113509190611881565b8154811061136057611360611823565b6000918252602090912060039091020154845160ff9091169085908490811061138b5761138b611823565b602002602001019060028111156113a4576113a461151e565b908160028111156113b7576113b761151e565b9052508190506113c681611898565b915050611289565b5050915091565b60005473ffffffffffffffffffffffffffffffffffffffff1633146113f957600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016105df565b82805461147890611b52565b90600052602060002090601f01602090048101928261149a57600085556114e0565b82601f106114b357805160ff19168380011785556114e0565b828001600101855582156114e0579182015b828111156114e05782518255916020019190600101906114c5565b506114ec9291506114f0565b5090565b5b808211156114ec57600081556001016114f1565b60006020828403121561151757600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110611584577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b602081016106ea828461154d565b803573ffffffffffffffffffffffffffffffffffffffff811681146115ba57600080fd5b919050565b600080604083850312156115d257600080fd5b823591506115e260208401611596565b90509250929050565b6000602082840312156115fd57600080fd5b61160682611596565b9392505050565b6003811061161a57600080fd5b50565b6000806000806060858703121561163357600080fd5b8435935060208501356116458161160d565b9250604085013567ffffffffffffffff8082111561166257600080fd5b818701915087601f83011261167657600080fd5b81358181111561168557600080fd5b88602082850101111561169757600080fd5b95989497505060200194505050565b6000806000606084860312156116bb57600080fd5b505081359360208301359350604090920135919050565b60005b838110156116ed5781810151838201526020016116d5565b838111156116fc576000848401525b50505050565b61170c818561154d565b606060208201526000835180606084015261172e8160808501602088016116d2565b604083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160160800192915050565b6000806040838503121561177c57600080fd5b50508035926020909101359150565b604080825283519082018190526000906020906060840190828701845b828110156117da57815173ffffffffffffffffffffffffffffffffffffffff16845292840192908401906001016117a8565b5050508381038285015284518082528583019183019060005b818110156118165761180683855161154d565b92840192918401916001016117f3565b5090979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561189357611893611852565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036118c9576118c9611852565b5060010190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561190857611908611852565b500290565b60006020828403121561191f57600080fd5b8151801515811461160657600080fd5b611939818561154d565b60406020820152816040820152818360608301376000818301606090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126119ca57600080fd5b815167ffffffffffffffff808211156119e5576119e561198a565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611a2b57611a2b61198a565b81604052838152866020858801011115611a4457600080fd5b611a558460208301602089016116d2565b9695505050505050565b600080600080600085870360e0811215611a7857600080fd5b8651955060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215611aac57600080fd5b506040516060810167ffffffffffffffff8282108183111715611ad157611ad161198a565b8160405260208901518352604089015160208401526060890151604084015282965060808901519250611b038361160d565b60a089015192955080831115611b1857600080fd5b5050611b26888289016119b9565b92505060c086015190509295509295909350565b60008219821115611b4d57611b4d611852565b500190565b600181811c90821680611b6657607f821691505b602082108103610584577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fdfea26469706673582212205604f225d40d40e635e368056f4cf3032772bed27723e998654be97978bb6ab964736f6c634300080d0033"
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
            return this.__deploy([params.projectInfo, params.auditorInfo, this.wallet.utils.toString(params.warningThreshold), this.wallet.utils.toString(params.passingThreshold), this.wallet.utils.toString(params.auditDuration), this.wallet.utils.toString(params.minAuditRequired)], options);
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
        parseSetAuditDurationEvent(receipt) {
            return this.parseEvents(receipt, "SetAuditDuration").map(e => this.decodeSetAuditDurationEvent(e));
        }
        decodeSetAuditDurationEvent(event) {
            let result = event.data;
            return {
                auditDuration: new eth_contract_1.BigNumber(result.auditDuration),
                _event: event
            };
        }
        parseSetMinAuditRequiredEvent(receipt) {
            return this.parseEvents(receipt, "SetMinAuditRequired").map(e => this.decodeSetMinAuditRequiredEvent(e));
        }
        decodeSetMinAuditRequiredEvent(event) {
            let result = event.data;
            return {
                minAuditRequired: new eth_contract_1.BigNumber(result.minAuditRequired),
                _event: event
            };
        }
        parseSetPassingThresholdEvent(receipt) {
            return this.parseEvents(receipt, "SetPassingThreshold").map(e => this.decodeSetPassingThresholdEvent(e));
        }
        decodeSetPassingThresholdEvent(event) {
            let result = event.data;
            return {
                passingThreshold: new eth_contract_1.BigNumber(result.passingThreshold),
                _event: event
            };
        }
        parseSetWarningThresholdEvent(receipt) {
            return this.parseEvents(receipt, "SetWarningThreshold").map(e => this.decodeSetWarningThresholdEvent(e));
        }
        decodeSetWarningThresholdEvent(event) {
            let result = event.data;
            return {
                warningThreshold: new eth_contract_1.BigNumber(result.warningThreshold),
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
            let latestAuditResult_call = async (packageVersionsId, options) => {
                let result = await this.call('latestAuditResult', [this.wallet.utils.toString(packageVersionsId)], options);
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
            let passingThreshold_call = async (options) => {
                let result = await this.call('passingThreshold', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.passingThreshold = passingThreshold_call;
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
            let setPassingThreshold_send = async (passingThreshold, options) => {
                let result = await this.send('setPassingThreshold', [this.wallet.utils.toString(passingThreshold)], options);
                return result;
            };
            let setPassingThreshold_call = async (passingThreshold, options) => {
                let result = await this.call('setPassingThreshold', [this.wallet.utils.toString(passingThreshold)], options);
                return;
            };
            this.setPassingThreshold = Object.assign(setPassingThreshold_send, {
                call: setPassingThreshold_call
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
            { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_foundation", "type": "address" }, { "internalType": "uint256", "name": "_minStakes", "type": "uint256" }, { "internalType": "uint256", "name": "_minEndorsementsRequired", "type": "uint256" }, { "internalType": "uint256", "name": "_cooldownPeriod", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "auditorId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }], "name": "AddAuditor", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "endorser", "type": "address" }, { "indexed": true, "internalType": "address", "name": "endorsee", "type": "address" }], "name": "EndorseAuditor", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }], "name": "FreezeAuditor", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }, { "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "auditorBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakerAuditorBalance", "type": "uint256" }], "name": "Penalize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "endorser", "type": "address" }, { "indexed": true, "internalType": "address", "name": "endorsee", "type": "address" }], "name": "RevokeEndorsement", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cooldownPeriod", "type": "uint256" }], "name": "SetCooldownPeriod", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minEndorsementsRequired", "type": "uint256" }], "name": "SetMinEndorsementsRequired", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minStakes", "type": "uint256" }], "name": "SetMinStakes", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "auditorBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakerAuditorBalance", "type": "uint256" }], "name": "StakeBond", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "auditorBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakerAuditorBalance", "type": "uint256" }], "name": "UnstakeBondRequest", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "WithdrawBond", "type": "event" },
            { "inputs": [], "name": "MAX_COOLDOWN_PERIOD", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "bool", "name": "isSuperAuditor", "type": "bool" }], "name": "addAuditor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "auditorIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "auditorIds", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "auditors", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "auditorsData", "outputs": [{ "internalType": "enum AuditorInfo.AuditorStatus", "name": "status", "type": "uint8" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "endorsementCount", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "cooldownPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "bool", "name": "doUpdate", "type": "bool" }], "name": "endorseAuditor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "endorsedBy", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "endorsedByInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "endorsee", "type": "address" }], "name": "endorsedByLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "endorsing", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "endorsingInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "endorser", "type": "address" }], "name": "endorsingLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "foundation", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }], "name": "freezeAuditor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "auditorIdStart", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getAuditors", "outputs": [{ "internalType": "address[]", "name": "_auditors", "type": "address[]" }, { "components": [{ "internalType": "enum AuditorInfo.AuditorStatus", "name": "status", "type": "uint8" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "endorsementCount", "type": "uint256" }], "internalType": "struct AuditorInfo.AuditorData[]", "name": "_auditorsData", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "endorsee", "type": "address" }, { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getEndorsedBy", "outputs": [{ "internalType": "address[]", "name": "endorser", "type": "address[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "endorser", "type": "address" }, { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getEndorsing", "outputs": [{ "internalType": "address[]", "name": "endorsee", "type": "address[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getStakedBy", "outputs": [{ "internalType": "address[]", "name": "stakers", "type": "address[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }, { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getStakerAuditor", "outputs": [{ "internalType": "address[]", "name": "_auditors", "type": "address[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }], "name": "isActiveAuditor", "outputs": [{ "internalType": "bool", "name": "active", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "minEndorsementsRequired", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "minStakes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "bool", "name": "unfreezeAuditor", "type": "bool" }, { "internalType": "address[]", "name": "staker", "type": "address[]" }, { "internalType": "uint256[]", "name": "amount", "type": "uint256[]" }], "name": "penalize", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pendingWithdrawal", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "releaseTime", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "registerAuditor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "bool", "name": "doUpdate", "type": "bool" }], "name": "revokeEndorsement", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_cooldownPeriod", "type": "uint256" }], "name": "setCooldownPeriod", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_minEndorsementsRequired", "type": "uint256" }], "name": "setMinEndorsementsRequired", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_minStakes", "type": "uint256" }], "name": "setMinStakes", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "doUpdate", "type": "bool" }], "name": "stakeBond", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "stakeTo", "outputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakedBy", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "stakedByInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }], "name": "stakedByLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakerAuditor", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }], "name": "stakerAuditorLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "unstakeBondRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }], "name": "updateAuditorState", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "_auditors", "type": "address[]" }], "name": "updateAuditorStateInBatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "withdrawBond", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b5060405162003e7f38038062003e7f833981016040819052620000349162000098565b600080546001600160a01b0319908116331790915560016003556001600160a01b039586166080526004805495909616941693909317909355600655600791909155600855620000f0565b6001600160a01b03811681146200009557600080fd5b50565b600080600080600060a08688031215620000b157600080fd5b8551620000be816200007f565b6020870151909550620000d1816200007f565b6040870151606088015160809098015196999198509695945092505050565b608051613d4962000136600039600081816108b301528181610d01015281816118ee015281816120c8015281816130d70152818161317301526131cb0152613d496000f3fe608060405234801561001057600080fd5b50600436106103365760003560e01c806377903d72116101b2578063ba8ebb5e116100f9578063dc674954116100a2578063ed672c6b1161007c578063ed672c6b14610852578063f2fde38b14610888578063f77cb4e51461089b578063fc0c546a146108ae57600080fd5b8063dc6749541461082d578063e18768c614610836578063e65331d71461083f57600080fd5b8063d4ee1d90116100d3578063d4ee1d90146107b8578063d78f8279146107d8578063d91651af146107eb57600080fd5b8063ba8ebb5e14610771578063bcdb851d14610784578063d2f586951461078d57600080fd5b8063a6d9680b1161015b578063ac4f682511610135578063ac4f682514610738578063b7419ee11461074b578063b7a013c71461075e57600080fd5b8063a6d9680b146106e7578063a6efa7c614610712578063a959d8921461072557600080fd5b80638da5cb5b1161018c5780638da5cb5b146106a15780639c52a7f1146106c1578063a2f55ae5146106d457600080fd5b806377903d721461063757806380ea3de114610658578063850ae5821461066b57600080fd5b806341fbb05011610281578063556d1a091161022a578063605361721161020457806360536172146105e257806361b8bdc8146105ea57806366eb9cec146105fd578063714799fc1461060557600080fd5b8063556d1a09146105a55780635f3416fb146105af5780635f82e791146105cf57600080fd5b80634a3a07a01161025b5780634a3a07a014610554578063537477521461057f5780635438f62b1461059257600080fd5b806341fbb0501461050e57806342bfc5991461052e57806346c78d021461054157600080fd5b80632b6033a4116102e357806335510218116102bd57806335510218146104b55780633b63b0ef146104c85780633fd8cc4e146104db57600080fd5b80632b6033a4146104595780632b96dea61461046c5780633088a622146104a257600080fd5b80630964c95b116103145780630964c95b146103a25780631b8b444c146103de5780631faee12e1461043957600080fd5b806301a546101461033b578063023ad6cb1461035057806304646a4914610399575b600080fd5b61034e61034936600461370d565b6108d5565b005b61038661035e36600461374f565b73ffffffffffffffffffffffffffffffffffffffff1660009081526013602052604090205490565b6040519081526020015b60405180910390f35b61038660085481565b6103c96103b036600461374f565b6010602052600090815260409020805460019091015482565b60408051928352602083019190915201610390565b6104146103ec36600461370d565b600a6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610390565b61044c61044736600461376a565b6108f6565b60405161039091906137ee565b610414610467366004613801565b610933565b61038661047a36600461374f565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c602052604090205490565b61034e6104b0366004613801565b610978565b61034e6104c3366004613877565b610ea1565b61034e6104d63660046138c7565b610eef565b6104fe6104e936600461374f565b60026020526000908152604090205460ff1681565b6040519015158152602001610390565b6004546104149073ffffffffffffffffffffffffffffffffffffffff1681565b61044c61053c36600461376a565b6113c8565b61034e61054f3660046138fe565b6113fb565b610386610562366004613991565b600f60209081526000928352604080842090915290825290205481565b61044c61058d36600461376a565b611927565b6104146105a0366004613801565b61195a565b61038662093a8081565b6103866105bd36600461374f565b600b6020526000908152604090205481565b61034e6105dd3660046139c4565b611976565b61034e611d41565b61034e6105f836600461374f565b611e6b565b61034e611fbc565b6103c9610613366004613991565b600d6020908152600092835260408084209091529082529020805460019091015482565b61064a610645366004613a04565b612142565b604051610390929190613a90565b61034e61066636600461370d565b61234b565b61038661067936600461374f565b73ffffffffffffffffffffffffffffffffffffffff1660009081526011602052604090205490565b6000546104149073ffffffffffffffffffffffffffffffffffffffff1681565b61034e6106cf36600461374f565b612418565b61034e6106e236600461374f565b6124b8565b6103866106f5366004613991565b601260209081526000928352604080842090915290825290205481565b61034e6107203660046138c7565b61255b565b61034e6107333660046138c7565b6129d5565b61034e61074636600461370d565b612a08565b6104fe61075936600461374f565b612a61565b61041461076c366004613801565b612a6c565b61041461077f366004613801565b612a88565b61038660055481565b61038661079b366004613991565b601460209081526000928352604080842090915290825290205481565b6001546104149073ffffffffffffffffffffffffffffffffffffffff1681565b61044c6107e636600461376a565b612aa4565b61081e6107f936600461374f565b60096020526000908152604090208054600182015460029092015460ff909116919083565b60405161039093929190613b02565b61038660075481565b61038660065481565b61034e61084d36600461374f565b612ad7565b61038661086036600461374f565b73ffffffffffffffffffffffffffffffffffffffff166000908152600e602052604090205490565b61034e61089636600461374f565b612c00565b61034e6108a936600461370d565b612c97565b6104147f000000000000000000000000000000000000000000000000000000000000000081565b6108e0336000612cf0565b5080156108f3576108f333826001611976565b50565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600c60205260409020606090610929908484612ee8565b90505b9392505050565b6013602052816000526040600020818154811061094f57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b6002600354036109e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600381905573ffffffffffffffffffffffffffffffffffffffff831660009081526009602052604090205460ff166003811115610a2a57610a2a613a26565b03610a91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f41756469746f7220667265657a6564000000000000000000000000000000000060448201526064016109e0565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600b602052604090205480610b1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6e6f7420612061756469746f720000000000000000000000000000000000000060448201526064016109e0565b60008211610b88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d20300000000000000000000000000000000000000000000060448201526064016109e0565b336000908152600d6020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152902060010154610c22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f6e6f207374616b6573000000000000000000000000000000000000000000000060448201526064016109e0565b336000908152600d6020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812060010154610c61908490613b50565b336000908152600d6020908152604080832073ffffffffffffffffffffffffffffffffffffffff891684528252808320600190810185905560099092528220015491925090610cb1908590613b50565b73ffffffffffffffffffffffffffffffffffffffff8616600090815260096020526040812060010182905560085491925003610d6257610d2873ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163386612fd2565b60405184815233907f1e85dc785ce23b2937c3586b4fe81fb37118b9318e9203bea983f2c5bb6ca5959060200160405180910390a2610d9e565b336000908152601060205260408120805490918691839190610d85908490613b67565b9091555050600854610d979042613b67565b6001909101555b600373ffffffffffffffffffffffffffffffffffffffff861660009081526009602052604090205460ff166003811115610dda57610dda613a26565b14158015610de9575060065481105b15610e3a5773ffffffffffffffffffffffffffffffffffffffff8516600090815260096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b604080518581526020810183905290810183905273ffffffffffffffffffffffffffffffffffffffff86169033907f9b136eeb809557ed5e1e9e2c64c0f8f0ffb70589653e529e831c55b9b4d5b4259060600160405180910390a350506001600355505050565b8060005b81811015610ee957610ed7848483818110610ec257610ec2613b7f565b90506020020160208101906105f8919061374f565b80610ee181613bae565b915050610ea5565b50505050565b336000908152601160209081526040808320546012835281842073ffffffffffffffffffffffffffffffffffffffff87168552909252909120548115801590610f915750336000908152601160205260409020805473ffffffffffffffffffffffffffffffffffffffff8616919083908110610f6d57610f6d613b7f565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b610ff7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f7420616e20656e646f72736572000000000000000000000000000000000060448201526064016109e0565b611002600183613b50565b8110156110e557336000908152601160205260408120611023600185613b50565b8154811061103357611033613b7f565b600091825260208083209091015433835260119091526040909120805473ffffffffffffffffffffffffffffffffffffffff909216925082918490811061107c5761107c613b7f565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9485161790553382526012815260408083209490931682529290925290208190555b33600081815260126020908152604080832073ffffffffffffffffffffffffffffffffffffffff891684528252808320839055928252601190522080548061112f5761112f613be6565b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff8616825260138152604080832054601483528184203385529092529091205490925090506111cf600183613b50565b8110156112ce5773ffffffffffffffffffffffffffffffffffffffff84166000908152601360205260408120611206600185613b50565b8154811061121657611216613b7f565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff88811684526013909252604090922080549190921692508291908490811061126357611263613b7f565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff94851617905587831682526014815260408083209490931682529290925290208190555b73ffffffffffffffffffffffffffffffffffffffff841660008181526014602090815260408083203384528252808320839055928252601390522080548061131857611318613be6565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055019055821561137f5761137f84611e6b565b60405173ffffffffffffffffffffffffffffffffffffffff85169033907fe5c389827ce15e9fd07feaa438467bebbe4f5f705c8035dbad53edd0ca4a850490600090a350505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152601360205260409020606090610929908484612ee8565b3360009081526002602052604090205460ff1661149a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016109e0565b600260035403611506576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109e0565b6002600381905573ffffffffffffffffffffffffffffffffffffffff871660009081526009602052604090205460ff16600381111561154757611547613a26565b146115ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f61756469746f72206e6f7420667265657a65640000000000000000000000000060448201526064016109e0565b82818114611618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6c656e677468206e6f74206d617463686564000000000000000000000000000060448201526064016109e0565b6000805b8282101561187e57600087878481811061163857611638613b7f565b905060200201602081019061164d919061374f565b9050600086868581811061166357611663613b7f565b905060200201359050600081600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546116f99190613b50565b905080600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550600082600960008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546117cf9190613b50565b73ffffffffffffffffffffffffffffffffffffffff8e16600090815260096020526040902060010181905590506118068386613b67565b604080518581526020810184905290810184905290955073ffffffffffffffffffffffffffffffffffffffff80861691908f16907fca396a14387af5b1b74d05a2307e3dbe06adbbbc22dc896fc7c19a09dcf1447d9060600160405180910390a350505050818061187690613bae565b92505061161c565b87156118d05773ffffffffffffffffffffffffffffffffffffffff8916600090815260096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b6004546119179073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116911683612fd2565b5050600160035550505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152601160205260409020606090610929908484612ee8565b6011602052816000526040600020818154811061094f57600080fd5b6002600354036119e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109e0565b600260035573ffffffffffffffffffffffffffffffffffffffff83166000908152600b6020526040902054611a73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6e6f7420612061756469746f720000000000000000000000000000000000000060448201526064016109e0565b60008211611add576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d20300000000000000000000000000000000000000000000060448201526064016109e0565b611ae6826130a6565b336000908152600c6020908152604080832054600d835281842073ffffffffffffffffffffffffffffffffffffffff8916855290925282209294509190821580611b8b5750336000908152600c602052604090208254815473ffffffffffffffffffffffffffffffffffffffff89169291908110611b6657611b66613b7f565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b15611c635750336000818152600c6020908152604080832080546001818101835591855283852001805473ffffffffffffffffffffffffffffffffffffffff8c167fffffffffffffffffffffffff00000000000000000000000000000000000000009182168117909255835180850185528981528086018c8152888852600d875285882093885292865284872090518155915191830191909155600e8085528386208054600f875285882089895287529487208590559085529183018255908452919092209091018054909116909117905583611c7d565b848260010154611c739190613b67565b6001830181905590505b73ffffffffffffffffffffffffffffffffffffffff8616600090815260096020526040812060010154611cb1908790613b67565b73ffffffffffffffffffffffffffffffffffffffff881660008181526009602090815260409182902060010184905581518a81529081018490529081018590529192509033907fc747caa404e8464088e0818bbf250e87484c9391ac8c1d91c89ecab18dee9e779060600160405180910390a38415611d3357611d3387611e6b565b505060016003555050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314611de8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016109e0565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b600273ffffffffffffffffffffffffffffffffffffffff821660009081526009602052604090205460ff166003811115611ea757611ea7613a26565b03611f0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f41756469746f7220667265657a6564000000000000000000000000000000000060448201526064016109e0565b600080611f1a8361325b565b73ffffffffffffffffffffffffffffffffffffffff851660009081526009602052604090206002810183905591935091506003815460ff166003811115611f6357611f63613a26565b14610ee95781611f74576000611f77565b60015b815482907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836003811115611fb157611fb1613a26565b021790555050505050565b600260035403612028576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109e0565b600260035533600090815260106020526040902060018101544210156120aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c65617365207761697400000000000000000000000000000000000000000060448201526064016109e0565b805433600081815260106020526040812081815560010155612104907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169083612fd2565b60405181815233907f1e85dc785ce23b2937c3586b4fe81fb37118b9318e9203bea983f2c5bb6ca5959060200160405180910390a250506001600355565b60608060055460016121549190613b67565b61215e8486613b67565b111561218057836005546121729190613b50565b61217d906001613b67565b92505b8267ffffffffffffffff81111561219957612199613c15565b6040519080825280602002602001820160405280156121c2578160200160208202803683370190505b5091508267ffffffffffffffff8111156121de576121de613c15565b60405190808252806020026020018201604052801561223457816020015b6122216040805160608101909152806000815260200160008152602001600081525090565b8152602001906001900390816121fc5790505b50905060005b83811015612343576000858152600a6020526040902054835173ffffffffffffffffffffffffffffffffffffffff90911690819085908490811061228057612280613b7f565b73ffffffffffffffffffffffffffffffffffffffff928316602091820292909201810191909152908216600090815260099091526040908190208151606081019092528054829060ff1660038111156122db576122db613a26565b60038111156122ec576122ec613a26565b81526020016001820154815260200160028201548152505083838151811061231657612316613b7f565b6020026020010181905250858061232c90613bae565b96505050808061233b90613bae565b91505061223a565b509250929050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461236f57600080fd5b62093a808111156123dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4d617820636f6f6c646f776e20706572696f64203e2031207765656b2100000060448201526064016109e0565b60088190556040518181527f94714a16ed27a5dc1201f16c27868fa024cb3b7420dd30baa7d06854c4cc54b3906020015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461243c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a7884910161240d565b60005473ffffffffffffffffffffffffffffffffffffffff1633146124dc57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161240d565b336000818152600b60205260409020549073ffffffffffffffffffffffffffffffffffffffff841690036125eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f63616e6e6f742073656c6620656e646f7273650000000000000000000000000060448201526064016109e0565b60008111612655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f656e646f72736572206973206e6f7420616e2061756469746f7200000000000060448201526064016109e0565b60013360009081526009602052604090205460ff16600381111561267b5761267b613a26565b14801561269c57506007543360009081526009602052604090206002015410155b806126ca575060033360009081526009602052604090205460ff1660038111156126c8576126c8613a26565b145b612756576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f656e646f72736572206973206e6f7420616e206163746976652061756469746f60448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016109e0565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600b60205260409020546127e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f656e646f72736565206973206e6f7420616e2061756469746f7200000000000060448201526064016109e0565b3360009081526011602052604090205480158061286a57503360009081526011602090815260408083206012835281842073ffffffffffffffffffffffffffffffffffffffff891680865293529220548254919291811061284557612845613b7f565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b6128d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f616c726561647920656e646f727365640000000000000000000000000000000060448201526064016109e0565b33600081815260116020908152604080832080546001818101835591855283852001805473ffffffffffffffffffffffffffffffffffffffff8b167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216811790925586865260128552838620828752855283862097909755601384528285208054928301815585528385208201805490971686179096559483526014825280832093835292905220819055821561298c5761298c84611e6b565b60405173ffffffffffffffffffffffffffffffffffffffff85169033907f13b3e4cc63f55d83a16f799af725d38dd09798d29ee1429b1c818cb0817c464d90600090a350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146129f957600080fd5b612a038282612cf0565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314612a2c57600080fd5b60078190556040518181527f070cb090db190acd8e64e84db704a8ac10aaa5a11e16a32c038ea2e5b3b3a7989060200161240d565b600061092c8261325b565b600c602052816000526040600020818154811061094f57600080fd5b600e602052816000526040600020818154811061094f57600080fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600e60205260409020606090610929908484612ee8565b60005473ffffffffffffffffffffffffffffffffffffffff163314612afb57600080fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600b602052604090205480612b88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f61756469746f72206e6f7420657869737400000000000000000000000000000060448201526064016109e0565b73ffffffffffffffffffffffffffffffffffffffff821660008181526009602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166002179055517f6b24759f2d48131bdd2553c4c99039db83d5b787b572f54dca27f5fb3c3ce2929190a25050565b60005473ffffffffffffffffffffffffffffffffffffffff163314612c2457600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161240d565b60005473ffffffffffffffffffffffffffffffffffffffff163314612cbb57600080fd5b60068190556040518181527fb4ca933a402e9f092188dbff00dbaaa4ef3c1596895be12fa213f0d509ea34709060200161240d565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600b602052604081205490819003612e4a57600560008154612d2d90613bae565b9190508190559050604051806060016040528083612d4c576000612d4f565b60035b6003811115612d6057612d60613a26565b815260006020808301829052604092830182905273ffffffffffffffffffffffffffffffffffffffff8716825260099052208151815482907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836003811115612dce57612dce613a26565b021790555060208281015160018301556040928301516002909201919091556000838152600a825282812080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff88169081179091558152600b90915220819055612e9f565b8115612e9f5773ffffffffffffffffffffffffffffffffffffffff8316600090815260096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660031790555b60405173ffffffffffffffffffffffffffffffffffffffff84169082907f97dd5b34cd63e6c0265c2c5a7ad12bc5b97e2dbe386080944ad25a3efa5aa4b590600090a392915050565b825460609080831115612ef9578092505b8267ffffffffffffffff811115612f1257612f12613c15565b604051908082528060200260200182016040528015612f3b578160200160208202803683370190505b50915060005b83811015612fc957858581548110612f5b57612f5b613b7f565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838281518110612f9857612f98613b7f565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015260019485019401612f41565b50509392505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052612a039084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152613441565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015613133573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131579190613c44565b905061319b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633308561354d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015613227573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061324b9190613c44565b6132559190613b50565b92915050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600b60205260408120548190806132ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f7420616e2061756469746f7200000000000000000000000000000000000060448201526064016109e0565b73ffffffffffffffffffffffffffffffffffffffff84166000908152601360205260408120805490915b818110156133d85760006009600085848154811061333457613334613b7f565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff168352820192909252604001902090506001815460ff16600381111561337f5761337f613a26565b1480156133925750600754816002015410155b806133b257506003815460ff1660038111156133b0576133b0613a26565b145b156133c557866133c181613bae565b9750505b50806133d081613bae565b915050613314565b5073ffffffffffffffffffffffffffffffffffffffff8616600090815260096020526040902060075486108015906134165750600654816001015410155b8061343657506003815460ff16600381111561343457613434613a26565b145b945050505050915091565b60006134a3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166135ab9092919063ffffffff16565b805190915015612a0357808060200190518101906134c19190613c5d565b612a03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016109e0565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ee99085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401613024565b606061092984846000858573ffffffffffffffffffffffffffffffffffffffff85163b613634576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109e0565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161365d9190613ca6565b60006040518083038185875af1925050503d806000811461369a576040519150601f19603f3d011682016040523d82523d6000602084013e61369f565b606091505b50915091506136af8282866136ba565b979650505050505050565b606083156136c957508161092c565b8251156136d95782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e09190613cc2565b60006020828403121561371f57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461374a57600080fd5b919050565b60006020828403121561376157600080fd5b61092c82613726565b60008060006060848603121561377f57600080fd5b61378884613726565b95602085013595506040909401359392505050565b600081518084526020808501945080840160005b838110156137e357815173ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016137b1565b509495945050505050565b60208152600061092c602083018461379d565b6000806040838503121561381457600080fd5b61381d83613726565b946020939093013593505050565b60008083601f84011261383d57600080fd5b50813567ffffffffffffffff81111561385557600080fd5b6020830191508360208260051b850101111561387057600080fd5b9250929050565b6000806020838503121561388a57600080fd5b823567ffffffffffffffff8111156138a157600080fd5b6138ad8582860161382b565b90969095509350505050565b80151581146108f357600080fd5b600080604083850312156138da57600080fd5b6138e383613726565b915060208301356138f3816138b9565b809150509250929050565b6000806000806000806080878903121561391757600080fd5b61392087613726565b95506020870135613930816138b9565b9450604087013567ffffffffffffffff8082111561394d57600080fd5b6139598a838b0161382b565b9096509450606089013591508082111561397257600080fd5b5061397f89828a0161382b565b979a9699509497509295939492505050565b600080604083850312156139a457600080fd5b6139ad83613726565b91506139bb60208401613726565b90509250929050565b6000806000606084860312156139d957600080fd5b6139e284613726565b92506020840135915060408401356139f9816138b9565b809150509250925092565b60008060408385031215613a1757600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60048110613a8c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b60006040808352613aa38184018661379d565b83810360208581019190915285518083528682019282019060005b81811015613af4578451613ad3848251613a55565b80850151848601528601518684015293830193606090920191600101613abe565b509098975050505050505050565b60608101613b108286613a55565b602082019390935260400152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015613b6257613b62613b21565b500390565b60008219821115613b7a57613b7a613b21565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613bdf57613bdf613b21565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208284031215613c5657600080fd5b5051919050565b600060208284031215613c6f57600080fd5b815161092c816138b9565b60005b83811015613c95578181015183820152602001613c7d565b83811115610ee95750506000910152565b60008251613cb8818460208701613c7a565b9190910192915050565b6020815260008251806020840152613ce1816040850160208701613c7a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220dc6857b3d2d92acfa2bb4f51c04a7eb895c1cec2049677eee88af6782377e9c064736f6c634300080d0033"
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
            return this.__deploy([params.token, params.foundation, this.wallet.utils.toString(params.minStakes), this.wallet.utils.toString(params.minEndorsementsRequired), this.wallet.utils.toString(params.cooldownPeriod)], options);
        }
        parseAddAuditorEvent(receipt) {
            return this.parseEvents(receipt, "AddAuditor").map(e => this.decodeAddAuditorEvent(e));
        }
        decodeAddAuditorEvent(event) {
            let result = event.data;
            return {
                auditorId: new eth_contract_2.BigNumber(result.auditorId),
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
        parseEndorseAuditorEvent(receipt) {
            return this.parseEvents(receipt, "EndorseAuditor").map(e => this.decodeEndorseAuditorEvent(e));
        }
        decodeEndorseAuditorEvent(event) {
            let result = event.data;
            return {
                endorser: result.endorser,
                endorsee: result.endorsee,
                _event: event
            };
        }
        parseFreezeAuditorEvent(receipt) {
            return this.parseEvents(receipt, "FreezeAuditor").map(e => this.decodeFreezeAuditorEvent(e));
        }
        decodeFreezeAuditorEvent(event) {
            let result = event.data;
            return {
                auditor: result.auditor,
                _event: event
            };
        }
        parsePenalizeEvent(receipt) {
            return this.parseEvents(receipt, "Penalize").map(e => this.decodePenalizeEvent(e));
        }
        decodePenalizeEvent(event) {
            let result = event.data;
            return {
                auditor: result.auditor,
                staker: result.staker,
                amount: new eth_contract_2.BigNumber(result.amount),
                auditorBalance: new eth_contract_2.BigNumber(result.auditorBalance),
                stakerAuditorBalance: new eth_contract_2.BigNumber(result.stakerAuditorBalance),
                _event: event
            };
        }
        parseRevokeEndorsementEvent(receipt) {
            return this.parseEvents(receipt, "RevokeEndorsement").map(e => this.decodeRevokeEndorsementEvent(e));
        }
        decodeRevokeEndorsementEvent(event) {
            let result = event.data;
            return {
                endorser: result.endorser,
                endorsee: result.endorsee,
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
        parseSetMinEndorsementsRequiredEvent(receipt) {
            return this.parseEvents(receipt, "SetMinEndorsementsRequired").map(e => this.decodeSetMinEndorsementsRequiredEvent(e));
        }
        decodeSetMinEndorsementsRequiredEvent(event) {
            let result = event.data;
            return {
                minEndorsementsRequired: new eth_contract_2.BigNumber(result.minEndorsementsRequired),
                _event: event
            };
        }
        parseSetMinStakesEvent(receipt) {
            return this.parseEvents(receipt, "SetMinStakes").map(e => this.decodeSetMinStakesEvent(e));
        }
        decodeSetMinStakesEvent(event) {
            let result = event.data;
            return {
                minStakes: new eth_contract_2.BigNumber(result.minStakes),
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
                auditor: result.auditor,
                amount: new eth_contract_2.BigNumber(result.amount),
                auditorBalance: new eth_contract_2.BigNumber(result.auditorBalance),
                stakerAuditorBalance: new eth_contract_2.BigNumber(result.stakerAuditorBalance),
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
                auditor: result.auditor,
                amount: new eth_contract_2.BigNumber(result.amount),
                auditorBalance: new eth_contract_2.BigNumber(result.auditorBalance),
                stakerAuditorBalance: new eth_contract_2.BigNumber(result.stakerAuditorBalance),
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
            let auditors_call = async (param1, options) => {
                let result = await this.call('auditors', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.auditors = auditors_call;
            let auditorsData_call = async (param1, options) => {
                let result = await this.call('auditorsData', [param1], options);
                return {
                    status: new eth_contract_2.BigNumber(result.status),
                    balance: new eth_contract_2.BigNumber(result.balance),
                    endorsementCount: new eth_contract_2.BigNumber(result.endorsementCount)
                };
            };
            this.auditorsData = auditorsData_call;
            let cooldownPeriod_call = async (options) => {
                let result = await this.call('cooldownPeriod', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.cooldownPeriod = cooldownPeriod_call;
            let endorsedByParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let endorsedBy_call = async (params, options) => {
                let result = await this.call('endorsedBy', endorsedByParams(params), options);
                return result;
            };
            this.endorsedBy = endorsedBy_call;
            let endorsedByInvParams = (params) => [params.param1, params.param2];
            let endorsedByInv_call = async (params, options) => {
                let result = await this.call('endorsedByInv', endorsedByInvParams(params), options);
                return new eth_contract_2.BigNumber(result);
            };
            this.endorsedByInv = endorsedByInv_call;
            let endorsedByLength_call = async (endorsee, options) => {
                let result = await this.call('endorsedByLength', [endorsee], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.endorsedByLength = endorsedByLength_call;
            let endorsingParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let endorsing_call = async (params, options) => {
                let result = await this.call('endorsing', endorsingParams(params), options);
                return result;
            };
            this.endorsing = endorsing_call;
            let endorsingInvParams = (params) => [params.param1, params.param2];
            let endorsingInv_call = async (params, options) => {
                let result = await this.call('endorsingInv', endorsingInvParams(params), options);
                return new eth_contract_2.BigNumber(result);
            };
            this.endorsingInv = endorsingInv_call;
            let endorsingLength_call = async (endorser, options) => {
                let result = await this.call('endorsingLength', [endorser], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.endorsingLength = endorsingLength_call;
            let foundation_call = async (options) => {
                let result = await this.call('foundation', [], options);
                return result;
            };
            this.foundation = foundation_call;
            let getAuditorsParams = (params) => [this.wallet.utils.toString(params.auditorIdStart), this.wallet.utils.toString(params.length)];
            let getAuditors_call = async (params, options) => {
                let result = await this.call('getAuditors', getAuditorsParams(params), options);
                return {
                    auditors: result._auditors,
                    auditorsData: result._auditorsData.map(e => ({
                        status: new eth_contract_2.BigNumber(e.status),
                        balance: new eth_contract_2.BigNumber(e.balance),
                        endorsementCount: new eth_contract_2.BigNumber(e.endorsementCount)
                    }))
                };
            };
            this.getAuditors = getAuditors_call;
            let getEndorsedByParams = (params) => [params.endorsee, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
            let getEndorsedBy_call = async (params, options) => {
                let result = await this.call('getEndorsedBy', getEndorsedByParams(params), options);
                return result;
            };
            this.getEndorsedBy = getEndorsedBy_call;
            let getEndorsingParams = (params) => [params.endorser, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
            let getEndorsing_call = async (params, options) => {
                let result = await this.call('getEndorsing', getEndorsingParams(params), options);
                return result;
            };
            this.getEndorsing = getEndorsing_call;
            let getStakedByParams = (params) => [params.auditor, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
            let getStakedBy_call = async (params, options) => {
                let result = await this.call('getStakedBy', getStakedByParams(params), options);
                return result;
            };
            this.getStakedBy = getStakedBy_call;
            let getStakerAuditorParams = (params) => [params.staker, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
            let getStakerAuditor_call = async (params, options) => {
                let result = await this.call('getStakerAuditor', getStakerAuditorParams(params), options);
                return result;
            };
            this.getStakerAuditor = getStakerAuditor_call;
            let isActiveAuditor_call = async (auditor, options) => {
                let result = await this.call('isActiveAuditor', [auditor], options);
                return result;
            };
            this.isActiveAuditor = isActiveAuditor_call;
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let minEndorsementsRequired_call = async (options) => {
                let result = await this.call('minEndorsementsRequired', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.minEndorsementsRequired = minEndorsementsRequired_call;
            let minStakes_call = async (options) => {
                let result = await this.call('minStakes', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.minStakes = minStakes_call;
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
                let result = await this.call('pendingWithdrawal', [param1], options);
                return {
                    amount: new eth_contract_2.BigNumber(result.amount),
                    releaseTime: new eth_contract_2.BigNumber(result.releaseTime)
                };
            };
            this.pendingWithdrawal = pendingWithdrawal_call;
            let stakeToParams = (params) => [params.param1, params.param2];
            let stakeTo_call = async (params, options) => {
                let result = await this.call('stakeTo', stakeToParams(params), options);
                return {
                    index: new eth_contract_2.BigNumber(result.index),
                    balance: new eth_contract_2.BigNumber(result.balance)
                };
            };
            this.stakeTo = stakeTo_call;
            let stakedByParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let stakedBy_call = async (params, options) => {
                let result = await this.call('stakedBy', stakedByParams(params), options);
                return result;
            };
            this.stakedBy = stakedBy_call;
            let stakedByInvParams = (params) => [params.param1, params.param2];
            let stakedByInv_call = async (params, options) => {
                let result = await this.call('stakedByInv', stakedByInvParams(params), options);
                return new eth_contract_2.BigNumber(result);
            };
            this.stakedByInv = stakedByInv_call;
            let stakedByLength_call = async (auditor, options) => {
                let result = await this.call('stakedByLength', [auditor], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.stakedByLength = stakedByLength_call;
            let stakerAuditorParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let stakerAuditor_call = async (params, options) => {
                let result = await this.call('stakerAuditor', stakerAuditorParams(params), options);
                return result;
            };
            this.stakerAuditor = stakerAuditor_call;
            let stakerAuditorLength_call = async (staker, options) => {
                let result = await this.call('stakerAuditorLength', [staker], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.stakerAuditorLength = stakerAuditorLength_call;
            let token_call = async (options) => {
                let result = await this.call('token', [], options);
                return result;
            };
            this.token = token_call;
            let addAuditorParams = (params) => [params.auditor, params.isSuperAuditor];
            let addAuditor_send = async (params, options) => {
                let result = await this.send('addAuditor', addAuditorParams(params), options);
                return result;
            };
            let addAuditor_call = async (params, options) => {
                let result = await this.call('addAuditor', addAuditorParams(params), options);
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
            let endorseAuditorParams = (params) => [params.auditor, params.doUpdate];
            let endorseAuditor_send = async (params, options) => {
                let result = await this.send('endorseAuditor', endorseAuditorParams(params), options);
                return result;
            };
            let endorseAuditor_call = async (params, options) => {
                let result = await this.call('endorseAuditor', endorseAuditorParams(params), options);
                return;
            };
            this.endorseAuditor = Object.assign(endorseAuditor_send, {
                call: endorseAuditor_call
            });
            let freezeAuditor_send = async (auditor, options) => {
                let result = await this.send('freezeAuditor', [auditor], options);
                return result;
            };
            let freezeAuditor_call = async (auditor, options) => {
                let result = await this.call('freezeAuditor', [auditor], options);
                return;
            };
            this.freezeAuditor = Object.assign(freezeAuditor_send, {
                call: freezeAuditor_call
            });
            let penalizeParams = (params) => [params.auditor, params.unfreezeAuditor, params.staker, this.wallet.utils.toString(params.amount)];
            let penalize_send = async (params, options) => {
                let result = await this.send('penalize', penalizeParams(params), options);
                return result;
            };
            let penalize_call = async (params, options) => {
                let result = await this.call('penalize', penalizeParams(params), options);
                return;
            };
            this.penalize = Object.assign(penalize_send, {
                call: penalize_call
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
            let registerAuditor_send = async (amount, options) => {
                let result = await this.send('registerAuditor', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let registerAuditor_call = async (amount, options) => {
                let result = await this.call('registerAuditor', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.registerAuditor = Object.assign(registerAuditor_send, {
                call: registerAuditor_call
            });
            let revokeEndorsementParams = (params) => [params.auditor, params.doUpdate];
            let revokeEndorsement_send = async (params, options) => {
                let result = await this.send('revokeEndorsement', revokeEndorsementParams(params), options);
                return result;
            };
            let revokeEndorsement_call = async (params, options) => {
                let result = await this.call('revokeEndorsement', revokeEndorsementParams(params), options);
                return;
            };
            this.revokeEndorsement = Object.assign(revokeEndorsement_send, {
                call: revokeEndorsement_call
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
            let setMinEndorsementsRequired_send = async (minEndorsementsRequired, options) => {
                let result = await this.send('setMinEndorsementsRequired', [this.wallet.utils.toString(minEndorsementsRequired)], options);
                return result;
            };
            let setMinEndorsementsRequired_call = async (minEndorsementsRequired, options) => {
                let result = await this.call('setMinEndorsementsRequired', [this.wallet.utils.toString(minEndorsementsRequired)], options);
                return;
            };
            this.setMinEndorsementsRequired = Object.assign(setMinEndorsementsRequired_send, {
                call: setMinEndorsementsRequired_call
            });
            let setMinStakes_send = async (minStakes, options) => {
                let result = await this.send('setMinStakes', [this.wallet.utils.toString(minStakes)], options);
                return result;
            };
            let setMinStakes_call = async (minStakes, options) => {
                let result = await this.call('setMinStakes', [this.wallet.utils.toString(minStakes)], options);
                return;
            };
            this.setMinStakes = Object.assign(setMinStakes_send, {
                call: setMinStakes_call
            });
            let stakeBondParams = (params) => [params.auditor, this.wallet.utils.toString(params.amount), params.doUpdate];
            let stakeBond_send = async (params, options) => {
                let result = await this.send('stakeBond', stakeBondParams(params), options);
                return result;
            };
            let stakeBond_call = async (params, options) => {
                let result = await this.call('stakeBond', stakeBondParams(params), options);
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
            let unstakeBondRequestParams = (params) => [params.auditor, this.wallet.utils.toString(params.amount)];
            let unstakeBondRequest_send = async (params, options) => {
                let result = await this.send('unstakeBondRequest', unstakeBondRequestParams(params), options);
                return result;
            };
            let unstakeBondRequest_call = async (params, options) => {
                let result = await this.call('unstakeBondRequest', unstakeBondRequestParams(params), options);
                return;
            };
            this.unstakeBondRequest = Object.assign(unstakeBondRequest_send, {
                call: unstakeBondRequest_call
            });
            let updateAuditorState_send = async (auditor, options) => {
                let result = await this.send('updateAuditorState', [auditor], options);
                return result;
            };
            let updateAuditorState_call = async (auditor, options) => {
                let result = await this.call('updateAuditorState', [auditor], options);
                return;
            };
            this.updateAuditorState = Object.assign(updateAuditorState_send, {
                call: updateAuditorState_call
            });
            let updateAuditorStateInBatch_send = async (auditors, options) => {
                let result = await this.send('updateAuditorStateInBatch', [auditors], options);
                return result;
            };
            let updateAuditorStateInBatch_call = async (auditors, options) => {
                let result = await this.call('updateAuditorStateInBatch', [auditors], options);
                return;
            };
            this.updateAuditorStateInBatch = Object.assign(updateAuditorStateInBatch_send, {
                call: updateAuditorStateInBatch_call
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
        "bytecode": "60a06040523480156200001157600080fd5b506040516200557a3803806200557a833981016040819052620000349162000088565b600080546001600160a01b0319908116331790915560016003556001600160a01b0392831660805260048054929093169116179055620000c7565b6001600160a01b03811681146200008557600080fd5b50565b600080604083850312156200009c57600080fd5b8251620000a9816200006f565b6020840151909250620000bc816200006f565b809150509250929050565b60805161547b620000ff600039600081816109270152818161261a01528181613e2401528181613ec00152613f18015261547b6000f3fe608060405234801561001057600080fd5b506004361061036d5760003560e01c80638da5cb5b116101d3578063c341468311610104578063f032a6c5116100a2578063fb10856d1161007c578063fb10856d146108d7578063fb34907814610902578063fc0c546a14610922578063fc7a86ae1461094957600080fd5b8063f032a6c51461085d578063f2fde38b14610899578063f88668c5146108ac57600080fd5b8063ccbeffc2116100de578063ccbeffc2146107c9578063d4ee1d90146107ff578063d99f367f1461081f578063dfecbd8e1461084a57600080fd5b8063c341468314610790578063c727a2ea146107a3578063c9d6b13d146107b657600080fd5b8063abcfb19011610171578063bfadf0421161014b578063bfadf0421461070e578063c107979214610739578063c113aeb014610759578063c216212a1461076c57600080fd5b8063abcfb190146106c8578063ac1c4f4c146106db578063beaf2d35146106fb57600080fd5b80639e2c8a5b116101ad5780639e2c8a5b1461067c578063a2f55ae51461068f578063a6ddbf69146106a2578063a828477c146106b557600080fd5b80638da5cb5b1461061e578063977f39701461063e5780639c52a7f11461066957600080fd5b806336fbad26116102ad578063758a5b031161024b5780637d8c0ef1116102255780637d8c0ef1146105af57806387899a36146105c257806387bfc51f146105d557806389fe08f8146105e857600080fd5b8063758a5b03146105765780637b0472f0146105895780637b2246dc1461059c57600080fd5b8063557de32811610287578063557de328146104ff578063605361721461053757806371b439c61461053f578063723dd3da1461055257600080fd5b806336fbad26146104bb5780633fd8cc4e146104c45780634f24c5fa146104f757600080fd5b806329d1e7491161031a57806332799c57116102f457806332799c5714610457578063368e98521461048257806336b44a191461049557806336c9ac76146104a857600080fd5b806329d1e749146103f757806329d91b6c146104175780632e0cc82b1461043757600080fd5b806311187a5f1161034b57806311187a5f146103b15780631251c946146103c457806324115090146103d757600080fd5b8063068c539114610372578063087d9886146103875780630d1706731461039e575b600080fd5b610385610380366004614b1b565b61097f565b005b6011545b6040519081526020015b60405180910390f35b6103856103ac366004614b90565b610ba3565b6103856103bf366004614b90565b610e07565b6103856103d2366004614bdc565b610fd2565b61038b6103e5366004614bdc565b6000908152600f602052604090205490565b61038b610405366004614bdc565b60009081526018602052604090205490565b61042a610425366004614bf5565b6110fb565b6040516103959190614c8d565b61038b610445366004614bdc565b60009081526016602052604090205490565b61038b610465366004614ca0565b600d60209081526000928352604080842090915290825290205481565b610385610490366004614b1b565b6111a0565b61038b6104a3366004614cca565b61143a565b61042a6104b6366004614bdc565b6117d8565b61038b60055481565b6104e76104d2366004614d4d565b60026020526000908152604090205460ff1681565b6040519015158152602001610395565b60125461038b565b61051261050d366004614bf5565b6117f1565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610395565b610385611836565b61038b61054d366004614bf5565b611960565b610565610560366004614bdc565b611991565b604051610395959493929190614dab565b61038b610584366004614e04565b611a81565b610385610597366004614bf5565b611c62565b6103856105aa366004614b1b565b611df3565b61038b6105bd366004614ca0565b612126565b6103856105d0366004614e70565b612142565b6105126105e3366004614bf5565b612400565b6105126105f6366004614bdc565b600b6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6000546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b61064c366004614b1b565b601060209081526000928352604080842090915290825290205481565b610385610677366004614d4d565b61241c565b61038561068a366004614bf5565b6124c3565b61038561069d366004614d4d565b61267b565b6103856106b0366004614b1b565b61271e565b61042a6106c3366004614bdc565b6129d6565b6103856106d6366004614e70565b6129ef565b6004546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b610709366004614ee6565b612c33565b61038b61071c366004614b1b565b601760209081526000928352604080842090915290825290205481565b61038b610747366004614bdc565b60009081526013602052604090205490565b610385610767366004614bdc565b6132ac565b61077f61077a366004614bdc565b6133d0565b604051610395959493929190614fb4565b61038561079e366004614b90565b6134a2565b6103856107b1366004614bdc565b613678565b61038b6107c4366004614bf5565b613806565b61038b6107d7366004614d4d565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c602052604090205490565b6001546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b61082d366004614ca0565b600760209081526000928352604080842090915290825290205481565b610385610858366004614b1b565b613822565b61038b61086b3660046150a6565b6015602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6103856108a7366004614d4d565b613905565b61038b6108ba3660046150ed565b805160208183018101805160098252928201919093012091525481565b61038b6108e5366004614bf5565b601960209081526000928352604080842090915290825290205481565b61038b610910366004614bdc565b60066020526000908152604090205481565b6105127f000000000000000000000000000000000000000000000000000000000000000081565b610512610957366004614bdc565b600e6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314610a13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e657200000000000000000000000000000000000060448201526064015b60405180910390fd5b6000838152600f60205260409020541580610a9857506000838152600f602090815260408083206010835281842073ffffffffffffffffffffffffffffffffffffffff8716808652935292205482549192918110610a7357610a73615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b610afe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c726561647920612061646d696e00000000000000000000000000000000006044820152606401610a0a565b6000838152600f6020818152604080842080546010845282862073ffffffffffffffffffffffffffffffffffffffff891680885290855283872082905594845260018101825590855291842090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168317905551909185917f223ed65ee8c25e2e5c9d766412212deb5a8966c1a32b6608f0e65bd7f1ff89359190a3505050565b6000838152600f6020526040902054839015801590610c1557506000818152600f602090815260408083206010835281842033808652935292205482549192918110610bf157610bf1615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80610c4357506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b610ca9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b600083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929350610cf1925087915083905061399c565b610d57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6a656374206e616d650000000000000000000000006044820152606401610a0a565b600085815260086020526040908190209051600991610d75916151a4565b908152604080516020928190038301902060009081905587815260088352208251610da2928401906149c7565b5084600982604051610db49190615276565b908152602001604051809103902081905550847fdaa562afcb682535ccff278b5881e249435b61d592905fa2fe0f33a9a363e11b8585604051610df89291906152db565b60405180910390a25050505050565b6000838152600f6020526040902054839015801590610e7957506000818152600f602090815260408083206010835281842033808652935292205482549192918110610e5557610e55615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80610ea757506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b610f0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6005548410610f78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c69642070726f6a65637449640000000000000000000000000000006044820152606401610a0a565b6000848152600a60205260409020610f91908484614a4b565b50837fc3aaa2655bd006e3aa89d43d7df93d47dd9392fec712a0ffea9e2fd5b58f7b388484604051610fc49291906152db565b60405180910390a250505050565b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff16331461105f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742066726f6d206e6577206f776e657200000000000000000000000000006044820152606401610a0a565b6000818152600b6020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000008082163317909255600e9093529220805490921690915573ffffffffffffffffffffffffffffffffffffffff166110ca8183613b2a565b604051339083907fd76f6b3fb9ea3802f0403d54d37db427cea79df08cd8817552eb23790d2b549190600090a35050565b60146020908152600092835260408084209091529082529020805461111f90615151565b80601f016020809104026020016040519081016040528092919081815260200182805461114b90615151565b80156111985780601f1061116d57610100808354040283529160200191611198565b820191906000526020600020905b81548152906001019060200180831161117b57829003601f168201915b505050505081565b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff16331461122f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b600083815260106020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452825280832054868452600f9092528220549091906112799060019061531e565b90508082101561134c576000858152600f602052604081208054839081106112a3576112a3615122565b600091825260208083209091015488835260108252604080842073ffffffffffffffffffffffffffffffffffffffff909216808552918352808420879055898452600f9092529120805491925082918590811061130257611302615122565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b600085815260106020908152604080832073ffffffffffffffffffffffffffffffffffffffff881684528252808320839055878352600f909152902080548061139757611397615335565b60008281526020812082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590910190915560405173ffffffffffffffffffffffffffffffffffffffff86169187917f6f99f547e1793782dd433d72ded398bd72f423ed3fe41650df9b0fae5008f33d9190a35050505050565b6000868152600f60205260408120548790158015906114ac57506000818152600f60209081526040808320601083528184203380865293529220548254919291811061148857611488615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806114da57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b611540576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011805490509150600087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061159192508b915085905083613c84565b6115f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c6964207061636b616765206e616d650000000000000000000000006044820152606401610a0a565b60116040518060a001604052808b81526020016000815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020810189905260400160019052815460018181018455600093845260209384902083516005909302019182558383015190820155604082015180519293919261169a92600285019201906149c7565b506060820151600382015560808201516004820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183818111156116e5576116e5614d68565b02179055505050600089815260146020908152604080832086845282529091208251611713928401906149c7565b5082601560008b8152602001908152602001600020826040516117369190615276565b90815260408051602092819003830190209290925560008b8152601882528281208054600181018255908252828220018690558b8152601a90915220548151111561178d57805160008a8152601a60205260409020555b82897ffa6aee631c6b190fd8d9fbeda093ea95ec6e8f4b2d87cd3884a4445ffd9211208a8a89896040516117c49493929190615364565b60405180910390a350509695505050505050565b600a602052600090815260409020805461111f90615151565b6016602052816000526040600020818154811061180d57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146118dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a0a565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b6013602052816000526040600020818154811061197c57600080fd5b90600052602060002001600091509150505481565b601281815481106119a157600080fd5b600091825260209182902060079091020180546040805160608101825260018401548152600284015494810194909452600383015490840152600482015460058301805492955060ff90911692916119f890615151565b80601f0160208091040260200160405190810160405280929190818152602001828054611a2490615151565b8015611a715780601f10611a4657610100808354040283529160200191611a71565b820191906000526020600020905b815481529060010190602001808311611a5457829003601f168201915b5050505050908060060154905085565b600554604080516020601f87018190048102820181019092528581526000918790879081908401838280828437600092019190915250929350611aca925084915083905061399c565b611b30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6a656374206e616d650000000000000000000000006044820152606401610a0a565b6000828152600b6020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091558352600c82528083208054600d8452828520878652845282852081905560018101825590845282842001859055848352600882529091208251611bb1928401906149c7565b5081600982604051611bc39190615276565b9081526040805160209281900383019020929092556000848152600a90915220611bee908585614a4b565b5060058054906000611bff8361538b565b91905055503373ffffffffffffffffffffffffffffffffffffffff16827f9ab04f24c89dafa22164ed8f6de07a0b21fb8d93a7b761ef1212fc9a997e8d5388888888604051611c519493929190615364565b60405180910390a350949350505050565b600260035403611cce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a0a565b600260035580611d3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610a0a565b611d4381613df3565b33600090815260076020908152604080832086845290915281205491925090611d6d9083906153c3565b33600090815260076020908152604080832087845282528083208490556006909152812080549293508492909190611da69084906153c3565b90915550506040805183815260208101839052849133917ff556991011e831bcfac4f406d547e5e32cdd98267efab83935230d5f8d02c44691015b60405180910390a35050600160035550565b60115482908110611e60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b600060118281548110611e7557611e75615122565b6000918252602080832060059092029091018054808452600b9092526040909220549192509073ffffffffffffffffffffffffffffffffffffffff163314611f19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b600085815260176020908152604080832073ffffffffffffffffffffffffffffffffffffffff881684528252808320548884526016909252822054909190611f639060019061531e565b905080821015612036576000878152601660205260408120805483908110611f8d57611f8d615122565b60009182526020808320909101548a835260178252604080842073ffffffffffffffffffffffffffffffffffffffff9092168085529183528084208790558b8452601690925291208054919250829185908110611fec57611fec615122565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b600087815260176020908152604080832073ffffffffffffffffffffffffffffffffffffffff8a16845282528083208390558983526016909152902080548061208157612081615335565b60008281526020812082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590910190915560405173ffffffffffffffffffffffffffffffffffffffff88169189917f68ae736c2c34a7e53507d009996d4f68a3f4daa5386f03f5672bfae701d4078a9190a350505050505050565b600c602052816000526040600020818154811061197c57600080fd5b6000848152600f60205260409020548490158015906121b457506000818152600f60209081526040808320601083528184203380865293529220548254919291811061219057612190615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806121e257506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612248576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b600083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929350612291925088915087905083613c84565b6122f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c6964207061636b616765206e616d650000000000000000000000006044820152606401610a0a565b6000868152601560209081526040808320601483528184208985529092529182902091519091612326916151a4565b908152604080516020928190038301902060009081905588815260148352818120888252835220825161235b928401906149c7565b5084601560008881526020019081526020016000208260405161237e9190615276565b908152602001604051809103902081905550601a600087815260200190815260200160002054815111156123be5780516000878152601a60205260409020555b847ffefb07da0d267ba7a9bdd0d55154b06358bbac3326916bcaeedc87adbcdb3d0385856040516123f09291906152db565b60405180910390a2505050505050565b600f602052816000526040600020818154811061180d57600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff16331461244057600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60026003540361252f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a0a565b60026003558061259b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610a0a565b3360009081526007602090815260408083208584529091528120546125c190839061531e565b336000908152600760209081526040808320878452825280832084905560069091528120805492935084929091906125fa90849061531e565b90915550612641905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163384613fa2565b6040805183815260208101839052849133917ffbd65cfd6de1493db337385c0712095397ecbd0504df64b861cdfceb80c7b4229101611de1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461269f57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016124b8565b6011548290811061278b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b6000601182815481106127a0576127a0615122565b6000918252602080832060059092029091018054808452600b9092526040909220549192509073ffffffffffffffffffffffffffffffffffffffff163314612844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b60008581526016602052604090205415806128c9575060008581526016602090815260408083206017835281842073ffffffffffffffffffffffffffffffffffffffff89168086529352922054825491929181106128a4576128a4615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b61292f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c726561647920612061646d696e00000000000000000000000000000000006044820152606401610a0a565b600085815260166020818152604080842080546017845282862073ffffffffffffffffffffffffffffffffffffffff8b1680885290855283872082905594845260018101825590855291842090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168317905551909187917f1e2202e3f0fa61b74c5e417a0c222f963a53a4a02cac56ef30069e6f7335347a9190a35050505050565b6008602052600090815260409020805461111f90615151565b6000848152600f6020526040902054849015801590612a6157506000818152600f602090815260408083206010835281842033808652935292205482549192918110612a3d57612a3d615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80612a8f57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612af5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011548410612b60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b600060118581548110612b7557612b75615122565b9060005260206000209060050201905085816000015414612bf2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70726f6a65637449642f7061636b6167654964206e6f74206d617463680000006044820152606401610a0a565b612c00600282018585614a4b565b50847f26fb0729afd95719cada7729b90195198a6f35edd9383154a3c42ed9f973911f85856040516123f09291906152db565b6000858152600f6020526040812054869015801590612ca557506000818152600f602090815260408083206010835281842033808652935292205482549192918110612c8157612c81615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80612cd357506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612d39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011548610612da4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b8660118781548110612db857612db8615122565b90600052602060002090600502016000015414612e31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70726f6a65637449642f7061636b6167654964206e6f74206d617463680000006044820152606401610a0a565b6000868152601360205260409020548015613132576000878152601360205260408120612e5f60018461531e565b81548110612e6f57612e6f615122565b90600052602060002001549050600060128281548110612e9157612e91615122565b60009182526020918290206040805160a08101825260079093029091018054835281516060810183526001820154815260028083015482870152600383015482850152948401526004810154929390929184019160ff1690811115612ef857612ef8614d68565b6002811115612f0957612f09614d68565b8152602001600582018054612f1d90615151565b80601f0160208091040260200160405190810160405280929190818152602001828054612f4990615151565b8015612f965780601f10612f6b57610100808354040283529160200191612f96565b820191906000526020600020905b815481529060010190602001808311612f7957829003601f168201915b5050505050815260200160068201548152505090508760000151816020015160000151036130c05787602001518160200151602001510361304b57806020015160400151886040015111613046576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f70617463682076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b61312f565b806020015160200151886020015111613046576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6d696e6f722076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b60208101515188511161312f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6d616a6f722076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b50505b601280546000898152601360209081526040808320805460018101825590845282842001849055805160a0810182528c81529182018b905292965091820190815260200187878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250504260209384015250835460018181018655948252908290208351600790920201908155828201518051828601559182015160028083019190915560409283015160038301559183015160048201805494959294919390927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009092169190849081111561323b5761323b614d68565b02179055506060820151805161325b9160058401916020909101906149c7565b5060808201518160060155505082877f30b46001c7b708476546827f01ccfda71f20291b9283deca04e05953fc5915888860405161329991906153db565b60405180910390a3505095945050505050565b6012548110613317576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b60006012828154811061332c5761332c615122565b6000918252602090912060079091020190506002600482015460ff16600281111561335957613359614d68565b036133c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f616c726561647920766f696465640000000000000000000000000000000000006044820152606401610a0a565b6133cc8183600261407b565b5050565b601181815481106133e057600080fd5b906000526020600020906005020160009150905080600001549080600101549080600201805461340f90615151565b80601f016020809104026020016040519081016040528092919081815260200182805461343b90615151565b80156134885780601f1061345d57610100808354040283529160200191613488565b820191906000526020600020905b81548152906001019060200180831161346b57829003601f168201915b50505050600383015460049093015491929160ff16905085565b601254831061350d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b60006012848154811061352257613522615122565b6000918252602082206007909102019150600482015460ff16600281111561354c5761354c614d68565b146135b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420756e64657220776f726b696e670000000000000000000000000000006044820152606401610a0a565b80546135be90614101565b613624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b613632600582018484614a4b565b508381600001547f097b4eb6f8403c2a7c0a11a6030a86be5f926638aa685eb855dcb634bffa6272858560405161366a9291906152db565b60405180910390a350505050565b60125481106136e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b6000601282815481106136f8576136f8615122565b6000918252602082206007909102019150600482015460ff16600281111561372257613722614d68565b14613789576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420756e64657220776f726b696e670000000000000000000000000000006044820152606401610a0a565b805461379490614101565b6137fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6133cc8183600161407b565b6018602052816000526040600020818154811061197c57600080fd5b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146138b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b506000918252600e602052604090912080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461392957600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016124b8565b600081516000036139af57506000613b24565b6000838152601a60205260408120546139c95760016139d9565b6000848152601a60205260409020545b90506139e76001606461531e565b8184516139f491906153c3565b1115613a04576000915050613b24565b83600984604051613a159190615276565b90815260200160405180910390205414613b1757600060086000600986604051613a3f9190615276565b90815260200160405180910390205481526020019081526020016000208054613a6790615151565b80601f0160208091040260200160405190810160405280929190818152602001828054613a9390615151565b8015613ae05780601f10613ab557610100808354040283529160200191613ae0565b820191906000526020600020905b815481529060010190602001808311613ac357829003601f168201915b5050505050905080518451148015613b05575080805190602001208480519060200120145b15613b1557600092505050613b24565b505b613b208361425b565b9150505b92915050565b73ffffffffffffffffffffffffffffffffffffffff82166000818152600d60209081526040808320858452825280832054938352600c909152812054613b729060019061531e565b905080821015613c1e5773ffffffffffffffffffffffffffffffffffffffff84166000908152600c60205260408120805483908110613bb357613bb3615122565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff8816808452600d835260408085208386528452808520889055908452600c90925291208054919250829185908110613c1057613c10615122565b600091825260209091200155505b73ffffffffffffffffffffffffffffffffffffffff84166000818152600d602090815260408083208784528252808320839055928252600c905220805480613c6857613c68615335565b6001900381819060005260206000200160009055905550505050565b60008151600003613c9757506000613dec565b613ca36001606461531e565b825160008681526008602052604090208054613cbe90615151565b613cc99291506153c3565b1115613cd757506000613dec565b6000848152601560205260408082209051613cf3908590615276565b9081526020016040518091039020549050838114613ddf57600085815260146020908152604080832084845290915281208054613d2f90615151565b80601f0160208091040260200160405190810160405280929190818152602001828054613d5b90615151565b8015613da85780601f10613d7d57610100808354040283529160200191613da8565b820191906000526020600020905b815481529060010190602001808311613d8b57829003601f168201915b5050505050905080518451148015613dcd575080805190602001208480519060200120145b15613ddd57600092505050613dec565b505b613de88361425b565b9150505b9392505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015613e80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ea491906153fc565b9050613ee873ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333085614657565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015613f74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f9891906153fc565b613b24919061531e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526140769084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526146bb565b505050565b6004830180548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660018360028111156140ba576140ba614d68565b02179055508183600001547fecd286616049aec5a52fa7273fbce1b7652affad46cd95c127e03ee4958fec14836040516140f49190615415565b60405180910390a3505050565b6000806011838154811061411757614117615122565b6000918252602080832060059092029091018054808452600f909252604090922054919250901580159061419e57506000818152600f60209081526040808320601083528184203380865293529220548254919291811061417a5761417a615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806141cc57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b8061424257506000848152601660205260409020541580159061424257506000848152601660209081526040808320601783528184203380865293529220548254919291811061421e5761421e615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b15614251575060019392505050565b5060009392505050565b6000607a60f81b8260008151811061427557614275615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001611156142aa57506000919050565b606160f81b826000815181106142c2576142c2615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001610156143ef57603960f81b8260008151811061430757614307615122565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016111561433c57506000919050565b603060f81b8260008151811061435457614354615122565b01602001517fff00000000000000000000000000000000000000000000000000000000000000161080156143e257508160008151811061439657614396615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f2d0000000000000000000000000000000000000000000000000000000000000014155b156143ef57506000919050565b60015b825181101561464e57606160f81b83828151811061441257614412615122565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016108015906144835750607a60f81b83828151811061445957614459615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001611155b61463c57603060f81b83828151811061449e5761449e615122565b01602001517fff00000000000000000000000000000000000000000000000000000000000000161080159061450f5750603960f81b8382815181106144e5576144e5615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001611155b61463c5782818151811061452557614525615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f2d000000000000000000000000000000000000000000000000000000000000001461463c5782818151811061458557614585615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f5f000000000000000000000000000000000000000000000000000000000000001461463c578281815181106145e5576145e5615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f2e000000000000000000000000000000000000000000000000000000000000001461463c5750600092915050565b806146468161538b565b9150506143f2565b50600192915050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526146b59085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401613ff4565b50505050565b600061471d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166147c79092919063ffffffff16565b805190915015614076578080602001905181019061473b9190615423565b614076576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a0a565b60606147d684846000856147de565b949350505050565b606082471015614870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a0a565b73ffffffffffffffffffffffffffffffffffffffff85163b6148ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a0a565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516149179190615276565b60006040518083038185875af1925050503d8060008114614954576040519150601f19603f3d011682016040523d82523d6000602084013e614959565b606091505b5091509150614969828286614974565b979650505050505050565b60608315614983575081613dec565b8251156149935782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0a9190614c8d565b8280546149d390615151565b90600052602060002090601f0160209004810192826149f55760008555614a3b565b82601f10614a0e57805160ff1916838001178555614a3b565b82800160010185558215614a3b579182015b82811115614a3b578251825591602001919060010190614a20565b50614a47929150614add565b5090565b828054614a5790615151565b90600052602060002090601f016020900481019282614a795760008555614a3b565b82601f10614ab0578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555614a3b565b82800160010185558215614a3b579182015b82811115614a3b578235825591602001919060010190614ac2565b5b80821115614a475760008155600101614ade565b803573ffffffffffffffffffffffffffffffffffffffff81168114614b1657600080fd5b919050565b60008060408385031215614b2e57600080fd5b82359150614b3e60208401614af2565b90509250929050565b60008083601f840112614b5957600080fd5b50813567ffffffffffffffff811115614b7157600080fd5b602083019150836020828501011115614b8957600080fd5b9250929050565b600080600060408486031215614ba557600080fd5b83359250602084013567ffffffffffffffff811115614bc357600080fd5b614bcf86828701614b47565b9497909650939450505050565b600060208284031215614bee57600080fd5b5035919050565b60008060408385031215614c0857600080fd5b50508035926020909101359150565b60005b83811015614c32578181015183820152602001614c1a565b838111156146b55750506000910152565b60008151808452614c5b816020860160208601614c17565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000613dec6020830184614c43565b60008060408385031215614cb357600080fd5b614cbc83614af2565b946020939093013593505050565b60008060008060008060808789031215614ce357600080fd5b86359550602087013567ffffffffffffffff80821115614d0257600080fd5b614d0e8a838b01614b47565b9097509550604089013594506060890135915080821115614d2e57600080fd5b50614d3b89828a01614b47565b979a9699509497509295939492505050565b600060208284031215614d5f57600080fd5b613dec82614af2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110614da757614da7614d68565b9052565b858152614dcf60208201868051825260208082015190830152604090810151910152565b614ddc6080820185614d97565b60e060a08201526000614df260e0830185614c43565b90508260c08301529695505050505050565b60008060008060408587031215614e1a57600080fd5b843567ffffffffffffffff80821115614e3257600080fd5b614e3e88838901614b47565b90965094506020870135915080821115614e5757600080fd5b50614e6487828801614b47565b95989497509550505050565b60008060008060608587031215614e8657600080fd5b8435935060208501359250604085013567ffffffffffffffff811115614eab57600080fd5b614e6487828801614b47565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080600080600085870360c0811215614eff57600080fd5b863595506020870135945060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc082011215614f3a57600080fd5b506040516060810167ffffffffffffffff8282108183111715614f5f57614f5f614eb7565b8160405260408901358352606089013560208401526080890135604084015282955060a0890135925080831115614f9557600080fd5b5050614fa388828901614b47565b969995985093965092949392505050565b85815284602082015260a060408201526000614fd360a0830186614c43565b905083606083015260028310614feb57614feb614d68565b8260808301529695505050505050565b600082601f83011261500c57600080fd5b813567ffffffffffffffff8082111561502757615027614eb7565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561506d5761506d614eb7565b8160405283815286602085880101111561508657600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156150b957600080fd5b82359150602083013567ffffffffffffffff8111156150d757600080fd5b6150e385828601614ffb565b9150509250929050565b6000602082840312156150ff57600080fd5b813567ffffffffffffffff81111561511657600080fd5b613b2084828501614ffb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061516557607f821691505b60208210810361519e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600080835481600182811c9150808316806151c057607f831692505b602080841082036151f8577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b81801561520c576001811461523b57615268565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528489019650615268565b60008a81526020902060005b868110156152605781548b820152908501908301615247565b505084890196505b509498975050505050505050565b60008251615288818460208701614c17565b9190910192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6020815260006147d6602083018486615292565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015615330576153306152ef565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b604081526000615378604083018688615292565b8281036020840152614969818587615292565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036153bc576153bc6152ef565b5060010190565b600082198211156153d6576153d66152ef565b500190565b81518152602080830151908201526040808301519082015260608101613b24565b60006020828403121561540e57600080fd5b5051919050565b60208101613b248284614d97565b60006020828403121561543557600080fd5b81518015158114613dec57600080fdfea264697066735822122011e3f17b1ac5a6eeeb5c8468819894d2d918c6604d2a1a3f1d7cb6465f98674364736f6c634300080d0033"
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
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "inToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "inAmount", "type": "uint256" }], "name": "Swap", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract IOSWAP_HybridRouter2", "name": "router", "type": "address" }], "name": "UpdateRouter", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "router", "outputs": [{ "internalType": "contract IOSWAP_HybridRouter2", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "swapExactTokensForTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "swapTokensForExactTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IOSWAP_HybridRouter2", "name": "_router", "type": "address" }], "name": "updateRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "vault", "outputs": [{ "internalType": "contract Vault", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "weth", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162001f8838038062001f88833981016040819052620000349162000112565b60008054336001600160a01b0319918216179091556003805482166001600160a01b038581169182179092556004805490931691841691909117825560408051633fc8cef360e01b815290519192633fc8cef39282820192602092908290030181865afa158015620000aa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d0919062000151565b600580546001600160a01b0319166001600160a01b039290921691909117905550620001789050565b6001600160a01b03811681146200010f57600080fd5b50565b600080604083850312156200012657600080fd5b82516200013381620000f9565b60208401519092506200014681620000f9565b809150509250929050565b6000602082840312156200016457600080fd5b81516200017181620000f9565b9392505050565b611e0080620001886000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063a2f55ae51161008c578063d4ee1d9011610066578063d4ee1d90146101ea578063f2fde38b1461020a578063f887ea401461021d578063fbfa77cf1461023d57600080fd5b8063a2f55ae5146101b1578063b65b23c1146101c4578063c851cc32146101d757600080fd5b806362503e7c116100bd57806362503e7c1461016b5780638da5cb5b1461017e5780639c52a7f11461019e57600080fd5b80633fc8cef3146100e45780633fd8cc4e1461012e5780636053617214610161575b600080fd5b6005546101049073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61015161013c3660046117af565b60026020526000908152604090205460ff1681565b6040519015158152602001610125565b61016961025d565b005b610169610179366004611818565b61038c565b6000546101049073ffffffffffffffffffffffffffffffffffffffff1681565b6101696101ac3660046117af565b6107a8565b6101696101bf3660046117af565b61084f565b6101696101d2366004611818565b6108f2565b6101696101e53660046117af565b610dc2565b6001546101049073ffffffffffffffffffffffffffffffffffffffff1681565b6101696102183660046117af565b610ed4565b6004546101049073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101049073ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff163314610309576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b323314801561039a5750333b155b610400576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e6420757365720000000000000000000000000000006044820152606401610300565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8d8d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b815260040161048493929190611926565b600060405180830381865afa1580156104a1573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104e79190810190611a76565b9050806000815181106104fc576104fc611aab565b602002602001015191505061051281338b610f6b565b60045490995061053c9073ffffffffffffffffffffffffffffffffffffffff83811691168b6110c2565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166365d9e64b8b8b8f8f87600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168f600067ffffffffffffffff8111156105bf576105bf611960565b6040519080825280601f01601f1916602001820160405280156105e9576020820181803683370190505b506040518963ffffffff1660e01b815260040161060d989796959493929190611b50565b6000604051808303816000875af115801561062c573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526106729190810190611bbc565b6003546040517f8ad30c8d00000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff169150638ad30c8d906106d4908a9033908b908b908b908b90600401611c77565b6020604051808303816000875af11580156106f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107179190611d02565b50867fee16dac19b14281c11b058c92c0f31a14e74cd4be2e49cd88ea9c13afe9a529833848460008151811061074f5761074f611aab565b60200260200101516040516107929392919073ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b60405180910390a2505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107cc57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461087357600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610844565b32331480156109005750333b155b610966576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e6420757365720000000000000000000000000000006044820152606401610300565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8d8d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b81526004016109ea93929190611926565b600060405180830381865afa158015610a07573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a4d9190810190611a76565b905080600081518110610a6257610a62611aab565b6020026020010151915050610a7881338a610f6b565b600454909850610aa29073ffffffffffffffffffffffffffffffffffffffff83811691168a6110c2565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c1385f248b8b8f8f600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168f600067ffffffffffffffff811115610b4757610b47611960565b6040519080825280601f01601f191660200182016040528015610b71576020820181803683370190505b506040518963ffffffff1660e01b8152600401610b95989796959493929190611b50565b6000604051808303816000875af1158015610bb4573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610bfa9190810190611bbc565b6003546040517f8ad30c8d00000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff169150638ad30c8d90610c5c908a9033908b908b908b908b90600401611c77565b6020604051808303816000875af1158015610c7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9f9190611d02565b50867fee16dac19b14281c11b058c92c0f31a14e74cd4be2e49cd88ea9c13afe9a5298338484600081518110610cd757610cd7611aab565b6020026020010151604051610d1a9392919073ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b60405180910390a280600081518110610d3557610d35611aab565b6020026020010151891115610db457610d8c3382600081518110610d5b57610d5b611aab565b60200260200101518b610d6e9190611d4a565b73ffffffffffffffffffffffffffffffffffffffff85169190611244565b600454610db49073ffffffffffffffffffffffffffffffffffffffff8481169116600061129f565b505050505050505050505050565b3360009081526002602052604090205460ff16610e61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610300565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527fd5f5b4d616f94f5e10b2955392470790b3fdde7c0c0b68bd1f3ea635e2caa8d790602001610844565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ef857600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610844565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610fd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffc9190611d02565b905061102073ffffffffffffffffffffffffffffffffffffffff8516843085611421565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa15801561108c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b09190611d02565b6110ba9190611d4a565b949350505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611139573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115d9190611d02565b6111679190611d61565b60405173ffffffffffffffffffffffffffffffffffffffff851660248201526044810182905290915061123e9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261147f565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261129a9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016111bc565b505050565b80158061133f57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611319573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061133d9190611d02565b155b6113cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610300565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261129a9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016111bc565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261123e9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016111bc565b60006114e1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661158b9092919063ffffffff16565b80519091501561129a57808060200190518101906114ff9190611d79565b61129a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610300565b60606110ba84846000856115a1565b9392505050565b606082471015611633576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610300565b73ffffffffffffffffffffffffffffffffffffffff85163b6116b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610300565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516116da9190611d9b565b60006040518083038185875af1925050503d8060008114611717576040519150601f19603f3d011682016040523d82523d6000602084013e61171c565b606091505b509150915061172c828286611737565b979650505050505050565b6060831561174657508161159a565b8251156117565782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103009190611db7565b73ffffffffffffffffffffffffffffffffffffffff811681146117ac57600080fd5b50565b6000602082840312156117c157600080fd5b813561159a8161178a565b60008083601f8401126117de57600080fd5b50813567ffffffffffffffff8111156117f657600080fd5b6020830191508360208260051b850101111561181157600080fd5b9250929050565b6000806000806000806000806000806101008b8d03121561183857600080fd5b8a3567ffffffffffffffff8082111561185057600080fd5b61185c8e838f016117cc565b909c509a5060208d0135995060408d0135985060608d0135975060808d0135965060a08d0135915061188d8261178a565b90945060c08c0135935060e08c013590808211156118aa57600080fd5b506118b78d828e016117cc565b915080935050809150509295989b9194979a5092959850565b8183526000602080850194508260005b8581101561191b5781356118f38161178a565b73ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016118e0565b509495945050505050565b60408152600061193a6040830185876118d0565b905073ffffffffffffffffffffffffffffffffffffffff83166020830152949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156119d6576119d6611960565b604052919050565b600067ffffffffffffffff8211156119f8576119f8611960565b5060051b60200190565b600082601f830112611a1357600080fd5b81516020611a28611a23836119de565b61198f565b82815260059290921b84018101918181019086841115611a4757600080fd5b8286015b84811015611a6b578051611a5e8161178a565b8352918301918301611a4b565b509695505050505050565b600060208284031215611a8857600080fd5b815167ffffffffffffffff811115611a9f57600080fd5b6110ba84828501611a02565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60005b83811015611af5578181015183820152602001611add565b8381111561123e5750506000910152565b60008151808452611b1e816020860160208601611ada565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b88815287602082015260e060408201526000611b7060e08301888a6118d0565b73ffffffffffffffffffffffffffffffffffffffff87811660608501528616608084015260a0830185905282810360c0840152611bad8185611b06565b9b9a5050505050505050505050565b60008060408385031215611bcf57600080fd5b825167ffffffffffffffff80821115611be757600080fd5b611bf386838701611a02565b9350602091508185015181811115611c0a57600080fd5b85019050601f81018613611c1d57600080fd5b8051611c2b611a23826119de565b81815260059190911b82018301908381019088831115611c4a57600080fd5b928401925b82841015611c6857835182529284019290840190611c4f565b80955050505050509250929050565b868152600073ffffffffffffffffffffffffffffffffffffffff808816602084015280871660408401525084606083015260a060808301528260a08301527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115611ce257600080fd5b8260051b808560c08501376000920160c001918252509695505050505050565b600060208284031215611d1457600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015611d5c57611d5c611d1b565b500390565b60008219821115611d7457611d74611d1b565b500190565b600060208284031215611d8b57600080fd5b8151801515811461159a57600080fd5b60008251611dad818460208701611ada565b9190910192915050565b60208152600061159a6020830184611b0656fea2646970667358221220709ae6b1868aad7d078a4b10c07c72068946084a282e4d4141fbd0cbae2adcb564736f6c634300080d0033"
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
                trancheId: new eth_contract_7.BigNumber(result.trancheId),
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
            let swapExactTokensForTokensParams = (params) => [params.pair, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.trancheId), params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
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
            let swapTokensForExactTokensParams = (params) => [params.pair, this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.trancheId), params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
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
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountScom", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountEth", "type": "uint256" }], "name": "Claim", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "start", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "end", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rate", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "initAmount", "type": "uint256" }], "name": "Lock", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "trancheId", "type": "uint256" }], "name": "NewTranche", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "balance", "type": "uint256" }], "name": "Release", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountScom", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountEth", "type": "uint256" }], "name": "Swap", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "unlock", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "available", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "balance", "type": "uint256" }], "name": "Unlock", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "WithdrawScomFromRelease", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "WithdrawScomFromTranche", "type": "event" },
            { "inputs": [], "name": "amm", "outputs": [{ "internalType": "contract AMM", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "amountUsedInTranche", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "claim", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "claimWithWETH", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "currTotalSupply", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decrementDecimal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "foundation", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "lastUnlockedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "lastUpdate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }, { "internalType": "uint256", "name": "_decrementDecimal", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "components": [{ "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "limitedClaimEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "unlimitedClaimEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes32", "name": "merkleRoot", "type": "bytes32" }, { "internalType": "bytes", "name": "ipfsCid", "type": "bytes" }], "internalType": "struct Vault.TrancheInfo", "name": "tranche", "type": "tuple" }], "name": "newTranche", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "publicSwapWithWETH", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "releaseAndSwap", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }, { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "releaseAndSwapWithWETH", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "releaseFromLocked", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "releaseFromUnlocked", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }], "name": "releaseTranche", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "releasedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "scom", "outputs": [{ "internalType": "contract Scom", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "startingAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "swap", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "token0IsScom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "totalSuppyAt", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "trancheInfo", "outputs": [{ "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "limitedClaimEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "unlimitedClaimEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes32", "name": "merkleRoot", "type": "bytes32" }, { "internalType": "bytes", "name": "ipfsCid", "type": "bytes" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "unlock", "outputs": [{ "internalType": "uint256", "name": "newAmount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "unlockedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_endTime", "type": "uint256" }, { "internalType": "uint256", "name": "_startingAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_decrementDecimal", "type": "uint256" }], "name": "updateReleaseSchdule", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "usedAllocation", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "weth", "outputs": [{ "internalType": "contract IWETH", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawScomFromRelease", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amountScom", "type": "uint256[]" }], "name": "withdrawScomFromTranche", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "6101006040523480156200001257600080fd5b5060405162003c2638038062003c2683398101604081905262000035916200019a565b600080546001600160a01b0319908116331782556001600355600480546001600160a01b038781169190931617815584821660805290831660a081905260408051630dfe168160e01b815290519192630dfe16819282820192602092908290030181865afa158015620000ac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d29190620001ee565b90506000826001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000115573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013b9190620001ee565b9050836001600160a01b0316826001600160a01b031614620001605760008262000164565b6001815b6001600160a01b031660c052151560e05250620002159350505050565b6001600160a01b03811681146200019757600080fd5b50565b600080600060608486031215620001b057600080fd5b8351620001bd8162000181565b6020850151909350620001d08162000181565b6040850151909250620001e38162000181565b809150509250925092565b6000602082840312156200020157600080fd5b81516200020e8162000181565b9392505050565b60805160a05160c05160e05161392f620002f76000396000818161045f01528181612117015261283c0152600081816103eb0152818161092f01528181610dce0152818161112101528181611de00152818161232d015281816126cc01526129ae01526000818161032701528181612083015281816122ee0152818161234f015281816123bf015281816127a80152818161296f015281816129d00152612a400152600081816107b001528181610c2c0152818161162b01528181611a42015281816122cc015281816124470152818161294d0152612ac8015261392f6000f3fe6080604052600436106102c55760003560e01c8063788ecd0511610179578063a69df4b5116100d6578063d65a79dd1161008a578063f1d27a9b11610064578063f1d27a9b146107f2578063f2fde38b14610812578063fa7feaa91461083257600080fd5b8063d65a79dd1461077e578063da6a50151461079e578063edd0d421146107d257600080fd5b8063c0463711116100bb578063c046371114610725578063c8f49b6c1461073b578063d4ee1d901461075157600080fd5b8063a69df4b5146106f0578063a90d62591461070557600080fd5b8063939e48f91161012d5780639c52a7f1116101125780639c52a7f114610690578063a2f55ae5146106b0578063a5e5812c146106d057600080fd5b8063939e48f914610643578063987099f31461067057600080fd5b80638119c0651161015e5780638119c065146105c45780638ad30c8d146105f65780638da5cb5b1461061657600080fd5b8063788ecd051461058e57806378e97925146105ae57600080fd5b806341fbb0501161022757806362549dfa116101db5780636cc465d3116101c05780636cc465d3146105455780636ec686c914610565578063758724651461057857600080fd5b806362549dfa1461050557806364a6043b1461052557600080fd5b80634dfefebc1161020c5780634dfefebc146104c4578063544f113b146104da57806360536172146104f057600080fd5b806341fbb0501461048157806345d30a17146104ae57600080fd5b80632e7ba6ef1161027e5780633fc8cef3116102635780633fc8cef3146103d95780633fd8cc4e1461040d57806341ea52631461044d57600080fd5b80632e7ba6ef146103b05780633197cbb6146103c357600080fd5b80632a943945116102af5780632a943945146103155780632d204ae11461036e5780632e68f5711461038357600080fd5b8062943599146102ca5780631a39d8ef146102ec575b600080fd5b3480156102d657600080fd5b506102ea6102e5366004613004565b610864565b005b3480156102f857600080fd5b5061030260055481565b6040519081526020015b60405180910390f35b34801561032157600080fd5b506103497f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161030c565b34801561037a57600080fd5b506103026108a2565b34801561038f57600080fd5b5061030261039e366004613030565b600f6020526000908152604090205481565b6103026103be3660046130b9565b6108b2565b3480156103cf57600080fd5b5061030260075481565b3480156103e557600080fd5b506103497f000000000000000000000000000000000000000000000000000000000000000081565b34801561041957600080fd5b5061043d610428366004613121565b60026020526000908152604090205460ff1681565b604051901515815260200161030c565b34801561045957600080fd5b5061043d7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048d57600080fd5b506004546103499073ffffffffffffffffffffffffffffffffffffffff1681565b3480156104ba57600080fd5b50610302600d5481565b3480156104d057600080fd5b50610302600c5481565b3480156104e657600080fd5b5061030260085481565b3480156104fc57600080fd5b506102ea6109cb565b34801561051157600080fd5b506102ea610520366004613030565b610af5565b34801561053157600080fd5b5061030261054036600461313c565b610c8c565b34801561055157600080fd5b506102ea610560366004613030565b610d15565b61030261057336600461317e565b610d4e565b34801561058457600080fd5b50610302600b5481565b34801561059a57600080fd5b506102ea6105a93660046131d2565b610e64565b3480156105ba57600080fd5b5061030260065481565b6105cc6110a8565b6040805192835273ffffffffffffffffffffffffffffffffffffffff90911660208301520161030c565b34801561060257600080fd5b5061030261061136600461320d565b6111b5565b34801561062257600080fd5b506000546103499073ffffffffffffffffffffffffffffffffffffffff1681565b34801561064f57600080fd5b5061030261065e366004613030565b60106020526000908152604090205481565b34801561067c57600080fd5b5061030261068b366004613285565b611246565b34801561069c57600080fd5b506102ea6106ab366004613121565b6112c3565b3480156106bc57600080fd5b506102ea6106cb366004613121565b611363565b3480156106dc57600080fd5b506102ea6106eb3660046132b8565b611406565b3480156106fc57600080fd5b50610302611690565b34801561071157600080fd5b50610302610720366004613324565b611715565b34801561073157600080fd5b50610302600a5481565b34801561074757600080fd5b5061030260095481565b34801561075d57600080fd5b506001546103499073ffffffffffffffffffffffffffffffffffffffff1681565b34801561078a57600080fd5b506102ea610799366004613030565b6117ab565b3480156107aa57600080fd5b506103497f000000000000000000000000000000000000000000000000000000000000000081565b3480156107de57600080fd5b506102ea6107ed366004613004565b6118ab565b3480156107fe57600080fd5b5061030261080d366004613030565b611bc9565b34801561081e57600080fd5b506102ea61082d366004613121565b611c2d565b34801561083e57600080fd5b5061085261084d366004613030565b611cc4565b60405161030c96959493929190613403565b60005473ffffffffffffffffffffffffffffffffffffffff16331461088857600080fd5b610890611690565b50600792909255600991909155600855565b60006108ad42611bc9565b905090565b6000600260035403610925576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026003819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561099557600080fd5b505af11580156109a9573d6000803e3d6000fd5b50505050506109bc863387878787611d98565b60016003559695505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610a72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161091c565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b1957600080fd5b600d54811115610b85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f696e737566666369656e742062616c616e636500000000000000000000000000604482015260640161091c565b610b9060028261346f565b15610bf7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f616d6f756e74206d757374206265206576656e206e756d626572000000000000604482015260640161091c565b80600d6000828254610c0991906134b2565b9091555050600454610c559073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169116836124ef565b6040518181527f75ea289c84661252e43a6aeb2453517058704f86ad3e77a1a9509bb0cec41365906020015b60405180910390a150565b6000600260035403610cfa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161091c565b6002600355610d098383612581565b60016003559392505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d3957600080fd5b610d41611690565b50610d4b816117ab565b50565b6000600260035403610dbc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161091c565b6002600355610dcb8484612581565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b158015610e3457600080fd5b505af1158015610e48573d6000803e3d6000fd5b5050505050610e573383612684565b6001600355949350505050565b3360009081526002602052604090205460ff16610f03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161091c565b610f0b611690565b508060200135600654108015610f2957508060400135816020013511155b610f8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f696e76616c6964207374617274202f20656e642074696d652000000000000000604482015260640161091c565b600c54610fa1606083013560026134c9565b10611008576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420616d6f756e74000000000000000000000000000000000000604482015260640161091c565b600e805460018101825560009190915281600682027fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd0161104982826136f1565b5061105b9050606083013560026134c9565b600c600082825461106c91906134b2565b90915550506040518181527f8bc87352dcf3484a02f008cb4a5ec0f93ae12d8b70d16c255951af31dfe0a1c09060200160405180910390a15050565b600080600260035403611117576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161091c565b60026003819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561118757600080fd5b505af115801561119b573d6000803e3d6000fd5b50505050506111aa3382612684565b600160035592909150565b6000600260035403611223576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161091c565b6002600355611236878787878787611d98565b6001600355979650505050505050565b60006002600354036112b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161091c565b6002600355610d098383612684565b60005473ffffffffffffffffffffffffffffffffffffffff1633146112e757600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610c81565b60005473ffffffffffffffffffffffffffffffffffffffff16331461138757600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610c81565b60005473ffffffffffffffffffffffffffffffffffffffff16331461142a57600080fd5b60008381838214611497576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6172726179206c656e677468206e6f74206d6174636865640000000000000000604482015260640161091c565b8183101561160d576000600e8888868181106114b5576114b561378e565b90506020020135815481106114cc576114cc61378e565b906000526020600020906006020190504281600101541015611601578585858181106114fa576114fa61378e565b905060200201358261150c91906137bd565b915060008686868181106115225761152261378e565b90506020020135600f60008b8b8981811061153f5761153f61378e565b9050602002013581526020019081526020016000205461155f91906137bd565b905081600301548111156115cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420616d6f756e74000000000000000000000000000000000000604482015260640161091c565b80600f60008b8b898181106115e6576115e661378e565b90506020020135815260200190815260200160002081905550505b50600190920191611497565b6004546116549073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169116836124ef565b6040518181527fe841bd94299be39b89442957992195cf97cb9a11d1127b0d8f7569b9520abb519060200160405180910390a150505050505050565b60008061169b6108a2565b9050600b54816116ab91906134b2565b915081600c60008282546116bf91906137bd565b9091555050600c54600b81905542600a5560408051848152602081019290925281018290527f458ce229c5e26638bef3a102cd5a230f7ae260a3fdc71ce248e1399edc2d4bc49060600160405180910390a15090565b6000600260035403611783576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161091c565b60026003556117928585612581565b5061179d8383612684565b600160035595945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146117cf57600080fd5b6117da60028261346f565b15611841576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f616d6f756e74206d757374206265206576656e206e756d626572000000000000604482015260640161091c565b80600c600082825461185391906134b2565b9250508190555080600d600082825461186c91906137bd565b9091555050600d546040805183815260208101929092527f99f6215451102cb496830dfd718a41ae7fb7d92607137ea8961d076bea55c5d39101610c81565b60005473ffffffffffffffffffffffffffffffffffffffff1633146118cf57600080fd5b60055415611939576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c726561647920737461727465640000000000000000000000000000000000604482015260640161091c565b8183106119a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f696e76616c696420737461727454696d65202f20656e6454696d650000000000604482015260640161091c565b670de0b6b3a7640000811115611a14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c69642064656372656d656e74000000000000000000000000000000604482015260640161091c565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015611a9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac291906137d5565b6005819055611b2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f2073636f6d206c6f636b6564000000000000000000000000000000000000604482015260640161091c565b600683905560078290556009819055611b5881611b4a85856134b2565b670de0b6b3a7640000612b68565b670de0b6b3a7640000600554611b6e91906134c9565b611b7891906137ee565b600881905560408051858152602081018590528082018490526060810192909252517fb49bb339db243eef7c76d160a9db9bab89d306e61cd9d22d3cf7ccc0ef41aa9c9181900360800190a1505050565b6000600754821115611bdd57505060055490565b600060065483611bed91906134b2565b9050670de0b6b3a7640000611c0d60095483670de0b6b3a7640000612b68565b600854611c1a91906134c9565b611c2491906137ee565b9150505b919050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611c5157600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610c81565b600e8181548110611cd457600080fd5b9060005260206000209060060201600091509050806000015490806001015490806002015490806003015490806004015490806005018054611d1590613535565b80601f0160208091040260200160405190810160405280929190818152602001828054611d4190613535565b8015611d8e5780601f10611d6357610100808354040283529160200191611d8e565b820191906000526020600020905b815481529060010190602001808311611d7157829003601f168201915b5050505050905086565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611e27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e4b91906137d5565b905060008111611eb7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f20696e70757420616d6f756e740000000000000000000000000000000000604482015260640161091c565b6000600e8981548110611ecc57611ecc61378e565b906000526020600020906006020190506000816003015411611f4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f696e76616c6964207472616e6368650000000000000000000000000000000000604482015260640161091c565b80544211611fb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f6e6f742073746172746564000000000000000000000000000000000000000000604482015260640161091c565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608a901b166020820152603481018790526000906054016040516020818303038152906040528051906020012090506120188686846004015484612bb0565b61207e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6d65726b6c652070726f6f66206661696c656400000000000000000000000000604482015260640161091c565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa1580156120ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121109190613820565b50915091507f000000000000000000000000000000000000000000000000000000000000000061213c57905b806dffffffffffffffffffffffffffff16826dffffffffffffffffffffffffffff168661216991906134c9565b61217391906137ee565b955042846001015410156122175760008381526010602052604081205461219b9087906137bd565b905089811115612207576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6578636365656420616c6c6f636174696f6e0000000000000000000000000000604482015260640161091c565b6000848152601060205260409020555b60008c8152600f60205260408120546122319088906137bd565b905084600301548111156122a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420616d6f756e74000000000000000000000000000000000000604482015260640161091c565b60008d8152600f6020526040902081905561231373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000896124ef565b61237473ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000886124ef565b600480546040517f6a62784200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216928101929092527f00000000000000000000000000000000000000000000000000000000000000001690636a627842906024016020604051808303816000875af1158015612408573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061242c91906137d5565b5061246e73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168c896124ef565b8a73ffffffffffffffffffffffffffffffffffffffff168c73ffffffffffffffffffffffffffffffffffffffff168e7f31e7888a6f36efcb826d6ca64ff155546c052ae47e70bd7ea56aef23fc3b92768a8a6040516124d7929190918252602082015260400190565b60405180910390a45050505050509695505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261257c908490612bc8565b505050565b600080825b808210156126285760008585848181106125a2576125a261378e565b9050602002013590506000600e82815481106125c0576125c061378e565b90600052602060002090600602019050428160020154101561261b576000828152600f602052604090205460038201546125fa91906134b2565b61260490866137bd565b60038201546000848152600f602052604090205594505b5050600190910190612586565b82600d600082825461263a91906137bd565b9091555050600d546040805185815260208101929092527f99f6215451102cb496830dfd718a41ae7fb7d92607137ea8961d076bea55c5d3910160405180910390a1505092915050565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015612713573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061273791906137d5565b9050600081116127a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f20696e70757420616d6f756e740000000000000000000000000000000000604482015260640161091c565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015612811573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128359190613820565b50915091507f000000000000000000000000000000000000000000000000000000000000000061286157905b806dffffffffffffffffffffffffffff16826dffffffffffffffffffffffffffff168461288e91906134c9565b61289891906137ee565b600d549094506128a98560026134c9565b1115612911576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f696e73756666696369656e7420616d6f756e7400000000000000000000000000604482015260640161091c565b61291c8460026134c9565b600d600082825461292d91906134b2565b90915550612994905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000866124ef565b6129f573ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000856124ef565b600480546040517f6a62784200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216928101929092527f00000000000000000000000000000000000000000000000000000000000000001690636a627842906024016020604051808303816000875af1158015612a89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612aad91906137d5565b50612aef73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686866124ef565b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167ffa2dda1cc1b86e41239702756b13effbc1a092b5c57e3ad320fbe4f3b13fe2358686604051612b57929190918252602082015260400190565b60405180910390a350505092915050565b6000612b7484836134b2565b82612b8a86612b848760016137bd565b86612cd4565b612b9490856134b2565b612b9e91906134c9565b612ba891906137ee565b949350505050565b600082612bbe868685612d92565b1495945050505050565b6000612c2a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16612de09092919063ffffffff16565b80519091501561257c5780806020019051810190612c489190613870565b61257c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161091c565b6000838015612d7457600184168015612cef57859250612cf3565b8392505b50600283046002850494505b8415612d6e578586028687820414612d1657600080fd5b81810181811015612d2657600080fd5b8590049650506001851615612d63578583028387820414158715151615612d4c57600080fd5b81810181811015612d5c57600080fd5b8590049350505b600285049450612cff565b50612d8a565b838015612d845760009250612d88565b8392505b505b509392505050565b600081815b84811015612dd557612dc182878784818110612db557612db561378e565b90506020020135612def565b915080612dcd81613892565b915050612d97565b5090505b9392505050565b6060612ba88484600085612e1b565b6000818310612e0b576000828152602084905260409020612dd9565b5060009182526020526040902090565b606082471015612ead576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161091c565b73ffffffffffffffffffffffffffffffffffffffff85163b612f2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161091c565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612f5491906138ca565b60006040518083038185875af1925050503d8060008114612f91576040519150601f19603f3d011682016040523d82523d6000602084013e612f96565b606091505b5091509150612fa6828286612fb1565b979650505050505050565b60608315612fc0575081612dd9565b825115612fd05782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091c91906138e6565b60008060006060848603121561301957600080fd5b505081359360208301359350604090920135919050565b60006020828403121561304257600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c2857600080fd5b60008083601f84011261307f57600080fd5b50813567ffffffffffffffff81111561309757600080fd5b6020830191508360208260051b85010111156130b257600080fd5b9250929050565b6000806000806000608086880312156130d157600080fd5b853594506130e160208701613049565b935060408601359250606086013567ffffffffffffffff81111561310457600080fd5b6131108882890161306d565b969995985093965092949392505050565b60006020828403121561313357600080fd5b612dd982613049565b6000806020838503121561314f57600080fd5b823567ffffffffffffffff81111561316657600080fd5b6131728582860161306d565b90969095509350505050565b60008060006040848603121561319357600080fd5b833567ffffffffffffffff8111156131aa57600080fd5b6131b68682870161306d565b90945092506131c9905060208501613049565b90509250925092565b6000602082840312156131e457600080fd5b813567ffffffffffffffff8111156131fb57600080fd5b820160c08185031215612dd957600080fd5b60008060008060008060a0878903121561322657600080fd5b8635955061323660208801613049565b945061324460408801613049565b935060608701359250608087013567ffffffffffffffff81111561326757600080fd5b61327389828a0161306d565b979a9699509497509295939492505050565b6000806040838503121561329857600080fd5b6132a183613049565b91506132af60208401613049565b90509250929050565b600080600080604085870312156132ce57600080fd5b843567ffffffffffffffff808211156132e657600080fd5b6132f28883890161306d565b9096509450602087013591508082111561330b57600080fd5b506133188782880161306d565b95989497509550505050565b6000806000806060858703121561333a57600080fd5b843567ffffffffffffffff81111561335157600080fd5b61335d8782880161306d565b9095509350613370905060208601613049565b915061337e60408601613049565b905092959194509250565b60005b838110156133a457818101518382015260200161338c565b838111156133b3576000848401525b50505050565b600081518084526133d1816020860160208601613389565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b86815285602082015284604082015283606082015282608082015260c060a0820152600061343460c08301846133b9565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008261347e5761347e613440565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156134c4576134c4613483565b500390565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561350157613501613483565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c9082168061354957607f821691505b602082108103613582577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561257c57600081815260208120601f850160051c810160208610156135af5750805b601f850160051c820191505b818110156135ce578281556001016135bb565b505050505050565b67ffffffffffffffff8311156135ee576135ee613506565b613602836135fc8354613535565b83613588565b6000601f841160018114613654576000851561361e5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556136ea565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156136a35786850135825560209485019460019092019101613683565b50868210156136de577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b813581556020820135600182015560408201356002820155606082013560038201556080820135600482015560a08201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe183360301811261375257600080fd5b8201803567ffffffffffffffff81111561376b57600080fd5b60208201915080360382131561378057600080fd5b6133b38183600586016135d6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082198211156137d0576137d0613483565b500190565b6000602082840312156137e757600080fd5b5051919050565b6000826137fd576137fd613440565b500490565b80516dffffffffffffffffffffffffffff81168114611c2857600080fd5b60008060006060848603121561383557600080fd5b61383e84613802565b925061384c60208501613802565b9150604084015163ffffffff8116811461386557600080fd5b809150509250925092565b60006020828403121561388257600080fd5b81518015158114612dd957600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036138c3576138c3613483565b5060010190565b600082516138dc818460208701613389565b9190910192915050565b602081526000612dd960208301846133b956fea2646970667358221220d1238739c12b8abd8a77d4400a3a0205a96976b607e55962f69c7fcc3c36ffe164736f6c634300080d0033"
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
        parseClaimEvent(receipt) {
            return this.parseEvents(receipt, "Claim").map(e => this.decodeClaimEvent(e));
        }
        decodeClaimEvent(event) {
            let result = event.data;
            return {
                trancheId: new eth_contract_9.BigNumber(result.trancheId),
                from: result.from,
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
        parseLockEvent(receipt) {
            return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
        }
        decodeLockEvent(event) {
            let result = event.data;
            return {
                start: new eth_contract_9.BigNumber(result.start),
                end: new eth_contract_9.BigNumber(result.end),
                rate: new eth_contract_9.BigNumber(result.rate),
                initAmount: new eth_contract_9.BigNumber(result.initAmount),
                _event: event
            };
        }
        parseNewTrancheEvent(receipt) {
            return this.parseEvents(receipt, "NewTranche").map(e => this.decodeNewTrancheEvent(e));
        }
        decodeNewTrancheEvent(event) {
            let result = event.data;
            return {
                trancheId: new eth_contract_9.BigNumber(result.trancheId),
                _event: event
            };
        }
        parseReleaseEvent(receipt) {
            return this.parseEvents(receipt, "Release").map(e => this.decodeReleaseEvent(e));
        }
        decodeReleaseEvent(event) {
            let result = event.data;
            return {
                amount: new eth_contract_9.BigNumber(result.amount),
                balance: new eth_contract_9.BigNumber(result.balance),
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
                from: result.from,
                to: result.to,
                amountScom: new eth_contract_9.BigNumber(result.amountScom),
                amountEth: new eth_contract_9.BigNumber(result.amountEth),
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
        parseUnlockEvent(receipt) {
            return this.parseEvents(receipt, "Unlock").map(e => this.decodeUnlockEvent(e));
        }
        decodeUnlockEvent(event) {
            let result = event.data;
            return {
                unlock: new eth_contract_9.BigNumber(result.unlock),
                available: new eth_contract_9.BigNumber(result.available),
                balance: new eth_contract_9.BigNumber(result.balance),
                _event: event
            };
        }
        parseWithdrawScomFromReleaseEvent(receipt) {
            return this.parseEvents(receipt, "WithdrawScomFromRelease").map(e => this.decodeWithdrawScomFromReleaseEvent(e));
        }
        decodeWithdrawScomFromReleaseEvent(event) {
            let result = event.data;
            return {
                amount: new eth_contract_9.BigNumber(result.amount),
                _event: event
            };
        }
        parseWithdrawScomFromTrancheEvent(receipt) {
            return this.parseEvents(receipt, "WithdrawScomFromTranche").map(e => this.decodeWithdrawScomFromTrancheEvent(e));
        }
        decodeWithdrawScomFromTrancheEvent(event) {
            let result = event.data;
            return {
                amount: new eth_contract_9.BigNumber(result.amount),
                _event: event
            };
        }
        assign() {
            let amm_call = async (options) => {
                let result = await this.call('amm', [], options);
                return result;
            };
            this.amm = amm_call;
            let amountUsedInTranche_call = async (param1, options) => {
                let result = await this.call('amountUsedInTranche', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.amountUsedInTranche = amountUsedInTranche_call;
            let currTotalSupply_call = async (options) => {
                let result = await this.call('currTotalSupply', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.currTotalSupply = currTotalSupply_call;
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
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let lastUnlockedAmount_call = async (options) => {
                let result = await this.call('lastUnlockedAmount', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.lastUnlockedAmount = lastUnlockedAmount_call;
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
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let releasedAmount_call = async (options) => {
                let result = await this.call('releasedAmount', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.releasedAmount = releasedAmount_call;
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
            let startingAmount_call = async (options) => {
                let result = await this.call('startingAmount', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.startingAmount = startingAmount_call;
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
            let trancheInfo_call = async (param1, options) => {
                let result = await this.call('trancheInfo', [this.wallet.utils.toString(param1)], options);
                return {
                    startTime: new eth_contract_9.BigNumber(result.startTime),
                    limitedClaimEndTime: new eth_contract_9.BigNumber(result.limitedClaimEndTime),
                    unlimitedClaimEndTime: new eth_contract_9.BigNumber(result.unlimitedClaimEndTime),
                    amount: new eth_contract_9.BigNumber(result.amount),
                    merkleRoot: result.merkleRoot,
                    ipfsCid: result.ipfsCid
                };
            };
            this.trancheInfo = trancheInfo_call;
            let unlockedAmount_call = async (options) => {
                let result = await this.call('unlockedAmount', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.unlockedAmount = unlockedAmount_call;
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
            let claimParams = (params) => [this.wallet.utils.toString(params.trancheId), params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
            let claim_send = async (params, options) => {
                let result = await this.send('claim', claimParams(params), options);
                return result;
            };
            let claim_call = async (params, options) => {
                let result = await this.call('claim', claimParams(params), options);
                return new eth_contract_9.BigNumber(result);
            };
            this.claim = Object.assign(claim_send, {
                call: claim_call
            });
            let claimWithWETHParams = (params) => [this.wallet.utils.toString(params.trancheId), params.from, params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
            let claimWithWETH_send = async (params, options) => {
                let result = await this.send('claimWithWETH', claimWithWETHParams(params), options);
                return result;
            };
            let claimWithWETH_call = async (params, options) => {
                let result = await this.call('claimWithWETH', claimWithWETHParams(params), options);
                return new eth_contract_9.BigNumber(result);
            };
            this.claimWithWETH = Object.assign(claimWithWETH_send, {
                call: claimWithWETH_call
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
            let lockParams = (params) => [this.wallet.utils.toString(params.startTime), this.wallet.utils.toString(params.endTime), this.wallet.utils.toString(params.decrementDecimal)];
            let lock_send = async (params, options) => {
                let result = await this.send('lock', lockParams(params), options);
                return result;
            };
            let lock_call = async (params, options) => {
                let result = await this.call('lock', lockParams(params), options);
                return;
            };
            this.lock = Object.assign(lock_send, {
                call: lock_call
            });
            let newTranche_send = async (tranche, options) => {
                let result = await this.send('newTranche', [[this.wallet.utils.toString(tranche.startTime), this.wallet.utils.toString(tranche.limitedClaimEndTime), this.wallet.utils.toString(tranche.unlimitedClaimEndTime), this.wallet.utils.toString(tranche.amount), this.wallet.utils.stringToBytes32(tranche.merkleRoot), this.wallet.utils.stringToBytes(tranche.ipfsCid)]], options);
                return result;
            };
            let newTranche_call = async (tranche, options) => {
                let result = await this.call('newTranche', [[this.wallet.utils.toString(tranche.startTime), this.wallet.utils.toString(tranche.limitedClaimEndTime), this.wallet.utils.toString(tranche.unlimitedClaimEndTime), this.wallet.utils.toString(tranche.amount), this.wallet.utils.stringToBytes32(tranche.merkleRoot), this.wallet.utils.stringToBytes(tranche.ipfsCid)]], options);
                return;
            };
            this.newTranche = Object.assign(newTranche_send, {
                call: newTranche_call
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
            let publicSwapWithWETHParams = (params) => [params.from, params.to];
            let publicSwapWithWETH_send = async (params, options) => {
                let result = await this.send('publicSwapWithWETH', publicSwapWithWETHParams(params), options);
                return result;
            };
            let publicSwapWithWETH_call = async (params, options) => {
                let result = await this.call('publicSwapWithWETH', publicSwapWithWETHParams(params), options);
                return new eth_contract_9.BigNumber(result);
            };
            this.publicSwapWithWETH = Object.assign(publicSwapWithWETH_send, {
                call: publicSwapWithWETH_call
            });
            let releaseAndSwapParams = (params) => [this.wallet.utils.toString(params.trancheIds), params.to];
            let releaseAndSwap_send = async (params, options) => {
                let result = await this.send('releaseAndSwap', releaseAndSwapParams(params), options);
                return result;
            };
            let releaseAndSwap_call = async (params, options) => {
                let result = await this.call('releaseAndSwap', releaseAndSwapParams(params), options);
                return new eth_contract_9.BigNumber(result);
            };
            this.releaseAndSwap = Object.assign(releaseAndSwap_send, {
                call: releaseAndSwap_call
            });
            let releaseAndSwapWithWETHParams = (params) => [this.wallet.utils.toString(params.trancheIds), params.from, params.to];
            let releaseAndSwapWithWETH_send = async (params, options) => {
                let result = await this.send('releaseAndSwapWithWETH', releaseAndSwapWithWETHParams(params), options);
                return result;
            };
            let releaseAndSwapWithWETH_call = async (params, options) => {
                let result = await this.call('releaseAndSwapWithWETH', releaseAndSwapWithWETHParams(params), options);
                return new eth_contract_9.BigNumber(result);
            };
            this.releaseAndSwapWithWETH = Object.assign(releaseAndSwapWithWETH_send, {
                call: releaseAndSwapWithWETH_call
            });
            let releaseFromLocked_send = async (amount, options) => {
                let result = await this.send('releaseFromLocked', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let releaseFromLocked_call = async (amount, options) => {
                let result = await this.call('releaseFromLocked', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.releaseFromLocked = Object.assign(releaseFromLocked_send, {
                call: releaseFromLocked_call
            });
            let releaseFromUnlocked_send = async (amount, options) => {
                let result = await this.send('releaseFromUnlocked', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let releaseFromUnlocked_call = async (amount, options) => {
                let result = await this.call('releaseFromUnlocked', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.releaseFromUnlocked = Object.assign(releaseFromUnlocked_send, {
                call: releaseFromUnlocked_call
            });
            let releaseTranche_send = async (trancheIds, options) => {
                let result = await this.send('releaseTranche', [this.wallet.utils.toString(trancheIds)], options);
                return result;
            };
            let releaseTranche_call = async (trancheIds, options) => {
                let result = await this.call('releaseTranche', [this.wallet.utils.toString(trancheIds)], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.releaseTranche = Object.assign(releaseTranche_send, {
                call: releaseTranche_call
            });
            let swap_send = async (options) => {
                let result = await this.send('swap', [], options);
                return result;
            };
            let swap_call = async (options) => {
                let result = await this.call('swap', [], options);
                return {
                    amountScom: new eth_contract_9.BigNumber(result.amountScom),
                    to: result.to
                };
            };
            this.swap = Object.assign(swap_send, {
                call: swap_call
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
            let unlock_send = async (options) => {
                let result = await this.send('unlock', [], options);
                return result;
            };
            let unlock_call = async (options) => {
                let result = await this.call('unlock', [], options);
                return new eth_contract_9.BigNumber(result);
            };
            this.unlock = Object.assign(unlock_send, {
                call: unlock_call
            });
            let updateReleaseSchduleParams = (params) => [this.wallet.utils.toString(params.endTime), this.wallet.utils.toString(params.startingAmount), this.wallet.utils.toString(params.decrementDecimal)];
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
            let withdrawScomFromRelease_send = async (amount, options) => {
                let result = await this.send('withdrawScomFromRelease', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let withdrawScomFromRelease_call = async (amount, options) => {
                let result = await this.call('withdrawScomFromRelease', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.withdrawScomFromRelease = Object.assign(withdrawScomFromRelease_send, {
                call: withdrawScomFromRelease_call
            });
            let withdrawScomFromTrancheParams = (params) => [this.wallet.utils.toString(params.trancheIds), this.wallet.utils.toString(params.amountScom)];
            let withdrawScomFromTranche_send = async (params, options) => {
                let result = await this.send('withdrawScomFromTranche', withdrawScomFromTrancheParams(params), options);
                return result;
            };
            let withdrawScomFromTranche_call = async (params, options) => {
                let result = await this.call('withdrawScomFromTranche', withdrawScomFromTrancheParams(params), options);
                return;
            };
            this.withdrawScomFromTranche = Object.assign(withdrawScomFromTranche_send, {
                call: withdrawScomFromTranche_call
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
            foundation: '',
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
        // vault: {
        //     foundation: '',
        //     amm: ''
        // }
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
});
