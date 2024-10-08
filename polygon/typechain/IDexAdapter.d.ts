/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IDexAdapterInterface extends ethers.utils.Interface {
  functions: {
    "dexType(address)": FunctionFragment;
    "getAmountInByMegaRoutes((address,address,uint256,tuple[]))": FunctionFragment;
    "getAmountOutByMegaRoutes((address,address,uint256,tuple[]))": FunctionFragment;
    "getAmountsIn((bytes,uint256,address))": FunctionFragment;
    "getAmountsInByPaths(uint256,tuple[])": FunctionFragment;
    "getAmountsInByRoutes(uint256,tuple[])": FunctionFragment;
    "getAmountsOut((bytes,uint256,address))": FunctionFragment;
    "getAmountsOutByPaths(uint256,tuple[])": FunctionFragment;
    "getAmountsOutByRoutes(uint256,tuple[])": FunctionFragment;
    "getGas(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "performMegaRoutesSwap((address,address,uint256,tuple[],address,uint256))": FunctionFragment;
    "performPathsSwap(address,address,uint256,address,tuple[])": FunctionFragment;
    "performRoutesSwap(address,uint256,address,tuple[])": FunctionFragment;
    "quoters(address)": FunctionFragment;
    "registry()": FunctionFragment;
    "setDexType(address,uint256)": FunctionFragment;
    "setQuoter(address,address)": FunctionFragment;
    "swapExactTokensForTokens((bytes,address,address,uint256,uint256,address,uint256,address))": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "dexType", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getAmountInByMegaRoutes",
    values: [
      {
        tokenA: string;
        tokenB: string;
        amount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOutByMegaRoutes",
    values: [
      {
        tokenA: string;
        tokenB: string;
        amount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsIn",
    values: [
      { encodedPath: BytesLike; amount: BigNumberish; dexRouter: string }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsInByPaths",
    values: [
      BigNumberish,
      { dexName: string; shares: BigNumberish; payload: BytesLike }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsInByRoutes",
    values: [
      BigNumberish,
      {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [
      { encodedPath: BytesLike; amount: BigNumberish; dexRouter: string }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOutByPaths",
    values: [
      BigNumberish,
      { dexName: string; shares: BigNumberish; payload: BytesLike }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOutByRoutes",
    values: [
      BigNumberish,
      {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "getGas", values: [string]): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "performMegaRoutesSwap",
    values: [
      {
        tokenA: string;
        tokenB: string;
        amountTokenA: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        receiver: string;
        deadline: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "performPathsSwap",
    values: [
      string,
      string,
      BigNumberish,
      string,
      { dexName: string; shares: BigNumberish; payload: BytesLike }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "performRoutesSwap",
    values: [
      string,
      BigNumberish,
      string,
      {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "quoters", values: [string]): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDexType",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setQuoter",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      {
        encodedPath: BytesLike;
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        amountOutMin: BigNumberish;
        to: string;
        deadline: BigNumberish;
        dexRouter: string;
      }
    ]
  ): string;

  decodeFunctionResult(functionFragment: "dexType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountInByMegaRoutes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOutByMegaRoutes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsInByPaths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsInByRoutes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOutByPaths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOutByRoutes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getGas", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "performMegaRoutesSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performPathsSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performRoutesSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quoters", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setDexType", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setQuoter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;

  events: {
    "DexTypeChanged(address,uint256)": EventFragment;
    "QuoterChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DexTypeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuoterChanged"): EventFragment;
}

export type DexTypeChangedEvent = TypedEvent<
  [string, BigNumber] & { dexRouter: string; dexType: BigNumber }
>;

export type QuoterChangedEvent = TypedEvent<
  [string, string] & { dexRouter: string; quoter: string }
>;

export class IDexAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IDexAdapterInterface;

  functions: {
    dexType(arg0: string, overrides?: CallOverrides): Promise<[number]>;

    getAmountInByMegaRoutes(
      _params: {
        tokenA: string;
        tokenB: string;
        amount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountOutByMegaRoutes(
      _params: {
        tokenA: string;
        tokenB: string;
        amount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountsIn(
      _params: {
        encodedPath: BytesLike;
        amount: BigNumberish;
        dexRouter: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountsInByPaths(
      amountOut: BigNumberish,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountsInByRoutes(
      amountOut: BigNumberish,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountsOut(
      _params: {
        encodedPath: BytesLike;
        amount: BigNumberish;
        dexRouter: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountsOutByPaths(
      amountIn: BigNumberish,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountsOutByRoutes(
      amountIn: BigNumberish,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getGas(dexRouter: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _primexDNS: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    performMegaRoutesSwap(
      _params: {
        tokenA: string;
        tokenB: string;
        amountTokenA: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        receiver: string;
        deadline: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    performPathsSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      receiver: string,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    performRoutesSwap(
      tokenIn: string,
      amountIn: BigNumberish,
      receiver: string,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    quoters(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    setDexType(
      _dexRouter: string,
      _dexType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuoter(
      _dexRouter: string,
      _quoter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForTokens(
      _params: {
        encodedPath: BytesLike;
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        amountOutMin: BigNumberish;
        to: string;
        deadline: BigNumberish;
        dexRouter: string;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  dexType(arg0: string, overrides?: CallOverrides): Promise<number>;

  getAmountInByMegaRoutes(
    _params: {
      tokenA: string;
      tokenB: string;
      amount: BigNumberish;
      megaRoutes: {
        shares: BigNumberish;
        routes: {
          to: string;
          paths: {
            dexName: string;
            shares: BigNumberish;
            payload: BytesLike;
          }[];
        }[];
      }[];
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountOutByMegaRoutes(
    _params: {
      tokenA: string;
      tokenB: string;
      amount: BigNumberish;
      megaRoutes: {
        shares: BigNumberish;
        routes: {
          to: string;
          paths: {
            dexName: string;
            shares: BigNumberish;
            payload: BytesLike;
          }[];
        }[];
      }[];
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountsIn(
    _params: {
      encodedPath: BytesLike;
      amount: BigNumberish;
      dexRouter: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountsInByPaths(
    amountOut: BigNumberish,
    paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountsInByRoutes(
    amountOut: BigNumberish,
    routes: {
      to: string;
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountsOut(
    _params: {
      encodedPath: BytesLike;
      amount: BigNumberish;
      dexRouter: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountsOutByPaths(
    amountIn: BigNumberish,
    paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountsOutByRoutes(
    amountIn: BigNumberish,
    routes: {
      to: string;
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getGas(dexRouter: string, overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _primexDNS: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  performMegaRoutesSwap(
    _params: {
      tokenA: string;
      tokenB: string;
      amountTokenA: BigNumberish;
      megaRoutes: {
        shares: BigNumberish;
        routes: {
          to: string;
          paths: {
            dexName: string;
            shares: BigNumberish;
            payload: BytesLike;
          }[];
        }[];
      }[];
      receiver: string;
      deadline: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  performPathsSwap(
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    receiver: string,
    paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  performRoutesSwap(
    tokenIn: string,
    amountIn: BigNumberish,
    receiver: string,
    routes: {
      to: string;
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
    }[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  quoters(arg0: string, overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  setDexType(
    _dexRouter: string,
    _dexType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuoter(
    _dexRouter: string,
    _quoter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForTokens(
    _params: {
      encodedPath: BytesLike;
      tokenIn: string;
      tokenOut: string;
      amountIn: BigNumberish;
      amountOutMin: BigNumberish;
      to: string;
      deadline: BigNumberish;
      dexRouter: string;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    dexType(arg0: string, overrides?: CallOverrides): Promise<number>;

    getAmountInByMegaRoutes(
      _params: {
        tokenA: string;
        tokenB: string;
        amount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOutByMegaRoutes(
      _params: {
        tokenA: string;
        tokenB: string;
        amount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsIn(
      _params: {
        encodedPath: BytesLike;
        amount: BigNumberish;
        dexRouter: string;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getAmountsInByPaths(
      amountOut: BigNumberish,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsInByRoutes(
      amountOut: BigNumberish,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsOut(
      _params: {
        encodedPath: BytesLike;
        amount: BigNumberish;
        dexRouter: string;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getAmountsOutByPaths(
      amountIn: BigNumberish,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsOutByRoutes(
      amountIn: BigNumberish,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGas(dexRouter: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_primexDNS: string, overrides?: CallOverrides): Promise<void>;

    performMegaRoutesSwap(
      _params: {
        tokenA: string;
        tokenB: string;
        amountTokenA: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        receiver: string;
        deadline: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    performPathsSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      receiver: string,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    performRoutesSwap(
      tokenIn: string,
      amountIn: BigNumberish,
      receiver: string,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoters(arg0: string, overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    setDexType(
      _dexRouter: string,
      _dexType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setQuoter(
      _dexRouter: string,
      _quoter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactTokensForTokens(
      _params: {
        encodedPath: BytesLike;
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        amountOutMin: BigNumberish;
        to: string;
        deadline: BigNumberish;
        dexRouter: string;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;
  };

  filters: {
    "DexTypeChanged(address,uint256)"(
      dexRouter?: string | null,
      dexType?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { dexRouter: string; dexType: BigNumber }
    >;

    DexTypeChanged(
      dexRouter?: string | null,
      dexType?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { dexRouter: string; dexType: BigNumber }
    >;

    "QuoterChanged(address,address)"(
      dexRouter?: string | null,
      quoter?: string | null
    ): TypedEventFilter<
      [string, string],
      { dexRouter: string; quoter: string }
    >;

    QuoterChanged(
      dexRouter?: string | null,
      quoter?: string | null
    ): TypedEventFilter<
      [string, string],
      { dexRouter: string; quoter: string }
    >;
  };

  estimateGas: {
    dexType(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAmountInByMegaRoutes(
      _params: {
        tokenA: string;
        tokenB: string;
        amount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountOutByMegaRoutes(
      _params: {
        tokenA: string;
        tokenB: string;
        amount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountsIn(
      _params: {
        encodedPath: BytesLike;
        amount: BigNumberish;
        dexRouter: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountsInByPaths(
      amountOut: BigNumberish,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountsInByRoutes(
      amountOut: BigNumberish,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountsOut(
      _params: {
        encodedPath: BytesLike;
        amount: BigNumberish;
        dexRouter: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountsOutByPaths(
      amountIn: BigNumberish,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountsOutByRoutes(
      amountIn: BigNumberish,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getGas(dexRouter: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _primexDNS: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    performMegaRoutesSwap(
      _params: {
        tokenA: string;
        tokenB: string;
        amountTokenA: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        receiver: string;
        deadline: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    performPathsSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      receiver: string,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    performRoutesSwap(
      tokenIn: string,
      amountIn: BigNumberish,
      receiver: string,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    quoters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    setDexType(
      _dexRouter: string,
      _dexType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuoter(
      _dexRouter: string,
      _quoter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      _params: {
        encodedPath: BytesLike;
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        amountOutMin: BigNumberish;
        to: string;
        deadline: BigNumberish;
        dexRouter: string;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    dexType(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountInByMegaRoutes(
      _params: {
        tokenA: string;
        tokenB: string;
        amount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountOutByMegaRoutes(
      _params: {
        tokenA: string;
        tokenB: string;
        amount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountsIn(
      _params: {
        encodedPath: BytesLike;
        amount: BigNumberish;
        dexRouter: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountsInByPaths(
      amountOut: BigNumberish,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountsInByRoutes(
      amountOut: BigNumberish,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountsOut(
      _params: {
        encodedPath: BytesLike;
        amount: BigNumberish;
        dexRouter: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountsOutByPaths(
      amountIn: BigNumberish,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountsOutByRoutes(
      amountIn: BigNumberish,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getGas(
      dexRouter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _primexDNS: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    performMegaRoutesSwap(
      _params: {
        tokenA: string;
        tokenB: string;
        amountTokenA: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        receiver: string;
        deadline: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    performPathsSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      receiver: string,
      paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    performRoutesSwap(
      tokenIn: string,
      amountIn: BigNumberish,
      receiver: string,
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    quoters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDexType(
      _dexRouter: string,
      _dexType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuoter(
      _dexRouter: string,
      _quoter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      _params: {
        encodedPath: BytesLike;
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        amountOutMin: BigNumberish;
        to: string;
        deadline: BigNumberish;
        dexRouter: string;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
