import CaseCard from "@/components/partials/CaseCard";
import { getAllShowcases } from "@/lib/get-showcase-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { createTranslation } from "../../../i18n/server";
import { LocaleTypes } from "../../../i18n/settings";
interface PageProps {
  params: Promise<{
    locale: LocaleTypes;
  }>;
}
/**
 * 生成元数据函数
 *
 * @param params 包含路由参数的对象
 * @returns 返回包含元数据的Promise对象
 */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const { locale } = await params;
  const { t } = await createTranslation(locale, "showcase");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

/**
 * 分页展示博客文章组件
 *
 * @param params 页面参数对象，包含当前页面语言设置
 * @returns 返回渲染后的分页展示组件
 */
const BlogPagination = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { t } = await createTranslation(locale, "showcase");
  const caseList = getAllShowcases(locale);

  if (!caseList) {
    return notFound;
  }

  const banner = [
    {
      title: t("title"),
      description: t("description"),

      image: "/images/banner-2.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("Showcase"), href: `/${locale}/showcase` },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <section className="pb-[20px] pt-[20px]">
        <div className="container">
          <CaseCard params={{ locale }} posts={caseList} />
        </div>
      </section>
    </>
  );
};

export default BlogPagination;
