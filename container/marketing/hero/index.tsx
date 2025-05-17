import Header from "@/components/layouts/header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex justify-between divide-x">
      <div className="relative hidden md:flex w-1/3 aspect-square items-center justify-center group/titan border-dashed">
        <Image
          src="/assets/images/goku.svg"
          alt="Goku"
          width={100}
          height={100}
          unoptimized
          className="object-cover size-full"
        />
        <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-foreground opacity-0 group-hover/titan:opacity-100 transition-all duration-200"></div>
        <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-foreground opacity-0 group-hover/titan:opacity-100 transition-all duration-200"></div>
        <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-foreground opacity-0 group-hover/titan:opacity-100 transition-all duration-200"></div>
        <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-foreground opacity-0 group-hover/titan:opacity-100 transition-all duration-200"></div>
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div id="hero" className="flex flex-col p-4">
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
        </div>

        <div id="cta" className="flex items-center gap-4 p-4">
          {Object.entries(siteConfig.socials).map(([key, value]) => {
            const Icon = value.icon;
            return (
              <Button
                key={key}
                variant="outline"
                asChild
                className="relative border-dashed"
              >
                <Link href={value.href} target="_blank" className="gap-2 group">
                  <div className="w-full h-[1px] bg-linear-to-r from-primary/0 via-primary to-primary/0 absolute top-0 -left-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <Icon className="size-4" />
                </Link>
              </Button>
            );
          })}
          <Button asChild>
            <Link href="/" className="gap-2 group">
              <span>Get Started</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-all duration-150" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
