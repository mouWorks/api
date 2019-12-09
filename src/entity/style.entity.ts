import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Optional} from "@nestjs/common";

@Entity()
export class Style {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    style: string;

    @Column()
    desc: string;

    @Column()
    descChinese: string;

    @Column({ default: false })
    isDeleted: boolean;
}
