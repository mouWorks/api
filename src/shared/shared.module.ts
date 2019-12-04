import { Module } from '@nestjs/common';
import {StyleDTOValidationPipe} from "./pipes/StyleDTOValidationPipe";

@Module({
    providers: [
        StyleDTOValidationPipe,
    ],
})
export class SharedModule {}
