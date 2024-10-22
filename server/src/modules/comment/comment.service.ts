import { BadRequestException, Injectable, NotFoundException, Res } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { join } from 'path';
import { DatabaseService } from 'src/core/database/database.service';
import { promises as fs, createReadStream } from 'fs';
import { Response } from 'express';

@Injectable()
export class CommentService {
    constructor(private readonly databaseService: DatabaseService) { }
    private readonly uploadDirPath = join(__dirname, '../../../', 'uploads', 'products');

    async create(image: Express.Multer.File, foodModel: Prisma.CommentCreateInput): Promise<object> {
        try {
            try {
                const filePath = join(this.uploadDirPath, image.originalname);
                await fs.writeFile(filePath, image.buffer);
            }
            catch (e) {
                console.log(e)
                throw new BadRequestException()
            }
            const imagesUrl = `http://localhost:3001/products/download_image/${image.originalname}`;
            await this.databaseService.comment.create({ data: { ...foodModel, image: imagesUrl } })
            return { message: "ok" };
        }
        catch (e) {
            console.log(e)
            throw new BadRequestException()
        }
    }

    async getAll(): Promise<Prisma.CommentCreateInput[]> {
        try {
            return await this.databaseService.comment.findMany()
        }
        catch {
            throw new BadRequestException()
        }
    }

    async clear() {
        try {
            return await this.databaseService.comment.deleteMany();
        }
        catch (e) {
            throw new BadRequestException()
        }
    }

    async downlaodImage(image: string, @Res() res: Response) {
        try {
            const file = join(this.uploadDirPath, image);
            await fs.access(file);
            const fileStream = createReadStream(file);
            fileStream.pipe(res);
        }
        catch (e) {
            throw new NotFoundException()
        }
    }
}
