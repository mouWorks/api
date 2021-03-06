import {Controller, Get, Post, Body, Param, Delete, Put, UsePipes, HttpCode} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StyleDto } from './interfaces/styleDto';
import { StyleRepository} from './style.repository';
import { StyleDTOValidationPipe } from '../shared/pipes/StyleDTOValidationPipe';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
} from '@nestjs/swagger';

@Controller('styles/v1')
export class StyleController {
    constructor(
        @InjectRepository(StyleRepository) private readonly styleRepository: StyleRepository,
    ) {}

    // Test
    @Get('/test')
    getHello(){
        return 'Hello Test@StyleController';
    }

    // C
    @ApiCreatedResponse({description: 'Styles Created'})
    @ApiBadRequestResponse({description: 'Invalid Input'})
    @ApiInternalServerErrorResponse({description: 'Server Error'})
    @Post()
    @UsePipes(StyleDTOValidationPipe)
    create(@Body() styleDto: StyleDto) {
        return this.styleRepository.createStyle(styleDto);
    }

    // R - FindAll
    @ApiOkResponse({description: 'Return Styles Array'})
    @Get()
    findAll() {
        return this.styleRepository.find();
    }

    // @HttpCode(308)
    // R - FindById
    @ApiOkResponse({description: 'Return Styles Array By ID'})
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.styleRepository.findOneStyle(id);
    }

    // U
    @ApiOkResponse({description: 'Styles Update By ID'})
    @Put(':id')
    update(@Param('id') id: string, @Body() styleDto: StyleDto) {
        return this.styleRepository.updateStyle(id, styleDto);
    }

    // D
    @ApiOkResponse({description: 'Styles Deleted'})
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.styleRepository.deleteStyle(id);
    }
}
