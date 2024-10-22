import { Prisma } from '@prisma/client';
import { MostSellProductService } from './most-sell-product.service';
import { Body, Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { Public } from 'src/core/guard/auth.metadata';


@Controller('most_sell_product')
export class MostSellProductController {
    constructor(private readonly mostSellProductService: MostSellProductService) { }

    @Public()
    @Post('/create')
    @UseInterceptors(FilesInterceptor('images', 4))
    create(@Body() mostSellProductModel: Prisma.MostSellProductCreateInput, @UploadedFiles() images: Array<Express.Multer.File>,) {
        return this.mostSellProductService.create(images, mostSellProductModel);
    }

    @Public()
    @Get('/getAll')
    getAll() {
        return this.mostSellProductService.getAll();
    }
    
    @Post('/clear')
    clear() {
        return this.mostSellProductService.clear()
    }

    @Public()
    @Get('/download_image/:image')
    downlaodImage(@Param('image') image: string, @Res() res: Response) {
        return this.mostSellProductService.downlaodImage(image, res);
    }

}

