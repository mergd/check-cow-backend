import type { Config } from "@ponder/core";
import { http } from "viem";

export const config: Config = {
  networks: [
    {
      name: "mainnet",
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  ],
  contracts: [
    {
      name: "GPv2Settlement",
      network: "mainnet",
      abi: "./abis/GPv2Settlement.json",
      address: "0x9008d19f58aabd9ed0d60971565aa8510560ab41",
      startBlock: 18501660, // 2023-10-04 block - don't want to ddos rpc
    },
  ],
};
