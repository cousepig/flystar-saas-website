import Image from "next/image";
import Link from "next/link";
import categoryData from "@/sections/products/categoryData";
import SingleCategory from "@/sections/products/SingleCategory";

import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";
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
  const banner = [
    {
      title: "Products",
      description:
        " Explore our carefully selected bars that use SYRINCS, Livehouse、PartyK、 Entertainment DJ, on-site installation and application of sound reinforcement system. More DJ musicians and designers trust us.",
      image: "/images/banner.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
  ];
  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />

      <section id="products" className="py-16 ">
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
