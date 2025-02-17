import Contact from "@/sections/Contact";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";

import { createTranslation } from "../i18n/server";
import { LocaleTypes } from "../i18n/settings";
import { Metadata } from "next";
export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const { locale } = await params;
  const { t } = await createTranslation(locale, "contact");
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
const ContactPage = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { t } = await createTranslation(locale, "contact");

  const banner = [
    {
      title: t("title"),
      description: t("description"),
      image: "/images/banner-1.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("Contact us"), href: `/${locale}/contact` },
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
