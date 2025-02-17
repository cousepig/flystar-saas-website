"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";

import menuData from "./menuData";
import LangSwitch from "@/components/LangSwitch";

import { useTranslation } from "app/[locale]/i18n/client";
import { LocaleTypes } from "app/[locale]/i18n/settings";
import { useParams } from "next/navigation";
const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const locale = useParams()?.locale as LocaleTypes;

  const { t } = useTranslation(locale, "header");
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: SetStateAction<number>) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-green !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-green !bg-opacity-80"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12 left-0 top-0 z-40 flex absolute">
              <Link
                href={`/${locale}`}
                className={`header-logo block w-full h-20 ${
                  sticky ? "py-5 lg:py-2" : "py-0"
                } `}
              >
                <Image
                  src="/images/logo/syrincs-logo-white.webp"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-auto h-full dark:hidden"
                />
              </Link>
            </div>
            <div className="flex w-full items-center px-4 sm:flex flex-1 justify-end gap-10  h-20 ">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-secondary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-primary px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-primary lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-6">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={`/${locale}${menuItem.path}`}
                            className={`flex py-2 text-base font-light lg:mr-0 pro-font-ltlight lg:inline-flex lg:px-0 lg:py-4 ${
                              usePathName === menuItem.path
                                ? "text-yellow"
                                : "text-white hover:text-yellow "
                            }`}
                          >
                            {t(menuItem.title)}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 pro-font-ltlight text-base font-light text-white group-hover:text-yellow dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4"
                            >
                              {t(menuItem.title)}
                              <span className="pl-1">
                                <svg width="20" height="20" viewBox="0 1 24 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              id={"sub" + index}
                              className={`submenu relative left-0 top-full rounded-sm bg-green !bg-opacity-80 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[100%] lg:block lg:w-[200px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              <ul>
                                {" "}
                                {menuItem.submenu?.map(
                                  (submenuItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link
                                        href={
                                          submenuItem.path
                                            ? "/" + locale + submenuItem.path
                                            : "/"
                                        }
                                        className="block rounded py-1 text-xs font-light  text-white pro-font-ltlight hover:text-yellow lg:px-3"
                                      >
                                        <span key={subIndex}>
                                          {t(submenuItem.title)}
                                        </span>
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                    <li className="group relative">
                      <LangSwitch />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
