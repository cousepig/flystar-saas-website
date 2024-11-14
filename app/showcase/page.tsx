
import BlogPagination, { generateStaticParams } from "./page/[slug]/page";

export { generateStaticParams };
export default BlogPagination;

/*
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
        pageName="Showcase"
      />
      <Showcase />
    </>
  );
};

export default PricePage;
*/