import AboutSection from "@/sections/About/AboutSection";
import Solutions from "@/sections/About/Solutions";
import Blog from "@/sections/Blog";
import Brands from "@/sections/Brands";
import ScrollUp from "@/components/ScrollToTop/ScrollUp";
import Contact from "@/sections/Contact";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import About from "@/sections/Video";
import Showcase from "@/sections/Showcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design and Seo SaaS",
  description: "This is Home for website",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      {/* <Showcase /> */}
      {/* <Solutions /> */}
      {/* <Pricing /> */}
      {/* <Brands /> */}
      {/* <About /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
