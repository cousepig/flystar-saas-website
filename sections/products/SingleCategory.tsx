import Image from "next/image";
import Link from "next/link";

const SingleCategory = ({ params: { locale }, category }: any) => {
  const { title, image, description, slug } = category;
  return (
    <>
      <div
        className="wow fadeInUp group relative overflow-hidden bg-white duration-300 border-b border-body-color border-opacity-10 "
        data-wow-delay=".1s"
      >
        <Link
          href={`/${locale}/products/${slug}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-10 bg-primary px-4 py-2 text-sm font-semibold capitalize text-white"></span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="py-6 ">
          <h3>
            <Link
              href={`/${locale}/products/${slug}`}
              className="mb-4 block text-xl font-bold text-primary hover:text-yellow  "
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 pb-6 text-xs font-light text-body-color">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleCategory;
