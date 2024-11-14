import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/sections/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | 颜如玉 声入心",
  description: "This is Contact Page for website",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="联系我们"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
