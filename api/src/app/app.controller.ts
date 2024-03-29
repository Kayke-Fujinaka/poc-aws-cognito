import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller()
export class AppController {
  constructor() {}

  @Get('/health')
  @ApiOperation({ summary: 'Verifica a saúde da aplicação.' })
  @ApiResponse({ status: 200, description: 'Aplicação rodando.' })
  health() {
    return {
      status: 200,
      message: 'Aplicação rodando.',
    };
  }
}
