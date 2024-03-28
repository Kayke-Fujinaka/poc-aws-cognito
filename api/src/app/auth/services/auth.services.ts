import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  public() {
    return {
      message: 'Este recurso é público e não requer autenticação.',
    };
  }

  protected() {
    return {
      message: 'Este recurso é protegido e requer autenticação.',
    };
  }

  admin() {
    return {
      message:
        'Este recurso é protegido, requer autenticação e permissão de administrador.',
    };
  }
}
