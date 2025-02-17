import Link from "next/link";
import { LP_GRID_ITEMS } from "@/lp-items";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";

import { createTranslation } from "../i18n/server";
import { LocaleTypes } from "../i18n/settings";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const { locale } = await params;
  const { t } = await createTranslation(locale, "download");
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
const DownloadPage = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { t } = await createTranslation(locale, "download");

  const banner = [
    {
      title: t("title"),
      description: t("description"),
      image: "/images/banner.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("Downloads"), href: `/${locale}/downloads` },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <div className="flex flex-wrap mb-5">
        <div className="container px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words ">
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <tbody className="bg-neutral-100">
                      {LP_GRID_ITEMS.map((series) => (
                        <>
                          <tr key={series.id}>
                            <td
                              className=" bg-secondary font-semibold text-dark text-center py-3"
                              colSpan={6}
                            >
                              {series.title}
                            </td>
                          </tr>
                          {series.data.map((singleItem: any) => (
                            <tr
                              className="border-b border-dashed last:border-b-0"
                              key={singleItem.id}
                            >
                              <td className="p-3 pl-5">
                                <div className="flex items-center">
                                  <div className="flex flex-col justify-start">
                                    <Link
                                      href={`/${singleItem.filename}`}
                                      target="_blank"
                                      className="mb-1 transition-colors duration-200 ease-in-out  text-secondary-inverse hover:text-primary"
                                    >
                                      {singleItem.title}
                                    </Link>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-end">
                                <span className="text-light-inverse ">
                                  English
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-end">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center text-base/none text-success bg-success-light rounded-lg">
                                  v1.0
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-end">
                                <span className="text-light-inverse ">
                                  2024-12-23
                                </span>
                              </td>
                              <td className="p-3 pr-5 text-end">
                                <Link
                                  href={`/${singleItem.filename}`}
                                  target="_blank"
                                >
                                  <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                    <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                      {/* <i className="bi-download pr-2"></i> */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPage;
