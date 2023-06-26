import { DataSource } from "typeorm";
import { AppDataSource } from "../config/data.source";
import { DB_PORT, DB_NAME } from "../config/config";

//! DEPRECATED
export const mySqlConnection = async (): Promise<DataSource> => {
  try {
    console.log("🚀 ~ DB PORT:", DB_PORT);
    console.log("🚀 ~ DB NAME:", DB_NAME);
    return await AppDataSource.initialize();
  } catch (error) {
    console.log(
      "🚀 ~ file: mysql.connection.ts:12 ~ mySqlConnection ~ error:",
      error
    );
    throw new Error(`Error while trying to connect to mySQL`);
  }
};
