import { IsString, Length } from 'class-validator';

//Simple DTO
export class StyleDto {

    @Length(0, 10, { //可以指定錯誤訊息
        message: '長度需要小於十',
    })
    style: string;

    @Length(0, 40, { //可以指定錯誤訊息
        message: '長度需要小於四十',
    })
    desc: string;

    @Length(0, 80, { //可以指定錯誤訊息
        message: '長度需要小於八十',
    })
    descChinese: string;

    isDeleted: boolean;
}
