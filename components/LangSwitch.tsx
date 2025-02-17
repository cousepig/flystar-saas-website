import { useRef, useState } from "react";
import {
  //   usePathname,
  useParams,
  useSelectedLayoutSegments,
  useRouter,
} from "next/navigation";
import { LocaleTypes, locales } from "app/[locale]/i18n/settings";
import { useTranslation } from "app/[locale]/i18n/client";

const LangSwitch = () => {
  //   const pathname = usePathname();
  const urlSegments = useSelectedLayoutSegments();
  const locale = useParams()?.locale as LocaleTypes;
  const router = useRouter();

  const { t } = useTranslation(locale, "header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLocaleChange = (newLocale: string): string => {
    const newUrl = `/${newLocale}/${urlSegments.join("/")}`;
    return newUrl;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menubarRef = useRef<HTMLDivElement>(null);
  //   useOuterClick(menubarRef, closeMenu);

  const handleLinkClick = (newLocale: string) => {
    const resolvedUrl = handleLocaleChange(newLocale);
    router.push(resolvedUrl);
    closeMenu();
  };

  return (
    <div ref={menubarRef} className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex cursor-pointer items-center justify-between py-2 pro-font-ltlight text-base font-light text-white group-hover:text-yellow dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-languages size-4"
          >
            <path d="m5 8 6 6"></path>
            <path d="m4 14 6-6 2-3"></path>
            <path d="M2 5h12"></path>
            <path d="M7 2h1"></path>
            <path d="m22 22-5-10-5 10"></path>
            <path d="M14 18h6"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="submenu relative right-0 top-full rounded-sm bg-green !bg-opacity-80 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[100%] lg:block lg:w-[200px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          onBlur={closeMenu}
        >
          <ul
            className="py-1"
            role="none"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {locales.map((newLocale: string) => (
              <li key={newLocale}>
                <button
                  onClick={() => handleLinkClick(newLocale)}
                  className="block rounded py-1 text-xs font-light  text-white pro-font-ltlight hover:text-yellow lg:px-3"
                  role="menuitem"
                  style={{
                    display: "block",
                    width: "100%",
                    textDecoration: "none",
                  }}
                >
                  {t(newLocale)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LangSwitch;
