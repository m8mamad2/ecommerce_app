import { BadRequestException, HttpException, HttpStatus, Injectable, Request } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { useId } from 'react';
import { DatabaseService } from 'src/core/database/database.service';
import { CartDto } from 'src/core/dto/cart.dto';

@Injectable()
export class CartService {
    constructor(private readonly databaseService: DatabaseService) { }

    async getAll(@Request() req) {
        try {
            const userId = req.user.sub;
            const res = await this.databaseService.cart.findMany({
                where: { userId: userId },
                include: { cartProduct: true }
            })
            console.log(res)
            return res;
        }
        catch (e) {
            console.log(e)
            return new BadRequestException();
        }
    }

    async getOne(@Request() req, id: number) {
        try {
            const userId = req.user.sub;
            console.log(userId)
            console.log(+id)
            console.log('\n')
            const res = await this.databaseService.cart.findMany({
                where: { userId: userId, productId: +id },
            })
            if (res.length === 0) return { isExist: false }
            else return { isExist: true }
        }
        catch (e) {
            return new BadRequestException();
        }
    }

    async addCart(cartDto: CartDto, @Request() req) {
        try {
            const userId = req.user.sub;
            const product = await this.databaseService.product.findUnique({ where: { id: +cartDto.productId } })

            if (!product)
                throw new HttpException('Not Exist', HttpStatus.NOT_FOUND)


            const existingCartItem = await this.databaseService.cart.findUnique({
                where: {
                    userId: userId,
                    productId: +cartDto.productId
                }
            })

            if (existingCartItem) {
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
        }
        catch (e) {
            console.log(e)
            return new BadRequestException();
        }
    }

    async removeFromCart(cartDto: CartDto, @Request() req) {
        try {
            const userId = req.user.sub;
            const product = await this.databaseService.product.findUnique({ where: { id: +cartDto.productId } })

            if (!product)
                throw new HttpException('Not Exist', HttpStatus.NOT_FOUND)


            const existingCartItem = await this.databaseService.cart.findUnique({
                where: {
                    userId: userId,
                    productId: +cartDto.productId
                }
            })

            if (existingCartItem.quanity > 1) {
                return await this.databaseService.cart.update({
                    where: {
                        userId_productId: {
                            userId: userId,
                            productId: +cartDto.productId
                        },
                    },
                    data: {
                        quanity: existingCartItem.quanity - 1
                    }
                });
            }
            else {
                return await this.databaseService.cart.delete({
                    where: { userId: userId, productId: +cartDto.productId, }
                })
            }
        }
        catch (e) {
            console.log(e)
            return new BadRequestException();
        }
    }

    async getFinalpurchases(@Request() req){
        try{
            const userId = req.user.sub;
            const cartItems = await this.databaseService.cart.findMany({
                where:{ userId: userId },
                include: { cartProduct: true } 
            })

            const subtotal = cartItems.reduce((sum, item) => sum + (item.cartProduct.price * item.quanity), 0);
            const discount = 10;
            const deliverPrice = 30
            const pay = ((subtotal - discount) - deliverPrice);

            return {
                sum: subtotal,
                discount: discount,
                deliverPrice: deliverPrice,
                pay: pay
            };
        }
        catch(e){
            throw new BadRequestException()
        }
    }

    async clearCart(@Request() req) {
        try {
            const userId = req.user.sub;
            await this.databaseService.cart.deleteMany({ where: { userId: userId } })
            return { message: 'ok' };
        }
        catch (e) {
            return new BadRequestException();
        }
    }

    async deleteCarts() {
        try {
            await this.databaseService.cart.deleteMany();
            return { 'msg': 'ok' };
        }
        catch (e) {
            return new BadRequestException();
        }
    }

    async clearAllCart() {
        try {
            await this.databaseService.cart.deleteMany();
            return { message: 'ok' };
        }
        catch (e) {
            return new BadRequestException();
        }
    }

}
