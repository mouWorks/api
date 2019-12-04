import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes} from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTOValidationPipe } from "./shared/pipes/UserDTOValidationPipe";
import { UserDTO} from "./UserDTO";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //C
  @Post('/styles/v1')
    @UsePipes(UserDTOValidationPipe)
    create(@Body() userDto: UserDTO): string {

    // data = new UserDTO();

    // console.log(123154);
    // console.log(data);
    // console.log(data.username);

    // return '123124';
    return `使用者:${userDto.username}已建立`;
    // return 'This is post';
    // return this.appService.getHello();
  }

  @Get('/test')
  testCreate(){
    console.log('@AppController');
    return this.appService.createStyles();
  }

  //R
  // @Get('/styles/v1')
  // getStyles(): string {
  //   return this.appService.getStyles();
  // }

  @Get('/styles/v1/:id')
  getUserById(@Param('id') id){
    return this.appService.getStyleById(id);
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


// export class UserDTO{
//   username: string;
//   email: string;
// }

