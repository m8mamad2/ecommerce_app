'use client'

import { LocalDatabaseService } from "@/app/service/api/LocalDatabaseService";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NavbarAuthButtos(){

    const isAuth = await LocalDatabaseService.getData('token')
    
    return (
        <div className="text-gray-300 gap-3 text-sm flex flex-row justify-end ">
          <Link href="/login">
            <Button className="px-8 hover:bg-primary hover:text-black ">ورود</Button>
          </Link> 
          <Link href="/register">
            <Button className="px-8 hover:bg-primary hover:text-black">ثبت نام</Button>
          </Link> 
        </div>
    )
}