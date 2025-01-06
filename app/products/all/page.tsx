// import ProductCard from "@/components/partials/ProductCard";
import { allCategories } from "@/lib/get-categories-data";

// import ImageBanner from "@/components/partials/ImageBanner";
// import Breadcrumb from "@/components/Breadcrumb";

/**
 * 分类页面组件
 *
 * @param params 包含分类标识的对象
 * @returns 返回渲染的分类页面 JSX 元素
 */
export default async function CategoryPage() {
  const categoryList = allCategories;

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
          <div className="container">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 ">
              <table className="table-auto w-full">
                {categoryList.map((category, index) => (
                  <div key={index}>
                    {category.products.map((feature, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-neutral-500"
                      >
                        <td className="px-4 py-2">{feature.title}</td>
                        <td className="px-4 py-2">{feature.ctitle}</td>
                        <td className="px-4 py-2">{feature.description}</td>
                        {/* <td className="px-4 py-2">{feature.image}</td> */}
                        <td className="px-4 py-2">{feature.content}</td>
                        <td className="px-4 py-2">
                          {feature.features.map((feature, index) => (
                            <div key={index} className="relative pl-6">
                              <dd className="inline font-light text-primary">
                                》{feature}
                              </dd>
                            </div>
                          ))}
                        </td>
                        <td className="px-4 py-2">
                          <table className="table text-xs font-light mt-0">
                            <tbody>
                              {feature.technicalspecification.map(
                                (technical, index) => (
                                  <tr key={index}>
                                    <td>{technical.name}</td>
                                    <td>{technical.value}</td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </td>
                        <td className="px-4 py-2">
                          <table className="table text-xs font-light mt-0">
                            <tbody>
                              {feature.physicalspecification.map(
                                (technical, index) => (
                                  <tr key={index}>
                                    <td>{technical.name}</td>
                                    <td>{technical.value}</td>
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
