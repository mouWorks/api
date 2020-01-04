import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {StyleController} from './style.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Style} from '../entity/style.entity';
import {StyleRepository} from './style.repository';
import {SimpleBlocker} from '../shared/middleware/SimpleBlocker.middleware';
import {ConfigModule} from "nestjs-dotenv";

@Module({
    imports: [
        TypeOrmModule.forFeature([Style, StyleRepository]),
        ConfigModule.forRoot(),
    ],
    controllers: [StyleController],
})

export class StyleModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(SimpleBlocker)
            .forRoutes(
                {path: 'styles/v1', method: RequestMethod.POST}, //CREATE
                {path: 'styles/v1', method: RequestMethod.PUT}, //UPDATE
                {path: 'styles/v1/*', method: RequestMethod.DELETE}  //DELETE
        );
    }
}
