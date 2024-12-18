// import Contact from "@/sections/Contact";
import Link from "next/link";
import Image from "next/image";
// import { LP_GRID_ITEMS } from "@/lp-items";

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
            <h5 className="text-xl">Service</h5>
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
                    Service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <div className="grid grid-cols-3 row align-items-lg-start align-items-sm-start align-items-start align-items-md-start flex-lg-row flex-sm-row flex-row flex-md-row">
                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl "> Design Proposal</h5>
                  Based on supplied venue details, including environmental
                  acoustic simulation, product list, block diagrams, and speaker
                  coverage mapping.
                </div>

                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl "> Design Validation</h5>
                  Based on the client’s design, we guide the proper selection
                  and placement of Syrincs products.
                </div>
                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl ">
                    Design of Alternative Solutions
                  </h5>
                  Based on existing specs, we provide advice and improved system
                  configurations based upon Syrincs products to optimize the
                  installation.
                </div>
                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl ">Acoustical Consultancy</h5>
                  <p dir="ltr">
                    We help with the definition of the project’s specifications
                    in cooperation with architects and contractors.&nbsp;
                  </p>
                </div>

                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl ">On-Site</h5>

                  <p dir="ltr">
                    We provide system start-up and commissioning. Syrincs
                    produces pre-wired racks on request, complete with
                    connection diagrams and operation manuals.
                  </p>
                </div>
              </div>
            </div>
            <div className=" mb-lg-4 ml-lg-0 mr-lg-0 mt-lg-8 pb-lg-0 pl-lg-0 pr-lg-0 pt-lg-0 mb-sm-4 mt-sm-8 mb-4 mt-8 mb-md-4 mt-md-8">
              <div id="fragment-43641-penu">
                <div className="component-button text-center text-break ">
                  <div>
                    <Link
                      href={"/contact"}
                      className="mx-1 my-1 inline-block rounded bg-primary px-8 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      target="_blank"
                    >
                      CONTACT US
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
