import { INestApplication } from '@nestjs/common';
import * as morgan from 'morgan';

export function httpLoggingMiddleware(app: INestApplication): void {
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
