import showCustomToast from "@/app/components/Toast";
import axiosInstance from "@/app/service/api/ApiConfiguration";
import { ApiService } from "@/app/service/api/ApiService";
import { LocalDatabaseService } from "@/app/service/LocalDatabaseService";
import { useUserStore } from "@/app/service/state/user_store";
import { ErrorResponse, UserType } from "@/app/types";
import axios, { AxiosError } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from 'next/navigation'


export async function loignApi( phoneNumber: string, password: string, router: AppRouterInstance, setUser:(user: UserType) => void ){
        const res = await ApiService.post('auth/login', { phoneNumber: phoneNumber, password: password});
        if(res.result){
            const data: UserType = res.data 
            setUser(data)
            showCustomToast({ 
                message:  'ثبت نام اکانت موفقیت آمیز بود' , 
                status:'success' 
            })
            router.push('/')
        }
}

export async function registerApi( phoneNumber: string, password: string,router: AppRouterInstance, setUser:(user: UserType) => void ){
        const res = await ApiService.post('auth/signup', { phoneNumber: phoneNumber, password: password});
        if(res.result){
            const data: UserType = res.data 
            setUser(data)
            showCustomToast({ 
                message:  'ثبت نام اکانت موفقیت آمیز بود' , 
                status:'success' 
            })
            router.push('/')
        }
}
