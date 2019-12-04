import "reflect-metadata";
import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import {getManager, getRepository, createConnection, getConnectionManager} from "typeorm";
import { Style } from "./entity/Style";

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello NestJS @3005 001 !';
  }
}
