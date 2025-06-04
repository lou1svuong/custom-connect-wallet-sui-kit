import Github from "@/components/icons/github";
import Mail from "@/components/icons/mail";
import Telegram from "@/components/icons/telegram";
import X from "@/components/icons/x";
import { SiteConfig } from "@/types";
import { Linkedin } from "lucide-react";

export const siteConfig: SiteConfig = {
  name: "Custom SUI Connect Wallet UI Kit",
  title: "Custom SUI Connect Wallet UI Kit",
  description:
    "An open-source and customizable UI kit for SUI dApps. Includes Connect Wallet button, modal, and menu – all built to simplify integration and enhance UX for Web3 developers.",
  origin: "https://custom-connect-wallet-sui-kit.vercel.app",
  keywords: [
    "SUI UI Kit",
    "SUI Connect Wallet",
    "SUI dApp",
    "Web3 UI Kit",
    "Web3 Developer",
    "Blockchain Developer",
    "Custom Connect Wallet",
    "SUI Wallet Integration",
    "Frontend Web3",
    "Open Source Web3 Kit",
  ],
  og: "https://custom-connect-wallet-sui-kit.vercel.app/og.png",
  creator: {
    name: "Lou1s",
    url: "https://custom-connect-wallet-sui-kit.vercel.app",
  },
  socials: {
    // email: {
    //   href: "mailto:lou1svuong.dev@gmail.com",
    //   icon: Mail,
    // },
    // linkedin: {
    //   href: "https://www.linkedin.com/in/xuanvuong/",
    //   icon: Linkedin,
    // },
    github: {
      href: "https://github.com/Lou1sVuong",
      icon: Github,
    },
    x: {
      href: "https://x.com/lou1sgudboiz",
      icon: X,
    },
    telegram: {
      href: "https://t.me/lou1sgudboiz",
      icon: Telegram,
    },
  },
};
