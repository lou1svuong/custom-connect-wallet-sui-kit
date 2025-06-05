"use client";

import { useWallet } from "@suiet/wallet-kit";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { verifyPersonalMessageSignature } from "@mysten/sui/verify";
import {
  Wallet,
  KeyRound,
  CheckCircle,
  XCircle,
  Fingerprint,
} from "lucide-react";

export default function SignAndVerifyCard() {
  const { connected, account, signPersonalMessage } = useWallet();
  const [nonce, setNonce] = useState("");
  const [signature, setSignature] = useState<string | null>(null);
  const [verified, setVerified] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setNonce(`Login nonce: ${crypto.randomUUID()}`);
    setSignature(null);
    setVerified(null);
  }, [connected, account]); // Added account to dependency array for re-generating nonce if account changes

  const handleSignAndVerify = async () => {
    if (!connected || !account) {
      toast.error("Please connect your wallet first.");
      return;
    }

    setIsLoading(true);
    setSignature(null);
    setVerified(null);

    try {
      const messageBytes = new TextEncoder().encode(nonce);
      const result = await signPersonalMessage({ message: messageBytes });

      // Simulating a slight delay for better UX, as verification might be quick
      await new Promise((resolve) => setTimeout(resolve, 500));

      const pubKey = await verifyPersonalMessageSignature(
        messageBytes,
        result.signature,
        {
          address: account.address,
        }
      );

      console.log("Verified public key:", pubKey.toBase64());

      setSignature(result.signature);
      setVerified(true);
      toast.success("Signature verified successfully!");
    } catch (err: any) {
      console.error("Verification failed:", err);
      setVerified(false);
      toast.error(`Verification failed: ${err.message || "Unknown error"}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-7xl border border-dashed ">
      <CardHeader className="text-center">
        <div className="mx-auto bg-primary/10 text-primary p-2 rounded-full w-fit mb-3">
          <KeyRound className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-bold">
          Sign & Verify Message
        </CardTitle>
        <CardDescription>
          Securely sign a message with your wallet to verify your identity.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!connected || !account ? (
          <div className="text-center text-muted-foreground py-6">
            <Wallet className="h-10 w-10 mx-auto mb-1 text-primary" />
            Please connect your wallet to proceed.
          </div>
        ) : (
          <>
            <div className="space-y-2 p-3 border rounded-md bg-background">
              <h3 className="text-sm font-medium text-muted-foreground">
                Account Information
              </h3>
              <div className="flex items-start gap-2">
                <Fingerprint className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold break-all">
                    {account.address}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Connected Address
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 p-3 border rounded-md bg-background">
              <h3 className="text-sm font-medium text-muted-foreground">
                Message to Sign
              </h3>
              <p className="text-xs text-foreground break-all bg-muted p-2 rounded-md">
                {nonce}
              </p>
            </div>

            <Button
              onClick={handleSignAndVerify}
              disabled={isLoading || !connected || !account}
              className="w-full py-2 text-sm"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Verifying...
                </div>
              ) : (
                "Sign & Verify Message"
              )}
            </Button>

            {signature && (
              <div className="space-y-2 p-3 border rounded-md bg-background">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Generated Signature
                </h3>
                <p className="text-xs text-foreground break-all bg-muted p-2 rounded-md">
                  {signature}
                </p>
              </div>
            )}

            {verified !== null && (
              <div
                className={`flex items-center gap-2 p-2 rounded-md font-medium ${
                  verified
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {verified ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <XCircle className="h-4 w-4" />
                )}
                <span>
                  Verification Status: {verified ? "Successful" : "Failed"}
                </span>
              </div>
            )}
          </>
        )}
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground text-center block">
        Example of signing and verifying a message using your wallet.
      </CardFooter>
    </Card>
  );
}
