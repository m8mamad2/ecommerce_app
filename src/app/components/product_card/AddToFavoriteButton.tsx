'use client'

import { LocalDatabaseService } from "@/app/service/LocalDatabaseService"
import { ProductType } from "@/app/types"
import { useEffect, useState } from "react"
import { MdFavoriteBorder, MdFavorite  } from "react-icons/md"
import { Spinner } from "@nextui-org/react";
import { useFavoriteStore } from "@/app/service/state/favorite_store"



export default function AddToFavoriteButton(props: ProductType){

    const isFavorite = useFavoriteStore((state) => state.isFavoriteProduct(props.id));
    const isLoading = useFavoriteStore((state)=> state.isLoading)
    const getData = useFavoriteStore((state)=> state.getFavoriteData)
    const addToFavorite = useFavoriteStore((state)=> state.addFavoriteData)
    const removeFromFavorite = useFavoriteStore((state)=> state.removeFavoriteData)

    useEffect( ()=>{ getData() }, [getData])
    
    return (
        <button 
        onClick={isFavorite ? ()=> removeFromFavorite(props.id) :()=> addToFavorite(props)}>
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