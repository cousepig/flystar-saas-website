import Link from "next/link";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";

import { createTranslation } from "../../i18n/server";
import { LocaleTypes } from "../../i18n/settings";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const { locale } = await params;
  const { t } = await createTranslation(locale, "support");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}
interface PageProps {
  params: Promise<{
    locale: LocaleTypes;
  }>;
}

const ContactPage = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { t } = await createTranslation(locale, "support");

  const banner = [
    {
      title: t("title"),
      description: t("description"),
      image: "/images/banner.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("Support"), href: `/${locale}/support` },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <div className="flex flex-wrap mb-5">
        <div className="container px-3 mb-6  mx-auto">
          <div className=" mb-lg-0 ml-lg-0 mr-lg-0 mt-lg-0 pb-lg-0 pl-lg-0 pr-lg-0 pt-lg-0">
            <div className=" mb-lg-0 ml-lg-0 mr-lg-0 mt-lg-0 pb-lg-0 pl-lg-0 pr-lg-0 pt-lg-0">
              <div id="fragment-43653-mzbu">
                <div className="component-image overflow-hidden"></div>
              </div>
            </div>
          </div>
          <div className=" container-fluid container-fluid-max-xl mb-lg-8 mt-lg-8 pb-lg-0 pl-lg-4 pr-lg-4 pt-lg-0 pr-sm-4 pl-sm-4 pr-4 mb-7 pl-4 mt-7 pr-md-4 pl-md-4">
            <div className=" mb-lg-0 ml-lg-0 mr-lg-0 mt-lg-6 pb-lg-0 pl-lg-0 pr-lg-0 pt-lg-0 mr-sm-0 ml-sm-0 pr-0 pl-0 mr-md-5 ml-md-5">
              <div className="grid grid-cols-3 gap-6 row align-items-lg-start align-items-sm-start align-items-start align-items-md-start flex-lg-row flex-sm-row flex-row flex-md-row">
                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl "> {t("Support1-title")}</h5>
                  <p className="font-light text-slate-500">
                    {t("Support1-desc")}
                  </p>
                </div>

                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl "> {t("Support2-title")}</h5>
                  <p className="font-light text-slate-500">
                    {t("Support2-desc")}
                  </p>
                </div>
                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl "> {t("Support3-title")}</h5>
                  <p className="font-light text-slate-500">
                    {t("Support3-desc")}
                  </p>
                </div>
                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl "> {t("Support4-title")}</h5>
                  <p className="font-light text-slate-500">
                    {t("Support4-desc")}
                  </p>
                </div>

                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl "> {t("Support5-title")}</h5>

                  <p className="font-light text-slate-500">
                    {t("Support5-desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className=" mb-lg-4 ml-lg-0 mr-lg-0 mt-lg-8 pb-lg-0 pl-lg-0 pr-lg-0 pt-lg-0 mb-sm-4 mt-sm-8 mb-4 mt-8 mb-md-4 mt-md-8">
              <div id="fragment-43641-penu">
                <div className="component-button text-center text-break ">
                  <div>
                    <Link
                      href={`/${locale}/contact`}
                      className="mx-1 my-1 inline-block rounded bg-primary px-8 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      target="_blank"
                    >
                      {t("CONTACT US")}
                    </Link>
                    {/* <a href="https://support.rcfaudio.com/hc/requests/new?ticket_form_id=17124012323357" data-senna-off="true" className="btn btn-nm btn-primary  " id="fragment-penu-link" target="_blank">CONTACT US</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
