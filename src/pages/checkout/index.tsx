import Image from "next/image";
import React from "react";
import PaymentInfo from "~/components/paymentInfo";
import SinglePageLayout from "~/layout";

import { Button, Divider, Grid, NumberInput, TextInput } from "@mantine/core";

const Checkout = () => {
  return (
    <div className="w-[95%] mx-auto p-3 space-y-10">
      <Grid>
        <Grid.Col
          span={{ base: 12, xs: 8, lg: 8 }}
          className="">
          <Grid>
            <Grid.Col
              span={{ base: 12, lg: 12 }}
              className="">
              <div className="rounded-lg border p-4 md:p-6 space-y-4 border-zamat-border-color">
                <div className="flex items-center gap-3">
                  <p className="text-[0.873rem] md:text-[1.5rem] font-[600]">
                    Order Summary
                  </p>
                  <div className="w-[1.31rem] md:w-[1.25rem] h-[1.25rem] rounded-full bg-zamat-main text-center text-white flex justify-center items-center md:mt-2">
                    2
                  </div>
                </div>
                <div>
                  <ul className="divide-y divide-gray-200">
                    <li className="pb-3 sm:pb-4">
                      <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <Image
                            className="w-[4.363rem] md:w-[7.5rem] h-[4.363rem] md:h-[7.5rem] rounded-md"
                            src="/wears/shirt.png"
                            width={377}
                            height={378}
                            alt="Neil image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[0.728rem] md:text-[1.25rem] font-[600] text-gray-900 truncate">
                            Nike Blazer Low ‘77 Vintage X 1
                          </p>
                          <p className="text-[0.509rem] md:text-[0.875rem] text-[#475367] truncate">
                            Color : Black
                          </p>
                          <p className="text-[0.509rem] md:text-[0.875rem] text-[#475367] truncate">
                            Size: 41
                          </p>
                        </div>
                        <div className="inline-flex items-center text-[0.728rem] md:text-[1.25rem] font-semibold text-[#101928]">
                          $320
                        </div>
                      </div>
                    </li>

                    <Divider my={"md"} />
                  </ul>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, lg: 12 }}
              className="">
              <div className="rounded-lg border p-4 md:p-6 space-y-4 border-zamat-border-color">
                <p className="text-[0.873rem] md:text-[1.5rem] font-[600]">
                  Delivery Information
                </p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <TextInput
                      label="First Name"
                      description=""
                      placeholder="Alexandra "
                      radius={"sm"}
                      size="md"
                      className=""
                      classNames={{
                        input: "focus:!border-zamat-border-color",
                        label: "!text-[0.509rem] md:!text-[0.875rem]",
                      }}
                    />
                    <TextInput
                      label="Last Name"
                      description=""
                      placeholder="McPherson Grey"
                      radius={"sm"}
                      size="md"
                      className=""
                      classNames={{
                        input: "focus:!border-zamat-border-color",
                        label: "!text-[0.509rem] md:!text-[0.875rem]",
                      }}
                    />
                  </div>
                  <TextInput
                    label="Address"
                    description=""
                    placeholder="Alexandra McPherson Grey"
                    radius={"sm"}
                    size="md"
                    className=""
                    classNames={{
                      input: "focus:!border-zamat-border-color",
                      label: "!text-[0.509rem] md:!text-[0.875rem]",
                    }}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <TextInput
                      label="City/Town"
                      description=""
                      placeholder="Alexandra "
                      radius={"sm"}
                      size="md"
                      className=""
                      classNames={{
                        input: "focus:!border-zamat-border-color",
                        label: "!text-[0.509rem] md:!text-[0.875rem]",
                      }}
                    />
                    <NumberInput
                      label="Zip Code"
                      description=""
                      placeholder="5061"
                      radius={"sm"}
                      size="md"
                      className=""
                      classNames={{
                        input: "focus:!border-zamat-border-color",
                        label: "!text-[0.509rem] md:!text-[0.875rem]",
                      }}
                      hideControls
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <NumberInput
                      label="Mobile Number"
                      description=""
                      placeholder="(+234) 815 678 1234"
                      radius={"sm"}
                      size="md"
                      className=""
                      classNames={{
                        input: "focus:!border-zamat-border-color",
                        label: "!text-[0.509rem] md:!text-[0.875rem]",
                      }}
                      hideControls
                    />
                    <TextInput
                      label="Last Name"
                      description=""
                      placeholder="mcPherson@gmail.com"
                      type="email"
                      radius={"sm"}
                      size="md"
                      className=""
                      classNames={{
                        input: "focus:!border-zamat-border-color",
                        label: "!text-[0.509rem] md:!text-[0.875rem]",
                      }}
                    />

                    <Button className="!bg-black mt-3" size="md" radius={100}>
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 4, lg: 4 }}
          className="">
          <PaymentInfo />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Checkout;

Checkout.getLayout = function (page: React.ReactElement) {
  // const event = '/courses/courses-banner.webp';
  return <SinglePageLayout>{page}</SinglePageLayout>;
};
