
'use client'


import "@/globals.css";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { loignApi } from "../api";

export default function LoginPage(){

    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        try{
            const formData = new FormData(event.currentTarget);
            const phoneNumber = formData.get('phoneNumber')?.valueOf().toString()
            const password = formData.get('password')?.valueOf().toString()
            console.log(phoneNumber)
            console.log(password)
            await loignApi(phoneNumber!, password!);
            router.push('/')
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
            <div className="px-6 pt-40 grid-cols-3   w-[58%] rounded-l-full bg-orange-400 bg-[url('/auth/bgauth2.jpg')]"></div>
            <div className=" w-[42%] flex flex-col justify-center items-start px-40 ">
                <h1 className="text-5xl font-bold text-white">وارد اکانت خود شوید</h1>
                <h1 className="text-lg text-gray-400 mb-10 mt-3">با داشتن ایمیل و رمزعبور وارد اکانت خودتون بشید </h1>
                <form onSubmit={onSubmit} className="w-full">
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
                        type="submit"
                        className="w-full mt-28 bg-[#656563] text-black font-bold">ثبت نام</Button>
                </form>
            </div>



        </div>
    )
}