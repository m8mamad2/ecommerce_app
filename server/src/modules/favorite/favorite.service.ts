import { Request ,BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DatabaseService } from "src/core/database/database.service";
import { FavoriteDto } from '../../core/dto/favorite.dto';

@Injectable()
export class FavoriteService {
    constructor(private readonly databaseService: DatabaseService){ }

    async getAll(@Request() req){
        try{
            const userId = req.user.sub.toString();
            return await this.databaseService.favorite.findMany({
                where: { userId: userId },
                include:{ favoriteProduct: true }
            })
        }
        catch(e){
            console.log(e)
            throw new BadRequestException()
        }
    }

    async create(favoirteDto: FavoriteDto){
        try{
            const product = await this.databaseService.product.findUnique({ where:{ id: +favoirteDto.productId } })
            if(!product) 
                throw new HttpException('Not Exist', HttpStatus.NOT_FOUND)
            await this.databaseService.favorite.upsert({
                where: { userId: favoirteDto.userId},
                update: { productId: +favoirteDto.productId },
                create: { userId: favoirteDto.userId, productId: +favoirteDto.productId },
                include:{
                    favoriteProduct: false
                }
            })
            return { message: "ok" };
        }
        catch(e){
            
            throw new BadRequestException()
        }
    }
    
    async clear(){
        try{
            await this.databaseService.favorite.deleteMany()
            return { message: 'ok' }
        }
        catch(e){
            throw new BadRequestException(e);
        }
    }
    
}