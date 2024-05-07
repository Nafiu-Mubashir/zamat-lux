import { ShoppingCart } from 'iconsax-react';
import Image from 'next/image'
import React, { useState } from 'react'

import { Rating } from '@mantine/core';

const ProductCard = () => {
  const [ratings, setRatings] = useState<{ [key: number]: number }>({});
   // Function to handle rating change
   const handleRatingChange = (value: number) => {
    // Update ratings state with the new value
    setRatings((prevRatings) => ({
      ...prevRatings,
      // [itemId]: value,
    }));

    console.log(`Rating for item ${value}`);
  }
  return (
    <div className='w-[18.75rem] rounded-lg bg-white shadow-lg'>
      <Image src='/product.png' width={300} height={261} alt='product image' className='rounded-t-lg' />
      <div className='p-3 space-y-2'>
        <div className='flex justify-between items-center'>
          <p className='text-zamat-neutrals text-[1.125rem] font-[400]'>Gucci Bag</p>
          <ShoppingCart size="25" color="#FB5B39" className='p-1 bg-zamat-background-light rounded-full'/>
        </div>
        <div className="flex items-center gap-2">
          <p className='text-[1.5rem] font-[600]'>$240</p>
          <p className='text-gray-500 text-[1rem]'>$260</p>
          <div className='bg-zamat-background-light text-zamat-main text-[0.75rem] rounded-full px-2'>-20%</div>
        </div>

        <div>
        <Rating className='' fractions={2} onChange={(value) => handleRatingChange(value)} /> 
        {/* <span>{ratings[item.id] || 0}/5</span> */}
        </div>
      </div>
    </div>
  )
}

export default ProductCard