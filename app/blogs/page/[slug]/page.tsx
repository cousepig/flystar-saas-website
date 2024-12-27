import Posts from "@/components/partials/PostCard";
import { getAllArticle } from "@/lib/get-article-data";
import { notFound } from "next/navigation";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Information | Syrincs Pro Entertainment Audio System",
  description:
    "Stay updated with the latest news and events from Syrincs. Discover our innovations and industry happenings.",
};
/**
 * 分页显示博客内容
 *
 * @param params 包含博客分页信息的参数对象
 * @returns 返回包含面包屑导航、博客标题、描述、博客列表和分页组件的 JSX 元素
 */
const BlogPagination = async () => {
  // const { slug } = await params; { params }: any
  const articlesList = getAllArticle;
  if (!articlesList) {
    return notFound;
  }
  const banner = [
    {
      title: "News & Information",
      description:
        "Stay updated with the latest news and events from Syrincs. Discover our innovations and industry happenings.",

      image: "/images/banner-1.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "News & Information", href: "/news-information" },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <section className="pb-[20px] pt-[20px]">
        <div className="container">
          <Posts posts={articlesList} />
        </div>
      </section>
    </>
  );
};

export default BlogPagination;
