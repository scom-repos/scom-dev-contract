define("undefined/contracts/MockAmmPair.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='undefined/contracts/MockAmmPair.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "_token0", "type": "address" }, { "internalType": "address", "name": "_token1", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Burn", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }], "name": "Mint", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Swap", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "burn", "outputs": [{ "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "internalType": "uint256", "name": "amount1", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "getReserves", "outputs": [{ "internalType": "uint112", "name": "_reserve0", "type": "uint112" }, { "internalType": "uint112", "name": "_reserve1", "type": "uint112" }, { "internalType": "uint32", "name": "blockTimestampLast", "type": "uint32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "reserve0", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "reserve1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "skim", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "swap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "sync", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "token0", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "token1", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60c06040523480156200001157600080fd5b5060405162001eef38038062001eef8339810160408190526200003491620001e7565b60405180604001604052806003815260200162414d4d60e81b81525060405180604001604052806003815260200162414d4d60e81b81525081600390805190602001906200008492919062000124565b5080516200009a90600490602084019062000124565b5050506001600160a01b03821615801590620000c75750806001600160a01b0316826001600160a01b0316105b6200010c5760405162461bcd60e51b8152602060048201526011602482015270496e76616c69642061646472657373657360781b604482015260640160405180910390fd5b6001600160a01b039182166080521660a0526200025b565b82805462000132906200021f565b90600052602060002090601f016020900481019282620001565760008555620001a1565b82601f106200017157805160ff1916838001178555620001a1565b82800160010185558215620001a1579182015b82811115620001a157825182559160200191906001019062000184565b50620001af929150620001b3565b5090565b5b80821115620001af5760008155600101620001b4565b80516001600160a01b0381168114620001e257600080fd5b919050565b60008060408385031215620001fb57600080fd5b6200020683620001ca565b91506200021660208401620001ca565b90509250929050565b600181811c908216806200023457607f821691505b6020821081036200025557634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a051611c1a620002d560003960008181610361015281816104d70152818161063f015281816109e401528181610bf701528181610d4e0152610ff701526000818161020c0152818161041d015281816105760152818161093001528181610b3d01528181610c9d0152610f460152611c1a6000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c80635a76f25e116100d8578063a457c2d71161008c578063d21220a711610066578063d21220a71461035c578063dd62ed3e14610383578063fff6cae9146103c957600080fd5b8063a457c2d714610325578063a9059cbb14610338578063bc25cf771461034b57600080fd5b806370a08231116100bd57806370a08231146102bf57806389afcb44146102f557806395d89b411461031d57600080fd5b80635a76f25e146102a35780636a627842146102ac57600080fd5b806318160ddd1161012f578063313ce56711610114578063313ce567146102785780633950935114610287578063443cb4bc1461029a57600080fd5b806318160ddd1461025357806323b872dd1461026557600080fd5b80630902f1ac116101605780630902f1ac146101af578063095ea7b3146101e45780630dfe16811461020757600080fd5b8063022c0d9f1461017c57806306fdde0314610191575b600080fd5b61018f61018a366004611900565b6103d1565b005b6101996107ce565b6040516101a69190611994565b60405180910390f35b600554600654604080516dffffffffffffffffffffffffffff93841681529290911660208301526000908201526060016101a6565b6101f76101f2366004611a07565b610860565b60405190151581526020016101a6565b61022e7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a6565b6002545b6040519081526020016101a6565b6101f7610273366004611a31565b610878565b604051601281526020016101a6565b6101f7610295366004611a07565b61089c565b61025760055481565b61025760065481565b6102576102ba366004611a6d565b6108e8565b6102576102cd366004611a6d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b610308610303366004611a6d565b610ad9565b604080519283526020830191909152016101a6565b610199610e2a565b6101f7610333366004611a07565b610e39565b6101f7610346366004611a07565b610f0a565b61018f610359366004611a6d565b50565b61022e7f000000000000000000000000000000000000000000000000000000000000000081565b610257610391366004611a88565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b61018f610f18565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018790527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015610466573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048a9190611abb565b506040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015610520573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105449190611abb565b506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156105d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f69190611add565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610686573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106aa9190611add565b90506000600554836106bc9190611b25565b90506000600654836106ce9190611b25565b90506006546005546106e09190611b3c565b6106ea8486611b3c565b1015610757576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600160248201527f4b0000000000000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6005849055600683905560408051838152602081018390529081018a90526060810189905273ffffffffffffffffffffffffffffffffffffffff88169033907fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229060800160405180910390a3505050505050505050565b6060600380546107dd90611b79565b80601f016020809104026020016040519081016040528092919081815260200182805461080990611b79565b80156108565780601f1061082b57610100808354040283529160200191610856565b820191906000526020600020905b81548152906001019060200180831161083957829003601f168201915b5050505050905090565b60003361086e81858561107c565b5060019392505050565b600033610886858285611230565b610891858585611307565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061086e90829086906108e3908790611bcc565b61107c565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610977573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099b9190611add565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610a2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4f9190611add565b9050600060055483610a619190611b25565b9050600060065483610a739190611b25565b9050610a7f82826115ba565b9450610a8b86866115d2565b60058490556006839055604080518381526020810183905233917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a250505050919050565b306000908152602081815260408083205481517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526024820183905292519194859485947f0000000000000000000000000000000000000000000000000000000000000000169363a9059cbb936044808201949183900301908290875af1158015610b86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baa9190611abb565b506040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015610c40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c649190611abb565b50610c6f30826116f2565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610cf9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1d9190611add565b6005556040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610daa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dce9190611add565b600655604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff86169133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496910160405180910390a350915091565b6060600480546107dd90611b79565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610efd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161074e565b610891828686840361107c565b60003361086e818585611307565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610fa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc69190611add565b6005556040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015611053573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110779190611add565b600655565b73ffffffffffffffffffffffffffffffffffffffff831661111e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161074e565b73ffffffffffffffffffffffffffffffffffffffff82166111c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161074e565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461130157818110156112f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161074e565b611301848484840361107c565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166113aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161074e565b73ffffffffffffffffffffffffffffffffffffffff821661144d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161074e565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015611503576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161074e565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290611547908490611bcc565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516115ad91815260200190565b60405180910390a3611301565b60008183106115c957816115cb565b825b9392505050565b73ffffffffffffffffffffffffffffffffffffffff821661164f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161074e565b80600260008282546116619190611bcc565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260408120805483929061169b908490611bcc565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161074e565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020548181101561184b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161074e565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260408120838303905560028054849290611887908490611b25565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611223565b803573ffffffffffffffffffffffffffffffffffffffff811681146118fb57600080fd5b919050565b60008060008060006080868803121561191857600080fd5b853594506020860135935061192f604087016118d7565b9250606086013567ffffffffffffffff8082111561194c57600080fd5b818801915088601f83011261196057600080fd5b81358181111561196f57600080fd5b89602082850101111561198157600080fd5b9699959850939650602001949392505050565b600060208083528351808285015260005b818110156119c1578581018301518582016040015282016119a5565b818111156119d3576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008060408385031215611a1a57600080fd5b611a23836118d7565b946020939093013593505050565b600080600060608486031215611a4657600080fd5b611a4f846118d7565b9250611a5d602085016118d7565b9150604084013590509250925092565b600060208284031215611a7f57600080fd5b6115cb826118d7565b60008060408385031215611a9b57600080fd5b611aa4836118d7565b9150611ab2602084016118d7565b90509250929050565b600060208284031215611acd57600080fd5b815180151581146115cb57600080fd5b600060208284031215611aef57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015611b3757611b37611af6565b500390565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611b7457611b74611af6565b500290565b600181811c90821680611b8d57607f821691505b602082108103611bc6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115611bdf57611bdf611af6565b50019056fea2646970667358221220d428a62844be549153fd4baf31eb64c2d27b5fb344f6498667cbe7c3c99df04864736f6c634300080d0033"
    };
});
define("undefined/contracts/MockAmmPair.ts", ["require", "exports", "@ijstech/eth-contract", "undefined/contracts/MockAmmPair.json.ts"], function (require, exports, eth_contract_1, MockAmmPair_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MockAmmPair = void 0;
    class MockAmmPair extends eth_contract_1.Contract {
        constructor(wallet, address) {
            super(wallet, address, MockAmmPair_json_1.default.abi, MockAmmPair_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.token0, params.token1], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_1.BigNumber(result.value),
                _event: event
            };
        }
        parseBurnEvent(receipt) {
            return this.parseEvents(receipt, "Burn").map(e => this.decodeBurnEvent(e));
        }
        decodeBurnEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1),
                to: result.to,
                _event: event
            };
        }
        parseMintEvent(receipt) {
            return this.parseEvents(receipt, "Mint").map(e => this.decodeMintEvent(e));
        }
        decodeMintEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1),
                _event: event
            };
        }
        parseSwapEvent(receipt) {
            return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
        }
        decodeSwapEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                amount0In: new eth_contract_1.BigNumber(result.amount0In),
                amount1In: new eth_contract_1.BigNumber(result.amount1In),
                amount0Out: new eth_contract_1.BigNumber(result.amount0Out),
                amount1Out: new eth_contract_1.BigNumber(result.amount1Out),
                to: result.to,
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
                value: new eth_contract_1.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_1.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.decimals = decimals_call;
            let getReserves_call = async (options) => {
                let result = await this.call('getReserves', [], options);
                return {
                    reserve0: new eth_contract_1.BigNumber(result._reserve0),
                    reserve1: new eth_contract_1.BigNumber(result._reserve1),
                    blockTimestampLast: new eth_contract_1.BigNumber(result.blockTimestampLast)
                };
            };
            this.getReserves = getReserves_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let reserve0_call = async (options) => {
                let result = await this.call('reserve0', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.reserve0 = reserve0_call;
            let reserve1_call = async (options) => {
                let result = await this.call('reserve1', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.reserve1 = reserve1_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let token0_call = async (options) => {
                let result = await this.call('token0', [], options);
                return result;
            };
            this.token0 = token0_call;
            let token1_call = async (options) => {
                let result = await this.call('token1', [], options);
                return result;
            };
            this.token1 = token1_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_1.BigNumber(result);
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
            let burn_send = async (to, options) => {
                let result = await this.send('burn', [to], options);
                return result;
            };
            let burn_call = async (to, options) => {
                let result = await this.call('burn', [to], options);
                return {
                    amount0: new eth_contract_1.BigNumber(result.amount0),
                    amount1: new eth_contract_1.BigNumber(result.amount1)
                };
            };
            this.burn = Object.assign(burn_send, {
                call: burn_call
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
            let mint_send = async (to, options) => {
                let result = await this.send('mint', [to], options);
                return result;
            };
            let mint_call = async (to, options) => {
                let result = await this.call('mint', [to], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
            });
            let skim_send = async (to, options) => {
                let result = await this.send('skim', [to], options);
                return result;
            };
            let skim_call = async (to, options) => {
                let result = await this.call('skim', [to], options);
                return;
            };
            this.skim = Object.assign(skim_send, {
                call: skim_call
            });
            let swapParams = (params) => [this.wallet.utils.toString(params.amount0Out), this.wallet.utils.toString(params.amount1Out), params.to, this.wallet.utils.stringToBytes(params.param4)];
            let swap_send = async (params, options) => {
                let result = await this.send('swap', swapParams(params), options);
                return result;
            };
            let swap_call = async (params, options) => {
                let result = await this.call('swap', swapParams(params), options);
                return;
            };
            this.swap = Object.assign(swap_send, {
                call: swap_call
            });
            let sync_send = async (options) => {
                let result = await this.send('sync', [], options);
                return result;
            };
            let sync_call = async (options) => {
                let result = await this.call('sync', [], options);
                return;
            };
            this.sync = Object.assign(sync_send, {
                call: sync_call
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
    MockAmmPair._abi = MockAmmPair_json_1.default.abi;
    exports.MockAmmPair = MockAmmPair;
});
define("undefined/contracts/MockErc20.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='undefined/contracts/MockErc20.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "_decimals_", "type": "uint8" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
            { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "MINTER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "PAUSER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b50604051620025e4380380620025e48339810160408190526200003491620003c1565b828281818160059080519060200190620000509291906200024e565b508051620000669060069060208401906200024e565b50506007805460ff191690555062000080600033620000e9565b620000ac7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000e9565b620000d87f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000e9565b505060ff1660805250620004829050565b620000f58282620000f9565b5050565b6200011082826200013c60201b62000ac41760201c565b60008281526001602090815260409091206200013791839062000bb4620001dc821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000f5576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001983390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001f3836001600160a01b038416620001fc565b90505b92915050565b60008181526001830160205260408120546200024557508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001f6565b506000620001f6565b8280546200025c9062000446565b90600052602060002090601f016020900481019282620002805760008555620002cb565b82601f106200029b57805160ff1916838001178555620002cb565b82800160010185558215620002cb579182015b82811115620002cb578251825591602001919060010190620002ae565b50620002d9929150620002dd565b5090565b5b80821115620002d95760008155600101620002de565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200031c57600080fd5b81516001600160401b0380821115620003395762000339620002f4565b604051601f8301601f19908116603f01168101908282118183101715620003645762000364620002f4565b816040528381526020925086838588010111156200038157600080fd5b600091505b83821015620003a5578582018301518183018401529082019062000386565b83821115620003b75760008385830101525b9695505050505050565b600080600060608486031215620003d757600080fd5b83516001600160401b0380821115620003ef57600080fd5b620003fd878388016200030a565b945060208601519150808211156200041457600080fd5b5062000423868287016200030a565b925050604084015160ff811681146200043b57600080fd5b809150509250925092565b600181811c908216806200045b57607f821691505b6020821081036200047c57634e487b7160e01b600052602260045260246000fd5b50919050565b6080516121466200049e600039600061027d01526121466000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d53913931461041c578063d547741f14610443578063dd62ed3e14610456578063e63ab1e91461049c57600080fd5b8063a457c2d7146103e3578063a9059cbb146103f6578063ca15c8731461040957600080fd5b80639010d07c116100d35780639010d07c1461035757806391d148541461038f57806395d89b41146103d3578063a217fddf146103db57600080fd5b806370a082311461030657806379cc67901461033c5780638456cb591461034f57600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102cd57806340c10f19146102d557806342966c68146102e85780635c975abb146102fb57600080fd5b8063313ce5671461027657806336568abe146102a757806339509351146102ba57600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d7366004611ce5565b6104c3565b60405190151581526020015b60405180910390f35b6101f961051f565b6040516101e89190611d53565b6101dc610214366004611dcd565b6105b1565b6004545b6040519081526020016101e8565b6101dc610239366004611df7565b6105c9565b61021d61024c366004611e33565b60009081526020819052604090206001015490565b61027461026f366004611e4c565b6105ed565b005b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101e8565b6102746102b5366004611e4c565b610617565b6101dc6102c8366004611dcd565b6106cf565b61027461071b565b6102746102e3366004611dcd565b6107db565b6102746102f6366004611e33565b61089b565b60075460ff166101dc565b61021d610314366004611e78565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b61027461034a366004611dcd565b6108a8565b6102746108bd565b61036a610365366004611e93565b61097b565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e8565b6101dc61039d366004611e4c565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101f961099a565b61021d600081565b6101dc6103f1366004611dcd565b6109a9565b6101dc610404366004611dcd565b610a7a565b61021d610417366004611e33565b610a88565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610274610451366004611e4c565b610a9f565b61021d610464366004611eb5565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f5a05180f000000000000000000000000000000000000000000000000000000001480610519575061051982610bd6565b92915050565b60606005805461052e90611edf565b80601f016020809104026020016040519081016040528092919081815260200182805461055a90611edf565b80156105a75780601f1061057c576101008083540402835291602001916105a7565b820191906000526020600020905b81548152906001019060200180831161058a57829003601f168201915b5050505050905090565b6000336105bf818585610c6d565b5060019392505050565b6000336105d7858285610e20565b6105e2858585610ef7565b506001949350505050565b600082815260208190526040902060010154610608816111b5565b61061283836111bf565b505050565b73ffffffffffffffffffffffffffffffffffffffff811633146106c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6106cb82826111e1565b5050565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906105bf9082908690610716908790611f61565b610c6d565b6107457f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361039d565b6107d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e70617573650000000000000060648201526084016106b8565b6107d9611203565b565b6108057f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361039d565b610891576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e740000000000000000000060648201526084016106b8565b6106cb8282611280565b6108a533826113ac565b50565b6108b3823383610e20565b6106cb82826113ac565b6108e77f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361039d565b610973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20706175736500000000000000000060648201526084016106b8565b6107d96115a5565b60008281526001602052604081206109939083611600565b9392505050565b60606006805461052e90611edf565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610a6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016106b8565b6105e28286868403610c6d565b6000336105bf818585610ef7565b60008181526001602052604081206105199061160c565b600082815260208190526040902060010154610aba816111b5565b61061283836111e1565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106cb5760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610b563390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006109938373ffffffffffffffffffffffffffffffffffffffff8416611616565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061051957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610519565b73ffffffffffffffffffffffffffffffffffffffff8316610d0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016106b8565b73ffffffffffffffffffffffffffffffffffffffff8216610db2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016106b8565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600360209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ef15781811015610ee4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106b8565b610ef18484848403610c6d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f9a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016106b8565b73ffffffffffffffffffffffffffffffffffffffff821661103d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016106b8565b611048838383611665565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040902054818110156110fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016106b8565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260026020526040808220858503905591851681529081208054849290611142908490611f61565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111a891815260200190565b60405180910390a3610ef1565b6108a58133611670565b6111c98282610ac4565b60008281526001602052604090206106129082610bb4565b6111eb8282611740565b600082815260016020526040902061061290826117f7565b61120b611819565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff82166112fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106b8565b61130960008383611665565b806004600082825461131b9190611f61565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604081208054839290611355908490611f61565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821661144f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016106b8565b61145b82600083611665565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205481811015611511576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016106b8565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040812083830390556004805484929061154d908490611f79565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6115ad611885565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586112563390565b600061099383836118f2565b6000610519825490565b600081815260018301602052604081205461165d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610519565b506000610519565b61061283838361191c565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106cb576116c68173ffffffffffffffffffffffffffffffffffffffff1660146119af565b6116d18360206119af565b6040516020016116e2929190611f90565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a00000000000000000000000000000000000000000000000000000000082526106b891600401611d53565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156106cb5760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006109938373ffffffffffffffffffffffffffffffffffffffff8416611bf2565b60075460ff166107d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016106b8565b60075460ff16156107d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016106b8565b600082600001828154811061190957611909612011565b9060005260206000200154905092915050565b60075460ff1615610612576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c65207061757365640000000000000000000000000000000000000000000060648201526084016106b8565b606060006119be836002612040565b6119c9906002611f61565b67ffffffffffffffff8111156119e1576119e161207d565b6040519080825280601f01601f191660200182016040528015611a0b576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611a4257611a42612011565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611aa557611aa5612011565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611ae1846002612040565b611aec906001611f61565b90505b6001811115611b89577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611b2d57611b2d612011565b1a60f81b828281518110611b4357611b43612011565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611b82816120ac565b9050611aef565b508315610993576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106b8565b60008181526001830160205260408120548015611cdb576000611c16600183611f79565b8554909150600090611c2a90600190611f79565b9050818114611c8f576000866000018281548110611c4a57611c4a612011565b9060005260206000200154905080876000018481548110611c6d57611c6d612011565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611ca057611ca06120e1565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610519565b6000915050610519565b600060208284031215611cf757600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461099357600080fd5b60005b83811015611d42578181015183820152602001611d2a565b83811115610ef15750506000910152565b6020815260008251806020840152611d72816040850160208701611d27565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611dc857600080fd5b919050565b60008060408385031215611de057600080fd5b611de983611da4565b946020939093013593505050565b600080600060608486031215611e0c57600080fd5b611e1584611da4565b9250611e2360208501611da4565b9150604084013590509250925092565b600060208284031215611e4557600080fd5b5035919050565b60008060408385031215611e5f57600080fd5b82359150611e6f60208401611da4565b90509250929050565b600060208284031215611e8a57600080fd5b61099382611da4565b60008060408385031215611ea657600080fd5b50508035926020909101359150565b60008060408385031215611ec857600080fd5b611ed183611da4565b9150611e6f60208401611da4565b600181811c90821680611ef357607f821691505b602082108103611f2c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611f7457611f74611f32565b500190565b600082821015611f8b57611f8b611f32565b500390565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611fc8816017850160208801611d27565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351612005816028840160208801611d27565b01602801949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561207857612078611f32565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000816120bb576120bb611f32565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220c0322e9a241fc96707e5b358018db78fcb638541f611b8641c84b7f1c1049ecb64736f6c634300080d0033"
    };
});
define("undefined/contracts/MockErc20.ts", ["require", "exports", "@ijstech/eth-contract", "undefined/contracts/MockErc20.json.ts"], function (require, exports, eth_contract_2, MockErc20_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MockErc20 = void 0;
    class MockErc20 extends eth_contract_2.Contract {
        constructor(wallet, address) {
            super(wallet, address, MockErc20_json_1.default.abi, MockErc20_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.name, params.symbol, this.wallet.utils.toString(params.decimals)], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_2.BigNumber(result.value),
                _event: event
            };
        }
        parsePausedEvent(receipt) {
            return this.parseEvents(receipt, "Paused").map(e => this.decodePausedEvent(e));
        }
        decodePausedEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                _event: event
            };
        }
        parseRoleAdminChangedEvent(receipt) {
            return this.parseEvents(receipt, "RoleAdminChanged").map(e => this.decodeRoleAdminChangedEvent(e));
        }
        decodeRoleAdminChangedEvent(event) {
            let result = event.data;
            return {
                role: result.role,
                previousAdminRole: result.previousAdminRole,
                newAdminRole: result.newAdminRole,
                _event: event
            };
        }
        parseRoleGrantedEvent(receipt) {
            return this.parseEvents(receipt, "RoleGranted").map(e => this.decodeRoleGrantedEvent(e));
        }
        decodeRoleGrantedEvent(event) {
            let result = event.data;
            return {
                role: result.role,
                account: result.account,
                sender: result.sender,
                _event: event
            };
        }
        parseRoleRevokedEvent(receipt) {
            return this.parseEvents(receipt, "RoleRevoked").map(e => this.decodeRoleRevokedEvent(e));
        }
        decodeRoleRevokedEvent(event) {
            let result = event.data;
            return {
                role: result.role,
                account: result.account,
                sender: result.sender,
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
                value: new eth_contract_2.BigNumber(result.value),
                _event: event
            };
        }
        parseUnpausedEvent(receipt) {
            return this.parseEvents(receipt, "Unpaused").map(e => this.decodeUnpausedEvent(e));
        }
        decodeUnpausedEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                _event: event
            };
        }
        assign() {
            let DEFAULT_ADMIN_ROLE_call = async (options) => {
                let result = await this.call('DEFAULT_ADMIN_ROLE', [], options);
                return result;
            };
            this.DEFAULT_ADMIN_ROLE = DEFAULT_ADMIN_ROLE_call;
            let MINTER_ROLE_call = async (options) => {
                let result = await this.call('MINTER_ROLE', [], options);
                return result;
            };
            this.MINTER_ROLE = MINTER_ROLE_call;
            let PAUSER_ROLE_call = async (options) => {
                let result = await this.call('PAUSER_ROLE', [], options);
                return result;
            };
            this.PAUSER_ROLE = PAUSER_ROLE_call;
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_2.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.decimals = decimals_call;
            let getRoleAdmin_call = async (role, options) => {
                let result = await this.call('getRoleAdmin', [this.wallet.utils.stringToBytes32(role)], options);
                return result;
            };
            this.getRoleAdmin = getRoleAdmin_call;
            let getRoleMemberParams = (params) => [this.wallet.utils.stringToBytes32(params.role), this.wallet.utils.toString(params.index)];
            let getRoleMember_call = async (params, options) => {
                let result = await this.call('getRoleMember', getRoleMemberParams(params), options);
                return result;
            };
            this.getRoleMember = getRoleMember_call;
            let getRoleMemberCount_call = async (role, options) => {
                let result = await this.call('getRoleMemberCount', [this.wallet.utils.stringToBytes32(role)], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.getRoleMemberCount = getRoleMemberCount_call;
            let hasRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let hasRole_call = async (params, options) => {
                let result = await this.call('hasRole', hasRoleParams(params), options);
                return result;
            };
            this.hasRole = hasRole_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let paused_call = async (options) => {
                let result = await this.call('paused', [], options);
                return result;
            };
            this.paused = paused_call;
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
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_2.BigNumber(result);
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
            let burn_send = async (amount, options) => {
                let result = await this.send('burn', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let burn_call = async (amount, options) => {
                let result = await this.call('burn', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.burn = Object.assign(burn_send, {
                call: burn_call
            });
            let burnFromParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let burnFrom_send = async (params, options) => {
                let result = await this.send('burnFrom', burnFromParams(params), options);
                return result;
            };
            let burnFrom_call = async (params, options) => {
                let result = await this.call('burnFrom', burnFromParams(params), options);
                return;
            };
            this.burnFrom = Object.assign(burnFrom_send, {
                call: burnFrom_call
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
            let grantRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let grantRole_send = async (params, options) => {
                let result = await this.send('grantRole', grantRoleParams(params), options);
                return result;
            };
            let grantRole_call = async (params, options) => {
                let result = await this.call('grantRole', grantRoleParams(params), options);
                return;
            };
            this.grantRole = Object.assign(grantRole_send, {
                call: grantRole_call
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
            let mintParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
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
            let pause_send = async (options) => {
                let result = await this.send('pause', [], options);
                return result;
            };
            let pause_call = async (options) => {
                let result = await this.call('pause', [], options);
                return;
            };
            this.pause = Object.assign(pause_send, {
                call: pause_call
            });
            let renounceRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let renounceRole_send = async (params, options) => {
                let result = await this.send('renounceRole', renounceRoleParams(params), options);
                return result;
            };
            let renounceRole_call = async (params, options) => {
                let result = await this.call('renounceRole', renounceRoleParams(params), options);
                return;
            };
            this.renounceRole = Object.assign(renounceRole_send, {
                call: renounceRole_call
            });
            let revokeRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let revokeRole_send = async (params, options) => {
                let result = await this.send('revokeRole', revokeRoleParams(params), options);
                return result;
            };
            let revokeRole_call = async (params, options) => {
                let result = await this.call('revokeRole', revokeRoleParams(params), options);
                return;
            };
            this.revokeRole = Object.assign(revokeRole_send, {
                call: revokeRole_call
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
            let unpause_send = async (options) => {
                let result = await this.send('unpause', [], options);
                return result;
            };
            let unpause_call = async (options) => {
                let result = await this.call('unpause', [], options);
                return;
            };
            this.unpause = Object.assign(unpause_send, {
                call: unpause_call
            });
        }
    }
    MockErc20._abi = MockErc20_json_1.default.abi;
    exports.MockErc20 = MockErc20;
});
define("undefined/contracts/MockOracleAdaptor.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='undefined/contracts/MockOracleAdaptor.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "_weth", "type": "address" }, { "internalType": "uint8", "name": "_decimals", "type": "uint8" }, { "internalType": "address[]", "name": "_tokens", "type": "address[]" }, { "internalType": "uint256[]", "name": "_prices", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "getLatestPrice", "outputs": [{ "internalType": "uint256", "name": "price", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "getRatio", "outputs": [{ "internalType": "uint256", "name": "numerator", "type": "uint256" }, { "internalType": "uint256", "name": "denominator", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "isSupported", "outputs": [{ "internalType": "bool", "name": "supported", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "setPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "token0", "type": "address" }, { "internalType": "address", "name": "token1", "type": "address" }, { "internalType": "uint256", "name": "price0", "type": "uint256" }, { "internalType": "uint256", "name": "price1", "type": "uint256" }], "name": "setPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "weth", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60c06040523480156200001157600080fd5b5060405162000f3c38038062000f3c833981016040819052620000349162000516565b80518251146200007d5760405162461bcd60e51b815260206004820152601060248201526f0d8cadccee8d040dcdee840dac2e8c6d60831b604482015260640160405180910390fd5b6001600160a01b03841660a05260ff83166080819052600090620000a390600a62000728565b835190915060005b818110156200040a576040518060400160405280848152602001858381518110620000da57620000da6200073d565b6020026020010151815250600080878481518110620000fd57620000fd6200073d565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000896001600160a01b03166001600160a01b03168152602001908152602001600020600082015181600001556020820151816001015590505060405180604001604052808583815181106200017f576200017f6200073d565b6020026020010151815260200184815250600080896001600160a01b03166001600160a01b031681526020019081526020016000206000878481518110620001cb57620001cb6200073d565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020600082015181600001556020820151816001015590505060008160016200021b919062000753565b90505b82811015620003f45760405180604001604052808683815181106200024757620002476200073d565b602002602001015181526020018684815181106200026957620002696200073d565b60200260200101518152506000808885815181106200028c576200028c6200073d565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000888481518110620002cb57620002cb6200073d565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020600082015181600001556020820151816001015590505060405180604001604052808684815181106200032a576200032a6200073d565b602002602001015181526020018683815181106200034c576200034c6200073d565b60200260200101518152506000808884815181106200036f576200036f6200073d565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000888581518110620003ae57620003ae6200073d565b6020908102919091018101516001600160a01b03168252818101929092526040016000208251815591015160019091015580620003eb816200076e565b9150506200021e565b508062000401816200076e565b915050620000ab565b505050505050506200078a565b80516001600160a01b03811681146200042f57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000475576200047562000434565b604052919050565b60006001600160401b0382111562000499576200049962000434565b5060051b60200190565b600082601f830112620004b557600080fd5b81516020620004ce620004c8836200047d565b6200044a565b82815260059290921b84018101918181019086841115620004ee57600080fd5b8286015b848110156200050b5780518352918301918301620004f2565b509695505050505050565b600080600080608085870312156200052d57600080fd5b620005388562000417565b935060208086015160ff811681146200055057600080fd5b60408701519094506001600160401b03808211156200056e57600080fd5b818801915088601f8301126200058357600080fd5b815162000594620004c8826200047d565b81815260059190911b8301840190848101908b831115620005b457600080fd5b938501935b82851015620005dd57620005cd8562000417565b82529385019390850190620005b9565b60608b01519097509450505080831115620005f757600080fd5b50506200060787828801620004a3565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156200066a5781600019048211156200064e576200064e62000613565b808516156200065c57918102915b93841c93908002906200062e565b509250929050565b600082620006835750600162000722565b81620006925750600062000722565b8160018114620006ab5760028114620006b657620006d6565b600191505062000722565b60ff841115620006ca57620006ca62000613565b50506001821b62000722565b5060208310610133831016604e8410600b8410161715620006fb575081810a62000722565b62000707838362000629565b80600019048211156200071e576200071e62000613565b0290505b92915050565b600062000736838362000672565b9392505050565b634e487b7160e01b600052603260045260246000fd5b6000821982111562000769576200076962000613565b500190565b60006001820162000783576200078362000613565b5060010190565b60805160a051610780620007bc6000396000818160d901526102bd015260008181609b015261025d01526107806000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063495e43481161005b578063495e43481461012057806388462c8d14610141578063a405d31214610164578063d9da4fe6146101ef57600080fd5b8062e4768b14610081578063313ce567146100965780633fc8cef3146100d4575b600080fd5b61009461008f3660046103ec565b610254565b005b6100bd7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020015b60405180910390f35b6100fb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100cb565b61013361012e36600461045f565b610323565b6040519081526020016100cb565b61015461014f3660046104c0565b610370565b60405190151581526020016100cb565b6100946101723660046104f3565b604080518082018252838152602080820184815273ffffffffffffffffffffffffffffffffffffffff978816600081815280845285812098909916808a5297835284892093518455905160019384015583518085018552948552848201958652958752868152828720958752949094529093209251835551910155565b61023f6101fd366004610535565b50505073ffffffffffffffffffffffffffffffffffffffff92831660009081526020818152604080832094909516825292909252502080546001909101549091565b604080519283526020830191909152016100cb565b600061028460ff7f000000000000000000000000000000000000000000000000000000000000000016600a6106fc565b604080518082018252848152602080820184815273ffffffffffffffffffffffffffffffffffffffff97881660008181528084528581207f0000000000000000000000000000000000000000000000000000000000000000909a16808252998452858120945185559151600194850155845180860186529586528583019788529781528082528381209781529690529420905181559151919092015550565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208181526040808320938716835292905290812060018101548154610366919061070f565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526020818152604080832093851683529290529081206001810154158015906103b9575060008160010154115b9150505b92915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146103e757600080fd5b919050565b600080604083850312156103ff57600080fd5b610408836103c3565b946020939093013593505050565b60008083601f84011261042857600080fd5b50813567ffffffffffffffff81111561044057600080fd5b60208301915083602082850101111561045857600080fd5b9250929050565b6000806000806060858703121561047557600080fd5b61047e856103c3565b935061048c602086016103c3565b9250604085013567ffffffffffffffff8111156104a857600080fd5b6104b487828801610416565b95989497509550505050565b600080604083850312156104d357600080fd5b6104dc836103c3565b91506104ea602084016103c3565b90509250929050565b6000806000806080858703121561050957600080fd5b610512856103c3565b9350610520602086016103c3565b93969395505050506040820135916060013590565b60008060008060008060a0878903121561054e57600080fd5b610557876103c3565b9550610565602088016103c3565b94506040870135935060608701359250608087013567ffffffffffffffff81111561058f57600080fd5b61059b89828a01610416565b979a9699509497509295939492505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b8085111561063557817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561061b5761061b6105ad565b8085161561062857918102915b93841c93908002906105e1565b509250929050565b60008261064c575060016103bd565b81610659575060006103bd565b816001811461066f576002811461067957610695565b60019150506103bd565b60ff84111561068a5761068a6105ad565b50506001821b6103bd565b5060208310610133831016604e8410600b84101617156106b8575081810a6103bd565b6106c283836105dc565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156106f4576106f46105ad565b029392505050565b6000610708838361063d565b9392505050565b600082610745577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea26469706673582212204e7baaf2ead1a5346f7f4c3e0d7e620bf40aa30dceee3c0060b28c78adffab9564736f6c634300080d0033"
    };
});
define("undefined/contracts/MockOracleAdaptor.ts", ["require", "exports", "@ijstech/eth-contract", "undefined/contracts/MockOracleAdaptor.json.ts"], function (require, exports, eth_contract_3, MockOracleAdaptor_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MockOracleAdaptor = void 0;
    class MockOracleAdaptor extends eth_contract_3.Contract {
        constructor(wallet, address) {
            super(wallet, address, MockOracleAdaptor_json_1.default.abi, MockOracleAdaptor_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.weth, this.wallet.utils.toString(params.decimals), params.tokens, this.wallet.utils.toString(params.prices)], options);
        }
        assign() {
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.decimals = decimals_call;
            let getLatestPriceParams = (params) => [params.from, params.to, this.wallet.utils.stringToBytes(params.param3)];
            let getLatestPrice_call = async (params, options) => {
                let result = await this.call('getLatestPrice', getLatestPriceParams(params), options);
                return new eth_contract_3.BigNumber(result);
            };
            this.getLatestPrice = getLatestPrice_call;
            let getRatioParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.param3), this.wallet.utils.toString(params.param4), this.wallet.utils.stringToBytes(params.param5)];
            let getRatio_call = async (params, options) => {
                let result = await this.call('getRatio', getRatioParams(params), options);
                return {
                    numerator: new eth_contract_3.BigNumber(result.numerator),
                    denominator: new eth_contract_3.BigNumber(result.denominator)
                };
            };
            this.getRatio = getRatio_call;
            let isSupportedParams = (params) => [params.from, params.to];
            let isSupported_call = async (params, options) => {
                let result = await this.call('isSupported', isSupportedParams(params), options);
                return result;
            };
            this.isSupported = isSupported_call;
            let weth_call = async (options) => {
                let result = await this.call('weth', [], options);
                return result;
            };
            this.weth = weth_call;
            let setPriceParams = (params) => [params.token, this.wallet.utils.toString(params.price)];
            let setPrice_send = async (params, options) => {
                let result = await this.send('setPrice', setPriceParams(params), options);
                return result;
            };
            let setPrice_call = async (params, options) => {
                let result = await this.call('setPrice', setPriceParams(params), options);
                return;
            };
            this.setPrice = Object.assign(setPrice_send, {
                call: setPrice_call
            });
            let setPrice_1Params = (params) => [params.token0, params.token1, this.wallet.utils.toString(params.price0), this.wallet.utils.toString(params.price1)];
            let setPrice_1_send = async (params, options) => {
                let result = await this.send('setPrice', setPrice_1Params(params), options);
                return result;
            };
            let setPrice_1_call = async (params, options) => {
                let result = await this.call('setPrice', setPrice_1Params(params), options);
                return;
            };
            this.setPrice_1 = Object.assign(setPrice_1_send, {
                call: setPrice_1_call
            });
        }
    }
    MockOracleAdaptor._abi = MockOracleAdaptor_json_1.default.abi;
    exports.MockOracleAdaptor = MockOracleAdaptor;
});
define("undefined/contracts/MockOracleAdaptor3.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='undefined/contracts/MockOracleAdaptor3.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "_weth", "type": "address" }, { "internalType": "uint8", "name": "_decimals", "type": "uint8" }, { "internalType": "address[]", "name": "_tokens", "type": "address[]" }, { "internalType": "uint256[]", "name": "_prices", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "getLatestPrice", "outputs": [{ "internalType": "uint256", "name": "price", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "getRatio", "outputs": [{ "internalType": "uint256", "name": "numerator", "type": "uint256" }, { "internalType": "uint256", "name": "denominator", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "isSupported", "outputs": [{ "internalType": "bool", "name": "supported", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "setPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "weth", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60c06040523480156200001157600080fd5b5060405162000a0a38038062000a0a833981016040819052620000349162000221565b6001600160a01b03841660a05260ff83166080528051825114620000915760405162461bcd60e51b815260206004820152601060248201526f0d8cadccee8d040dcdee840dac2e8c6d60831b604482015260640160405180910390fd5b815160005b818110156200011657828181518110620000b457620000b46200031e565b6020026020010151600080868481518110620000d457620000d46200031e565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208190555080806200010d9062000334565b91505062000096565b5050505050506200035c565b80516001600160a01b03811681146200013a57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156200018057620001806200013f565b604052919050565b60006001600160401b03821115620001a457620001a46200013f565b5060051b60200190565b600082601f830112620001c057600080fd5b81516020620001d9620001d38362000188565b62000155565b82815260059290921b84018101918181019086841115620001f957600080fd5b8286015b84811015620002165780518352918301918301620001fd565b509695505050505050565b600080600080608085870312156200023857600080fd5b620002438562000122565b935060208086015160ff811681146200025b57600080fd5b60408701519094506001600160401b03808211156200027957600080fd5b818801915088601f8301126200028e57600080fd5b81516200029f620001d38262000188565b81815260059190911b8301840190848101908b831115620002bf57600080fd5b938501935b82851015620002e857620002d88562000122565b82529385019390850190620002c4565b60608b015190975094505050808311156200030257600080fd5b50506200031287828801620001ae565b91505092959194509250565b634e487b7160e01b600052603260045260246000fd5b6000600182016200035557634e487b7160e01b600052601160045260246000fd5b5060010190565b60805160a05161068362000387600039600060f201526000818160b4015261020801526106836000f3fe608060405234801561001057600080fd5b50600436106100715760003560e01c8063495e434811610050578063495e43481461013957806388462c8d1461015a578063d9da4fe61461017d57600080fd5b8062e4768b14610076578063313ce567146100af5780633fc8cef3146100ed575b600080fd5b6100ad6100843660046102fb565b73ffffffffffffffffffffffffffffffffffffffff909116600090815260208190526040902055565b005b6100d67f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020015b60405180910390f35b6101147f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e4565b61014c61014736600461036e565b6101db565b6040519081526020016100e4565b61016d6101683660046103cf565b610272565b60405190151581526020016100e4565b6101c661018b366004610402565b5050505073ffffffffffffffffffffffffffffffffffffffff9182166000908152602081905260408082205492909316815291909120549091565b604080519283526020830191909152016100e4565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604081205461022f60ff7f000000000000000000000000000000000000000000000000000000000000000016600a6105c9565b73ffffffffffffffffffffffffffffffffffffffff871660009081526020819052604090205461025f91906105d5565b6102699190610612565b95945050505050565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260408120541515806102c9575073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205415155b90505b92915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146102f657600080fd5b919050565b6000806040838503121561030e57600080fd5b610317836102d2565b946020939093013593505050565b60008083601f84011261033757600080fd5b50813567ffffffffffffffff81111561034f57600080fd5b60208301915083602082850101111561036757600080fd5b9250929050565b6000806000806060858703121561038457600080fd5b61038d856102d2565b935061039b602086016102d2565b9250604085013567ffffffffffffffff8111156103b757600080fd5b6103c387828801610325565b95989497509550505050565b600080604083850312156103e257600080fd5b6103eb836102d2565b91506103f9602084016102d2565b90509250929050565b60008060008060008060a0878903121561041b57600080fd5b610424876102d2565b9550610432602088016102d2565b94506040870135935060608701359250608087013567ffffffffffffffff81111561045c57600080fd5b61046889828a01610325565b979a9699509497509295939492505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b8085111561050257817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156104e8576104e861047a565b808516156104f557918102915b93841c93908002906104ae565b509250929050565b600082610519575060016102cc565b81610526575060006102cc565b816001811461053c576002811461054657610562565b60019150506102cc565b60ff8411156105575761055761047a565b50506001821b6102cc565b5060208310610133831016604e8410600b8410161715610585575081810a6102cc565b61058f83836104a9565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156105c1576105c161047a565b029392505050565b60006102c9838361050a565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561060d5761060d61047a565b500290565b600082610648577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea264697066735822122066c0762a3847e20c7be3784277df000886367cc0679c1e09a722184febf2a65964736f6c634300080d0033"
    };
});
define("undefined/contracts/MockOracleAdaptor3.ts", ["require", "exports", "@ijstech/eth-contract", "undefined/contracts/MockOracleAdaptor3.json.ts"], function (require, exports, eth_contract_4, MockOracleAdaptor3_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MockOracleAdaptor3 = void 0;
    class MockOracleAdaptor3 extends eth_contract_4.Contract {
        constructor(wallet, address) {
            super(wallet, address, MockOracleAdaptor3_json_1.default.abi, MockOracleAdaptor3_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.weth, this.wallet.utils.toString(params.decimals), params.tokens, this.wallet.utils.toString(params.prices)], options);
        }
        assign() {
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_4.BigNumber(result);
            };
            this.decimals = decimals_call;
            let getLatestPriceParams = (params) => [params.from, params.to, this.wallet.utils.stringToBytes(params.param3)];
            let getLatestPrice_call = async (params, options) => {
                let result = await this.call('getLatestPrice', getLatestPriceParams(params), options);
                return new eth_contract_4.BigNumber(result);
            };
            this.getLatestPrice = getLatestPrice_call;
            let getRatioParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.param3), this.wallet.utils.toString(params.param4), this.wallet.utils.stringToBytes(params.param5)];
            let getRatio_call = async (params, options) => {
                let result = await this.call('getRatio', getRatioParams(params), options);
                return {
                    numerator: new eth_contract_4.BigNumber(result.numerator),
                    denominator: new eth_contract_4.BigNumber(result.denominator)
                };
            };
            this.getRatio = getRatio_call;
            let isSupportedParams = (params) => [params.from, params.to];
            let isSupported_call = async (params, options) => {
                let result = await this.call('isSupported', isSupportedParams(params), options);
                return result;
            };
            this.isSupported = isSupported_call;
            let weth_call = async (options) => {
                let result = await this.call('weth', [], options);
                return result;
            };
            this.weth = weth_call;
            let setPriceParams = (params) => [params.token, this.wallet.utils.toString(params.price)];
            let setPrice_send = async (params, options) => {
                let result = await this.send('setPrice', setPriceParams(params), options);
                return result;
            };
            let setPrice_call = async (params, options) => {
                let result = await this.call('setPrice', setPriceParams(params), options);
                return;
            };
            this.setPrice = Object.assign(setPrice_send, {
                call: setPrice_call
            });
        }
    }
    MockOracleAdaptor3._abi = MockOracleAdaptor3_json_1.default.abi;
    exports.MockOracleAdaptor3 = MockOracleAdaptor3;
});
define("undefined/contracts/WETH9.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='undefined/contracts/WETH9.json.ts'/> 
    exports.default = {
        "abi": [
            { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" },
            { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" },
            { "constant": false, "inputs": [{ "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
            { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" },
            { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" },
            { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "payable": true, "stateMutability": "payable", "type": "fallback" },
            { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Deposit", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Withdrawal", "type": "event" }
        ],
        "bytecode": "60c0604052600d60808190527f577261707065642045746865720000000000000000000000000000000000000060a090815261003e91600091906100a3565b506040805180820190915260048082527f57455448000000000000000000000000000000000000000000000000000000006020909201918252610083916001916100a3565b506002805460ff1916601217905534801561009d57600080fd5b5061013e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e457805160ff1916838001178555610111565b82800160010185558215610111579182015b828111156101115782518255916020019190600101906100f6565b5061011d929150610121565b5090565b61013b91905b8082111561011d5760008155600101610127565b90565b6107688061014d6000396000f3006080604052600436106100ae5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100b8578063095ea7b31461014257806318160ddd1461018757806323b872dd146101ae5780632e1a7d4d146101e5578063313ce567146101fd57806370a082311461022857806395d89b4114610256578063a9059cbb1461026b578063d0e30db0146100ae578063dd62ed3e1461029c575b6100b66102d0565b005b3480156100c457600080fd5b506100cd61031f565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101075781810151838201526020016100ef565b50505050905090810190601f1680156101345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014e57600080fd5b5061017373ffffffffffffffffffffffffffffffffffffffff600435166024356103cb565b604080519115158252519081900360200190f35b34801561019357600080fd5b5061019c61043e565b60408051918252519081900360200190f35b3480156101ba57600080fd5b5061017373ffffffffffffffffffffffffffffffffffffffff60043581169060243516604435610443565b3480156101f157600080fd5b506100b66004356105e3565b34801561020957600080fd5b50610212610678565b6040805160ff9092168252519081900360200190f35b34801561023457600080fd5b5061019c73ffffffffffffffffffffffffffffffffffffffff60043516610681565b34801561026257600080fd5b506100cd610693565b34801561027757600080fd5b5061017373ffffffffffffffffffffffffffffffffffffffff6004351660243561070b565b3480156102a857600080fd5b5061019c73ffffffffffffffffffffffffffffffffffffffff6004358116906024351661071f565b33600081815260036020908152604091829020805434908101909155825190815291517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9281900390910190a2565b6000805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b505050505081565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b303190565b73ffffffffffffffffffffffffffffffffffffffff831660009081526003602052604081205482111561047557600080fd5b73ffffffffffffffffffffffffffffffffffffffff841633148015906104eb575073ffffffffffffffffffffffffffffffffffffffff841660009081526004602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14155b156105655773ffffffffffffffffffffffffffffffffffffffff8416600090815260046020908152604080832033845290915290205482111561052d57600080fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526004602090815260408083203384529091529020805483900390555b73ffffffffffffffffffffffffffffffffffffffff808516600081815260036020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b336000908152600360205260409020548111156105ff57600080fd5b33600081815260036020526040808220805485900390555183156108fc0291849190818181858888f1935050505015801561063e573d6000803e3d6000fd5b5060408051828152905133917f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65919081900360200190a250565b60025460ff1681565b60036020526000908152604090205481565b60018054604080516020600284861615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156103c35780601f10610398576101008083540402835291602001916103c3565b6000610718338484610443565b9392505050565b6004602090815260009283526040808420909152908252902054815600a165627a7a7230582028e8926331b6fbc962189e19ee2a6efac438a3c6bc58098e6793d702eaef86460029"
    };
});
define("undefined/contracts/WETH9.ts", ["require", "exports", "@ijstech/eth-contract", "undefined/contracts/WETH9.json.ts"], function (require, exports, eth_contract_5, WETH9_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WETH9 = void 0;
    class WETH9 extends eth_contract_5.Contract {
        constructor(wallet, address) {
            super(wallet, address, WETH9_json_1.default.abi, WETH9_json_1.default.bytecode);
            this.assign();
        }
        deploy(options) {
            return this.__deploy([], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                src: result.src,
                guy: result.guy,
                wad: new eth_contract_5.BigNumber(result.wad),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                src: result.src,
                dst: result.dst,
                wad: new eth_contract_5.BigNumber(result.wad),
                _event: event
            };
        }
        parseDepositEvent(receipt) {
            return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
        }
        decodeDepositEvent(event) {
            let result = event.data;
            return {
                dst: result.dst,
                wad: new eth_contract_5.BigNumber(result.wad),
                _event: event
            };
        }
        parseWithdrawalEvent(receipt) {
            return this.parseEvents(receipt, "Withdrawal").map(e => this.decodeWithdrawalEvent(e));
        }
        decodeWithdrawalEvent(event) {
            let result = event.data;
            return {
                src: result.src,
                wad: new eth_contract_5.BigNumber(result.wad),
                _event: event
            };
        }
        assign() {
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.decimals = decimals_call;
            let balanceOf_call = async (param1, options) => {
                let result = await this.call('balanceOf', [param1], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let allowanceParams = (params) => [params.param1, params.param2];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_5.BigNumber(result);
            };
            this.allowance = allowance_call;
            let approveParams = (params) => [params.guy, this.wallet.utils.toString(params.wad)];
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
            let transferFromParams = (params) => [params.src, params.dst, this.wallet.utils.toString(params.wad)];
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
            let withdraw_send = async (wad, options) => {
                let result = await this.send('withdraw', [this.wallet.utils.toString(wad)], options);
                return result;
            };
            let withdraw_call = async (wad, options) => {
                let result = await this.call('withdraw', [this.wallet.utils.toString(wad)], options);
                return;
            };
            this.withdraw = Object.assign(withdraw_send, {
                call: withdraw_call
            });
            let transferParams = (params) => [params.dst, this.wallet.utils.toString(params.wad)];
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
            let deposit_send = async (options) => {
                let result = await this.send('deposit', [], options);
                return result;
            };
            let deposit_call = async (options) => {
                let result = await this.call('deposit', [], options);
                return;
            };
            this.deposit = Object.assign(deposit_send, {
                call: deposit_call
            });
        }
    }
    WETH9._abi = WETH9_json_1.default.abi;
    exports.WETH9 = WETH9;
});
define("undefined/contracts/index.ts", ["require", "exports", "undefined/contracts/MockAmmPair.ts", "undefined/contracts/MockErc20.ts", "undefined/contracts/MockOracleAdaptor.ts", "undefined/contracts/MockOracleAdaptor3.ts", "undefined/contracts/WETH9.ts"], function (require, exports, MockAmmPair_1, MockErc20_1, MockOracleAdaptor_1, MockOracleAdaptor3_1, WETH9_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WETH9 = exports.MockOracleAdaptor3 = exports.MockOracleAdaptor = exports.MockErc20 = exports.MockAmmPair = void 0;
    Object.defineProperty(exports, "MockAmmPair", { enumerable: true, get: function () { return MockAmmPair_1.MockAmmPair; } });
    Object.defineProperty(exports, "MockErc20", { enumerable: true, get: function () { return MockErc20_1.MockErc20; } });
    Object.defineProperty(exports, "MockOracleAdaptor", { enumerable: true, get: function () { return MockOracleAdaptor_1.MockOracleAdaptor; } });
    Object.defineProperty(exports, "MockOracleAdaptor3", { enumerable: true, get: function () { return MockOracleAdaptor3_1.MockOracleAdaptor3; } });
    Object.defineProperty(exports, "WETH9", { enumerable: true, get: function () { return WETH9_1.WETH9; } });
});
define("undefined", ["require", "exports", "undefined/contracts/index.ts"], function (require, exports, Contracts) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Contracts = void 0;
    exports.Contracts = Contracts;
});
