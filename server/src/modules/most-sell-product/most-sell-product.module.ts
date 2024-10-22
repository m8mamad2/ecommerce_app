import { Module } from '@nestjs/common';
import { MostSellProductController } from './most-sell-product.controller';
import { MostSellProductService } from './most-sell-product.service';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MostSellProductController],
  providers: [MostSellProductService],
})
export class MostSellProductModule { }
