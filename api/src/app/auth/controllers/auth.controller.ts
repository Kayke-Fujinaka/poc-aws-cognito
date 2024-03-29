import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Roles } from '../decorators/roles.decorator';
import { Role } from '../interfaces';
import { AuthService } from '../services/auth.services';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('public')
  @ApiOperation({ summary: 'Acessa recurso público.' })
  @ApiResponse({
    status: 200,
    description: 'Este recurso é público e não requer autenticação.',
  })
  getPublicResource() {
    return this.authService.public();
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Acessa recurso protegido.' })
  @ApiResponse({
    status: 200,
    description: 'Este recurso é protegido e requer autenticação.',
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  getProtectedResource() {
    return this.authService.protected();
  }

  @Get('admin')
  @UseGuards(AuthGuard('jwt'))
  @Roles(Role.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Acessa recurso de administração.' })
  @ApiResponse({
    status: 200,
    description:
      'Este recurso é protegido, requer autenticação e permissão de administrador.',
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  getAdminResource() {
    return this.authService.admin();
  }
}
