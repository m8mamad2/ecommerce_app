
'use client'


import "@/globals.css";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";

export default function LoginPage(){

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible)
    
    return (
        <div className="relative flex flex-row h-[100vh] bg-background">
            <div className="px-6 pt-40 grid-cols-3   w-[58%] rounded-l-full bg-orange-400 bg-[url('/auth/bgauth2.jpg')]"></div>
            <div className=" w-[42%] flex flex-col justify-center items-start px-40 ">
                <h1 className="text-5xl font-bold text-white">وارد اکانت خود شوید</h1>
                <h1 className="text-lg text-gray-400 mb-10 mt-3">با داشتن ایمیل و رمزعبور وارد اکانت خودتون بشید </h1>
                <Input
                    isClearable
                    type="email"
                    label={<p className="text-white font-semibold">ایمیل</p>}
                    variant="flat"
                    placeholder="Enter your email"
                    labelPlacement="outside"
                    defaultValue="junior@nextui.org"
                    onClear={() => {}}
                    className="py-5"
                    />
                <div className="h-6"></div>
                <Input
                    label={<p className="text-white font-semibold">رمز عبور</p>}
                    variant="flat"
                    labelPlacement="outside"
                    placeholder="Enter your password"
                    type={isVisible ? "text" : "password"}
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-labelledby="toggle password visibility" aria-label="toggle password visibility">
                        {isVisible ? (
                            <RiEyeLine className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <RiEyeCloseLine className="text-2xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                    className=""
                    />
                <Button variant="solid" className="w-full mt-28 bg-[#656563] text-black font-bold">ثبت نام</Button>
            </div>



        </div>
    )
}