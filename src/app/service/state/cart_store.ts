import { create } from "zustand"

interface CartStoreState{
    chnageState: number,
    setChageState: (ok: number)=> void
}


export const useCartStore = create<CartStoreState>()(( set ) => ({
    chnageState: 2,
    setChageState: (ok: number)=>{
        set(()=> ({ chnageState: ok }));
    }
}))