import Header from "@/components/layouts/header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex divide-x">
      <div className="flex-1 flex flex-col">
        <Header />
        <div
          id="hero"
          className=" relative flex  flex-col py-12 p-4 backdrop-blur-lg overflow-hidden"
        >
          <h1 className="head-text-md">CommandOSS Hacker House HCMC </h1>
          <p className="text-muted-foreground max-w-3xl border-l-4 border-foreground pl-2">
            Building software and exploring Web3 technologies.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground max-w-3xl pt-2">
            <p className="hover:underline text-xs flex items-center gap-1">
              Ho Chi Minh City, Vietnam, GMT+7
              <span className="ml-1 size-1 animate-ping  rounded-full bg-green-500"></span>
            </p>
          </div>
          <p className="text-muted-foreground max-w-3xl pt-4">
            {siteConfig.description}
          </p>
          <div id="cta" className="flex items-center gap-4 pt-4">
            <Button asChild>
              <Link href="/" className="gap-2 group">
                <span>Get Started</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-all duration-150" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
