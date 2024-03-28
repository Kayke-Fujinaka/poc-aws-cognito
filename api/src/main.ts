import { NestFactory } from '@nestjs/core';

import { Amplify } from 'aws-amplify';
import { AppModule } from './app/app.module';
import awsExports from './config/aws-cognito';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  Amplify.configure(awsExports);

  const port = process.env.PORT || 8080;
  await app.listen(port);
}
bootstrap();
