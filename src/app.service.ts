import "reflect-metadata";
import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import {getManager, getRepository, createConnection, getConnectionManager} from "typeorm";
import { Style } from "./entity/Style";

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello NestJS @3005 !';
  }

  // getStyles(): string {
  //   return 'Listing all the desired Styles';
  // }

  // async delete(id): Promise<DeleteResult> {
  //   return await this.StyleRepository.delete(id);
  // }

  async getStyleById(id): Promise<Object>{

    const conn = await createConnection();

    const styles = await conn.getRepository(Style).findOne({
      id: id,
      isDeleted: false
    });

    await conn.close();

    return styles;
  }

  async createStyles() {

    const style = new Style();

    style.style = "blues";
    style.desc = "布魯斯2";
    style.descChinese = "Blues is a lovely dance";

    const conn = await createConnection();

    await conn.manager.save(style);

    const users = await conn.manager.find(Style);

    console.log(users);
    return users;
  }


}
