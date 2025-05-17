import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="p-4 border-t border-dashed">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left side - Content */}
        <div className="flex-1 text-left">
          <h2 className="text-balance text-3xl font-semibold">
            Start Building Your Web3 Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of developers building the future of decentralized
            applications on Sui Network.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/">
                <span>Get Started</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <span>Book Demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
