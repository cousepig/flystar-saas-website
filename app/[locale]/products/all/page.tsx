// import ProductCard from "@/components/partials/ProductCard";
import { getallCategories } from "@/lib/get-categories-data";

// import ImageBanner from "@/components/partials/ImageBanner";
// import Breadcrumb from "@/components/Breadcrumb";

/**
 * 分类页面组件
 *
 * @param params 包含分类标识的对象
 * @returns 返回渲染的分类页面 JSX 元素
 */
export default async function CategoryPage({ params }: any) {
  const { locale } = await params;
  const categoryList = getallCategories(locale);

  // const banner = [
  //   {
  //     title: category.title,
  //     description: category.description,
  //     image: "/images/banner.jpg",
  //   },
  // ][0];
  // const breadcrumbs = [
  //   { name: "Home", href: "/" },
  //   { name: "Products", href: "/products" },
  //   { name: category.title, href: `/products/${category.category}` },
  // ];

  return (
    <>
      {/* <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} /> */}
      <section id="products" className="py-16 md:py-20 lg:py-28">
        <section className="section">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 ">
              <table className="table-auto w-full">
                {categoryList.map((category, index) => (
                  <div key={index}>
                    {category.products.map((feature, index) => (
                      <tr
                        key={index}
                        className="border border-gray-200 dark:border-neutral-500"
                      >
                        <td className="border border-gray-200 px-2 py-2">
                          {feature.title}
                          <a
                            href={`/${locale}/api/datasheet/${feature._raw.sourceFileName.replace(
                              ".yml",
                              ".pdf"
                            )}`}
                            className="block text-base font-medium leading-snug text-primary hover:text-black  "
                          >
                            {feature.title + " " + "Technical specs"}
                          </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-2">
                          {feature.ctitle}
                        </td>
                        <td className="border border-gray-200 px-2 py-2">
                          {feature.description}
                        </td>
                        {/* <td className="px-4 py-2">{feature.image}</td> */}
                        <td className="border border-gray-200 px-2 py-2">
                          {feature.content}
                        </td>
                        <td className="border border-gray-200 px-2 py-2">
                          {feature.features.map((feature, index) => (
                            <div key={index} className="relative pl-6">
                              <dd className="inline font-light text-primary">
                                》{feature}
                              </dd>
                            </div>
                          ))}
                        </td>
                        <td className="border border-gray-200 px-2 py-2">
                          <table className="table text-xs font-light mt-0">
                            <tbody>
                              {feature.technicalspecification.map(
                                (technical, index) => (
                                  <tr key={index}>
                                    <td className="border border-gray-200 px-2 py-2">
                                      {technical.name}
                                    </td>
                                    <td className="border border-gray-200 px-2 py-2">
                                      {technical.value}
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </td>
                        <td className="border border-gray-200 px-2 py-2">
                          <table className="table text-xs font-light mt-0">
                            <tbody>
                              {feature.physicalspecification.map(
                                (technical, index) => (
                                  <tr key={index}>
                                    <td className="border border-gray-200 px-2 py-2">
                                      {technical.name}
                                    </td>
                                    <td className="border border-gray-200 px-2 py-2">
                                      {technical.value}
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    ))}
                  </div>
                ))}
              </table>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
