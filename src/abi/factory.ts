import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export interface CommitNewAdmin0Event {
  deadline: ethers.BigNumber;
  future_admin: string;
}

export interface ConditionApproval0Event {
  template: string;
  slot: ethers.BigNumber;
  target: ethers.BigNumber;
}

export interface MarketCreated0Event {
  market: string;
  template: string;
  _metaData: string;
  conditions: Array<ethers.BigNumber>;
  references: Array<string>;
}

export interface NewAdmin0Event {
  admin: string;
}

export interface ReferenceApproval0Event {
  template: string;
  slot: ethers.BigNumber;
  target: string;
  approval: boolean;
}

export interface TemplateApproval0Event {
  template: string;
  approval: boolean;
  isOpen: boolean;
  duplicate: boolean;
}

export interface EvmEvent {
  data: string;
  topics: string[];
}

export const events = {
  "CommitNewAdmin(uint256,address)": {
    topic: abi.getEventTopic("CommitNewAdmin(uint256,address)"),
    decode(data: EvmEvent): CommitNewAdmin0Event {
      const result = abi.decodeEventLog(abi.getEvent("CommitNewAdmin(uint256,address)"), data.data || "", data.topics);
      return {
        deadline: result[0],
        future_admin: result[1],
      };
    },
  },
  "ConditionApproval(address,uint256,uint256)": {
    topic: abi.getEventTopic("ConditionApproval(address,uint256,uint256)"),
    decode(data: EvmEvent): ConditionApproval0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ConditionApproval(address,uint256,uint256)"),
        data.data || "",
        data.topics
      );
      return {
        template: result[0],
        slot: result[1],
        target: result[2],
      };
    },
  },
  "MarketCreated(address,address,string,uint256[],address[])": {
    topic: abi.getEventTopic("MarketCreated(address,address,string,uint256[],address[])"),
    decode(data: EvmEvent): MarketCreated0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("MarketCreated(address,address,string,uint256[],address[])"),
        data.data || "",
        data.topics
      );
      return {
        market: result[0],
        template: result[1],
        _metaData: result[2],
        conditions: result[3],
        references: result[4],
      };
    },
  },
  "NewAdmin(address)": {
    topic: abi.getEventTopic("NewAdmin(address)"),
    decode(data: EvmEvent): NewAdmin0Event {
      const result = abi.decodeEventLog(abi.getEvent("NewAdmin(address)"), data.data || "", data.topics);
      return {
        admin: result[0],
      };
    },
  },
  "ReferenceApproval(address,uint256,address,bool)": {
    topic: abi.getEventTopic("ReferenceApproval(address,uint256,address,bool)"),
    decode(data: EvmEvent): ReferenceApproval0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ReferenceApproval(address,uint256,address,bool)"),
        data.data || "",
        data.topics
      );
      return {
        template: result[0],
        slot: result[1],
        target: result[2],
        approval: result[3],
      };
    },
  },
  "TemplateApproval(address,bool,bool,bool)": {
    topic: abi.getEventTopic("TemplateApproval(address,bool,bool,bool)"),
    decode(data: EvmEvent): TemplateApproval0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("TemplateApproval(address,bool,bool,bool)"),
        data.data || "",
        data.topics
      );
      return {
        template: result[0],
        approval: result[1],
        isOpen: result[2],
        duplicate: result[3],
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

  async ADMIN_ACTIONS_DELAY(): Promise<ethers.BigNumber> {
    const result = await this.call("ADMIN_ACTIONS_DELAY", []);
    return result[0];
  }

  async conditionlist(a: string, b: ethers.BigNumber): Promise<ethers.BigNumber> {
    const result = await this.call("conditionlist", [a, b]);
    return result[0];
  }

  async future_owner(): Promise<string> {
    const result = await this.call("future_owner", []);
    return result[0];
  }

  async markets(a: ethers.BigNumber): Promise<string> {
    const result = await this.call("markets", [a]);
    return result[0];
  }

  async owner(): Promise<string> {
    const result = await this.call("owner", []);
    return result[0];
  }

  async reflist(a: string, b: ethers.BigNumber, c: string): Promise<boolean> {
    const result = await this.call("reflist", [a, b, c]);
    return result[0];
  }

  async registry(): Promise<string> {
    const result = await this.call("registry", []);
    return result[0];
  }

  async templates(a: string): Promise<{ isOpen: boolean; approval: boolean; allowDuplicate: boolean }> {
    const result = await this.call("templates", [a]);
    return {
      isOpen: result[0],
      approval: result[1],
      allowDuplicate: result[2],
    };
  }

  async transfer_ownership_deadline(): Promise<ethers.BigNumber> {
    const result = await this.call("transfer_ownership_deadline", []);
    return result[0];
  }
}

function getJsonAbi(): any {
  return [
    {
      inputs: [
        {
          internalType: "address",
          name: "_registry",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "future_admin",
          type: "address",
        },
      ],
      name: "CommitNewAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "contract IUniversalMarket",
          name: "template",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "slot",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "target",
          type: "uint256",
        },
      ],
      name: "ConditionApproval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "market",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "template",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "_metaData",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "conditions",
          type: "uint256[]",
        },
        {
          indexed: false,
          internalType: "address[]",
          name: "references",
          type: "address[]",
        },
      ],
      name: "MarketCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "admin",
          type: "address",
        },
      ],
      name: "NewAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "contract IUniversalMarket",
          name: "template",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "slot",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "target",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approval",
          type: "bool",
        },
      ],
      name: "ReferenceApproval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "contract IUniversalMarket",
          name: "template",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approval",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "isOpen",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "duplicate",
          type: "bool",
        },
      ],
      name: "TemplateApproval",
      type: "event",
    },
    {
      inputs: [],
      name: "ADMIN_ACTIONS_DELAY",
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
      name: "applyTransferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IUniversalMarket",
          name: "_template",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_slot",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_target",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_approval",
          type: "bool",
        },
      ],
      name: "approveReference",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IUniversalMarket",
          name: "_template",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_approval",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "_isOpen",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "_duplicate",
          type: "bool",
        },
      ],
      name: "approveTemplate",
      outputs: [],
      stateMutability: "nonpayable",
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
      name: "commitTransferOwnership",
      outputs: [],
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
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "conditionlist",
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
          internalType: "contract IUniversalMarket",
          name: "_template",
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
      name: "createMarket",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "future_owner",
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
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "markets",
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
      inputs: [],
      name: "owner",
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
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "reflist",
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
      name: "registry",
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
          internalType: "contract IUniversalMarket",
          name: "_template",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_slot",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_target",
          type: "uint256",
        },
      ],
      name: "setCondition",
      outputs: [],
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
      name: "templates",
      outputs: [
        {
          internalType: "bool",
          name: "isOpen",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "approval",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "allowDuplicate",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "transfer_ownership_deadline",
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
  ];
}
