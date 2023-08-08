"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServer = exports.JWT_SECRET = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = exports.DB_PORT = exports.DB_HOST = exports.ORIGIN = exports.API_VERSION = exports.LOG_FORMAT = exports.LOG_DIR = exports.PORT = exports.NODE_ENV = void 0;
const dotenv_1 = require("dotenv");
const data_source_1 = require("../database/data-source");
(0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || "development"}.local` });
_a = process.env, exports.NODE_ENV = _a.NODE_ENV, exports.PORT = _a.PORT, exports.LOG_DIR = _a.LOG_DIR, exports.LOG_FORMAT = _a.LOG_FORMAT, exports.API_VERSION = _a.API_VERSION, exports.ORIGIN = _a.ORIGIN, exports.DB_HOST = _a.DB_HOST, exports.DB_PORT = _a.DB_PORT, exports.DB_NAME = _a.DB_NAME, exports.DB_USER = _a.DB_USER, exports.DB_PASSWORD = _a.DB_PASSWORD, exports.JWT_SECRET = _a.JWT_SECRET;
class ConfigServer {
    get initConnect() {
        return data_source_1.AppDataSource.initialize();
    }
}
exports.ConfigServer = ConfigServer;
//# sourceMappingURL=config.js.map