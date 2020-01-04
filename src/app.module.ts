import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { StyleModule } from './styles/style.modules';
import { ConfigModule } from 'nestjs-dotenv';

@Module({

  imports: [
      // SharedModule
      TypeOrmModule.forRoot(),
      StyleModule,
      ConfigModule.forRoot( ),
  ],
  controllers: [AppController]
})
export class AppModule {}
