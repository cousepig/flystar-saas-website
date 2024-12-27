import Overview from "@/sections/About/Overview";
import History from "@/sections/About/History";
import { Metadata } from "next";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us | Syrincs Pro Entertainment Audio System",
  description:
    "SYRINCS is a professional audio brand used for installation or movement, indoor or outdoor, large or small. SYRINCS speakers, control electronics, mechanical accessories, and remote control devices can fully meet various application conditions and harsh weather environments.",
};

const AboutPage = () => {
  const banner = [
    {
      title: "About Us",
      description:
        "SYRINCS is a professional audio brand used for installation or movement, indoor or outdoor, large or small. SYRINCS speakers, control electronics, mechanical accessories, and remote control devices can fully meet various application conditions and harsh weather environments.",

      image: "/images/banner-1.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <Overview />
      <History />
    </>
  );
};

export default AboutPage;
