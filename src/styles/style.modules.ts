import { Module } from '@nestjs/common';
import { StyleController } from './style.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Style } from '../entity/style.entity';
import { StyleRepository } from './style.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Style, StyleRepository])],
    controllers: [StyleController],
})
export class StyleModule {}
