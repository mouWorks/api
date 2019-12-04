import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('Styles Api')
      .setDescription('Api doc for Styles')
      .setVersion('1.0')
      // .addTag('styles')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc/style', app, document);

  await app.listen(3005);
}
bootstrap();
