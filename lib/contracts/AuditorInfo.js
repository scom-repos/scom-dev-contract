"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditorInfo = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const AuditorInfo_json_1 = __importDefault(require("./AuditorInfo.json"));
class AuditorInfo extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, AuditorInfo_json_1.default.abi, AuditorInfo_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.token, this.wallet.utils.toString(params.minStakes), this.wallet.utils.toString(params.minEndorsementsRequired), this.wallet.utils.toString(params.cooldownPeriod)], options);
    }
    parseAddAuditorEvent(receipt) {
        return this.parseEvents(receipt, "AddAuditor").map(e => this.decodeAddAuditorEvent(e));
    }
    decodeAddAuditorEvent(event) {
        let result = event.data;
        return {
            auditorId: new eth_contract_1.BigNumber(result.auditorId),
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
    parseSetCooldownPeriodEvent(receipt) {
        return this.parseEvents(receipt, "SetCooldownPeriod").map(e => this.decodeSetCooldownPeriodEvent(e));
    }
    decodeSetCooldownPeriodEvent(event) {
        let result = event.data;
        return {
            cooldownPeriod: new eth_contract_1.BigNumber(result.cooldownPeriod),
            _event: event
        };
    }
    parseSetMinEndorsementsRequiredEvent(receipt) {
        return this.parseEvents(receipt, "SetMinEndorsementsRequired").map(e => this.decodeSetMinEndorsementsRequiredEvent(e));
    }
    decodeSetMinEndorsementsRequiredEvent(event) {
        let result = event.data;
        return {
            minEndorsementsRequired: new eth_contract_1.BigNumber(result.minEndorsementsRequired),
            _event: event
        };
    }
    parseSetMinStakeEvent(receipt) {
        return this.parseEvents(receipt, "SetMinStake").map(e => this.decodeSetMinStakeEvent(e));
    }
    decodeSetMinStakeEvent(event) {
        let result = event.data;
        return {
            minStake: new eth_contract_1.BigNumber(result.minStake),
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
            amount: new eth_contract_1.BigNumber(result.amount),
            newBalance: new eth_contract_1.BigNumber(result.newBalance),
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
            amount: new eth_contract_1.BigNumber(result.amount),
            newBalance: new eth_contract_1.BigNumber(result.newBalance),
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
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseWithdrawnEndorsementEvent(receipt) {
        return this.parseEvents(receipt, "WithdrawnEndorsement").map(e => this.decodeWithdrawnEndorsementEvent(e));
    }
    decodeWithdrawnEndorsementEvent(event) {
        let result = event.data;
        return {
            endorser: result.endorser,
            endorsee: result.endorsee,
            _event: event
        };
    }
    assign() {
        let MAX_COOLDOWN_PERIOD_call = async (options) => {
            let result = await this.call('MAX_COOLDOWN_PERIOD', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.MAX_COOLDOWN_PERIOD = MAX_COOLDOWN_PERIOD_call;
        let auditorIdCount_call = async (options) => {
            let result = await this.call('auditorIdCount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.auditorIdCount = auditorIdCount_call;
        let auditorIds_call = async (param1, options) => {
            let result = await this.call('auditorIds', [param1], options);
            return new eth_contract_1.BigNumber(result);
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
                status: new eth_contract_1.BigNumber(result.status),
                balance: new eth_contract_1.BigNumber(result.balance),
                endorsementCount: new eth_contract_1.BigNumber(result.endorsementCount)
            };
        };
        this.auditorsData = auditorsData_call;
        let cooldownPeriod_call = async (options) => {
            let result = await this.call('cooldownPeriod', [], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
        };
        this.endorsedByInv = endorsedByInv_call;
        let endorsedByLength_call = async (endorsee, options) => {
            let result = await this.call('endorsedByLength', [endorsee], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
        };
        this.endorsingInv = endorsingInv_call;
        let endorsingLength_call = async (endorser, options) => {
            let result = await this.call('endorsingLength', [endorser], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.endorsingLength = endorsingLength_call;
        let getAuditorsParams = (params) => [this.wallet.utils.toString(params.auditorIdStart), this.wallet.utils.toString(params.length)];
        let getAuditors_call = async (params, options) => {
            let result = await this.call('getAuditors', getAuditorsParams(params), options);
            return {
                auditors: result._auditors,
                auditorsData: result._auditorsData.map(e => ({
                    status: new eth_contract_1.BigNumber(e.status),
                    balance: new eth_contract_1.BigNumber(e.balance),
                    endorsementCount: new eth_contract_1.BigNumber(e.endorsementCount)
                }))
            };
        };
        this.getAuditors = getAuditors_call;
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
            return new eth_contract_1.BigNumber(result);
        };
        this.minEndorsementsRequired = minEndorsementsRequired_call;
        let minStakes_call = async (options) => {
            let result = await this.call('minStakes', [], options);
            return new eth_contract_1.BigNumber(result);
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
                amount: new eth_contract_1.BigNumber(result.amount),
                releaseTime: new eth_contract_1.BigNumber(result.releaseTime)
            };
        };
        this.pendingWithdrawal = pendingWithdrawal_call;
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
        let stakeBondParams = (params) => [this.wallet.utils.toString(params.amount), params.doUpdate];
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
        let updateEndorsementCountBatch_send = async (auditors, options) => {
            let result = await this.send('updateEndorsementCountBatch', [auditors], options);
            return result;
        };
        let updateEndorsementCountBatch_call = async (auditors, options) => {
            let result = await this.call('updateEndorsementCountBatch', [auditors], options);
            return;
        };
        this.updateEndorsementCountBatch = Object.assign(updateEndorsementCountBatch_send, {
            call: updateEndorsementCountBatch_call
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
        let withdrawnEndorsementParams = (params) => [params.auditor, params.doUpdate];
        let withdrawnEndorsement_send = async (params, options) => {
            let result = await this.send('withdrawnEndorsement', withdrawnEndorsementParams(params), options);
            return result;
        };
        let withdrawnEndorsement_call = async (params, options) => {
            let result = await this.call('withdrawnEndorsement', withdrawnEndorsementParams(params), options);
            return;
        };
        this.withdrawnEndorsement = Object.assign(withdrawnEndorsement_send, {
            call: withdrawnEndorsement_call
        });
    }
}
AuditorInfo._abi = AuditorInfo_json_1.default.abi;
exports.AuditorInfo = AuditorInfo;
