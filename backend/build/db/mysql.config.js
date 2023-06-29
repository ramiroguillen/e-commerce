"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySqlConnection = void 0;
const data_source_1 = require("../config/data.source");
const config_1 = require("../config/config");
//! DEPRECATED
const mySqlConnection = async () => {
    try {
        console.log("🚀 ~ DB PORT:", config_1.DB_PORT);
        console.log("🚀 ~ DB NAME:", config_1.DB_NAME);
        return await data_source_1.AppDataSource.initialize();
    }
    catch (error) {
        console.log("🚀 ~ file: mysql.connection.ts:12 ~ mySqlConnection ~ error:", error);
        throw new Error(`Error while trying to connect to mySQL`);
    }
};
exports.mySqlConnection = mySqlConnection;
//# sourceMappingURL=mysql.config.js.map