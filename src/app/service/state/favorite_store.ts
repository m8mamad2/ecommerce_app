import { create } from "zustand"
import { ProductType } from '../../types/index';
import { LocalDatabaseService } from "../LocalDatabaseService";

interface FavoriteState{
    favoriteData?: ProductType[],
    isLoading?: boolean,
    isFavoriteProduct?: boolean,
    getFavoriteData: (productType :ProductType)=> Promise<void>,
    addFavoriteData: (productType :ProductType)=> Promise<void>,
    removeFavoriteData: (productType :ProductType)=> Promise<void>,
}

export const useFavoriteStore = create<FavoriteState>()((set) => ({
    favoriteData: undefined,
    isLoading : undefined,
    isFavoriteProduct: undefined,
    
    getFavoriteData: async(productType: ProductType)=>{
        set(()=>({ isLoading: true }))
        const existData: ProductType[] = (await LocalDatabaseService.getData('favorite')).data as ProductType[] ?? []
        set(()=>({ favoriteData: existData }))
        const isAlreadyFavorite = existData.some(item => item.id === productType.id);
        set(()=>({ isFavoriteProduct: isAlreadyFavorite }))
        set(()=>({ isLoading: false }))
    },
    
    addFavoriteData: async(productType: ProductType)=>{
        set(()=>({ isLoading: true }))
        const existData = (await LocalDatabaseService.getData('favorite')).data as ProductType[] ?? []
        const newData: ProductType[] = [...existData, productType]
        await LocalDatabaseService.setData({ key:'favorite', data: newData })
        set(()=>({ isLoading: false }))
    },
    
    removeFavoriteData: async(productType: ProductType)=>{
        set(()=>({ isLoading: true }))
        const existingData: ProductType[] = (await LocalDatabaseService.getData('favorite')).data as ProductType[] ?? [];
        const newData = existingData.filter(item => item.id !== productType.id); 
        await LocalDatabaseService.setData({ key: 'favorite', data: newData });
        set(()=>({ isLoading: false }))
    },
    
}))