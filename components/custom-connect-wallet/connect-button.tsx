"use client";

import { useWallet } from "@suiet/wallet-kit";
import { useState } from "react";
import { Button } from "../ui/button";
import { AccountMenu } from "./account-menu";
import { WalletModal } from "./wallet-modal";

export function CustomConnectButton({ className }: { className?: string }) {
  const { connected, disconnect } = useWallet();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <>
      <WalletModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {connected ? (
        <AccountMenu onClose={handleDisconnect} />
      ) : (
        <Button onClick={() => setIsModalOpen(true)} className={className}>
          Connect Wallet
        </Button>
      )}
    </>
  );
}
