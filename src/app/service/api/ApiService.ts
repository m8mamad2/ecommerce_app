import { ApiRes } from "@/app/types";
import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";
import axiosInstance from "./ApiConfiguration";


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
    
    static async post<T>(endPoint: string, data: object): Promise<ApiRes<T>> {
        try{
            const res = await axiosInstance.post(endPoint, data);
            return { result: true, data: res.data, statusCode: res.status };
        }
        catch(e){
            const error = e as AxiosError;
            return { result: false, data: undefined as T, statusCode: error.response?.status ?? 500 };
        }
    }
    
}