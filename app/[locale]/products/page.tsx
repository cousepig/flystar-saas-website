import SingleCategory from "@/sections/products/SingleCategory";
import { getallCategories } from "@/lib/get-categories-data";

import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

import { createTranslation } from "../i18n/server";
import { LocaleTypes } from "../i18n/settings";
interface PageProps {
  params: Promise<{
    locale: LocaleTypes;
  }>;
}
export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const { locale } = await params;
  const { t } = await createTranslation(locale, "product");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const ShowProducts = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { t } = await createTranslation(locale, "product");
  const categoryData = getallCategories(locale);
  // console.log(categoryData, "--- loading");
  const banner = [
    {
      title: t("title"),
      description: t("description"),
      image: "/images/banner.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("Products"), href: `/${locale}/products` },
  ];
  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />

      <section id="products" className="py-16 ">
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
              {categoryData.map((feature) => (
                <SingleCategory
                  params={{ locale }}
                  key={feature.slug}
                  category={feature}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default ShowProducts;
