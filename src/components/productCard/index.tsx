import { ShoppingCart } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";

import { Rating } from "@mantine/core";
import Link from "next/link";

interface ProductCardProp {
  name: string;
  img: string;
  price?: string;
  onClick: () => void,
  href: string,
}

const ProductCard = ({ name, img, price, onClick, href }: ProductCardProp) => {
  // const [ratings, setRatings] = useState<{ [key: number]: number }>({});
  // // Function to handle rating change
  // const handleRatingChange = (value: number) => {
  //   // Update ratings state with the new value
  //   setRatings((prevRatings) => ({
  //     ...prevRatings,
  //     // [itemId]: value,
  //   }));
  // };
  return (
    <div className="w-[10.875rem lg:w-[18.75rem] rounded-lg bg-white shadow-lg">
      <Link href={href}>
        <Image
          src={img}
          width={300}
          height={261}
          alt="product image"
          className="rounded-t-lg w-full"
        />
        
      </Link>
        <div className="p-3 space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-zamat-neutrals text-[0.536rem] lg:text-[1.125rem] font-[400]">
              {name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[0.715rem] lg:text-[1.5rem] font-[600]">$240</p>
            <p className="text-gray-500 text-[0.715rem] lg:text-[1rem]">$260</p>
            <div className="bg-zamat-background-light text-zamat-main text-[0.75rem] rounded-full px-2">
              -20%
            </div>
          </div>

      <div className="border rounded-full flex justify-center items-center gap-2 bg-zamat-background-light p-1 border-zamat-border-color cursor-pointer" onClick={onClick}>
        <p className="text-[0.5rem] lg:text-[1rem] text-zamat-main">Add to cart</p>
        <ShoppingCart
          size=""
          color="#FB5B39"
          className="rounded-full w-[0.477rem] lg:w-[1rem] h-[0.477rem] lg:h-[1rem]"
        />
      </div>

      {/* <div className="flex items-center gap-2">
          <Rating
            className=""
            fractions={2}
            onChange={(value) => handleRatingChange(value)}
            size={"sm"}
          />
          <span>{ratings[item.id] || 0}/5</span>
          <span className="text-sm">0/5</span>
        </div> */}
    </div>
    </div >
  );
};

export default ProductCard;
