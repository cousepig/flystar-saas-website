
import Breadcrumb from "@/components/Breadcrumb";
import Pricing from "@/sections/Pricing";
import Showcase from "@/sections/Showcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "工程案例 | 颜如玉 声入心",
  description: "This is About Page for website",
};

const PricePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="工程案例"
      />
    <Showcase />
    </>
  );
};

export default PricePage;
