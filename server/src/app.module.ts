import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';
import { JwtModule } from '@nestjs/jwt';
import { jwsConstans } from './core/constans';
import { CartModule } from './modules/cart/cart.module';
import { ScheduleModule } from '@nestjs/schedule';
import { FavoriteModule } from './modules/favorite/favorite.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    ProductModule,
    JwtModule.register({ global: true, secret: jwsConstans.secret, }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', '/uploads'), }),
    ScheduleModule.forRoot(),
    CartModule,
    FavoriteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
