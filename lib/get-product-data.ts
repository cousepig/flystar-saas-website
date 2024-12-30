import { allProducts, Product } from "contentlayer/generated";

export const getCurrentProducts = (slug: string) => {
    const currentProducts = allProducts.find((product) => product._raw.flattenedPath === slug);
    return currentProducts;
};

export const getAllProducts: Product[] = allProducts
    .filter(
        (post) =>
            post._raw.sourceFilePath.includes("product") &&
            !post._raw.sourceFilePath.includes("_index.yml"),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


/**
 * 根据类别获取产品列表
 *
 * @param category 类别名称
 * @returns 满足条件的产品列表
 */
export const getProductsByCategory = (category) => {
    return allProducts.filter(
        (post) =>
            post._raw.sourceFilePath.includes("product") &&
            !post._raw.sourceFilePath.includes("_index.yml"),
    )
        .filter((post) => {
            return post.category.includes(category);
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};