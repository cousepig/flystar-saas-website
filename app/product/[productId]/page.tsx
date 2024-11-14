
import Breadcrumb from "@/components/Breadcrumb";
import Pricing from "@/sections/Pricing";
import Category from "@/sections/products/Category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品中心 | 颜如玉 声入心",
  description: "This is About Page for website",
};

const PricePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="产品中心"
      />

    {/* <Pricing /> */}
    <Category />
    </>
  );
};

export default PricePage;
