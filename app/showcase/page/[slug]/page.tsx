import Pagination from "@/components/partials/Pagination";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config/config.json";
import Case from "@/components/partials/Case";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
const { case_folders } = config.settings;

/**
 * 分页显示案例文章组件
 *
 * @param params - 包含分页参数的对象
 * @returns 渲染后的 JSX 元素
 */
const BlogPagination = async ({ params }) => {

    const currentPage = parseInt((params && params.slug) || 1);
    const { pagination } = config.settings;
    const posts = await getSinglePage(`content/${case_folders}`).sort(
        (post1, post2) =>
            new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
    );
    const postIndex = await getListPage(`content/${case_folders}/_index.md`);

    const indexOfLastPost = currentPage * pagination;
    const indexOfFirstPost = indexOfLastPost - pagination;
    const totalPages = Math.ceil(posts.length / pagination);
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const { frontmatter } = postIndex;
    const { title, description } = frontmatter;

    return (
        <>
            <Breadcrumb pageName={title} />
            <section className="pb-[120px] pt-[120px]">
                <div className="container">
                    <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center">
                        {markdownify(title, "h1", "text-center font-normal text-[56px]")}
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{description}</p>
                    </div>
                    <Case posts={currentPosts} />
                    <Pagination section={case_folders} totalPages={totalPages} currentPage={currentPage} />
                </div>
            </section>
        </>
    );
};

export default BlogPagination;

/**
 * 生成静态参数
 *
 * @returns 返回静态参数的数组
 */
export async function generateStaticParams() {
    const getAllSlug = await getSinglePage(`content/${case_folders}`);
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

