import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "~/components/productCard";
import SinglePageLayout from "~/layout";

import { Button, Divider, Grid, Rating } from "@mantine/core";

const SingleShoe = () => {
    const wear = [
      {
        img: "/wears/wear1.png",
        name: "Gucci Bag",
      },
      {
        img: "/wears/wear2.png",
        name: "Court Heels",
      },
      {
        img: "/wears/wear3.png",
        name: "Jordan VIII’s",
      },
      {
        img: "/wears/wear4.png",
        name: "Versace Eros",
      },
    ];

    const sizes = ["Small", "Medium", "Large", "X-Large"];

    const colors = [
      { id: "green", hueRotate: "120deg" }, // Green
      { id: "red", hueRotate: "0deg" }, // Red
      { id: "yellow", hueRotate: "60deg" }, // Black (no hue rotation)
    ];
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleColorChange = (colorId: string) => {
      setSelectedColor(colorId);
      console.log(colorId);
    };

    function getFilter(colorId: string | null): string {
      const selectedColor = colors.find((color) => color.id === colorId);
      console.log(`hue-rotate(${selectedColor?.hueRotate})`);

      return selectedColor ? `hue-rotate(${selectedColor.hueRotate})` : "none";
    }

    return (
      <div className="w-[95%] mx-auto p-3 space-y-10">
        <Grid>
          <Grid.Col
            span={{ base: 3, xs: 2, lg: 2 }}
            className="">
            <Grid>
              <Grid.Col
                span={{ base: 12, lg: 12 }}
                className="">
                <div>
                  <Image
                    src={"/wears/shirt.png"}
                    width={377}
                    height={378}
                    alt="shirt"
                    className="w-[5.784rem] lg:w-[9.5rem] mx-auto h-[6.354rem] lg:h-[10.438rem] rounded-lg"
                  />
                </div>
              </Grid.Col>
              <Grid.Col
                span={{ base: 12, lg: 12 }}
                className="">
                <div>
                  <Image
                    src={"/wears/shirt.png"}
                    width={377}
                    height={378}
                    alt="shirt"
                    className="w-[5.784rem] lg:w-[9.5rem] mx-auto h-[6.354rem] lg:h-[10.438rem] rounded-lg img"
                    // className="img"
                    style={{ filter: getFilter(selectedColor) }}
                  />
                </div>
              </Grid.Col>
              <Grid.Col
                span={{ base: 12, lg: 12 }}
                className="">
                <div>
                  <Image
                    src={"/wears/shirt.png"}
                    width={377}
                    height={378}
                    alt="shirt"
                    className="w-[5.784rem] lg:w-[9.5rem] mx-auto h-[6.354rem] lg:h-[10.438rem] rounded-lg"
                  />
                </div>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col
            span={{ base: 9, xs: 5, lg: 5 }}
            className="">
            <div>
              <Image
                src={"/wears/shirt.png"}
                width={377}
                height={378}
                alt="shirt"
                className="h-[21.5rem] lg:h-[33.125rem] w-full lg:w-[27.75rem] mx-auto rounded-lg"
              />
            </div>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, xs: 5, lg: 5 }}
            className="">
            <div className="space-y-4 p-2 md:p-0">
              <div>
                <h1 className="text-[1.25rem] lg:text-[3rem] font-[600]">
                  Hoodie Short Sleeve
                </h1>
                <div className="flex items-center gap-2">
                  <Rating
                    className=""
                    fractions={2}
                    // onChange={(value) => handleRatingChange(value)}
                    size={"sm"}
                  />
                  {/* <span>{ratings[item.id] || 0}/5</span> */}
                  <span className="text-sm">0/5</span>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-[1.259rem] md:text-[2rem] font-[700]">
                    $260 <span className="text-[#0000004D]/30">$300</span>
                  </p>
                  <div className="bg-zamat-background-light text-zamat-main text-[0.629rem] md:text-[1rem] rounded-full px-2">
                    -40%
                  </div>
                </div>
                <p className="text-[0.629rem] md:text-[1rem] w-[23.211rem] md:w-auto font-[400] text-[#00000099]/60">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
              </div>

              <Divider my={"md"} />

              <div className="space-y-2">
                <p className="text-[0.629rem] md:text-[1rem] font-semibold">
                  Colors
                </p>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <div key={color.id}>
                      <input
                        type="radio"
                        name="color"
                        id={color.id}
                        onChange={() => handleColorChange(color.id)}
                        className="hidden"
                      />
                      <label
                        htmlFor={color.id}
                        className="label"></label>
                    </div>
                  ))}
                </div>

                <Divider my={"md"} />

                <div className="space-y-2">
                  <p className="text-[0.629rem] md:text-[1rem] font-semibold">
                    Choose Size
                  </p>
                  <div className="flex flex-wra gap-2">
                    {sizes.map((item, id) => (
                      <div
                        key={id}
                        className="text-center border bg-[#EBE8E7] rounded-full p-1 lg:p-2 w-[4.5rem] lg:w-[6.188rem] text-[0.7rem] lg:text-[0.875rem]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <Divider my={"md"} />

                <div className="space-y-2">
                  <p className="text-[0.629rem] md:text-[1rem] font-semibold">
                    Choose Size
                  </p>
                  <div className="flex md:grid md:grid-cols-2 lg:flex gap-2">
                    <div className="flex justify-between items-center p-2 px-4 bg-gray-300 rounded-full w-[9rem] lg:w-[10.625rem]">
                      <svg
                        width="20"
                        height="4"
                        viewBox="0 0 20 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.79549C18.8345 3.00647 18.5484 3.125 18.25 3.125H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.79549C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41548 0.954505 1.2045C1.16548 0.993526 1.45163 0.875 1.75 0.875H18.25C18.5484 0.875 18.8345 0.993526 19.0455 1.2045C19.2565 1.41548 19.375 1.70163 19.375 2Z"
                          fill="#0D0A09"
                        />
                      </svg>
                      1
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z"
                          fill="#0D0A09"
                        />
                      </svg>
                    </div>
                    <div className="text-center p-2 px-4 bg-white text-zamat-main border border-zamat-main rounded-full w-[9rem] lg:w-[10.625rem]">
                      Add to Cart
                    </div>
                    <Link href={"/checkout"}>
                      <div className="text-center p-2 px-4 bg-black text-white rounded-full w-[9rem] lg:w-[10.625rem]">
                        Checkout
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Grid.Col>
        </Grid>

        <div className="p-3 space-y-4">
          <h1 className="text-center font-[600] text-[1.25rem] lg:text-[3rem]">
            You might also like
          </h1>
          <div className="flex justify-between gap-4 overflow-x-scroll lg:overflow-hidden py-3">
            {wear.map(({ name, img }, id) => (
              <Link
                href={`/wears/${id}`}
                key={id}>
                <ProductCard
                  name={name}
                  img={img}
                />
              </Link>
            ))}
          </div>
          <Button
            className="!bg-white !border !border-black !text-black !block mx-auto !px-12"
            radius={100}>
            View All
          </Button>
        </div>
      </div>
    );
}

export default SingleShoe

SingleShoe.getLayout = function (page: React.ReactElement) {
  // const event = '/courses/courses-banner.webp';
  return <SinglePageLayout>{page}</SinglePageLayout>;
};