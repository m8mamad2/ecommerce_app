'use client'

import FavoriteGrid from "@/app/components/favorite/FavoriteGrid"
import ProductCard from "@/app/components/product_card/ProductCard"
import { LocalDatabaseService } from "@/app/service/LocalDatabaseService"
import { ProductType } from "@/app/types"
import { useEffect, useState } from "react"

export default function FavoritePage(){

    // const [data, setData] = useState<ProductType[]>()
    // const [loading, setLoading] = useState<boolean>(true)
    
    // const getData = async()=>{
    //     const existData: ProductType[] = (await LocalDatabaseService.getData('favorite')).data as ProductType[] ?? []
    //     setData(existData);
        
    //     const isAlreadyFavorite = existData.some(item => item.id === props.id);
    //     setIsFavorite(isAlreadyFavorite);
        
    //     setLoading(false)
    // }
    // useEffect( ()=>{}, [] )
    
    // return <FavoriteGrid />
    
}