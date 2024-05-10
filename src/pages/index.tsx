import { Inter } from "next/font/google";
import Image from 'next/image'
import ProductCard from "~/components/productCard";
import HeroSection from "~/sections/home-section/heroSection";

import { Button, Grid } from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const newArrivals = [
    {
      img: "/new-arrivals/shoe.png",
      name: "Court Heels",
    },
    {
      img: "/new-arrivals/perfume.png",
      name: "Terre D’ermes",
    },
    {
      img: "/new-arrivals/wears.png",
      name: "Hoodie Short Sleeve",
    },
    {
      img: "/new-arrivals/bag.png",
      name: "Gucci Bag",
    },
  ];

  const topSelling = [
    {
      img: "/top-selling/bag.png",
      name: "Gucci Bag",
    },
    {
      img: "/top-selling/women-shoe.png",
      name: "Court Heels",
    },
    {
      img: "/top-selling/men-shoe.png",
      name: "Jordan VIII’s",
    },
    {
      img: "/top-selling/perfume.png",
      name: "Versace Eros",
    },
  ];
  return (
    <main className='bg-zamat-background-light space-y-10'>
      <HeroSection />

      <div className="space-y-10">
        <div className="p-2 lg:p-4 space-y-6 w-full lg:w-[90%] mx-auto">
          <h1 className="text-center text-[3rem]">New Arrivals</h1>
          <div className="flex justify-between gap-4 overflow-x-scroll lg:overflow-hidden py-3">
            {
              newArrivals.map(({ name, img }, id) => (
                <ProductCard name={name} img={img} key={id} />
              ))
            }
          </div>

          <Button className="!bg-white !border !border-black !text-black !block mx-auto !px-12" radius={100}>View All</Button>
        </div>

        <div className="w-full lg:w-[90%] mx-auto py-3 lg:p-6 lg:rounded-3xl bg-[#FFBFB180]">
          <h1 className="text-center text-[1.25rem] lg:text-[3rem] uppercase">BROWSE BY Product Line</h1>
          <Grid className="p-3 lg:p-6 py-8">
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <div className="relative">
                <Image src='/home/shoes.png' width={408} height={289} alt="browse by product" className="w-[20.375rem] lg:w-full h-[8.611rem] lg:h-[18.063rem] rounded-lg" />
                <span className="px-3 py-1 backdrop-blur-lg bg-white/60 rounded-2xl absolute top-2 left-5">Shoes</span>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <div className="relative">
                <Image src='/home/bags.png' width={685} height={289} alt="browse by product" className="w-[20.375rem] lg:w-full h-[8.611rem] lg:h-[18.063rem] rounded-lg" />
                <span className="px-3 py-1 backdrop-blur-lg bg-white/60 rounded-2xl absolute top-2 left-5">Bags</span>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <div className="relative">
                <Image src='/home/wears.png' width={685} height={289} alt="browse by product" className="w-[20.375rem] lg:w-full h-[8.611rem] lg:h-[18.063rem] rounded-lg" />
                <span className="px-3 py-1 backdrop-blur-lg bg-white/60 rounded-2xl absolute top-2 left-5">Wears</span>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <div className="relative">
                <Image src='/home/scents.png' width={408} height={289} alt="browse by product" className="w-[20.375rem] lg:w-full h-[8.611rem] lg:h-[18.063rem] rounded-lg" />
                <span className="px-3 py-1 backdrop-blur-lg bg-white/60 rounded-2xl absolute top-2 left-5">Scents</span>
              </div>
            </Grid.Col>
          </Grid>
        </div>

        <div className="p-2 lg:p-4 space-y-6 w-[95%] lg:w-[90%] mx-auto">
          <h1 className="text-center text-[1.25rem] lg:text-[3rem]">Top Selling</h1>
          <div className="flex justify-between gap-4 overflow-x-scroll lg:overflow-hidden py-3">
            {
              topSelling.map(({ name, img }, id) => (
                <ProductCard name={name} img={img} key={id} />
              ))
            }
          </div>

          <Button className="!bg-white !border !border-black !text-black !block mx-auto !px-12" radius={100}>View All</Button>
        </div>
      </div>

    </main>
  );
}
