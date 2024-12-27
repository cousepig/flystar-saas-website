import ProductCard from "@/components/partials/ProductCard";
import { allCategories } from "@/lib/get-categories-data";
// import { allProducts, Product, allArticles } from "contentlayer/generated";

import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";
// import type { NextRequest } from 'next/server'
// import { NextResponse } from 'next/server' ,request: NextRequest
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const category = allCategories.find((p) => p.category === slug[0]);

  return {
    title: category.title + " | Syrincs Pro Entertainment Audio System",
    description: category.description,
  };
}
/**
 * 分类页面组件
 *
 * @param params 包含分类标识的对象
 * @returns 返回渲染的分类页面 JSX 元素
 */
export default async function CategoryPage({ params }: any) {
  const { slug } = await params;
  const category = allCategories.find((p) => p.category === slug[0]);
  console.log(category.title, "--- loading");
  //   if (category.products.length === 1) {
  //     const productUrl = request.nextUrl.clone()
  //     productUrl.pathname = `${category.products[0].slug}`;
  //     console.log(productUrl, "--- redirect");
  //   return NextResponse.redirect(productUrl, 301)

  // }
  if (!category) {
    return <div>Category not found</div>;
  }

  const banner = [
    {
      title: category.title,
      description: category.description,
      image: "/images/banner.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: category.title, href: `/products/${category.category}` },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <section
        id="products"
        className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
      >
        {/* <div className="container">
          <SectionTitle
            title={category.title}
            paragraph={category.description}
            center
          />
        </div> */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
              {category.products.map((feature, index) => (
                <ProductCard key={index} product={feature} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
