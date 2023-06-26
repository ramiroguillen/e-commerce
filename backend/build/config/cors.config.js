"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const corsConfig = {
    allowedHeaders: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    origin: config_1.ORIGIN,
};
exports.default = corsConfig;
//# sourceMappingURL=cors.config.js.map