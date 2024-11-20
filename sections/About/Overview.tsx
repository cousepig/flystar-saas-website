import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSection = () => {
  const List = ({ text }: any) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-sm bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="The Mathematical Order of Acoustic Art"
                paragraph="SYRINCS is a professional audio brand suitable for installation or portable use, indoors or outdoors, large-scale or small-scale applications. SYRINCS speakers, control electronics, mechanical accessories, and remote control devices are designed to meet diverse application needs and withstand harsh environmental conditions."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 lg:w-full ">



                    <p className="mb-9 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Founded in 1981 in Berlin, Germany, by Dr. Wolfgang Bartsch, Conrad Schucht, and Jürgen Eggeling, SYRINCS has adopted a highly rigorous mathematical order in the design of its tonal characteristics. This mathematical precision is not dull but brings satisfaction to users with its pleasing results. Over its more than 30-year history, the brand has introduced various systems, including the Club passive speaker system, "MPA" speaker system, "S3" and "S2" compact high sound-pressure level speaker systems, the Eurosub speaker system for large venues, the high-end Odaiko Hi-Fi subwoofer, and the modern, stylish "MusicMate" series. Notably, the M3-220DT, launched in 2000, remains a bestseller to this day.
                    </p>

                    <p className="mb-9 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      SYRINCS professional audio systems cater to a wide range of installation and application needs, capable of operating reliably in even the most challenging climatic conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  quality={75}
                  priority={true}
                  fill
                  className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
