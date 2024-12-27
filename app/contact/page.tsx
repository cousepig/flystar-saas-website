import Contact from "@/sections/Contact";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | Syrincs Pro Entertainment Audio System",
  description:
    "Get in touch with Syrincs for inquiries about our professional audio equipment. Our team is here to assist you.",
};

const ContactPage = () => {
  const banner = [
    {
      title: "Contact us",
      description:
        "Get in touch with Syrincs for inquiries about our professional audio equipment. Our team is here to assist you.",
      image: "/images/banner-1.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <Contact />
    </>
  );
};

export default ContactPage;
