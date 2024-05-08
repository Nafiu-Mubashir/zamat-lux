import ProductCard from "~/components/productCard";
import SinglePageLayout from '~/layout';

import { Grid } from '@mantine/core';

const Wears = () => {
  const wears = [
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
  return (
    <div className="w-full lg:w-[95%] mx-auto p-3 space-y-10">
      <Grid>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <div className="rounded-lg">div</div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Wears</h1>

            <div className="flex gap-2">
              <p>Showing 1-10 of 100 Products</p>
              <div>
                sort by
              </div>
            </div>
          </div>

          <div>
            {/* {
              <div className="grid gri-cols-4">
              wears.map(({ name, img }, id) => (
                <ProductCard name={name} img={img} key={id} />
              ))
              </div>
            } */}
          </div>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default Wears

Wears.getLayout = function (page: React.ReactElement) {
  // const event = '/courses/courses-banner.webp';
  return (
    <SinglePageLayout>
      {page}
    </SinglePageLayout>
  );
};