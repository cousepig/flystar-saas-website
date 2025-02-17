import ProductCard from "@/components/partials/ProductCard";
import { getallCategories } from "@/lib/get-categories-data";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import { createTranslation } from "../../i18n/server";
import { LocaleTypes } from "../../i18n/settings";
interface PageProps {
  params: Promise<{
    locale: LocaleTypes;
    slug: string;
  }>;
}
export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  console.log(slug, "--- loading");
  const { locale } = await params;
  const { t } = await createTranslation(locale, "product");
  const category = getallCategories(locale).find((c) => c.category === slug[0]);
  if (!category) {
    return {
      title: t("Sitename"),
    };
  } else {
    return {
      title: category.title + t("Sitename"),
      description: category.description,
    };
  }
}
/**
 * 分类页面组件
 *
 * @param params 包含分类标识的对象
 * @returns 返回渲染的分类页面 JSX 元素
 */
export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const { locale } = await params;
  const { t } = await createTranslation(locale, "product");
  const category = getallCategories(locale).find((c) => c.category === slug[0]);
  if (!category) {
    return <div>Category not found</div>;
  }

  const banner = [
    {
      title: category.title,
      description: category.description,
      image: "/images/banner.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("Products"), href: `/${locale}/products` },
    { name: category.title, href: `/${locale}/products/${category.category}` },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <section id="products" className="py-16 md:py-20 lg:py-28">
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 ">
              {category.products.map((feature, index) => (
                <ProductCard params={locale} key={index} product={feature} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
