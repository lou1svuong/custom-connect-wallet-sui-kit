import Header from "@/components/layouts/header";

export default function Home() {
  return (
    <div className="w-full md:overflow-hidden flex flex-col items-center justify-center">
      <div className=" mx-auto border border-dashed flex flex-col my-40 items-center">
        <Header />
      </div>
    </div>
  );
}
