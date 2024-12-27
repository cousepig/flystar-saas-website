"use client";

import React from "react";
import Link from "next/link";

interface breadType {
  name: string;
  href: string;
}
interface DemoSliderProps {
  data: breadType[];
}
const Breadcrumb: React.FC<DemoSliderProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-secondary">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-4/12 lg:w-4/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12"></div>
            </div>
            <div className="w-full px-4 md:w-8/12 lg:w-8/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  {data.map((item: breadType, index: number) => {
                    return (
                      (index === data.length - 1 && (
                        <li
                          className="text-base font-light pro-font-ltlight text-primary"
                          key={item.name}
                        >
                          {item.name}
                        </li>
                      )) || (
                        <li className="flex items-center" key={item.name}>
                          <Link
                            href={item.href}
                            className="pr-1 text-base font-light pro-font-ltlight text-body-color hover:text-primary"
                          >
                            {item.name}
                          </Link>
                          <span className="mr-3 block h-2 w-2 rotate-45 border-r border-t border-body-color"></span>
                        </li>
                      )
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#234233" />
                  <stop offset="1" stopColor="#234233" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#234233" />
                  <stop offset="1" stopColor="#234233" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#234233" />
                  <stop offset="1" stopColor="#234233" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
