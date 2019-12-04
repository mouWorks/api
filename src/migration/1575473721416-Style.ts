import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class Style1575473721416 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {

        let tableName = 'Style';
        let indexName = 'IDX_STYLE';

        await queryRunner.createTable(new Table({
            name: tableName,
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "style",
                    type: "varchar",
                },
                {
                    name: "desc",
                    type: "varchar",
                },
                {
                    name: "descChinese",
                    type: "varchar",
                },
                {
                    name: "isDeleted",
                    type: "boolean",
                },
            ]
        }), true)

        await queryRunner.createIndex(tableName, new TableIndex({
            name: indexName,
            columnNames: ["style"]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        let tableName = 'Style';
        let indexName = 'IDX_STYLE';

        const table = await queryRunner.getTable(tableName);

        await queryRunner.dropIndex(tableName, indexName);
        await queryRunner.dropTable(tableName);
    }


}
