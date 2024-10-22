import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { DatabaseModule } from 'src/core/database/database.module';
import { CommentController } from './comment.controller';

@Module({
  imports:[DatabaseModule],
  controllers: [CommentController],
  providers: [CommentService],
})

export class CommentModule {}
