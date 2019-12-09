import { Test, TestingModule } from '@nestjs/testing';
import { StyleController } from './style.controller';
import {AppService} from "../app.service";
import {StyleRepository} from "./style.repository";

describe('StyleController', () => {
    let styleController: StyleController;

    beforeEach(async () => {
        const style: TestingModule = await Test.createTestingModule({
            controllers: [StyleController],
            providers: [StyleRepository],
        }).compile();

        styleController = style.get<StyleController>(StyleController);
    });

    describe('root', () => {
        it('should return "Hello Test@StyleController"', () => {

            let res = styleController;
            expect(styleController.getHello()).toBe('Hello Test@StyleController');

        });
    });
});
