import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image";
// import { Mdx } from "@/components/mdxcomponents"
import RelatedPost from "@/sections/Blog/RelatedPost";
import SharePost from "@/sections/Blog/SharePost";
import TagButton from "@/sections/Blog/TagButton";
import NewsLatterBox from "@/sections/Contact/NewsLatterBox";

import Pagination from "@/components/partials/Pagination";
import config from "@/config/config.json";
// import SeoMeta from "@layouts/SeoMeta";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import Posts from "@/components/product/ProductCard";
const blog_folder = 'products';
import SectionTitle from "@/components/SectionTitle";
import Breadcrumb from "@/components/Breadcrumb";

// blog pagination
const BlogPagination = async ({ params }: any) => {
  //
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const filePath = `content/${blog_folder}/${params.slug}/`;

  const posts = await getSinglePage(filePath).sort(
    //   // (post1, post2) =>
    //   // new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
  );
  const postIndex = await getListPage(`${filePath}/_index.md`);

  const indexOfLastPost = 1 * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts);
  const { frontmatter } = postIndex;
  const { title } = frontmatter;

  return (
    <>
      <Breadcrumb pageName={title} />
      <section
        id="products"
        className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title={title}
            paragraph="探索我们精选使用SYRINCS的酒吧，Livehouse、PartyK、娱乐DJ、现场安装应用扩声系统。更多DJ音乐人和设计师都信任我们。"
            center
          />
        </div>
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">

              <Posts posts={currentPosts} />


            </div>
          </div>
        </section>

      </section>

      {/* {description} */}
      {/* <SeoMeta title={title} /> */}
      <section className="section">
        <div className="container">

          <Pagination
            section={params.slug}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </section>
    </>
  );
};

export default BlogPagination;

export async function generateStaticParams() {
  const filePath = `content/${blog_folder}/`;
  const getAllSlug = await getSinglePage(filePath);
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      slug: (i + 1).toString(),
    });
  }
  // return '';
  return paths;
}

