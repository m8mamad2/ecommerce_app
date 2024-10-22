import showCustomToast from "@/app/components/Toast";
import axiosInstance from "@/app/service/api/ApiConfiguration";
import { ApiService } from "@/app/service/api/ApiService";
import { ErrorResponse } from "@/app/types";
import axios, { AxiosError } from "axios";
import { useRouter } from 'next/navigation'


export async function loignApi( phoneNumber: string, password: string ){
        const res = await ApiService.post('auth/login', { phoneNumber: phoneNumber, password: password});
}

export async function registerApi( phoneNumber: string, password: string ){
        const res = await ApiService.post('auth/signup', { phoneNumber: phoneNumber, password: password});
        if(res.result){
            showCustomToast({ 
                message:  'ثبت نام اکانت موفقیت آمیز بود' , 
                status:'success' 
            })
            const router = useRouter();
            router.push('/');
        }
}
