import Image from "next/image";

const ImageBanner = ({
  banner,
}: {
  banner: { title: string; description: string; image: string };
}) => {
  const { title, description, image } = banner;
  return (
    <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      <div
        className="relative h-[300px] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-twe-carousel-active
        data-twe-carousel-item
      >
        <Image
          src={image}
          alt="image"
          fill
          className="block h-full w-full object-cover object-center"
        />

        <div className="absolute prose inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
          <h5 className="text-3xl font-light">{title}</h5>
          <p className="text-xs font-light">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
