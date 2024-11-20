import Pagination from "@/components/partials/Pagination";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config/config.json";
import Posts from "@/components/partials/Posts";
import { getAllArticle } from "@/lib/get-article-data";
const { blog_folder } = config.settings;
// import { Blog } from "@/types/blog";

/**
 * 分页显示博客内容
 *
 * @param params 包含博客分页信息的参数对象
 * @returns 返回包含面包屑导航、博客标题、描述、博客列表和分页组件的 JSX 元素
 */
const BlogPagination = async ({ params }: any) => {

  const { slug } = await params;
  const currentPosts = getAllArticle;
  if (!currentPosts) {
    return <div>Category not found</div>;
  }


  // const currentPage = parseInt((params && params.slug) || 1);
  // const { pagination } = config.settings;
  // const posts = await getSinglePage(`content/${blog_folder}`);
  // //   .sort(
  // //   (post1, post2) =>
  // //     new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
  // // );
  // const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
  // //
  // const indexOfLastPost = currentPage * pagination;
  // const indexOfFirstPost = indexOfLastPost - pagination;
  // const totalPages = Math.ceil(posts.length / pagination);
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // const { frontmatter } = postIndex;
  // const { title, description } = frontmatter;

  return (
    <>
      {/* <Breadcrumb pageName={title} /> */}
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center">
            {/* {markdownify(title, "h1", "text-center font-normal text-[56px]")} */}
            {/* <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{description}</p> */}
          </div>
          <Posts posts={currentPosts} />
          {/* <Pagination section={blog_folder} totalPages={totalPages} currentPage={currentPage} /> */}
        </div>
      </section>
    </>
  );
};

export default BlogPagination;

export async function generateStaticParams() {
  const getAllSlug = await getSinglePage(`content/${blog_folder}`);
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      slug: (i + 1).toString(),
    });
  }

  return paths;
}



/*
import SingleBlog from "@/sections/Blog/SingleBlog";
import blogData from "@/sections/Blog/blogData";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Information | Syrincs",
  description: "This is Blog Page for website",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="News & Information"
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    上一页
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    下一页
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
*/