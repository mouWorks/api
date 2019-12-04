import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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
