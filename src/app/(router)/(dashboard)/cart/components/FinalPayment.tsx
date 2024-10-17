import { Button } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";
import { BiArrowToRight } from "react-icons/bi";


export default function FinalPayment({ setStep }:{ setStep:Dispatch<SetStateAction<1 | 2 | 3>> }){
    return (
        <div className="rounded-lg border-2 px-4 py-4 border-black mt-5">
            <h1 className="text-xl font-semibold ">پرداخت خرید</h1>
            <hr className="h-0.5 bg-gray-300 mb-6 mt-4"/>
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-600">مبلغ کل پرداخت</h1>
                <h1 className="font-semibold text-base">20912390ریال</h1>
            </div>
            <hr className="my-3"/>
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-600">نشانی منزل</h1>
                <h1 className="font-semibold text-base">لندن. کوچه شهید بابایی</h1>
            </div>
            <hr className="my-3"/>
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-600">نام تحویل گیرنده</h1>
                <h1 className="font-semibold text-base">حاج مایکل ذوزنقه</h1>
            </div>
            <hr className="my-3"/>
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-600">شماره تماس تحویل گیرنده</h1>
                <h1 className="font-semibold text-base">0966666666</h1>
            </div>
            <hr className="my-3"/>
            <div className="grid grid-cols-5 gap-5 mt-10">
                <Button onClick={()=> setStep(2)}> 
                    <BiArrowToRight /> 
                </Button>
                <Button 
                    onClick={()=> setStep(3)}
                    className="col-span-4">
                        پرداخت
                </Button>
            </div>
        </div>
    )
}