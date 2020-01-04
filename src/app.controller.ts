import {Controller, Get, Injectable} from '@nestjs/common';
import {ConfigService} from "nestjs-dotenv";

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  // constructor(private config: EasyconfigService) {}
  constructor(private config: ConfigService) {}

  @Get()
  getHello() {
    return 'Hello NestJS @3005 001 @LightSail !';
  }

  @Get('/healthy')
  getHealth() {
    return 'NestJS healthy @ AWS LightSail';
  }

  @Get('/try')
  testMagic(){
    return this.config.get('MAGIC_WORD');
  }
}
