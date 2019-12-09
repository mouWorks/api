import {Controller, Get, Post, Body, Param, Delete, Put, UsePipes} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StyleDto } from './interfaces/styleDto';
import { StyleRepository} from "./style.repository";
import {StyleDTOValidationPipe} from "../shared/pipes/StyleDTOValidationPipe";
import {ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse} from "@nestjs/swagger";

@Controller('styles/v1')
export class StyleController {
    constructor(
        @InjectRepository(StyleRepository) private readonly styleRepository: StyleRepository,
    ) {}

    // //Test
    // @Get('/test')
    // getHello(){
    //     // return this.styleRepository.getHello();
    //     return 'Hello StyleController';
    // }

    //C
    @ApiCreatedResponse({description:'Styles Created'})
    @ApiInternalServerErrorResponse({description:'Invalid Input'})
    @Post()
    @UsePipes(StyleDTOValidationPipe)
    create(@Body() styleDto: StyleDto) {
        return this.styleRepository.createStyle(styleDto);
    }

    //R - FindAll
    @ApiOkResponse({description:'Return Styles Array'})
    @Get()
    findAll(){
        return this.styleRepository.find();
    }

    //R - FindById
    @ApiOkResponse({description:'Return Styles Array By ID'})
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.styleRepository.findOneStyle(id);
    }

    //U
    @Put(':id')
    update(@Param('id') id: string, @Body() styleDto: StyleDto) {
        return this.styleRepository.updateStyle(id, styleDto);
    }

    //D
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.styleRepository.deleteStyle(id);
    }
}
