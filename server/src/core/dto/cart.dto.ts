import { IsNotEmpty } from "class-validator";

export class CartDto{

    @IsNotEmpty()
    userId: string;
    
    @IsNotEmpty()
    productId: string;
}