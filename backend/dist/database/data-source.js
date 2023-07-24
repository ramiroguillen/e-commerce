"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const path_1 = require("path");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
(0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || "development"}.local` });
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const configDBConnection = {
    type: "mysql",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: false,
    migrationsRun: true,
    logging: false,
    entities: [(0, path_1.join)(__dirname, "../database/entities/*.entity{.ts,.js}")],
    migrations: [(0, path_1.join)(__dirname, "../database/migrations/*.migration{.ts,.js}")],
    subscribers: [(0, path_1.join)(__dirname, "../**/*.subscriber{.ts,.js}")],
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
};
exports.AppDataSource = new typeorm_1.DataSource(configDBConnection);
//# sourceMappingURL=data-source.js.map