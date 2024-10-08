/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ISupraSValueFeed,
  ISupraSValueFeedInterface,
} from "../ISupraSValueFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pair_id_1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pair_id_2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "operation",
        type: "uint256",
      },
    ],
    name: "getDerivedSvalue",
    outputs: [
      {
        components: [
          {
            internalType: "int256",
            name: "roundDifference",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "derivedPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
          },
        ],
        internalType: "struct ISupraSValueFeed.derivedData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "getSvalue",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "round",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct ISupraSValueFeed.priceFeed",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ISupraSValueFeed__factory {
  static readonly abi = _abi;
  static createInterface(): ISupraSValueFeedInterface {
    return new utils.Interface(_abi) as ISupraSValueFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISupraSValueFeed {
    return new Contract(address, _abi, signerOrProvider) as ISupraSValueFeed;
  }
}
