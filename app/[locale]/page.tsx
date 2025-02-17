import ScrollUp from "@/components/ScrollToTop/ScrollUp";

import Hero from "@/sections/Hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Syrincs Pro Entertainment Audio System",
  description: "Discover the best audio systems for your entertainment needs.",
};

export default function HomePage() {
  return (
    <>
      <ScrollUp />
      <Hero />
    </>
  );
}
