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

const NavigationBar = () => {
  const userData: User = user();
  const pathname = usePathname();
  const router = useRouter();
  const onLogout = () => {
    localStorage.clear();
    router.refresh();
  };
  return (
    <div>
      <Navbar position="static" shouldHideOnScroll isBordered>
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
        <NavbarContent justify="end">
          {!userData ? (
            <>
              <NavbarItem className="hidden lg:flex">
                <Link href="/auth/login">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  color="primary"
                  href="/auth/sign-up"
                  variant="flat"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          ) : (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  size="sm"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-medium">Signed in as</p>
                  <p className="font-semibold">{userData.username}</p>
                </DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={onLogout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
