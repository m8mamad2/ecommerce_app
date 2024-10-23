import { LocalDatabaseRes, UserType } from "@/app/types";
import { create } from "zustand";
import { LocalDatabaseService } from "../LocalDatabaseService";

interface UserLocalState{
    isLoggedIn?: boolean,
    user?: UserType,
    isLoading?: boolean,
    error?: string,
    setUser: (user:UserType)=> void,
    getUser: ()=> Promise<void>,
}
 
export const useUserStore = create<UserLocalState>()((set) => ({
    isLoggedIn: undefined,
    isLoading: false,
    user: undefined,
    error:undefined,
    setUser: async(user:UserType)=>{
        try{
            set(()=>({ user: user, isLoggedIn: true }))
            await LocalDatabaseService.setData({ key: 'user', data: user })
        }
        catch(e){
            set(()=>({ error: String(e) }))
        }
    },
    getUser: async()=>{
        try{
            set(()=> ({ isLoading: true }))
            const getUser: LocalDatabaseRes<UserType> = await LocalDatabaseService.getData('user')
            set(()=>({
                    isLoading: false,
                    isLoggedIn: getUser.result ? true : false,
                    user: getUser.data,
                    error:undefined
            }))
        }
        catch(e){
            set(()=>({
                isLoading: false,
                isLoggedIn: false,
                user: undefined,
                error: String(e)
            }))
        }  
    },
}));


