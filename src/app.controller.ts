import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //C
  @Post('/styles/v1')
  create(): string {
    return 'This is post';
    // return this.appService.getHello();
  }

  //R
  @Get('/styles/v1')
  getStyles(): string {
    return this.appService.getStyles();
  }

  //U
  @Put('/styles/v1')
  update(): string {
    return 'This is Update';
    // return this.appService.getHello();
  }

  //D
  @Delete('/styles/v1')
  delete(): string {
    return 'This is Delete';
    // return this.appService.getHello();
  }


}
