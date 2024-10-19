import { IsNotEmpty } from "class-validator";

export class FavoriteDto{

    @IsNotEmpty()
    userId: string;
    
    @IsNotEmpty()
    productId: number;
}