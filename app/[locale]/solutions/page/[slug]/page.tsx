import CaseCard from "@/components/partials/CaseCard";
import { getAllSolution } from "@/lib/get-solution-data";
import { notFound } from "next/navigation";

import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { createTranslation } from "../../../i18n/server";
import { LocaleTypes } from "../../../i18n/settings";
// import { Metadata } from "next";
interface PageProps {
  params: Promise<{
    locale: LocaleTypes;
  }>;
}
export async function generateMetadata({ params }: any) {
  // const resolvedParams = await params;
  const { locale } = await params;
  const { t } = await createTranslation(locale, "showcase");
  // const slug = `/solutions/${resolvedParams.slug.join("/")}`;
  // const article = getAllSolution.find((post) => post.slug === slug);
  // if (!article) return notFound();
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    // openGraph: {
    //   title: "Solutions | Syrincs Pro Entertainment Audio System",
    //   description: article.description,
    //   url: `https://syrincspro.com/solutions/${resolvedParams.slug}`,
    //   siteName: "Syrincs Pro",
    //   locale: "en_US",
    //   type: "website",
    // },
  };
}
/**
 * 分页显示博客内容
 *
 * @param params 包含博客分页信息的参数对象
 * @returns 返回包含面包屑导航、博客标题、描述、博客列表和分页组件的 JSX 元素
 */
const BlogPagination = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { t } = await createTranslation(locale, "showcase");
  const articlesList = getAllSolution(locale);
  if (!articlesList) {
    return notFound;
  }

  const banner = [
    {
      title: t("title"),
      description: t("description"),

      image: "/images/banner.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("Solutions"), href: `/${locale}/solutions` },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />

      <section className="pb-[20px] pt-[20px]">
        <div className="container">
          <CaseCard params={locale} posts={articlesList} />
        </div>
      </section>
    </>
  );
};

export default BlogPagination;
