'use client'

import { ApiService } from "@/app/service/api/ApiService";
import { ProductType } from "@/app/types";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import showCustomToast from "../Toast";

export default function AddToCartButton({ id }: ProductType) {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isInCart, setIsInCart] = useState<boolean>(false);

    const addToCart = async () => {
        setIsLoading(true);
        const res = await ApiService.post('cart/create', { productId: id })
        console.log(res);
        if (res.result) {
            showCustomToast({
                message: " کالا با موفقیت به سبد خرید اضافه شد",
                status: 'success'
            })
            setIsInCart(true)
        }
        setIsLoading(false)
    }

    const getIsInCart = async () => {
        const request = await ApiService.get(`cart/get_one/${id}`)
        const data: { isExist: boolean } | undefined = request.data;
        console.log(id)
        console.log(request)
        setIsLoading(false)
        setIsInCart(data?.isExist ?? false)
        console.log(data?.isExist)
    }

    useEffect(() => {
        getIsInCart()
    }, [id])


    return (
        <div>
            {
                isLoading
                    ? <h1>Loading</h1>
                    : isInCart
                        ? <Button  

                            className="mt-4 mb-1 text-red-400 hover:text-white border-red-400 hover:bg-red-300" variant="bordered"> حذف کردن به سبد</Button>
                        : <Button
                            // onClick={() => addToCart()}
                            onClick={() => showCustomToast({ 
                                message: "YO YO " , 
                                status: 'success' 
                            })}
                            className="mt-4 mb-1"> اضافه کردن به سبد</Button>
            }
        </div>
    )
}