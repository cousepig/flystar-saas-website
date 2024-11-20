import { allShowcases, Showcase } from "contentlayer/generated";

export const getCurrentShowcases = (slug: string) => {
    const currentProducts = allShowcases.find((product) => product._raw.flattenedPath === slug);
    return currentProducts;
};

export const getAllShowcases: Showcase[] = allShowcases
    .filter(
        (post) =>
            post._raw.sourceFilePath.includes("showcase") &&
            !post._raw.sourceFilePath.includes("_index.md"),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

