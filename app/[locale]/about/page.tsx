import Overview from "@/sections/About/Overview";
import History from "@/sections/About/History";
import { Metadata } from "next";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";

import { createTranslation } from "../i18n/server";
import { LocaleTypes } from "../i18n/settings";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const { locale } = await params;
  const { t } = await createTranslation(locale, "about");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}
interface PageProps {
  params: Promise<{
    locale: LocaleTypes;
  }>;
}
// export const metadata: Metadata = {
//   title: "About Us | Syrincs Pro Entertainment Audio System",
//   description:
//     "SYRINCS is a professional audio brand used for installation or movement, indoor or outdoor, large or small. SYRINCS speakers, control electronics, mechanical accessories, and remote control devices can fully meet various application conditions and harsh weather environments.",
// };
const AboutPage = async ({ params }: PageProps) => {
  // const AboutPage = () => {
  const { locale } = await params;
  const { t } = await createTranslation(locale, "about");
  const banner = [
    {
      title: t("title"),
      description: t("description"),
      image: "/images/banner-1.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("About Us"), href: `/${locale}/about` },
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
