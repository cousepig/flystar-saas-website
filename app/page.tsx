
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
      <div className="py-8 bg-secondary w-full">
            <p className="text-center pro-font-bold text-xl text-black">
          SINCE 1981, GERMANY</p>
          
          <p className="text-center text-xl pro-font-bold text-black">Pro Entertainment Audio System
            </p>
          </div>
    </>
  );
}
