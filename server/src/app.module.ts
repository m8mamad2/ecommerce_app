import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';
import { JwtModule } from '@nestjs/jwt';
import { jwsConstans } from './core/constans';
import { OrderModule } from './modules/order/order.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    ProductModule,
    JwtModule.register({ global: true, secret: jwsConstans.secret, }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', '/uploads'), }),
    ScheduleModule.forRoot(),
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
