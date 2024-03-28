import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './controllers/auth.controller';
import { RolesGuard } from './guards/roles.guard';
import { AuthService } from './services/auth.services';
import { JwtStrategy } from './stategies/jwt-strategy';

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    AuthService,
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AuthModule {}
