import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarProps} from "@nextui-org/react";
import { NavbarType } from "../types";

export default async function CustomNavbar() {

  const navbarItems: NavbarType[] = [
      { title:'درباره ما', url:'/' },
      { title:'دسته بندی ها', url:'/' },
      { title:'سبد خرید',  url:'/' },
  ]
  
  return (
    <div className="flex justify-center w-full ">
      <div className="grid grid-cols-3 bg-background py-5 absolute w-[90%] right-24 top-8 z-50 rounded-full px-20">

        <p className="font-bold mt-1 text-3xl text-white text-inherit ">Gallmond</p>

        <div className="hidden sm:flex-row justify-center sm:flex gap-7 text-white" >
          {navbarItems.map((e, index)=> (
            <button key={index}>
              <Link href={e.url} className="text-gray-300 text-xl hover:text-primary ">
                {e.title}
              </Link>
            </button>
          ))}
        </div>

        <div className="text-gray-300 gap-3 text-sm flex flex-row justify-end ">
          <Button className="px-8">ثبت نام</Button>
          <Button className="px-8">وارد شدن</Button>
        </div>

      </div>
    </div>
  );
}