import { Module } from '@nestjs/common';
import {UserDTOValidationPipe} from "../../shared/UserDTOValidationPipe";

@Module({
    providers: [
        UserDTOValidationPipe,
    ],
})
export class SharedModule {}
