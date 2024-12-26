// import Pagination from "@/components/partials/Pagination";
// import Breadcrumb from "@/components/Breadcrumb";
// import config from "@/config/config.json";
import Posts from "@/components/partials/PostCard";
import { getAllArticle } from "@/lib/get-article-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <>
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative h-[300px] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
        >
          <Image
            src="/images/banner-1.jpg"
            alt="image"
            fill
            className="block h-full w-full object-cover object-center"
          />

          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h1 className="text-xl">News & Information</h1>
            <p>
              Stay updated with the latest news and events from Syrincs.
              Discover our innovations and industry happenings.
            </p>
          </div>
        </div>
      </div>
      <section className="relative z-10 overflow-hidden bg-secondary -mb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12"></div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary pro-font-rgregular"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary pro-font-rgregular">
                    News & Information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style></style>

      <section className="pb-[20px] pt-[20px]">
        <div className="container">
          <Posts posts={articlesList} />
        </div>
      </section>
    </>
  );
};

export default BlogPagination;
