import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { image, slug, title, paragraph } = feature;
  return (
    <div className="w-full border-primary border rounded-lg px-6 py-6 ">
      <div className="wow fadeInUp relative" data-wow-delay=".15s">
        <div className="mb-10 flex relative block aspect-[336/240] w-full items-center justify-center rounded-md text-primary">
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-black dark:text-white ">
          {paragraph}
        </p>

        <a className="text-primary mt-10 block" href={'/products/' + slug}>查看产品1
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block ml-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg></a>
        <a className="absolute inset-0" href={'/products/' + slug}></a>
      </div>
    </div>
  );
};

export default SingleFeature;
