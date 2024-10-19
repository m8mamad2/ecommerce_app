
'use server'

import { ApiService } from "@/app/service/api/ApiService";
import { ApiRes, UserType } from "@/app/types";
import { cookies } from "next/headers";

export async function loignApi(phoneNumber: string, password: string){
    try{
        const res:ApiRes<unknown> = await ApiService.post('auth/login', { phoneNumber: phoneNumber, password: password })
        console.log(res)
        // const data: UserType = res.data;
        // cookies().set('token','1234eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0Ijo' )
    }
    catch(e){
        throw new Error('Error');
    }
}