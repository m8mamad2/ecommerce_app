import { IsNotEmpty } from "class-validator";

export class FavoriteDto{

    @IsNotEmpty()
    userId: number;
    
    @IsNotEmpty()
    productId: number;
}