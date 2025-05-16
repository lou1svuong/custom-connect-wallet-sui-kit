import Feature from "@/container/marketing/feature";
import Hero from "@/container/marketing/hero";
import LogoCloud from "@/container/marketing/logo-cloud";

export default function Home() {
  return (
    <div className="w-full md:overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto border border-dashed flex flex-col my-2">
        <Hero />
        <Feature />
        <LogoCloud />
      </div>
    </div>
  );
}
