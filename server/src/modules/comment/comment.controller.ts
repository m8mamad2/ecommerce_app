import { Public } from 'src/core/guard/auth.metadata';
import { Body, Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Prisma } from '@prisma/client';
import { CommentService } from './comment.service';
import { Response } from 'express';

@Controller('comment')
export class CommentController {

    constructor(private readonly commentService: CommentService){}
    
    @Public()
    @Post('/create')
    @UseInterceptors(FilesInterceptor('images' ))
    create(@Body() commentModel: Prisma.CommentCreateInput, @UploadedFiles() image: Express.Multer.File ) {
        return this.commentService.create(image, commentModel);
    }

    @Public()
    @Get('/getAll')
    getAll() {
        return this.commentService.getAll();
    }
    
    @Post('/clear')
    clear() {
        return this.commentService.clear()
    }

    @Public()
    @Get('/download_image/:image')
    downlaodImage(@Param('image') image: string, @Res() res: Response) {
        return this.commentService.downlaodImage(image, res);
    }
    
}
