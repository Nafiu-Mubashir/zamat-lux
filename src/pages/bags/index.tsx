import Link from "next/link";
import ProductFilter from "~/components/filter";
import FilterDrawer from "~/components/filter/filter-drawer";
import ProductCard from "~/components/productCard";
import SinglePageLayout from "~/layout";

import { Grid, Pagination } from "@mantine/core";
import { addToCart } from "~/hook/cart";

const Bags = () => {
  const wear = [
    {
      img: "/new-arrivals/bag.png",
      name: "bag",
    },
    {
      img: "/top-selling/bag.png",
      name: "bag",
    },
    {
      img: "/bag.png",
      name: "bag",
    },
  ];
  return (
    <div className="w-full lg:w-[95%] mx-auto p-3 space-y-10">
      <Grid>
        <Grid.Col
          span={{ base: 12, xs: 3, lg: 3 }}
          className="!hidden md:!block">
          <ProductFilter />
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 9, lg: 9 }}
          className="!p-3 !space-y-3">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Bags</h1>

            <div className="flex gap-2 text-[0.563rem] lg:text-[0.825rem] items-ceenter">
              <p>Showing 1-10 of 100 Products</p>
              <div>sort by</div>
            </div>

            <div className="block md:hidden">
              <FilterDrawer />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {wear.map(({ name, img }, id) => (
                <ProductCard
                  href={`/products/${id}`}
                  key={id}
                  name={name}
                  img={img}
                  onClick={addToCart}
                />
              ))}
            </div>

            <Pagination
              total={10}
              value={1}
              // onChange={}
              color="gray"
              // radius={"lg"}
              className="mt-5 mx-auto !w-full md:!w-[70%] lg:!w-[50%] mb-4 sticky"
              classNames={{
                control: "!w-[1.725rem] !h-[1.725rem]",
                dots: "dark:text-white",
              }}
            />
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Bags;

Bags.getLayout = function (page: React.ReactElement) {
  // const event = '/courses/courses-banner.webp';
  return <SinglePageLayout>{page}</SinglePageLayout>;
};
