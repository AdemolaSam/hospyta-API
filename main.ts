import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { ValidationPipe } from "@nestjs/common"
import { AllExceptionFilters } from './middlewares/exceptions.filter';
import { AuthGuard } from './auth/auth.guard';
import { JwtService } from '@nestjs/jwt'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1/')
  app.enableCors()
  app.useGlobalPipes( new ValidationPipe())
  app.useGlobalFilters( new AllExceptionFilters())
  // app.useGlobalGuards(new AuthGuard(app.get(JwtService)))

  const config = new DocumentBuilder()
    .setTitle('Hospyta API')
    .setDescription('Hospyta API Documentation')
    .setVersion('1.0')
    .addTag('API')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/v1/docs', app, document)

  await app.listen(Number(process.env.PORT) || 6000);
}
bootstrap();
