import { allSolutions, Solution } from "contentlayer/generated";

/**
 * 获取当前文章
 *
 * @param slug 文章的唯一标识符
 * @returns 返回当前文章对象，如果不存在则返回 undefined
 */
export const getCurrentSolution = (slug: string) => {
    const currentProducts = allSolutions.find((product) => product._raw.flattenedPath === slug);
    return currentProducts;
};

export const getAllSolution = (locale): Solution[] => {

    return allSolutions
        .filter(
            (post) =>
                post._raw.sourceFilePath.includes("solutions") &&
                !post._raw.sourceFilePath.includes("_index.md"),

        ).filter((post) => post.language === locale)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
