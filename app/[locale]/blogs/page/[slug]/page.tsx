import Posts from "@/components/partials/PostCard";
import { getAllArticle } from "@/lib/get-article-data";
import { notFound } from "next/navigation";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";
import { createTranslation } from "../../../i18n/server";
import { LocaleTypes } from "../../../i18n/settings";
export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const { locale } = await params;
  const { t } = await createTranslation(locale, "news");
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
/**
 * 分页显示博客内容
 *
 * @param params 包含博客分页信息的参数对象
 * @returns 返回包含面包屑导航、博客标题、描述、博客列表和分页组件的 JSX 元素
 */
const BlogPagination = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { t } = await createTranslation(locale, "news");

  const articlesList = getAllArticle(locale);
  if (!articlesList) {
    return notFound;
  }
  const banner = [
    {
      title: t("title"),
      description: t("description"),
      image: "/images/banner-1.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("News & Information"), href: `/${locale}/blogs` },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <section className="pb-[20px] pt-[20px]">
        <div className="container">
          <Posts params={{ locale }} posts={articlesList} />
        </div>
      </section>
    </>
  );
};

export default BlogPagination;
