import { Prisma } from '@prisma/client';
import { ProductService } from './product.service';
import { Body, Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { Public } from 'src/core/guard/auth.metadata';


@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Public()
    @Post('/create')
    @UseInterceptors(FilesInterceptor('images', 4))
    create(@Body() productModel: Prisma.ProductCreateInput, @UploadedFiles() images: Array<Express.Multer.File>,) {
        return this.productService.create(images, productModel);
    }

    @Public()
    @Get('/getAll')
    getAll() {
        return this.productService.getAll();
    }
    
    @Post('/clear')
    clear() {
        return this.productService.clear()
    }

    @Public()
    @Get('/download_image/:image')
    downlaodImage(@Param('image') image: string, @Res() res: Response) {
        return this.productService.downlaodImage(image, res);
    }

}

