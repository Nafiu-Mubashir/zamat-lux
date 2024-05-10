import Image from 'next/image'
import React from 'react'
import Navbar from '~/components/navbar'

const HeroSection = () => {
  return (
    <div>
      <div className="bg-zamat-main">
        <Navbar />

        <div className="mx-auto w-[95%] py-4 space-y-6">
          <div>
            <Image
              src="/header-desktop.png"
              width={1100}
              height={211}
              alt="Hero image"
              className="hidden md:block mx-auto"
            />
            <Image
              src="/header-mobile.png"
              width={365}
              height={97}
              alt="Hero image"
              className="md:hidden block mx-auto"
            />
          </div>
          <div className="flex justify-evenly md:items-center gap-">
            <Image
              src="/home/men.png"
              width={301}
              height={326}
              alt="Hero image"
              className="w-[8rem] lg:w-auto h-[8rem] lg:h-auto mt-[-40px] md:mt-0"
            />
            <div className="relative hidde md:block">
              <Image
                src="/home/mid-hero-img.png"
                width={364}
                height={584}
                alt="Hero image"
                className="w-[10.348rem] lg:w-[21.875rem] h-[16.911rem] lg:h-[35.748rem] mt-[100px] md:mt-0"
              />

              <Image
                src="/home/shop-now.png"
                width={162}
                height={161}
                alt="Hero image"
                className="w-[3.5rem] lg:w-[7rem] h-[3.5rem] lg:h-[7rem] absolute top-[180px] lg:top-[300px] right-[-25px] lg:right-[-45px] shop"
              />
            </div>
            <Image
              src="/home/women.png"
              width={288}
              height={301}
              alt="Hero image"
              className="w-[6ren] md:w-auto lg:w-auto h-[6rem] lg:h-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-black p-4 flex items-center justify-center lg:justify-between flex-wrap gap-2 space-y-1 lg:gap-0 px-4 lg:px-10">
        <Image
          src="/home/versarce.png"
          width={168}
          height={34}
          alt="Hero image"
          className="w-[5.145rem] lg:w-[] h-[1.025rem] lg:h-[]"
        />
        <svg
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[0.618rem] lg:w-[1.25rem] h-[0.618rem] lg:h-[1.25rem]">
          <path
            d="M10.347 0C10.6865 5.37596 14.971 9.66052 20.347 10C14.971 10.3395 10.6865 14.624 10.347 20C10.0075 14.624 5.72291 10.3395 0.346954 10C5.72291 9.66052 10.0075 5.37596 10.347 0Z"
            fill="#FFF8F7"
          />
        </svg>

        <Image
          src="/home/zara.png"
          width={92}
          height={38}
          alt="Hero image"
          className="w-[2.812rem] lg:w-[] h-[1.174rem] lg:h-[]"
        />
        <svg
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[0.618rem] lg:w-[1.25rem] h-[0.618rem] lg:h-[1.25rem]">
          <path
            d="M10.347 0C10.6865 5.37596 14.971 9.66052 20.347 10C14.971 10.3395 10.6865 14.624 10.347 20C10.0075 14.624 5.72291 10.3395 0.346954 10C5.72291 9.66052 10.0075 5.37596 10.347 0Z"
            fill="#FFF8F7"
          />
        </svg>

        <Image
          src="/home/gucci.png"
          width={157}
          height={36}
          alt="Hero image"
          className="w-[4.821rem] lg:w-[] h-[1.113rem] lg:h-[]"
        />
        <svg
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block w-[0.618rem] lg:w-[1.25rem] h-[0.618rem] lg:h-[1.25rem]">
          <path
            d="M10.347 0C10.6865 5.37596 14.971 9.66052 20.347 10C14.971 10.3395 10.6865 14.624 10.347 20C10.0075 14.624 5.72291 10.3395 0.346954 10C5.72291 9.66052 10.0075 5.37596 10.347 0Z"
            fill="#FFF8F7"
          />
        </svg>

        <Image
          src="/home/prada.png"
          width={195}
          height={32}
          alt="Hero image"
          className="w-[5.995rem] lg:w-[] h-[0.989rem] lg:h-[]"
        />
        <svg
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[0.618rem] lg:w-[1.25rem] h-[0.618rem] lg:h-[1.25rem]">
          <path
            d="M10.347 0C10.6865 5.37596 14.971 9.66052 20.347 10C14.971 10.3395 10.6865 14.624 10.347 20C10.0075 14.624 5.72291 10.3395 0.346954 10C5.72291 9.66052 10.0075 5.37596 10.347 0Z"
            fill="#FFF8F7"
          />
        </svg>

        <Image
          src="/home/clvineklein.png"
          width={208}
          height={34}
          alt="Hero image"
          className="w-[6.39rem] lg:w-[] h-[1.031rem] lg:h-[]"
        />
      </div>
    </div>
  );
}

export default HeroSection