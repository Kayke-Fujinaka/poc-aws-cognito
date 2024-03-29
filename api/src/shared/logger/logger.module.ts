import { Module } from '@nestjs/common';

import { LOGGER_SERVICE } from './constants';
import { WinstonLoggerService } from './winston-logger.service';

@Module({
  providers: [
    {
      provide: LOGGER_SERVICE,
      useClass: WinstonLoggerService,
    },
  ],
  exports: [LOGGER_SERVICE],
})
export class LoggerModule {}
