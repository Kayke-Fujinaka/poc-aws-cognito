import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get('public')
  getPublicResouce() {
    return {
      message: 'Este recurso é público e não requer autenticação.',
    };
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  getProtectedResouce(@Req() { user }: Request) {
    return {
      message: 'Este recurso é protegido e requer autenticação.',
      user: user,
    };
  }
}
