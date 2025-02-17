import { allProducts, Product } from "contentlayer/generated";

/**
 * 根据给定的slug和locale获取当前产品
 *
 * @param slug 产品slug
 * @param locale 产品语言
 * @returns 返回对应的产品信息，如果未找到则返回undefined
 */
export const getCurrentProducts = (slug: string, locale) => {
    return allProducts.filter((p) => p.language === locale).find((p) => p.slug === slug);
    // .find((product) => product._raw.flattenedPath === slug && product.language === locale);

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
export const getProductsByCategory = (category, locale) => {
    return allProducts.filter(
        (post) =>
            post._raw.sourceFilePath.includes("product") &&
            !post._raw.sourceFilePath.includes("_index"),
    ).filter((post) => post.language === locale)

        .filter((post) => {
            return post.category.includes(category);
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};