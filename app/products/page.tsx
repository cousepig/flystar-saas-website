
import LoadingProducts from "@/components/skeleton/SkeletonProducts";
import SectionTitle from "../../components/SectionTitle";
import Breadcrumb from "@/components/Breadcrumb";
import categoryData from "@/sections/products/categoryData";
import SingleCategory from "@/sections/products/SingleCategory";

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

  const { layout, cursor } = searchParams as { [key: string]: string };

  let productsData: any;
  let vendorsWithCounts: { vendor: string; productCount: number }[] = [];
  let categoriesWithCounts: { category: string; productCount: number }[] = [];

  if (category) {
    let queryString = "";


    const query = {
      query: queryString,
      cursor,
    };


  } else {
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
              {categoryData.map((feature) => (
                <SingleCategory key={feature.id} category={feature} />
              ))}
            </div>
          </div>
        </section>
      </section>
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