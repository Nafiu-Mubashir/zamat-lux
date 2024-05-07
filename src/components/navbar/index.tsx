import { ProfileCircle, SearchNormal1, ShoppingCart } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidebar from "../sidebar";

const Navbar = () => {
  return (
    <nav className="bg-white sticky w-full z-20 top-0 start-0 py-2 lg:py-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
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
          className="items-center justify-between hidden w-full lg:flex md:w-auto bg-black py-2 px-10 rounded-full relative"
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 text-[1.125rem] font-medium md:space-x-12 md:flex-row md:mt-0 rtl:space-x-reverse ">
            <li>
              <Link
                href="/wears"
                className="block py-2 px-3 text-white md:p-0 cursor-pointer"
                aria-current="page">
                Wears
              </Link>
            </li>
            <li>
              <Link
                href="/shoes"
                className="block py-2 px-3 md:p-0 cursor-pointer text-white">
                Shoes
              </Link>
            </li>
            <li>
              <Image
                width={592}
                height={81}
                src="/midNavLogo.png"
                className="h-[1.671re] w-[12.5re] absolute left-0 right-0 top-[-10px] z-0"
                alt="mid Logo"
              />
            </li>
            <li>
              <Link
                href="/bags"
                className="block py-2 px-3 md:p-0 cursor-pointer text-white">
                Bags
              </Link>
            </li>
            <li>
              <Link
                href="/perfumes"
                className="block py-2 px-3 md:p-0 cursor-pointer text-white">
                Perfumes
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-3 md:gap-10">
          <SearchNormal1
            size="20"
            color="#FB5B39"
            className="cursor-pointer"
          />

          <ShoppingCart
            size="20"
            color="#FB5B39"
            className="cursor-pointer"
          />

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
