import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { IUserPayload } from '../interfaces';
import { AuthService } from '../services/auth.services';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('public')
  getPublicResouce() {
    return this.authService.public();
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  getProtectedResouce(@Req() { user }: Request) {
    return this.authService.protected(user as IUserPayload);
  }
}
