// src/contract.ts
import { Store } from "@subsquid/typeorm-store";
import { ethers } from "ethers";
import * as factory from "./abi/factory";

export const CHAIN_NODE = "wss://astar.public.blastapi.io";

export const factoryAddress = "0x7Fcd5370be47cEC0FC0a7Fe91230432dd34DdeA1".toLowerCase();
export const POOL_TEMPLATE_ADDRESS = "0x0074976043140a371aeaD31189C2BE459950c816".toLowerCase();
export const INDEX_TEMPLATE_ADDRESS = "0x734afd33dFB5100Ee91EFE690526DfFdEdBE0cF4".toLowerCase();
export const CDS_TEMPLATE_ADDRESS = "0xf4dB9926aE02469D730A25AD7422764BBD45d36F".toLowerCase();
export const REGISTRY_ADDRESS = "0xd0Df5A352D74A746754C592a6277c9060A7c9c87".toLowerCase();

export const contract = new ethers.Contract(
  factoryAddress,
  factory.abi,
  new ethers.providers.WebSocketProvider(CHAIN_NODE)
);
