import { Inject, Injectable } from '@nestjs/common';

import { LOGGER_SERVICE } from '@shared/logger/constants';
import { ILoggerService } from '@shared/logger/interfaces';

@Injectable()
export class AuthService {
  constructor(@Inject(LOGGER_SERVICE) private logger: ILoggerService) {}

  public() {
    this.logger.log('Acessando recurso público.');
    return {
      message: 'Este recurso é público e não requer autenticação.',
    };
  }

  protected() {
    this.logger.log('Acessando recurso protegido.');
    return {
      message: 'Este recurso é protegido e requer autenticação.',
    };
  }

  admin() {
    this.logger.log('Acessando recurso de administração.');
    return {
      message:
        'Este recurso é protegido, requer autenticação e permissão de administrador.',
    };
  }
}
