import { ILocalDatabaseInput, LocalDatabaseRes } from "@/app/types";
import localStorage from "localforage";


export class LocalDatabaseService{
    
    static async setData<T>({ key, data }: ILocalDatabaseInput<T>): Promise<LocalDatabaseRes<T>> {
        try{
            await localStorage.setItem(key, data);
            return { result: true, data: data as T };
        }
        catch(e){
            return { result: false, data: undefined as T };
        }
    }

    static async getData<T>( key: string ): Promise<LocalDatabaseRes<T>> {
        try{
            const data: object | null = await localStorage.getItem(key);
            return { result: true, data: data as T };
        }
        catch(e){
            console.log(e)
            return { result: false, data: undefined as T };
        }
    }
            
    static async clearData<T>(): Promise<LocalDatabaseRes<T>> {
        try{
            await localStorage.clear();
            return { result: true, data: undefined as T };
        }
        catch(e){
            return { result: false, data: undefined as T };
        }
    }
    
}