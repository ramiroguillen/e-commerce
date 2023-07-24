import { join } from "path";
import { config } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const configDBConnection: DataSourceOptions = {
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  migrationsRun: true,
  logging: false,
  entities: [join(__dirname, "../database/entities/*.entity{.ts,.js}")],
  migrations: [join(__dirname, "../database/migrations/*.migration{.ts,.js}")],
  subscribers: [join(__dirname, "../**/*.subscriber{.ts,.js}")],
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDataSource: DataSource = new DataSource(configDBConnection);
