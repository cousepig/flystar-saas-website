import AboutSection from "@/sections/About/AboutSection";
import Solutions from "@/sections/About/Solutions";
import Overview from "@/sections/About/Overview";
import History from "@/sections/About/History";
import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 | 颜如玉 声入心",
  description: "SYRINCS專業音響品牌，用于安裝或移動、室內或室外、大型或小型，SYRINCS音箱、控制電子設備、機械附件和遠程控制裝置可完全滿足各種應用條件及惡劣的氣候環境。",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="关于我们"
      />
      <Overview />
       <History />
    </>
  );
};

export default AboutPage;
