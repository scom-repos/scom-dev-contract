define("@scom/scom-portal-contract/contracts/AuditInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/AuditInfo.json.ts'/> 
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
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }], "name": "packageVersionsAuditorsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
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
        "bytecode": "60806040523480156200001157600080fd5b5060405162001d4238038062001d4283398101604081905262000034916200016b565b600080546001600160a01b031916331790556001600355828410620000b75760405162461bcd60e51b815260206004820152602e60248201527f7761726e696e675468726573686f6c642067726561746572207468616e20706160448201526d1cdcda5b99d51a1c995cda1bdb1960921b60648201526084015b60405180910390fd5b6103e883106200010a5760405162461bcd60e51b815260206004820152601f60248201527f70617373696e675468726573686f6c642067726561746572207468616e2031006044820152606401620000ae565b600480546001600160a01b039788166001600160a01b0319918216179091556005805496909716951694909417909455600a91909155600b55600d91909155600c55620001ce565b6001600160a01b03811681146200016857600080fd5b50565b60008060008060008060c087890312156200018557600080fd5b8651620001928162000152565b6020880151909650620001a58162000152565b6040880151606089015160808a015160a0909a0151989b929a5090989097909650945092505050565b611b6480620001de6000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c8063620793d9116100f9578063a488437e11610097578063d4ee1d9011610071578063d4ee1d9014610416578063e3dcc52614610436578063f2fde38b14610457578063fd9116481461046a57600080fd5b8063a488437e146103e4578063a8e5ed21146103ed578063ac1c4f4c146103f657600080fd5b80637aec8142116100d35780637aec81421461038b5780638da5cb5b1461039e5780639c52a7f1146103be578063a2f55ae5146103d157600080fd5b8063620793d91461034c5780636dfc33aa1461035557806375a320b31461036857600080fd5b80632c56943e1161016657806357d441cb1161014057806357d441cb146102fc5780635bc8f9b81461030f5780635d6bade014610331578063605361721461034457600080fd5b80632c56943e1461028b5780632de703f91461029e5780633fd8cc4e146102c957600080fd5b8063185b691011610197578063185b691014610213578063269abba31461025857806328e6c8ab1461027857600080fd5b8063083ba199146101be5780630fac3451146101e757806311fd63b8146101fc575b600080fd5b6101d16101cc366004611528565b610473565b6040516101de91906115ab565b60405180910390f35b6101fa6101f5366004611528565b61057b565b005b610205600c5481565b6040519081526020016101de565b6004546102339073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101de565b610205610266366004611528565b60009081526006602052604090205490565b6102056102863660046115e2565b6105db565b6101fa610299366004611528565b6106e1565b6102056102ac3660046115e2565b600860209081526000928352604080842090915290825290205481565b6102ec6102d736600461160e565b60026020526000908152604090205460ff1681565b60405190151581526020016101de565b6101fa61030a366004611640565b61083b565b61032261031d3660046116c9565b610d3f565b6040516101de93929190611725565b61023361033f36600461178c565b610e2a565b6101fa610e6f565b610205600b5481565b6101fa610363366004611528565b610f99565b6101d1610376366004611528565b60096020526000908152604090205460ff1681565b6101fa610399366004611528565b610ff2565b6000546102339073ffffffffffffffffffffffffffffffffffffffff1681565b6101fa6103cc36600461160e565b6110dc565b6101fa6103df36600461160e565b61117c565b6102056103e881565b610205600d5481565b6005546102339073ffffffffffffffffffffffffffffffffffffffff1681565b6001546102339073ffffffffffffffffffffffffffffffffffffffff1681565b610449610444366004611528565b61121f565b6040516101de9291906117ae565b6101fa61046536600461160e565b6113f8565b610205600a5481565b600081815260076020526040812054600c548110610570576000805b828110156105365760008581526007602052604081208054839081106104b7576104b7611846565b600091825260209091200190506002815482907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81019081106104fc576104fc611846565b600091825260209091206003909102015460ff16600281111561052157610521611541565b0361052d576001909201915b5060010161048f565b50600b5482026103e88202101561056557600a5482026103e88202101561055e576000610568565b6001610568565b60025b925050610575565b600091505b50919050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461059f57600080fd5b600d8190556040518181527f10c2ffc61239abf87ea5f24df6ee5eb842ff8dc07cfe81608c2d649815caa7df906020015b60405180910390a150565b6000828152600660205260408120805473ffffffffffffffffffffffffffffffffffffffff84169190839061061257610612611846565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff160361066b576000838152600760205260408120805490919061065857610658611846565b60009182526020909120015490506106db565b600083815260086020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915290205480156106d45760008481526007602052604090208054829081106106c1576106c1611846565b60009182526020909120015491506106d9565b600091505b505b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461070557600080fd5b80600a541061079b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f70617373696e675468726573686f6c64206c657373207468616e207761726e6960448201527f6e675468726573686f6c6400000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103e88110610806576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f70617373696e675468726573686f6c6420677265746572207468616e203100006044820152606401610792565b600b8190556040518181527f1850473dbbf65a76c75415504adba6bfad8cb105d77b32d4e8af31c21936ab25906020016105d0565b6005546040517fb7419ee100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b7419ee190602401602060405180830381865afa1580156108a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cd9190611875565b610933576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e6f742066726f6d206163746976652061756469746f720000000000000000006044820152606401610792565b600084815260076020526040812054908190036109c35760008581526006602090815260408083208054600181810183559185528385200180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915589855260088452828520908552835281842085905588845260079092528220805490910181559052610aaa565b600085815260086020908152604080832033808552818452828520548a865260068552928520948190529252825490929083908110610a0457610a04611846565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614610aa45760008681526006602090815260408083208054600181810183559185528385200180547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091558a855260088452828520908552835281842086905589845260079092528220805490910181559052610aa8565b8091505b505b6000858152600760205260409020805482908110610aca57610aca611846565b906000526020600020016040518060600160405280866002811115610af157610af1611541565b815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250504260209384015250835460018181018655948252919020825160039092020180549293909283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911690836002811115610b8b57610b8b611541565b02179055506020828101518051610ba8926001850192019061148f565b50604082015181600201555050843373ffffffffffffffffffffffffffffffffffffffff167f68f77877df899ccf85484ce7965cbf190f87968c4601e950ed6cac43031a4a86868686604051610c0093929190611897565b60405180910390a36000610c1386610473565b600480546040517f723dd3da00000000000000000000000000000000000000000000000000000000815291820189905291925060009173ffffffffffffffffffffffffffffffffffffffff169063723dd3da90602401600060405180830381865afa158015610c86573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ccc91908101906119c7565b945050505050600d5481610ce09190611aa2565b421015610d3657600087815260096020526040902080548391907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115610d3057610d30611541565b02179055505b50505050505050565b60076020528260005260406000208281548110610d5b57600080fd5b906000526020600020018181548110610d7357600080fd5b60009182526020909120600390910201805460018201805460ff9092169550919350909150610da190611ae1565b80601f0160208091040260200160405190810160405280929190818152602001828054610dcd90611ae1565b8015610e1a5780601f10610def57610100808354040283529160200191610e1a565b820191906000526020600020905b815481529060010190602001808311610dfd57829003601f168201915b5050505050908060020154905083565b60066020528160005260406000208181548110610e4657600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610f16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610792565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff163314610fbd57600080fd5b600c8190556040518181527f8a26512c3624ad9cd85a10292c3dc1cd6a15569dee4d6b0c275436f5086e7887906020016105d0565b60005473ffffffffffffffffffffffffffffffffffffffff16331461101657600080fd5b600b5481106110a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f7761726e696e675468726573686f6c642067726561746572207468616e20706160448201527f7373696e675468726573686f6c640000000000000000000000000000000000006064820152608401610792565b600a8190556040518181527fa3c6dd9fefe31e2a42078f8cb943e48f2d4f594e3b11a9d3a8dbb1509c93b383906020016105d0565b60005473ffffffffffffffffffffffffffffffffffffffff16331461110057600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491016105d0565b60005473ffffffffffffffffffffffffffffffffffffffff1633146111a057600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016105d0565b60008181526007602052604090205460609081908067ffffffffffffffff81111561124c5761124c6118f2565b604051908082528060200260200182016040528015611275578160200160208202803683370190505b5092508067ffffffffffffffff811115611291576112916118f2565b6040519080825280602002602001820160405280156112ba578160200160208202803683370190505b50915060005b818110156113f15760008581526006602052604090208054829081106112e8576112e8611846565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684828151811061132557611325611846565b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101820152600086815260079091526040812080548390811061136957611369611846565b9060005260206000200190508060018280549050038154811061138e5761138e611846565b6000918252602090912060039091020154845160ff909116908590849081106113b9576113b9611846565b602002602001019060028111156113d2576113d2611541565b908160028111156113e5576113e5611541565b905250506001016112c0565b5050915091565b60005473ffffffffffffffffffffffffffffffffffffffff16331461141c57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016105d0565b82805461149b90611ae1565b90600052602060002090601f0160209004810192826114bd5760008555611503565b82601f106114d657805160ff1916838001178555611503565b82800160010185558215611503579182015b828111156115035782518255916020019190600101906114e8565b5061150f929150611513565b5090565b5b8082111561150f5760008155600101611514565b60006020828403121561153a57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600381106115a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b602081016106db8284611570565b803573ffffffffffffffffffffffffffffffffffffffff811681146115dd57600080fd5b919050565b600080604083850312156115f557600080fd5b82359150611605602084016115b9565b90509250929050565b60006020828403121561162057600080fd5b611629826115b9565b9392505050565b6003811061163d57600080fd5b50565b6000806000806060858703121561165657600080fd5b84359350602085013561166881611630565b9250604085013567ffffffffffffffff8082111561168557600080fd5b818701915087601f83011261169957600080fd5b8135818111156116a857600080fd5b8860208285010111156116ba57600080fd5b95989497505060200194505050565b6000806000606084860312156116de57600080fd5b505081359360208301359350604090920135919050565b60005b838110156117105781810151838201526020016116f8565b8381111561171f576000848401525b50505050565b61172f8185611570565b60606020820152600083518060608401526117518160808501602088016116f5565b604083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160160800192915050565b6000806040838503121561179f57600080fd5b50508035926020909101359150565b604080825283519082018190526000906020906060840190828701845b828110156117fd57815173ffffffffffffffffffffffffffffffffffffffff16845292840192908401906001016117cb565b5050508381038285015284518082528583019183019060005b8181101561183957611829838551611570565b9284019291840191600101611816565b5090979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561188757600080fd5b8151801515811461162957600080fd5b6118a18185611570565b60406020820152816040820152818360608301376000818301606090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261193257600080fd5b815167ffffffffffffffff8082111561194d5761194d6118f2565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611993576119936118f2565b816040528381528660208588010111156119ac57600080fd5b6119bd8460208301602089016116f5565b9695505050505050565b600080600080600085870360e08112156119e057600080fd5b8651955060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215611a1457600080fd5b506040516060810167ffffffffffffffff8282108183111715611a3957611a396118f2565b8160405260208901518352604089015160208401526060890151604084015282965060808901519250611a6b83611630565b60a089015192955080831115611a8057600080fd5b5050611a8e88828901611921565b92505060c086015190509295509295909350565b60008219821115611adc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b600181811c90821680611af557607f821691505b602082108103610575577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fdfea264697066735822122047fc6e723527f7530a8f95f931d0f8475ebe51e48c055e2a3384e0d826112f1b64736f6c634300080d0033"
    };
});
define("@scom/scom-portal-contract/contracts/AuditInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/AuditInfo.json.ts"], function (require, exports, eth_contract_1, AuditInfo_json_1) {
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
            let packageVersionsAuditorsLength_call = async (packageVersionsId, options) => {
                let result = await this.call('packageVersionsAuditorsLength', [this.wallet.utils.toString(packageVersionsId)], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.packageVersionsAuditorsLength = packageVersionsAuditorsLength_call;
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
define("@scom/scom-portal-contract/contracts/AuditorInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/AuditorInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_foundation", "type": "address" }, { "internalType": "uint256", "name": "_minStakes", "type": "uint256" }, { "internalType": "uint256", "name": "_minEndorsementsRequired", "type": "uint256" }, { "internalType": "uint256", "name": "_cooldownPeriod", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "auditorId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }], "name": "AddAuditor", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }, { "indexed": false, "internalType": "enum AuditorInfo.AuditorStatus", "name": "newState", "type": "uint8" }], "name": "AuditorStateChange", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "endorser", "type": "address" }, { "indexed": true, "internalType": "address", "name": "endorsee", "type": "address" }], "name": "EndorseAuditor", "type": "event" },
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
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }], "name": "isActiveAuditor", "outputs": [{ "internalType": "bool", "name": "isActive", "type": "bool" }], "stateMutability": "view", "type": "function" },
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
        "bytecode": "60a06040523480156200001157600080fd5b5060405162003f6b38038062003f6b833981016040819052620000349162000098565b600080546001600160a01b0319908116331790915560016003556001600160a01b039586166080526004805495909616941693909317909355600655600791909155600855620000f0565b6001600160a01b03811681146200009557600080fd5b50565b600080600080600060a08688031215620000b157600080fd5b8551620000be816200007f565b6020870151909550620000d1816200007f565b6040870151606088015160809098015196999198509695945092505050565b608051613e3562000136600039600081816108b301528181610d010152818161194701528181612177015281816131bb0152818161325701526132af0152613e356000f3fe608060405234801561001057600080fd5b50600436106103365760003560e01c806377903d72116101b2578063ba8ebb5e116100f9578063dc674954116100a2578063ed672c6b1161007c578063ed672c6b14610852578063f2fde38b14610888578063f77cb4e51461089b578063fc0c546a146108ae57600080fd5b8063dc6749541461082d578063e18768c614610836578063e65331d71461083f57600080fd5b8063d4ee1d90116100d3578063d4ee1d90146107b8578063d78f8279146107d8578063d91651af146107eb57600080fd5b8063ba8ebb5e14610771578063bcdb851d14610784578063d2f586951461078d57600080fd5b8063a6d9680b1161015b578063ac4f682511610135578063ac4f682514610738578063b7419ee11461074b578063b7a013c71461075e57600080fd5b8063a6d9680b146106e7578063a6efa7c614610712578063a959d8921461072557600080fd5b80638da5cb5b1161018c5780638da5cb5b146106a15780639c52a7f1146106c1578063a2f55ae5146106d457600080fd5b806377903d721461063757806380ea3de114610658578063850ae5821461066b57600080fd5b806341fbb05011610281578063556d1a091161022a578063605361721161020457806360536172146105e257806361b8bdc8146105ea57806366eb9cec146105fd578063714799fc1461060557600080fd5b8063556d1a09146105a55780635f3416fb146105af5780635f82e791146105cf57600080fd5b80634a3a07a01161025b5780634a3a07a014610554578063537477521461057f5780635438f62b1461059257600080fd5b806341fbb0501461050e57806342bfc5991461052e57806346c78d021461054157600080fd5b80632b6033a4116102e357806335510218116102bd57806335510218146104b55780633b63b0ef146104c85780633fd8cc4e146104db57600080fd5b80632b6033a4146104595780632b96dea61461046c5780633088a622146104a257600080fd5b80630964c95b116103145780630964c95b146103a25780631b8b444c146103de5780631faee12e1461043957600080fd5b806301a546101461033b578063023ad6cb1461035057806304646a4914610399575b600080fd5b61034e6103493660046137eb565b6108d5565b005b61038661035e36600461382d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526013602052604090205490565b6040519081526020015b60405180910390f35b61038660085481565b6103c96103b036600461382d565b6010602052600090815260409020805460019091015482565b60408051928352602083019190915201610390565b6104146103ec3660046137eb565b600a6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610390565b61044c610447366004613848565b6108f6565b60405161039091906138cc565b6104146104673660046138df565b610933565b61038661047a36600461382d565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c602052604090205490565b61034e6104b03660046138df565b610978565b61034e6104c3366004613955565b610ed6565b61034e6104d63660046139a5565b610f1a565b6104fe6104e936600461382d565b60026020526000908152604090205460ff1681565b6040519015158152602001610390565b6004546104149073ffffffffffffffffffffffffffffffffffffffff1681565b61044c61053c366004613848565b6113f3565b61034e61054f3660046139dc565b611426565b610386610562366004613a6f565b600f60209081526000928352604080842090915290825290205481565b61044c61058d366004613848565b611980565b6104146105a03660046138df565b6119b3565b61038662093a8081565b6103866105bd36600461382d565b600b6020526000908152604090205481565b61034e6105dd366004613aa2565b6119cf565b61034e611d9a565b61034e6105f836600461382d565b611ec4565b61034e61206b565b6103c9610613366004613a6f565b600d6020908152600092835260408084209091529082529020805460019091015482565b61064a610645366004613ae2565b6121f1565b604051610390929190613b6e565b61034e6106663660046137eb565b6123ea565b61038661067936600461382d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526011602052604090205490565b6000546104149073ffffffffffffffffffffffffffffffffffffffff1681565b61034e6106cf36600461382d565b6124b7565b61034e6106e236600461382d565b612557565b6103866106f5366004613a6f565b601260209081526000928352604080842090915290825290205481565b61034e6107203660046139a5565b6125fa565b61034e6107333660046139a5565b612a74565b61034e6107463660046137eb565b612aa7565b6104fe61075936600461382d565b612b00565b61041461076c3660046138df565b612b0b565b61041461077f3660046138df565b612b27565b61038660055481565b61038661079b366004613a6f565b601460209081526000928352604080842090915290825290205481565b6001546104149073ffffffffffffffffffffffffffffffffffffffff1681565b61044c6107e6366004613848565b612b43565b61081e6107f936600461382d565b60096020526000908152604090208054600182015460029092015460ff909116919083565b60405161039093929190613be0565b61038660075481565b61038660065481565b61034e61084d36600461382d565b612b76565b61038661086036600461382d565b73ffffffffffffffffffffffffffffffffffffffff166000908152600e602052604090205490565b61034e61089636600461382d565b612cb3565b61034e6108a93660046137eb565b612d4a565b6104147f000000000000000000000000000000000000000000000000000000000000000081565b6108e0336000612da3565b5080156108f3576108f3338260016119cf565b50565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600c60205260409020606090610929908484612fbf565b90505b9392505050565b6013602052816000526040600020818154811061094f57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b6002600354036109e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600381905573ffffffffffffffffffffffffffffffffffffffff831660009081526009602052604090205460ff166003811115610a2a57610a2a613b04565b03610a91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f61756469746f7220667265657a6564000000000000000000000000000000000060448201526064016109e0565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600b602052604090205480610b1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6e6f7420612061756469746f720000000000000000000000000000000000000060448201526064016109e0565b60008211610b88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d20300000000000000000000000000000000000000000000060448201526064016109e0565b336000908152600d6020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152902060010154610c22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f6e6f207374616b6573000000000000000000000000000000000000000000000060448201526064016109e0565b336000908152600d6020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812060010154610c61908490613c2e565b336000908152600d6020908152604080832073ffffffffffffffffffffffffffffffffffffffff891684528252808320600190810185905560099092528220015491925090610cb1908590613c2e565b73ffffffffffffffffffffffffffffffffffffffff8616600090815260096020526040812060010182905560085491925003610d6257610d2873ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633866130b6565b60405184815233907f1e85dc785ce23b2937c3586b4fe81fb37118b9318e9203bea983f2c5bb6ca5959060200160405180910390a2610d9e565b336000908152601060205260408120805490918691839190610d85908490613c45565b9091555050600854610d979042613c45565b6001909101555b600373ffffffffffffffffffffffffffffffffffffffff861660009081526009602052604090205460ff166003811115610dda57610dda613b04565b14158015610de9575060065481105b15610e6f5773ffffffffffffffffffffffffffffffffffffffff851660008181526009602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055517f3750f564beac15fc522045468574a67bfc12279c850369be8af3e187f184609891610e6691613c5d565b60405180910390a25b604080518581526020810183905290810183905273ffffffffffffffffffffffffffffffffffffffff86169033907f9b136eeb809557ed5e1e9e2c64c0f8f0ffb70589653e529e831c55b9b4d5b4259060600160405180910390a350506001600355505050565b8060005b81811015610f1457610f0c848483818110610ef757610ef7613c6b565b90506020020160208101906105f8919061382d565b600101610eda565b50505050565b336000908152601160209081526040808320546012835281842073ffffffffffffffffffffffffffffffffffffffff87168552909252909120548115801590610fbc5750336000908152601160205260409020805473ffffffffffffffffffffffffffffffffffffffff8616919083908110610f9857610f98613c6b565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b611022576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f7420616e20656e646f72736572000000000000000000000000000000000060448201526064016109e0565b61102d600183613c2e565b8110156111105733600090815260116020526040812061104e600185613c2e565b8154811061105e5761105e613c6b565b600091825260208083209091015433835260119091526040909120805473ffffffffffffffffffffffffffffffffffffffff90921692508291849081106110a7576110a7613c6b565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9485161790553382526012815260408083209490931682529290925290208190555b33600081815260126020908152604080832073ffffffffffffffffffffffffffffffffffffffff891684528252808320839055928252601190522080548061115a5761115a613c9a565b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff8616825260138152604080832054601483528184203385529092529091205490925090506111fa600183613c2e565b8110156112f95773ffffffffffffffffffffffffffffffffffffffff84166000908152601360205260408120611231600185613c2e565b8154811061124157611241613c6b565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff88811684526013909252604090922080549190921692508291908490811061128e5761128e613c6b565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff94851617905587831682526014815260408083209490931682529290925290208190555b73ffffffffffffffffffffffffffffffffffffffff841660008181526014602090815260408083203384528252808320839055928252601390522080548061134357611343613c9a565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905501905582156113aa576113aa84611ec4565b60405173ffffffffffffffffffffffffffffffffffffffff85169033907fe5c389827ce15e9fd07feaa438467bebbe4f5f705c8035dbad53edd0ca4a850490600090a350505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152601360205260409020606090610929908484612fbf565b3360009081526002602052604090205460ff166114c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016109e0565b600260035403611531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109e0565b6002600381905573ffffffffffffffffffffffffffffffffffffffff871660009081526009602052604090205460ff16600381111561157257611572613b04565b146115d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f61756469746f72206e6f7420667265657a65640000000000000000000000000060448201526064016109e0565b82818114611643576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6c656e677468206e6f74206d617463686564000000000000000000000000000060448201526064016109e0565b6000805b828210156118a257600087878481811061166357611663613c6b565b9050602002016020810190611678919061382d565b9050600086868581811061168e5761168e613c6b565b905060200201359050600081600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546117249190613c2e565b905080600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550600082600960008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546117fa9190613c2e565b73ffffffffffffffffffffffffffffffffffffffff8e16600090815260096020526040902060010181905590506118318386613c45565b604080518581526020810184905290810184905290955073ffffffffffffffffffffffffffffffffffffffff80861691908f16907fca396a14387af5b1b74d05a2307e3dbe06adbbbc22dc896fc7c19a09dcf1447d9060600160405180910390a35050600190930192506116479050565b87156119295773ffffffffffffffffffffffffffffffffffffffff891660008181526009602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055517f3750f564beac15fc522045468574a67bfc12279c850369be8af3e187f18460989161192091613c5d565b60405180910390a25b6004546119709073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169116836130b6565b5050600160035550505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152601160205260409020606090610929908484612fbf565b6011602052816000526040600020818154811061094f57600080fd5b600260035403611a3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109e0565b600260035573ffffffffffffffffffffffffffffffffffffffff83166000908152600b6020526040902054611acc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6e6f7420612061756469746f720000000000000000000000000000000000000060448201526064016109e0565b60008211611b36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d20300000000000000000000000000000000000000000000060448201526064016109e0565b611b3f8261318a565b336000908152600c6020908152604080832054600d835281842073ffffffffffffffffffffffffffffffffffffffff8916855290925282209294509190821580611be45750336000908152600c602052604090208254815473ffffffffffffffffffffffffffffffffffffffff89169291908110611bbf57611bbf613c6b565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b15611cbc5750336000818152600c6020908152604080832080546001818101835591855283852001805473ffffffffffffffffffffffffffffffffffffffff8c167fffffffffffffffffffffffff00000000000000000000000000000000000000009182168117909255835180850185528981528086018c8152888852600d875285882093885292865284872090518155915191830191909155600e8085528386208054600f875285882089895287529487208590559085529183018255908452919092209091018054909116909117905583611cd6565b848260010154611ccc9190613c45565b6001830181905590505b73ffffffffffffffffffffffffffffffffffffffff8616600090815260096020526040812060010154611d0a908790613c45565b73ffffffffffffffffffffffffffffffffffffffff881660008181526009602090815260409182902060010184905581518a81529081018490529081018590529192509033907fc747caa404e8464088e0818bbf250e87484c9391ac8c1d91c89ecab18dee9e779060600160405180910390a38415611d8c57611d8c87611ec4565b505060016003555050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314611e41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016109e0565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b600273ffffffffffffffffffffffffffffffffffffffff821660009081526009602052604090205460ff166003811115611f0057611f00613b04565b03611f67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f41756469746f7220667265657a6564000000000000000000000000000000000060448201526064016109e0565b600080611f7383613339565b73ffffffffffffffffffffffffffffffffffffffff851660009081526009602052604090206002810183905591935091506003815460ff166003811115611fbc57611fbc613b04565b14610f1457600082611fcf576000611fd2565b60015b8254909150819083907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183600381111561201157612011613b04565b02179055508473ffffffffffffffffffffffffffffffffffffffff167f3750f564beac15fc522045468574a67bfc12279c850369be8af3e187f18460988260405161205c9190613c5d565b60405180910390a25050505050565b6002600354036120d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109e0565b60026003553360009081526010602052604090206001810154421015612159576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c65617365207761697400000000000000000000000000000000000000000060448201526064016109e0565b8054336000818152601060205260408120818155600101556121b3907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690836130b6565b60405181815233907f1e85dc785ce23b2937c3586b4fe81fb37118b9318e9203bea983f2c5bb6ca5959060200160405180910390a250506001600355565b60608083600003612205576001935061221a565b600554600101841061221a5760055460010193505b600554600101838501111561223457836005546001010392505b8267ffffffffffffffff81111561224d5761224d613cc9565b604051908082528060200260200182016040528015612276578160200160208202803683370190505b5091508267ffffffffffffffff81111561229257612292613cc9565b6040519080825280602002602001820160405280156122e857816020015b6122d56040805160608101909152806000815260200160008152602001600081525090565b8152602001906001900390816122b05790505b50905060005b838110156123e2576000858152600a6020526040902054835173ffffffffffffffffffffffffffffffffffffffff90911690819085908490811061233457612334613c6b565b73ffffffffffffffffffffffffffffffffffffffff928316602091820292909201810191909152908216600090815260099091526040908190208151606081019092528054829060ff16600381111561238f5761238f613b04565b60038111156123a0576123a0613b04565b8152602001600182015481526020016002820154815250508383815181106123ca576123ca613c6b565b602090810291909101015250600194850194016122ee565b509250929050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461240e57600080fd5b62093a8081111561247b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4d617820636f6f6c646f776e20706572696f64203e2031207765656b2100000060448201526064016109e0565b60088190556040518181527f94714a16ed27a5dc1201f16c27868fa024cb3b7420dd30baa7d06854c4cc54b3906020015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146124db57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491016124ac565b60005473ffffffffffffffffffffffffffffffffffffffff16331461257b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016124ac565b336000818152600b60205260409020549073ffffffffffffffffffffffffffffffffffffffff8416900361268a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f63616e6e6f742073656c6620656e646f7273650000000000000000000000000060448201526064016109e0565b600081116126f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f656e646f72736572206973206e6f7420616e2061756469746f7200000000000060448201526064016109e0565b60013360009081526009602052604090205460ff16600381111561271a5761271a613b04565b14801561273b57506007543360009081526009602052604090206002015410155b80612769575060033360009081526009602052604090205460ff16600381111561276757612767613b04565b145b6127f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f656e646f72736572206973206e6f7420616e206163746976652061756469746f60448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016109e0565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600b6020526040902054612881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f656e646f72736565206973206e6f7420616e2061756469746f7200000000000060448201526064016109e0565b3360009081526011602052604090205480158061290957503360009081526011602090815260408083206012835281842073ffffffffffffffffffffffffffffffffffffffff89168086529352922054825491929181106128e4576128e4613c6b565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b61296f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f616c726561647920656e646f727365640000000000000000000000000000000060448201526064016109e0565b33600081815260116020908152604080832080546001818101835591855283852001805473ffffffffffffffffffffffffffffffffffffffff8b167fffffffffffffffffffffffff00000000000000000000000000000000000000009182168117909255868652601285528386208287528552838620979097556013845282852080549283018155855283852082018054909716861790965594835260148252808320938352929052208190558215612a2b57612a2b84611ec4565b60405173ffffffffffffffffffffffffffffffffffffffff85169033907f13b3e4cc63f55d83a16f799af725d38dd09798d29ee1429b1c818cb0817c464d90600090a350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314612a9857600080fd5b612aa28282612da3565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314612acb57600080fd5b60078190556040518181527f070cb090db190acd8e64e84db704a8ac10aaa5a11e16a32c038ea2e5b3b3a798906020016124ac565b600061092c82613339565b600c602052816000526040600020818154811061094f57600080fd5b600e602052816000526040600020818154811061094f57600080fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600e60205260409020606090610929908484612fbf565b60005473ffffffffffffffffffffffffffffffffffffffff163314612b9a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600b602052604090205480612c27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f61756469746f72206e6f7420657869737400000000000000000000000000000060448201526064016109e0565b73ffffffffffffffffffffffffffffffffffffffff82166000818152600960205260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600290811790915590517f3750f564beac15fc522045468574a67bfc12279c850369be8af3e187f184609891612ca791613c5d565b60405180910390a25050565b60005473ffffffffffffffffffffffffffffffffffffffff163314612cd757600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016124ac565b60005473ffffffffffffffffffffffffffffffffffffffff163314612d6e57600080fd5b60068190556040518181527fb4ca933a402e9f092188dbff00dbaaa4ef3c1596895be12fa213f0d509ea3470906020016124ac565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600b602052604081205490819003612f2a57600560008154612de090613cf8565b9190508190559050604051806060016040528083612dff576000612e02565b60035b6003811115612e1357612e13613b04565b815260006020808301829052604092830182905273ffffffffffffffffffffffffffffffffffffffff8716825260099052208151815482907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836003811115612e8157612e81613b04565b021790555060208281015160018301556040928301516002909201919091556000838152600a825282812080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8816908117909155808252600b9092528281208490559151909183917f97dd5b34cd63e6c0265c2c5a7ad12bc5b97e2dbe386080944ad25a3efa5aa4b59190a3612fb9565b8115612fb95773ffffffffffffffffffffffffffffffffffffffff83166000818152600960205260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600390811790915590517f3750f564beac15fc522045468574a67bfc12279c850369be8af3e187f184609891612fb091613c5d565b60405180910390a25b92915050565b825460609080841115612fd0578093505b80831115612fdc578092505b8267ffffffffffffffff811115612ff557612ff5613cc9565b60405190808252806020026020018201604052801561301e578160200160208202803683370190505b50915060005b838110156130ad57855460018601958791811061304357613043613c6b565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683828151811061308057613080613c6b565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152600101613024565b50509392505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052612aa29084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261351f565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015613217573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061323b9190613d30565b905061327f73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633308561362b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561330b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061332f9190613d30565b612fb99190613c2e565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600b60205260408120548190806133c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f7420616e2061756469746f7200000000000000000000000000000000000060448201526064016109e0565b73ffffffffffffffffffffffffffffffffffffffff84166000908152601360205260408120805490915b818110156134b65760006009600085848154811061341257613412613c6b565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff168352820192909252604001902090506001815460ff16600381111561345d5761345d613b04565b1480156134705750600754816002015410155b8061349057506003815460ff16600381111561348e5761348e613b04565b145b156134a3578661349f81613cf8565b9750505b50806134ae81613cf8565b9150506133f2565b5073ffffffffffffffffffffffffffffffffffffffff8616600090815260096020526040902060075486108015906134f45750600654816001015410155b8061351457506003815460ff16600381111561351257613512613b04565b145b945050505050915091565b6000613581826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166136899092919063ffffffff16565b805190915015612aa2578080602001905181019061359f9190613d49565b612aa2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016109e0565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610f149085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401613108565b606061092984846000858573ffffffffffffffffffffffffffffffffffffffff85163b613712576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109e0565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161373b9190613d92565b60006040518083038185875af1925050503d8060008114613778576040519150601f19603f3d011682016040523d82523d6000602084013e61377d565b606091505b509150915061378d828286613798565b979650505050505050565b606083156137a757508161092c565b8251156137b75782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e09190613dae565b6000602082840312156137fd57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461382857600080fd5b919050565b60006020828403121561383f57600080fd5b61092c82613804565b60008060006060848603121561385d57600080fd5b61386684613804565b95602085013595506040909401359392505050565b600081518084526020808501945080840160005b838110156138c157815173ffffffffffffffffffffffffffffffffffffffff168752958201959082019060010161388f565b509495945050505050565b60208152600061092c602083018461387b565b600080604083850312156138f257600080fd5b6138fb83613804565b946020939093013593505050565b60008083601f84011261391b57600080fd5b50813567ffffffffffffffff81111561393357600080fd5b6020830191508360208260051b850101111561394e57600080fd5b9250929050565b6000806020838503121561396857600080fd5b823567ffffffffffffffff81111561397f57600080fd5b61398b85828601613909565b90969095509350505050565b80151581146108f357600080fd5b600080604083850312156139b857600080fd5b6139c183613804565b915060208301356139d181613997565b809150509250929050565b600080600080600080608087890312156139f557600080fd5b6139fe87613804565b95506020870135613a0e81613997565b9450604087013567ffffffffffffffff80821115613a2b57600080fd5b613a378a838b01613909565b90965094506060890135915080821115613a5057600080fd5b50613a5d89828a01613909565b979a9699509497509295939492505050565b60008060408385031215613a8257600080fd5b613a8b83613804565b9150613a9960208401613804565b90509250929050565b600080600060608486031215613ab757600080fd5b613ac084613804565b9250602084013591506040840135613ad781613997565b809150509250925092565b60008060408385031215613af557600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60048110613b6a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b60006040808352613b818184018661387b565b83810360208581019190915285518083528682019282019060005b81811015613bd2578451613bb1848251613b33565b80850151848601528601518684015293830193606090920191600101613b9c565b509098975050505050505050565b60608101613bee8286613b33565b602082019390935260400152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015613c4057613c40613bff565b500390565b60008219821115613c5857613c58613bff565b500190565b60208101612fb98284613b33565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613d2957613d29613bff565b5060010190565b600060208284031215613d4257600080fd5b5051919050565b600060208284031215613d5b57600080fd5b815161092c81613997565b60005b83811015613d81578181015183820152602001613d69565b83811115610f145750506000910152565b60008251613da4818460208701613d66565b9190910192915050565b6020815260008251806020840152613dcd816040850160208701613d66565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212208bcb6983e0f8daa7fc6c35e14193204626316e34cc6e8f9c7667fc50f4aa603f64736f6c634300080d0033"
    };
});
define("@scom/scom-portal-contract/contracts/AuditorInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/AuditorInfo.json.ts"], function (require, exports, eth_contract_2, AuditorInfo_json_1) {
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
        parseAuditorStateChangeEvent(receipt) {
            return this.parseEvents(receipt, "AuditorStateChange").map(e => this.decodeAuditorStateChangeEvent(e));
        }
        decodeAuditorStateChangeEvent(event) {
            let result = event.data;
            return {
                auditor: result.auditor,
                newState: new eth_contract_2.BigNumber(result.newState),
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
define("@scom/scom-portal-contract/contracts/Authorization.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/Authorization.json.ts'/> 
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
define("@scom/scom-portal-contract/contracts/Authorization.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/Authorization.json.ts"], function (require, exports, eth_contract_3, Authorization_json_1) {
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
define("@scom/scom-portal-contract/contracts/DomainInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/DomainInfo.json.ts'/> 
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
define("@scom/scom-portal-contract/contracts/DomainInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/DomainInfo.json.ts"], function (require, exports, eth_contract_4, DomainInfo_json_1) {
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
define("@scom/scom-portal-contract/contracts/ModuleInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/ModuleInfo.json.ts'/> 
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
define("@scom/scom-portal-contract/contracts/ModuleInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/ModuleInfo.json.ts"], function (require, exports, eth_contract_5, ModuleInfo_json_1) {
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
define("@scom/scom-portal-contract/contracts/NFTManager.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/NFTManager.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract Scom", "name": "_scom", "type": "address" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "minter", "type": "address" }, { "indexed": true, "internalType": "contract NodeNFT", "name": "nft", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakes", "type": "uint256" }], "name": "AddStakes", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "burner", "type": "address" }, { "indexed": true, "internalType": "contract NodeNFT", "name": "nft", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Burn", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "minter", "type": "address" }, { "indexed": true, "internalType": "contract NodeNFT", "name": "nft", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakes", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }], "name": "Mint", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract NodeNFT", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "stakes", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" }], "name": "NewNFT", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract NodeNFT", "name": "nft", "type": "address" }], "name": "Pause", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract NodeNFT", "name": "nft", "type": "address" }], "name": "Resume", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "protocolFeeTo", "type": "address" }], "name": "SetProtocolFeeTo", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [{ "internalType": "contract NodeNFT", "name": "nft", "type": "address" }, { "internalType": "bytes32", "name": "desc", "type": "bytes32" }, { "internalType": "uint256", "name": "stakes", "type": "uint256" }, { "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "internalType": "bool", "name": "enabled", "type": "bool" }], "name": "addNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract NodeNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "stakes", "type": "uint256" }], "name": "addStakes", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract NodeNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getNfts", "outputs": [{ "components": [{ "internalType": "contract NodeNFT", "name": "nft", "type": "address" }, { "internalType": "bytes32", "name": "desc", "type": "bytes32" }, { "internalType": "uint256", "name": "stakes", "type": "uint256" }, { "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "internalType": "bool", "name": "paused", "type": "bool" }], "internalType": "struct NFTManager.NftInfo[]", "name": "_nfts", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract NodeNFT", "name": "", "type": "address" }], "name": "invNfts", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract NodeNFT", "name": "nft", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nfts", "outputs": [{ "internalType": "contract NodeNFT", "name": "nft", "type": "address" }, { "internalType": "bytes32", "name": "desc", "type": "bytes32" }, { "internalType": "uint256", "name": "stakes", "type": "uint256" }, { "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "internalType": "bool", "name": "paused", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "nftsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract NodeNFT", "name": "nft", "type": "address" }], "name": "pauseNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "protocolFeeBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "protocolFeeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract NodeNFT", "name": "nft", "type": "address" }], "name": "resumeNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "scom", "outputs": [{ "internalType": "contract Scom", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "name": "setProtocolFeeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "contract NodeNFT", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "staked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "transferProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b5060405162002718380380620027188339810160408190526200003491620000c0565b60008054336001600160a01b03199182161790915560016003556001600160a01b03838116608052600480549092169083169081179091556040519081527f97011acc091d73d67f71ff78bdb3837ce0103f4a52e95b01f50a28b9f7821ba69060200160405180910390a15050620000ff565b6001600160a01b0381168114620000bd57600080fd5b50565b60008060408385031215620000d457600080fd5b8251620000e181620000a7565b6020840151909250620000f481620000a7565b809150509250929050565b6080516125e162000137600039600081816103a201528181610d3f01528181610f8a01528181611219015261192501526125e16000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c8063915db1df116100e3578063d4ee1d901161008c578063ef36925211610066578063ef369252146103d7578063f2fde38b146103f7578063fac6350d1461040a57600080fd5b8063d4ee1d901461037d578063da6a50151461039d578063e0e6799f146103c457600080fd5b80639dc29fac116100bd5780639dc29fac1461034f578063a2f55ae514610362578063ac0277401461037557600080fd5b8063915db1df14610309578063964f452e1461031c5780639c52a7f11461033c57600080fd5b80633fd8cc4e1161014557806381fdc72b1161011f57806381fdc72b146102a95780638da5cb5b146102b15780638f0312d0146102f657600080fd5b80633fd8cc4e1461025b578063605361721461028e5780636a6278421461029657600080fd5b80631995a61e116101765780631995a61e146101c3578063265aa621146101d65780633b0d91ac1461022a57600080fd5b80630a22d68c1461019257806318adbb4b146101ae575b600080fd5b61019b60055481565b6040519081526020015b60405180910390f35b6101c16101bc3660046121e7565b61042a565b005b6101c16101d1366004612212565b61068c565b6101e96101e4366004612268565b6109cb565b6040805173ffffffffffffffffffffffffffffffffffffffff909616865260208601949094529284019190915260608301521515608082015260a0016101a5565b61019b610238366004612281565b600860209081526000938452604080852082529284528284209052825290205481565b61027e6102693660046121e7565b60026020526000908152604090205460ff1681565b60405190151581526020016101a5565b6101c1610a26565b61019b6102a43660046121e7565b610b50565b6101c1610ec4565b6000546102d19073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a5565b6101c16103043660046122c2565b610fbc565b6101c16103173660046121e7565b6112ea565b61019b61032a3660046121e7565b60076020526000908152604090205481565b6101c161034a3660046121e7565b611543565b6101c161035d3660046122f7565b6115ea565b6101c16103703660046121e7565b61199e565b60065461019b565b6001546102d19073ffffffffffffffffffffffffffffffffffffffff1681565b6102d17f000000000000000000000000000000000000000000000000000000000000000081565b6101c16103d23660046121e7565b611a41565b6004546102d19073ffffffffffffffffffffffffffffffffffffffff1681565b6101c16104053660046121e7565b611b55565b61041d610418366004612323565b611bec565b6040516101a59190612345565b3360009081526002602052604090205460ff166104ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6006546104da57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8116600090815260076020526040812054600680549091908110610515576105156123cb565b60009182526020909120600590910201805490915073ffffffffffffffffffffffffffffffffffffffff8381169116146105ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6674206e6f742065786973747300000000000000000000000000000000000060448201526064016104c5565b600481015460ff161561061a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4e465420616c726561647920706175736564000000000000000000000000000060448201526064016104c5565b6004810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560405173ffffffffffffffffffffffffffffffffffffffff8316907f5ee71a369c8672edded508e624ffc9257fa1ae6886ef32905c18e60196bca39990600090a25050565b3360009081526002602052604090205460ff1661072b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016104c5565b600654158061079a575073ffffffffffffffffffffffffffffffffffffffff8516600081815260076020526040902054600680549091908110610770576107706123cb565b600091825260209091206005909102015473ffffffffffffffffffffffffffffffffffffffff1614155b610800576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6674206578697374730000000000000000000000000000000000000000000060448201526064016104c5565b600680546040805160a08101825273ffffffffffffffffffffffffffffffffffffffff89811680835260208084018b81528486018b815260608087018c81528b156080890181815260018c018d5560009c8d5298517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f60058d0290810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909a169190911790985593517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4088015591517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4187015590517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4286015594517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4390940180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169415159490941790935581875260078152958490208590558351888152958601899052901592850192909252919290917f4b37167922f34a6441d5a276ea7faf01f7647ab64d3decc970fd8df129612684910160405180910390a2505050505050565b600681815481106109db57600080fd5b60009182526020909120600590910201805460018201546002830154600384015460049094015473ffffffffffffffffffffffffffffffffffffffff90931694509092909160ff1685565b60015473ffffffffffffffffffffffffffffffffffffffff163314610acd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016104c5565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b6000600260035403610bbe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104c5565b6002600355600654610bcf57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8216600090815260076020526040812054600680549091908110610c0a57610c0a6123cb565b60009182526020909120600590910201805490915073ffffffffffffffffffffffffffffffffffffffff848116911614610ca0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6674206e6f742065786973747300000000000000000000000000000000000060448201526064016104c5565b600481015460ff1615610d0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4e4654207061757365640000000000000000000000000000000000000000000060448201526064016104c5565b610d67333083600301548460020154610d289190612429565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016929190611d77565b6040517f6a62784200000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff841690636a627842906024016020604051808303816000875af1158015610dd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df79190612441565b600282015433600090815260086020908152604080832073ffffffffffffffffffffffffffffffffffffffff8916845282528083208584529091528120919091556003830154600580549395509092909190610e54908490612429565b909155505060028101546003820154604080519283526020830191909152839173ffffffffffffffffffffffffffffffffffffffff86169133917f458f5fa412d0f69b08dd84872b0215675cc67bc1d5b6fd93300a1c3878b86196910160405180910390a4506001600355919050565b600260035403610f30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104c5565b600260035560045473ffffffffffffffffffffffffffffffffffffffff1615801590610f5e57506000600554115b15610fb557600580546000909155600454610fb39073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116911683611e59565b505b6001600355565b600260035403611028576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104c5565b600260035560065461103957600080fd5b73ffffffffffffffffffffffffffffffffffffffff8316600090815260076020526040812054600680549091908110611074576110746123cb565b60009182526020909120600590910201805490915073ffffffffffffffffffffffffffffffffffffffff85811691161461110a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6674206e6f742065786973747300000000000000000000000000000000000060448201526064016104c5565b600481015460ff1615611179576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4e4654207061757365640000000000000000000000000000000000000000000060448201526064016104c5565b6040517f8b63ac200000000000000000000000000000000000000000000000000000000081523360048201526024810184905273ffffffffffffffffffffffffffffffffffffffff851690638b63ac2090604401600060405180830381600087803b1580156111e757600080fd5b505af11580156111fb573d6000803e3d6000fd5b5061124392505073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169050333085611d77565b33600090815260086020908152604080832073ffffffffffffffffffffffffffffffffffffffff8816845282528083208684529091528120805484929061128b908490612429565b9091555050604051828152839073ffffffffffffffffffffffffffffffffffffffff86169033907f4b2b507896c89fbe3400debefa7b0e2c281915a21868dc8a98daf4ab990ffc459060200160405180910390a4505060016003555050565b3360009081526002602052604090205460ff16611389576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016104c5565b60065461139557600080fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600760205260408120546006805490919081106113d0576113d06123cb565b60009182526020909120600590910201805490915073ffffffffffffffffffffffffffffffffffffffff838116911614611466576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6674206e6f742065786973747300000000000000000000000000000000000060448201526064016104c5565b600481015460ff166114d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4654206e6f742070617573656400000000000000000000000000000000000060448201526064016104c5565b6004810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905560405173ffffffffffffffffffffffffffffffffffffffff8316907fdc5393690c6579b944c67b47465cff82c4f93733768919fe80c29ef57717776390600090a25050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461156757600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b600260035403611656576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104c5565b600260035560065461166757600080fd5b73ffffffffffffffffffffffffffffffffffffffff82166000908152600760205260408120546006805490919081106116a2576116a26123cb565b60009182526020909120600590910201805490915073ffffffffffffffffffffffffffffffffffffffff848116911614611738576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6674206e6f742065786973747300000000000000000000000000000000000060448201526064016104c5565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff841690636352211e90602401602060405180830381865afa1580156117a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c7919061245a565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461185b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e657200000000000000000000000000000000000060448201526064016104c5565b33600081815260086020908152604080832073ffffffffffffffffffffffffffffffffffffffff88168085529083528184208785529092528083208054939055517f9dc29fac0000000000000000000000000000000000000000000000000000000081526004810193909352602483018590529091639dc29fac90604401600060405180830381600087803b1580156118f357600080fd5b505af1158015611907573d6000803e3d6000fd5b5061194e92505073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690503383611e59565b604051839073ffffffffffffffffffffffffffffffffffffffff86169033907fbac40739b0d4ca32fa2d82fc91630465ba3eddd1598da6fca393b26fb63b945390600090a4505060016003555050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146119c257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016115df565b60005473ffffffffffffffffffffffffffffffffffffffff163314611a6557600080fd5b73ffffffffffffffffffffffffffffffffffffffff8116611ae2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f0000000000000060448201526064016104c5565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f97011acc091d73d67f71ff78bdb3837ce0103f4a52e95b01f50a28b9f7821ba6906020016115df565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b7957600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016115df565b600654606090831015611d7157600654611c068385612429565b1115611c1d57600654611c1a908490612477565b91505b8167ffffffffffffffff811115611c3657611c3661248e565b604051908082528060200260200182016040528015611cad57816020015b6040805160a0810182526000808252602080830182905292820181905260608201819052608082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909201910181611c545790505b50905060005b82811015611d6f576006611cc78583612429565b81548110611cd757611cd76123cb565b60009182526020918290206040805160a0810182526005909302909101805473ffffffffffffffffffffffffffffffffffffffff1683526001810154938301939093526002830154908201526003820154606082015260049091015460ff16151560808201528251839083908110611d5157611d516123cb565b60200260200101819052508080611d67906124bd565b915050611cb3565b505b92915050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611e539085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611eb4565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611eaf9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611dd1565b505050565b6000611f16826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fc09092919063ffffffff16565b805190915015611eaf5780806020019051810190611f3491906124f5565b611eaf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104c5565b6060611fcf8484600085611fd9565b90505b9392505050565b60608247101561206b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104c5565b73ffffffffffffffffffffffffffffffffffffffff85163b6120e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104c5565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612112919061253e565b60006040518083038185875af1925050503d806000811461214f576040519150601f19603f3d011682016040523d82523d6000602084013e612154565b606091505b509150915061216482828661216f565b979650505050505050565b6060831561217e575081611fd2565b82511561218e5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c5919061255a565b73ffffffffffffffffffffffffffffffffffffffff811681146121e457600080fd5b50565b6000602082840312156121f957600080fd5b8135611fd2816121c2565b80151581146121e457600080fd5b600080600080600060a0868803121561222a57600080fd5b8535612235816121c2565b9450602086013593506040860135925060608601359150608086013561225a81612204565b809150509295509295909350565b60006020828403121561227a57600080fd5b5035919050565b60008060006060848603121561229657600080fd5b83356122a1816121c2565b925060208401356122b1816121c2565b929592945050506040919091013590565b6000806000606084860312156122d757600080fd5b83356122e2816121c2565b95602085013595506040909401359392505050565b6000806040838503121561230a57600080fd5b8235612315816121c2565b946020939093013593505050565b6000806040838503121561233657600080fd5b50508035926020909101359150565b602080825282518282018190526000919060409081850190868401855b828110156123be578151805173ffffffffffffffffffffffffffffffffffffffff168552868101518786015285810151868601526060808201519086015260809081015115159085015260a09093019290850190600101612362565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561243c5761243c6123fa565b500190565b60006020828403121561245357600080fd5b5051919050565b60006020828403121561246c57600080fd5b8151611fd2816121c2565b600082821015612489576124896123fa565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036124ee576124ee6123fa565b5060010190565b60006020828403121561250757600080fd5b8151611fd281612204565b60005b8381101561252d578181015183820152602001612515565b83811115611e535750506000910152565b60008251612550818460208701612512565b9190910192915050565b6020815260008251806020840152612579816040850160208701612512565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220dc133891c692490930345a9e49ab0440c97ad424995766b1bd2559ad543e677964736f6c634300080d0033"
    };
});
define("@scom/scom-portal-contract/contracts/NFTManager.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/NFTManager.json.ts"], function (require, exports, eth_contract_6, NFTManager_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NFTManager = void 0;
    class NFTManager extends eth_contract_6.Contract {
        constructor(wallet, address) {
            super(wallet, address, NFTManager_json_1.default.abi, NFTManager_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.scom, params.protocolFeeTo], options);
        }
        parseAddStakesEvent(receipt) {
            return this.parseEvents(receipt, "AddStakes").map(e => this.decodeAddStakesEvent(e));
        }
        decodeAddStakesEvent(event) {
            let result = event.data;
            return {
                minter: result.minter,
                nft: result.nft,
                tokenId: new eth_contract_6.BigNumber(result.tokenId),
                stakes: new eth_contract_6.BigNumber(result.stakes),
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
        parseBurnEvent(receipt) {
            return this.parseEvents(receipt, "Burn").map(e => this.decodeBurnEvent(e));
        }
        decodeBurnEvent(event) {
            let result = event.data;
            return {
                burner: result.burner,
                nft: result.nft,
                tokenId: new eth_contract_6.BigNumber(result.tokenId),
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
        parseMintEvent(receipt) {
            return this.parseEvents(receipt, "Mint").map(e => this.decodeMintEvent(e));
        }
        decodeMintEvent(event) {
            let result = event.data;
            return {
                minter: result.minter,
                nft: result.nft,
                tokenId: new eth_contract_6.BigNumber(result.tokenId),
                stakes: new eth_contract_6.BigNumber(result.stakes),
                protocolFee: new eth_contract_6.BigNumber(result.protocolFee),
                _event: event
            };
        }
        parseNewNFTEvent(receipt) {
            return this.parseEvents(receipt, "NewNFT").map(e => this.decodeNewNFTEvent(e));
        }
        decodeNewNFTEvent(event) {
            let result = event.data;
            return {
                nft: result.nft,
                stakes: new eth_contract_6.BigNumber(result.stakes),
                protocolFee: new eth_contract_6.BigNumber(result.protocolFee),
                enabled: result.enabled,
                _event: event
            };
        }
        parsePauseEvent(receipt) {
            return this.parseEvents(receipt, "Pause").map(e => this.decodePauseEvent(e));
        }
        decodePauseEvent(event) {
            let result = event.data;
            return {
                nft: result.nft,
                _event: event
            };
        }
        parseResumeEvent(receipt) {
            return this.parseEvents(receipt, "Resume").map(e => this.decodeResumeEvent(e));
        }
        decodeResumeEvent(event) {
            let result = event.data;
            return {
                nft: result.nft,
                _event: event
            };
        }
        parseSetProtocolFeeToEvent(receipt) {
            return this.parseEvents(receipt, "SetProtocolFeeTo").map(e => this.decodeSetProtocolFeeToEvent(e));
        }
        decodeSetProtocolFeeToEvent(event) {
            let result = event.data;
            return {
                protocolFeeTo: result.protocolFeeTo,
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
            let getNftsParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
            let getNfts_call = async (params, options) => {
                let result = await this.call('getNfts', getNftsParams(params), options);
                return (result.map(e => ({
                    nft: e.nft,
                    desc: e.desc,
                    stakes: new eth_contract_6.BigNumber(e.stakes),
                    protocolFee: new eth_contract_6.BigNumber(e.protocolFee),
                    paused: e.paused
                })));
            };
            this.getNfts = getNfts_call;
            let invNfts_call = async (param1, options) => {
                let result = await this.call('invNfts', [param1], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.invNfts = invNfts_call;
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
            let nfts_call = async (param1, options) => {
                let result = await this.call('nfts', [this.wallet.utils.toString(param1)], options);
                return {
                    nft: result.nft,
                    desc: result.desc,
                    stakes: new eth_contract_6.BigNumber(result.stakes),
                    protocolFee: new eth_contract_6.BigNumber(result.protocolFee),
                    paused: result.paused
                };
            };
            this.nfts = nfts_call;
            let nftsLength_call = async (options) => {
                let result = await this.call('nftsLength', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.nftsLength = nftsLength_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let protocolFeeBalance_call = async (options) => {
                let result = await this.call('protocolFeeBalance', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.protocolFeeBalance = protocolFeeBalance_call;
            let protocolFeeTo_call = async (options) => {
                let result = await this.call('protocolFeeTo', [], options);
                return result;
            };
            this.protocolFeeTo = protocolFeeTo_call;
            let scom_call = async (options) => {
                let result = await this.call('scom', [], options);
                return result;
            };
            this.scom = scom_call;
            let stakedParams = (params) => [params.param1, params.param2, this.wallet.utils.toString(params.param3)];
            let staked_call = async (params, options) => {
                let result = await this.call('staked', stakedParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.staked = staked_call;
            let addNftParams = (params) => [params.nft, this.wallet.utils.stringToBytes32(params.desc), this.wallet.utils.toString(params.stakes), this.wallet.utils.toString(params.protocolFee), params.enabled];
            let addNft_send = async (params, options) => {
                let result = await this.send('addNft', addNftParams(params), options);
                return result;
            };
            let addNft_call = async (params, options) => {
                let result = await this.call('addNft', addNftParams(params), options);
                return;
            };
            this.addNft = Object.assign(addNft_send, {
                call: addNft_call
            });
            let addStakesParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.stakes)];
            let addStakes_send = async (params, options) => {
                let result = await this.send('addStakes', addStakesParams(params), options);
                return result;
            };
            let addStakes_call = async (params, options) => {
                let result = await this.call('addStakes', addStakesParams(params), options);
                return;
            };
            this.addStakes = Object.assign(addStakes_send, {
                call: addStakes_call
            });
            let burnParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId)];
            let burn_send = async (params, options) => {
                let result = await this.send('burn', burnParams(params), options);
                return result;
            };
            let burn_call = async (params, options) => {
                let result = await this.call('burn', burnParams(params), options);
                return;
            };
            this.burn = Object.assign(burn_send, {
                call: burn_call
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
            let mint_send = async (nft, options) => {
                let result = await this.send('mint', [nft], options);
                return result;
            };
            let mint_call = async (nft, options) => {
                let result = await this.call('mint', [nft], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
            });
            let pauseNFT_send = async (nft, options) => {
                let result = await this.send('pauseNFT', [nft], options);
                return result;
            };
            let pauseNFT_call = async (nft, options) => {
                let result = await this.call('pauseNFT', [nft], options);
                return;
            };
            this.pauseNFT = Object.assign(pauseNFT_send, {
                call: pauseNFT_call
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
            let resumeNFT_send = async (nft, options) => {
                let result = await this.send('resumeNFT', [nft], options);
                return result;
            };
            let resumeNFT_call = async (nft, options) => {
                let result = await this.call('resumeNFT', [nft], options);
                return;
            };
            this.resumeNFT = Object.assign(resumeNFT_send, {
                call: resumeNFT_call
            });
            let setProtocolFeeTo_send = async (protocolFeeTo, options) => {
                let result = await this.send('setProtocolFeeTo', [protocolFeeTo], options);
                return result;
            };
            let setProtocolFeeTo_call = async (protocolFeeTo, options) => {
                let result = await this.call('setProtocolFeeTo', [protocolFeeTo], options);
                return;
            };
            this.setProtocolFeeTo = Object.assign(setProtocolFeeTo_send, {
                call: setProtocolFeeTo_call
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
            let transferProtocolFee_send = async (options) => {
                let result = await this.send('transferProtocolFee', [], options);
                return result;
            };
            let transferProtocolFee_call = async (options) => {
                let result = await this.call('transferProtocolFee', [], options);
                return;
            };
            this.transferProtocolFee = Object.assign(transferProtocolFee_send, {
                call: transferProtocolFee_call
            });
        }
    }
    NFTManager._abi = NFTManager_json_1.default.abi;
    exports.NFTManager = NFTManager;
});
define("@scom/scom-portal-contract/contracts/NodeNFT.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/NodeNFT.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "__baseURI", "type": "string" }, { "internalType": "address", "name": "_manager", "type": "address" }, { "internalType": "uint256", "name": "_stakeRequired", "type": "uint256" }, { "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "AddStakes", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "Attribute", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "CustomAttribute", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "baseURI", "type": "string" }], "name": "SetBaseURI", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }], "name": "SetProtocolFee", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "stakeRequired", "type": "uint256" }], "name": "SetStakeRequired", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Stake", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Unstake", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "addStakes", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "counter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "creationDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "destoryDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lastStakeDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "manager", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "protocolFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "__baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }], "name": "setProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_stakeRequired", "type": "uint256" }], "name": "setStakeRequired", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "stakeRequired", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b50604051620032be380380620032be8339810160408190526200003491620002ca565b600080546001600160a01b0319163317905560016003558551869086906200006490600490602085019062000157565b5080516200007a90600590602084019062000157565b50508451620000929150600e90602087019062000157565b506001600160a01b038316608052600f82905560108190556040517f23c8c9488efebfd474e85a7956de6f39b17c7ab88502d42a623db2d8e382bbaa90620000dd90600e90620003cd565b60405180910390a16040518281527fce83a12b8f2c5a77a7ba6406c92f23008aa73e3745faf7cd7c2db4c4bd0c82de9060200160405180910390a16040518181527fdc0410a296e1e33943a772020d333d5f99319d7fcad932a484c53889f7aaa2b19060200160405180910390a15050505050506200047c565b828054620001659062000391565b90600052602060002090601f016020900481019282620001895760008555620001d4565b82601f10620001a457805160ff1916838001178555620001d4565b82800160010185558215620001d4579182015b82811115620001d4578251825591602001919060010190620001b7565b50620001e2929150620001e6565b5090565b5b80821115620001e25760008155600101620001e7565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200022557600080fd5b81516001600160401b0380821115620002425762000242620001fd565b604051601f8301601f19908116603f011681019082821181831017156200026d576200026d620001fd565b816040528381526020925086838588010111156200028a57600080fd5b600091505b83821015620002ae57858201830151818301840152908201906200028f565b83821115620002c05760008385830101525b9695505050505050565b60008060008060008060c08789031215620002e457600080fd5b86516001600160401b0380821115620002fc57600080fd5b6200030a8a838b0162000213565b975060208901519150808211156200032157600080fd5b6200032f8a838b0162000213565b965060408901519150808211156200034657600080fd5b506200035589828a0162000213565b606089015190955090506001600160a01b03811681146200037557600080fd5b809350506080870151915060a087015190509295509295509295565b600181811c90821680620003a657607f821691505b602082108103620003c757634e487b7160e01b600052602260045260246000fd5b50919050565b600060208083526000845481600182811c915080831680620003f057607f831692505b85831081036200040e57634e487b7160e01b85526022600452602485fd5b8786018381526020018180156200042e576001811462000440576200046d565b60ff198616825287820196506200046d565b60008b81526020902060005b8681101562000467578154848201529085019089016200044c565b83019750505b50949998505050505050505050565b608051612e11620004ad6000396000818161038601528181610d1701528181610ff2015261128b0152612e116000f3fe608060405234801561001057600080fd5b50600436106102775760003560e01c806370a0823111610160578063a2f55ae5116100d8578063d4ee1d901161008c578063e985e9c511610071578063e985e9c51461055c578063f2fde38b146105a5578063f43d9584146105b857600080fd5b8063d4ee1d901461051c578063d8f8504f1461053c57600080fd5b8063b55e5847116100bd578063b55e5847146104d6578063b88d4fde146104f6578063c87b56dd1461050957600080fd5b8063a2f55ae5146104ba578063b0e21e8a146104cd57600080fd5b806395d89b411161012f5780639c52a7f1116101145780639c52a7f1146104815780639dc29fac14610494578063a22cb465146104a757600080fd5b806395d89b4114610466578063963e50bf1461046e57600080fd5b806370a082311461040d578063787dce3d146104205780638b63ac20146104335780638da5cb5b1461044657600080fd5b806342842e0e116101f357806360536172116101c25780636352211e116101a75780636352211e146103df5780636a627842146103f25780636c0360eb1461040557600080fd5b806360536172146103ce57806361bc221a146103d657600080fd5b806342842e0e1461036e578063481c6a75146103815780634f6ccce7146103a857806355f804b3146103bb57600080fd5b8063095ea7b31161024a57806323b872dd1161022f57806323b872dd146103255780632f745c59146103385780633fd8cc4e1461034b57600080fd5b8063095ea7b31461030857806318160ddd1461031d57600080fd5b806301ffc9a71461027c57806305010105146102a457806306fdde03146102bb578063081812fc146102d0575b600080fd5b61028f61028a36600461276a565b6105d8565b60405190151581526020015b60405180910390f35b6102ad600f5481565b60405190815260200161029b565b6102c3610634565b60405161029b91906127fd565b6102e36102de366004612810565b6106c6565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161029b565b61031b610316366004612852565b6106fa565b005b600c546102ad565b61031b61033336600461287c565b61088b565b6102ad610346366004612852565b61092c565b61028f6103593660046128b8565b60026020526000908152604090205460ff1681565b61031b61037c36600461287c565b6109fb565b6102e37f000000000000000000000000000000000000000000000000000000000000000081565b6102ad6103b6366004612810565b610a16565b61031b6103c9366004612996565b610ad4565b61031b610b47565b6102ad60115481565b6102e36103ed366004612810565b610c71565b6102ad6104003660046128b8565b610cfd565b6102c3610e25565b6102ad61041b3660046128b8565b610eb3565b61031b61042e366004612810565b610f81565b61031b610441366004612852565b610fda565b6000546102e39073ffffffffffffffffffffffffffffffffffffffff1681565b6102c361116b565b61031b61047c366004612810565b61117a565b61031b61048f3660046128b8565b6111d3565b61031b6104a2366004612852565b611273565b61031b6104b53660046129df565b6113e0565b61031b6104c83660046128b8565b6113ef565b6102ad60105481565b6102ad6104e4366004612810565b60146020526000908152604090205481565b61031b610504366004612a1b565b611492565b6102c3610517366004612810565b61153a565b6001546102e39073ffffffffffffffffffffffffffffffffffffffff1681565b6102ad61054a366004612810565b60136020526000908152604090205481565b61028f61056a366004612a97565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260096020908152604080832093909416825291909152205460ff1690565b61031b6105b33660046128b8565b6115a1565b6102ad6105c6366004612810565b60126020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d6300000000000000000000000000000000000000000000000000000000148061062e575061062e82611638565b92915050565b60606004805461064390612aca565b80601f016020809104026020016040519081016040528092919081815260200182805461066f90612aca565b80156106bc5780601f10610691576101008083540402835291602001916106bc565b820191906000526020600020905b81548152906001019060200180831161069f57829003601f168201915b5050505050905090565b60006106d18261171b565b5060009081526008602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061070582610c71565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821614806107f057506107f0813361056a565b61087c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016107be565b61088683836117a9565b505050565b6108953382611849565b610921576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f76656400000000000000000000000000000000000060648201526084016107be565b610886838383611909565b600061093783610eb3565b82106109c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e647300000000000000000000000000000000000000000060648201526084016107be565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600a60209081526040808320938352929052205490565b61088683838360405180602001604052806000815250611492565b6000610a21600c5490565b8210610aaf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e6473000000000000000000000000000000000000000060648201526084016107be565b600c8281548110610ac257610ac2612b1d565b90600052602060002001549050919050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610af857600080fd5b8051610b0b90600e9060208401906126a3565b507f23c8c9488efebfd474e85a7956de6f39b17c7ab88502d42a623db2d8e382bbaa600e604051610b3c9190612b4c565b60405180910390a150565b60015473ffffffffffffffffffffffffffffffffffffffff163314610bee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016107be565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff168061062e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016107be565b60003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610d9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f742066726f6d206d616e616765720000000000000000000000000000000060448201526064016107be565b601160008154610dad90612c59565b9182905550600081815260126020908152604080832042908190556014909252909120559050610ddd8282611b7b565b604051819073ffffffffffffffffffffffffffffffffffffffff8416907febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a90600090a3919050565b600e8054610e3290612aca565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5e90612aca565b8015610eab5780601f10610e8057610100808354040283529160200191610eab565b820191906000526020600020905b815481529060010190602001808311610e8e57829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff8216610f58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016107be565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205490565b60005473ffffffffffffffffffffffffffffffffffffffff163314610fa557600080fd5b60108190556040518181527fdc0410a296e1e33943a772020d333d5f99319d7fcad932a484c53889f7aaa2b190602001610b3c565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611079576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f742066726f6d206d616e616765720000000000000000000000000000000060448201526064016107be565b8173ffffffffffffffffffffffffffffffffffffffff1661109982610c71565b73ffffffffffffffffffffffffffffffffffffffff1614611116576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742066726f6d20746f6b656e206f776e657200000000000000000000000060448201526064016107be565b60008181526014602052604080822042905551829173ffffffffffffffffffffffffffffffffffffffff8516917fb56ef9a7c69bd50837db09d6073be526108c4932a7d656a9872b69dfeb37a50b9190a35050565b60606005805461064390612aca565b60005473ffffffffffffffffffffffffffffffffffffffff16331461119e57600080fd5b600f8190556040518181527fce83a12b8f2c5a77a7ba6406c92f23008aa73e3745faf7cd7c2db4c4bd0c82de90602001610b3c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146111f757600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610b3c565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611312576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f742066726f6d206d616e616765720000000000000000000000000000000060448201526064016107be565b61131c8282611849565b611382576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a656400000000000000000000000000000000000060448201526064016107be565b61138b81611b95565b60008181526013602052604080822042905551829173ffffffffffffffffffffffffffffffffffffffff8516917f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd9190a35050565b6113eb338383611c6e565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461141357600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610b3c565b61149c3383611849565b611528576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f76656400000000000000000000000000000000000060648201526084016107be565b61153484848484611d9b565b50505050565b60606115458261171b565b600061154f611e3e565b9050600081511161156f576040518060200160405280600081525061159a565b8061157984611e4d565b60405160200161158a929190612c91565b6040516020818303038152906040525b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146115c557600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610b3c565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806116cb57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061062e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461062e565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff166117a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016107be565b50565b600081815260086020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155819061180382610c71565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061185583610c71565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806118c3575073ffffffffffffffffffffffffffffffffffffffff80821660009081526009602090815260408083209388168352929052205460ff165b8061190157508373ffffffffffffffffffffffffffffffffffffffff166118e9846106c6565b73ffffffffffffffffffffffffffffffffffffffff16145b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff1661192982610c71565b73ffffffffffffffffffffffffffffffffffffffff16146119cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016107be565b73ffffffffffffffffffffffffffffffffffffffff8216611a6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016107be565b611a79838383611f82565b611a846000826117a9565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600760205260408120805460019290611aba908490612cc0565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600760205260408120805460019290611af5908490612cd7565b909155505060008181526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6113eb828260405180602001604052806000815250612088565b6000611ba082610c71565b9050611bae81600084611f82565b611bb96000836117a9565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600760205260408120805460019290611bef908490612cc0565b909155505060008281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555183919073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611d03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016107be565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526009602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611da6848484611909565b611db28484848461212b565b611534576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016107be565b6060600e805461064390612aca565b606081600003611e9057505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611eba5780611ea481612c59565b9150611eb39050600a83612d1e565b9150611e94565b60008167ffffffffffffffff811115611ed557611ed56128d3565b6040519080825280601f01601f191660200182016040528015611eff576020820181803683370190505b5090505b841561190157611f14600183612cc0565b9150611f21600a86612d32565b611f2c906030612cd7565b60f81b818381518110611f4157611f41612b1d565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611f7b600a86612d1e565b9450611f03565b73ffffffffffffffffffffffffffffffffffffffff8316611fea57611fe581600c80546000838152600d60205260408120829055600182018355919091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70155565b612027565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461202757612027838261231e565b73ffffffffffffffffffffffffffffffffffffffff821661204b57610886816123d5565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610886576108868282612484565b61209283836124d5565b61209f600084848461212b565b610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016107be565b600073ffffffffffffffffffffffffffffffffffffffff84163b15612313576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906121a2903390899088908890600401612d46565b6020604051808303816000875af19250505080156121fb575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526121f891810190612d8f565b60015b6122c8573d808015612229576040519150601f19603f3d011682016040523d82523d6000602084013e61222e565b606091505b5080516000036122c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016107be565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050611901565b506001949350505050565b6000600161232b84610eb3565b6123359190612cc0565b6000838152600b60205260409020549091508082146123955773ffffffffffffffffffffffffffffffffffffffff84166000908152600a602090815260408083208584528252808320548484528184208190558352600b90915290208190555b506000918252600b6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600a81528383209183525290812055565b600c546000906123e790600190612cc0565b6000838152600d6020526040812054600c805493945090928490811061240f5761240f612b1d565b9060005260206000200154905080600c838154811061243057612430612b1d565b6000918252602080832090910192909255828152600d9091526040808220849055858252812055600c80548061246857612468612dac565b6001900381819060005260206000200160009055905550505050565b600061248f83610eb3565b73ffffffffffffffffffffffffffffffffffffffff9093166000908152600a602090815260408083208684528252808320859055938252600b9052919091209190915550565b73ffffffffffffffffffffffffffffffffffffffff8216612552576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016107be565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff16156125de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016107be565b6125ea60008383611f82565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600760205260408120805460019290612620908490612cd7565b909155505060008181526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8280546126af90612aca565b90600052602060002090601f0160209004810192826126d15760008555612717565b82601f106126ea57805160ff1916838001178555612717565b82800160010185558215612717579182015b828111156127175782518255916020019190600101906126fc565b50612723929150612727565b5090565b5b808211156127235760008155600101612728565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146117a657600080fd5b60006020828403121561277c57600080fd5b813561159a8161273c565b60005b838110156127a257818101518382015260200161278a565b838111156115345750506000910152565b600081518084526127cb816020860160208601612787565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061159a60208301846127b3565b60006020828403121561282257600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461284d57600080fd5b919050565b6000806040838503121561286557600080fd5b61286e83612829565b946020939093013593505050565b60008060006060848603121561289157600080fd5b61289a84612829565b92506128a860208501612829565b9150604084013590509250925092565b6000602082840312156128ca57600080fd5b61159a82612829565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff8084111561291d5761291d6128d3565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715612963576129636128d3565b8160405280935085815286868601111561297c57600080fd5b858560208301376000602087830101525050509392505050565b6000602082840312156129a857600080fd5b813567ffffffffffffffff8111156129bf57600080fd5b8201601f810184136129d057600080fd5b61190184823560208401612902565b600080604083850312156129f257600080fd5b6129fb83612829565b915060208301358015158114612a1057600080fd5b809150509250929050565b60008060008060808587031215612a3157600080fd5b612a3a85612829565b9350612a4860208601612829565b925060408501359150606085013567ffffffffffffffff811115612a6b57600080fd5b8501601f81018713612a7c57600080fd5b612a8b87823560208401612902565b91505092959194509250565b60008060408385031215612aaa57600080fd5b612ab383612829565b9150612ac160208401612829565b90509250929050565b600181811c90821680612ade57607f821691505b602082108103612b17577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208083526000845481600182811c915080831680612b6e57607f831692505b8583108103612ba4577f4e487b710000000000000000000000000000000000000000000000000000000085526022600452602485fd5b878601838152602001818015612bc15760018114612bf057612c1b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861682528782019650612c1b565b60008b81526020902060005b86811015612c1557815484820152908501908901612bfc565b83019750505b50949998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612c8a57612c8a612c2a565b5060010190565b60008351612ca3818460208801612787565b835190830190612cb7818360208801612787565b01949350505050565b600082821015612cd257612cd2612c2a565b500390565b60008219821115612cea57612cea612c2a565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082612d2d57612d2d612cef565b500490565b600082612d4157612d41612cef565b500690565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152612d8560808301846127b3565b9695505050505050565b600060208284031215612da157600080fd5b815161159a8161273c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea264697066735822122044d8df914226eac0fba22b7961543bd0a7c772e88bd231436290b819e1c640d064736f6c634300080d0033"
    };
});
define("@scom/scom-portal-contract/contracts/NodeNFT.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/NodeNFT.json.ts"], function (require, exports, eth_contract_7, NodeNFT_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeNFT = void 0;
    class NodeNFT extends eth_contract_7.Contract {
        constructor(wallet, address) {
            super(wallet, address, NodeNFT_json_1.default.abi, NodeNFT_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.name, params.symbol, params.baseURI, params.manager, this.wallet.utils.toString(params.stakeRequired), this.wallet.utils.toString(params.protocolFee)], options);
        }
        parseAddStakesEvent(receipt) {
            return this.parseEvents(receipt, "AddStakes").map(e => this.decodeAddStakesEvent(e));
        }
        decodeAddStakesEvent(event) {
            let result = event.data;
            return {
                who: result.who,
                tokenId: new eth_contract_7.BigNumber(result.tokenId),
                _event: event
            };
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                approved: result.approved,
                tokenId: new eth_contract_7.BigNumber(result.tokenId),
                _event: event
            };
        }
        parseApprovalForAllEvent(receipt) {
            return this.parseEvents(receipt, "ApprovalForAll").map(e => this.decodeApprovalForAllEvent(e));
        }
        decodeApprovalForAllEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                operator: result.operator,
                approved: result.approved,
                _event: event
            };
        }
        parseAttributeEvent(receipt) {
            return this.parseEvents(receipt, "Attribute").map(e => this.decodeAttributeEvent(e));
        }
        decodeAttributeEvent(event) {
            let result = event.data;
            return {
                tokenId: new eth_contract_7.BigNumber(result.tokenId),
                attribute: new eth_contract_7.BigNumber(result.attribute),
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
        parseCustomAttributeEvent(receipt) {
            return this.parseEvents(receipt, "CustomAttribute").map(e => this.decodeCustomAttributeEvent(e));
        }
        decodeCustomAttributeEvent(event) {
            let result = event.data;
            return {
                tokenId: new eth_contract_7.BigNumber(result.tokenId),
                attribute: new eth_contract_7.BigNumber(result.attribute),
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
        parseSetBaseURIEvent(receipt) {
            return this.parseEvents(receipt, "SetBaseURI").map(e => this.decodeSetBaseURIEvent(e));
        }
        decodeSetBaseURIEvent(event) {
            let result = event.data;
            return {
                baseURI: result.baseURI,
                _event: event
            };
        }
        parseSetProtocolFeeEvent(receipt) {
            return this.parseEvents(receipt, "SetProtocolFee").map(e => this.decodeSetProtocolFeeEvent(e));
        }
        decodeSetProtocolFeeEvent(event) {
            let result = event.data;
            return {
                protocolFee: new eth_contract_7.BigNumber(result.protocolFee),
                _event: event
            };
        }
        parseSetStakeRequiredEvent(receipt) {
            return this.parseEvents(receipt, "SetStakeRequired").map(e => this.decodeSetStakeRequiredEvent(e));
        }
        decodeSetStakeRequiredEvent(event) {
            let result = event.data;
            return {
                stakeRequired: new eth_contract_7.BigNumber(result.stakeRequired),
                _event: event
            };
        }
        parseStakeEvent(receipt) {
            return this.parseEvents(receipt, "Stake").map(e => this.decodeStakeEvent(e));
        }
        decodeStakeEvent(event) {
            let result = event.data;
            return {
                who: result.who,
                tokenId: new eth_contract_7.BigNumber(result.tokenId),
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
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                tokenId: new eth_contract_7.BigNumber(result.tokenId),
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
        parseUnstakeEvent(receipt) {
            return this.parseEvents(receipt, "Unstake").map(e => this.decodeUnstakeEvent(e));
        }
        decodeUnstakeEvent(event) {
            let result = event.data;
            return {
                who: result.who,
                tokenId: new eth_contract_7.BigNumber(result.tokenId),
                _event: event
            };
        }
        assign() {
            let balanceOf_call = async (owner, options) => {
                let result = await this.call('balanceOf', [owner], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let baseURI_call = async (options) => {
                let result = await this.call('baseURI', [], options);
                return result;
            };
            this.baseURI = baseURI_call;
            let counter_call = async (options) => {
                let result = await this.call('counter', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.counter = counter_call;
            let creationDate_call = async (param1, options) => {
                let result = await this.call('creationDate', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.creationDate = creationDate_call;
            let destoryDate_call = async (param1, options) => {
                let result = await this.call('destoryDate', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.destoryDate = destoryDate_call;
            let getApproved_call = async (tokenId, options) => {
                let result = await this.call('getApproved', [this.wallet.utils.toString(tokenId)], options);
                return result;
            };
            this.getApproved = getApproved_call;
            let isApprovedForAllParams = (params) => [params.owner, params.operator];
            let isApprovedForAll_call = async (params, options) => {
                let result = await this.call('isApprovedForAll', isApprovedForAllParams(params), options);
                return result;
            };
            this.isApprovedForAll = isApprovedForAll_call;
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let lastStakeDate_call = async (param1, options) => {
                let result = await this.call('lastStakeDate', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.lastStakeDate = lastStakeDate_call;
            let manager_call = async (options) => {
                let result = await this.call('manager', [], options);
                return result;
            };
            this.manager = manager_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
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
            let ownerOf_call = async (tokenId, options) => {
                let result = await this.call('ownerOf', [this.wallet.utils.toString(tokenId)], options);
                return result;
            };
            this.ownerOf = ownerOf_call;
            let protocolFee_call = async (options) => {
                let result = await this.call('protocolFee', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.protocolFee = protocolFee_call;
            let stakeRequired_call = async (options) => {
                let result = await this.call('stakeRequired', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.stakeRequired = stakeRequired_call;
            let supportsInterface_call = async (interfaceId, options) => {
                let result = await this.call('supportsInterface', [interfaceId], options);
                return result;
            };
            this.supportsInterface = supportsInterface_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let tokenByIndex_call = async (index, options) => {
                let result = await this.call('tokenByIndex', [this.wallet.utils.toString(index)], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.tokenByIndex = tokenByIndex_call;
            let tokenOfOwnerByIndexParams = (params) => [params.owner, this.wallet.utils.toString(params.index)];
            let tokenOfOwnerByIndex_call = async (params, options) => {
                let result = await this.call('tokenOfOwnerByIndex', tokenOfOwnerByIndexParams(params), options);
                return new eth_contract_7.BigNumber(result);
            };
            this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
            let tokenURI_call = async (tokenId, options) => {
                let result = await this.call('tokenURI', [this.wallet.utils.toString(tokenId)], options);
                return result;
            };
            this.tokenURI = tokenURI_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let addStakesParams = (params) => [params.to, this.wallet.utils.toString(params.tokenId)];
            let addStakes_send = async (params, options) => {
                let result = await this.send('addStakes', addStakesParams(params), options);
                return result;
            };
            let addStakes_call = async (params, options) => {
                let result = await this.call('addStakes', addStakesParams(params), options);
                return;
            };
            this.addStakes = Object.assign(addStakes_send, {
                call: addStakes_call
            });
            let approveParams = (params) => [params.to, this.wallet.utils.toString(params.tokenId)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let burnParams = (params) => [params.from, this.wallet.utils.toString(params.tokenId)];
            let burn_send = async (params, options) => {
                let result = await this.send('burn', burnParams(params), options);
                return result;
            };
            let burn_call = async (params, options) => {
                let result = await this.call('burn', burnParams(params), options);
                return;
            };
            this.burn = Object.assign(burn_send, {
                call: burn_call
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
            let mint_send = async (to, options) => {
                let result = await this.send('mint', [to], options);
                return result;
            };
            let mint_call = async (to, options) => {
                let result = await this.call('mint', [to], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
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
            let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
            let safeTransferFrom_send = async (params, options) => {
                let result = await this.send('safeTransferFrom', safeTransferFromParams(params), options);
                return result;
            };
            let safeTransferFrom_call = async (params, options) => {
                let result = await this.call('safeTransferFrom', safeTransferFromParams(params), options);
                return;
            };
            this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
                call: safeTransferFrom_call
            });
            let safeTransferFrom_1Params = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId), this.wallet.utils.stringToBytes(params.data)];
            let safeTransferFrom_1_send = async (params, options) => {
                let result = await this.send('safeTransferFrom', safeTransferFrom_1Params(params), options);
                return result;
            };
            let safeTransferFrom_1_call = async (params, options) => {
                let result = await this.call('safeTransferFrom', safeTransferFrom_1Params(params), options);
                return;
            };
            this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
                call: safeTransferFrom_1_call
            });
            let setApprovalForAllParams = (params) => [params.operator, params.approved];
            let setApprovalForAll_send = async (params, options) => {
                let result = await this.send('setApprovalForAll', setApprovalForAllParams(params), options);
                return result;
            };
            let setApprovalForAll_call = async (params, options) => {
                let result = await this.call('setApprovalForAll', setApprovalForAllParams(params), options);
                return;
            };
            this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
                call: setApprovalForAll_call
            });
            let setBaseURI_send = async (baseURI, options) => {
                let result = await this.send('setBaseURI', [baseURI], options);
                return result;
            };
            let setBaseURI_call = async (baseURI, options) => {
                let result = await this.call('setBaseURI', [baseURI], options);
                return;
            };
            this.setBaseURI = Object.assign(setBaseURI_send, {
                call: setBaseURI_call
            });
            let setProtocolFee_send = async (protocolFee, options) => {
                let result = await this.send('setProtocolFee', [this.wallet.utils.toString(protocolFee)], options);
                return result;
            };
            let setProtocolFee_call = async (protocolFee, options) => {
                let result = await this.call('setProtocolFee', [this.wallet.utils.toString(protocolFee)], options);
                return;
            };
            this.setProtocolFee = Object.assign(setProtocolFee_send, {
                call: setProtocolFee_call
            });
            let setStakeRequired_send = async (stakeRequired, options) => {
                let result = await this.send('setStakeRequired', [this.wallet.utils.toString(stakeRequired)], options);
                return result;
            };
            let setStakeRequired_call = async (stakeRequired, options) => {
                let result = await this.call('setStakeRequired', [this.wallet.utils.toString(stakeRequired)], options);
                return;
            };
            this.setStakeRequired = Object.assign(setStakeRequired_send, {
                call: setStakeRequired_call
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
            let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
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
    NodeNFT._abi = NodeNFT_json_1.default.abi;
    exports.NodeNFT = NodeNFT;
});
define("@scom/scom-portal-contract/contracts/ProjectInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/ProjectInfo.json.ts'/> 
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
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageName", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "string", "name": "", "type": "string" }], "name": "packageNameInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
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
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectName", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "", "type": "string" }], "name": "projectNameInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
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
        "bytecode": "60a06040523480156200001157600080fd5b50604051620055d0380380620055d0833981016040819052620000349162000088565b600080546001600160a01b0319908116331790915560016003556001600160a01b0392831660805260048054929093169116179055620000c7565b6001600160a01b03811681146200008557600080fd5b50565b600080604083850312156200009c57600080fd5b8251620000a9816200006f565b6020840151909250620000bc816200006f565b809150509250929050565b6080516154d1620000ff600039600081816109270152818161269c01528181613ef801528181613f940152613fec01526154d16000f3fe608060405234801561001057600080fd5b506004361061036d5760003560e01c806389fe08f8116101d3578063c113aeb011610104578063d99f367f116100a2578063fb10856d1161007c578063fb10856d146108d7578063fb34907814610902578063fc0c546a14610922578063fc7a86ae1461094957600080fd5b8063d99f367f14610886578063dfecbd8e146108b1578063f2fde38b146108c457600080fd5b8063c727a2ea116100de578063c727a2ea1461080a578063c9d6b13d1461081d578063ccbeffc214610830578063d4ee1d901461086657600080fd5b8063c113aeb0146107c0578063c216212a146107d3578063c3414683146107f757600080fd5b8063a828477c11610171578063b233649b1161014b578063b233649b14610737578063beaf2d3514610762578063bfadf04214610775578063c1079792146107a057600080fd5b8063a828477c146106f1578063abcfb19014610704578063ac1c4f4c1461071757600080fd5b80639c52a7f1116101ad5780639c52a7f1146106a55780639e2c8a5b146106b8578063a2f55ae5146106cb578063a6ddbf69146106de57600080fd5b806389fe08f8146106245780638da5cb5b1461065a578063977f39701461067a57600080fd5b806336fbad26116102ad578063758a5b031161024b5780637d8c0ef1116102255780637d8c0ef1146105af5780637ff9baa6146105c257806387899a36146105fe57806387bfc51f1461061157600080fd5b8063758a5b03146105765780637b0472f0146105895780637b2246dc1461059c57600080fd5b8063557de32811610287578063557de328146104ff578063605361721461053757806371b439c61461053f578063723dd3da1461055257600080fd5b806336fbad26146104bb5780633fd8cc4e146104c45780634f24c5fa146104f757600080fd5b806329d1e7491161031a57806332799c57116102f457806332799c5714610457578063368e98521461048257806336b44a191461049557806336c9ac76146104a857600080fd5b806329d1e749146103f757806329d91b6c146104175780632e0cc82b1461043757600080fd5b806311187a5f1161034b57806311187a5f146103b15780631251c946146103c457806324115090146103d757600080fd5b8063068c539114610372578063087d9886146103875780630d1706731461039e575b600080fd5b610385610380366004614b4d565b61097f565b005b6011545b6040519081526020015b60405180910390f35b6103856103ac366004614bc2565b610ba3565b6103856103bf366004614bc2565b610dca565b6103856103d2366004614c0e565b610f87565b61038b6103e5366004614c0e565b6000908152600f602052604090205490565b61038b610405366004614c0e565b60009081526018602052604090205490565b61042a610425366004614c27565b6110e5565b6040516103959190614cbf565b61038b610445366004614c0e565b60009081526016602052604090205490565b61038b610465366004614cd2565b600d60209081526000928352604080842090915290825290205481565b610385610490366004614b4d565b61118a565b61038b6104a3366004614cfc565b6114fd565b61042a6104b6366004614c0e565b61185b565b61038b60055481565b6104e76104d2366004614d7f565b60026020526000908152604090205460ff1681565b6040519015158152602001610395565b60125461038b565b61051261050d366004614c27565b611874565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610395565b6103856118b9565b61038b61054d366004614c27565b6119e3565b610565610560366004614c0e565b611a14565b604051610395959493929190614ddd565b61038b610584366004614e36565b611b04565b610385610597366004614c27565b611ca8565b6103856105aa366004614b4d565b611e39565b61038b6105bd366004614cd2565b61217d565b61038b6105d0366004614f7c565b6015602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b61038561060c366004614fc3565b612199565b61051261061f366004614c27565b612482565b610512610632366004614c0e565b600b6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6000546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b610688366004614b4d565b601060209081526000928352604080842090915290825290205481565b6103856106b3366004614d7f565b61249e565b6103856106c6366004614c27565b612545565b6103856106d9366004614d7f565b6126fd565b6103856106ec366004614b4d565b6127a0565b61042a6106ff366004614c0e565b612a69565b610385610712366004614fc3565b612a82565b6004546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b61074536600461500a565b805160208183018101805160098252928201919093012091525481565b61038b61077036600461503f565b612cc6565b61038b610783366004614b4d565b601760209081526000928352604080842090915290825290205481565b61038b6107ae366004614c0e565b60009081526013602052604090205490565b6103856107ce366004614c0e565b613343565b6107e66107e1366004614c0e565b6134d5565b60405161039595949392919061510d565b610385610805366004614bc2565b6135a7565b610385610818366004614c0e565b613780565b61038b61082b366004614c27565b613911565b61038b61083e366004614d7f565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c602052604090205490565b6001546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b610894366004614cd2565b600760209081526000928352604080842090915290825290205481565b6103856108bf366004614b4d565b61392d565b6103856108d2366004614d7f565b613a10565b61038b6108e5366004614c27565b601960209081526000928352604080842090915290825290205481565b61038b610910366004614c0e565b60066020526000908152604090205481565b6105127f000000000000000000000000000000000000000000000000000000000000000081565b610512610957366004614c0e565b600e6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314610a13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e657200000000000000000000000000000000000060448201526064015b60405180910390fd5b6000838152600f60205260409020541580610a9857506000838152600f602090815260408083206010835281842073ffffffffffffffffffffffffffffffffffffffff8716808652935292205482549192918110610a7357610a73615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b610afe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f616c726561647920616e2061646d696e000000000000000000000000000000006044820152606401610a0a565b6000838152600f6020818152604080842080546010845282862073ffffffffffffffffffffffffffffffffffffffff891680885290855283872082905594845260018101825590855291842090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168317905551909185917f223ed65ee8c25e2e5c9d766412212deb5a8966c1a32b6608f0e65bd7f1ff89359190a3505050565b6000838152600f6020526040902054839015801590610c1557506000818152600f602090815260408083206010835281842033808652935292205482549192918110610bf157610bf1615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80610c4357506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b610ca9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b610cb4848484613aa7565b610d1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6a656374206e616d650000000000000000000000006044820152606401610a0a565b600084815260086020526040908190209051600991610d38916152a5565b908152604080516020928190038301902060009081905586815260089092529020610d649084846149f9565b508360098484604051610d789291906152b1565b908152602001604051809103902081905550837fdaa562afcb682535ccff278b5881e249435b61d592905fa2fe0f33a9a363e11b8484604051610dbc92919061530a565b60405180910390a250505050565b6000838152600f6020526040902054839015801590610e3c57506000818152600f602090815260408083206010835281842033808652935292205482549192918110610e1857610e18615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80610e6a57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b610ed0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6005548410610f3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c69642070726f6a65637449640000000000000000000000000000006044820152606401610a0a565b6000848152600a60205260409020610f549084846149f9565b50837fc3aaa2655bd006e3aa89d43d7df93d47dd9392fec712a0ffea9e2fd5b58f7b388484604051610dbc92919061530a565b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff163314611014576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742066726f6d206e6577206f776e657200000000000000000000000000006044820152606401610a0a565b6000818152600b6020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000080821633908117909355600e855283862080549091169055908452600c8084528285208054600d8652848720888852865293862084905590845260018301815584529190922090910182905573ffffffffffffffffffffffffffffffffffffffff166110b48183613c1a565b604051339083907fd76f6b3fb9ea3802f0403d54d37db427cea79df08cd8817552eb23790d2b549190600090a35050565b60146020908152600092835260408084209091529082529020805461110990615183565b80601f016020809104026020016040519081016040528092919081815260200182805461113590615183565b80156111825780601f1061115757610100808354040283529160200191611182565b820191906000526020600020905b81548152906001019060200180831161116557829003601f168201915b505050505081565b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314611219576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b600083815260106020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452825280832054868452600f90925290912054158015906112bb57506000848152600f60205260409020805473ffffffffffffffffffffffffffffffffffffffff851691908390811061129757611297615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b611321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e6f7420616e2061646d696e00000000000000000000000000000000000000006044820152606401610a0a565b6000848152600f602052604081205461133c9060019061534d565b90508082101561140f576000858152600f6020526040812080548390811061136657611366615154565b600091825260208083209091015488835260108252604080842073ffffffffffffffffffffffffffffffffffffffff909216808552918352808420879055898452600f909252912080549192508291859081106113c5576113c5615154565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b600085815260106020908152604080832073ffffffffffffffffffffffffffffffffffffffff881684528252808320839055878352600f909152902080548061145a5761145a615364565b60008281526020812082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590910190915560405173ffffffffffffffffffffffffffffffffffffffff86169187917f6f99f547e1793782dd433d72ded398bd72f423ed3fe41650df9b0fae5008f33d9190a35050505050565b6000868152600f602052604081205487901580159061156f57506000818152600f60209081526040808320601083528184203380865293529220548254919291811061154b5761154b615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b8061159d57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b611603576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b601154915061161488838989613d74565b61167a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c6964207061636b616765206e616d650000000000000000000000006044820152606401610a0a565b60116040518060a001604052808a81526020016000815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020810188905260400160019052815460018181018455600093845260209384902083516005909302019182558383015190820155604082015180519293919261171d9260028501920190614a9b565b506060820151600382015560808201516004820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001838181111561176857611768614d9a565b02179055505050600088815260146020908152604080832085845290915290206117939088886149f9565b5081601560008a815260200190815260200160002088886040516117b89291906152b1565b90815260408051602092819003830190209290925560008a8152601882528281208054600181018255908252828220018590558a8152601a90915220548690811115611810576000898152601a602052604090208190555b82897ffa6aee631c6b190fd8d9fbeda093ea95ec6e8f4b2d87cd3884a4445ffd9211208a8a89896040516118479493929190615393565b60405180910390a350509695505050505050565b600a602052600090815260409020805461110990615183565b6016602052816000526040600020818154811061189057600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60015473ffffffffffffffffffffffffffffffffffffffff163314611960576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a0a565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b601360205281600052604060002081815481106119ff57600080fd5b90600052602060002001600091509150505481565b60128181548110611a2457600080fd5b600091825260209182902060079091020180546040805160608101825260018401548152600284015494810194909452600383015490840152600482015460058301805492955060ff9091169291611a7b90615183565b80601f0160208091040260200160405190810160405280929190818152602001828054611aa790615183565b8015611af45780601f10611ac957610100808354040283529160200191611af4565b820191906000526020600020905b815481529060010190602001808311611ad757829003601f168201915b5050505050908060060154905085565b600554611b12818686613aa7565b611b78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6a656374206e616d650000000000000000000000006044820152606401610a0a565b6000818152600b6020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091558352600c82528083208054600d845282852086865284528285208190556001810182559084528284200184905583835260089091529020611bf69086866149f9565b508060098686604051611c0a9291906152b1565b9081526040805160209281900383019020929092556000838152600a90915220611c359084846149f9565b5060058054906000611c46836153c5565b91905055503373ffffffffffffffffffffffffffffffffffffffff16817f9ab04f24c89dafa22164ed8f6de07a0b21fb8d93a7b761ef1212fc9a997e8d5387878787604051611c989493929190615393565b60405180910390a3949350505050565b600260035403611d14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a0a565b600260035580611d80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610a0a565b611d8981613ec7565b33600090815260076020908152604080832086845290915281205491925090611db39083906153fd565b33600090815260076020908152604080832087845282528083208490556006909152812080549293508492909190611dec9084906153fd565b90915550506040805183815260208101839052849133917ff556991011e831bcfac4f406d547e5e32cdd98267efab83935230d5f8d02c44691015b60405180910390a35050600160035550565b60115482908110611ea6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b3373ffffffffffffffffffffffffffffffffffffffff16600b600060118481548110611ed457611ed4615154565b60009182526020808320600590920290910154835282019290925260400190205473ffffffffffffffffffffffffffffffffffffffff1614611f72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b600083815260176020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684528252808320548684526016909252822054909190611fbc9060019061534d565b90508082101561208f576000858152601660205260408120805483908110611fe657611fe6615154565b600091825260208083209091015488835260178252604080842073ffffffffffffffffffffffffffffffffffffffff90921680855291835280842087905589845260169092529120805491925082918590811061204557612045615154565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b600085815260176020908152604080832073ffffffffffffffffffffffffffffffffffffffff881684528252808320839055878352601690915290208054806120da576120da615364565b60008281526020812082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590910190915560405173ffffffffffffffffffffffffffffffffffffffff86169187917f68ae736c2c34a7e53507d009996d4f68a3f4daa5386f03f5672bfae701d4078a9190a35050505050565b600c60205281600052604060002081815481106119ff57600080fd5b6000848152600f602052604090205484901580159061220b57506000818152600f6020908152604080832060108352818420338086529352922054825491929181106121e7576121e7615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b8061223957506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b61229f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b601154841061230a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b61231685858585613d74565b61237c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c6964207061636b616765206e616d650000000000000000000000006044820152606401610a0a565b60008581526015602090815260408083206014835281842088855290925291829020915190916123ab916152a5565b90815260408051602092819003830190206000908190558781526014835281812087825290925290206123df9084846149f9565b50836015600087815260200190815260200160002084846040516124049291906152b1565b9081526040805160209281900383019020929092556000878152601a90915220548290811115612440576000868152601a602052604090208190555b847ffefb07da0d267ba7a9bdd0d55154b06358bbac3326916bcaeedc87adbcdb3d03858560405161247292919061530a565b60405180910390a2505050505050565b600f602052816000526040600020818154811061189057600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff1633146124c257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b6002600354036125b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a0a565b60026003558061261d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610a0a565b33600090815260076020908152604080832085845290915281205461264390839061534d565b3360009081526007602090815260408083208784528252808320849055600690915281208054929350849290919061267c90849061534d565b909155506126c3905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016338461407c565b6040805183815260208101839052849133917ffbd65cfd6de1493db337385c0712095397ecbd0504df64b861cdfceb80c7b4229101611e27565b60005473ffffffffffffffffffffffffffffffffffffffff16331461272157600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161253a565b6011548290811061280d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b3373ffffffffffffffffffffffffffffffffffffffff16600b60006011848154811061283b5761283b615154565b60009182526020808320600590920290910154835282019290925260400190205473ffffffffffffffffffffffffffffffffffffffff16146128d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b600083815260166020526040902054158061295e575060008381526016602090815260408083206017835281842073ffffffffffffffffffffffffffffffffffffffff871680865293529220548254919291811061293957612939615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b6129c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c726561647920612061646d696e00000000000000000000000000000000006044820152606401610a0a565b600083815260166020818152604080842080546017845282862073ffffffffffffffffffffffffffffffffffffffff891680885290855283872082905594845260018101825590855291842090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168317905551909185917f1e2202e3f0fa61b74c5e417a0c222f963a53a4a02cac56ef30069e6f7335347a9190a3505050565b6008602052600090815260409020805461110990615183565b6000848152600f6020526040902054849015801590612af457506000818152600f602090815260408083206010835281842033808652935292205482549192918110612ad057612ad0615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80612b2257506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612b88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011548410612bf3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b600060118581548110612c0857612c08615154565b9060005260206000209060050201905085816000015414612c85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70726f6a65637449642f7061636b6167654964206e6f74206d617463680000006044820152606401610a0a565b612c936002820185856149f9565b50847f26fb0729afd95719cada7729b90195198a6f35edd9383154a3c42ed9f973911f858560405161247292919061530a565b6000858152600f6020526040812054869015801590612d3857506000818152600f602090815260408083206010835281842033808652935292205482549192918110612d1457612d14615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80612d6657506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612dcc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011548610612e37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b8660118781548110612e4b57612e4b615154565b90600052602060002090600502016000015414612ec4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70726f6a65637449642f7061636b6167654964206e6f74206d617463680000006044820152606401610a0a565b60008681526013602052604090205480156131c5576000878152601360205260408120612ef260018461534d565b81548110612f0257612f02615154565b90600052602060002001549050600060128281548110612f2457612f24615154565b60009182526020918290206040805160a08101825260079093029091018054835281516060810183526001820154815260028083015482870152600383015482850152948401526004810154929390929184019160ff1690811115612f8b57612f8b614d9a565b6002811115612f9c57612f9c614d9a565b8152602001600582018054612fb090615183565b80601f0160208091040260200160405190810160405280929190818152602001828054612fdc90615183565b80156130295780601f10612ffe57610100808354040283529160200191613029565b820191906000526020600020905b81548152906001019060200180831161300c57829003601f168201915b505050505081526020016006820154815250509050876000015181602001516000015103613153578760200151816020015160200151036130de578060200151604001518860400151116130d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f70617463682076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b6131c2565b8060200151602001518860200151116130d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6d696e6f722076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b6020810151518851116131c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6d616a6f722076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b50505b60128054600089815260136020908152604080832080546001818101835591855293839020909301849055805160a0810182528c81529182018b905292965091820190815260200187878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250504260209384015250835460018181018655948252908290208351600790920201908155828201518051828601559182015160028083019190915560409283015160038301559183015160048201805494959294919390927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909216919084908111156132d2576132d2614d9a565b0217905550606082015180516132f2916005840191602090910190614a9b565b5060808201518160060155505082877f30b46001c7b708476546827f01ccfda71f20291b9283deca04e05953fc591588886040516133309190615415565b60405180910390a3505095945050505050565b60125481106133ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b6000601282815481106133c3576133c3615154565b6000918252602082206007909102019150600482015460ff1660028111156133ed576133ed614d9a565b03613454576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f616c726561647920766f696465640000000000000000000000000000000000006044820152606401610a0a565b805461345f90614155565b6134c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6134d1818360006142af565b5050565b601181815481106134e557600080fd5b906000526020600020906005020160009150905080600001549080600101549080600201805461351490615183565b80601f016020809104026020016040519081016040528092919081815260200182805461354090615183565b801561358d5780601f106135625761010080835404028352916020019161358d565b820191906000526020600020905b81548152906001019060200180831161357057829003601f168201915b50505050600383015460049093015491929160ff16905085565b6012548310613612576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b60006012848154811061362757613627615154565b6000918252602090912060079091020190506001600482015460ff16600281111561365457613654614d9a565b146136bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420756e64657220776f726b696e670000000000000000000000000000006044820152606401610a0a565b80546136c690614155565b61372c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b61373a6005820184846149f9565b508381600001547f097b4eb6f8403c2a7c0a11a6030a86be5f926638aa685eb855dcb634bffa6272858560405161377292919061530a565b60405180910390a350505050565b60125481106137eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b60006012828154811061380057613800615154565b6000918252602090912060079091020190506001600482015460ff16600281111561382d5761382d614d9a565b14613894576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420756e64657220776f726b696e670000000000000000000000000000006044820152606401610a0a565b805461389f90614155565b613905576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6134d1818360026142af565b601860205281600052604060002081815481106119ff57600080fd5b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146139bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b506000918252600e602052604090912080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff163314613a3457600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161253a565b600081808203613abb576000915050613c13565b6000858152601a6020526040812054613ad5576001613ae5565b6000868152601a60205260409020545b9050613af36001606461534d565b613afd82846153fd565b1115613b0e57600092505050613c13565b8560098686604051613b219291906152b1565b90815260200160405180910390205414613bcf5760006008600060098888604051613b4d9291906152b1565b9081526020016040518091039020548152602001908152602001600020905080604051602001613b7d91906152a5565b604051602081830303815290604052805190602001208686604051602001613ba69291906152b1565b6040516020818303038152906040528051906020012003613bcd5760009350505050613c13565b505b613c0e85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061433592505050565b925050505b9392505050565b73ffffffffffffffffffffffffffffffffffffffff82166000818152600d60209081526040808320858452825280832054938352600c909152812054613c629060019061534d565b905080821015613d0e5773ffffffffffffffffffffffffffffffffffffffff84166000908152600c60205260408120805483908110613ca357613ca3615154565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff8816808452600d835260408085208386528452808520889055908452600c90925291208054919250829185908110613d0057613d00615154565b600091825260209091200155505b73ffffffffffffffffffffffffffffffffffffffff84166000818152600d602090815260408083208784528252808320839055928252600c905220805480613d5857613d58615364565b6001900381819060005260206000200160009055905550505050565b600081808203613d88576000915050613ebf565b613d946001606461534d565b60008781526008602052604090208054839190613db090615183565b613dbb9291506153fd565b1115613dcb576000915050613ebf565b6000868152601560205260408082209051613de990879087906152b1565b9081526020016040518091039020549050858114613e7b5760008781526014602090815260408083208484528252918290209151613e29918391016152a5565b604051602081830303815290604052805190602001208686604051602001613e529291906152b1565b6040516020818303038152906040528051906020012003613e795760009350505050613ebf565b505b613eba85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061433592505050565b925050505b949350505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015613f54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f789190615436565b9050613fbc73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333085614737565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015614048573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061406c9190615436565b614076919061534d565b92915050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526141509084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261479b565b505050565b6000806011838154811061416b5761416b615154565b6000918252602080832060059092029091018054808452600f90925260409092205491925090158015906141f257506000818152600f6020908152604080832060108352818420338086529352922054825491929181106141ce576141ce615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b8061422057506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b8061429657506000848152601660205260409020541580159061429657506000848152601660209081526040808320601783528184203380865293529220548254919291811061427257614272615154565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b156142a5575060019392505050565b5060009392505050565b6004830180548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660018360028111156142ee576142ee614d9a565b02179055508183600001547fecd286616049aec5a52fa7273fbce1b7652affad46cd95c127e03ee4958fec1483604051614328919061544f565b60405180910390a3505050565b60008082905060008160008151811061435057614350615154565b01602001517fff000000000000000000000000000000000000000000000000000000000000001690507f610000000000000000000000000000000000000000000000000000000000000081108015906143eb57507f7a000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821611155b8061448557507f60000000000000000000000000000000000000000000000000000000000000007fff0000000000000000000000000000000000000000000000000000000000000082161080159061448557507f39000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821611155b806144d157507f2d000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000008216145b6144df575060009392505050565b60015b825181101561472c578281815181106144fd576144fd615154565b01602001517fff000000000000000000000000000000000000000000000000000000000000001691507f6100000000000000000000000000000000000000000000000000000000000000821080159061459857507f7a000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000831611155b61471a577f30000000000000000000000000000000000000000000000000000000000000007fff0000000000000000000000000000000000000000000000000000000000000083161080159061463057507f39000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000831611155b61471a577f2d000000000000000000000000000000000000000000000000000000000000007fff0000000000000000000000000000000000000000000000000000000000000083161461471a577f5f000000000000000000000000000000000000000000000000000000000000007fff0000000000000000000000000000000000000000000000000000000000000083161461471a577f2e000000000000000000000000000000000000000000000000000000000000007fff0000000000000000000000000000000000000000000000000000000000000083161461471a57506000949350505050565b80614724816153c5565b9150506144e2565b506001949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526147959085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016140ce565b50505050565b60006147fd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166148a79092919063ffffffff16565b805190915015614150578080602001905181019061481b919061545d565b614150576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a0a565b6060613ebf84846000858573ffffffffffffffffffffffffffffffffffffffff85163b614930576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a0a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051614959919061547f565b60006040518083038185875af1925050503d8060008114614996576040519150601f19603f3d011682016040523d82523d6000602084013e61499b565b606091505b5091509150613eba828286606083156149b5575081613c13565b8251156149c55782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0a9190614cbf565b828054614a0590615183565b90600052602060002090601f016020900481019282614a275760008555614a8b565b82601f10614a5e578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555614a8b565b82800160010185558215614a8b579182015b82811115614a8b578235825591602001919060010190614a70565b50614a97929150614b0f565b5090565b828054614aa790615183565b90600052602060002090601f016020900481019282614ac95760008555614a8b565b82601f10614ae257805160ff1916838001178555614a8b565b82800160010185558215614a8b579182015b82811115614a8b578251825591602001919060010190614af4565b5b80821115614a975760008155600101614b10565b803573ffffffffffffffffffffffffffffffffffffffff81168114614b4857600080fd5b919050565b60008060408385031215614b6057600080fd5b82359150614b7060208401614b24565b90509250929050565b60008083601f840112614b8b57600080fd5b50813567ffffffffffffffff811115614ba357600080fd5b602083019150836020828501011115614bbb57600080fd5b9250929050565b600080600060408486031215614bd757600080fd5b83359250602084013567ffffffffffffffff811115614bf557600080fd5b614c0186828701614b79565b9497909650939450505050565b600060208284031215614c2057600080fd5b5035919050565b60008060408385031215614c3a57600080fd5b50508035926020909101359150565b60005b83811015614c64578181015183820152602001614c4c565b838111156147955750506000910152565b60008151808452614c8d816020860160208601614c49565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000613c136020830184614c75565b60008060408385031215614ce557600080fd5b614cee83614b24565b946020939093013593505050565b60008060008060008060808789031215614d1557600080fd5b86359550602087013567ffffffffffffffff80821115614d3457600080fd5b614d408a838b01614b79565b9097509550604089013594506060890135915080821115614d6057600080fd5b50614d6d89828a01614b79565b979a9699509497509295939492505050565b600060208284031215614d9157600080fd5b613c1382614b24565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110614dd957614dd9614d9a565b9052565b858152614e0160208201868051825260208082015190830152604090810151910152565b614e0e6080820185614dc9565b60e060a08201526000614e2460e0830185614c75565b90508260c08301529695505050505050565b60008060008060408587031215614e4c57600080fd5b843567ffffffffffffffff80821115614e6457600080fd5b614e7088838901614b79565b90965094506020870135915080821115614e8957600080fd5b50614e9687828801614b79565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112614ee257600080fd5b813567ffffffffffffffff80821115614efd57614efd614ea2565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715614f4357614f43614ea2565b81604052838152866020858801011115614f5c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215614f8f57600080fd5b82359150602083013567ffffffffffffffff811115614fad57600080fd5b614fb985828601614ed1565b9150509250929050565b60008060008060608587031215614fd957600080fd5b8435935060208501359250604085013567ffffffffffffffff811115614ffe57600080fd5b614e9687828801614b79565b60006020828403121561501c57600080fd5b813567ffffffffffffffff81111561503357600080fd5b613ebf84828501614ed1565b600080600080600085870360c081121561505857600080fd5b863595506020870135945060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08201121561509357600080fd5b506040516060810167ffffffffffffffff82821081831117156150b8576150b8614ea2565b8160405260408901358352606089013560208401526080890135604084015282955060a08901359250808311156150ee57600080fd5b50506150fc88828901614b79565b969995985093965092949392505050565b85815284602082015260a06040820152600061512c60a0830186614c75565b90508360608301526002831061514457615144614d9a565b8260808301529695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061519757607f821691505b6020821081036151d0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8054600090600181811c90808316806151f057607f831692505b6020808410820361522a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b81801561523e576001811461526d57615299565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528489019650615299565b876000528160002060005b868110156152915781548b820152908501908301615278565b505084890196505b50505050505092915050565b6000613c1382846151d6565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b602081526000613ebf6020830184866152c1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561535f5761535f61531e565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6040815260006153a76040830186886152c1565b82810360208401526153ba8185876152c1565b979650505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036153f6576153f661531e565b5060010190565b600082198211156154105761541061531e565b500190565b81518152602080830151908201526040808301519082015260608101614076565b60006020828403121561544857600080fd5b5051919050565b602081016140768284614dc9565b60006020828403121561546f57600080fd5b81518015158114613c1357600080fd5b60008251615491818460208701614c49565b919091019291505056fea2646970667358221220acab35329d4178637b711f5ecf856181f569e01848ed94fdb3ab712c9c3fe69164736f6c634300080d0033"
    };
});
define("@scom/scom-portal-contract/contracts/ProjectInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/ProjectInfo.json.ts"], function (require, exports, eth_contract_8, ProjectInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectInfo = void 0;
    class ProjectInfo extends eth_contract_8.Contract {
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
                projectId: new eth_contract_8.BigNumber(result.projectId),
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
                packageId: new eth_contract_8.BigNumber(result.packageId),
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
                projectId: new eth_contract_8.BigNumber(result.projectId),
                packageId: new eth_contract_8.BigNumber(result.packageId),
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
                packageId: new eth_contract_8.BigNumber(result.packageId),
                packageVersionId: new eth_contract_8.BigNumber(result.packageVersionId),
                version: {
                    major: new eth_contract_8.BigNumber(result.version.major),
                    minor: new eth_contract_8.BigNumber(result.version.minor),
                    patch: new eth_contract_8.BigNumber(result.version.patch)
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
                projectId: new eth_contract_8.BigNumber(result.projectId),
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
                projectId: new eth_contract_8.BigNumber(result.projectId),
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
                packageId: new eth_contract_8.BigNumber(result.packageId),
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
                packageId: new eth_contract_8.BigNumber(result.packageId),
                packageVersionId: new eth_contract_8.BigNumber(result.packageVersionId),
                status: new eth_contract_8.BigNumber(result.status),
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
                projectId: new eth_contract_8.BigNumber(result.projectId),
                amount: new eth_contract_8.BigNumber(result.amount),
                newBalance: new eth_contract_8.BigNumber(result.newBalance),
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
                projectId: new eth_contract_8.BigNumber(result.projectId),
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
                projectId: new eth_contract_8.BigNumber(result.projectId),
                amount: new eth_contract_8.BigNumber(result.amount),
                newBalance: new eth_contract_8.BigNumber(result.newBalance),
                _event: event
            };
        }
        parseUpdatePackageIpfsCidEvent(receipt) {
            return this.parseEvents(receipt, "UpdatePackageIpfsCid").map(e => this.decodeUpdatePackageIpfsCidEvent(e));
        }
        decodeUpdatePackageIpfsCidEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_8.BigNumber(result.packageId),
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
                packageId: new eth_contract_8.BigNumber(result.packageId),
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
                packageId: new eth_contract_8.BigNumber(result.packageId),
                packageVersionId: new eth_contract_8.BigNumber(result.packageVersionId),
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
                projectId: new eth_contract_8.BigNumber(result.projectId),
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
                projectId: new eth_contract_8.BigNumber(result.projectId),
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
                return new eth_contract_8.BigNumber(result);
            };
            this.ownersProjects = ownersProjects_call;
            let ownersProjectsInvParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let ownersProjectsInv_call = async (params, options) => {
                let result = await this.call('ownersProjectsInv', ownersProjectsInvParams(params), options);
                return new eth_contract_8.BigNumber(result);
            };
            this.ownersProjectsInv = ownersProjectsInv_call;
            let ownersProjectsLength_call = async (owner, options) => {
                let result = await this.call('ownersProjectsLength', [owner], options);
                return new eth_contract_8.BigNumber(result);
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
                return new eth_contract_8.BigNumber(result);
            };
            this.packageAdminInv = packageAdminInv_call;
            let packageAdminLength_call = async (packageId, options) => {
                let result = await this.call('packageAdminLength', [this.wallet.utils.toString(packageId)], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.packageAdminLength = packageAdminLength_call;
            let packageNameParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let packageName_call = async (params, options) => {
                let result = await this.call('packageName', packageNameParams(params), options);
                return result;
            };
            this.packageName = packageName_call;
            let packageNameInvParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
            let packageNameInv_call = async (params, options) => {
                let result = await this.call('packageNameInv', packageNameInvParams(params), options);
                return new eth_contract_8.BigNumber(result);
            };
            this.packageNameInv = packageNameInv_call;
            let packageVersions_call = async (param1, options) => {
                let result = await this.call('packageVersions', [this.wallet.utils.toString(param1)], options);
                return {
                    packageId: new eth_contract_8.BigNumber(result.packageId),
                    version: {
                        major: new eth_contract_8.BigNumber(result.version.major),
                        minor: new eth_contract_8.BigNumber(result.version.minor),
                        patch: new eth_contract_8.BigNumber(result.version.patch)
                    },
                    status: new eth_contract_8.BigNumber(result.status),
                    ipfsCid: result.ipfsCid,
                    timestamp: new eth_contract_8.BigNumber(result.timestamp)
                };
            };
            this.packageVersions = packageVersions_call;
            let packageVersionsLength_call = async (options) => {
                let result = await this.call('packageVersionsLength', [], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.packageVersionsLength = packageVersionsLength_call;
            let packageVersionsListParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let packageVersionsList_call = async (params, options) => {
                let result = await this.call('packageVersionsList', packageVersionsListParams(params), options);
                return new eth_contract_8.BigNumber(result);
            };
            this.packageVersionsList = packageVersionsList_call;
            let packageVersionsListLength_call = async (packageId, options) => {
                let result = await this.call('packageVersionsListLength', [this.wallet.utils.toString(packageId)], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.packageVersionsListLength = packageVersionsListLength_call;
            let packages_call = async (param1, options) => {
                let result = await this.call('packages', [this.wallet.utils.toString(param1)], options);
                return {
                    projectId: new eth_contract_8.BigNumber(result.projectId),
                    currVersionIndex: new eth_contract_8.BigNumber(result.currVersionIndex),
                    ipfsCid: result.ipfsCid,
                    category: result.category,
                    status: new eth_contract_8.BigNumber(result.status)
                };
            };
            this.packages = packages_call;
            let packagesLength_call = async (options) => {
                let result = await this.call('packagesLength', [], options);
                return new eth_contract_8.BigNumber(result);
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
                return new eth_contract_8.BigNumber(result);
            };
            this.projectAdminInv = projectAdminInv_call;
            let projectAdminLength_call = async (projectId, options) => {
                let result = await this.call('projectAdminLength', [this.wallet.utils.toString(projectId)], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.projectAdminLength = projectAdminLength_call;
            let projectBackerBalanceParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let projectBackerBalance_call = async (params, options) => {
                let result = await this.call('projectBackerBalance', projectBackerBalanceParams(params), options);
                return new eth_contract_8.BigNumber(result);
            };
            this.projectBackerBalance = projectBackerBalance_call;
            let projectBalance_call = async (param1, options) => {
                let result = await this.call('projectBalance', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.projectBalance = projectBalance_call;
            let projectCount_call = async (options) => {
                let result = await this.call('projectCount', [], options);
                return new eth_contract_8.BigNumber(result);
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
                let result = await this.call('projectNameInv', [param1], options);
                return new eth_contract_8.BigNumber(result);
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
                return new eth_contract_8.BigNumber(result);
            };
            this.projectPackages = projectPackages_call;
            let projectPackagesInvParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let projectPackagesInv_call = async (params, options) => {
                let result = await this.call('projectPackagesInv', projectPackagesInvParams(params), options);
                return new eth_contract_8.BigNumber(result);
            };
            this.projectPackagesInv = projectPackagesInv_call;
            let projectPackagesLength_call = async (projectId, options) => {
                let result = await this.call('projectPackagesLength', [this.wallet.utils.toString(projectId)], options);
                return new eth_contract_8.BigNumber(result);
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
                return new eth_contract_8.BigNumber(result);
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
                return new eth_contract_8.BigNumber(result);
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
                return new eth_contract_8.BigNumber(result);
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
define("@scom/scom-portal-contract/contracts/RouterVaultWrapper.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/RouterVaultWrapper.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract Vault", "name": "_vault", "type": "address" }, { "internalType": "contract IOSWAP_HybridRouter2", "name": "_router", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "inToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "inAmount", "type": "uint256" }], "name": "Claim", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256[]", "name": "trancheId", "type": "uint256[]" }, { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "inToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "inAmount", "type": "uint256" }], "name": "Swap", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract IOSWAP_HybridRouter2", "name": "router", "type": "address" }], "name": "UpdateRouter", "type": "event" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "claimExactIn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "claimExactOut", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "router", "outputs": [{ "internalType": "contract IOSWAP_HybridRouter2", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "swapExactIn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "swapExactOut", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IOSWAP_HybridRouter2", "name": "_router", "type": "address" }], "name": "updateRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "vault", "outputs": [{ "internalType": "contract Vault", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "weth", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b50604051620029fc380380620029fc833981016040819052620000349162000112565b60008054336001600160a01b0319918216179091556003805482166001600160a01b038581169182179092556004805490931691841691909117825560408051633fc8cef360e01b815290519192633fc8cef39282820192602092908290030181865afa158015620000aa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d0919062000151565b600580546001600160a01b0319166001600160a01b039290921691909117905550620001789050565b6001600160a01b03811681146200010f57600080fd5b50565b600080604083850312156200012657600080fd5b82516200013381620000f9565b60208401519092506200014681620000f9565b809150509250929050565b6000602082840312156200016457600080fd5b81516200017181620000f9565b9392505050565b61287480620001886000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80639c52a7f111610097578063d9f510bb11610066578063d9f510bb14610233578063f2fde38b14610246578063f887ea4014610259578063fbfa77cf1461027957600080fd5b80639c52a7f1146101da578063a2f55ae5146101ed578063c851cc3214610200578063d4ee1d901461021357600080fd5b8063484420d6116100d3578063484420d61461018c57806355a5ed7e1461019f57806360536172146101b25780638da5cb5b146101ba57600080fd5b806307c0cf1f146100fa5780633fc8cef31461010f5780633fd8cc4e14610159575b600080fd5b61010d610108366004612132565b610299565b005b60055461012f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61017c6101673660046121d2565b60026020526000908152604090205460ff1681565b6040519015158152602001610150565b61010d61019a366004612132565b6107e9565b61010d6101ad3660046121ef565b610c32565b61010d6110e4565b60005461012f9073ffffffffffffffffffffffffffffffffffffffff1681565b61010d6101e83660046121d2565b61120e565b61010d6101fb3660046121d2565b6112b5565b61010d61020e3660046121d2565b611358565b60015461012f9073ffffffffffffffffffffffffffffffffffffffff1681565b61010d6102413660046121ef565b6113ef565b61010d6102543660046121d2565b61180b565b60045461012f9073ffffffffffffffffffffffffffffffffffffffff1681565b60035461012f9073ffffffffffffffffffffffffffffffffffffffff1681565b32331480156102a75750333b155b610312576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e64207573657200000000000000000000000000000060448201526064015b60405180910390fd5b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8b8b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b8152600401610396939291906122fd565b600060405180830381865afa1580156103b3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103f9919081019061244d565b90508060008151811061040e5761040e612482565b60200260200101519150506104248133886118a2565b60045490965061044e9073ffffffffffffffffffffffffffffffffffffffff8381169116886119f9565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c1385f2489898d8d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168d600067ffffffffffffffff8111156104f3576104f3612337565b6040519080825280601f01601f19166020018201604052801561051d576020820181803683370190505b506040518963ffffffff1660e01b8152600401610541989796959493929190612527565b6000604051808303816000875af1158015610560573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526105a69190810190612593565b9150508315610654576003546040517fc2d5b8c100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063c2d5b8c19061060b90889088903390899060040161269d565b6020604051808303816000875af115801561062a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064e91906126df565b506106f2565b6003546040517f7631997500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8581166024830152909116906376319975906044016020604051808303816000875af11580156106cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f091906126df565b505b7fa209008f549b3d427707a61fa4615bd06a3ebc4fa19bc4b555dc47593c6e5ee7858533858560008151811061072a5761072a612482565b60200260200101516040516107439594939291906126f8565b60405180910390a18060008151811061075e5761075e612482565b60200260200101518711156107dd576107b5338260008151811061078457610784612482565b602002602001015189610797919061276c565b73ffffffffffffffffffffffffffffffffffffffff85169190611b7b565b6004546107dd9073ffffffffffffffffffffffffffffffffffffffff84811691166000611bd6565b50505050505050505050565b32331480156107f75750333b155b61085d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e6420757365720000000000000000000000000000006044820152606401610309565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8b8b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b81526004016108e1939291906122fd565b600060405180830381865afa1580156108fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610944919081019061244d565b90508060008151811061095957610959612482565b602002602001015191505061096f8133896118a2565b6004549097506109999073ffffffffffffffffffffffffffffffffffffffff8381169116896119f9565b60045460035460009173ffffffffffffffffffffffffffffffffffffffff908116916365d9e64b918b918b918f918f918991168d896040519080825280601f01601f1916602001820160405280156109f8576020820181803683370190505b506040518963ffffffff1660e01b8152600401610a1c989796959493929190612527565b6000604051808303816000875af1158015610a3b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a819190810190612593565b9150508315610b2f576003546040517fc2d5b8c100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063c2d5b8c190610ae690889088903390899060040161269d565b6020604051808303816000875af1158015610b05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2991906126df565b50610bcd565b6003546040517f7631997500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8581166024830152909116906376319975906044016020604051808303816000875af1158015610ba7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcb91906126df565b505b7fa209008f549b3d427707a61fa4615bd06a3ebc4fa19bc4b555dc47593c6e5ee78585338585600081518110610c0557610c05612482565b6020026020010151604051610c1e9594939291906126f8565b60405180910390a150505050505050505050565b3233148015610c405750333b155b610ca6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e6420757365720000000000000000000000000000006044820152606401610309565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8d8d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b8152600401610d2a939291906122fd565b600060405180830381865afa158015610d47573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d8d919081019061244d565b905080600081518110610da257610da2612482565b6020026020010151915050610db881338a6118a2565b600454909850610de29073ffffffffffffffffffffffffffffffffffffffff83811691168a6119f9565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c1385f248b8b8f8f600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168f600067ffffffffffffffff811115610e8757610e87612337565b6040519080825280601f01601f191660200182016040528015610eb1576020820181803683370190505b506040518963ffffffff1660e01b8152600401610ed5989796959493929190612527565b6000604051808303816000875af1158015610ef4573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610f3a9190810190612593565b6003546040517f8ad30c8d00000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff169150638ad30c8d90610f9c908a9033908b908b908b908b90600401612783565b6020604051808303816000875af1158015610fbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdf91906126df565b50867fa27580a77a01c86ee8598d930ae5f9a0ec6f146c6e0e9e9f50b95bacb337871833848460008151811061101757611017612482565b602002602001015160405161105a9392919073ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b60405180910390a28060008151811061107557611075612482565b60200260200101518911156110d6576110ae338260008151811061109b5761109b612482565b60200260200101518b610797919061276c565b6004546110d69073ffffffffffffffffffffffffffffffffffffffff84811691166000611bd6565b505050505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461118b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610309565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461123257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146112d957600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016112aa565b60005473ffffffffffffffffffffffffffffffffffffffff16331461137c57600080fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527fd5f5b4d616f94f5e10b2955392470790b3fdde7c0c0b68bd1f3ea635e2caa8d7906020016112aa565b32331480156113fd5750333b155b611463576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e6420757365720000000000000000000000000000006044820152606401610309565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8d8d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b81526004016114e7939291906122fd565b600060405180830381865afa158015611504573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261154a919081019061244d565b90508060008151811061155f5761155f612482565b602002602001015191505061157581338b6118a2565b60045490995061159f9073ffffffffffffffffffffffffffffffffffffffff83811691168b6119f9565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166365d9e64b8b8b8f8f87600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168f600067ffffffffffffffff81111561162257611622612337565b6040519080825280601f01601f19166020018201604052801561164c576020820181803683370190505b506040518963ffffffff1660e01b8152600401611670989796959493929190612527565b6000604051808303816000875af115801561168f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526116d59190810190612593565b6003546040517f8ad30c8d00000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff169150638ad30c8d90611737908a9033908b908b908b908b90600401612783565b6020604051808303816000875af1158015611756573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061177a91906126df565b50867fa27580a77a01c86ee8598d930ae5f9a0ec6f146c6e0e9e9f50b95bacb33787183384846000815181106117b2576117b2612482565b60200260200101516040516117f59392919073ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b60405180910390a2505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461182f57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016112aa565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561190f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061193391906126df565b905061195773ffffffffffffffffffffffffffffffffffffffff8516843085611d58565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa1580156119c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119e791906126df565b6119f1919061276c565b949350505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611a70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a9491906126df565b611a9e91906127d5565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150611b759085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611db6565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611bd19084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611af3565b505050565b801580611c7657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611c50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7491906126df565b155b611d02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610309565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611bd19084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611af3565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611b759085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611af3565b6000611e18826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ec29092919063ffffffff16565b805190915015611bd15780806020019051810190611e3691906127ed565b611bd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610309565b60606119f18484600085611ed8565b9392505050565b606082471015611f6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610309565b73ffffffffffffffffffffffffffffffffffffffff85163b611fe8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610309565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612011919061280f565b60006040518083038185875af1925050503d806000811461204e576040519150601f19603f3d011682016040523d82523d6000602084013e612053565b606091505b509150915061206382828661206e565b979650505050505050565b6060831561207d575081611ed1565b82511561208d5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610309919061282b565b60008083601f8401126120d357600080fd5b50813567ffffffffffffffff8111156120eb57600080fd5b6020830191508360208260051b850101111561210657600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461212f57600080fd5b50565b60008060008060008060008060c0898b03121561214e57600080fd5b883567ffffffffffffffff8082111561216657600080fd5b6121728c838d016120c1565b909a50985060208b0135975060408b0135965060608b0135955060808b01359150808211156121a057600080fd5b506121ad8b828c016120c1565b90945092505060a08901356121c18161210d565b809150509295985092959890939650565b6000602082840312156121e457600080fd5b8135611ed18161210d565b6000806000806000806000806000806101008b8d03121561220f57600080fd5b8a3567ffffffffffffffff8082111561222757600080fd5b6122338e838f016120c1565b909c509a5060208d0135995060408d0135985060608d0135975060808d0135965060a08d013591506122648261210d565b90945060c08c0135935060e08c0135908082111561228157600080fd5b5061228e8d828e016120c1565b915080935050809150509295989b9194979a5092959850565b8183526000602080850194508260005b858110156122f25781356122ca8161210d565b73ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016122b7565b509495945050505050565b6040815260006123116040830185876122a7565b905073ffffffffffffffffffffffffffffffffffffffff83166020830152949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156123ad576123ad612337565b604052919050565b600067ffffffffffffffff8211156123cf576123cf612337565b5060051b60200190565b600082601f8301126123ea57600080fd5b815160206123ff6123fa836123b5565b612366565b82815260059290921b8401810191818101908684111561241e57600080fd5b8286015b848110156124425780516124358161210d565b8352918301918301612422565b509695505050505050565b60006020828403121561245f57600080fd5b815167ffffffffffffffff81111561247657600080fd5b6119f1848285016123d9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60005b838110156124cc5781810151838201526020016124b4565b83811115611b755750506000910152565b600081518084526124f58160208601602086016124b1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b88815287602082015260e06040820152600061254760e08301888a6122a7565b73ffffffffffffffffffffffffffffffffffffffff87811660608501528616608084015260a0830185905282810360c084015261258481856124dd565b9b9a5050505050505050505050565b600080604083850312156125a657600080fd5b825167ffffffffffffffff808211156125be57600080fd5b6125ca868387016123d9565b93506020915081850151818111156125e157600080fd5b85019050601f810186136125f457600080fd5b80516126026123fa826123b5565b81815260059190911b8201830190838101908883111561262157600080fd5b928401925b8284101561263f57835182529284019290840190612626565b80955050505050509250929050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561268057600080fd5b8260051b8083602087013760009401602001938452509192915050565b6060815260006126b160608301868861264e565b73ffffffffffffffffffffffffffffffffffffffff9485166020840152929093166040909101529392505050565b6000602082840312156126f157600080fd5b5051919050565b60808152600061270c60808301878961264e565b73ffffffffffffffffffffffffffffffffffffffff9586166020840152939094166040820152606001529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561277e5761277e61273d565b500390565b868152600073ffffffffffffffffffffffffffffffffffffffff808816602084015280871660408401525084606083015260a060808301526127c960a08301848661264e565b98975050505050505050565b600082198211156127e8576127e861273d565b500190565b6000602082840312156127ff57600080fd5b81518015158114611ed157600080fd5b600082516128218184602087016124b1565b9190910192915050565b602081526000611ed160208301846124dd56fea2646970667358221220a373a9cef15321e273b3cb0122520c0f06bfc2b6eaae9b5b214b249ea299c0e564736f6c634300080d0033"
    };
});
define("@scom/scom-portal-contract/contracts/RouterVaultWrapper.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/RouterVaultWrapper.json.ts"], function (require, exports, eth_contract_9, RouterVaultWrapper_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RouterVaultWrapper = void 0;
    class RouterVaultWrapper extends eth_contract_9.Contract {
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
        parseClaimEvent(receipt) {
            return this.parseEvents(receipt, "Claim").map(e => this.decodeClaimEvent(e));
        }
        decodeClaimEvent(event) {
            let result = event.data;
            return {
                trancheId: new eth_contract_9.BigNumber(result.trancheId),
                sender: result.sender,
                inToken: result.inToken,
                inAmount: new eth_contract_9.BigNumber(result.inAmount),
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
                trancheId: result.trancheId.map(e => new eth_contract_9.BigNumber(e)),
                sender: result.sender,
                inToken: result.inToken,
                inAmount: new eth_contract_9.BigNumber(result.inAmount),
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
            let claimExactInParams = (params) => [params.pair, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.trancheId), params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
            let claimExactIn_send = async (params, options) => {
                let result = await this.send('claimExactIn', claimExactInParams(params), options);
                return result;
            };
            let claimExactIn_call = async (params, options) => {
                let result = await this.call('claimExactIn', claimExactInParams(params), options);
                return;
            };
            this.claimExactIn = Object.assign(claimExactIn_send, {
                call: claimExactIn_call
            });
            let claimExactOutParams = (params) => [params.pair, this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.trancheId), params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
            let claimExactOut_send = async (params, options) => {
                let result = await this.send('claimExactOut', claimExactOutParams(params), options);
                return result;
            };
            let claimExactOut_call = async (params, options) => {
                let result = await this.call('claimExactOut', claimExactOutParams(params), options);
                return;
            };
            this.claimExactOut = Object.assign(claimExactOut_send, {
                call: claimExactOut_call
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
            let swapExactInParams = (params) => [params.pair, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.trancheIds), params.to];
            let swapExactIn_send = async (params, options) => {
                let result = await this.send('swapExactIn', swapExactInParams(params), options);
                return result;
            };
            let swapExactIn_call = async (params, options) => {
                let result = await this.call('swapExactIn', swapExactInParams(params), options);
                return;
            };
            this.swapExactIn = Object.assign(swapExactIn_send, {
                call: swapExactIn_call
            });
            let swapExactOutParams = (params) => [params.pair, this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.trancheIds), params.to];
            let swapExactOut_send = async (params, options) => {
                let result = await this.send('swapExactOut', swapExactOutParams(params), options);
                return result;
            };
            let swapExactOut_call = async (params, options) => {
                let result = await this.call('swapExactOut', swapExactOutParams(params), options);
                return;
            };
            this.swapExactOut = Object.assign(swapExactOut_send, {
                call: swapExactOut_call
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
define("@scom/scom-portal-contract/contracts/Scom.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/Scom.json.ts'/> 
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
define("@scom/scom-portal-contract/contracts/Scom.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/Scom.json.ts"], function (require, exports, eth_contract_10, Scom_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scom = void 0;
    class Scom extends eth_contract_10.Contract {
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
                value: new eth_contract_10.BigNumber(result.value),
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
                value: new eth_contract_10.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_10.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_10.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let cap_call = async (options) => {
                let result = await this.call('cap', [], options);
                return new eth_contract_10.BigNumber(result);
            };
            this.cap = cap_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_10.BigNumber(result);
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
                return new eth_contract_10.BigNumber(result);
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
define("@scom/scom-portal-contract/contracts/Vault.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-portal-contract/contracts/Vault.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "_foundation", "type": "address" }, { "internalType": "uint256", "name": "_foundationShare", "type": "uint256" }, { "internalType": "contract Scom", "name": "_scom", "type": "address" }, { "internalType": "contract UniV3", "name": "_uniV3", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountScom", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountEth", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "remainingBalance", "type": "uint256" }], "name": "Buy", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountScom", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountEth", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "remainingBalance", "type": "uint256" }], "name": "Claim", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "unlockedAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "releasedAmount", "type": "uint256" }], "name": "DirectRelease", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "start", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "end", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rate", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "initAmount", "type": "uint256" }], "name": "Lock", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "unlockedAmount", "type": "uint256" }], "name": "NewTranche", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "releasedAmount", "type": "uint256" }], "name": "Release", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountScom", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountEth", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "remainingBalance", "type": "uint256" }], "name": "Sell", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trancheId", "type": "uint256" }], "name": "TrancheRelease", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "unlock", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "available", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "balance", "type": "uint256" }], "name": "Unlock", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "balance", "type": "uint256" }], "name": "WithdrawScomFromRelease", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "remainingBalance", "type": "uint256" }], "name": "WithdrawScomFromTranche", "type": "event" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "availableBalanceInTranche", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "buyScom", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "buyWithWETH", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "claim", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trancheId", "type": "uint256" }, { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "allocation", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "claimWithWETH", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "currUnlockedAmount", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decrementDecimal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "directRelease", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "fee", "outputs": [{ "internalType": "uint24", "name": "", "type": "uint24" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "foundation", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "foundationShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "lastUnlockedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "lastUpdate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "presale", "type": "uint256" }, { "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }, { "internalType": "uint256", "name": "_decrementDecimal", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "lockedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "maxTick", "outputs": [{ "internalType": "int24", "name": "", "type": "int24" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "minTick", "outputs": [{ "internalType": "int24", "name": "", "type": "int24" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "components": [{ "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "limitedClaimEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "unlimitedClaimEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes32", "name": "merkleRoot", "type": "bytes32" }, { "internalType": "bytes", "name": "ipfsCid", "type": "bytes" }], "internalType": "struct Vault.TrancheInfo", "name": "tranche", "type": "tuple" }], "name": "newTranche", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "releaseAndBuy", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }, { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "releaseAndBuyWithWETH", "outputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }], "name": "releaseTranche", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "releasedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "scom", "outputs": [{ "internalType": "contract Scom", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountScom", "type": "uint256" }], "name": "sellScom", "outputs": [{ "internalType": "uint256", "name": "amountEth", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "startingAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "tickSpacing", "outputs": [{ "internalType": "int24", "name": "", "type": "int24" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "token0IsScom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "trancheInfo", "outputs": [{ "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "limitedClaimEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "unlimitedClaimEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes32", "name": "merkleRoot", "type": "bytes32" }, { "internalType": "bytes", "name": "ipfsCid", "type": "bytes" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "uniV3", "outputs": [{ "internalType": "contract UniV3", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount0Owed", "type": "uint256" }, { "internalType": "uint256", "name": "amount1Owed", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "uniswapV3MintCallback", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "unlock", "outputs": [{ "internalType": "uint256", "name": "newAmount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "unlockAndRelease", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "unlockedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "unlockedAmountAt", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_endTime", "type": "uint256" }, { "internalType": "uint256", "name": "_startingAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_decrementDecimal", "type": "uint256" }], "name": "updateReleaseSchdule", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "usedAllocation", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "weth", "outputs": [{ "internalType": "contract IWETH", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawFromRelease", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "trancheIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amountScom", "type": "uint256[]" }], "name": "withdrawFromTranche", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "stateMutability": "payable", "type": "receive" }
        ],
        "bytecode": "6101006040523480156200001257600080fd5b5060405162005223380380620052238339810160408190526200003591620001a0565b600080546001600160a01b0319908116331782556001600355600480546001600160a01b0388811691909316178155600586905584821660805290831660c081905260408051630dfe168160e01b815290519192630dfe16819282820192602092908290030181865afa158015620000b1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d79190620001fc565b90506000826001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200011a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001409190620001fc565b9050836001600160a01b0316826001600160a01b031614620001655760008262000169565b6001815b6001600160a01b031660a052151560e0525062000223945050505050565b6001600160a01b03811681146200019d57600080fd5b50565b60008060008060808587031215620001b757600080fd5b8451620001c48162000187565b602086015160408701519195509350620001de8162000187565b6060860151909250620001f18162000187565b939692955090935050565b6000602082840312156200020f57600080fd5b81516200021c8162000187565b9392505050565b60805160a05160c05160e051614ef46200032f600039600081816104dd0152818161201f015281816124b1015281816126bd0152818161275201528181613a970152613d890152600081816107da01528181611f860152818161212a015281816123110152818161241501528181612629015281816139fe01528181613bdd0152613c6a01526000818161044401528181610df8015281816112ae01528181611c8f01528181612526015281816126e20152818161279d01528181612b880152612e300152600081816108dc01528181610d460152818161109a0152818161148101528181612277015281816127080152818161277701528181612d14015261324b0152614ef46000f3fe6080604052600436106103165760003560e01c8063763199751161019a578063c0463711116100e1578063d4ee1d901161008a578063f2fde38b11610064578063f2fde38b14610928578063f72084b214610948578063fa7feaa91461095e57600080fd5b8063d4ee1d901461089d578063da6a5015146108ca578063ddca3f43146108fe57600080fd5b8063ca773161116100bb578063ca77316114610848578063d0c93a7c14610868578063d34879971461087d57600080fd5b8063c0463711146107fc578063c2d5b8c114610812578063c8f49b6c1461083257600080fd5b8063939e48f911610143578063a2f55ae51161011d578063a2f55ae514610793578063a69df4b5146107b3578063a9004c93146107c857600080fd5b8063939e48f91461073357806398f785bc146107605780639c52a7f11461077357600080fd5b806379fb42b61161017457806379fb42b6146106c65780638ad30c8d146106e65780638da5cb5b1461070657600080fd5b80637631997514610670578063788ecd051461069057806378e97925146106b057600080fd5b806341fbb0501161025e57806361911c08116102075780636ab28bc8116101e15780636ab28bc81461061057806372fcfbf814610626578063758724651461065a57600080fd5b806361911c08146105a3578063625e9e10146105d057806364a6043b146105f057600080fd5b8063544f113b11610238578063544f113b146105585780635e8fa11e1461056e578063605361721461058e57600080fd5b806341fbb050146104ff57806345d30a171461052c5780634dfefebc1461054257600080fd5b80632e7ba6ef116102c05780633fc8cef31161029a5780633fc8cef3146104325780633fd8cc4e1461048b57806341ea5263146104cb57600080fd5b80632e7ba6ef146103e95780633197cbb6146103fc57806331f0cf6d1461041257600080fd5b80631fca5a95116102f15780631fca5a951461039657806325cb9760146103b6578063260e9640146103c957600080fd5b806294359914610322578063023117ad146103445780631db3b6dd1461036c57600080fd5b3661031d57005b600080fd5b34801561032e57600080fd5b5061034261033d3660046142be565b610990565b005b34801561035057600080fd5b506103596109ce565b6040519081526020015b60405180910390f35b34801561037857600080fd5b50610383620d89dc81565b60405160029190910b8152602001610363565b3480156103a257600080fd5b506103426103b1366004614336565b6109de565b6103596103c43660046143c4565b610d78565b3480156103d557600080fd5b506103426103e436600461441b565b610e8e565b6103596103f736600461444d565b611236565b34801561040857600080fd5b5061035960085481565b34801561041e57600080fd5b5061034261042d3660046144b7565b61134a565b34801561043e57600080fd5b506104667f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610363565b34801561049757600080fd5b506104bb6104a63660046144d0565b60026020526000908152604090205460ff1681565b6040519015158152602001610363565b3480156104d757600080fd5b506104bb7f000000000000000000000000000000000000000000000000000000000000000081565b34801561050b57600080fd5b506004546104669073ffffffffffffffffffffffffffffffffffffffff1681565b34801561053857600080fd5b50610359600e5481565b34801561054e57600080fd5b50610359600d5481565b34801561056457600080fd5b5061035960095481565b34801561057a57600080fd5b506103426105893660046144b7565b6114eb565b34801561059a57600080fd5b50610342611524565b3480156105af57600080fd5b506103596105be3660046144b7565b60106020526000908152604090205481565b3480156105dc57600080fd5b506103426105eb3660046144b7565b61164e565b3480156105fc57600080fd5b5061035961060b3660046144ed565b611756565b34801561061c57600080fd5b5061035960065481565b34801561063257600080fd5b506103837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2762481565b34801561066657600080fd5b50610359600c5481565b34801561067c57600080fd5b5061035961068b36600461452f565b6117df565b34801561069c57600080fd5b506103426106ab366004614568565b61185c565b3480156106bc57600080fd5b5061035960075481565b3480156106d257600080fd5b506103596106e13660046144b7565b611b22565b3480156106f257600080fd5b506103596107013660046145a3565b611b86565b34801561071257600080fd5b506000546104669073ffffffffffffffffffffffffffffffffffffffff1681565b34801561073f57600080fd5b5061035961074e3660046144b7565b60116020526000908152604090205481565b61035961076e3660046144d0565b611c17565b34801561077f57600080fd5b5061034261078e3660046144d0565b611d23565b34801561079f57600080fd5b506103426107ae3660046144d0565b611dc3565b3480156107bf57600080fd5b50610359611e66565b3480156107d457600080fd5b506104667f000000000000000000000000000000000000000000000000000000000000000081565b34801561080857600080fd5b50610359600b5481565b34801561081e57600080fd5b5061035961082d36600461461f565b611eeb565b34801561083e57600080fd5b50610359600a5481565b34801561085457600080fd5b506103596108633660046144b7565b611f81565b34801561087457600080fd5b50610383600a81565b34801561088957600080fd5b50610342610898366004614687565b612611565b3480156108a957600080fd5b506001546104669073ffffffffffffffffffffffffffffffffffffffff1681565b3480156108d657600080fd5b506104667f000000000000000000000000000000000000000000000000000000000000000081565b34801561090a57600080fd5b506109146101f481565b60405162ffffff9091168152602001610363565b34801561093457600080fd5b506103426109433660046144d0565b6127df565b34801561095457600080fd5b5061035960055481565b34801561096a57600080fd5b5061097e6109793660046144b7565b612876565b6040516103639695949392919061477d565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109b457600080fd5b6109bc611e66565b50600892909255600a91909155600955565b60006109d942611b22565b905090565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a0257600080fd5b60008381838214610a74576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6172726179206c656e677468206e6f74206d617463686564000000000000000060448201526064015b60405180910390fd5b81831015610d28576000600f888886818110610a9257610a926147ba565b9050602002013581548110610aa957610aa96147ba565b906000526020600020906006020190504281600101541015610d1c576002868686818110610ad957610ad96147ba565b90506020020135610aea9190614818565b15610b51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f616d6f756e74206d757374206265206576656e000000000000000000000000006044820152606401610a6b565b60106000898987818110610b6757610b676147ba565b90506020020135815260200190815260200160002054868686818110610b8f57610b8f6147ba565b905060200201351115610bfe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420616d6f756e740000000000000000000000000000000000006044820152606401610a6b565b858585818110610c1057610c106147ba565b90506020020135601060008a8a88818110610c2d57610c2d6147ba565b9050602002013581526020019081526020016000206000828254610c51919061485b565b909155508690508585818110610c6957610c696147ba565b9050602002013582610c7b9190614872565b9150878785818110610c8f57610c8f6147ba565b905060200201357ffbca3ac255731af5d2a93384cf4ed03ef5019098e67fb56f355a1be5983e6d5e878787818110610cc957610cc96147ba565b90506020020135601060008c8c8a818110610ce657610ce66147ba565b90506020020135815260200190815260200160002054604051610d13929190918252602082015260400190565b60405180910390a25b50600190920191610a74565b600454610d6f9073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811691168361294a565b50505050505050565b6000600260035403610de6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a6b565b6002600355610df58484612a23565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b158015610e5e57600080fd5b505af1158015610e72573d6000803e3d6000fd5b5050505050610e813383612b40565b6001600355949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610eb257600080fd5b60065415610f1c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c7265616479207374617274656400000000000000000000000000000000006044820152606401610a6b565b610f27600285614818565b15610f8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f70726573616c65206d757374206265206576656e0000000000000000000000006044820152606401610a6b565b818310610ff7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f696e76616c696420737461727454696d65202f20656e6454696d6500000000006044820152606401610a6b565b670de0b6b3a7640000811115611069576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c69642064656372656d656e740000000000000000000000000000006044820152606401610a6b565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156110f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111a919061488a565b905080851115611186576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f70726573616c6520746f6f206c617267650000000000000000000000000000006044820152606401610a6b565b600e859055611195858261485b565b60065560078490556008839055600a8290556111c3826111b5868661485b565b670de0b6b3a7640000612da0565b670de0b6b3a76400006006546111d991906148a3565b6111e391906148e0565b600981905560408051868152602081018690528082018590526060810192909252517fb49bb339db243eef7c76d160a9db9bab89d306e61cd9d22d3cf7ccc0ef41aa9c9181900360800190a15050505050565b60006002600354036112a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a6b565b60026003819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561131457600080fd5b505af1158015611328573d6000803e3d6000fd5b505050505061133b863387878787612de8565b60016003559695505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461136e57600080fd5b600e548111156113da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e73756666696369656e742062616c616e63650000000000000000000000006044820152606401610a6b565b6113e5600282614818565b1561144c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f616d6f756e74206d757374206265206576656e000000000000000000000000006044820152606401610a6b565b80600e600082825461145e919061485b565b90915550506004546114aa9073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811691168361294a565b600e546040805183815260208101929092527f2a46f0dff688c974909291f24dfeae995b76cda96bd867ac91b910fbf43859c291015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461150f57600080fd5b611517611e66565b506115218161164e565b50565b60015473ffffffffffffffffffffffffffffffffffffffff1633146115cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a6b565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461167257600080fd5b61167d600282614818565b156116e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f616d6f756e74206d757374206265206576656e000000000000000000000000006044820152606401610a6b565b80600d60008282546116f6919061485b565b9250508190555080600e600082825461170f9190614872565b9091555050600d54600e546040805184815260208101939093528201527f257a799c5ed622cb48dc9a426cdd36566da852578a96d49d77bedd937a255b55906060016114e0565b60006002600354036117c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a6b565b60026003556117d38383612a23565b60016003559392505050565b600060026003540361184d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a6b565b60026003556117d38383612b40565b3360009081526002602052604090205460ff166118fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a6b565b611903611e66565b50806020013560075410801561192157508060400135816020013511155b611987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f696e76616c6964207374617274202f20656e642074696d6520000000000000006044820152606401610a6b565b61199660026060830135614818565b156119fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f616d6f756e74206d757374206265206576656e740000000000000000000000006044820152606401610a6b565b600d54816060013510611a6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420616d6f756e740000000000000000000000000000000000006044820152606401610a6b565b600f805460018101825560009190915281600682027f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac80201611aad8282614adf565b50508160600135600d6000828254611ac5919061485b565b90915550506000818152601060205260409081902060608401359055600d54905182917f6da37ad08550ba024c1448b799ac757c4f29bc9fb729b3f370a4fa2ab798fbd591611b1691815260200190565b60405180910390a25050565b6000600854821115611b3657505060065490565b600060075483611b46919061485b565b9050670de0b6b3a7640000611b66600a5483670de0b6b3a7640000612da0565b600954611b7391906148a3565b611b7d91906148e0565b9150505b919050565b6000600260035403611bf4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a6b565b6002600355611c07878787878787612de8565b6001600355979650505050505050565b6000600260035403611c85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a6b565b60026003819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b158015611cf557600080fd5b505af1158015611d09573d6000803e3d6000fd5b5050505050611d183383612b40565b600160035592915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611d4757600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491016114e0565b60005473ffffffffffffffffffffffffffffffffffffffff163314611de757600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016114e0565b600080611e716109ce565b9050600c5481611e81919061485b565b915081600d6000828254611e959190614872565b9091555050600c81905542600b55600d5460408051848152602081019290925281018290527f458ce229c5e26638bef3a102cd5a230f7ae260a3fdc71ce248e1399edc2d4bc49060600160405180910390a15090565b6000600260035403611f59576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a6b565b6002600355611f688585612a23565b50611f738383612b40565b600160035595945050505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015611fef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120139190614b9e565b505050505050905060007f0000000000000000000000000000000000000000000000000000000000000000156120605761205982612053620d89dc6132e0565b86613777565b9050612096565b61209361208c7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff276246132e0565b8386613836565b90505b6040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b1660208201527ff27624000000000000000000000000000000000000000000000000000000000060348201527f0d89dc0000000000000000000000000000000000000000000000000000000000603782015260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063514ea4bf90603a01604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161218891815260200190565b60a060405180830381865afa1580156121a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c99190614c58565b505050509050806fffffffffffffffffffffffffffffffff16826fffffffffffffffffffffffffffffffff16111561225d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f696e73756666696369656e74206c6971756964697479000000000000000000006044820152606401610a6b565b61229f73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633308861388f565b6040517fa34123a70000000000000000000000000000000000000000000000000000000081527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff276246004820152620d89dc60248201526fffffffffffffffffffffffffffffffff831660448201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a34123a79060640160408051808303816000875af115801561236e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123929190614caf565b6040517f4f1eb3d80000000000000000000000000000000000000000000000000000000081523060048201527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff276246024820152620d89dc60448201526fffffffffffffffffffffffffffffffff8084166064830152821660848201529096509091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634f1eb3d89060a40160408051808303816000875af1158015612472573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124969190614cd3565b6fffffffffffffffffffffffffffffffff90811696501690507f00000000000000000000000000000000000000000000000000000000000000006124d657935b8086600e546124e59190614872565b6124ef9190614872565b600e8190556040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018790529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d90602401600060405180830381600087803b15801561257f57600080fd5b505af1158015612593573d6000803e3d6000fd5b505060405133925087156108fc02915087906000818181858888f193505050501580156125c4573d6000803e3d6000fd5b50604080518781526020810187905290810182905233907f846c37eef631e0943682d87352ec117c20008eb7f425c9b85ac011a6d4774cc09060600160405180910390a250505050919050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146126b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e6f742066726f6d20756e6900000000000000000000000000000000000000006044820152606401610a6b565b83156127455761274533857f0000000000000000000000000000000000000000000000000000000000000000612706577f0000000000000000000000000000000000000000000000000000000000000000612728565b7f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff16919061294a565b82156127d9576127d933847f000000000000000000000000000000000000000000000000000000000000000061279b577f0000000000000000000000000000000000000000000000000000000000000000612728565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16919061294a565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461280357600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016114e0565b600f818154811061288657600080fd5b90600052602060002090600602016000915090508060000154908060010154908060020154908060030154908060040154908060050180546128c790614923565b80601f01602080910402602001604051908101604052809291908181526020018280546128f390614923565b80156129405780601f1061291557610100808354040283529160200191612940565b820191906000526020600020905b81548152906001019060200180831161292357829003601f168201915b5050505050905086565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052612a1e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526138ed565b505050565b600080825b80821015612ae1576000858584818110612a4457612a446147ba565b9050602002013590506000600f8281548110612a6257612a626147ba565b906000526020600020906006020190504281600201541015612ad457600082815260106020526040902054612a979086614872565b6000838152601060205260408082208290555191965083917f1c786aa195f63d5b5a3610de20879d4ec4474b5dbb68813762c5e369f1a895489190a25b5050600190910190612a28565b82600e6000828254612af39190614872565b9091555050600e546040517fcd747ba8dc9c626a1d6661213bbe720a70e77681613089b73c67fc2dfd70109891612b309188918891889190614d06565b60405180910390a1505092915050565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015612bcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bf3919061488a565b905060008111612c5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f20696e70757420616d6f756e7400000000000000000000000000000000006044820152606401610a6b565b612c68816139f9565b91506000612c778360026148a3565b9050600e54811115612ce5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f696e73756666696369656e7420616d6f756e74000000000000000000000000006044820152606401610a6b565b80600e54612cf3919061485b565b600e8190559050612d3b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016858561294a565b604080518481526020810184905290810182905273ffffffffffffffffffffffffffffffffffffffff80861691908716907ef93dbdb72854b6b6fb35433086556f2635fc83c37080c667496fecfa650fb49060600160405180910390a3505092915050565b6000612dac848361485b565b82612dc286612dbc876001614872565b86613dd2565b612dcc908561485b565b612dd691906148a3565b612de091906148e0565b949350505050565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015612e77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e9b919061488a565b905060008111612f07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f20696e70757420616d6f756e7400000000000000000000000000000000006044820152606401610a6b565b6000600f8981548110612f1c57612f1c6147ba565b906000526020600020906006020190506000816003015411612f9a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f696e76616c6964207472616e63686500000000000000000000000000000000006044820152606401610a6b565b8054421015613005576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f6e6f7420737461727465640000000000000000000000000000000000000000006044820152606401610a6b565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608a901b166020820152603481018790526000906054016040516020818303038152906040528051906020012090506130698686846004015484613e90565b6130cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6d65726b6c652070726f6f66206661696c6564000000000000000000000000006044820152606401610a6b565b8160010154421015613171576000818152601160205260408120546130f5908590614872565b905087811115613161576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6578636365656420616c6c6f636174696f6e00000000000000000000000000006044820152606401610a6b565b6000828152601160205260409020555b61317a836139f9565b935060006131898560026148a3565b60008c815260106020526040902054909150811115613204576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e73756666696369656e742062616c616e63650000000000000000000000006044820152606401610a6b565b60008b81526010602052604090205461321e90829061485b565b60008c8152601060205260409020819055905061327273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168a8761294a565b604080518681526020810186905290810182905273ffffffffffffffffffffffffffffffffffffffff808b1691908c16908d907fd319318b8e07a805fc4b8db4d1addae170dcf5e87e9d51278af500ebd169ca699060600160405180910390a4505050509695505050505050565b60008060008360020b126132f7578260020b613304565b8260020b61330490614d68565b905061332f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff27618614da0565b62ffffff1681111561339d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600160248201527f54000000000000000000000000000000000000000000000000000000000000006044820152606401610a6b565b6000816001166000036133c1577001000000000000000000000000000000006133d3565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561341257608061340d826ffff97272373d413259a46990580e213a6148a3565b901c90505b600482161561343c576080613437826ffff2e50f5f656932ef12357cf3c7fdcc6148a3565b901c90505b6008821615613466576080613461826fffe5caca7e10e4e61c3624eaa0941cd06148a3565b901c90505b601082161561349057608061348b826fffcb9843d60f6159c9db58835c9266446148a3565b901c90505b60208216156134ba5760806134b5826fff973b41fa98c081472e6896dfb254c06148a3565b901c90505b60408216156134e45760806134df826fff2ea16466c96a3843ec78b326b528616148a3565b901c90505b608082161561350e576080613509826ffe5dee046a99a2a811c461f1969c30536148a3565b901c90505b610100821615613539576080613534826ffcbe86c7900a88aedcffc83b479aa3a46148a3565b901c90505b61020082161561356457608061355f826ff987a7253ac413176f2b074cf7815e546148a3565b901c90505b61040082161561358f57608061358a826ff3392b0822b70005940c7a398e4b70f36148a3565b901c90505b6108008216156135ba5760806135b5826fe7159475a2c29b7443b29c7fa6e889d96148a3565b901c90505b6110008216156135e55760806135e0826fd097f3bdfd2022b8845ad8f792aa58256148a3565b901c90505b61200082161561361057608061360b826fa9f746462d870fdf8a65dc1f90e061e56148a3565b901c90505b61400082161561363b576080613636826f70d869a156d2a1b890bb3df62baf32f76148a3565b901c90505b618000821615613666576080613661826f31be135f97d08fd981231505542fcfa66148a3565b901c90505b6201000082161561369257608061368d826f09aa508b5b7a84e1c677de54f3e99bc96148a3565b901c90505b620200008216156136bd5760806136b8826e5d6af8dedb81196699c329225ee6046148a3565b901c90505b620400008216156136e75760806136e2826d2216e584f5fa1ea926041bedfe986148a3565b901c90505b6208000082161561370f57608061370a826b048a170391f7dc42444e8fa26148a3565b901c90505b60008460020b131561374857613745817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6148e0565b90505b61375764010000000082614818565b15613763576001613766565b60005b612de09060ff16602083901c614872565b60008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1611156137b1579192915b60006137f78573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000613ea8565b905061382b613826848361380b8989614dde565b73ffffffffffffffffffffffffffffffffffffffff16613ea8565b61402f565b9150505b9392505050565b60008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115613870579192915b612de0613826836c0100000000000000000000000061380b8888614dde565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526127d99085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161299c565b600061394f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661404e9092919063ffffffff16565b805190915015612a1e578080602001905181019061396d9190614e13565b612a1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a6b565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015613a67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613a8b9190614b9e565b505050505050905060007f000000000000000000000000000000000000000000000000000000000000000015613aee57613ae761208c7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff276246132e0565b9050613b01565b613afe82612053620d89dc6132e0565b90505b6000670de0b6b3a7640000600554836fffffffffffffffffffffffffffffffff16613b2c91906148a3565b613b3691906148e0565b600480546040517f3c8a7d8d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216928101929092527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff276246024830152620d89dc60448301526fffffffffffffffffffffffffffffffff8316606483015260a06084830152600060a4830181905292935082917f000000000000000000000000000000000000000000000000000000000000000090911690633c8a7d8d9060c40160408051808303816000875af1158015613c27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613c4b9190614caf565b909250905060008073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016633c8a7d8d307ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff27624620d89dc613cbf8a8c614e2e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16815273ffffffffffffffffffffffffffffffffffffffff9094166004850152600292830b6024850152910b60448301526fffffffffffffffffffffffffffffffff16606482015260a06084820152600060a482015260c40160408051808303816000875af1158015613d5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613d839190614caf565b915091507f0000000000000000000000000000000000000000000000000000000000000000613dbb57613db68184614872565b613dc5565b613dc58285614872565b9998505050505050505050565b6000838015613e7257600184168015613ded57859250613df1565b8392505b50600283046002850494505b8415613e6c578586028687820414613e1457600080fd5b81810181811015613e2457600080fd5b8590049650506001851615613e61578583028387820414158715151615613e4a57600080fd5b81810181811015613e5a57600080fd5b8590049350505b600285049450613dfd565b50613e88565b838015613e825760009250613e86565b8392505b505b509392505050565b600082613e9e86868561405d565b1495945050505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600003613eff5760008411613ef457600080fd5b50829004905061382f565b808411613f0b57600080fd5b600084868809808403938111909203919050600085613f2981614d68565b16958690049593849004936000819003046001019050613f4981846148a3565b909317926000613f5a8760036148a3565b6002189050613f6981886148a3565b613f7490600261485b565b613f7e90826148a3565b9050613f8a81886148a3565b613f9590600261485b565b613f9f90826148a3565b9050613fab81886148a3565b613fb690600261485b565b613fc090826148a3565b9050613fcc81886148a3565b613fd790600261485b565b613fe190826148a3565b9050613fed81886148a3565b613ff890600261485b565b61400290826148a3565b905061400e81886148a3565b61401990600261485b565b61402390826148a3565b9050613dc581866148a3565b806fffffffffffffffffffffffffffffffff81168114611b8157600080fd5b6060612de084846000856140a9565b600081815b848110156140a05761408c82878784818110614080576140806147ba565b9050602002013561423f565b91508061409881614e57565b915050614062565b50949350505050565b60608247101561413b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a6b565b73ffffffffffffffffffffffffffffffffffffffff85163b6141b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a6b565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516141e29190614e8f565b60006040518083038185875af1925050503d806000811461421f576040519150601f19603f3d011682016040523d82523d6000602084013e614224565b606091505b509150915061423482828661426b565b979650505050505050565b600081831061425b57600082815260208490526040902061382f565b5060009182526020526040902090565b6060831561427a57508161382f565b82511561428a5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6b9190614eab565b6000806000606084860312156142d357600080fd5b505081359360208301359350604090920135919050565b60008083601f8401126142fc57600080fd5b50813567ffffffffffffffff81111561431457600080fd5b6020830191508360208260051b850101111561432f57600080fd5b9250929050565b6000806000806040858703121561434c57600080fd5b843567ffffffffffffffff8082111561436457600080fd5b614370888389016142ea565b9096509450602087013591508082111561438957600080fd5b50614396878288016142ea565b95989497509550505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461152157600080fd5b6000806000604084860312156143d957600080fd5b833567ffffffffffffffff8111156143f057600080fd5b6143fc868287016142ea565b9094509250506020840135614410816143a2565b809150509250925092565b6000806000806080858703121561443157600080fd5b5050823594602084013594506040840135936060013592509050565b60008060008060006080868803121561446557600080fd5b853594506020860135614477816143a2565b935060408601359250606086013567ffffffffffffffff81111561449a57600080fd5b6144a6888289016142ea565b969995985093965092949392505050565b6000602082840312156144c957600080fd5b5035919050565b6000602082840312156144e257600080fd5b813561382f816143a2565b6000806020838503121561450057600080fd5b823567ffffffffffffffff81111561451757600080fd5b614523858286016142ea565b90969095509350505050565b6000806040838503121561454257600080fd5b823561454d816143a2565b9150602083013561455d816143a2565b809150509250929050565b60006020828403121561457a57600080fd5b813567ffffffffffffffff81111561459157600080fd5b820160c0818503121561382f57600080fd5b60008060008060008060a087890312156145bc57600080fd5b8635955060208701356145ce816143a2565b945060408701356145de816143a2565b935060608701359250608087013567ffffffffffffffff81111561460157600080fd5b61460d89828a016142ea565b979a9699509497509295939492505050565b6000806000806060858703121561463557600080fd5b843567ffffffffffffffff81111561464c57600080fd5b614658878288016142ea565b909550935050602085013561466c816143a2565b9150604085013561467c816143a2565b939692955090935050565b6000806000806060858703121561469d57600080fd5b8435935060208501359250604085013567ffffffffffffffff808211156146c357600080fd5b818701915087601f8301126146d757600080fd5b8135818111156146e657600080fd5b8860208285010111156146f857600080fd5b95989497505060200194505050565b60005b8381101561472257818101518382015260200161470a565b838111156127d95750506000910152565b6000815180845261474b816020860160208601614707565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b86815285602082015284604082015283606082015282608082015260c060a082015260006147ae60c0830184614733565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082614827576148276147e9565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561486d5761486d61482c565b500390565b600082198211156148855761488561482c565b500190565b60006020828403121561489c57600080fd5b5051919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156148db576148db61482c565b500290565b6000826148ef576148ef6147e9565b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c9082168061493757607f821691505b602082108103614970577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f821115612a1e57600081815260208120601f850160051c8101602086101561499d5750805b601f850160051c820191505b818110156149bc578281556001016149a9565b505050505050565b67ffffffffffffffff8311156149dc576149dc6148f4565b6149f0836149ea8354614923565b83614976565b6000601f841160018114614a425760008515614a0c5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355614ad8565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b82811015614a915786850135825560209485019460019092019101614a71565b5086821015614acc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b813581556020820135600182015560408201356002820155606082013560038201556080820135600482015560a08201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1833603018112614b4057600080fd5b8201803567ffffffffffffffff811115614b5957600080fd5b602082019150803603821315614b6e57600080fd5b6127d98183600586016149c4565b805161ffff81168114611b8157600080fd5b80518015158114611b8157600080fd5b600080600080600080600060e0888a031215614bb957600080fd5b8751614bc4816143a2565b8097505060208801518060020b8114614bdc57600080fd5b9550614bea60408901614b7c565b9450614bf860608901614b7c565b9350614c0660808901614b7c565b925060a088015160ff81168114614c1c57600080fd5b9150614c2a60c08901614b8e565b905092959891949750929550565b80516fffffffffffffffffffffffffffffffff81168114611b8157600080fd5b600080600080600060a08688031215614c7057600080fd5b614c7986614c38565b94506020860151935060408601519250614c9560608701614c38565b9150614ca360808701614c38565b90509295509295909350565b60008060408385031215614cc257600080fd5b505080516020909101519092909150565b60008060408385031215614ce657600080fd5b614cef83614c38565b9150614cfd60208401614c38565b90509250929050565b6060815283606082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff851115614d3f57600080fd5b8460051b8087608085013760009083016080019081526020830194909452506040015292915050565b60007f80000000000000000000000000000000000000000000000000000000000000008203614d9957614d9961482c565b5060000390565b60008160020b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000008103614dd557614dd561482c565b60000392915050565b600073ffffffffffffffffffffffffffffffffffffffff83811690831681811015614e0b57614e0b61482c565b039392505050565b600060208284031215614e2557600080fd5b61382f82614b8e565b60006fffffffffffffffffffffffffffffffff83811690831681811015614e0b57614e0b61482c565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614e8857614e8861482c565b5060010190565b60008251614ea1818460208701614707565b9190910192915050565b60208152600061382f602083018461473356fea264697066735822122059a56ab2d11b8ecdc55ed4d46b88a608e11c376690673a5f91008d152eaa307064736f6c634300080d0033"
    };
});
define("@scom/scom-portal-contract/contracts/Vault.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-portal-contract/contracts/Vault.json.ts"], function (require, exports, eth_contract_11, Vault_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vault = void 0;
    class Vault extends eth_contract_11.Contract {
        constructor(wallet, address) {
            super(wallet, address, Vault_json_1.default.abi, Vault_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.foundation, this.wallet.utils.toString(params.foundationShare), params.scom, params.uniV3], options);
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
                from: result.from,
                to: result.to,
                amountScom: new eth_contract_11.BigNumber(result.amountScom),
                amountEth: new eth_contract_11.BigNumber(result.amountEth),
                remainingBalance: new eth_contract_11.BigNumber(result.remainingBalance),
                _event: event
            };
        }
        parseClaimEvent(receipt) {
            return this.parseEvents(receipt, "Claim").map(e => this.decodeClaimEvent(e));
        }
        decodeClaimEvent(event) {
            let result = event.data;
            return {
                trancheId: new eth_contract_11.BigNumber(result.trancheId),
                from: result.from,
                to: result.to,
                amountScom: new eth_contract_11.BigNumber(result.amountScom),
                amountEth: new eth_contract_11.BigNumber(result.amountEth),
                remainingBalance: new eth_contract_11.BigNumber(result.remainingBalance),
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
        parseDirectReleaseEvent(receipt) {
            return this.parseEvents(receipt, "DirectRelease").map(e => this.decodeDirectReleaseEvent(e));
        }
        decodeDirectReleaseEvent(event) {
            let result = event.data;
            return {
                amount: new eth_contract_11.BigNumber(result.amount),
                unlockedAmount: new eth_contract_11.BigNumber(result.unlockedAmount),
                releasedAmount: new eth_contract_11.BigNumber(result.releasedAmount),
                _event: event
            };
        }
        parseLockEvent(receipt) {
            return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
        }
        decodeLockEvent(event) {
            let result = event.data;
            return {
                start: new eth_contract_11.BigNumber(result.start),
                end: new eth_contract_11.BigNumber(result.end),
                rate: new eth_contract_11.BigNumber(result.rate),
                initAmount: new eth_contract_11.BigNumber(result.initAmount),
                _event: event
            };
        }
        parseNewTrancheEvent(receipt) {
            return this.parseEvents(receipt, "NewTranche").map(e => this.decodeNewTrancheEvent(e));
        }
        decodeNewTrancheEvent(event) {
            let result = event.data;
            return {
                trancheId: new eth_contract_11.BigNumber(result.trancheId),
                unlockedAmount: new eth_contract_11.BigNumber(result.unlockedAmount),
                _event: event
            };
        }
        parseReleaseEvent(receipt) {
            return this.parseEvents(receipt, "Release").map(e => this.decodeReleaseEvent(e));
        }
        decodeReleaseEvent(event) {
            let result = event.data;
            return {
                trancheIds: result.trancheIds.map(e => new eth_contract_11.BigNumber(e)),
                amount: new eth_contract_11.BigNumber(result.amount),
                releasedAmount: new eth_contract_11.BigNumber(result.releasedAmount),
                _event: event
            };
        }
        parseSellEvent(receipt) {
            return this.parseEvents(receipt, "Sell").map(e => this.decodeSellEvent(e));
        }
        decodeSellEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                amountScom: new eth_contract_11.BigNumber(result.amountScom),
                amountEth: new eth_contract_11.BigNumber(result.amountEth),
                remainingBalance: new eth_contract_11.BigNumber(result.remainingBalance),
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
        parseTrancheReleaseEvent(receipt) {
            return this.parseEvents(receipt, "TrancheRelease").map(e => this.decodeTrancheReleaseEvent(e));
        }
        decodeTrancheReleaseEvent(event) {
            let result = event.data;
            return {
                trancheId: new eth_contract_11.BigNumber(result.trancheId),
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
                unlock: new eth_contract_11.BigNumber(result.unlock),
                available: new eth_contract_11.BigNumber(result.available),
                balance: new eth_contract_11.BigNumber(result.balance),
                _event: event
            };
        }
        parseWithdrawScomFromReleaseEvent(receipt) {
            return this.parseEvents(receipt, "WithdrawScomFromRelease").map(e => this.decodeWithdrawScomFromReleaseEvent(e));
        }
        decodeWithdrawScomFromReleaseEvent(event) {
            let result = event.data;
            return {
                amount: new eth_contract_11.BigNumber(result.amount),
                balance: new eth_contract_11.BigNumber(result.balance),
                _event: event
            };
        }
        parseWithdrawScomFromTrancheEvent(receipt) {
            return this.parseEvents(receipt, "WithdrawScomFromTranche").map(e => this.decodeWithdrawScomFromTrancheEvent(e));
        }
        decodeWithdrawScomFromTrancheEvent(event) {
            let result = event.data;
            return {
                trancheId: new eth_contract_11.BigNumber(result.trancheId),
                amount: new eth_contract_11.BigNumber(result.amount),
                remainingBalance: new eth_contract_11.BigNumber(result.remainingBalance),
                _event: event
            };
        }
        assign() {
            let availableBalanceInTranche_call = async (param1, options) => {
                let result = await this.call('availableBalanceInTranche', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.availableBalanceInTranche = availableBalanceInTranche_call;
            let currUnlockedAmount_call = async (options) => {
                let result = await this.call('currUnlockedAmount', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.currUnlockedAmount = currUnlockedAmount_call;
            let decrementDecimal_call = async (options) => {
                let result = await this.call('decrementDecimal', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.decrementDecimal = decrementDecimal_call;
            let endTime_call = async (options) => {
                let result = await this.call('endTime', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.endTime = endTime_call;
            let fee_call = async (options) => {
                let result = await this.call('fee', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.fee = fee_call;
            let foundation_call = async (options) => {
                let result = await this.call('foundation', [], options);
                return result;
            };
            this.foundation = foundation_call;
            let foundationShare_call = async (options) => {
                let result = await this.call('foundationShare', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.foundationShare = foundationShare_call;
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let lastUnlockedAmount_call = async (options) => {
                let result = await this.call('lastUnlockedAmount', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.lastUnlockedAmount = lastUnlockedAmount_call;
            let lastUpdate_call = async (options) => {
                let result = await this.call('lastUpdate', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.lastUpdate = lastUpdate_call;
            let lockedAmount_call = async (options) => {
                let result = await this.call('lockedAmount', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.lockedAmount = lockedAmount_call;
            let maxTick_call = async (options) => {
                let result = await this.call('maxTick', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.maxTick = maxTick_call;
            let minTick_call = async (options) => {
                let result = await this.call('minTick', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.minTick = minTick_call;
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
                return new eth_contract_11.BigNumber(result);
            };
            this.releasedAmount = releasedAmount_call;
            let scom_call = async (options) => {
                let result = await this.call('scom', [], options);
                return result;
            };
            this.scom = scom_call;
            let startTime_call = async (options) => {
                let result = await this.call('startTime', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.startTime = startTime_call;
            let startingAmount_call = async (options) => {
                let result = await this.call('startingAmount', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.startingAmount = startingAmount_call;
            let tickSpacing_call = async (options) => {
                let result = await this.call('tickSpacing', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.tickSpacing = tickSpacing_call;
            let token0IsScom_call = async (options) => {
                let result = await this.call('token0IsScom', [], options);
                return result;
            };
            this.token0IsScom = token0IsScom_call;
            let trancheInfo_call = async (param1, options) => {
                let result = await this.call('trancheInfo', [this.wallet.utils.toString(param1)], options);
                return {
                    startTime: new eth_contract_11.BigNumber(result.startTime),
                    limitedClaimEndTime: new eth_contract_11.BigNumber(result.limitedClaimEndTime),
                    unlimitedClaimEndTime: new eth_contract_11.BigNumber(result.unlimitedClaimEndTime),
                    amount: new eth_contract_11.BigNumber(result.amount),
                    merkleRoot: result.merkleRoot,
                    ipfsCid: result.ipfsCid
                };
            };
            this.trancheInfo = trancheInfo_call;
            let uniV3_call = async (options) => {
                let result = await this.call('uniV3', [], options);
                return result;
            };
            this.uniV3 = uniV3_call;
            let unlockedAmount_call = async (options) => {
                let result = await this.call('unlockedAmount', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.unlockedAmount = unlockedAmount_call;
            let unlockedAmountAt_call = async (timestamp, options) => {
                let result = await this.call('unlockedAmountAt', [this.wallet.utils.toString(timestamp)], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.unlockedAmountAt = unlockedAmountAt_call;
            let usedAllocation_call = async (param1, options) => {
                let result = await this.call('usedAllocation', [this.wallet.utils.stringToBytes32(param1)], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.usedAllocation = usedAllocation_call;
            let weth_call = async (options) => {
                let result = await this.call('weth', [], options);
                return result;
            };
            this.weth = weth_call;
            let buyScom_send = async (to, options) => {
                let result = await this.send('buyScom', [to], options);
                return result;
            };
            let buyScom_call = async (to, options) => {
                let result = await this.call('buyScom', [to], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.buyScom = Object.assign(buyScom_send, {
                call: buyScom_call
            });
            let buyWithWETHParams = (params) => [params.from, params.to];
            let buyWithWETH_send = async (params, options) => {
                let result = await this.send('buyWithWETH', buyWithWETHParams(params), options);
                return result;
            };
            let buyWithWETH_call = async (params, options) => {
                let result = await this.call('buyWithWETH', buyWithWETHParams(params), options);
                return new eth_contract_11.BigNumber(result);
            };
            this.buyWithWETH = Object.assign(buyWithWETH_send, {
                call: buyWithWETH_call
            });
            let claimParams = (params) => [this.wallet.utils.toString(params.trancheId), params.to, this.wallet.utils.toString(params.allocation), this.wallet.utils.stringToBytes32(params.proof)];
            let claim_send = async (params, options) => {
                let result = await this.send('claim', claimParams(params), options);
                return result;
            };
            let claim_call = async (params, options) => {
                let result = await this.call('claim', claimParams(params), options);
                return new eth_contract_11.BigNumber(result);
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
                return new eth_contract_11.BigNumber(result);
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
            let directRelease_send = async (amount, options) => {
                let result = await this.send('directRelease', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let directRelease_call = async (amount, options) => {
                let result = await this.call('directRelease', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.directRelease = Object.assign(directRelease_send, {
                call: directRelease_call
            });
            let lockParams = (params) => [this.wallet.utils.toString(params.presale), this.wallet.utils.toString(params.startTime), this.wallet.utils.toString(params.endTime), this.wallet.utils.toString(params.decrementDecimal)];
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
            let releaseAndBuyParams = (params) => [this.wallet.utils.toString(params.trancheIds), params.to];
            let releaseAndBuy_send = async (params, options) => {
                let result = await this.send('releaseAndBuy', releaseAndBuyParams(params), options);
                return result;
            };
            let releaseAndBuy_call = async (params, options) => {
                let result = await this.call('releaseAndBuy', releaseAndBuyParams(params), options);
                return new eth_contract_11.BigNumber(result);
            };
            this.releaseAndBuy = Object.assign(releaseAndBuy_send, {
                call: releaseAndBuy_call
            });
            let releaseAndBuyWithWETHParams = (params) => [this.wallet.utils.toString(params.trancheIds), params.from, params.to];
            let releaseAndBuyWithWETH_send = async (params, options) => {
                let result = await this.send('releaseAndBuyWithWETH', releaseAndBuyWithWETHParams(params), options);
                return result;
            };
            let releaseAndBuyWithWETH_call = async (params, options) => {
                let result = await this.call('releaseAndBuyWithWETH', releaseAndBuyWithWETHParams(params), options);
                return new eth_contract_11.BigNumber(result);
            };
            this.releaseAndBuyWithWETH = Object.assign(releaseAndBuyWithWETH_send, {
                call: releaseAndBuyWithWETH_call
            });
            let releaseTranche_send = async (trancheIds, options) => {
                let result = await this.send('releaseTranche', [this.wallet.utils.toString(trancheIds)], options);
                return result;
            };
            let releaseTranche_call = async (trancheIds, options) => {
                let result = await this.call('releaseTranche', [this.wallet.utils.toString(trancheIds)], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.releaseTranche = Object.assign(releaseTranche_send, {
                call: releaseTranche_call
            });
            let sellScom_send = async (amountScom, options) => {
                let result = await this.send('sellScom', [this.wallet.utils.toString(amountScom)], options);
                return result;
            };
            let sellScom_call = async (amountScom, options) => {
                let result = await this.call('sellScom', [this.wallet.utils.toString(amountScom)], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.sellScom = Object.assign(sellScom_send, {
                call: sellScom_call
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
            let uniswapV3MintCallbackParams = (params) => [this.wallet.utils.toString(params.amount0Owed), this.wallet.utils.toString(params.amount1Owed), this.wallet.utils.stringToBytes(params.param3)];
            let uniswapV3MintCallback_send = async (params, options) => {
                let result = await this.send('uniswapV3MintCallback', uniswapV3MintCallbackParams(params), options);
                return result;
            };
            let uniswapV3MintCallback_call = async (params, options) => {
                let result = await this.call('uniswapV3MintCallback', uniswapV3MintCallbackParams(params), options);
                return;
            };
            this.uniswapV3MintCallback = Object.assign(uniswapV3MintCallback_send, {
                call: uniswapV3MintCallback_call
            });
            let unlock_send = async (options) => {
                let result = await this.send('unlock', [], options);
                return result;
            };
            let unlock_call = async (options) => {
                let result = await this.call('unlock', [], options);
                return new eth_contract_11.BigNumber(result);
            };
            this.unlock = Object.assign(unlock_send, {
                call: unlock_call
            });
            let unlockAndRelease_send = async (amount, options) => {
                let result = await this.send('unlockAndRelease', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let unlockAndRelease_call = async (amount, options) => {
                let result = await this.call('unlockAndRelease', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.unlockAndRelease = Object.assign(unlockAndRelease_send, {
                call: unlockAndRelease_call
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
            let withdrawFromRelease_send = async (amount, options) => {
                let result = await this.send('withdrawFromRelease', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let withdrawFromRelease_call = async (amount, options) => {
                let result = await this.call('withdrawFromRelease', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.withdrawFromRelease = Object.assign(withdrawFromRelease_send, {
                call: withdrawFromRelease_call
            });
            let withdrawFromTrancheParams = (params) => [this.wallet.utils.toString(params.trancheIds), this.wallet.utils.toString(params.amountScom)];
            let withdrawFromTranche_send = async (params, options) => {
                let result = await this.send('withdrawFromTranche', withdrawFromTrancheParams(params), options);
                return result;
            };
            let withdrawFromTranche_call = async (params, options) => {
                let result = await this.call('withdrawFromTranche', withdrawFromTrancheParams(params), options);
                return;
            };
            this.withdrawFromTranche = Object.assign(withdrawFromTranche_send, {
                call: withdrawFromTranche_call
            });
        }
    }
    Vault._abi = Vault_json_1.default.abi;
    exports.Vault = Vault;
});
define("@scom/scom-portal-contract/contracts/index.ts", ["require", "exports", "@scom/scom-portal-contract/contracts/AuditInfo.ts", "@scom/scom-portal-contract/contracts/AuditorInfo.ts", "@scom/scom-portal-contract/contracts/Authorization.ts", "@scom/scom-portal-contract/contracts/DomainInfo.ts", "@scom/scom-portal-contract/contracts/ModuleInfo.ts", "@scom/scom-portal-contract/contracts/NFTManager.ts", "@scom/scom-portal-contract/contracts/NodeNFT.ts", "@scom/scom-portal-contract/contracts/ProjectInfo.ts", "@scom/scom-portal-contract/contracts/RouterVaultWrapper.ts", "@scom/scom-portal-contract/contracts/Scom.ts", "@scom/scom-portal-contract/contracts/Vault.ts"], function (require, exports, AuditInfo_1, AuditorInfo_1, Authorization_1, DomainInfo_1, ModuleInfo_1, NFTManager_1, NodeNFT_1, ProjectInfo_1, RouterVaultWrapper_1, Scom_1, Vault_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vault = exports.Scom = exports.RouterVaultWrapper = exports.ProjectInfo = exports.NodeNFT = exports.NFTManager = exports.ModuleInfo = exports.DomainInfo = exports.Authorization = exports.AuditorInfo = exports.AuditInfo = void 0;
    Object.defineProperty(exports, "AuditInfo", { enumerable: true, get: function () { return AuditInfo_1.AuditInfo; } });
    Object.defineProperty(exports, "AuditorInfo", { enumerable: true, get: function () { return AuditorInfo_1.AuditorInfo; } });
    Object.defineProperty(exports, "Authorization", { enumerable: true, get: function () { return Authorization_1.Authorization; } });
    Object.defineProperty(exports, "DomainInfo", { enumerable: true, get: function () { return DomainInfo_1.DomainInfo; } });
    Object.defineProperty(exports, "ModuleInfo", { enumerable: true, get: function () { return ModuleInfo_1.ModuleInfo; } });
    Object.defineProperty(exports, "NFTManager", { enumerable: true, get: function () { return NFTManager_1.NFTManager; } });
    Object.defineProperty(exports, "NodeNFT", { enumerable: true, get: function () { return NodeNFT_1.NodeNFT; } });
    Object.defineProperty(exports, "ProjectInfo", { enumerable: true, get: function () { return ProjectInfo_1.ProjectInfo; } });
    Object.defineProperty(exports, "RouterVaultWrapper", { enumerable: true, get: function () { return RouterVaultWrapper_1.RouterVaultWrapper; } });
    Object.defineProperty(exports, "Scom", { enumerable: true, get: function () { return Scom_1.Scom; } });
    Object.defineProperty(exports, "Vault", { enumerable: true, get: function () { return Vault_1.Vault; } });
});
define("@scom/scom-portal-contract", ["require", "exports", "@ijstech/eth-wallet", "@scom/scom-portal-contract/contracts/index.ts"], function (require, exports, eth_wallet_1, Contracts) {
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
        // vault: {
        //     foundation: '',
        //     uniV3: ''
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
        return await auditInfo.deploy({ projectInfo, auditorInfo, ...Config.audit });
    }
    async function deployVault(wallet, token, Config) {
        let vault = new Contracts.Vault(wallet);
        return await vault.deploy({ foundation: Config.vault.foundation, foundationShare: Config.auditorInfo.foundationShare, scom: token, uniV3: Config.vault.uniV3 });
    }
    async function deployNFT(wallet, token, Config) {
        let manager = new Contracts.NFTManager(wallet);
        await manager.deploy({ scom: token, protocolFeeTo: Config.nft.protocolFeeTo });
        let nft = new Contracts.NodeNFT(wallet);
        await nft.deploy({ name: "NFT_1", symbol: "NFT_1", baseURI: "", manager: manager.address, stakeRequired: eth_wallet_1.Utils.toDecimals(1000), protocolFee: eth_wallet_1.Utils.toDecimals(1) });
        return { manager: manager.address, nft: { "NFT_1": nft.address } };
    }
    async function deploy(wallet, Config, onProgress) {
        let result = {
            token: '',
            domain: '',
            auditor: '',
            project: '',
            audit: '',
            vault: '',
            nft: { manager: '', nft: {} }
        };
        onProgress('1/7 Deploy token contract');
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
        onProgress('2/7 Deploy domain contract');
        result.domain = await deployDomainInfo(wallet, result.token);
        onProgress(`domain: ${result.domain}`);
        onProgress('3/7 Deploy auditor contract');
        result.auditor = await deployAuditorInfo(wallet, result.token, Config);
        onProgress(`auditor: ${result.auditor}`);
        onProgress('4/7 Deploy project contract');
        result.project = await deployProjectInfo(wallet, result.token, result.auditor, Config);
        onProgress(`project: ${result.project}`);
        onProgress('5/7 Deploy audit contract');
        if (Config.audit) {
            result.audit = await deployAuditInfo(wallet, result.project, result.auditor, Config);
            onProgress(`audit: ${result.audit}`);
        }
        onProgress('6/7 Deploy vault contract');
        if (Config.vault) {
            result.vault = await deployVault(wallet, result.token, Config);
            onProgress(`vault: ${result.vault}`);
        }
        onProgress('7/7 Deploy vault contract');
        if (Config.nft) {
            result.nft = await deployNFT(wallet, result.token, Config);
            onProgress(`nft: ${result.nft}`);
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
