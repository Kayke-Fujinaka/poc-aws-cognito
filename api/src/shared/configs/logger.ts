import { INestApplication } from '@nestjs/common';
import * as morgan from 'morgan';
import * as winston from 'winston';

export const loggerConfigs = {
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  ],
};

export class LoggerConfig {
  static setup(app: INestApplication): void {
    app.use(
      morgan((tokens, req, res) => {
        if (req.method === 'OPTIONS') return null;

        return [
          tokens.method(req, res),
          tokens.url(req, res),
          tokens.status(req, res),
          tokens.res(req, res, 'content-length'),
          '-',
          tokens['response-time'](req, res),
          'ms',
        ].join(' ');
      }),
    );
  }
}
