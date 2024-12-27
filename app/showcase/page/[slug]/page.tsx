// import Pagination from "@/components/partials/Pagination";
// import Breadcrumb from "@/components/Breadcrumb";
// import config from "@/config/config.json";
import CaseCard from "@/components/partials/CaseCard";
import { getAllShowcases } from "@/lib/get-showcase-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Case Studies | Syrincs Pro Entertainment Audio System",
  description:
    "Explore our case studies to see how Syrincs has helped clients achieve their audio goals. Discover our innovative solutions and industry expertise.",
};
/**
 * 分页显示博客内容
 *
 * @param params 包含博客分页信息的参数对象
 * @returns 返回包含面包屑导航、博客标题、描述、博客列表和分页组件的 JSX 元素
 */
const BlogPagination = async ({ params }: any) => {
  const { slug } = await params;
  const caseList = getAllShowcases;
  if (!caseList) {
    return notFound;
  }

  const banner = [
    {
      title: "Showcase",
      description:
        "Explore our Showcase to see how Syrincs has helped clients achieve their audio goals. Discover our innovative solutions and industry expertise.",

      image: "/images/banner-2.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Showcase", href: "/showcase" },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <div className="hidden">{slug}</div>
      <section className="pb-[20px] pt-[20px]">
        <div className="container">
          <CaseCard posts={caseList} />
        </div>
      </section>
    </>
  );
};

export default BlogPagination;
