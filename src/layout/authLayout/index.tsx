import { ProfileCircle, SearchNormal1, ShoppingCart } from 'iconsax-react';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '~/components/sidebar';

const AuthLayout = ({
  image,
  children,
  main,
}: {
  image?: string;
  children: React.ReactNode;
  main?: string;
}) => {
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
  return (
    <div>
      <nav
        className={`bg-white ${isNavbarPosition} w-full z-20 top-0 start-0 py-2 lg:py-0 `}
        ref={navbarRef}>
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
            className="items-center justify-between hidden w-full lg:flex md:w-auto "
            id="navbar-sticky">
            <Image
              width={300}
              height={50}
              src="/midNavLogo.png"
              className=""
              alt="mid Logo"
            />
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
      {children}
    </div>
  );
};

export default AuthLayout