import { create } from "zustand"
import { ProductType } from '../../types/index';
import { LocalDatabaseService } from "../LocalDatabaseService";

interface FavoriteState{
    favoriteData: ProductType[],
    isLoading: boolean,
    isFavoriteProduct: (productId: number) => boolean,
    getFavoriteData: ()=> Promise<void>,
    addFavoriteData: (productType :ProductType)=> Promise<void>,
    removeFavoriteData: (productId :number)=> Promise<void>,
}

export const useFavoriteStore = create<FavoriteState>()((set, get) => ({

    favoriteData: [],
    isLoading : false,
    
    isFavoriteProduct: (productId) => {
        const { favoriteData } = get();
        return (favoriteData ?? []).some((product) => product.id === productId);
    },
    
    getFavoriteData: async()=>{
        set(()=>({ isLoading: true }))
        const existData: ProductType[] = (await LocalDatabaseService.getData('favorite')).data as ProductType[] ?? []
        set(()=>({  favoriteData: existData, isLoading: false }))
    },
    
    addFavoriteData: async(productType: ProductType)=>{
        // const existData = (await LocalDatabaseService.getData('favorite')).data as ProductType[] ?? []
        const { favoriteData } = get();
        const newData: ProductType[] = [...favoriteData, productType]
        await LocalDatabaseService.setData({ key:'favorite', data: newData })
        set({ favoriteData: newData })
    },
    
    removeFavoriteData: async(productId: number)=>{
        set(()=>({ isLoading: true }))
        // const existingData: ProductType[] = (await LocalDatabaseService.getData('favorite')).data as ProductType[] ?? [];
        const { favoriteData } = get();
        const newData = favoriteData.filter(item => item.id !== productId); 
        await LocalDatabaseService.setData({ key: 'favorite', data: newData });
        set(()=>({ favoriteData: newData , isLoading: false }))
    },
    
}))