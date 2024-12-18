import ProductCard from "@/components/partials/ProductCard";
// import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { allCategories } from "@/lib/get-categories-data";
// import { allProducts, Product, allArticles } from "contentlayer/generated";

// import type { NextRequest } from 'next/server'
// import { NextResponse } from 'next/server' ,request: NextRequest

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
            <h1 className="text-xl">{category.title}</h1>
            <p>{category.description}</p>
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
                    {category.title}
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
        {/* <div className="container">
          <SectionTitle
            title={category.title}
            paragraph={category.description}
            center
          />
        </div> */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
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
