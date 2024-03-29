import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Amplify } from 'aws-amplify';
import helmet from 'helmet';

import { AppModule } from '@app/app.module';
import awsExports from '@shared/configs/aws-cognito';
import { LoggerConfig } from '@shared/configs/logger';
import { SwaggerConfig } from '@shared/configs/swagger';
import { ErrorInterceptor } from '@shared/errors/exception.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  Amplify.configure(awsExports);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ErrorInterceptor());

  app.use(helmet);

  LoggerConfig.setup(app);
  SwaggerConfig.setup(app);

  const port = process.env.APP_PORT || 8080;
  await app.listen(port, () => {
    console.log(`Aplicação rodando na porta: ${port}`);
    console.log(
      `Documentação da API disponível em: http://localhost:${port}/api/docs`,
    );
  });
}
bootstrap();
