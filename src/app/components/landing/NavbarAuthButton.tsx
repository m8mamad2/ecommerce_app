'use client'

import { LocalDatabaseService } from "@/app/service/api/LocalDatabaseService";
import { Button } from "@nextui-org/react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavbarAuthButtos(){

    const [isAuth, setIsAuth] = useState<boolean>()
    const getData = async()=>{
      const data = await LocalDatabaseService.getData('token');
      setIsAuth(data.result)
    }
    useEffect(()=>{ getData() },[])
    
    return (
      <>
          { isAuth 
            ?  <div className="flex flex-row  items-center text-xl  justify-end text-black ">
                <div className="flex flex-row  items-center bg-primary rounded-lg px-4 py-1 gap-3">
                  <CgProfile className="" size={23}/>
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