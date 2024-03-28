import { SetMetadata } from '@nestjs/common';

import { ROLES_KEYS } from '../constants';
import { Role } from '../interfaces';

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEYS, roles);
