import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelateProducts from "@/components/partials/RelateProducts";

import {
  getCurrentProducts,
  getProductsByCategory,
} from "@/lib/get-product-data";
import {
  getallCategories,
  // getSingleCategoryData,
} from "@/lib/get-categories-data";
// import { getMDXComponent } from "next-contentlayer/hooks";
import Gallery from "@/components/partials/Gallery";
import TagButton from "@/sections/Showcase/TagButton";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { createTranslation } from "../../i18n/server";
export async function generateMetadata({ params }: any) {
  const { slug, locale } = await params;

  const { t } = await createTranslation(locale, "product");
  const dslug = slug.join("/");
  const product = getCurrentProducts(dslug, locale);
  console.log(slug + "--slug");
  // console.log(product, "--loading");
  if (!product) return notFound();
  return {
    title: product.title + "-" + product.ctitle + " | " + t("Sitename"),
    description: product.description || product.description,
  };
}

export default async function PostPage({ params }: any) {
  const { slug, locale } = await params;
  const { t } = await createTranslation(locale, "product");
  const dslug = slug.join("/");
  const product = getCurrentProducts(dslug, locale);
  // console.log(dslug, "--product");
  if (!product) {
    return notFound();
  }
  const category = getallCategories(locale).find(
    (p) => p.category === product.category
  );

  const categoryProducts = getProductsByCategory(
    product.category,
    locale
  ).slice(0, 15);
  // const fileName = product._raw.sourceFileName.replace(".yml", "");
  const banner = [
    {
      title: category["title"],
      description: category["description"],
      image: "/images/banner.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("Products"), href: `/${locale}/products` },
    { name: category.title, href: `/${locale}/products/${category.category}` },
    { name: product.title, href: `/${locale}/product/${slug}` },
  ];
  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: We trust the content of the JSON object
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(product?.structuredData),
        }}
      />
      <section className="overflow-hidden pb-[20px] ">
        <section className="page-description">
          <div className="container">
            <h1 className="text-3xl pt-[20px]">
              <b className="py-1"> {product.title} </b>
              <br />
              <span className="text-xl py-4"> {product.ctitle}</span>
            </h1>
            <p className="text-xs font-light"></p>
          </div>
        </section>
        <div className="container pt-[20px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative w-full">
                  <Gallery
                    data={product.images}
                    title={product.title + "-" + product.ctitle}
                  />
                </div>
              </div>
              <div className="bg-slate-200 mt-6 py-6 grid grid-cols-2 gap-6 px-6">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="relative ">
                    <dd className="inline font-light text-primary">
                      {feature}
                    </dd>
                  </div>
                ))}
              </div>
              <h2 className="py-6 font-normal text-primary text-xl">
                {t("Product Description")}
              </h2>
              <div className="mb-8 font-light prose prose-slate">
                {product.content}
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <h3 className="border-b border-body-color border-opacity-10 py-4 text-lg font-medium text-black">
                {t("Popular Tags")} :
              </h3>
              <div className="flex items-center grid grid-cols-2 gap-1 py-4">
                <TagButton
                  href={`/${locale}/products/microphone`}
                  text={t("Microphone")}
                />
                <TagButton
                  href={`/${locale}/products/mixer`}
                  text={t("Mixer")}
                />
                <TagButton
                  href={`/${locale}/products/processor`}
                  text={t("Processor")}
                />
                <TagButton
                  href={`/${locale}/products/amplifier`}
                  text={t("Amplifier")}
                />
                <TagButton
                  href={`/${locale}/products/speaker`}
                  text={t("Speaker")}
                />
              </div>
              <h3 className="border-b border-body-color border-opacity-10 py-4 mb-4 text-lg font-medium text-black">
                {t("Downloads")}
              </h3>
              <ul className="da-attachments-list">
                {product.downloads.map((download) => (
                  <li
                    key={download.title}
                    className="pdf mb-3 border-b border-body-color border-opacity-10 pb-3 flex"
                  >
                    <div className="relative h-[20px] w-[20px] overflow-hidden rounded-10 my-2 mx-2">
                      <Image
                        className="attachment-icon lazy loaded"
                        src={download.icon}
                        alt="pdf"
                        data-was-processed="true"
                        fill
                      />
                    </div>

                    <div className="w-full">
                      <a
                        href={download.url}
                        title={product.title + " " + download.title}
                        className="block text-base font-medium leading-snug text-primary hover:text-black  "
                      >
                        {product.title + " " + download.title}
                      </a>
                      <span className="text-xs font-light text-body-color"></span>
                    </div>
                  </li>
                ))}
                <li className="pdf mb-3 border-b border-body-color border-opacity-10 pb-3 flex">
                  <div className="relative h-[20px] w-[20px] overflow-hidden rounded-10 my-2 mx-2">
                    <Image
                      className="attachment-icon lazy loaded"
                      src="/images/pdf.gif"
                      alt="pdf"
                      data-was-processed="true"
                      fill
                    />
                  </div>

                  <div className="w-full">
                    <a
                      href={`/datasheet/${locale}/${product.slug}.pdf`}
                      title={product.title + " Technical specs"}
                      className="block text-base font-medium leading-snug text-primary hover:text-black  "
                    >
                      {product.title + " " + t("Technical specs")}
                    </a>
                    <span className="text-xs font-light text-body-color"></span>
                  </div>
                </li>
              </ul>
              <h3 className="border-b border-body-color border-opacity-10 py-4 text-lg font-medium text-black">
                {t("Related Products")}
              </h3>
              <ul className="py-4">
                {categoryProducts.map((post, index) =>
                  index >= 6 ? null : (
                    <li
                      key={index}
                      className="mb-6 border-b border-body-color border-opacity-10 pb-6"
                    >
                      <Link href={`/${locale}/product/${post.slug}`}>
                        <div className="flex items-center lg:block xl:flex">
                          <div className="mr-5 lg:mb-3 xl:mb-0">
                            <div className="relative h-[60px] w-[70px] overflow-hidden rounded-10 sm:h-[75px] sm:w-[85px]">
                              <Image src={post.image} alt={post.title} fill />
                            </div>
                          </div>
                          <div className="w-full">
                            <h5 className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary">
                              {post.title}
                            </h5>
                            <p className="text-xs font-medium text-body-color">
                              {post.ctitle}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <section className="specifications">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className=" w-full px-4 lg:w-4/12">
                <h2 className="py-6 font-normal text-primary text-xl">
                  {t("Dimensional drawing")}
                </h2>
                <div className="relative w-full  h-[600px] w-[300px]  overflow-hidden rounded">
                  {product.dimensional === null ? (
                    ""
                  ) : (
                    <a href={product.dimensional} className="technical-drawing">
                      <Image
                        className="lazy loaded"
                        src={product.dimensional}
                        alt="Dimensional drawing"
                        data-was-processed="true"
                        fill
                      />
                    </a>
                  )}
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <h2 className="py-6 font-normal text-primary text-xl">
                  {t("Technical specifications")}
                </h2>
                <table className="table w-full text-xs font-light mt-0">
                  <tbody>
                    {product.technicalspecification.map((technical, index) => (
                      <tr key={index}>
                        <td>{technical.name}</td>
                        <td>{technical.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <h2 className="py-6 font-normal text-primary text-xl">
                  {t("Physical specifications")}
                </h2>
                <table className="table w-full text-xs font-light mt-0">
                  <tbody>
                    {product.physicalspecification.map((physical, index) => (
                      <tr key={index}>
                        <td>{physical.name}</td>
                        <td>{physical.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white mx-auto">
          <div className="container">
            <h2 className="mt-6 py-6 font-normal text-primary text-xl">
              {t("You may also like")}
            </h2>
            <RelateProducts params={{ locale }} data={categoryProducts} />
          </div>
        </div>
      </section>
    </>
  );
}
