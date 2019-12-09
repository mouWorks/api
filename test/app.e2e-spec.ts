import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {TypeOrmModule} from "@nestjs/typeorm";

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
         AppModule,
         TypeOrmModule.forRoot(),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)',  async () => {

    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello NestJS @3005 001 !');
  });

  // it('/ (POST) Style/v1', async () => {
  //
  //   let prepDataJson = {
  //     "style": "Instrumental",
  //     "desc": "Instrumental Music",
  //     "descChinese": "純演奏音樂, 無人聲或歌詞",
  //     "isDeleted": false
  //   };
  //
  //   let postResult = await request(app.getHttpServer()).post('/style/v1');
  //
  //   expect(postResult).toBeDefined();
  // });

  it('/ (GET) Style/v1/2',   () => {

    let resultJson = {
      "id": 2,
      "style": "Low-fi",
      "desc": "Low-fi Music",
      "descChinese": "放鬆音樂",
      "isDeleted": false
    };

    return request(app.getHttpServer())
        .get('/styles/v1/2')
        .expect(200)
        .expect(resultJson);
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
