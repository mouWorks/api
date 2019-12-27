import "reflect-metadata";
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello NestJS @3005 001 @LightSail !';
  }

  healthCheck(): string{
    return 'Healthy! 002';
  }
}
