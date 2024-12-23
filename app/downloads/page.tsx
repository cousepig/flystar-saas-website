// import Contact from "@/sections/Contact";
import Link from "next/link";
import Image from "next/image";
import { LP_GRID_ITEMS } from "@/lp-items";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | Syrincs",
  description: "This is Contact Page for website",
};

const ContactPage = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative h-[300px] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
        >
          <Image
            src="/images/banner.jpg"
            alt="image"
            fill
            className="block h-full w-full object-cover object-center"
          />

          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">Downloads</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <section className="relative z-10 overflow-hidden bg-secondary">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12"></div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary pro-font-rgregular"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary pro-font-rgregular">
                    Downloads
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap mb-5">
        <div className="container px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed border-stone-200 bg-light/30">
              {/* <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent"> */}
              {/* <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <span className="mr-3 font-semibold text-dark">
                    Projects Deliveries
                  </span>
                  <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
                    All projects from the Loopple team
                  </span>
                </h3> */}
              {/* <div className="relative flex flex-wrap items-center my-2">
                  <a
                    href="javascript:void(0)"
                    className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                  >
                    {" "}
                    See other projects{" "}
                  </a>
                </div> */}
              {/* </div> */}
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    {/* <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-start min-w-[175px]">Name</th>
                        <th className="pb-3 text-end min-w-[100px]">
                          Language
                        </th>
                        <th className="pb-3 text-end min-w-[100px]">Version</th>
                        <th className="pb-3 pr-12 text-end min-w-[100px]">
                          Update
                        </th>
                        <th className="pb-3 text-end min-w-[50px]">Download</th>
                      </tr>
                    </thead> */}
                    <tbody>
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
                                      href={`https://docs.syrincs.hk/static/${singleItem.filename}`}
                                      target="_blank"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {singleItem.title}
                                    </Link>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-end">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  English
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-end">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                  v1.0
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-end">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2023-08-23
                                </span>
                              </td>
                              {/* <td className="pr-0 text-center">
                                {" "}
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  PDF
                                </span>
                              </td> */}
                              <td className="p-3 pr-5 text-end">
                                <Link
                                  href={`https://docs.syrincs.hk/static/${singleItem.filename}`}
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
                            // <tr key={singleItem.id}>
                            //   <td className="border border-gray-200 px-2 py-3">
                            //     <Link href={`https://docs.syrincs.hk/static/${singleItem.filename}`} target="_blank" className="flex ">
                            //       {" "}
                            //       {t("website.name")} {singleItem.slug} {t(singleItem.type)}{" "}
                            //     </Link>
                            //   </td>
                            //   <td className="border-y border-gray-200 px-2 py-3 text-right">
                            //     <Link href={`https://docs.syrincs.hk/static/${singleItem.filename}`} target="_blank" className="flex ">
                            //       <i className="bi-download pr-2"></i>
                            //       {t("download-action")}{" "}
                            //     </Link>
                            //   </td>
                            // </tr>
                          ))}
                        </>
                      ))}
                      {/* <tr className="border-b border-dashed last:border-b-0">
                        <td className="p-3 pl-0">
                          <div className="flex items-center">
                            <div className="flex flex-col justify-start">
                              <a
                                href="javascript:void(0)"
                                className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                              >
                                {" "}
                                Social Media API{" "}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            English
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                            v1.0
                          </span>
                        </td>
                        <td className="p-3 pr-12 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            2023-08-23
                          </span>
                        </td>
                        <td className="pr-0 text-center">
                          {" "}
                          <span className="font-semibold text-light-inverse text-md/normal">
                            PDF
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-dashed last:border-b-0">
                        <td className="p-3 pl-0">
                          <div className="flex items-center">
                            <div className="flex flex-col justify-start">
                              <a
                                href="javascript:void(0)"
                                className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                              >
                                {" "}
                                Geolocation App{" "}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            English
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-danger bg-danger-light rounded-lg">
                            v1.0
                          </span>
                        </td>
                        <td className="p-3 pr-12 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            2024-04-11
                          </span>
                        </td>
                        <td className="pr-0 text-center">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            PDF
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-dashed last:border-b-0">
                        <td className="p-3 pl-0">
                          <div className="flex items-center">
                            <div className="flex flex-col justify-start">
                              <a
                                href="javascript:void(0)"
                                className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                              >
                                {" "}
                                iOS Login{" "}
                                <span className="text-sm">(Morra)</span>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            English
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                            v1.0
                          </span>
                        </td>
                        <td className="p-3 pr-12 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            2024-04-11
                          </span>
                        </td>
                        <td className="pr-0 text-center">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            PDF
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-dashed last:border-b-0">
                        <td className="p-3 pl-0">
                          <div className="flex items-center">
                            <div className="flex flex-col justify-start">
                              <a
                                href="javascript:void(0)"
                                className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                              >
                                {" "}
                                Axios Menu{" "}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            English
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                            v1.0
                          </span>
                        </td>
                        <td className="p-3 pr-12 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            2024-04-11
                          </span>
                        </td>
                        <td className="pr-0 text-center">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            PDF
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-dashed last:border-b-0">
                        <td className="p-3 pl-0">
                          <div className="flex items-center">
                            <div className="flex flex-col justify-start">
                              <a
                                href="javascript:void(0)"
                                className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                              >
                                {" "}
                                Resto Aperto{" "}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            English
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-danger bg-danger-light rounded-lg">
                            v1.0
                          </span>
                        </td>
                        <td className="p-3 pr-12 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            2024-04-11
                          </span>
                        </td>
                        <td className="pr-0 text-center">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            PDF
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </td>
                      </tr> */}
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

export default ContactPage;
