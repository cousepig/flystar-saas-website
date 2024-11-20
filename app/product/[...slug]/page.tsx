
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProductsPosts } from "@/lib/get-categories-data";
import { getCurrentProducts, getAllProducts } from "@/lib/get-product-data";
import { allProducts, Product } from "contentlayer/generated";

type PostPageProps = {
  params: { slug: string[] };
};


export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const slug = `product/${resolvedParams.slug.join("/")}`;
  const product = getCurrentProducts(slug);
  // const product = allProducts.find((post) => post._raw.flattenedPath === slug);
  console.log(product.title, '--loading');
  const relatedProducts = getAllProducts.sort();
  if (!product) {
    return notFound();
  }

  return (
    <section className="overflow-hidden pb-[120px] pt-[180px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">

                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {product.title}
                </h1>
              </div>
              <div>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {product.description}
                </p>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={product.image}
                      alt="image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="mb-8 prose prose-slate">
                  {product.body}1
                  {/* <MDXContent content={content} /> */}
                </div>
                {/* {images.map((img: any, index: any) => (

                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44] mb-4">
                    <Image src={img} alt={img} className="h-full w-full object-cover object-center"
                      quality={75}
                      priority={true} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>

                ))} */}


                <div className="items-center justify-between sm:flex">
                  <div className="mb-5">
                    <h4 className="mb-3 text-sm font-medium text-body-color">
                      Popular Tags :
                    </h4>
                    <div className="flex items-center">
                      {/* <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Seo" /> */}
                    </div>
                  </div>
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                      Share this product :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                      {/* <SharePost /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="shadow-three dark:bg-gray-dark mb-10 mt-12 rounded-sm bg-white p-6 dark:shadow-none lg:mt-0">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border-stroke dark:text-body-color-dark dark:shadow-two mr-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#11211f] dark:focus:border-primary dark:focus:shadow-none"
                />
                <button
                  aria-label="search button"
                  className="flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-sm bg-primary text-white"
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
              <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                Related Products
              </h3>
              <ul className="p-8">
                {relatedProducts.map((post, index) => (
                  <li key={index} className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                    <div className="flex items-center lg:block xl:flex">
                      <div className="mr-5 lg:mb-3 xl:mb-0">
                        <div className="relative h-[60px] w-[70px] overflow-hidden rounded-10 sm:h-[75px] sm:w-[85px]">
                          <Image src={post.image} alt={post.title} fill />
                        </div>
                      </div>
                      <div className="w-full">
                        <h5>
                          <Link
                            href={post.slug}
                            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
                          >
                            {post.title}
                          </Link>
                        </h5>
                        <p className="text-xs font-medium text-body-color">{post.date}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>


            {/* <NewsLatterBox /> */}
          </div>
        </div>
      </div>
    </section>

  )
}

