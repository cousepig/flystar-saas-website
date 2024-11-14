import SectionTitle from "../../components/SectionTitle";
import SingleCase from "./SingleCase";
import caseData from "./caseData";
import config from "../../config/config.json";
import { getListPage, getSinglePage } from "../../lib/contentParser";
import { markdownify } from "../../lib/utils/textConverter";
const { blog_folder } = config.settings;
// import { allTrains, Train } from "contentlayer/generated";

const Blog = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = await getSinglePage(`content/${blog_folder}`).sort(
    (post1, post2) =>
      new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
  );
  const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
  //
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter } = postIndex;
  const { title } = frontmatter;
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="工程案例"
          paragraph="探索我们精选使用SYRINCS的酒吧，Livehouse、PartyK、娱乐DJ、现场安装应用扩声系统。更多DJ音乐人和设计师都信任我们。"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {caseData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleCase blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
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
