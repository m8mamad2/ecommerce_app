import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarProps} from "@nextui-org/react";
import { NavbarType } from "../types";

export default async function CustomNavbar() {

  const navbarItems: NavbarType[] = [
      { title:'ABOUT US', url:'/' },
      { title:'SERVICES', url:'/' },
      { title:'PRODUCT',  url:'/' },
      { title:'TESTIMONALS', url:'/' },
  ]
  
  return (
    <div className="flex justify-center w-full ">
      <Navbar className="bg-background py-1 absolute w-[90%] right-24 top-8 z-50 rounded-full ">
        <NavbarBrand>
          <p className="font-bold text-2xl text-white text-inherit">Gallmond</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4 text-white" justify="center">
          {navbarItems.map((e, index)=> (
            <NavbarItem key={index}>
              <Link href={e.url} className="text-gray-300 text-sm ">
                {e.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="text-gray-300 text-sm ">
              @2024 Fashin Mamad
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}