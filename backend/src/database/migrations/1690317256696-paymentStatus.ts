import { MigrationInterface, QueryRunner } from "typeorm";

export class PaymentStatus1690317256696 implements MigrationInterface {
    name = 'PaymentStatus1690317256696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`available\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`on_sale\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`discount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`payment\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` enum ('USER', 'ADMIN') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`status\` enum ('GENERATED', 'CONFIRMED', 'PREPARING', 'READY', 'SENT', 'DELIVERED') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`payment\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`discount\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`on_sale\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`available\``);
    }

}
