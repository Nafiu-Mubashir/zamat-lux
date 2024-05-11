import { HambergerMenu, Logout } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

import { Button, Divider, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Sidebar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Drawer
        opened={opened}
        onClose={close}
        title=""
        classNames={{
          header: "",
          content: "",
        }}>
        <div className="space-y-20">
          <Image
            width={592}
            height={81}
            src="/midNavLogo.png"
            // className="h-[3.741rem] w-[3.74rem] "
            alt="mid Logo"
          />

          <ul className="text-center space-y-4">
            <li>
              <Link
                href="/"
                onClick={close}>
                Home
              </Link>
            </li>
            <Divider />
            <li>
              <Link
                href="/wears"
                onClick={close}>
                Wears
              </Link>
            </li>
            <Divider />
            <li>
              <Link
                href="/shoes"
                onClick={close}>
                Shoes
              </Link>
            </li>
            <Divider />
            <li>
              <Link
                href="/bags"
                onClick={close}>
                Bags
              </Link>
            </li>
            <Divider />
            <li>
              <Link
                href="/perfumes"
                onClick={close}>
                Perfumes
              </Link>
            </li>
            <Divider />
          </ul>

          <div className="space-y-5">
            <h1 className="text-center text-[1.125rem] uppercase font-semibold">
              Accout
            </h1>
            <ul className="text-center space-y-3">
              <li>
                <Link
                  href="/"
                  onClick={close}>
                  Orders
                </Link>
              </li>
              <Divider />
              <li className="flex  gap-2 justify-center">
                <Link
                  href="/login"
                  onClick={close}>
                  Login
                </Link>
                /
                <Link
                  href="/sign-up"
                  onClick={close}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>

      {/* <Button >Open Drawer</Button> */}
      <HambergerMenu
        size="32"
        color="black"
        className="block lg:hidden"
        onClick={open}
      />
    </div>
  );
};

export default Sidebar;
