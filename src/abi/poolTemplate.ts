import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export interface Approval0Event {
  owner: string;
  spender: string;
  value: ethers.BigNumber;
}

export interface CoverApplied0Event {
  pending: ethers.BigNumber;
  payoutNumerator: ethers.BigNumber;
  payoutDenominator: ethers.BigNumber;
  incidentTimestamp: ethers.BigNumber;
  merkleRoot: string;
  rawdata: string;
  memo: string;
}

export interface CreditDecrease0Event {
  withdrawer: string;
  credit: ethers.BigNumber;
}

export interface CreditIncrease0Event {
  depositor: string;
  credit: ethers.BigNumber;
}

export interface Deposit0Event {
  depositor: string;
  amount: ethers.BigNumber;
  mint: ethers.BigNumber;
}

export interface Insured0Event {
  id: ethers.BigNumber;
  amount: ethers.BigNumber;
  target: string;
  startTime: ethers.BigNumber;
  endTime: ethers.BigNumber;
  insured: string;
  agent: string;
  premium: ethers.BigNumber;
}

export interface MarketStatusChanged0Event {
  statusValue: number;
}

export interface MetadataChanged0Event {
  metadata: string;
}

export interface Paused0Event {
  paused: boolean;
}

export interface Redeemed0Event {
  id: ethers.BigNumber;
  insured: string;
  target: string;
  amount: ethers.BigNumber;
  payout: ethers.BigNumber;
}

export interface Transfer0Event {
  from: string;
  to: string;
  value: ethers.BigNumber;
}

export interface Unlocked0Event {
  id: ethers.BigNumber;
  amount: ethers.BigNumber;
}

export interface Withdraw0Event {
  withdrawer: string;
  amount: ethers.BigNumber;
  retVal: ethers.BigNumber;
}

export interface WithdrawRequested0Event {
  withdrawer: string;
  amount: ethers.BigNumber;
  unlockTime: ethers.BigNumber;
}

export interface EvmEvent {
  data: string;
  topics: string[];
}

export const events = {
  "Approval(address,address,uint256)": {
    topic: abi.getEventTopic("Approval(address,address,uint256)"),
    decode(data: EvmEvent): Approval0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("Approval(address,address,uint256)"),
        data.data || "",
        data.topics
      );
      return {
        owner: result[0],
        spender: result[1],
        value: result[2],
      };
    },
  },
  "CoverApplied(uint256,uint256,uint256,uint256,bytes32,string,string)": {
    topic: abi.getEventTopic("CoverApplied(uint256,uint256,uint256,uint256,bytes32,string,string)"),
    decode(data: EvmEvent): CoverApplied0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("CoverApplied(uint256,uint256,uint256,uint256,bytes32,string,string)"),
        data.data || "",
        data.topics
      );
      return {
        pending: result[0],
        payoutNumerator: result[1],
        payoutDenominator: result[2],
        incidentTimestamp: result[3],
        merkleRoot: result[4],
        rawdata: result[5],
        memo: result[6],
      };
    },
  },
  "CreditDecrease(address,uint256)": {
    topic: abi.getEventTopic("CreditDecrease(address,uint256)"),
    decode(data: EvmEvent): CreditDecrease0Event {
      const result = abi.decodeEventLog(abi.getEvent("CreditDecrease(address,uint256)"), data.data || "", data.topics);
      return {
        withdrawer: result[0],
        credit: result[1],
      };
    },
  },
  "CreditIncrease(address,uint256)": {
    topic: abi.getEventTopic("CreditIncrease(address,uint256)"),
    decode(data: EvmEvent): CreditIncrease0Event {
      const result = abi.decodeEventLog(abi.getEvent("CreditIncrease(address,uint256)"), data.data || "", data.topics);
      return {
        depositor: result[0],
        credit: result[1],
      };
    },
  },
  "Deposit(address,uint256,uint256)": {
    topic: abi.getEventTopic("Deposit(address,uint256,uint256)"),
    decode(data: EvmEvent): Deposit0Event {
      const result = abi.decodeEventLog(abi.getEvent("Deposit(address,uint256,uint256)"), data.data || "", data.topics);
      return {
        depositor: result[0],
        amount: result[1],
        mint: result[2],
      };
    },
  },
  "Insured(uint256,uint256,bytes32,uint256,uint256,address,address,uint256)": {
    topic: abi.getEventTopic("Insured(uint256,uint256,bytes32,uint256,uint256,address,address,uint256)"),
    decode(data: EvmEvent): Insured0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("Insured(uint256,uint256,bytes32,uint256,uint256,address,address,uint256)"),
        data.data || "",
        data.topics
      );
      return {
        id: result[0],
        amount: result[1],
        target: result[2],
        startTime: result[3],
        endTime: result[4],
        insured: result[5],
        agent: result[6],
        premium: result[7],
      };
    },
  },
  "MarketStatusChanged(uint8)": {
    topic: abi.getEventTopic("MarketStatusChanged(uint8)"),
    decode(data: EvmEvent): MarketStatusChanged0Event {
      const result = abi.decodeEventLog(abi.getEvent("MarketStatusChanged(uint8)"), data.data || "", data.topics);
      return {
        statusValue: result[0],
      };
    },
  },
  "MetadataChanged(string)": {
    topic: abi.getEventTopic("MetadataChanged(string)"),
    decode(data: EvmEvent): MetadataChanged0Event {
      const result = abi.decodeEventLog(abi.getEvent("MetadataChanged(string)"), data.data || "", data.topics);
      return {
        metadata: result[0],
      };
    },
  },
  "Paused(bool)": {
    topic: abi.getEventTopic("Paused(bool)"),
    decode(data: EvmEvent): Paused0Event {
      const result = abi.decodeEventLog(abi.getEvent("Paused(bool)"), data.data || "", data.topics);
      return {
        paused: result[0],
      };
    },
  },
  "Redeemed(uint256,address,bytes32,uint256,uint256)": {
    topic: abi.getEventTopic("Redeemed(uint256,address,bytes32,uint256,uint256)"),
    decode(data: EvmEvent): Redeemed0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("Redeemed(uint256,address,bytes32,uint256,uint256)"),
        data.data || "",
        data.topics
      );
      return {
        id: result[0],
        insured: result[1],
        target: result[2],
        amount: result[3],
        payout: result[4],
      };
    },
  },
  "Transfer(address,address,uint256)": {
    topic: abi.getEventTopic("Transfer(address,address,uint256)"),
    decode(data: EvmEvent): Transfer0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("Transfer(address,address,uint256)"),
        data.data || "",
        data.topics
      );
      return {
        from: result[0],
        to: result[1],
        value: result[2],
      };
    },
  },
  "Unlocked(uint256,uint256)": {
    topic: abi.getEventTopic("Unlocked(uint256,uint256)"),
    decode(data: EvmEvent): Unlocked0Event {
      const result = abi.decodeEventLog(abi.getEvent("Unlocked(uint256,uint256)"), data.data || "", data.topics);
      return {
        id: result[0],
        amount: result[1],
      };
    },
  },
  "Withdraw(address,uint256,uint256)": {
    topic: abi.getEventTopic("Withdraw(address,uint256,uint256)"),
    decode(data: EvmEvent): Withdraw0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("Withdraw(address,uint256,uint256)"),
        data.data || "",
        data.topics
      );
      return {
        withdrawer: result[0],
        amount: result[1],
        retVal: result[2],
      };
    },
  },
  "WithdrawRequested(address,uint256,uint256)": {
    topic: abi.getEventTopic("WithdrawRequested(address,uint256,uint256)"),
    decode(data: EvmEvent): WithdrawRequested0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("WithdrawRequested(address,uint256,uint256)"),
        data.data || "",
        data.topics
      );
      return {
        withdrawer: result[0],
        amount: result[1],
        unlockTime: result[2],
      };
    },
  },
};

interface ChainContext {
  _chain: Chain;
}

interface BlockContext {
  _chain: Chain;
  block: Block;
}

interface Block {
  height: number;
}

interface Chain {
  client: {
    call: <T = any>(method: string, params?: unknown[]) => Promise<T>;
  };
}

export class Contract {
  private readonly _chain: Chain;
  private readonly blockHeight: number;
  readonly address: string;

  constructor(ctx: BlockContext, address: string);
  constructor(ctx: ChainContext, block: Block, address: string);
  constructor(ctx: BlockContext, blockOrAddress: Block | string, address?: string) {
    this._chain = ctx._chain;
    if (typeof blockOrAddress === "string") {
      this.blockHeight = ctx.block.height;
      this.address = ethers.utils.getAddress(blockOrAddress);
    } else {
      assert(address != null);
      this.blockHeight = blockOrAddress.height;
      this.address = ethers.utils.getAddress(address);
    }
  }

  private async call(name: string, args: any[]): Promise<ReadonlyArray<any>> {
    const fragment = abi.getFunction(name);
    const data = abi.encodeFunctionData(fragment, args);
    const result = await this._chain.client.call("eth_call", [{ to: this.address, data }, this.blockHeight]);
    return abi.decodeFunctionResult(fragment, result);
  }

  async allInsuranceCount(): Promise<ethers.BigNumber> {
    const result = await this.call("allInsuranceCount", []);
    return result[0];
  }

  async allowance(owner: string, spender: string): Promise<ethers.BigNumber> {
    const result = await this.call("allowance", [owner, spender]);
    return result[0];
  }

  async attributionDebt(): Promise<ethers.BigNumber> {
    const result = await this.call("attributionDebt", []);
    return result[0];
  }

  async availableBalance(): Promise<ethers.BigNumber> {
    const result = await this.call("availableBalance", []);
    return result[0];
  }

  async balanceOf(account: string): Promise<ethers.BigNumber> {
    const result = await this.call("balanceOf", [account]);
    return result[0];
  }

  async decimals(): Promise<number> {
    const result = await this.call("decimals", []);
    return result[0];
  }

  async getPremium(_amount: ethers.BigNumber, _span: ethers.BigNumber): Promise<ethers.BigNumber> {
    const result = await this.call("getPremium", [_amount, _span]);
    return result[0];
  }

  async incident(): Promise<{
    payoutNumerator: ethers.BigNumber;
    payoutDenominator: ethers.BigNumber;
    incidentTimestamp: ethers.BigNumber;
    merkleRoot: string;
  }> {
    const result = await this.call("incident", []);
    return {
      payoutNumerator: result[0],
      payoutDenominator: result[1],
      incidentTimestamp: result[2],
      merkleRoot: result[3],
    };
  }

  async indexList(a: ethers.BigNumber): Promise<string> {
    const result = await this.call("indexList", [a]);
    return result[0];
  }

  async indicies(
    a: string
  ): Promise<{ credit: ethers.BigNumber; rewardDebt: ethers.BigNumber; index: ethers.BigNumber; exist: boolean }> {
    const result = await this.call("indicies", [a]);
    return {
      credit: result[0],
      rewardDebt: result[1],
      index: result[2],
      exist: result[3],
    };
  }

  async initialized(): Promise<boolean> {
    const result = await this.call("initialized", []);
    return result[0];
  }

  async insurances(
    a: ethers.BigNumber
  ): Promise<{
    id: ethers.BigNumber;
    startTime: number;
    endTime: number;
    amount: ethers.BigNumber;
    target: string;
    insured: string;
    agent: string;
    status: boolean;
  }> {
    const result = await this.call("insurances", [a]);
    return {
      id: result[0],
      startTime: result[1],
      endTime: result[2],
      amount: result[3],
      target: result[4],
      insured: result[5],
      agent: result[6],
      status: result[7],
    };
  }

  async lockedAmount(): Promise<ethers.BigNumber> {
    const result = await this.call("lockedAmount", []);
    return result[0];
  }

  async marketStatus(): Promise<number> {
    const result = await this.call("marketStatus", []);
    return result[0];
  }

  async metadata(): Promise<string> {
    const result = await this.call("metadata", []);
    return result[0];
  }

  async name(): Promise<string> {
    const result = await this.call("name", []);
    return result[0];
  }

  async originalLiquidity(): Promise<ethers.BigNumber> {
    const result = await this.call("originalLiquidity", []);
    return result[0];
  }

  async pairValues(_index: string): Promise<{ a: ethers.BigNumber; b: ethers.BigNumber }> {
    const result = await this.call("pairValues", [_index]);
    return {
      a: result[0],
      b: result[1],
    };
  }

  async parameters(): Promise<string> {
    const result = await this.call("parameters", []);
    return result[0];
  }

  async paused(): Promise<boolean> {
    const result = await this.call("paused", []);
    return result[0];
  }

  async pendingEnd(): Promise<ethers.BigNumber> {
    const result = await this.call("pendingEnd", []);
    return result[0];
  }

  async pendingPremium(_index: string): Promise<ethers.BigNumber> {
    const result = await this.call("pendingPremium", [_index]);
    return result[0];
  }

  async rate(): Promise<ethers.BigNumber> {
    const result = await this.call("rate", []);
    return result[0];
  }

  async registry(): Promise<string> {
    const result = await this.call("registry", []);
    return result[0];
  }

  async rewardPerCredit(): Promise<ethers.BigNumber> {
    const result = await this.call("rewardPerCredit", []);
    return result[0];
  }

  async symbol(): Promise<string> {
    const result = await this.call("symbol", []);
    return result[0];
  }

  async totalCredit(): Promise<ethers.BigNumber> {
    const result = await this.call("totalCredit", []);
    return result[0];
  }

  async totalLiquidity(): Promise<ethers.BigNumber> {
    const result = await this.call("totalLiquidity", []);
    return result[0];
  }

  async totalSupply(): Promise<ethers.BigNumber> {
    const result = await this.call("totalSupply", []);
    return result[0];
  }

  async utilizationRate(): Promise<ethers.BigNumber> {
    const result = await this.call("utilizationRate", []);
    return result[0];
  }

  async valueOfUnderlying(_owner: string): Promise<ethers.BigNumber> {
    const result = await this.call("valueOfUnderlying", [_owner]);
    return result[0];
  }

  async vault(): Promise<string> {
    const result = await this.call("vault", []);
    return result[0];
  }

  async withdrawalReq(a: string): Promise<{ timestamp: ethers.BigNumber; amount: ethers.BigNumber }> {
    const result = await this.call("withdrawalReq", [a]);
    return {
      timestamp: result[0],
      amount: result[1],
    };
  }

  async worth(_value: ethers.BigNumber): Promise<ethers.BigNumber> {
    const result = await this.call("worth", [_value]);
    return result[0];
  }
}

function getJsonAbi(): any {
  return [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "pending",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "payoutNumerator",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "payoutDenominator",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "incidentTimestamp",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "merkleRoot",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "string",
          name: "rawdata",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "memo",
          type: "string",
        },
      ],
      name: "CoverApplied",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "withdrawer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "credit",
          type: "uint256",
        },
      ],
      name: "CreditDecrease",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "depositor",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "credit",
          type: "uint256",
        },
      ],
      name: "CreditIncrease",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "depositor",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "mint",
          type: "uint256",
        },
      ],
      name: "Deposit",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "target",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "startTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "endTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "insured",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "agent",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "premium",
          type: "uint256",
        },
      ],
      name: "Insured",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "enum IPoolTemplate.MarketStatus",
          name: "statusValue",
          type: "uint8",
        },
      ],
      name: "MarketStatusChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "metadata",
          type: "string",
        },
      ],
      name: "MetadataChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bool",
          name: "paused",
          type: "bool",
        },
      ],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "insured",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "target",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "payout",
          type: "uint256",
        },
      ],
      name: "Redeemed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Unlocked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "withdrawer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "retVal",
          type: "uint256",
        },
      ],
      name: "Withdraw",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "withdrawer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "unlockTime",
          type: "uint256",
        },
      ],
      name: "WithdrawRequested",
      type: "event",
    },
    {
      inputs: [],
      name: "allInsuranceCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_credit",
          type: "uint256",
        },
      ],
      name: "allocateCredit",
      outputs: [
        {
          internalType: "uint256",
          name: "_pending",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_pending",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_payoutNumerator",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_payoutDenominator",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_incidentTimestamp",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "_merkleRoot",
          type: "bytes32",
        },
        {
          internalType: "string",
          name: "_rawdata",
          type: "string",
        },
        {
          internalType: "string",
          name: "_memo",
          type: "string",
        },
      ],
      name: "applyCover",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "attributionDebt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "availableBalance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_metadata",
          type: "string",
        },
      ],
      name: "changeMetadata",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256",
        },
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "deposit",
      outputs: [
        {
          internalType: "uint256",
          name: "_mintAmount",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_span",
          type: "uint256",
        },
      ],
      name: "getPremium",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "incident",
      outputs: [
        {
          internalType: "uint256",
          name: "payoutNumerator",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "payoutDenominator",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "incidentTimestamp",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "merkleRoot",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256",
        },
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "indexList",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "indicies",
      outputs: [
        {
          internalType: "uint256",
          name: "credit",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "rewardDebt",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "exist",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_depositor",
          type: "address",
        },
        {
          internalType: "string",
          name: "_metaData",
          type: "string",
        },
        {
          internalType: "uint256[]",
          name: "_conditions",
          type: "uint256[]",
        },
        {
          internalType: "address[]",
          name: "_references",
          type: "address[]",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "initialized",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "insurances",
      outputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint48",
          name: "startTime",
          type: "uint48",
        },
        {
          internalType: "uint48",
          name: "endTime",
          type: "uint48",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "target",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "insured",
          type: "address",
        },
        {
          internalType: "address",
          name: "agent",
          type: "address",
        },
        {
          internalType: "bool",
          name: "status",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_maxCost",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_span",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "_target",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_for",
          type: "address",
        },
        {
          internalType: "address",
          name: "_agent",
          type: "address",
        },
      ],
      name: "insure",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "lockedAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "marketStatus",
      outputs: [
        {
          internalType: "enum IPoolTemplate.MarketStatus",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "metadata",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "originalLiquidity",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_index",
          type: "address",
        },
      ],
      name: "pairValues",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "parameters",
      outputs: [
        {
          internalType: "contract IParameters",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pendingEnd",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_index",
          type: "address",
        },
      ],
      name: "pendingPremium",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
        {
          internalType: "bytes32[]",
          name: "_merkleProof",
          type: "bytes32[]",
        },
      ],
      name: "redeem",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_index",
          type: "uint256",
        },
      ],
      name: "registerIndex",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "registry",
      outputs: [
        {
          internalType: "contract IRegistry",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "requestWithdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "resume",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "rewardPerCredit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "_state",
          type: "bool",
        },
      ],
      name: "setPaused",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalCredit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalLiquidity",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "unlock",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256[]",
          name: "_ids",
          type: "uint256[]",
        },
      ],
      name: "unlockBatch",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "utilizationRate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
      ],
      name: "valueOfUnderlying",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "vault",
      outputs: [
        {
          internalType: "contract IVault",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "withdraw",
      outputs: [
        {
          internalType: "uint256",
          name: "_retVal",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_credit",
          type: "uint256",
        },
      ],
      name: "withdrawCredit",
      outputs: [
        {
          internalType: "uint256",
          name: "_pending",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "withdrawalReq",
      outputs: [
        {
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_value",
          type: "uint256",
        },
      ],
      name: "worth",
      outputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
}
