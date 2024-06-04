import { ShoppingCart, Trash } from "iconsax-react";
import Image from "next/image";
import React from 'react';

import { Divider, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Cart = ({ color }: { color: string }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Drawer
        opened={opened}
        onClose={close}
        title="Cart"
        position="right"
        size={"lg"}
        // radius={20}
        classNames={{
          header: "font-bold !w-[90%] mx-auto mb-4",
        }}>
        <div className="border rounded-lg p-2">
          <ul className="divide-y divide-gray-200">
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Image
                    className="w-[4.363rem] md:w-[7.75rem] h-[4.363rem] md:h-[7.5rem] rounded-md"
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

                  <p className="text-[0.728rem] md:text-[1.5rem] font-[600] text-gray-900 truncate">
                    $145
                  </p>
                </div>
                <div className="flex flex-col gap-8 items-end text-[0.728rem] md:text-[1.25rem] font-semibold text-[#101928]">
                  <Trash
                    size="20"
                    color="#FF8A65"
                  />

                  <div className="flex justify-between items-center py-4 px-3 md:px-4 bg-gray-300 rounded-full w-[4.666rem] lg:w-[7.75rem] h-[1.642rem] md:w-[2.75rem]">
                    <svg
                      width=""
                      height=""
                      viewBox="0 0 20 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[0.746rem] md:w-[0.977rem] h-[0.746rem] md:h-[0.977rem]">
                      <path
                        d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.79549C18.8345 3.00647 18.5484 3.125 18.25 3.125H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.79549C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41548 0.954505 1.2045C1.16548 0.993526 1.45163 0.875 1.75 0.875H18.25C18.5484 0.875 18.8345 0.993526 19.0455 1.2045C19.2565 1.41548 19.375 1.70163 19.375 2Z"
                        fill="#0D0A09"
                      />
                    </svg>
                    1
                    <svg
                      width=""
                      height=""
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[0.746rem] md:w-[0.977rem] h-[0.746rem] md:h-[0.977rem]">
                      <path
                        d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z"
                        fill="#0D0A09"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </li>

            <Divider my={"md"} />
          </ul>
        </div>
      </Drawer>

      <ShoppingCart
        size="20"
        color={color}
        className="cursor-pointer"
        onClick={open}
      />
    </div>
  );
}

export default Cart