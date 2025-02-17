// import Link from "next/link";

import DemoSlider from "@/components/HomeSlider";
import dataSlider from "@/components/HomeSlider.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <DemoSlider data={dataSlider} />
    </main>
  );
}
