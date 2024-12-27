import Image from "next/image";
import { HISTORY_ITEMS } from "@/config/history";

const Solutions = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-2/3">
            <div className="wow fadeInUp " data-wow-delay=".2s">
              <h2 className="mb-4 text-xl font-normal !leading-tight text-primary">
                Brand Milestones
              </h2>
              {HISTORY_ITEMS.map((history, index) => (
                <div key={index} className="mb-9">
                  <h3 className="mb-4 text-xl font-normal text-black ">
                    {history.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed text-body-color ">
                    {history.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
