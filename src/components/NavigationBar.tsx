"use client";
import { primaryColor } from "@/app/_lib/color";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <>
      <Navbar position="static" shouldHideOnScroll>
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit">D.Space</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-12" justify="center">
          <NavbarItem
            isActive={pathname === "/studio"}
            style={{
              color: pathname === "/studio" ? primaryColor : "black",
            }}
          >
            <Link color="foreground" href="/studio">
              Studio
            </Link>
          </NavbarItem>
          <NavbarItem>
            {/*<Link href="#" aria-current="page">
      About Us
    </Link>*/}
            <Link color="foreground" href="#">
              About Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavigationBar;