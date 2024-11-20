
import ScrollUp from "@/components/ScrollToTop/ScrollUp";

import Hero from "@/sections/Hero";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Syrincs - Home",
//   description: "This is Home for website",
// };

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
    </>
  );
}
