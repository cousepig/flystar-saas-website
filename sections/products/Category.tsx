import { Brand } from "@/types/product";
import Image from "next/image";
import { Category } from "@/types/category";
import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
import brandsData from "./categoryData";

const Brands = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="发现新的[西林克斯]"
          paragraph="我们通过令人难忘、身临其境的声音，使听觉、感觉联系成为可能。"
          center
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Category }) => {
  // const { href, image, name } = brand;
  const { title, image, description, href } = brand;

  return (
    <div
      className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
      data-wow-delay=".1s"
    >
      <Link
        href={href}
        className="relative block aspect-[37/22] w-full"
      >
        {/* <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-10 bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
           
          </span> */}
        <Image src={image} alt="image" fill />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href={href}
            className="mb-4 block text-xl text-center font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        {/* <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {description}
          </p>
          <div className="flex items-center">
            
          </div> */}
      </div>
    </div>
  );
};
