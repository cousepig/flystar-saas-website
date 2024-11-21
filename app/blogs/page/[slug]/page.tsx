import Pagination from "@/components/partials/Pagination";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config/config.json";
import Posts from "@/components/partials/PostCard";
import { getAllArticle } from "@/lib/get-article-data";
import { notFound } from "next/navigation";

/**
 * 分页显示博客内容
 *
 * @param params 包含博客分页信息的参数对象
 * @returns 返回包含面包屑导航、博客标题、描述、博客列表和分页组件的 JSX 元素
 */
const BlogPagination = async ({ params }: any) => {

  const { slug } = await params;
  const articlesList = getAllArticle;
  if (!articlesList) {
    return notFound;
  }

  return (
    <>
      <Breadcrumb
        pageName="News & Information"
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center">
            <h1 className="text-center font-normal text-[56px]">News & Information</h1>
            {/* <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{description}</p> */}
          </div>
          <Posts posts={articlesList} />
          {/* <Pagination section={blog_folder} totalPages={totalPages} currentPage={currentPage} /> */}
        </div>
      </section>
    </>
  );
};

export default BlogPagination;

export async function generateStaticParams() {

}

