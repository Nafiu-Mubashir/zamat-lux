import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button, Grid, Input } from "@mantine/core";

const Footer = () => {
  const products = ["wears", "shoes", "bags", "perfumes"];
  const help = [
    "customer support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ];
  const faq = ["Account", "Manage Deliveries", "Orders", "Payments"];
  return (
    <footer className="bg-white lg:py-10 border border-blue-400 relative w-full">
      <div className="mx-auto w-full p-4 py-6 lg:py-8 space-y-10 mt-20">
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4, lg: 3 }}>
            <div className="mb-6 md:mb-0 space-y-4 row-span-2 col-span-2">
              <Link
                href="/"
                className="flex items-center">
                <Image
                  src="/zamat-logo.png"
                  width={601}
                  height={81}
                  className="w-[12.5rem] h-[1.671rem]"
                  alt="logo"
                />
              </Link>

              <p className="text-[0.875rem] lg:w-[15.861rem] text-[##374151]">
                {
                  "Elevate Your Wardrobe with Zamat's Lux: Timeless Styles for Every Fashionista and Gentlemen."
                }
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 4, xs: 4, lg: 3 }}>
            <div className="space-y-3">
              <h2 className="text-[1rem] font-semibold text-gray-900 uppercase">
                Products
              </h2>
              <ul className="space-y-3 text-gray-500 text-[1rem] font-[400]">
                {products.map((item, id) => (
                  <li
                    className=""
                    key={id}>
                    <Link
                      href="/"
                      className="hover:underline capitalize">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 4, xs: 4, lg: 3 }}>
            <div className="space-y-3">
              <h2 className="text-[1rem] font-semibold text-gray-900 uppercase">
                Help
              </h2>
              <ul className="space-y-3 text-gray-500 text-[1rem] font-[400]">
                {help.map((item, id) => (
                  <li
                    className=""
                    key={id}>
                    <Link
                      href="/"
                      className="hover:underline capitalize">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 4, xs: 4, lg: 3 }}>
            <div className="space-y-3">
              <h2 className="text-[1rem] font-semibold text-gray-900 uppercase">
                FAQ
              </h2>
              <ul className="space-y-3 text-gray-500 text-[1rem] font-[400]">
                {faq.map((item, id) => (
                  <li
                    className=""
                    key={id}>
                    <Link
                      href="/"
                      className="hover:underline capitalize">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid.Col>
        </Grid>
        {/* <div className="grid grid-cols-1 md:grid-cols-5">
          

         
          
         
          
         
        </div> */}

        <div className="flex sm:items-center justify-between mx-auto">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2000-2024, All rights reserved
          </span>

          <div className="flex">
            <Image
              src="/visa.png"
              width={66}
              height={49}
              alt="visa card"
              className="w-[2.913rem] h-[1.877rem]"
            />
            <Image
              src="/master.png"
              width={66}
              height={49}
              alt="master card"
              className="w-[2.913rem] h-[1.877rem]"
            />
            <Image
              src="/paypal.png"
              width={66}
              height={49}
              alt="paypal"
              className="w-[2.913rem] h-[1.877rem]"
            />
          </div>
        </div>
      </div>

      <div className="bg-black rounded-3xl py-4 px-[3rem] lg:container mx-auto absolute right-0 left-0 top-[-80px] flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-[600] text-[1.484rem] lg:text-[3rem] text-white w-[41.731rem]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="space-y-4">
          <Input
            placeholder="Your email"
            type="email"
            leftSection={<></>}
            classNames={{
              input:
                "!rounded-full !w-[20.063rem] !h-[1.484rem] lg:!w-[21.813rem] lg:!h-[3rem] px-4 focus:border-none focus:ring-none focus:outline-none",
            }}
          />
          <Button className="!rounded-full !w-[20.063rem] !h-[1.484rem] lg:!w-[21.813rem] lg:!h-[3rem] !bg-zamat-main text-white">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
