"use client";
import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";

import { useTranslation } from "app/[locale]/i18n/client";
import { LocaleTypes } from "app/[locale]/i18n/settings";
import { useParams } from "next/navigation";
// const checkIcon = (
//   <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
//     <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//   </svg>
// );

const AboutSection = () => {
  //   const List = ({ text }: any) => (
  //     <p className="mb-5 flex items-center text-lg font-medium text-body-color">
  //       <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-sm bg-primary bg-opacity-10 text-primary">
  //         {checkIcon}
  //       </span>
  //       {text}
  //     </p>
  //   );

  const locale = useParams()?.locale as LocaleTypes;

  const { t } = useTranslation(locale, "about");
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-8/12">
              <SectionTitle
                title={t("Brand Overview")}
                paragraph={t("Brand Story")}
                mb="10px"
              />

              <div className="wow fadeInUp mb-12 lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 lg:w-full ">
                    <p className="text-xs font-light !leading-relaxed text-black  mb-3 ">
                      {t("Brand Story1")}
                    </p>

                    <p className="text-xs font-light !leading-relaxed text-black  mb-9">
                      {t("Brand Story2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-4/12">
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

          <div className="mt-10 -mx-4 flex flex-wrap border-t border-body-color/[.15] pt-12 dark:border-white/[.15]">
            <h2 className="w-full px-4 lg:w-12/12 mb-4 text-xl font-normal !leading-tight text-primary">
              {t("Technical features")}
            </h2>
            <div className="w-full px-4 lg:w-6/12">
              <div className={`wow fadeInUp w-full `} data-wow-delay=".1s">
                <p className="text-xs font-light !leading-relaxed text-black mb-9 ">
                  {t("Features1")}
                </p>

                <p className="text-xs font-light !leading-relaxed text-black  mb-9">
                  {t("Features2")}
                </p>
                <p className="text-xs font-light !leading-relaxed text-black ">
                  {t("Features3")}
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <p className="text-xs font-light !leading-relaxed text-black  mb-9">
                {t("Features4")}
              </p>

              <p className="text-xs font-light !leading-relaxed text-black  mb-9">
                {t("Features5")}
              </p>

              <p className="text-xs font-light !leading-relaxed text-black  mb-9">
                {t("Features6")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="page-description">
        <div className="container">
          <h1 className="text-3xl">{t("Products")}</h1>
          <p className="text-xs font-light">{t("Products Description")}</p>
          <div className="text-center w-64 mx-auto">
            <a
              href="/products/"
              className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-light h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto "
            >
              <span className="fl-button-text">{t("View Products")}</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
