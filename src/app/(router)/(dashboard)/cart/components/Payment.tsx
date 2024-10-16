import { Button } from "@nextui-org/react"
import { Dispatch, SetStateAction } from "react"

export default function Payment({ setStep }:{ setStep:Dispatch<SetStateAction<1 | 2 | 3>> }){

    
    const summaryOrder: {title:string , price: number}[] = [
        { title:"مجموع خرید", price:10000 },
        { title:"تخفیف", price:10000 },
        { title:"مبلغ پست", price:10000 },
    ]
    
    
    return <div className="rounded-lg border-2 px-4 py-4 border-black mt-5">
        <h1 className="text-xl font-semibold">خلاصه سفارش</h1>
        <hr className="h-0.5 bg-gray-300 my-4"/>
        <div className="flex flex-col gap-3 mb-4">
            {summaryOrder.map((e,index)=>(
                <div key={index} className="flex flex-row justify-between">
                    <h1 className="text-gray-500">{e.title}</h1>
                    <h1 className="text-black font-bold">{e.price}</h1>
                </div>
            ))}
        </div>
        <hr className="h-0.5 bg-gray-300 my-4"/>
        <div className="flex flex-col justify-between h-40">
            <div className="flex flex-row justify-between">
                <h1 className="text-black font-medium">مجموع</h1>
                <h1 className="text-xl text-black font-bold">10000</h1>
            </div>
            <Button onClick={()=> setStep(1)} className="w-full">
                پرداخت مبلغ
            </Button>
        </div>
    </div>
}