import { Controller, Get} from '@nestjs/common';
import { EasyconfigService } from "nestjs-easyconfig";

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor (private config: EasyconfigService) {}

  @Get()
  getHello(){
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
