import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    style: string;

    @Column()
    desc: string;

    @Column()
    descChinese: number;

    @Column()
    isDeleted: boolean;
}
