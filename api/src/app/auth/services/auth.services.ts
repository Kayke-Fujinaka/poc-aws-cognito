import { Injectable } from '@nestjs/common';

import { IUserPayload } from '../interfaces';

@Injectable()
export class AuthService {
  constructor() {}

  public() {
    return {
      message: 'Este recurso é público e não requer autenticação.',
    };
  }

  protected(user: IUserPayload) {
    return {
      message: 'Este recurso é protegido e requer autenticação.',
      user,
    };
  }
}
