import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelateProducts from "@/components/partials/RelateProducts";

import {
  getCurrentProducts,
  getProductsByCategory,
} from "@/lib/get-product-data";
import {
  allCategories,
  // getSingleCategoryData,
} from "@/lib/get-categories-data";
// import { getMDXComponent } from "next-contentlayer/hooks";
import Gallery from "@/components/partials/Gallery";
import TagButton from "@/sections/Showcase/TagButton";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";
export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const slug = `product/${resolvedParams.slug.join("/")}`;
  const product = getCurrentProducts(slug);
  if (!product) return notFound();
  return {
    title:
      product.title +
      "-" +
      product.ctitle +
      " | Syrincs Pro Entertainment Audio System",
    description: product.description || product.description,
  };
}

export default async function PostPage({ params }: any) {
  const resolvedParams = await params;
  const slug = `product/${resolvedParams.slug.join("/")}`;
  const product = getCurrentProducts(slug);

  console.log(product.title, "--loading");
  if (!product) {
    return notFound();
  }
  const category = allCategories.find((p) => p.category === "speaker");
  // const category = getSingleCategoryData("speaker");
  console.log(category.title, "category");
  const categoryProducts = getProductsByCategory(product.category).slice(0, 15);

  const banner = [
    {
      title: category["title"],
      description: category["description"],
      image: "/images/banner.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: category.title, href: `/products/${category.category}` },
    { name: product.title, href: `/products/${slug}` },
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
              <div className="bg-slate-200 mt-6 py-6 grid grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="relative pl-6">
                    <dd className="inline font-light text-primary">
                      》{feature}
                    </dd>
                  </div>
                ))}
              </div>
              <h2 className="py-6 font-normal text-primary text-xl">
                Product Description
              </h2>
              <div className="mb-8 font-light prose prose-slate">
                {product.content}
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <h3 className="border-b border-body-color border-opacity-10 py-4 text-lg font-medium text-black">
                Popular Tags :
              </h3>
              <div className="flex items-center grid grid-cols-2 gap-1 py-4">
                <TagButton href="/products/microphone" text="Microphone" />
                <TagButton href="/products/mixer" text="Mixer" />
                <TagButton href="/products/processor" text="Processor" />
                <TagButton href="/products/amplifier" text="Amplifier" />
                <TagButton href="/products/speaker" text="Speaker" />
              </div>
              <h3 className="border-b border-body-color border-opacity-10 py-4 mb-4 text-lg font-medium text-black">
                Downloads
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
                      <span className="text-xs font-light text-body-color">
                        <span className="attachment-label">File size: </span>{" "}
                        513 KB
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <h3 className="border-b border-body-color border-opacity-10 py-4 text-lg font-medium text-black">
                Related Products
              </h3>
              <ul className="py-4">
                {categoryProducts.map((post, index) => (
                  <li
                    key={index}
                    className="mb-6 border-b border-body-color border-opacity-10 pb-6"
                  >
                    <Link href={post.slug}>
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
                ))}
              </ul>
            </div>
          </div>
        </div>

        <section className="specifications">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className=" w-full px-4 lg:w-4/12">
                <h2 className="py-6 font-normal text-primary text-xl">
                  Dimensional drawing
                </h2>
                <div className="relative w-full  h-[600px] w-[300px]  overflow-hidden rounded">
                  <a href={product.dimensional} className="technical-drawing">
                    <Image
                      className="lazy loaded"
                      src={product.dimensional}
                      alt="Dimensional drawing"
                      data-was-processed="true"
                      fill
                    />
                  </a>
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <h2 className="py-6 font-normal text-primary text-xl">
                  Technical specifications
                </h2>
                <table className="table text-xs font-light mt-0">
                  <tbody>
                    {product.technicalspecification.map((technical, index) => (
                      <tr key={index}>
                        <td>{technical.name}</td>
                        <td>{technical.value}</td>
                      </tr>
                    ))}
                    {/* <tr>
                      <td>Sensitivity nominal</td>
                      <td>100 dB (200 Hz - 10 kHz)</td>
                    </tr>
                    <tr>
                      <td>Nominal impedance&nbsp;&nbsp;</td>
                      <td>8 ohms</td>
                    </tr>
                    <tr>
                      <td>Recommended drive</td>
                      <td>
                        Sentinel3 min., max. 3 pcs. per channel (2.7 ohms)
                      </td>
                    </tr>
                    <tr>
                      <td>Nominal SPL peak</td>
                      <td>
                        126 dB (Sentinel3 200 Hz - 10 kHz) 132 dB (Sentinel10
                        200 Hz - 10 kHz)
                      </td>
                    </tr>
                    <tr>
                      <td>Dispersion H x V</td>
                      <td>90° x 40° or 40° x 90° (40° line-source)</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <h2 className="py-6 font-normal text-primary text-xl">
                  Physical specifications
                </h2>
                <table className="table text-xs font-light mt-0">
                  <tbody>
                    {product.physicalspecification.map((physical, index) => (
                      <tr key={index}>
                        <td>{physical.name}</td>
                        <td>{physical.value}</td>
                      </tr>
                    ))}
                    {/* <tr>
                      <td>System</td>
                      <td>2-way, full-range</td>
                    </tr>
                    <tr>
                      <td>Filtering</td>
                      <td>passive</td>
                    </tr>
                    <tr>
                      <td>Driver LF</td>
                      <td>1x AW12.3ND-8 12” Neodymium, vented</td>
                    </tr>
                    <tr>
                      <td>Driver HF</td>
                      <td>1x RBN601 6” pro-ribbon driver</td>
                    </tr>
                    <tr>
                      <td>Connectors</td>
                      <td>2x Speakon NL4 input/link</td>
                    </tr>
                    <tr>
                      <td>Physical dimensions</td>
                      <td>
                        &nbsp;mm&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inches
                      </td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>
                        673&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        26.5
                      </td>
                    </tr>
                    <tr>
                      <td>Width</td>
                      <td>
                        350
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        13.8
                      </td>
                    </tr>
                    <tr>
                      <td>Depth</td>
                      <td>
                        345
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        13.6
                      </td>
                    </tr>
                    <tr>
                      <td>Weight (approx.)</td>
                      <td>
                        18
                        kg&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        39.6 lb
                      </td>
                    </tr>
                    <tr>
                      <td>Warranty</td>
                      <td>6 years limited</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white mx-auto">
          <div className="container">
            <h2 className="mt-6 py-6 font-normal text-primary text-xl">
              You may also like
            </h2>
            <RelateProducts data={categoryProducts} />
          </div>
        </div>
      </section>
    </>
  );
}
