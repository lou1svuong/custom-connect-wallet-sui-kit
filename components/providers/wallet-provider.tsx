"use client";

import * as React from "react";

import "@suiet/wallet-kit/style.css";
import {
  Chain,
  SuiDevnetChain,
  SuiMainnetChain,
  SuiTestnetChain,
  WalletProvider,
} from "@suiet/wallet-kit";
export function WalletProviders({ children }: { children: any }) {
  const SupportedChains: Chain[] = [
    SuiDevnetChain,
    SuiTestnetChain,
    SuiMainnetChain,
  ];
  // const [mounted, setMounted] = React.useState(false);

  // React.useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <WalletProvider autoConnect chains={SupportedChains}>
      {children}
    </WalletProvider>
  );
}
