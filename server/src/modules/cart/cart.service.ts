import { BadRequestException, HttpException, HttpStatus, Injectable, Request } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { useId } from 'react';
import { DatabaseService } from 'src/core/database/database.service';
import { CartDto } from 'src/core/dto/cart.dto';

@Injectable()
export class CartService {
    constructor(private readonly databaseService: DatabaseService){}

    async getAll(@Request() req){
        try{
            const userId = req.user.sub;
            return await this.databaseService.cart.findMany({
                where:{ userId: userId },
                include: { cartProduct: true}
            })
            // return await this.databaseService.cart.findMany({ where: { userId: userId } });
        }
        catch(e){
            console.log(e)
            return new BadRequestException();
        }
    }

    async getOne(@Request() req, id: number){
        try{
            const userId = req.user.sub;
            return await this.databaseService.cart.findMany({
                where:{ userId: userId, id: id },
                include: { cartProduct: true}
            })
        }
        catch(e){
            return new BadRequestException();
        }
    }

    async addCart(cartDto: CartDto, @Request() req){
        try{
            const userId = req.user.sub;
            const product = await this.databaseService.product.findUnique({ where: { id: +cartDto.productId } })

            if(!product) 
                throw new HttpException('Not Exist', HttpStatus.NOT_FOUND)

            
            const existingCartItem = await this.databaseService.cart.findUnique({
                where:{
                    userId: userId,
                    productId: +cartDto.productId
                }
            })
            
            if(existingCartItem){
                return await this.databaseService.cart.update({
                    where: {
                        userId_productId: {
                            userId: userId,
                            productId: +cartDto.productId
                        },
                    },
                    data: {
                        quanity: existingCartItem.quanity + 1
                    }
                });
            }
            else { 
                return await this.databaseService.cart.create({
                    data: {
                        userId: userId,
                        productId: +cartDto.productId,
                        quanity: 1
                    }
                })
            }

            // await this.databaseService.cart.upsert({
            //     where:{ userId: userId  },
            //     // update: { productId: +cartDto.productId },
            //     update: { productId: +cartDto.productId },
            //     create: { userId: userId, productId: +cartDto.productId },
            //     include :{
            //         cartProduct: false
            //     }
            // })
            // return { message : 'ok' };
        }
        catch(e){
            console.log(e)
            return new BadRequestException();
        }
    }

    async completeCart(@Request() req){
        try{
            const userId = req.user.sub;
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
