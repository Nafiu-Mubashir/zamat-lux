import React, { useState } from "react";

import { Button, Divider, NumberInput, Radio, TextInput } from "@mantine/core";

const PaymentInfo = () => {
  const cardOption = ["Debit or Credit Card", "Paystack", "Pay on Delivery"];
  const productDetails = [
    {
      subTotal: "$560.00",
      tax: "$54.00",
      shipping: "$0.00",
    }
  ]
  // const [date, setDate] = useState();
  
  return (
    <div className="">
      <div className="rounded-lg border lg:w-[26.5rem p-4 md:p-6 space-y-4 border-zamat-border-color">
        <p className="text-[0.873rem] md:text-[1.5rem] font-[600]">
          Payment Information
        </p>
        <div className="space-y-2">
          <p className="text-[0.582rem] md:text-[1rem] font-[600]">
            Apply Discount
          </p>
          <div className="flex gap-3">
            <TextInput
              label=""
              description=""
              placeholder="Enter Coupon Code"
              radius={"xl"}
              size="md"
              className="lg:!w-[15.125rem]"
              classNames={{
                input: "focus:!border-zamat-border-color",
              }}
            />
            <Button
              className="!bg-zamat-main !w-1/3"
              radius={100}
              size="md">
              Apply
            </Button>
          </div>
        </div>
        <Divider my={"md"} />
        <div>
          <Radio.Group
            // value={value}
            // onChange={setValue}
            // name="favoriteFramework"
            label="Pay With"
            classNames={{
              label: "!text-[0.582rem] md:!text-[1rem]",
            }}
            // description="This is anonymous"
            className="space-y-3">
            {cardOption.map((item, id) => (
              <Radio
                key={id}
                value={item}
                label={item}
                className="mb-2 capitalize border-gray-300 "
                classNames={{
                  icon: "!focus:ring-red-500  !focus:ring-2",
                  label: "!text-[0.509rem] md:!text-[0.875rem]",
                }}
              />
            ))}
          </Radio.Group>
        </div>

        <Divider my={"md"} />

        <div className="space-y-2">
          <p className="text-[0.582rem] md:text-[1rem] font-[600]">
            Enter Card Information
          </p>
          <div className="space-y-3">
            <TextInput
              label="Cardholder Name"
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
            <NumberInput
              label="Card Number"
              description=""
              placeholder="5061 2345 6789 1234"
              radius={"sm"}
              size="md"
              className=""
              classNames={{
                input: "focus:!border-zamat-border-color",
                label: "!text-[0.509rem] md:!text-[0.875rem]",
              }}
              hideControls
            />
            <div className="flex gap-3">
              <div className="w-[90%]">
                <label
                  htmlFor="date"
                  className="block font-medium text-[0.509rem] md:text-[0.875rem]">
                  Expiry Date
                </label>
                <input
                  type="month"
                  name=""
                  id="date"
                  // onChange={(e) => setDate(e.currentTarget.value)}
                  className="px-4 border-gray-200 focus:outline-zamat-border-color bg-white focus:ring-zamat-border-color py-1 focus:border-zamat-border-color"
                />
              </div>

              <NumberInput
                label="CVV"
                description=""
                placeholder="123"
                hideControls
                size="md"
                classNames={{
                  input: "focus:!border-zamat-border-color",
                  label: "!text-[0.509rem] md:!text-[0.875rem]",
                }}
              />
            </div>

            <div></div>
          </div>
        </div>

        <Divider my={"md"} />

        <div className="space-y-2">
          <ul className="max-w-md ">
            {productDetails.map(({ subTotal, tax, shipping }, id) => (
              <li
                className="pb-3 sm:pb-4 space-y-2"
                key={id}>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.509rem] md:text-[0.875rem] font-[500] text-gray-900 truncate">
                      Sub Total
                    </p>
                  </div>
                  <div className="inline-flex items-center text-[0.509rem] md:text-[0.875rem] font-[500] text-gray-900">
                    {subTotal}
                  </div>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.509rem] md:text-[0.875rem] font-[500] text-gray-900 truncate">
                      Tax (10%)
                    </p>
                  </div>
                  <div className="inline-flex items-center text-[0.509rem] md:text-[0.875rem] font-[500] text-gray-900">
                    {tax}
                  </div>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.509rem] md:text-[0.875rem] font-[500] text-gray-900 truncate">
                      Shipping
                    </p>
                  </div>
                  <div className="inline-flex items-center text-[0.509rem] md:text-[0.875rem] font-[500] text-gray-900">
                    {shipping}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Divider my={"md"} />

          <div>
            <ul className="max-w-md ">
              <li className="pb-3 sm:pb-4 space-y-2">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.509rem] md:text-[0.875rem] font-[500] text-gray-900 truncate">
                      Sub Total
                    </p>
                  </div>
                  <div className="inline-flex items-center  text-[0.509rem] md:text-[0.875rem] font-[500] text-gray-900">
                    $614.00
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <Button
            className="!bg-zamat-main !w-full"
            radius={100}
            size="md">
            Pay $614.00
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
