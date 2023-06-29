"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../user/user.controller"));
class userRoute {
    path = "/user";
    router = (0, express_1.Router)();
    userController = new user_controller_1.default();
    constructor() {
        this.initUserRoute();
    }
    /**
     * initUserRoute
     */
    initUserRoute() {
        this.router.get(`${this.path}`, this.userController.getAllUsers);
        this.router.get(`${this.path}/:id`, this.userController.getUserById);
        this.router.post(`${this.path}`, this.userController.createUser);
        this.router.put(`${this.path}/:id`, this.userController.updateUserById);
        this.router.delete(`${this.path}/:id`, this.userController.deleteUserById);
    }
}
exports.default = userRoute;
//# sourceMappingURL=user.routes.js.map