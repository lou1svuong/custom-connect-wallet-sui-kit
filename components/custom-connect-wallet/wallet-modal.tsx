"use client";

import { useWallet } from "@suiet/wallet-kit";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { cn } from "@/lib/utils";

interface WalletModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WalletModal({ open, onOpenChange }: WalletModalProps) {
  const { select, configuredWallets, detectedWallets } = useWallet();

  const handleWalletSelect = (walletName: string) => {
    const wallet = [...configuredWallets, ...detectedWallets].find(
      (w) => w.name === walletName
    );

    if (!wallet?.installed) {
      // You can add a toast notification here
      window.open(wallet?.downloadUrl?.browserExtension, "_blank");
      return;
    }

    select(walletName);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {[...configuredWallets, ...detectedWallets].map((wallet) => (
            <Button
              key={wallet.name}
              variant="outline"
              className={cn(
                "w-full justify-start gap-2",
                !wallet.installed && "opacity-50"
              )}
              onClick={() => handleWalletSelect(wallet.name)}
            >
              {wallet.iconUrl && (
                <img
                  src={wallet.iconUrl}
                  alt={wallet.name}
                  className="w-6 h-6"
                />
              )}
              <span>
                {wallet.installed
                  ? `Connect to ${wallet.name}`
                  : `Install ${wallet.name}`}
              </span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
