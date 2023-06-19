"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterVaultWrapper = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const RouterVaultWrapper_json_1 = __importDefault(require("./RouterVaultWrapper.json"));
class RouterVaultWrapper extends eth_contract_1.Contract {
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
            trancheId: new eth_contract_1.BigNumber(result.trancheId),
            sender: result.sender,
            inToken: result.inToken,
            inAmount: new eth_contract_1.BigNumber(result.inAmount),
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
            trancheId: result.trancheId.map(e => new eth_contract_1.BigNumber(e)),
            sender: result.sender,
            inToken: result.inToken,
            inAmount: new eth_contract_1.BigNumber(result.inAmount),
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
