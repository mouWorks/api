import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StyleModule } from './styles/style.modules';

@Module({
  imports: [
      // SharedModule
      TypeOrmModule.forRoot(),
      StyleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
