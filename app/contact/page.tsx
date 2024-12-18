
import Contact from "@/sections/Contact";
import Link from "next/link"
import Image from "next/image"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | Syrincs",
  description: "This is Contact Page for website",
};

const ContactPage = () => {
  return (
    <>
      
      <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
   
    <div
      className="relative h-[300px] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-active
            data-twe-carousel-item>
             <Image
                        src="/images/banner.jpg"
                        alt="image"
                        fill
                        className="block h-full w-full object-cover object-center"
                      />
     
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-xl">Case Studies</h5>
        <p>
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
  
   
  </div>
  <section className="relative z-10 overflow-hidden bg-secondary">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              </div>
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
                  Contact us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Contact />
    </>
  );
};

export default ContactPage;
