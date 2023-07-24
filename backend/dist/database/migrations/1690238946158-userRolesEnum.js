"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolesEnum1690238946158 = void 0;
class UserRolesEnum1690238946158 {
    name = 'UserRolesEnum1690238946158';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`available\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`on_sale\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`discount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` enum ('USER', 'ADMIN') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`status\` enum ('GENERATED', 'CONFIRMED', 'PREPARING', 'READY', 'SENT', 'DELIVERED') NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`discount\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`on_sale\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`available\``);
    }
}
exports.UserRolesEnum1690238946158 = UserRolesEnum1690238946158;
//# sourceMappingURL=1690238946158-userRolesEnum.js.map