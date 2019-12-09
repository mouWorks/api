import { IsString, Length } from 'class-validator';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import {ApiProperty} from "@nestjs/swagger";
import {Optional} from "@nestjs/common";

//Simple DTO
export class StyleDto {

    @IsString()
    @ApiProperty({
        maxLength: 10,
        description: "風格/Style",
        required: true
    })
    @Length(0, 10, { //可以指定錯誤訊息
        message: '風格字串需要小於10',
    })
    style: string;

    @IsString()
    @ApiProperty({
        maxLength: 40,
        description: "說明/Desc",
        required: true
    })
    @Length(0, 40, { //可以指定錯誤訊息
        message: '說明字串需要小於40',
    })
    desc: string;

    @IsString()
    @ApiProperty({
        maxLength: 80,
        description: "中文說明/DescChinese",
        required: false
    })
    @Length(0, 80, { //可以指定錯誤訊息
        message: '中文說明需要小於八十',
    })
    descChinese: string;

    isDeleted: boolean;
}
