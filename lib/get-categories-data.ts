import { Product, allProducts, Category, allCategories } from "contentlayer/generated";
// import { Category } from "@/types/category";

/**
 * Returns an array of all category names.
 */
export const allCategoriesName = allProducts
    .filter((post) => post._raw.sourceFilePath.includes("_index"))
    .map((post) => post.slug.split("/")[2]);

/**
 * Returns an array of all products.
 */
export const allProductsPosts: Product[] = allProducts
    .filter(
        (post) =>
            post._raw.sourceFilePath.includes("product") &&
            !post._raw.sourceFilePath.includes("_index"),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


/**
 * Returns an array of all categories.
 */
export const getallCategories = (locale): Category[] => {
    return allCategories
        .filter((post) => post.language === locale)
        .filter((post) => post._raw.sourceFilePath.includes("_index"))
        .map((categories) => ({
            ...categories,
            image: categories.image || "",
            description: categories.description || "",
            id: categories.slug.split("/")[2] || "",
            // category: categories.slug.split("/")[2],
            products: allProductsPosts
                .filter((post) => post.language === locale)
                .filter((post) => categories.slug.includes(post.category))
                .reverse().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
/**
 * 获取单个分类的数据
 *
 * @param category 分类名称
 * @returns 返回符合条件的分类数据对象，如果没有找到则返回undefined
 */

// export const getSingleCategoryData = (locale, category): Category => {
//     // export const getSingleCategoryData = (category) => {
//     return getallCategories(locale).find((post) => post.category === category);
// };
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
            !post._raw.sourceFilePath.includes("_index"),
    )
        .filter((post) => {
            return post.category.includes(category);
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
