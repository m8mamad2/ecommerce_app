import { ApiRes, ErrorResponse } from "@/app/types";
import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";
import axiosInstance from "./ApiConfiguration";
import showCustomToast from "@/app/components/Toast";


export class ApiService{


    static async get<T>(endPoint?: string): Promise<ApiRes<T>> {
        try{
            const res = await axiosInstance.get(endPoint ?? '');
            return { result: true, data: res.data, statusCode: res.status };
        }
        catch(e){
            const error = e as AxiosError;
            return { result: true, data: undefined as T, statusCode: error.response?.status ?? 500 };
        }
    }
    
    static async post<T>(endPoint: string, data: object): Promise<ApiRes<any>> {
        try{
            const res = await axiosInstance.post(endPoint, data);
            if(res.status === 200 || res.status === 201)
                return { result: true, data: res.data, statusCode: res.status };
            else {
                const error = res.data as ErrorResponse;
                showCustomToast({ 
                    message:  typeof error.message === "string" ? error.message : error.message[0] , 
                    status:'fail' 
                })
                return { result: false, data: res.data, statusCode: res.status };
            }
        }
        catch(e){
            const error:ErrorResponse = (e as AxiosError).response?.data as ErrorResponse
            showCustomToast({ 
                message:  typeof error.message === "string" ? error.message : error.message[0] , 
                status:'fail' 
            })
            return { 
                result: false, 
                data: typeof error.message === "string" ? error.message : error.message[0] , 
                statusCode: error.statusCode ?? 500 };
        }
    }
    
}