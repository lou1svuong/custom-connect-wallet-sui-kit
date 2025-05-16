import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Zap,
  Shield,
  Sparkle,
  Rocket,
  Target,
  Users,
} from "lucide-react";

export default function Feature() {
  return (
    <div className="w-full border-t border-dashed">
      <div className="p-4 border-b border-dashed">
        <h2 className="text-xl font-semibold font-heading tracking-tight">
          Key Features
        </h2>
        <p className="text-sm text-muted-foreground">
          Discover what makes our platform special
        </p>
      </div>
      <div
        id="grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-dashed"
      >
        {featureConfig.map((feature, index) => (
          <a
            key={index}
            href={feature.link}
            target="_blank"
            className={cn(
              "relative w-full p-6 hover:bg-muted/50 transition-all duration-150 group/item border-dashed",
              {
                "border-b": index < featureConfig.length - 1,
                "md:border-b-0": index >= featureConfig.length - 2,
                "md:border-b": index < featureConfig.length - 2,
                "lg:border-b-0": index >= featureConfig.length - 3,
                "lg:border-b": index < featureConfig.length - 3,
              },
              {
                "md:border-r":
                  index % 2 === 0 && index !== featureConfig.length - 1,
                "lg:border-r":
                  index % 3 !== 2 && index !== featureConfig.length - 1,
              }
            )}
          >
            {(index === 0 || index === featureConfig.length - 1) && (
              <Sparkle
                className={cn(
                  "absolute w-4 h-4 z-10 fill-current hidden md:block",
                  {
                    "-bottom-2 -right-2": index === 0,
                    "-top-2 -left-2": index === featureConfig.length - 1,
                  }
                )}
              />
            )}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="group-hover/item:animate-pulse">
                  {feature.icon}
                </span>
                <h3 className="text-zinc-500 dark:text-zinc-400 text-base font-semibold">
                  {feature.category}
                </h3>
              </div>
              <ArrowRight className="size-4 opacity-0 scale-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:-translate-x-0 group-hover/item:scale-100 transition-all duration-150" />
            </div>
            <h1 className="text-xl font-semibold font-heading tracking-tight mb-2">
              {feature.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

const featureConfig = [
  {
    icon: <Zap className="size-4" />,
    category: "Performance",
    name: "Lightning Fast",
    description:
      "Experience blazing fast performance with our optimized platform.",
    link: "#",
  },
  {
    icon: <Shield className="size-4" />,
    category: "Security",
    name: "Enterprise Grade",
    description: "Bank-level security with advanced encryption and protection.",
    link: "#",
  },
  {
    icon: <Rocket className="size-4" />,
    category: "Scalability",
    name: "Grows With You",
    description: "Scale your operations seamlessly as your business grows.",
    link: "#",
  },
  {
    icon: <Target className="size-4" />,
    category: "Analytics",
    name: "Smart Insights",
    description: "Get powerful insights with our advanced analytics tools.",
    link: "#",
  },
  {
    icon: <Users className="size-4" />,
    category: "Collaboration",
    name: "Team Ready",
    description: "Built-in collaboration tools for teams of any size.",
    link: "#",
  },
  {
    icon: <Sparkle className="size-4" />,
    category: "Innovation",
    name: "Future Proof",
    description: "Stay ahead with our constantly evolving feature set.",
    link: "#",
  },
];
