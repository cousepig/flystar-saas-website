
import Breadcrumb from "@/components/Breadcrumb";

// import { NextSeo } from "next-seo";


import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";



const AboutPage = () => {
  return (
    <>

      <Breadcrumb
        pageName="Support"
      />
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Support"
                  paragraph="SYRINCS is a professional audio brand used for installation or movement, indoor or outdoor, large or small. SYRINCS speakers, control electronics, mechanical accessories, and remote control devices can fully meet various application conditions and harsh weather environments."
                  mb="44px"
                />

                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 lg:w-full ">

                      <p className="mb-9 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">In 1981, SYRINCS professional audio brand was founded by Dr. Wolfgang Bartsch, Conrad Schucht, and J ü rgen Eggling in Berlin, Germany. In the design of tone usage, a very rigorous mathematical order is used. This amazing mathematical order is not boring, but brings us a satisfied smile on our face. With over thirty years of glorious history, we have successively launched Club passive speaker system, MPA speaker system, S3 and S2 compact high pressure level speaker systems, Eurosub speaker system used in large clubs, Odaiko high-end Hi Fi subwoofer, and modern and fashionable MusicMate series speakers. In 2000, the M3-220DT was launched and has been selling well ever since.</p>

                      <p className="mb-9 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">SYRINCS is a professional audio brand used for installation or movement, indoor or outdoor, large or small. SYRINCS speakers, control electronics, mechanical accessories, and remote control devices can fully meet various application conditions and harsh weather environments.</p>

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
    </>
  );
};

export default AboutPage;
