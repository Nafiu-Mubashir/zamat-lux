import React, { useState } from 'react'

import { Button, Checkbox, Divider, Drawer, NumberInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';

interface Color {
  id: string;
  hueRotate: string;
}

const FilterDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();
  const wearsSizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const shoesSizes = [
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
  ];

      const colors: Color[] = [
        { id: "green", hueRotate: "120deg" }, // Green
        { id: "red", hueRotate: "0deg" }, // Red
        { id: "yellow", hueRotate: "60deg" }, // Yellow
        { id: "orange", hueRotate: "30deg" }, // Orange
        { id: "light-blue", hueRotate: "180deg" }, // Light Blue
        { id: "blue", hueRotate: "240deg" }, // Blue
        { id: "purple", hueRotate: "280deg" }, // Purple
        { id: "pink", hueRotate: "330deg" }, // Pink
        { id: "white", hueRotate: "0deg" }, // White (no hue rotation)
        { id: "black", hueRotate: "0deg" }, // Black (no hue rotation)
      ];

      const wearsType = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

      const [selectedColor, setSelectedColor] = useState<string | null>(null);

      const handleColorChange = (colorId: string) => {
        setSelectedColor(colorId);
        console.log(colorId);
      };
  return (
    <div>
      <Drawer
        opened={opened}
        onClose={close}
        title="Filter"
        position="bottom"
        size={"md"}
        radius={20}
        classNames={{
          header: "!border-b !w-[90%] mx-auto"
        }}
        >
        <div className="rounded-2xl p-4 space-y-3">
          {/* <Divider my={"md"} /> */}

          <div className="space-y-2">
            <div className="space-y-2">
              {wearsType.map((item, id) => (
                <div
                  key={id}
                  className="flex justify-between items-center">
                  <label htmlFor="">{item}</label>
                  <Checkbox
                    label={""}
                    size="xs"
                    color="gray"
                  />
                </div>
              ))}
            </div>
          </div>

          <Divider my={"md"} />

          <div className="space-y-2">
            <h1 className="font-semibold">Price</h1>
            <div className="flex items-center gap-2">
              <NumberInput
                placeholder="$34"
                radius={"sm"}
                size="md"
                className=""
                classNames={{
                  input: "focus:!border-zamat-border-color",
                  label: "",
                }}
                hideControls
              />

              <svg width="37" height="9" viewBox="0 0 37 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53178 0.219827C5.60162 0.289488 5.65702 0.372242 5.69483 0.46335C5.73263 0.554457 5.75209 0.652128 5.75209 0.750768C5.75209 0.849408 5.73263 0.947079 5.69483 1.03819C5.65702 1.12929 5.60162 1.21205 5.53178 1.28171L3.06155 3.75043H10.2502C10.4491 3.75043 10.6399 3.82944 10.7805 3.97008C10.9212 4.11071 11.0002 4.30146 11.0002 4.50035C11.0002 4.69924 10.9212 4.88998 10.7805 5.03062C10.6399 5.17126 10.4491 5.25027 10.2502 5.25027H3.06155L5.53178 7.71899C5.67259 7.8598 5.7517 8.05079 5.7517 8.24993C5.7517 8.44907 5.67259 8.64006 5.53178 8.78087C5.39096 8.92168 5.19998 9.00079 5.00084 9.00079C4.8017 9.00079 4.61071 8.92168 4.4699 8.78087L0.720316 5.03129C0.650479 4.96163 0.595071 4.87887 0.557266 4.78777C0.51946 4.69666 0.5 4.59899 0.5 4.50035C0.5 4.40171 0.51946 4.30404 0.557266 4.21293C0.595071 4.12182 0.650479 4.03907 0.720316 3.96941L4.4699 0.219827C4.53956 0.14999 4.62231 0.094582 4.71342 0.0567766C4.80453 0.0189711 4.9022 -0.000488281 5.00084 -0.000488281C5.09948 -0.000488281 5.19715 0.0189711 5.28826 0.0567766C5.37936 0.094582 5.46212 0.14999 5.53178 0.219827ZM31.4682 0.219827C31.5379 0.14999 31.6206 0.094582 31.7117 0.0567766C31.8029 0.0189711 31.9005 -0.000488281 31.9992 -0.000488281C32.0978 -0.000488281 32.1955 0.0189711 32.2866 0.0567766C32.3777 0.094582 32.4604 0.14999 32.5301 0.219827L36.2797 3.96941C36.3495 4.03907 36.4049 4.12182 36.4427 4.21293C36.4805 4.30404 36.5 4.40171 36.5 4.50035C36.5 4.59899 36.4805 4.69666 36.4427 4.78777C36.4049 4.87887 36.3495 4.96163 36.2797 5.03129L32.5301 8.78087C32.3893 8.92168 32.1983 9.00079 31.9992 9.00079C31.8 9.00079 31.609 8.92168 31.4682 8.78087C31.3274 8.64006 31.2483 8.44907 31.2483 8.24993C31.2483 8.05079 31.3274 7.8598 31.4682 7.71899L33.9384 5.25027H26.7497C26.5509 5.25027 26.3601 5.17126 26.2195 5.03062C26.0788 4.88998 25.9998 4.69924 25.9998 4.50035C25.9998 4.30146 26.0788 4.11071 26.2195 3.97008C26.3601 3.82944 26.5509 3.75043 26.7497 3.75043H33.9384L31.4682 1.28171C31.3984 1.21205 31.343 1.12929 31.3052 1.03819C31.2674 0.947079 31.2479 0.849408 31.2479 0.750768C31.2479 0.652128 31.2674 0.554457 31.3052 0.46335C31.343 0.372242 31.3984 0.289488 31.4682 0.219827Z" fill="black" />
              </svg>

              <NumberInput
                placeholder="$234"
                radius={"sm"}
                size="md"
                className=""
                classNames={{
                  input: "focus:!border-zamat-border-color",
                  label: "",
                }}
                hideControls
              />
            </div>
          </div>

          <Divider my={"md"} />

          <div className="space-y-2">
            <h1 className="font-semibold">Colors</h1>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <div key={color.id}>
                  <input
                    type="radio"
                    name="color"
                    id={color.id}
                    onChange={() => handleColorChange(color.id)}
                    className="hidden"
                  />
                  <label
                    htmlFor={color.id}
                    className="label"></label>
                </div>
              ))}
            </div>
          </div>

          <Divider my={"md"} />

          {
            pathname === '/wears' && (
              <div className="space-y-2">
                <h1 className="font-semibold">Size</h1>
                <div className="md:grid md:grid-cols-2 lg:flex lg:flex-wrap gap-2 ">
                  {wearsSizes.map((item, id) => (
                    <div
                      key={id}
                      className="text-center border bg-[#EBE8E7] rounded-full p-1 lg:p-2 w-[4.5rem] lg:w-[6.188rem] text-[0.7rem] lg:text-[0.875rem]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )
          }

          {
            pathname === '/shoes' && (
              <div className="space-y-2">
                <h1 className="font-semibold">Size</h1>
                <div className="flex flex-wrap gap-2 ">
                  {shoesSizes.map((item, id) => (
                    <div
                      key={id}
                      className="text-center border bg-[#EBE8E7] rounded-full p-1 lg:p-2 text-[0.7rem] lg:text-[0.875rem] w-[3.25rem] h-[3.25rem] flex justify-center items-center cursor-pointer hover:bg-black hover:text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )
          }
          <Button
            classNames={{
              root: "!bg-black !w-full",
            }}
            radius={100}>
            Apply Filter
          </Button>
        </div>
      </Drawer>

      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
        onClick={open}>
        <path
          d="M12.125 9.625V18.25C12.125 18.5484 12.0065 18.8345 11.7955 19.0455C11.5845 19.2565 11.2984 19.375 11 19.375C10.7016 19.375 10.4155 19.2565 10.2045 19.0455C9.99353 18.8345 9.875 18.5484 9.875 18.25V9.625C9.875 9.32663 9.99353 9.04048 10.2045 8.8295C10.4155 8.61853 10.7016 8.5 11 8.5C11.2984 8.5 11.5845 8.61853 11.7955 8.8295C12.0065 9.04048 12.125 9.32663 12.125 9.625ZM17.75 16C17.4516 16 17.1655 16.1185 16.9545 16.3295C16.7435 16.5405 16.625 16.8266 16.625 17.125V18.25C16.625 18.5484 16.7435 18.8345 16.9545 19.0455C17.1655 19.2565 17.4516 19.375 17.75 19.375C18.0484 19.375 18.3345 19.2565 18.5455 19.0455C18.7565 18.8345 18.875 18.5484 18.875 18.25V17.125C18.875 16.8266 18.7565 16.5405 18.5455 16.3295C18.3345 16.1185 18.0484 16 17.75 16ZM20 12.25H18.875V1.75C18.875 1.45163 18.7565 1.16548 18.5455 0.954505C18.3345 0.743526 18.0484 0.625 17.75 0.625C17.4516 0.625 17.1655 0.743526 16.9545 0.954505C16.7435 1.16548 16.625 1.45163 16.625 1.75V12.25H15.5C15.2016 12.25 14.9155 12.3685 14.7045 12.5795C14.4935 12.7905 14.375 13.0766 14.375 13.375C14.375 13.6734 14.4935 13.9595 14.7045 14.1705C14.9155 14.3815 15.2016 14.5 15.5 14.5H20C20.2984 14.5 20.5845 14.3815 20.7955 14.1705C21.0065 13.9595 21.125 13.6734 21.125 13.375C21.125 13.0766 21.0065 12.7905 20.7955 12.5795C20.5845 12.3685 20.2984 12.25 20 12.25ZM4.25 13C3.95163 13 3.66548 13.1185 3.4545 13.3295C3.24353 13.5405 3.125 13.8266 3.125 14.125V18.25C3.125 18.5484 3.24353 18.8345 3.4545 19.0455C3.66548 19.2565 3.95163 19.375 4.25 19.375C4.54837 19.375 4.83452 19.2565 5.0455 19.0455C5.25647 18.8345 5.375 18.5484 5.375 18.25V14.125C5.375 13.8266 5.25647 13.5405 5.0455 13.3295C4.83452 13.1185 4.54837 13 4.25 13ZM6.5 9.25H5.375V1.75C5.375 1.45163 5.25647 1.16548 5.0455 0.954505C4.83452 0.743526 4.54837 0.625 4.25 0.625C3.95163 0.625 3.66548 0.743526 3.4545 0.954505C3.24353 1.16548 3.125 1.45163 3.125 1.75V9.25H2C1.70163 9.25 1.41548 9.36853 1.2045 9.5795C0.993526 9.79048 0.875 10.0766 0.875 10.375C0.875 10.6734 0.993526 10.9595 1.2045 11.1705C1.41548 11.3815 1.70163 11.5 2 11.5H6.5C6.79837 11.5 7.08452 11.3815 7.2955 11.1705C7.50647 10.9595 7.625 10.6734 7.625 10.375C7.625 10.0766 7.50647 9.79048 7.2955 9.5795C7.08452 9.36853 6.79837 9.25 6.5 9.25ZM13.25 4.75H12.125V1.75C12.125 1.45163 12.0065 1.16548 11.7955 0.954505C11.5845 0.743526 11.2984 0.625 11 0.625C10.7016 0.625 10.4155 0.743526 10.2045 0.954505C9.99353 1.16548 9.875 1.45163 9.875 1.75V4.75H8.75C8.45163 4.75 8.16548 4.86853 7.9545 5.0795C7.74353 5.29048 7.625 5.57663 7.625 5.875C7.625 6.17337 7.74353 6.45952 7.9545 6.6705C8.16548 6.88147 8.45163 7 8.75 7H13.25C13.5484 7 13.8345 6.88147 14.0455 6.6705C14.2565 6.45952 14.375 6.17337 14.375 5.875C14.375 5.57663 14.2565 5.29048 14.0455 5.0795C13.8345 4.86853 13.5484 4.75 13.25 4.75Z"
          fill="#BCB6B5"
        />
      </svg>
    </div>
  );
}

export default FilterDrawer