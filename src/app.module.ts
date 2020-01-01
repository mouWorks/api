import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { StyleModule } from './styles/style.modules';
import { EasyconfigModule } from  'nestjs-easyconfig';

@Module({
  imports: [
      // SharedModule
      TypeOrmModule.forRoot(),
      StyleModule,
      EasyconfigModule.register({path: './src/.env'})
  ],
  controllers: [AppController]
})
export class AppModule {}
