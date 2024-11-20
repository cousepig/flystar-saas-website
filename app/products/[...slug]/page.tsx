
import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import Breadcrumb from "@/components/Breadcrumb";
import { allCategories } from "@/lib/get-categories-data";

type CategoryPageProps = {
  params: { slug: string };
};

/**
 * 分类页面组件
 *
 * @param params 包含分类标识的对象
 * @returns 返回渲染的分类页面 JSX 元素
 */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = allCategories.find((p) => p.category === slug[0]);
  if (!category) {
    return <div>Category not found</div>;
  }

  console.log(category, "--- loading");

  return (
    <>
      <Breadcrumb pageName={category.title} />
      <section id="products" className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28" >
        <div className="container">
          <SectionTitle title={category.title} paragraph={category.description} center />
        </div>
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
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