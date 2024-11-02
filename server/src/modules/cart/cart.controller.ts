import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, Request } from '@nestjs/common';
import { MessageBody } from '@nestjs/websockets';
import { Prisma } from '@prisma/client';
import { CartService } from './cart.service';
import { CartDto } from 'src/core/dto/cart.dto';
import { Public } from 'src/core/guard/auth.metadata';

@Controller('cart')
export class CartController {
    constructor(private orderService: CartService) { }

    @Get('getAll')
    getAll(@Request() req) {
        return this.orderService.getAll(req);
    }

    // @Public()
    @Get('get_one/:id')
    getOne(@Request() req, @Param('id') id: number) {
        return this.orderService.getOne(req, id);
    }

    @Post('create')
    addCart(@Request() req, @Body() cartDto: CartDto) {
        return this.orderService.addCart(cartDto, req);
    }

    @Post('remove')
    removeFromCart(@Request() req, @Body() cartDto: CartDto){
        return this.orderService.removeFromCart(cartDto, req);
    }
    
    @Post('clear')
    completeCart(@Request() req) {
        return this.orderService.clearCart(req);
    }

    @Get('total')
    getCartTotal(@Request() req){
        return this.orderService.getFinalpurchases(req);
    }

    @Delete('/delete')
    deleteCart() {
        return this.orderService.deleteCarts();
    }

    @Delete('/clearAll')
    clear() {
        return this.orderService.clearAllCart();
    }

}
