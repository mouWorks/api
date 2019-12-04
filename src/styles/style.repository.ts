import { Style } from '../entity/style.entity';
import { EntityRepository, Repository } from 'typeorm';
import { StyleDto } from './interfaces/styleDto';

@EntityRepository(Style)
export class StyleRepository extends Repository<Style> {

    //C
    createStyle = async (styleDto: StyleDto) => {
        return await this.save(styleDto);
    };

    //R
    findOneStyle = async (id: string) => {
        return this.findOneOrFail(id);
    };

    //U
    updateStyle = async (id: string,styleDto: StyleDto) => {
        return this.save({ ...styleDto, id: Number(id) });
    };

    //D
    deleteStyle = async (id: string) => {
        await this.findOneOrFail(id);
        return this.delete(id);
    };

}
