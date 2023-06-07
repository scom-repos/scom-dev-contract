"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vault = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const Vault_json_1 = __importDefault(require("./Vault.json"));
class Vault extends eth_contract_1.Contract {
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
            amountScom: new eth_contract_1.BigNumber(result.amountScom),
            amountEth: new eth_contract_1.BigNumber(result.amountEth),
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
            salesId: new eth_contract_1.BigNumber(result.salesId),
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
            return new eth_contract_1.BigNumber(result);
        };
        this.amountUsedInSale = amountUsedInSale_call;
        let availableAmount_call = async (options) => {
            let result = await this.call('availableAmount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.availableAmount = availableAmount_call;
        let currReleaseAmount_call = async (options) => {
            let result = await this.call('currReleaseAmount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.currReleaseAmount = currReleaseAmount_call;
        let decrementDecimal_call = async (options) => {
            let result = await this.call('decrementDecimal', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.decrementDecimal = decrementDecimal_call;
        let endTime_call = async (options) => {
            let result = await this.call('endTime', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.endTime = endTime_call;
        let foundation_call = async (options) => {
            let result = await this.call('foundation', [], options);
            return result;
        };
        this.foundation = foundation_call;
        let initialReleaseAmount_call = async (options) => {
            let result = await this.call('initialReleaseAmount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.initialReleaseAmount = initialReleaseAmount_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let lasReleaseAmount_call = async (options) => {
            let result = await this.call('lasReleaseAmount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lasReleaseAmount = lasReleaseAmount_call;
        let lastUpdate_call = async (options) => {
            let result = await this.call('lastUpdate', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastUpdate = lastUpdate_call;
        let newOwner_call = async (options) => {
            let result = await this.call('newOwner', [], options);
            return result;
        };
        this.newOwner = newOwner_call;
        let oneMinusDecrement_call = async (options) => {
            let result = await this.call('oneMinusDecrement', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.oneMinusDecrement = oneMinusDecrement_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let publicSaleAmount_call = async (options) => {
            let result = await this.call('publicSaleAmount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.publicSaleAmount = publicSaleAmount_call;
        let sales_call = async (param1, options) => {
            let result = await this.call('sales', [this.wallet.utils.toString(param1)], options);
            return {
                startTime: new eth_contract_1.BigNumber(result.startTime),
                limitedPrivateSaleEndTime: new eth_contract_1.BigNumber(result.limitedPrivateSaleEndTime),
                unlimitedPrivateSaleEndTime: new eth_contract_1.BigNumber(result.unlimitedPrivateSaleEndTime),
                amount: new eth_contract_1.BigNumber(result.amount),
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
            return new eth_contract_1.BigNumber(result);
        };
        this.startTime = startTime_call;
        let token0IsScom_call = async (options) => {
            let result = await this.call('token0IsScom', [], options);
            return result;
        };
        this.token0IsScom = token0IsScom_call;
        let totalAmount_call = async (options) => {
            let result = await this.call('totalAmount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalAmount = totalAmount_call;
        let totalSuppyAt_call = async (timestamp, options) => {
            let result = await this.call('totalSuppyAt', [this.wallet.utils.toString(timestamp)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSuppyAt = totalSuppyAt_call;
        let usedAllocation_call = async (param1, options) => {
            let result = await this.call('usedAllocation', [this.wallet.utils.stringToBytes32(param1)], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
