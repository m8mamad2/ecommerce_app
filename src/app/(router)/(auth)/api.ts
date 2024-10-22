import showCustomToast from "@/app/components/Toast";
import axiosInstance from "@/app/service/api/ApiConfiguration";
import { ApiService } from "@/app/service/api/ApiService";
import { LocalDatabaseService } from "@/app/service/api/LocalDatabaseService";
import { ErrorResponse, UserType } from "@/app/types";
import axios, { AxiosError } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from 'next/navigation'


export async function loignApi( phoneNumber: string, password: string, router: AppRouterInstance ){
        const res = await ApiService.post('auth/login', { phoneNumber: phoneNumber, password: password});
        if(res.result){
            const data: UserType = res.data 
            await LocalDatabaseService.setData({ key: 'user', data: data })
            await LocalDatabaseService.setData({ key: 'token', data: data.access_token })
            showCustomToast({ 
                message:  'ثبت نام اکانت موفقیت آمیز بود' , 
                status:'success' 
            })
            router.push('/')
        }
}

export async function registerApi( phoneNumber: string, password: string,router: AppRouterInstance ){
        const res = await ApiService.post('auth/signup', { phoneNumber: phoneNumber, password: password});
        if(res.result){
            const data: UserType = res.data 
            await LocalDatabaseService.setData({ key: 'user', data: data })
            await LocalDatabaseService.setData({ key: 'token', data: data.access_token })
            showCustomToast({ 
                message:  'ثبت نام اکانت موفقیت آمیز بود' , 
                status:'success' 
            })
            router.push('/')
        }
}
