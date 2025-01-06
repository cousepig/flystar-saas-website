import Image from "next/image";
import { notFound } from "next/navigation";
import { getCurrentProducts } from "@/lib/get-product-data";

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const slug = `product/${resolvedParams.slug.join("/")}`;
  const product = getCurrentProducts(slug);
  if (!product) return notFound();
  return {
    title: product.title + "-" + product.ctitle + " Syrincs Specsheet",
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

  return (
    <>
      <section className="overflow-hidden specsheet ">
        <div className="h-screen">
          <div className=" page-header">
            <div className="container">
              <div className="grid grid-cols-4 gap-4 items-center justify-between">
                <div>
                  <Image
                    src="/images/logo/syrincs-logo-white.webp"
                    alt="logo"
                    width={140}
                    height={30}
                    className="w-auto h-full dark:hidden"
                  />
                </div>
                <div className="col-span-3">
                  <h1>{product.title}</h1>
                  <h2>{product.ctitle}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-[20px]">
            <div className="-mx-4 flex flex-wrap ">
              <div className="px-4 w-6/12">
                <div className="">
                  <h3 className="p-2 text-uppercase text-xs text-white">
                    <b>Description</b>
                  </h3>
                </div>
                <div className="py-6 features">
                  <p>{product.content}</p>
                </div>
                <div className="mt-6">
                  <h3 className="p-2 text-uppercase text-xs text-white">
                    <b>Features</b>
                  </h3>
                </div>
                <div className="py-6 features">
                  {product.features.map((feature, index) => (
                    <div key={index} className="relative">
                      <dd className="inline text-xs">· {feature}</dd>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-4 w-6/12">
                <div className="relative w-full">
                  <div className="aspect-[500/500] relative transform overflow-hidden mx-auto">
                    <Image src={product.image} alt={product.title} fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" page-header">
          <div className="container">
            <div className="grid grid-cols-4 gap-4 items-center justify-between">
              <div>
                <Image
                  src="/images/logo/syrincs-logo-white.webp"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-auto h-full dark:hidden"
                />
              </div>
              <div className="col-span-3">
                <h1>{product.title}</h1>
                <h2>{product.ctitle}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <section className="datasheet">
            <div className="container">
              <table className="table w-full text-sm  mt-0">
                <tbody>
                  <tr className="">
                    <td>
                      <div className="">
                        <h3 className="p-2 text-uppercase text-xs text-white">
                          <b>Technical specifications</b>
                        </h3>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  {product.technicalspecification.map((technical, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td>{technical.name}</td>
                      <td>{technical.value}</td>
                    </tr>
                  ))}
                  <tr className="">
                    <td>
                      <div className="">
                        <h3 className="p-2 text-uppercase text-xs text-white">
                          <b>Physical specifications</b>
                        </h3>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  {product.physicalspecification.map((physical, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td>{physical.name}</td>
                      <td>{physical.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
