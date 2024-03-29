import { Injectable } from '@nestjs/common';
import * as winston from 'winston';

import { loggerConfigs } from '@shared/configs/logger';
import { ILoggerService } from '@shared/logger/interfaces';

@Injectable()
export class WinstonLoggerService implements ILoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger(loggerConfigs);
  }

  log(message: string, context?: string) {
    this.logger.info(message, { context });
  }

  error(message: string, trace: string, context?: string) {
    this.logger.error(message, { trace, context });
  }

  warn(message: string, context?: string) {
    this.logger.warn(message, { context });
  }

  debug(message: string, context?: string) {
    this.logger.debug(message, { context });
  }

  verbose(message: string, context?: string) {
    this.logger.verbose(message, { context });
  }
}
