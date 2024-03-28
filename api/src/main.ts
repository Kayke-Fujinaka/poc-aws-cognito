import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Amplify } from 'aws-amplify';

import { AppModule } from './app/app.module';
import awsExports from './shared/config/aws-cognito';
import { ErrorInterceptor } from './shared/errors/exception.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  Amplify.configure(awsExports);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ErrorInterceptor());

  const port = process.env.PORT || 8080;
  await app.listen(port);
}
bootstrap();
