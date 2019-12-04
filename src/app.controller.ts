import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes} from '@nestjs/common';
import { AppService } from './app.service';
import { StyleDTOValidationPipe } from "./shared/pipes/StyleDTOValidationPipe";
import { UserDTO} from "./UserDTO";
import {DeleteResult} from "typeorm";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}

