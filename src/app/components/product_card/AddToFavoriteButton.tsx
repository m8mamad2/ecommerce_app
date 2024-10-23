'use client'

import { LocalDatabaseService } from "@/app/service/LocalDatabaseService"
import { ProductType } from "@/app/types"
import { useEffect, useState } from "react"
import { MdFavoriteBorder, MdFavorite  } from "react-icons/md"
import { Spinner } from "@nextui-org/react";
import { useFavoriteStore } from "@/app/service/state/favorite_store"



export default function AddToFavoriteButton(props: ProductType){

    // const [data, setData] = useState<ProductType[]>()
    // const [loading, setLoading] = useState<boolean>()
    // const [isFavorite, setIsFavorite] = useState<boolean>(false); 
    // const [updated, setUpdated] = useState(false);

    
    // const getData = async()=>{
    //     setLoading(true)
    //     const existData: ProductType[] = (await LocalDatabaseService.getData('favorite')).data as ProductType[] ?? []
    //     setData(existData);
        
    //     const isAlreadyFavorite = existData.some(item => item.id === props.id);
    //     setIsFavorite(isAlreadyFavorite);
        
    //     setLoading(false)
    // }
    
    // const addToFavoirte = async()=>{
    //     const existData = (await LocalDatabaseService.getData('favorite')).data as ProductType[] ?? []
    //     const newData: ProductType[] = [...existData, props]
    //     await LocalDatabaseService.setData({ key:'favorite', data: newData })
    //     setUpdated(true)
    // }

    // const removeFromFavorite = async () => {
    //     const existingData: ProductType[] = (await LocalDatabaseService.getData('favorite')).data as ProductType[] ?? [];
    //     const newData = existingData.filter(item => item.id !== props.id); 
    //     await LocalDatabaseService.setData({ key: 'favorite', data: newData });
    //     setUpdated(true);
    // };

    const isFavorite = useFavoriteStore((state)=> state.isFavoriteProduct)
    const isLoading = useFavoriteStore((state)=> state.isLoading)
    const getData = useFavoriteStore((state)=> state.getFavoriteData)
    const addToFavorite = useFavoriteStore((state)=> state.addFavoriteData)
    const removeFromFavorite = useFavoriteStore((state)=> state.removeFavoriteData)


    useEffect( ()=>{ getData(props) }, [])
    
    return (
        <button onClick={isFavorite ? ()=> removeFromFavorite(props) :()=> addToFavorite(props)}>
            { 
                isLoading 
                    ? <Spinner size='md'/>
                    : isFavorite 
                        ? <MdFavorite className="text-primary border w-10 h-10 p-1 rounded-md" />
                        :  <MdFavoriteBorder className="text-primary border w-10 h-10 p-1 rounded-md" />
            }
        </button>
    )
    
}