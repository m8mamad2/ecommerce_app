import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Request } from '@nestjs/common';
import { MessageBody } from '@nestjs/websockets';
import { Prisma } from '@prisma/client';
import { CartService } from './cart.service';
import { CartDto } from 'src/core/dto/cart.dto';

@Controller('cart')
export class CartController {
    constructor(private orderService:CartService ){}

    @Get('getAll')
    getAll(@Request() req){
        return this.orderService.getAll(req);
    }
    
    @Post('create')
    addCart(@Body() cartDto: CartDto){
        return this.orderService.addCart(cartDto);
    }

    @Post('complete_cart')
    completeCart(@Request() req){
        return this.orderService.completeCart(req);
    }

    @Delete('/delete')
    deleteCart(){
        return this.orderService.deleteCarts();
    }

    @Delete('/clear')
    clear(){
        return this.orderService.deleteCarts();
    }
    
}
