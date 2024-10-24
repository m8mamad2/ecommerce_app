import { Prisma } from '@prisma/client';
import { DatabaseService } from '../../core/database/database.service';
import { BadRequestException, Injectable, NotFoundException, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';
import { promises as fs, createReadStream } from 'fs';

@Injectable()
export class ProductService {
    constructor(private readonly databaseService: DatabaseService) { }
    private readonly uploadDirPath = join(__dirname, '../../../', 'uploads', 'products');

    async create(images: Array<Express.Multer.File>, foodModel: Prisma.ProductCreateInput): Promise<object> {
        try {
            images.map(async file => {
                try {
                    const filePath = join(this.uploadDirPath, file.originalname);
                    await fs.writeFile(filePath, file.buffer);
                }
                catch (e) {
                    console.log(e)
                    throw new BadRequestException()
                }
            });
            const imagesUrl = images.map(file => `http://localhost:3001/products/download_image/${file.originalname}`);
            await this.databaseService.product.create({ data: { ...foodModel, images: imagesUrl, price: +foodModel.price } })
            return { message: "ok" };
        }
        catch (e) {
            console.log(e)
            throw new BadRequestException()
        }
    }

    async getAll(): Promise<Prisma.ProductCreateInput[]> {
        try {
            return await this.databaseService.product.findMany()
        }
        catch {
            throw new BadRequestException()
        }
    }

    async clear() {
        try {
            return await this.databaseService.product.deleteMany();
        }
        catch (e) {
            throw new BadRequestException()
        }
    }

    async downlaodImage(image: string, @Res() res: Response) {
        try {
            console.log(image)
            const file = join(this.uploadDirPath, image);
            await fs.access(file);
            const fileStream = createReadStream(file);
            fileStream.pipe(res);
        }
        catch (e) {
            throw new NotFoundException()
        }
    }

    async getOne(id: number){
        try {
            console.log('------------------------')
            console.log(id)
            return await this.databaseService.product.findUnique({ where: { id: +id } })
        }
        catch (e){
            console.log("Eroor is")
            console.log(e)
            throw new BadRequestException()
        }
    }
}
