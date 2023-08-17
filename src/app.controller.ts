import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): any {
    return {
      author: 'multifasis',
      project: 'MULTIAFCIS-PRIMERA-FACE',
      version: '0.0.1',
      description: 'APRENDIENDO NEST JS',
      type: 'Api Rest BackEnd',
    };
  }
}
