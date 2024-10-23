import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarProps} from "@nextui-org/react";
import { NavbarType } from "../types";
import { simpleButtonTransitionClass } from "../utils/hover_animation";
import { lazy, Suspense } from "react";
const NavbarAuthButtos = lazy(()=> import("./landing/NavbarAuthButton"))

export default async function CustomNavbar() {

  const navbarItems: NavbarType[] = [
      { title:'خانه', url:'/' },
      { title:'درباره ما', url:'/about' },
      { title:'محصولات', url:'/products' },
      { title:'سبد خرید',  url:'/cart' },
      { title:'علاقه مندی ها',  url:'/favorite' },
  ]
  
  return (
    <div className="flex justify-center w-full ">
      <div className="grid grid-cols-4 bg-background py-5 absolute w-[90%] right-24 top-8 z-50 rounded-full px-20">

        <Link href="/" className="font-bold mt-1 text-3xl text-white text-inherit ">
          <h1 className="text-white hover:text-primary">Gallmond</h1>
        </Link>

        <div className="hidden col-span-2 sm:flex-row justify-center sm:flex gap-7 text-white " >
          {navbarItems.map((e, index)=> (
            <button key={index}>
              <Link href={e.url} className={`text-white font-semibold text-xl hover:text-primary hover:scale-90 ${simpleButtonTransitionClass}`}>
                {e.title}
              </Link>
            </button>
          ))}
        </div>
        
        <NavbarAuthButtos />

      </div>
    </div>
  );
}