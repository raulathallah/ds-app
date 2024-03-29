"use client";
import { blackColor, primaryColor } from "@/app/_lib/color";
import user from "@/app/_lib/user";
import { User } from "@/type";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const userData: User = user();
  const pathname = usePathname();
  const router = useRouter();
  const onLogout = () => {
    localStorage.clear();
    router.refresh();
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (userData) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [userData]);

  return (
    <div>
      <Navbar shouldHideOnScroll isBordered>
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit text-xl">D.Space</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-12" justify="center">
          <NavbarItem
            isActive={pathname.includes("/studio")}
            style={{
              color: pathname.includes("/studio") ? primaryColor : "black",
            }}
          >
            <Link color="foreground" href="/studio">
              Studio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              About Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" as={"div"}>
          <NavbarItem>
            {!isLoggedIn ? (
              <Button
                as={Link}
                color="primary"
                href="/auth/login"
                variant="flat"
              >
                Login
              </Button>
            ) : (
              <Button color="danger" variant="flat" onClick={onLogout}>
                Logout
              </Button>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
