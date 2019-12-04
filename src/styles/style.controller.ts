import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StyleDto } from './interfaces/styleDto';
import { StyleRepository} from "./style.repository";

@Controller('styles/v1')
export class StyleController {
    constructor(
        @InjectRepository(StyleRepository) private readonly styleRepository: StyleRepository,
    ) {}

    //C
    @Post()
    create(@Body() styleDto: StyleDto) {
        return this.styleRepository.createStyle(styleDto);
    }

    //R - FindAll
    @Get()
    findAll(){
        return this.styleRepository.find();
    }

    //R - FindById
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
