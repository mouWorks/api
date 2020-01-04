import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {StyleModule} from "./styles/style.modules";
import {ConfigModule} from "nestjs-dotenv";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      imports: [
        ConfigModule.forRoot( ), //this is used, so also needs to required
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello NestJS @3005 !"', async () => {
      expect(appController.getHello()).toBe('Hello NestJS @3005 001 @LightSail !');
    });
  });
});
