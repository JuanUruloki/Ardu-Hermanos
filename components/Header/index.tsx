"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  
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

  
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  
  const closeNavbar = () => {
    setNavbarOpen(false);  
    setOpenIndex(-1);      
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-screen h-20 items-center font-header ${
          sticky
            ? "fixed z-[9999] bg-gray-200 !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gradient-to-r from-darkBlue to-lightBlue dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="flex-row-reverse gap-20">
          <div className={`relative flex w-screen items-center justify-around ${!sticky ? "bg-gray-200 dark:bg-gradient-to-r from-darkBlue to-lightBlue": "from-darkBlue to-lightBlue "}`}>
            <div className="flex w-screen h-20 items-center justify-around">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-blue-400 focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <div className="hidden absolute lg:block lg:-ml-24 xl:ml-0 pt-[21px] pl-36">
                    <a href="/">
                      <Image
                        src="/images/logo/logo_dark.svg"
                        alt="logo"
                        width={220}
                        height={60}
                        className="hidden dark:block"
                      />                    
                    </a>
                  </div>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:dark:bg-slate-600 lg:flex lg:justify-end lg:visible lg:static lg:w-screen lg:border-none lg:!bg-transparent lg:pr-40 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-90"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-5 lg:-mr-36 xl:mr-0 xl:space-x-14">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-3xl lg:mr-0 lg:inline-flex lg:px-10 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-blue-400 dark:text-chalkArdu dark:hover:text-blue-400"
                                : "text-dark hover:text-blue-400 dark:text-chalkArdu dark:hover:text-blue-400"
                            }`}
                            onClick={closeNavbar} 
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-3xl text-dark group-hover:text-blue-400 dark:text-chalkArdu dark:group-hover:text-blue-400 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
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
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-slate-600 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-2xl text-dark hover:text-blue-400 dark:text-chalkArdu dark:hover:text-blue-400 lg:px-3"
                                  onClick={closeNavbar} 
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
