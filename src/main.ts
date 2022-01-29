import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot());
  const port = config.APP_PORT || 3000;
  await app.listen(port);
  console.log("App running on " + port);
}
bootstrap();
