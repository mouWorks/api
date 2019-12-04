import { Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';
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

  @Get('/styles/v1/:id')
  getUserById(@Param('id') id){
    const userFromMemory = this.inMemoryUsers.find((user) => user.id === parseInt(id, 10)); //解析後都是字串，要使用parseInt傳成number
    const resUser = new UserDTO();
    resUser.username = userFromMemory.username;
    resUser.email = userFromMemory.email;
    return resUser;
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

  inMemoryUsers = [
    {
      id: 2,
      username: '測試2',
      email: 'test2@test.com',
    },
    {
      id: 3,
      username: '測試3',
      email: 'test3@test.com',
    },
  ];

}


export class UserDTO{
  username: string;
  email: string;
}

