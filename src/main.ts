import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';

async function startApp() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000,'localhost',()=>{
    console.log('Server running on port 4000');
  });
}
startApp();