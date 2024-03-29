import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  static setup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('API de Autenticação com Amazon Cognito')
      .setDescription(
        'É uma aplicação para autenticar utilizando a plataforma de identidade para aplicações web e aplicativos móveis do Cognito.',
      )
      .setVersion('1.0')
      .addTag('auth')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
  }
}
