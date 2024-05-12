import { Call, Edit, Location } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";
import PaymentInfo from "~/components/paymentInfo";
import SinglePageLayout from "~/layout";

import { Button, Divider, Grid, NumberInput, TextInput } from "@mantine/core";

const Checkout = () => {
  const [show, setShow] = useState(false);
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
              {show ? (
                <div className="rounded-lg border p-4 md:p-6 space-y-4 border-zamat-border-color">
                  <div className="flex justify-between items-center">
                    <p className="text-[0.873rem] md:text-[1.5rem] font-[600]">
                      Delivery Information
                    </p>
                    <p className="flex items-center gap-2 text-zamat-main text-[0.509rem] md:text-[0.875rem]">
                      <Edit
                        size=""
                        color=""
                        className="w-[0.728rem] md:w-[1.094rem] h-[0.728rem] md:h-[1.033rem] stroke-zamat-main"
                      />
                      Edit
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[0.509rem] md:text-[0.875rem] font-[600]">
                      Alexandra McPherson
                    </p>
                    <p className="flex gap-2 items-center text-[0.509rem] md:text-[0.875rem]">
                      <Location
                        size=""
                        color=""
                        className="w-[0.728rem] md:w-[1.094rem] h-[0.728rem] md:h-[1.033rem] stroke-zamat-main"
                      />
                      20386 Donovans Rd, Georgetown, Delaware(DE)
                    </p>
                    <p className="flex gap-2 items-center text-[0.509rem] md:text-[0.875rem]">
                      <Call
                        size=""
                        color=""
                        className="w-[0.728rem] md:w-[1.094rem] h-[0.728rem] md:h-[1.033rem] stroke-zamat-main"
                      />
                      +1 23455246337
                    </p>
                    <p className="flex gap-2 items-center text-[0.509rem] md:text-[0.875rem]">
                      <svg
                        width=""
                        height=""
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[0.728rem] md:w-[1.094rem] h-[0.728rem] md:h-[1.033rem]">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.8337 15.5C17.6747 15.5 19.167 14.0076 19.167 12.1667V4.68557C19.1673 4.67283 19.1673 4.66005 19.167 4.64725V3.83333C19.167 1.99238 17.6747 0.5 15.8337 0.5H4.16705C2.3261 0.5 0.833718 1.99238 0.833718 3.83333V4.64726C0.833422 4.66005 0.833423 4.67282 0.833718 4.68556V12.1667C0.833718 14.0076 2.3261 15.5 4.16705 15.5H15.8337ZM2.50038 12.1667C2.50038 13.0871 3.24658 13.8333 4.16705 13.8333H15.8337C16.7542 13.8333 17.5004 13.0871 17.5004 12.1667V5.89753L11.2384 8.40234C10.4436 8.72022 9.55712 8.72022 8.76241 8.40234L2.50038 5.89753V12.1667ZM10.6194 6.85488L17.5004 4.10247V3.83333C17.5004 2.91286 16.7542 2.16667 15.8337 2.16667H4.16705C3.24658 2.16667 2.50038 2.91286 2.50038 3.83333V4.10247L9.3814 6.85488C9.77875 7.01382 10.222 7.01382 10.6194 6.85488Z"
                          fill="#F56630"
                        />
                      </svg>
                      +1 23455246337
                    </p>
                  </div>
                </div>
              ) : (
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
                          input:
                            "focus:!border-zamat-border-color placeholder:!text-[0.6rem]",
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
                          input:
                            "focus:!border-zamat-border-color placeholder:!text-[0.6rem]",
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
                        input:
                          "focus:!border-zamat-border-color placeholder:!text-[0.6rem]",
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
                          input:
                            "focus:!border-zamat-border-color placeholder:!text-[0.6rem]",
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
                          input:
                            "focus:!border-zamat-border-color placeholder:!text-[0.6rem]",
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
                          input:
                            "focus:!border-zamat-border-color placeholder:!text-[0.6rem]",
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
                          input:
                            "focus:!border-zamat-border-color placeholder:!text-[0.6rem]",
                          label: "!text-[0.509rem] md:!text-[0.875rem]",
                        }}
                      />

                      <Button
                        className="!bg-black mt-3"
                        size="md"
                        radius={100}
                        onClick={() => setShow(true)}>
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              )}
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
