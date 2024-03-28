import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

import { ROLES_KEYS } from '../constants';
import { Role } from '../interfaces';

@Injectable()
export class RolesGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const requiredRoles = this.reflector.get<Role[]>(
      ROLES_KEYS,
      context.getHandler(),
    );

    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();
    const userGroups: Role[] = user?.payload['cognito:groups'] ?? [];

    return this.hasRequiredRole(requiredRoles, userGroups);
  }

  private hasRequiredRole(requiredRoles: Role[], userGroups: Role[]): boolean {
    return requiredRoles.some((role) => userGroups.includes(role));
  }
}
