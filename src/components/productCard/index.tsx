import { ShoppingCart } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";

import { Rating } from "@mantine/core";

interface ProductCardProp {
  name: string;
  img: string;
  price?: string;
}

const ProductCard = ({ name, img, price }: ProductCardProp) => {
  const [ratings, setRatings] = useState<{ [key: number]: number }>({});
  // Function to handle rating change
  const handleRatingChange = (value: number) => {
    // Update ratings state with the new value
    setRatings((prevRatings) => ({
      ...prevRatings,
      // [itemId]: value,
    }));
  };
  return (
    <div className="w-[10.875rem lg:w-[18.75rem] rounded-lg bg-white shadow-lg">
      <Image
        src={img}
        width={300}
        height={261}
        alt="product image"
        className="rounded-t-lg w-full"
      />
      <div className="p-3 space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-zamat-neutrals text-[0.536rem] lg:text-[1.125rem] font-[400]">
            {name}
          </p>
          <ShoppingCart
            size=""
            color="#FB5B39"
            className="p-1 w-[0.894rem] lg:w-[25px] h-[0.894rem] lg:h-[25px] bg-zamat-background-light rounded-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[0.715rem] lg:text-[1.5rem] font-[600]">$240</p>
          <p className="text-gray-500 text-[0.715rem] lg:text-[1rem]">$260</p>
          <div className="bg-zamat-background-light text-zamat-main text-[0.75rem] rounded-full px-2">
            -20%
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Rating
            className=""
            fractions={2}
            onChange={(value) => handleRatingChange(value)}
            size={"sm"}
          />
          {/* <span>{ratings[item.id] || 0}/5</span> */}
          <span className="text-sm">0/5</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
