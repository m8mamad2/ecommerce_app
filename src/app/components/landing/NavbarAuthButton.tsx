'use client'

import { LocalDatabaseService } from "@/app/service/LocalDatabaseService";
import { Button } from "@nextui-org/react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserStore } from "@/app/service/state/user_store";

export default function NavbarAuthButtos(){

    const getUser = useUserStore((state)=> state.getUser)
    const isLoggin = useUserStore((state)=> state.isLoggedIn)
    const isLoading = useUserStore((state)=> state.isLoading)

    useEffect( ()=>{ getUser() }, [] )
    
    return (
      <>
          { isLoggin 
            ?  <div className="flex flex-row  items-center  justify-end text-black ">
                <div className="flex flex-row  items-center bg-primary rounded-lg px-5 py-2 gap-2">
                  <CgProfile className="" size={21}/>
                  <h1 className="">پروفایل</h1>
                </div>
              </div>
            :  <div className="text-gray-300 gap-3 text-sm flex flex-row justify-end ">
                <Link href="/login">
                  <Button className="px-8 hover:bg-primary hover:text-black ">ورود</Button>
                </Link> 
                <Link href="/register">
                  <Button className="px-8 hover:bg-primary hover:text-black">ثبت نام</Button>
                </Link> 
              </div>
          }
      </>
    )
}