import Image from "next/image";
import Link from "next/link";
import categoryData from "@/sections/products/categoryData";
import SingleCategory from "@/sections/products/SingleCategory";

// import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Syrincs Pro Entertainment Audio System",
  description:
    "Explore our carefully selected bars that use SYRINCS, Livehouse、PartyK、 Entertainment DJ, on-site installation and application of sound reinforcement system. More DJ musicians and designers trust us.",
};
interface SearchParams {
  c?: string;
}

const ShowProducts = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { c: category } = searchParams as {
    [key: string]: string;
  };

  return (
    <>
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative h-[300px] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
        >
          <Image
            src="/images/banner.jpg"
            alt="image"
            fill
            className="block h-full w-full object-cover object-center"
          />

          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h1 className="text-xl">Products</h1>
            <p>
              Explore our carefully selected bars that use SYRINCS,
              Livehouse、PartyK、 Entertainment DJ, on-site installation and
              application of sound reinforcement system. More DJ musicians and
              designers trust us.
            </p>
          </div>
        </div>
      </div>
      <section className="relative z-10 overflow-hidden bg-secondary -mb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12"></div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary pro-font-rgregular"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary pro-font-rgregular">
                    Products
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="products"
        className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
      >
        {category}

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
  //
  return (
    <>
      <ShowProducts searchParams={searchParams} />
      {/* <Suspense fallback={<LoadingProducts />}>
      </Suspense> */}
    </>
  );
};

export default ProductsListPage;
