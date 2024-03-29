import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Amplify } from 'aws-amplify';

import { AppModule } from '@app/app.module';
import awsExports from '@shared/configs/aws-cognito';
import { ErrorInterceptor } from '@shared/errors/exception.interceptor';
import { httpLoggingMiddleware } from '@shared/middlewares/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  Amplify.configure(awsExports);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ErrorInterceptor());

  httpLoggingMiddleware(app);

  const port = process.env.PORT || 8080;
  await app.listen(port, () => {
    console.log(`Aplicação rodando na porta: ${port}`);
  });
}
bootstrap();
