import Overview from "@/sections/About/Overview";
import History from "@/sections/About/History";
import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "SYRINCS is a professional audio brand used for installation or movement, indoor or outdoor, large or small. SYRINCS speakers, control electronics, mechanical accessories, and remote control devices can fully meet various application conditions and harsh weather environments.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
      />
      <Overview />
      <History />
    </>
  );
};

export default AboutPage;
