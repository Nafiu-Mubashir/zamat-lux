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
            <div className="flex items-center gap-3  justify-center flex-wrap lg:w-[90%] mx-auto">
              <h1 className="text-[1.652rem] lg:text-[5rem] text-white font-[600]">
                Step Into Luxury
              </h1>
              <svg
                width="238"
                height="101"
                viewBox="0 0 238 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[4.914rem] lg:w-auto h-[2.066rem] lg:h-auto">
                <rect
                  width="238"
                  height="100.07"
                  rx="50.0352"
                  transform="matrix(-1 0 0 1 238 0)"
                  fill="#292424"
                />
                <path
                  d="M95.6667 20C95.6667 23.1837 91.3908 27.9379 87.0625 31.9283C81.4975 37.0772 74.8475 41.5696 67.2233 44.9979C61.5067 47.568 54.5767 50.0352 49 50.0352M49 50.0352C54.5767 50.0352 61.5125 52.5024 67.2233 55.0725C74.8475 58.5051 81.4975 62.9975 87.0625 68.1378C91.3908 72.1325 95.6667 76.8953 95.6667 80.0704M49 50.0352L189 50.0352"
                  stroke="#FFF8F7"
                  stroke-width="5"
                />
              </svg>
              {/* </div>

        <div className="flex items-center gap-3 justify-center mb-8"> */}
              <svg
                width="200"
                height="101"
                viewBox="0 0 200 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[4.914rem] lg:w-auto h-[2.066rem] lg:h-auto">
                <rect
                  y="0.0704041"
                  width="200"
                  height="100.07"
                  rx="50.0352"
                  fill="#FFF8F7"
                />
                <path
                  d="M123.333 20.0704C123.333 23.2541 127.609 28.0083 131.937 31.9987C137.502 37.1476 144.152 41.64 151.777 45.0683C157.493 47.6384 164.423 50.1056 170 50.1056M170 50.1056C164.423 50.1056 157.487 52.5728 151.777 55.1429C144.152 58.5755 137.502 63.0679 131.937 68.2083C127.609 72.2029 123.333 76.9657 123.333 80.1408M170 50.1056L30 50.1056"
                  stroke="#FB5B39"
                  stroke-width="5"
                />
              </svg>

              <h1 className="text-[1.652rem] lg:text-[5rem] text-white font-[600]">
                {"Step Into Zamat's"}
              </h1>
            </div>

          </div>
          <div className="flex justify-evenly items-center gap-">
            <Image
              src="/home/men.png"
              width={301}
              height={326}
              alt="Hero image"
              className="w-[8.238rem] lg:w-auto h-[8.909rem] lg:h-auto"
            />
            <div className="relative hidden md:block">
              <Image
              src="/home/mid-hero-img.png"
              width={364}
              height={584}
              alt="Hero image"
              className="w-[10.348rem] lg:w-[21.875rem] h-[16.911rem] lg:h-[35.748rem]"
            />

            <Image
              src="/home/shop-now.png"
              width={162}
              height={161}
              alt="Hero image"
              className="w-[] lg:w-[] h-[] lg:h-[] absolute top-[250px] right-[-50px]"
            />
            </div>
            <Image
              src="/home/women.png"
              width={288}
              height={301}
              alt="Hero image"
              className="w-[7.211ren] lg:w-auto h-[7.53rem] lg:h-auto"
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
        <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[0.618rem] lg:w-[1.25rem] h-[0.618rem] lg:h-[1.25rem]">
          <path d="M10.347 0C10.6865 5.37596 14.971 9.66052 20.347 10C14.971 10.3395 10.6865 14.624 10.347 20C10.0075 14.624 5.72291 10.3395 0.346954 10C5.72291 9.66052 10.0075 5.37596 10.347 0Z" fill="#FFF8F7" />
        </svg>

        <Image
          src="/home/zara.png"
          width={92}
          height={38}
          alt="Hero image"
          className="w-[2.812rem] lg:w-[] h-[1.174rem] lg:h-[]"
        />
        <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[0.618rem] lg:w-[1.25rem] h-[0.618rem] lg:h-[1.25rem]">
          <path d="M10.347 0C10.6865 5.37596 14.971 9.66052 20.347 10C14.971 10.3395 10.6865 14.624 10.347 20C10.0075 14.624 5.72291 10.3395 0.346954 10C5.72291 9.66052 10.0075 5.37596 10.347 0Z" fill="#FFF8F7" />
        </svg>

        <Image
          src="/home/gucci.png"
          width={157}
          height={36}
          alt="Hero image"
          className="w-[4.821rem] lg:w-[] h-[1.113rem] lg:h-[]"
        />
        <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block w-[0.618rem] lg:w-[1.25rem] h-[0.618rem] lg:h-[1.25rem]">
          <path d="M10.347 0C10.6865 5.37596 14.971 9.66052 20.347 10C14.971 10.3395 10.6865 14.624 10.347 20C10.0075 14.624 5.72291 10.3395 0.346954 10C5.72291 9.66052 10.0075 5.37596 10.347 0Z" fill="#FFF8F7" />
        </svg>

        <Image
          src="/home/prada.png"
          width={195}
          height={32}
          alt="Hero image"
          className="w-[5.995rem] lg:w-[] h-[0.989rem] lg:h-[]"
        />
        <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[0.618rem] lg:w-[1.25rem] h-[0.618rem] lg:h-[1.25rem]">
          <path d="M10.347 0C10.6865 5.37596 14.971 9.66052 20.347 10C14.971 10.3395 10.6865 14.624 10.347 20C10.0075 14.624 5.72291 10.3395 0.346954 10C5.72291 9.66052 10.0075 5.37596 10.347 0Z" fill="#FFF8F7" />
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