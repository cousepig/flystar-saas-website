import { allProducts } from "contentlayer/generated";
import { Product } from "@/types/product";

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
            !post._raw.sourceFilePath.includes("_index.md"),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


// export const getNextProducts = (slug: string) => {
//     const allProductss = getAllProducts();
//     return allProductss.filter((Products) => Products !== getCurrentProducts(slug));
// };