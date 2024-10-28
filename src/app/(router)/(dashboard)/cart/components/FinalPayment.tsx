import { ApiService } from "@/app/service/api/ApiService";
import { ApiRes, StepsProps, UserType } from "@/app/types";
import { Button } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BiArrowToRight } from "react-icons/bi";
import { PaymnetApiRes } from "./Payment";


export default function FinalPayment(props: StepsProps){

    const [currentUser, setCurrentUser] = useState<UserType>()
    const [payment, setPayment] = useState<PaymnetApiRes>()
    
    const getCurrentUser = async () => {
        const getCurrentUser:ApiRes<UserType> = await ApiService.get("auth/curretn_user");
        if (getCurrentUser.result) setCurrentUser(getCurrentUser.data)
    };

    const getData = async()=>{
        const result: ApiRes<PaymnetApiRes> = await ApiService.get('cart/total')
        if(result.result) setPayment(result.data)
    }

    useEffect(()=>{
        getCurrentUser();
        getData();
    }, [])
    
    return (
        <div className="rounded-lg border-2 px-4 py-4 border-black mt-5">
            <h1 className="text-xl font-semibold ">پرداخت خرید</h1>
            <hr className="h-0.5 bg-gray-300 mb-6 mt-4"/>
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-600">مبلغ کل پرداخت</h1>
                <h1 className="font-semibold text-base">{payment?.pay}</h1>
            </div>
            <hr className="my-3"/>
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-600">نشانی منزل</h1>
                <h1 className="font-semibold text-base">{currentUser?.address_name}</h1>
            </div>
            <hr className="my-3"/>
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-600">نام تحویل گیرنده</h1>
                <h1 className="font-semibold text-base">{currentUser?.full_name}</h1>
            </div>
            <hr className="my-3"/>
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-600">شماره تماس تحویل گیرنده</h1>
                <h1 className="font-semibold text-base">{currentUser?.phoneNumber}</h1>
            </div>
            <hr className="my-3"/>
            <div className="grid grid-cols-5 gap-5 mt-10">
                <Button onClick={()=> props.setStep(2)}> 
                    <BiArrowToRight /> 
                </Button>
                <Button 
                    onClick={()=> props.setStep(3)}
                    className="col-span-4">
                        پرداخت
                </Button>
            </div>
        </div>
    )
}