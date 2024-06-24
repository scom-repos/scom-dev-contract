"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTManager = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const NFTManager_json_1 = __importDefault(require("./NFTManager.json"));
class NFTManager extends eth_contract_1.Contract {
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
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            stakes: new eth_contract_1.BigNumber(result.stakes),
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
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
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
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            stakes: new eth_contract_1.BigNumber(result.stakes),
            protocolFee: new eth_contract_1.BigNumber(result.protocolFee),
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
            stakes: new eth_contract_1.BigNumber(result.stakes),
            protocolFee: new eth_contract_1.BigNumber(result.protocolFee),
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
                stakes: new eth_contract_1.BigNumber(e.stakes),
                protocolFee: new eth_contract_1.BigNumber(e.protocolFee),
                paused: e.paused
            })));
        };
        this.getNfts = getNfts_call;
        let invNfts_call = async (param1, options) => {
            let result = await this.call('invNfts', [param1], options);
            return new eth_contract_1.BigNumber(result);
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
                stakes: new eth_contract_1.BigNumber(result.stakes),
                protocolFee: new eth_contract_1.BigNumber(result.protocolFee),
                paused: result.paused
            };
        };
        this.nfts = nfts_call;
        let nftsLength_call = async (options) => {
            let result = await this.call('nftsLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.nftsLength = nftsLength_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let protocolFeeBalance_call = async (options) => {
            let result = await this.call('protocolFeeBalance', [], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
