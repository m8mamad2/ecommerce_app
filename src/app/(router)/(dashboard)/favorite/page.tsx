'use client'

import ProductCard from "@/app/components/product_card/ProductCard"
import { useFavoriteStore } from "@/app/service/state/favorite_store"
import { useEffect, useState } from "react"

export default function FavoritePage(){

    const isLoading = useFavoriteStore((state)=> state.isLoading)
    const getData = useFavoriteStore((state)=> state.getFavoriteData)
    const favoriteData = useFavoriteStore((state)=> state.favoriteData)

    useEffect(()=>{ getData() }, [])

    
    return (
        <div className={`my-4 mx-9 flex flex-col px-6 pt-40 rounded-lg bg-[#EBEEED] bg-[url('/grid.png')]`}>
            <h1 className="text-black mb-10 font-bold text-3xl">محصولات مورد علاقه شما</h1>   
            <div className="grid grid-cols-3 gap-5 mb-10">
                {
                favoriteData.length === 0 
                    ? <h1>EMPTY</h1>
                    : favoriteData.map((item, index) => 
                        <div key={index}>
                            <ProductCard  {...item }/>
                        </div>
                )
                }
            </div>
        </div>
    )
    
}