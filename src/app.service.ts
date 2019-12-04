import "reflect-metadata";
import { Injectable } from '@nestjs/common';
import { createConnection } from "typeorm";
import { Style } from "./entity/Style";


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS @3005 !';
  }

  getStyles(): string {
    return 'Listing all the desired Styles';
  }

  createStyles() {

    createConnection().then(async connection => {

      const style = new Style();

      //DummyData
      style.style = "blues";
      style.desc = "布魯斯";
      style.descChinese = "Blues is a lovely dance";
      await connection.manager.save(style);
      console.log("Saved a new user with id: " + style.id);

      const users = await connection.manager.find(Style);
      console.log("Loaded users: ", users);

      return users;

    }).catch(error => console.log(error));
  }


}
