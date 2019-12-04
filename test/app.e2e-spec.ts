import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello NestJS @3005 !');
  });

  it('/ (GET) Style/v1/2', () => {

    let resultJson = {
      "username": "測試2",
      "email": "test2@test.com"
    };

    return request(app.getHttpServer())
        .get('/styles/v1/2')
        .expect(200)
        .expect(resultJson);
  });


  it('/ (GET) Style/v1/3', () => {

    let resultJson = {
      "username": "測試3",
      "email": "test3@test.com"
    };

    return request(app.getHttpServer())
        .get('/styles/v1/3')
        .expect(200)
        .expect(resultJson);
  });



});
