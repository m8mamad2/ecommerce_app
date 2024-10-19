
'use client'


import "@/globals.css";
import { Button, Input } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { signupApi } from "../api";

export default function RegisterPage(){

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleRepeat, setIsVisibleRepeat] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible)
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        // event.preventDefault();
        setIsLoading(true);
        try{
            await signupApi("phoneNumber"!, "password"!);
            // const formData = event.currentTarget;
            // const phoneNumber = formData.get
            // const password = formData.get('password')?.valueOf().toString()
            // console.log(phoneNumber)
            // console.log(password)
            // router.push('/')
        }
        catch(e){
            console.log(e)
        }
        finally {
            setIsLoading(false);
        }
    }
    
    
    
    return (
        <div className="relative flex flex-row h-[100vh] bg-background">
            <div className="px-6 pt-40 grid-cols-3   w-[58%] rounded-l-full bg-orange-400 bg-[url('/auth/bgauth.jpg')]"></div>
            <div className=" w-[42%] flex flex-col justify-center items-start px-40 ">
                <h1 className="text-5xl font-bold text-white">اکانت خودتان را بسازید</h1>
                <h1 className="text-lg text-gray-400 mb-10 mt-3">با داشتن ایمیل و رمزعبور اکانت خودتون رو بسازید </h1>
                {/* <form onSubmit={onSubmit} className="w-full"> */}
                <form className="w-full">
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
                    <div className="h-2"></div>
                    <Input
                        label={<p className="text-white font-semibold">رمز عبور</p>}
                        variant="flat"
                        labelPlacement="outside"
                        placeholder="Enter your password"
                        type={isVisible ? "text" : "password"}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                            {isVisible ? (
                                <RiEyeLine className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <RiEyeCloseLine className="text-2xl text-default-400 pointer-events-none" />
                            )}
                            </button>
                        }
                        className=""
                        />
                    <div className="h-6"></div>
                    <Input
                        label={<p className="text-white font-semibold">تکرار رمز عبور</p>}
                        variant="flat"
                        labelPlacement="outside"
                        placeholder="Enter your password"
                        type={isVisible ? "text" : "password"}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-labelledby="toggle password visibility" aria-label="toggle password visibility">
                            {isVisibleRepeat ? (
                                <RiEyeLine className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <RiEyeCloseLine className="text-2xl text-default-400 pointer-events-none" />
                            )}
                            </button>
                        }
                        className=""
                        />
                    <Button 
                        variant="solid" 
                        onClick={ async()=>{
                            console.log('-----------')
                        }}
                        className="w-full mt-28 bg-[#ccae8c] text-black font-bold">ثبdت نام</Button>
                </form>
            </div>



        </div>
    )
}