import Link from "next/link";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <Card className="w-full max-w-4xl border-dashed border-2 rounded-none shadow-none">
        <CardHeader className="border-b border-dashed pb-4">
          <div className="flex items-center space-x-2">
            <Terminal className="h-5 w-5" />
            <span className="text-sm font-mono">about_project.sh</span>
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-0 font-mono">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">$</span>
              <span>project_info</span>
            </div>
            <div className="space-y-1 pl-6">
              <p className="text-lg font-semibold">
                Custom Connect Wallet UI Kit for SUI
              </p>
              <p className="text-muted-foreground">
                An open-source UI kit built for SUI dApps — includes a
                customizable Connect Wallet button, modal, and menu. Designed to
                simplify integration and improve developer experience.
              </p>
            </div>

            <div className="flex items-center space-x-2 pt-4">
              <span className="text-muted-foreground">$</span>
              <span>tech_stack</span>
            </div>
            <div className="pl-6 text-muted-foreground">
              <ul className="list-disc list-inside space-y-1">
                <li>Next.js (App Router)</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>@suiet/wallet-kit</li>
              </ul>
            </div>

            <div className="flex items-center space-x-2 pt-4">
              <span className="text-muted-foreground">$</span>
              <span>status</span>
            </div>
            <div className="pl-6 text-muted-foreground">
              <p>Actively maintained 🚧</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="fle gap-2 x pt-6 border-t border-dashed mt-6">
          <Button
            variant="outline"
            className="flex-1 rounded-none border-dashed"
            asChild
          >
            <Link
              href="https://github.com/lou1svuong/custom-connect-wallet-sui-kit"
              target="_blank"
            >
              $ open github
            </Link>
          </Button>
          <Button
            variant="outline"
            className="flex-1 w-full rounded-none border-dashed"
            asChild
          >
            <Link href="/">$ cd home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
