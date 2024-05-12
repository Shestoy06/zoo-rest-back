import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let name: string = 'andrei'
    const greeting: string = 'hello'
    return 'Hello World!'
  }
}
