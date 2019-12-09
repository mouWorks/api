import { IsString, Length } from 'class-validator';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

//Simple DTO
export class StyleDto {

    @ApiModelProperty({
        maxLength: 10,
        description: "風格/Style"
    })
    @Length(0, 10, { //可以指定錯誤訊息
        message: '長度需要小於十',
    })
    style: string;

    @ApiModelProperty({
        maxLength: 40,
        description: "說明/Desc"
    })
    @Length(0, 40, { //可以指定錯誤訊息
        message: '長度需要小於四十',
    })
    desc: string;

    @ApiModelProperty({
        maxLength: 80,
        description: "中文說明/DescChinese"
    })
    @Length(0, 80, { //可以指定錯誤訊息
        message: '長度需要小於八十',
    })
    descChinese: string;

    isDeleted: boolean;
}
