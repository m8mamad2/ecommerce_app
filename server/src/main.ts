import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3001);
}

bootstrap();


// {
//   "id": 1,
//   "full_name": null,
//   "address_name": null,
//   "privance": null,
//   "city": null,
//   "postal_code": null,
//   "plate": null,
//   "phoneNumber": "09903618440",
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInBob25lTnVtYmVyIjoiMDk5MDM2MTg0NDAiLCJpYXQiOjE3MjkzMzE2NTF9.4eBHju-LnoMenoS7tHjZCxljauYeWbgIJJDIESVU3XA",
//   "localId": 1
// }