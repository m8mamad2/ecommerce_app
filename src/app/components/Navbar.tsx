import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarProps} from "@nextui-org/react";
import { NavbarType } from "../types";

export default async function CustomNavbar() {

  const navbarItems: NavbarType[] = [
      { title:'درباره ما', url:'/about' },
      { title:'محصولات', url:'/products' },
      { title:'سبد خرید',  url:'/cart' },
  ]
  
  return (
    <div className="flex justify-center w-full ">
      <div className="grid grid-cols-3 bg-background py-5 absolute w-[90%] right-24 top-8 z-50 rounded-full px-20">

        <Link href="/" className="font-bold mt-1 text-3xl text-white text-inherit ">
          <h1 className="text-white">Gallmond</h1>
        </Link>

        <div className="hidden sm:flex-row justify-center sm:flex gap-7 text-white" >
          {navbarItems.map((e, index)=> (
            <button key={index}>
              <Link href={e.url} className="text-white font-semibold text-xl hover:text-primary ">
                {e.title}
              </Link>
            </button>
          ))}
        </div>

        <div className="text-gray-300 gap-3 text-sm flex flex-row justify-end ">
          <Link href="/login">
            <Button className="px-8">ورود</Button>
          </Link> 
          <Link href="/register">
            <Button className="px-8">ثبت نام</Button>
          </Link> 
        </div>

      </div>
    </div>
  );
}