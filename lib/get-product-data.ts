import { allProducts, Product } from "contentlayer/generated";
// import { Product } from "@/types/product";

export const getCurrentProducts = (slug: string) => {
    const currentProducts = allProducts.find((product) => product._raw.flattenedPath === slug);
    return currentProducts;
};
// const getAllProducts = () => {
//     return allProducts.filter((product) => !product.draft);
// };
export const getAllProducts: Product[] = allProducts
    .filter(
        (post) =>
            post._raw.sourceFilePath.includes("product") &&
            !post._raw.sourceFilePath.includes("_index.mdx"),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


// export const getNextProducts = (slug: string) => {
//     const allProductss = getAllProducts();
//     return allProductss.filter((Products) => Products !== getCurrentProducts(slug));
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
            !post._raw.sourceFilePath.includes("_index.mdx"),
    )
        .filter((post) => {
            return post.category.includes(category);
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    // .sort((a, b) => {
    //     return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    // });
};