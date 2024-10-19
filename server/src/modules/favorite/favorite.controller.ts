import { Body, Controller, Delete, Get, Request, Post } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { FavoriteDto } from '../../core/dto/favorite.dto';

@Controller('favorite')
export class FavoriteController {
    constructor(private readonly productService: FavoriteService) { }

    @Get('/getAll')
    getAll(@Request() req){
        return this.productService.getAll(req);
    }

    @Post('/create')
    create( @Body() data: FavoriteDto){
        return this.productService.create(data)
    }

    @Delete('/clear')
    clear(){
        return this.productService.clear()
    }

}