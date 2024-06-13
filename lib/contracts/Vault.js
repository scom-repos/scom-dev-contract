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
            amountScom: new eth_contract_1.BigNumber(result.amountScom),
            amountEth: new eth_contract_1.BigNumber(result.amountEth),
            remainingBalance: new eth_contract_1.BigNumber(result.remainingBalance),
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
            from: result.from,
            to: result.to,
            amountScom: new eth_contract_1.BigNumber(result.amountScom),
            amountEth: new eth_contract_1.BigNumber(result.amountEth),
            remainingBalance: new eth_contract_1.BigNumber(result.remainingBalance),
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
            amount: new eth_contract_1.BigNumber(result.amount),
            unlockedAmount: new eth_contract_1.BigNumber(result.unlockedAmount),
            releasedAmount: new eth_contract_1.BigNumber(result.releasedAmount),
            _event: event
        };
    }
    parseLockEvent(receipt) {
        return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
    }
    decodeLockEvent(event) {
        let result = event.data;
        return {
            start: new eth_contract_1.BigNumber(result.start),
            end: new eth_contract_1.BigNumber(result.end),
            rate: new eth_contract_1.BigNumber(result.rate),
            initAmount: new eth_contract_1.BigNumber(result.initAmount),
            _event: event
        };
    }
    parseNewTrancheEvent(receipt) {
        return this.parseEvents(receipt, "NewTranche").map(e => this.decodeNewTrancheEvent(e));
    }
    decodeNewTrancheEvent(event) {
        let result = event.data;
        return {
            trancheId: new eth_contract_1.BigNumber(result.trancheId),
            unlockedAmount: new eth_contract_1.BigNumber(result.unlockedAmount),
            _event: event
        };
    }
    parseReleaseEvent(receipt) {
        return this.parseEvents(receipt, "Release").map(e => this.decodeReleaseEvent(e));
    }
    decodeReleaseEvent(event) {
        let result = event.data;
        return {
            trancheIds: result.trancheIds.map(e => new eth_contract_1.BigNumber(e)),
            amount: new eth_contract_1.BigNumber(result.amount),
            releasedAmount: new eth_contract_1.BigNumber(result.releasedAmount),
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
            amountScom: new eth_contract_1.BigNumber(result.amountScom),
            amountEth: new eth_contract_1.BigNumber(result.amountEth),
            remainingBalance: new eth_contract_1.BigNumber(result.remainingBalance),
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
            trancheId: new eth_contract_1.BigNumber(result.trancheId),
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
            unlock: new eth_contract_1.BigNumber(result.unlock),
            available: new eth_contract_1.BigNumber(result.available),
            balance: new eth_contract_1.BigNumber(result.balance),
            _event: event
        };
    }
    parseWithdrawScomFromReleaseEvent(receipt) {
        return this.parseEvents(receipt, "WithdrawScomFromRelease").map(e => this.decodeWithdrawScomFromReleaseEvent(e));
    }
    decodeWithdrawScomFromReleaseEvent(event) {
        let result = event.data;
        return {
            amount: new eth_contract_1.BigNumber(result.amount),
            balance: new eth_contract_1.BigNumber(result.balance),
            _event: event
        };
    }
    parseWithdrawScomFromTrancheEvent(receipt) {
        return this.parseEvents(receipt, "WithdrawScomFromTranche").map(e => this.decodeWithdrawScomFromTrancheEvent(e));
    }
    decodeWithdrawScomFromTrancheEvent(event) {
        let result = event.data;
        return {
            trancheId: new eth_contract_1.BigNumber(result.trancheId),
            amount: new eth_contract_1.BigNumber(result.amount),
            remainingBalance: new eth_contract_1.BigNumber(result.remainingBalance),
            _event: event
        };
    }
    assign() {
        let availableBalanceInTranche_call = async (param1, options) => {
            let result = await this.call('availableBalanceInTranche', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.availableBalanceInTranche = availableBalanceInTranche_call;
        let currUnlockedAmount_call = async (options) => {
            let result = await this.call('currUnlockedAmount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.currUnlockedAmount = currUnlockedAmount_call;
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
        let fee_call = async (options) => {
            let result = await this.call('fee', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.fee = fee_call;
        let foundation_call = async (options) => {
            let result = await this.call('foundation', [], options);
            return result;
        };
        this.foundation = foundation_call;
        let foundationShare_call = async (options) => {
            let result = await this.call('foundationShare', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.foundationShare = foundationShare_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let lastUnlockedAmount_call = async (options) => {
            let result = await this.call('lastUnlockedAmount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastUnlockedAmount = lastUnlockedAmount_call;
        let lastUpdate_call = async (options) => {
            let result = await this.call('lastUpdate', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastUpdate = lastUpdate_call;
        let lockedAmount_call = async (options) => {
            let result = await this.call('lockedAmount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lockedAmount = lockedAmount_call;
        let maxTick_call = async (options) => {
            let result = await this.call('maxTick', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.maxTick = maxTick_call;
        let minTick_call = async (options) => {
            let result = await this.call('minTick', [], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
        };
        this.releasedAmount = releasedAmount_call;
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
        let startingAmount_call = async (options) => {
            let result = await this.call('startingAmount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.startingAmount = startingAmount_call;
        let tickSpacing_call = async (options) => {
            let result = await this.call('tickSpacing', [], options);
            return new eth_contract_1.BigNumber(result);
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
                startTime: new eth_contract_1.BigNumber(result.startTime),
                limitedClaimEndTime: new eth_contract_1.BigNumber(result.limitedClaimEndTime),
                unlimitedClaimEndTime: new eth_contract_1.BigNumber(result.unlimitedClaimEndTime),
                amount: new eth_contract_1.BigNumber(result.amount),
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
            return new eth_contract_1.BigNumber(result);
        };
        this.unlockedAmount = unlockedAmount_call;
        let unlockedAmountAt_call = async (timestamp, options) => {
            let result = await this.call('unlockedAmountAt', [this.wallet.utils.toString(timestamp)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.unlockedAmountAt = unlockedAmountAt_call;
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
        let buyScom_send = async (to, options) => {
            let result = await this.send('buyScom', [to], options);
            return result;
        };
        let buyScom_call = async (to, options) => {
            let result = await this.call('buyScom', [to], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
