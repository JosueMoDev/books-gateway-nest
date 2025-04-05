import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('BOOKS_SERVICE') private readonly booksClient: ClientProxy,
  ) {}
  async findOneBook(id: string) {
    const books$ = this.booksClient.send('find_one_book', { id });
    return firstValueFrom(books$);
  }
}
