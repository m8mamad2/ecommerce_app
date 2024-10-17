'use client'

import { Button, Progress } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { BsCartDash } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdPayment } from "react-icons/md";
import Address from "./Address";
import FinalPayment from "./FinalPayment";
import Payment from "./Payment";




export default function CartCheckout(){
    
    const [step, setStep] = useState< 1 | 2 | 3 >(2);
    const cartCheckoutItems: { step: number, title: string, icon: ReactNode, page: ReactNode }[] = [
        { step:1, title: "جزیات خرید ", icon: <MdPayment/> , page: <Payment setStep={setStep}/> }, 
        { step:2, title: "جزیات آدرس ", icon: <GoLocation/> , page: <Address setStep={setStep}/>}, 
        { step:3, title: "پرداخت", icon: <BsCartDash/> , page: <FinalPayment setStep={setStep}/>}, 
    ]
    
    const [progress, setProgress] = useState<number>(20);
    
    const currentPage = cartCheckoutItems.find(item => item.step === step)?.page;

    return ( 
        <div className="w-[35%] sticky top-10 z-10 h-full">
            <div>
                <Progress value={(step * 30)} className="rotate-180" classNames={{ indicator:'bg-background', base:'bg-white' }} />
                <ol className="mt-2 flex flex-row justify-between px-5 text-sm font-medium text-gray-500">
                    {
                        cartCheckoutItems.map((e,index)=> 
                            <li key={index} className={`flex items-center justify-start gap-1 ${e.step === step ? "text-black" : "text-gray-400"}`}>
                                {e.icon}
                                <span className="hidden sm:inline"> { e.title }</span>
                            </li>
                        )
                    }
                </ol>
            </div>
            { currentPage }
        </div>
    )
}
