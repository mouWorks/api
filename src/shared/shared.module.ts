import { Module } from '@nestjs/common';
import {UserDTOValidationPipe} from "./pipes/UserDTOValidationPipe";

@Module({
    providers: [
        UserDTOValidationPipe,
    ],
})
export class SharedModule {}
