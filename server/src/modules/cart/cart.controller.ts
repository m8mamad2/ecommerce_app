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

    @Get('get_one/:id')
    getOne(@Request() req, @Param(':id') id: number){
        return this.orderService.getOne(req, id);
    }
    
    @Post('create')
    addCart(@Request() req,@Body() cartDto: CartDto){
        return this.orderService.addCart(cartDto, req);
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
