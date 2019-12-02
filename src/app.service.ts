import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS @3005 !';
  }

  getStyles(): string {
    return 'Listing all the styles';
  }



}
