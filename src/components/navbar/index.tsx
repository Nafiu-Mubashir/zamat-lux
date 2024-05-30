import { ProfileCircle, SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import Cart from "../cart";
import Sidebar from "../sidebar";
import { NavLink } from "./navLink";

const Navbar = () => {
  const [isNavbarPosition, setIsNavbarPosition] = useState("sticky");
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;

      if (navbar) {
        const scrollY = window.scrollY;

        console.log(scrollY);

        if (scrollY > 10) {
          setIsNavbarPosition("fixed");
        } else {
          setIsNavbarPosition("sticky");
        }
      }
    };
    const obsv = new IntersectionObserver(() => {
      // Your intersection observer logic goes here
    });

    if (navbarRef.current) {
      obsv.observe(navbarRef.current);
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      obsv.disconnect();
    };
  }, []);

  const [isFocused, setIsFocused] = useState(false);
  return (
    <nav
      className={`bg-white ${isNavbarPosition} w-full z-20 top-0 start-0 lg:py-0 `}
      ref={navbarRef}>
      <header className="bg-black p-1 text-center text-white text-[0.875rem]">
        <p>Sign up and get 20% off to your first order</p>
      </header>
      <div className="w-[95%] lg:w-[90%] mx-suto flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
        <div className="block lg:hidden">
          <Sidebar />
        </div>
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            width={601}
            height={81}
            src="/zamat.png"
            className="h-[1.14rem] md:h-[1.671rem] w-[8.529rem] md:w-[12.5rem]"
            alt="Zamat lus Logo"
          />
        </Link>

        <div
          className="items-center justify-between hidden w-full lg:flex md:w-auto bg-black py-2 px-10 rounded-full "
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 text-[1.125rem] font-medium md:space-x-12 md:flex-row md:mt-0 rtl:space-x-reverse relative">
            <li className=" z-10">
              <NavLink href="/wears">Wears</NavLink>
            </li>
            <li className=" z-10">
              <NavLink href="/shoes">Shoes</NavLink>
            </li>
            <li className=" ">
              <Image
                width={592}
                height={81}
                src="/midNavLogo.png"
                className="h-[1.671re] w-[12.5re] absolute left-0 right-0 top-[-10px] z-0"
                alt="mid Logo"
              />
            </li>
            <li className=" z-10">
              <NavLink href="/bags">Bags</NavLink>
            </li>
            <li className=" z-10">
              <NavLink href="/perfumes">Perfumes</NavLink>
            </li>
          </ul>
        </div>



        {/* <form className="max-w-md mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" onFocus={() => setIsFocused(true)}>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className={isFocused ? `animate block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500` : "not-animate"} placeholder="Search Mockups, Logos..."  />
          </div>
        </form> */}

        <div className="flex gap-3 md:gap-10">
          <SearchNormal1
            size="20"
            color="#FB5B39"
            className="cursor-pointer"
          />

          <Cart />

          <ProfileCircle
            size="20"
            color="#FB5B39"
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
