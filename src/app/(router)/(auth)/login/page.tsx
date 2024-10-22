
'use client'


import "@/globals.css";
import { Button, Input } from "@nextui-org/react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import useSWRMutation from "swr/mutation";
import { loignApi } from "../api";
import axiosInstance from "@/app/service/api/ApiConfiguration";
import { ErrorResponse } from "@/app/types";
// import { useMutation } from "@tanstack/react-query";



export default function LoginPage(){

    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [phoneNumber, setPoneNumber] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleSubmit = async () => await loignApi(phoneNumber!, password!,router );
    

    return (
        <div className="relative flex flex-row h-[100vh] bg-background">
            <div className="px-6 pt-40 grid-cols-3   w-[58%] rounded-l-full bg-orange-400 bg-[url('/auth/bgauth2.jpg')]"></div>
            <div className=" w-[42%] flex flex-col justify-center items-start px-40 ">
                <h1 className="text-5xl font-bold text-white">وارد اکانت خود شوید</h1>
                <h1 className="text-lg text-gray-400 mb-10 mt-3">با داشتن ایمیل و رمزعبور وارد اکانت خودتون بشید </h1>
                    <Input
                        isClearable
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        label={<p className="text-white font-semibold">شماره تلفن</p>}
                        variant="flat"
                        placeholder="شماره تلفن خود را وارد کنید"
                        labelPlacement="outside"
                        required
                        onChange={(e)=> setPoneNumber(e.currentTarget.value)}
                        onClear={() => {}}
                        className="py-5"
                        />
                    <div className="h-6"></div>
                    <Input
                        label={<p className="text-white font-semibold">رمز عبور</p>}
                        variant="flat"
                        id="password"
                        required
                        name="password"
                        labelPlacement="outside"
                        onChange={(e)=> setPassword(e.currentTarget.value)}
                        placeholder="رمز عبور خود را وارد کنید"
                        type={isVisible ? "text" : "password"}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={()=>setIsVisible(!isVisible)} aria-labelledby="toggle password visibility" aria-label="toggle password visibility">
                            {isVisible ? (
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
                        onClick={ handleSubmit }
                        className="w-full mt-28 bg-[#656563] text-black font-bold">ثبت نام</Button>
            </div>



        </div>
    )
    
}