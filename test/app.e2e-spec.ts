import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {TypeOrmModule} from '@nestjs/typeorm';

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
    // this.initTestingData();
    await app.init();
    return initTestingData();
  });

  it('/ (GET)',  async () => {

    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello NestJS @3005 001 @LightSail !');
  });

  it('/ (POST) Style/v1', async () => {

    const prepDataJson = {
      "style": "Blues",
      "desc": "BluesMusic",
      "descChinese": "藍調音樂",
    };

    const response = await request(app.getHttpServer()).post('/styles/v1').send(prepDataJson);
    expect(response.body).toEqual(expect.objectContaining(prepDataJson));
  });

  it('/ (GET) Style/v1/id',   async () => {

    const resultJson = {
      "style": "Low-fi",
      "desc": "Low-fi Music",
      "descChinese": "放鬆音樂",
      "isDeleted": false
    };

    const response = await request(app.getHttpServer()).get('/styles/v1/1');
    expect(response.body).toEqual(expect.objectContaining(resultJson));
  });

  it('/ (UPDATE) Style/v1/id',   async () => {

    let updateData = {
      "style": "RnB",
      "desc": "RnB music",
      "descChinese": "靈魂樂",
      "isDeleted": false
    };

    let updateResult = {"generatedMaps": [], "raw": {"affectedRows": 1, "changedRows": 1, "fieldCount": 0, "insertId": 0, "message": "(Rows matched: 1  Changed: 1  Warnings: 0", "protocol41": true, "serverStatus": 2, "warningCount": 0}}

    const response = await request(app.getHttpServer()).put('/styles/v1/1').send(updateData);
    expect(response.body).toEqual(expect.objectContaining(updateResult));
  });




  it('/ (DELETE) Style/v1/id', async () => {

    let desiredResult = {"affected": 1, "raw": {"affectedRows": 1, "changedRows": 0, "fieldCount": 0, "insertId": 0, "message": "", "protocol41": true, "serverStatus": 2, "warningCount": 0}};

    const response = await request(app.getHttpServer()).delete('/styles/v1/1').send();
    expect(200);
    expect(response.body).toEqual(expect.objectContaining(desiredResult));
  });

  afterAll((done) => {
    app.close();
    teardownData();
    done();
  });


  async function initTestingData(){
    let resultJson = {
      "style": "Low-fi",
      "desc": "Low-fi Music",
      "descChinese": "放鬆音樂",
      "isDeleted": false
    };

    await request(app.getHttpServer()).post('/styles/v1').send(resultJson);
  }

  async function teardownData(){

    console.log('here should deal with Teardown...');

  }


});
