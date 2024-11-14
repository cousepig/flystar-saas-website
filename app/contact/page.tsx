import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/sections/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | Syrincs",
  description: "This is Contact Page for website",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact us"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
