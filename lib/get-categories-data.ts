import { Product, allProducts } from "contentlayer/generated";
import { Category } from "@/types/category";
// import { compareDesc } from "date-fns";

/**
 * Returns an array of all category names.
 */
export const allCategoriesName = allProducts
    .filter((post) => post._raw.sourceFilePath.includes("_index.md"))
    .map((post) => post.slug.split("/")[2]);

/**
 * Returns an array of all products.
 */
export const allProductsPosts: Product[] = allProducts
    .filter(
        (post) =>
            post._raw.sourceFilePath.includes("product") &&
            !post._raw.sourceFilePath.includes("_index.md"),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


/**
 * Returns an array of all categories.
 */
export const allCategories: Category[] = allProducts
    .filter((post) => post._raw.sourceFilePath.includes("_index.md"))
    .map((categories) => ({
        ...categories,
        image: categories.image || "",
        id: categories.id,
        category: categories.slug.split("/")[2],
        products: allProductsPosts
            .filter((post) => categories.slug.includes(post.category))
            .reverse(),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
/**
 * 获取单个分类的数据
 *
 * @param category 分类名称
 * @returns 返回符合条件的分类数据对象，如果没有找到则返回undefined
 */
export const getSingleCategoryData = (category) => {
    allCategories.find((data) => {
        return data.category === category;
    });
};
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
            !post._raw.sourceFilePath.includes("_index.md"),
    )
        .filter((post) => {
            return post.category.includes(category);
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    // .sort((a, b) => {
    //     return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    // });
};

// export const allTags = Array.from(
//     [...allProductsPosts].reduce((ac, v) => {
//         v.tags.forEach((tag) => ac.add(tag));
//         return ac;
//     }, new Set<string>([])),
// ).filter(Boolean);
// export const reducedAllBlogPosts = allBlogPosts.map(reducePost);
