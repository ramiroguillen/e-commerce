"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_routemap_1 = __importDefault(require("express-routemap"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const hpp_1 = __importDefault(require("hpp"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = require("./config/config");
const logger_1 = require("./utils/logger");
const cors_config_1 = __importDefault(require("./config/cors.config"));
class App extends config_1.ConfigServer {
    app;
    env;
    port;
    server;
    constructor(routes) {
        super();
        this.app = (0, express_1.default)();
        this.env = config_1.NODE_ENV || "development";
        this.port = Number(config_1.PORT) || 8000;
        this.connectToDatabase();
        this.initMiddlewares();
        this.initRoutes(routes);
        this.initSwagger();
        this.initErrorHandling();
    }
    /**
     * getServer
     */
    getServer() {
        return this.app;
    }
    /**
     * closeServer
     */
    closeServer(done) {
        this.server = this.app.listen(this.port, () => {
            done();
        });
    }
    /**
     * connectToDatabase
     */
    async connectToDatabase() {
        return this.initConnect
            .then(() => {
            logger_1.logger.info("🚀 ~ Database Connected");
        })
            .catch((error) => {
            logger_1.logger.error(error);
        });
    }
    /**
     * initMiddlewares
     */
    initMiddlewares() {
        this.app.use((0, morgan_1.default)(config_1.LOG_FORMAT ?? "../logs", { stream: logger_1.stream }));
        this.app.use((0, cors_1.default)(cors_config_1.default));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    /**
     * initRoutes
     */
    initRoutes(routes) {
        routes.forEach((route) => {
            this.app.use(`/api/${config_1.API_VERSION}`, route.router);
        });
    }
    /**
     * initErrorHandling
     */
    initErrorHandling() {
        //TODO: config error handling
    }
    /**
     * listen
     */
    listen() {
        this.app.listen(this.port, () => {
            (0, express_routemap_1.default)(this.app);
            logger_1.logger.info(`🚀 ~ Current Enviroment: ${this.env}`);
            logger_1.logger.info(`🚀 ~ Listening to Port: ${this.port}`);
        });
    }
    /**
     * initSwagger
     */
    initSwagger() {
        //TODO: init swagger
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map