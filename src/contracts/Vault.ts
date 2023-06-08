import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./Vault.json";
export interface IDeployParams {foundation:string;scom:string;amm:string}
export interface IClaimParams {trancheId:number|BigNumber;to:string;allocation:number|BigNumber;proof:string[]}
export interface IClaimWithWETHParams {trancheId:number|BigNumber;from:string;to:string;allocation:number|BigNumber;proof:string[]}
export interface ILockParams {startTime:number|BigNumber;endTime:number|BigNumber;decrementDecimal:number|BigNumber}
export interface IPublicSwapWithWETHParams {from:string;to:string}
export interface IReleaseAndSwapParams {trancheIds:(number|BigNumber)[];to:string}
export interface IReleaseAndSwapWithWETHParams {trancheIds:(number|BigNumber)[];from:string;to:string}
export interface IUpdateReleaseSchduleParams {endTime:number|BigNumber;startingAmount:number|BigNumber;decrementDecimal:number|BigNumber}
export interface IWithdrawScomFromTrancheParams {trancheIds:(number|BigNumber)[];amountScom:(number|BigNumber)[]}
export class Vault extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.foundation,params.scom,params.amm], options);
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): Vault.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): Vault.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseClaimEvent(receipt: TransactionReceipt): Vault.ClaimEvent[]{
        return this.parseEvents(receipt, "Claim").map(e=>this.decodeClaimEvent(e));
    }
    decodeClaimEvent(event: Event): Vault.ClaimEvent{
        let result = event.data;
        return {
            trancheId: new BigNumber(result.trancheId),
            from: result.from,
            to: result.to,
            amountScom: new BigNumber(result.amountScom),
            amountEth: new BigNumber(result.amountEth),
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): Vault.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): Vault.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseLockEvent(receipt: TransactionReceipt): Vault.LockEvent[]{
        return this.parseEvents(receipt, "Lock").map(e=>this.decodeLockEvent(e));
    }
    decodeLockEvent(event: Event): Vault.LockEvent{
        let result = event.data;
        return {
            start: new BigNumber(result.start),
            end: new BigNumber(result.end),
            rate: new BigNumber(result.rate),
            initAmount: new BigNumber(result.initAmount),
            _event: event
        };
    }
    parseNewTrancheEvent(receipt: TransactionReceipt): Vault.NewTrancheEvent[]{
        return this.parseEvents(receipt, "NewTranche").map(e=>this.decodeNewTrancheEvent(e));
    }
    decodeNewTrancheEvent(event: Event): Vault.NewTrancheEvent{
        let result = event.data;
        return {
            trancheId: new BigNumber(result.trancheId),
            _event: event
        };
    }
    parseReleaseEvent(receipt: TransactionReceipt): Vault.ReleaseEvent[]{
        return this.parseEvents(receipt, "Release").map(e=>this.decodeReleaseEvent(e));
    }
    decodeReleaseEvent(event: Event): Vault.ReleaseEvent{
        let result = event.data;
        return {
            amount: new BigNumber(result.amount),
            balance: new BigNumber(result.balance),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Vault.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): Vault.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): Vault.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): Vault.SwapEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            amountScom: new BigNumber(result.amountScom),
            amountEth: new BigNumber(result.amountEth),
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Vault.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): Vault.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnlockEvent(receipt: TransactionReceipt): Vault.UnlockEvent[]{
        return this.parseEvents(receipt, "Unlock").map(e=>this.decodeUnlockEvent(e));
    }
    decodeUnlockEvent(event: Event): Vault.UnlockEvent{
        let result = event.data;
        return {
            unlock: new BigNumber(result.unlock),
            available: new BigNumber(result.available),
            balance: new BigNumber(result.balance),
            _event: event
        };
    }
    parseWithdrawScomFromReleaseEvent(receipt: TransactionReceipt): Vault.WithdrawScomFromReleaseEvent[]{
        return this.parseEvents(receipt, "WithdrawScomFromRelease").map(e=>this.decodeWithdrawScomFromReleaseEvent(e));
    }
    decodeWithdrawScomFromReleaseEvent(event: Event): Vault.WithdrawScomFromReleaseEvent{
        let result = event.data;
        return {
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseWithdrawScomFromTrancheEvent(receipt: TransactionReceipt): Vault.WithdrawScomFromTrancheEvent[]{
        return this.parseEvents(receipt, "WithdrawScomFromTranche").map(e=>this.decodeWithdrawScomFromTrancheEvent(e));
    }
    decodeWithdrawScomFromTrancheEvent(event: Event): Vault.WithdrawScomFromTrancheEvent{
        let result = event.data;
        return {
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    amm: {
        (options?: TransactionOptions): Promise<string>;
    }
    amountUsedInTranche: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    claim: {
        (params: IClaimParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IClaimParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
    }
    claimWithWETH: {
        (params: IClaimWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IClaimWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    currTotalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    decrementDecimal: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    endTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    foundation: {
        (options?: TransactionOptions): Promise<string>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    lastUnlockedAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    lastUpdate: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    lock: {
        (params: ILockParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ILockParams, options?: TransactionOptions) => Promise<void>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    newTranche: {
        (tranche:{startTime:number|BigNumber,limitedClaimEndTime:number|BigNumber,unlimitedClaimEndTime:number|BigNumber,amount:number|BigNumber,merkleRoot:string,ipfsCid:string}, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (tranche:{startTime:number|BigNumber,limitedClaimEndTime:number|BigNumber,unlimitedClaimEndTime:number|BigNumber,amount:number|BigNumber,merkleRoot:string,ipfsCid:string}, options?: TransactionOptions) => Promise<void>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    publicSwapWithWETH: {
        (params: IPublicSwapWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPublicSwapWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    releaseAndSwap: {
        (params: IReleaseAndSwapParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IReleaseAndSwapParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
    }
    releaseAndSwapWithWETH: {
        (params: IReleaseAndSwapWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IReleaseAndSwapWithWETHParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    releaseFromLocked: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    releaseFromUnlocked: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    releaseTranche: {
        (trancheIds:(number|BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trancheIds:(number|BigNumber)[], options?: TransactionOptions) => Promise<BigNumber>;
    }
    releasedAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    scom: {
        (options?: TransactionOptions): Promise<string>;
    }
    startTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    startingAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    swap: {
        (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: number|BigNumber|TransactionOptions) => Promise<{amountScom:BigNumber,to:string}>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    token0IsScom: {
        (options?: TransactionOptions): Promise<boolean>;
    }
    totalAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    totalSuppyAt: {
        (timestamp:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    trancheInfo: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{startTime:BigNumber,limitedClaimEndTime:BigNumber,unlimitedClaimEndTime:BigNumber,amount:BigNumber,merkleRoot:string,ipfsCid:string}>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    unlock: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<BigNumber>;
    }
    unlockedAmount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    updateReleaseSchdule: {
        (params: IUpdateReleaseSchduleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateReleaseSchduleParams, options?: TransactionOptions) => Promise<void>;
    }
    usedAllocation: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    weth: {
        (options?: TransactionOptions): Promise<string>;
    }
    withdrawScomFromRelease: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    withdrawScomFromTranche: {
        (params: IWithdrawScomFromTrancheParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawScomFromTrancheParams, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let amm_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('amm',[],options);
            return result;
        }
        this.amm = amm_call
        let amountUsedInTranche_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('amountUsedInTranche',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.amountUsedInTranche = amountUsedInTranche_call
        let currTotalSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('currTotalSupply',[],options);
            return new BigNumber(result);
        }
        this.currTotalSupply = currTotalSupply_call
        let decrementDecimal_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('decrementDecimal',[],options);
            return new BigNumber(result);
        }
        this.decrementDecimal = decrementDecimal_call
        let endTime_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('endTime',[],options);
            return new BigNumber(result);
        }
        this.endTime = endTime_call
        let foundation_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('foundation',[],options);
            return result;
        }
        this.foundation = foundation_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let lastUnlockedAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('lastUnlockedAmount',[],options);
            return new BigNumber(result);
        }
        this.lastUnlockedAmount = lastUnlockedAmount_call
        let lastUpdate_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('lastUpdate',[],options);
            return new BigNumber(result);
        }
        this.lastUpdate = lastUpdate_call
        let newOwner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newOwner',[],options);
            return result;
        }
        this.newOwner = newOwner_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let releasedAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('releasedAmount',[],options);
            return new BigNumber(result);
        }
        this.releasedAmount = releasedAmount_call
        let scom_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('scom',[],options);
            return result;
        }
        this.scom = scom_call
        let startTime_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('startTime',[],options);
            return new BigNumber(result);
        }
        this.startTime = startTime_call
        let startingAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('startingAmount',[],options);
            return new BigNumber(result);
        }
        this.startingAmount = startingAmount_call
        let token0IsScom_call = async (options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('token0IsScom',[],options);
            return result;
        }
        this.token0IsScom = token0IsScom_call
        let totalAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalAmount',[],options);
            return new BigNumber(result);
        }
        this.totalAmount = totalAmount_call
        let totalSuppyAt_call = async (timestamp:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSuppyAt',[this.wallet.utils.toString(timestamp)],options);
            return new BigNumber(result);
        }
        this.totalSuppyAt = totalSuppyAt_call
        let trancheInfo_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{startTime:BigNumber,limitedClaimEndTime:BigNumber,unlimitedClaimEndTime:BigNumber,amount:BigNumber,merkleRoot:string,ipfsCid:string}> => {
            let result = await this.call('trancheInfo',[this.wallet.utils.toString(param1)],options);
            return {
                startTime: new BigNumber(result.startTime),
                limitedClaimEndTime: new BigNumber(result.limitedClaimEndTime),
                unlimitedClaimEndTime: new BigNumber(result.unlimitedClaimEndTime),
                amount: new BigNumber(result.amount),
                merkleRoot: result.merkleRoot,
                ipfsCid: result.ipfsCid
            };
        }
        this.trancheInfo = trancheInfo_call
        let unlockedAmount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('unlockedAmount',[],options);
            return new BigNumber(result);
        }
        this.unlockedAmount = unlockedAmount_call
        let usedAllocation_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('usedAllocation',[this.wallet.utils.stringToBytes32(param1)],options);
            return new BigNumber(result);
        }
        this.usedAllocation = usedAllocation_call
        let weth_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('weth',[],options);
            return result;
        }
        this.weth = weth_call
        let claimParams = (params: IClaimParams) => [this.wallet.utils.toString(params.trancheId),params.to,this.wallet.utils.toString(params.allocation),this.wallet.utils.stringToBytes32(params.proof)];
        let claim_send = async (params: IClaimParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('claim',claimParams(params),options);
            return result;
        }
        let claim_call = async (params: IClaimParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('claim',claimParams(params),options);
            return new BigNumber(result);
        }
        this.claim = Object.assign(claim_send, {
            call:claim_call
        });
        let claimWithWETHParams = (params: IClaimWithWETHParams) => [this.wallet.utils.toString(params.trancheId),params.from,params.to,this.wallet.utils.toString(params.allocation),this.wallet.utils.stringToBytes32(params.proof)];
        let claimWithWETH_send = async (params: IClaimWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('claimWithWETH',claimWithWETHParams(params),options);
            return result;
        }
        let claimWithWETH_call = async (params: IClaimWithWETHParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('claimWithWETH',claimWithWETHParams(params),options);
            return new BigNumber(result);
        }
        this.claimWithWETH = Object.assign(claimWithWETH_send, {
            call:claimWithWETH_call
        });
        let deny_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user],options);
            return result;
        }
        let deny_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deny',[user],options);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let lockParams = (params: ILockParams) => [this.wallet.utils.toString(params.startTime),this.wallet.utils.toString(params.endTime),this.wallet.utils.toString(params.decrementDecimal)];
        let lock_send = async (params: ILockParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('lock',lockParams(params),options);
            return result;
        }
        let lock_call = async (params: ILockParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('lock',lockParams(params),options);
            return;
        }
        this.lock = Object.assign(lock_send, {
            call:lock_call
        });
        let newTranche_send = async (tranche:{startTime:number|BigNumber,limitedClaimEndTime:number|BigNumber,unlimitedClaimEndTime:number|BigNumber,amount:number|BigNumber,merkleRoot:string,ipfsCid:string}, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newTranche',[[this.wallet.utils.toString(tranche.startTime),this.wallet.utils.toString(tranche.limitedClaimEndTime),this.wallet.utils.toString(tranche.unlimitedClaimEndTime),this.wallet.utils.toString(tranche.amount),this.wallet.utils.stringToBytes32(tranche.merkleRoot),this.wallet.utils.stringToBytes(tranche.ipfsCid)]],options);
            return result;
        }
        let newTranche_call = async (tranche:{startTime:number|BigNumber,limitedClaimEndTime:number|BigNumber,unlimitedClaimEndTime:number|BigNumber,amount:number|BigNumber,merkleRoot:string,ipfsCid:string}, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('newTranche',[[this.wallet.utils.toString(tranche.startTime),this.wallet.utils.toString(tranche.limitedClaimEndTime),this.wallet.utils.toString(tranche.unlimitedClaimEndTime),this.wallet.utils.toString(tranche.amount),this.wallet.utils.stringToBytes32(tranche.merkleRoot),this.wallet.utils.stringToBytes(tranche.ipfsCid)]],options);
            return;
        }
        this.newTranche = Object.assign(newTranche_send, {
            call:newTranche_call
        });
        let permit_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user],options);
            return result;
        }
        let permit_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('permit',[user],options);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let publicSwapWithWETHParams = (params: IPublicSwapWithWETHParams) => [params.from,params.to];
        let publicSwapWithWETH_send = async (params: IPublicSwapWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('publicSwapWithWETH',publicSwapWithWETHParams(params),options);
            return result;
        }
        let publicSwapWithWETH_call = async (params: IPublicSwapWithWETHParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('publicSwapWithWETH',publicSwapWithWETHParams(params),options);
            return new BigNumber(result);
        }
        this.publicSwapWithWETH = Object.assign(publicSwapWithWETH_send, {
            call:publicSwapWithWETH_call
        });
        let releaseAndSwapParams = (params: IReleaseAndSwapParams) => [this.wallet.utils.toString(params.trancheIds),params.to];
        let releaseAndSwap_send = async (params: IReleaseAndSwapParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('releaseAndSwap',releaseAndSwapParams(params),options);
            return result;
        }
        let releaseAndSwap_call = async (params: IReleaseAndSwapParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('releaseAndSwap',releaseAndSwapParams(params),options);
            return new BigNumber(result);
        }
        this.releaseAndSwap = Object.assign(releaseAndSwap_send, {
            call:releaseAndSwap_call
        });
        let releaseAndSwapWithWETHParams = (params: IReleaseAndSwapWithWETHParams) => [this.wallet.utils.toString(params.trancheIds),params.from,params.to];
        let releaseAndSwapWithWETH_send = async (params: IReleaseAndSwapWithWETHParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('releaseAndSwapWithWETH',releaseAndSwapWithWETHParams(params),options);
            return result;
        }
        let releaseAndSwapWithWETH_call = async (params: IReleaseAndSwapWithWETHParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('releaseAndSwapWithWETH',releaseAndSwapWithWETHParams(params),options);
            return new BigNumber(result);
        }
        this.releaseAndSwapWithWETH = Object.assign(releaseAndSwapWithWETH_send, {
            call:releaseAndSwapWithWETH_call
        });
        let releaseFromLocked_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('releaseFromLocked',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let releaseFromLocked_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('releaseFromLocked',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.releaseFromLocked = Object.assign(releaseFromLocked_send, {
            call:releaseFromLocked_call
        });
        let releaseFromUnlocked_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('releaseFromUnlocked',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let releaseFromUnlocked_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('releaseFromUnlocked',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.releaseFromUnlocked = Object.assign(releaseFromUnlocked_send, {
            call:releaseFromUnlocked_call
        });
        let releaseTranche_send = async (trancheIds:(number|BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('releaseTranche',[this.wallet.utils.toString(trancheIds)],options);
            return result;
        }
        let releaseTranche_call = async (trancheIds:(number|BigNumber)[], options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('releaseTranche',[this.wallet.utils.toString(trancheIds)],options);
            return new BigNumber(result);
        }
        this.releaseTranche = Object.assign(releaseTranche_send, {
            call:releaseTranche_call
        });
        let swap_send = async (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swap',[],options);
            return result;
        }
        let swap_call = async (options?: number|BigNumber|TransactionOptions): Promise<{amountScom:BigNumber,to:string}> => {
            let result = await this.call('swap',[],options);
            return {
                amountScom: new BigNumber(result.amountScom),
                to: result.to
            };
        }
        this.swap = Object.assign(swap_send, {
            call:swap_call
        });
        let takeOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership',[],options);
            return result;
        }
        let takeOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('takeOwnership',[],options);
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferOwnership_send = async (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner],options);
            return result;
        }
        let transferOwnership_call = async (newOwner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner],options);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let unlock_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unlock',[],options);
            return result;
        }
        let unlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('unlock',[],options);
            return new BigNumber(result);
        }
        this.unlock = Object.assign(unlock_send, {
            call:unlock_call
        });
        let updateReleaseSchduleParams = (params: IUpdateReleaseSchduleParams) => [this.wallet.utils.toString(params.endTime),this.wallet.utils.toString(params.startingAmount),this.wallet.utils.toString(params.decrementDecimal)];
        let updateReleaseSchdule_send = async (params: IUpdateReleaseSchduleParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateReleaseSchdule',updateReleaseSchduleParams(params),options);
            return result;
        }
        let updateReleaseSchdule_call = async (params: IUpdateReleaseSchduleParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateReleaseSchdule',updateReleaseSchduleParams(params),options);
            return;
        }
        this.updateReleaseSchdule = Object.assign(updateReleaseSchdule_send, {
            call:updateReleaseSchdule_call
        });
        let withdrawScomFromRelease_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdrawScomFromRelease',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let withdrawScomFromRelease_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('withdrawScomFromRelease',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.withdrawScomFromRelease = Object.assign(withdrawScomFromRelease_send, {
            call:withdrawScomFromRelease_call
        });
        let withdrawScomFromTrancheParams = (params: IWithdrawScomFromTrancheParams) => [this.wallet.utils.toString(params.trancheIds),this.wallet.utils.toString(params.amountScom)];
        let withdrawScomFromTranche_send = async (params: IWithdrawScomFromTrancheParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdrawScomFromTranche',withdrawScomFromTrancheParams(params),options);
            return result;
        }
        let withdrawScomFromTranche_call = async (params: IWithdrawScomFromTrancheParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('withdrawScomFromTranche',withdrawScomFromTrancheParams(params),options);
            return;
        }
        this.withdrawScomFromTranche = Object.assign(withdrawScomFromTranche_send, {
            call:withdrawScomFromTranche_call
        });
    }
}
export module Vault{
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface ClaimEvent {trancheId:BigNumber,from:string,to:string,amountScom:BigNumber,amountEth:BigNumber,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface LockEvent {start:BigNumber,end:BigNumber,rate:BigNumber,initAmount:BigNumber,_event:Event}
    export interface NewTrancheEvent {trancheId:BigNumber,_event:Event}
    export interface ReleaseEvent {amount:BigNumber,balance:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface SwapEvent {from:string,to:string,amountScom:BigNumber,amountEth:BigNumber,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnlockEvent {unlock:BigNumber,available:BigNumber,balance:BigNumber,_event:Event}
    export interface WithdrawScomFromReleaseEvent {amount:BigNumber,_event:Event}
    export interface WithdrawScomFromTrancheEvent {amount:BigNumber,_event:Event}
}