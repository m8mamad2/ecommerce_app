import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [FavoriteController],
  providers: [FavoriteService],
})
export class FavoriteModule { }
