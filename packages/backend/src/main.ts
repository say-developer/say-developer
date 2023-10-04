import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerConfig, swaggerDocumentOptions } from './configs/docs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documents = SwaggerModule.createDocument(app, swaggerConfig, swaggerDocumentOptions);
  SwaggerModule.setup('docs', app, documents);

  await app.listen(3000);
}

void bootstrap();
