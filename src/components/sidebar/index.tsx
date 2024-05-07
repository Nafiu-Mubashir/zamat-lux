import { HambergerMenu, Logout } from "iconsax-react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
   const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Drawer
        opened={opened}
        onClose={close}
        title=""
        classNames={{
          header: "!bg-[#BCB6B5]",
          content: "!bg-[#BCB6B5]"
        }}>
        <div className="space-y-10">
          <Image
            width={592}
            height={81}
            src="/midNavLogo.png"
            // className="h-[3.741rem] w-[3.74rem] "
            alt="mid Logo"
          />

          <ul className="text-center space-y-5">
            <li>
              <Link href="/">Home</Link>
              </li>

              <li>
              <Link href="/wears">Wears</Link>
              </li>

              <li>
              <Link href="/shoes">Shoes</Link>
              </li>

              <li>
              <Link href="/bags">Bags</Link>
              </li>
              <li>
              <Link href="/perfumes">Perfumes</Link>
              </li>
          </ul>

          <Button className="!flex !justify-between mx-auto !text-black !bg-zamat-background-light">
            <Logout size="20" color="black"/>
            Logout
          </Button>
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
}

export default Sidebar