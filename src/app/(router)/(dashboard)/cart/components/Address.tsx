import { Button } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";
import { BiArrowBack, BiArrowToRight } from "react-icons/bi";

export default function Address({ setStep }:{ setStep:Dispatch<SetStateAction<1 | 2 | 3>> }){
    return (
        <div className="rounded-lg border-2 px-4 py-4 border-black mt-5">
            <h1 className="text-xl font-semibold">اطلاعات و آدرس</h1>
            <hr className="h-0.5 bg-gray-300 my-4"/>

            <div className="grid grid-cols-4 gap-2">
                <Button onClick={()=> setStep(1)} className="w-full">
                    <BiArrowToRight />
                </Button>
                <Button onClick={()=> setStep(3)} className="w-full col-span-3">
                    ثبت آدرس
                </Button>

            </div>
        </div>
    )
}