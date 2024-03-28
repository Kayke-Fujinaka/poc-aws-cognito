import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../guards/roles.guard';
import { Role } from '../interfaces';
import { AuthService } from '../services/auth.services';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('public')
  getPublicResource() {
    return this.authService.public();
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  getProtectedResource() {
    return this.authService.protected();
  }

  @Get('admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Admin)
  getAdminResource() {
    return this.authService.admin();
  }
}
