import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('find-one/:id')
  async getFindOneBook(@Param('id') id: string) {
    return this.appService.findOneBook(id);
  }
}
