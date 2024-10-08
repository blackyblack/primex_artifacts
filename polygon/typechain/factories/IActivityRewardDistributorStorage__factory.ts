/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IActivityRewardDistributorStorage,
  IActivityRewardDistributorStorageInterface,
} from "../IActivityRewardDistributorStorage";

const _abi = [
  {
    inputs: [],
    name: "dns",
    outputs: [
      {
        internalType: "contract IPrimexDNSV3",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pmx",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "traderBalanceVault",
    outputs: [
      {
        internalType: "contract ITraderBalanceVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
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
];

export class IActivityRewardDistributorStorage__factory {
  static readonly abi = _abi;
  static createInterface(): IActivityRewardDistributorStorageInterface {
    return new utils.Interface(
      _abi
    ) as IActivityRewardDistributorStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IActivityRewardDistributorStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IActivityRewardDistributorStorage;
  }
}
