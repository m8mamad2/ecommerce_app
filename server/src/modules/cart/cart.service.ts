import { BadRequestException, HttpException, HttpStatus, Injectable, Request } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/core/database/database.service';
import { CartDto } from 'src/core/dto/cart.dto';

@Injectable()
export class CartService {
    constructor(private readonly databaseService: DatabaseService){}

    async getAll(@Request() req){
        try{
            const userId = req.user.sub.toString();
            return await this.databaseService.cart.findMany({
                where:{ userId: userId },
                include: { cartProduct: true}
            })
            // return await this.databaseService.cart.findMany({ where: { userId: userId } });
        }
        catch(e){
            return new BadRequestException();
        }
    }

    async addCart(cartDto: CartDto){
        try{
            const product = await this.databaseService.product.findUnique({ where: { id: +cartDto.productId } })
            if(!product) 
                throw new HttpException('Not Exist', HttpStatus.NOT_FOUND)
            await this.databaseService.cart.upsert({
                where:{ userId: cartDto.userId },
                update: { productId: +cartDto.productId },
                create: { userId: cartDto.userId, productId: +cartDto.productId },
                include :{
                    cartProduct: false
                }
            })
            return { message : 'ok' };
        }
        catch(e){
            console.log(e)
            return new BadRequestException();
        }
    }

    async completeCart(@Request() req){
        try{
            const userId = req.user.sub.toString();
            await this.databaseService.cart.deleteMany({ where:{ userId: userId } })
            return { message : 'ok' };
        }
        catch(e){
            return new BadRequestException();
        }
    }

    async deleteCarts(){
        try{
            await this.databaseService.cart.deleteMany();
            return { 'msg' : 'ok' };
        }
        catch(e){
            return new BadRequestException();
        }
    }

    async clearCart(){
        try{
            await this.databaseService.cart.deleteMany();
            return { message : 'ok' };
        }
        catch(e){
            return new BadRequestException();
        }
    }

}
