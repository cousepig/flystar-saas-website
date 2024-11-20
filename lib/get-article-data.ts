import { allArticles, Article } from "contentlayer/generated";

/**
 * 获取当前文章
 *
 * @param slug 文章的唯一标识符
 * @returns 返回当前文章对象，如果不存在则返回 undefined
 */
export const getCurrentArticles = (slug: string) => {
    const currentProducts = allArticles.find((product) => product._raw.flattenedPath === slug);
    return currentProducts;
};

export const getAllArticle: Article[] = allArticles
    .filter(
        (post) =>
            post._raw.sourceFilePath.includes("blog") &&
            !post._raw.sourceFilePath.includes("_index.md"),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
