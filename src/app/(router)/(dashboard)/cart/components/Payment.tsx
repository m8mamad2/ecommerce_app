import { ApiService } from "@/app/service/api/ApiService"
import { useCartStore } from "@/app/service/state/cart_store"
import { ApiRes, StepsProps } from "@/app/types"
import { Button } from "@nextui-org/react"
import { Dispatch, SetStateAction, useEffect, useState } from "react"


export type PaymnetApiRes = {
    sum: number,
    discount: number,
    deliverPrice: number,
    pay: number,
}

export default function Payment( props: StepsProps ){

    const [data, setData] = useState<PaymnetApiRes>()
    const changeState = useCartStore((state)=> state.chnageState)

    const getData = async()=>{
        const result:ApiRes<PaymnetApiRes> = await ApiService.get('cart/total')
        if(result.result){
            const res:PaymnetApiRes = result.data
            setData(res)
        }
    }

    useEffect(()=>{
        getData()
    },[changeState])
    
    return <div className="rounded-lg border-2 px-4 py-4 border-gray-300 mt-5">
        <h1 className="text-xl font-semibold">خلاصه سفارش</h1>
        <hr className="h-0.5 bg-gray-300 my-4"/>
        <div className="flex flex-col gap-3 mb-4">
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-500">مجموع</h1>
                <h1 className="text-black font-bold">{data?.sum}</h1>
            </div>
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-500">تخفیف</h1>
                <h1 className="text-black font-bold">{data?.discount}</h1>
            </div>
            <div className="flex flex-row justify-between">
                <h1 className="text-gray-500">هزینه ارسال</h1>
                <h1 className="text-black font-bold">{data?.deliverPrice}</h1>
            </div>
        </div>
        <hr className="h-0.5 bg-gray-300 my-4"/>
        <div className="flex flex-col justify-between h-40">
            <div className="flex flex-row justify-between">
                <h1 className="text-black font-medium">مبلغ قابل پرداخت</h1>
                <h1 className="text-xl text-black font-bold">{data?.pay}</h1>
            </div>
            <Button onClick={()=> props.setStep(2)} className="w-full bg-primary text-black">
                مرحله بعد
            </Button>
        </div>
    </div>
}