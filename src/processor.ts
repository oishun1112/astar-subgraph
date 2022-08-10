// src/processor.ts
import { lookupArchive } from "@subsquid/archive-registry";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import {
  BatchContext,
  BatchProcessorItem,
  EvmLogEvent,
  SubstrateBatchProcessor,
  SubstrateBlock,
  toHex,
} from "@subsquid/substrate-processor";
import { In } from "typeorm";
import { CHAIN_NODE, contract, factoryAddress, POOL_TEMPLATE_ADDRESS } from "./contract";
import { Market } from "./model";
import * as factory from "./abi/factory";

const FACTORY_EVENTS = {
  marketCreated: factory.events["MarketCreated(address,address,string,uint256[],address[])"],
};

const encoder = new TextEncoder();

const database = new TypeormDatabase();
const processor = new SubstrateBatchProcessor()
  .setBatchSize(500)
  .setBlockRange({ from: 963605 })
  .setDataSource({
    chain: CHAIN_NODE,
    archive: lookupArchive("astar", { release: "FireSquid" }),
  })
  .setTypesBundle("astar")
  .addEvmLog(factoryAddress, {
    filter: [Object.values(FACTORY_EVENTS).map((event) => event.topic)],
  });

type Item = BatchProcessorItem<typeof processor>;
type Context = BatchContext<Store, Item>;

type EvmLogEventWithTimestamp = EvmLogEvent & { timestamp: number };

processor.run(database, async (ctx) => {
  const factoryEvent: EvmLogEventWithTimestamp[] = [];

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === "EVM.Log") {
        const topic = item.event.args.topics[0];

        if (
          Object.values(FACTORY_EVENTS)
            .map((event) => event.topic)
            .includes(topic)
        ) {
          factoryEvent.push({ ...item.event, timestamp: block.header.timestamp });
        }
      }
    }
  }

  await saveEntities(ctx, factoryEvent);
});

const getMarketCreated = (topic: string) => {
  return [FACTORY_EVENTS.marketCreated].find((marketCreatedTopics) => marketCreatedTopics.topic === topic);
};

const saveEntities = async (ctx: Context, factoryEvents: EvmLogEventWithTimestamp[]) => {
  for (const factoryEvent of factoryEvents) {
    await handleNewMarket(ctx, factoryEvent);
  }
};

const handleNewMarket = async (ctx: Context, event: EvmLogEventWithTimestamp) => {
  const topic = event.args.topics[0];
  const marketCreatedEventMatch = getMarketCreated(topic);
  const pools: Market[] = [];

  if (marketCreatedEventMatch) {
    const marketCreatedEvent = marketCreatedEventMatch.decode(event.args);
    const { market, template, conditions, references } = marketCreatedEvent;

    if (template.toLowerCase() === POOL_TEMPLATE_ADDRESS.toLowerCase()) {
      const pool = new Market({
        id: market,
        template: encoder.encode(template),
        created: BigInt(event.timestamp),
      });

      pools.push(pool);
    }
  }

  await ctx.store.save(pools);
};
