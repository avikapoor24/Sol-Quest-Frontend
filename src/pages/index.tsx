import dynamic from "next/dynamic";

const Wallets = dynamic(() => import("@/components/wallet"), { ssr: false });

export default function Home() {
  return (
    <div className="text-[40px]">
      <h1>hello</h1>
      <Wallets />
    </div>
  );
}
