import Link from "next/link";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Support & Service | Syrincs Pro Entertainment Audio System",
  description:
    "Access our extensive knowledge base and receive expert pre- and after-sales support to maximize your audio system performance. Whether you need guidance on practices, configuration help, or solutions to issues, we’re here to assist.",
};

const ContactPage = () => {
  const banner = [
    {
      title: "Support & Service",
      description:
        "Access our extensive knowledge base and receive expert pre- and after-sales support to maximize your audio system performance. Whether you need guidance on practices, configuration help, or solutions to issues, we’re here to assist.",
      image: "/images/banner.jpg",
    },
  ][0];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Support & Service", href: "/support" },
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
                  <h5 className="mb-5 text-xl "> Design Proposal</h5>
                  <p className="font-light text-slate-500">
                    Based on supplied venue details, including environmental
                    acoustic simulation, product list, block diagrams, and
                    speaker coverage mapping.
                  </p>
                </div>

                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl "> Design Validation</h5>
                  <p className="font-light text-slate-500">
                    Based on the client’s design, we guide the proper selection
                    and placement of Syrincs products.
                  </p>
                </div>
                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl ">
                    Design of Alternative Solutions
                  </h5>
                  <p className="font-light text-slate-500">
                    Based on existing specs, we provide advice and improved
                    system configurations based upon Syrincs products to
                    optimize the installation.
                  </p>
                </div>
                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl ">Acoustical Consultancy</h5>
                  <p className="font-light text-slate-500">
                    We help with the definition of the project’s specifications
                    in cooperation with architects and contractors.&nbsp;
                  </p>
                </div>

                <div className="px-3 py-10 ">
                  <h5 className="mb-5 text-xl ">On-Site</h5>

                  <p className="font-light text-slate-500">
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
