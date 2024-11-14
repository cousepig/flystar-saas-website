import ProductLayouts from "@/components/product/ProductLayouts";
import LoadingProducts from "@/components/skeleton/SkeletonProducts";
import SectionTitle from "../../components/SectionTitle";
import Breadcrumb from "@/components/Breadcrumb";
import featuresData from "@/sections/Features/featuresData";
import SingleFeature from "@/sections/Features/SingleFeature";
// import { defaultSort, sorting } from "@/lib/constants";
// import { getListPage } from "@/lib/contentParser";
// import {
//   getCollectionProducts,
//   getCollections,
//   getHighestProductPrice,
//   getProducts,
//   getVendors,
// } from "@/lib/shopify";
// import { PageInfo, Product } from "@/lib/shopify/types";
// import CallToAction from "@/partials/CallToAction";
// import ProductCardView from "@/partials/ProductCardView";
// import ProductFilters from "@/partials/ProductFilters";
// import ProductListView from "@/partials/ProductListView";
import { Suspense } from "react";

interface SearchParams {

  c?: string;
}

const ShowProducts = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const {
    c: category,
  } = searchParams as {
    [key: string]: string;
  };
  console.log(searchParams);

  const { layout, cursor } = searchParams as { [key: string]: string };

  // const { sortKey, reverse } =
  //   sorting.find((item) => item.slug === sort) || defaultSort;

  let productsData: any;
  let vendorsWithCounts: { vendor: string; productCount: number }[] = [];
  let categoriesWithCounts: { category: string; productCount: number }[] = [];

  if (category) {
    let queryString = "";


    const query = {
      query: queryString,
      cursor,
    };

    productsData =
      category && category !== "all"
        ? await getCollectionProducts({
          collection: category
        })
        : await getProducts(query);

    const uniqueVendors: string[] = [
      ...new Set(
        ((productsData?.products as Product[]) || []).map((product: Product) =>
          String(product?.vendor || ""),
        ),
      ),
    ];

    const uniqueCategories: string[] = [
      ...new Set(
        ((productsData?.products as Product[]) || []).flatMap(
          (product: Product) =>
            product.collections.nodes.map(
              (collectionNode: any) => collectionNode.title || "",
            ),
        ),
      ),
    ];

    vendorsWithCounts = uniqueVendors.map((vendor: string) => {
      const productCount = (productsData?.products || []).filter(
        (product: Product) => product?.vendor === vendor,
      ).length;
      return { vendor, productCount };
    });

    categoriesWithCounts = uniqueCategories.map((category: string) => {
      const productCount = ((productsData?.products as Product[]) || []).filter(
        (product: Product) =>
          product.collections.nodes.some(
            (collectionNode: any) => collectionNode.title === category,
          ),
      ).length;
      return { category, productCount };
    });
  } else {
    // Fetch all products
    // productsData = await getProducts({ sortKey, reverse, cursor });
  }

  return (
    <>
      <Breadcrumb pageName="产品中心  1" />
      <section
        id="products"
        className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="产品中心"
            paragraph="探索我们精选使用SYRINCS的酒吧，Livehouse、PartyK、娱乐DJ、现场安装应用扩声系统。更多DJ音乐人和设计师都信任我们。"
            center
          />
        </div>
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}


            </div>
          </div>
        </section>

      </section>



      <ProductLayouts
        // categories={categories}
        vendorsWithCounts={vendorsWithCounts}
        categoriesWithCounts={categoriesWithCounts}
      />

      <div className="container">
        <div className="row">
          <div className="col-3 hidden lg:block -mt-14">
            {/* <ProductFilters
              categories={categories}
              vendors={vendors}
              tags={tags}
              maxPriceData={maxPriceData!}
              vendorsWithCounts={vendorsWithCounts}
              categoriesWithCounts={categoriesWithCounts}
            /> */}
          </div>

          <div className="col-12 lg:col-9">
            {/* {layout === "list" ? (
              <ProductListView searchParams={searchParams} />
            ) : (
              <ProductCardView searchParams={searchParams} />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

const ProductsListPage = ({ searchParams }: { searchParams: any }) => {

  return (
    <>
      <Suspense fallback={<LoadingProducts />}>
        <ShowProducts searchParams={searchParams} />
      </Suspense>

    </>
  );
};

export default ProductsListPage;