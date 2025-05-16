"use client";

import { formatSUI, useAccountBalance, useWallet } from "@suiet/wallet-kit";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "../ui/dropdown-menu";
import {
  IconCopy,
  IconCopyCheck,
  IconChevronDown,
  IconCircleCheck,
  IconCircle,
} from "@tabler/icons-react";
import { Badge } from "../ui/badge";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { toast } from "sonner";

const NETWORKS = [
  { id: "sui:mainnet", name: "Mainnet" },
  { id: "sui:testnet", name: "Testnet" },
  { id: "sui:devnet", name: "Devnet" },
];

export function AccountMenu({ onClose }: { onClose: () => void }) {
  const wallet = useWallet();
  const [accounts, setAccounts] = useState<Array<any>>([]);
  const { balance } = useAccountBalance();
  const [copy, isCopied] = useCopyToClipboard();

  useEffect(() => {
    if (wallet.connected) {
      const walletAccounts = wallet.getAccounts();
      if (walletAccounts?.length) {
        setAccounts([...walletAccounts]);
      }
    }
  }, [wallet.connected, wallet]);

  async function handleSwitchAccount(address: string) {
    if (!wallet.connected) return;

    try {
      await wallet.switchAccount(address);
    } catch (e) {
      console.error("Failed to switch account:", e);
    }
  }

  const handleCopy = async (address: string) => {
    const success = await copy(address);
    if (success) {
      toast.success("Address copied to clipboard");
    }
  };

  const handleSwitchNetwork = async (networkId: string) => {
    try {
      toast.info("Please switch network in your wallet");
    } catch (e) {
      console.error("Failed to switch network:", e);
      toast.error("Failed to switch network");
    }
  };

  const handleSwitchWallet = async (walletName: string) => {
    try {
      const targetWallet = wallet.allAvailableWallets.find(
        (w) => w.name === walletName
      );
      if (!targetWallet) {
        toast.error("Wallet not found");
        return;
      }

      if (!targetWallet.installed) {
        toast.info("Please install the wallet first");
        return;
      }

      await wallet.select(walletName);
      toast.success(`Switched to ${walletName}`);
    } catch (e) {
      console.error("Failed to switch wallet:", e);
      toast.error("Failed to switch wallet");
    }
  };

  if (!wallet.connected || !accounts.length) {
    return null;
  }

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const currentAccount =
    accounts.find((acc) => acc.address === wallet.address) || accounts[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <span className="mr-2">
            {truncateAddress(currentAccount.address)}
          </span>
          <IconChevronDown className="ml-auto h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[320px]">
        <DropdownMenuLabel>Switch Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="px-2 py-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Current wallet:</span>
            <Badge variant="outline">{wallet.adapter?.name}</Badge>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-muted-foreground">Current network:</span>
            <Badge variant="outline">{wallet.chain?.name}</Badge>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-muted-foreground">Account balance:</span>
            <Badge variant="outline">
              {formatSUI(balance ?? 0, {
                withAbbr: false,
              })}{" "}
              SUI
            </Badge>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Switch Network</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {NETWORKS.map((network) => (
              <DropdownMenuItem
                key={network.id}
                onClick={() => handleSwitchNetwork(network.id)}
                className={cn(wallet.chain?.id === network.id && "bg-accent")}
              >
                <div className="flex items-center gap-2">
                  {wallet.chain?.id === network.id ? (
                    <IconCircleCheck size={14} className="text-primary" />
                  ) : (
                    <IconCircle size={14} className="text-muted-foreground" />
                  )}
                  <span>{network.name}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Switch Wallet</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {wallet.allAvailableWallets.map((w) => (
              <div
                key={w.name}
                onClick={() => handleSwitchWallet(w.name)}
                className={cn(wallet.adapter?.name === w.name && "bg-accent")}
              >
                <div className="flex items-center gap-2 w-full">
                  {wallet.adapter?.name === w.name ? (
                    <IconCircleCheck size={14} className="text-primary" />
                  ) : (
                    <IconCircle size={14} className="text-muted-foreground" />
                  )}
                  <span>{w.name}</span>
                </div>
              </div>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <div className="px-2 py-1.5">
          <p className="text-sm text-muted-foreground mb-1">Accounts</p>
          {accounts.map((account) => (
            <div
              key={account.address}
              className={cn(
                "flex items-center justify-between px-2 py-1.5 rounded-none cursor-pointer hover:bg-accent",
                account.address === wallet.address && "bg-accent"
              )}
              onClick={() => handleSwitchAccount(account.address)}
            >
              <span className="flex items-center gap-1">
                {account.address === wallet.address ? (
                  <IconCircleCheck size={14} className="text-primary" />
                ) : (
                  <IconCircle size={14} className="text-muted-foreground" />
                )}
                <span className="text-sm">
                  {truncateAddress(account.address)}
                </span>
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy(account.address);
                }}
                className="ml-2 rounded-none p-1 hover:bg-accent"
              >
                {account.address === wallet.address &&
                  (isCopied ? (
                    <IconCopyCheck size={14} className="text-primary" />
                  ) : (
                    <IconCopy size={14} className="text-muted-foreground" />
                  ))}
              </button>
            </div>
          ))}
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onClose} className="text-destructive">
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
