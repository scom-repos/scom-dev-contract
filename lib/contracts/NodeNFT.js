"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeNFT = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const NodeNFT_json_1 = __importDefault(require("./NodeNFT.json"));
class NodeNFT extends eth_contract_1.Contract {
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
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
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
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
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
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            attribute: new eth_contract_1.BigNumber(result.attribute),
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
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            attribute: new eth_contract_1.BigNumber(result.attribute),
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
            protocolFee: new eth_contract_1.BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSetStakeRequiredEvent(receipt) {
        return this.parseEvents(receipt, "SetStakeRequired").map(e => this.decodeSetStakeRequiredEvent(e));
    }
    decodeSetStakeRequiredEvent(event) {
        let result = event.data;
        return {
            stakeRequired: new eth_contract_1.BigNumber(result.stakeRequired),
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
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
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
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
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
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            _event: event
        };
    }
    assign() {
        let balanceOf_call = async (owner, options) => {
            let result = await this.call('balanceOf', [owner], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let baseURI_call = async (options) => {
            let result = await this.call('baseURI', [], options);
            return result;
        };
        this.baseURI = baseURI_call;
        let counter_call = async (options) => {
            let result = await this.call('counter', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.counter = counter_call;
        let creationDate_call = async (param1, options) => {
            let result = await this.call('creationDate', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.creationDate = creationDate_call;
        let destoryDate_call = async (param1, options) => {
            let result = await this.call('destoryDate', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFee = protocolFee_call;
        let stakeRequired_call = async (options) => {
            let result = await this.call('stakeRequired', [], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
        };
        this.tokenByIndex = tokenByIndex_call;
        let tokenOfOwnerByIndexParams = (params) => [params.owner, this.wallet.utils.toString(params.index)];
        let tokenOfOwnerByIndex_call = async (params, options) => {
            let result = await this.call('tokenOfOwnerByIndex', tokenOfOwnerByIndexParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
        let tokenURI_call = async (tokenId, options) => {
            let result = await this.call('tokenURI', [this.wallet.utils.toString(tokenId)], options);
            return result;
        };
        this.tokenURI = tokenURI_call;
        let totalSupply_call = async (options) => {
            let result = await this.call('totalSupply', [], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
