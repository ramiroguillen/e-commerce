"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../modules/user/user.controller"));
const base_route_1 = require("./base.route");
const validateDTO_middleware_1 = require("../middlewares/validateDTO.middleware");
const user_dto_1 = require("../modules/user/dto/user.dto");
class userRoute extends base_route_1.BaseRoute {
    path = "/users";
    router = (0, express_1.Router)();
    userController = new user_controller_1.default();
    constructor() {
        super(user_controller_1.default, validateDTO_middleware_1.ValidateDTOMiddleware);
        this.initUserRoute();
    }
    /**
     * initUserRoute
     */
    initUserRoute() {
        this.router.get(`${this.path}`, this.userController.getAllUsers);
        this.router.get(`${this.path}/:id`, this.userController.getUserById);
        this.router.get(`${this.path}/rel/:id`, this.userController.getUserByIdWithRel);
        this.router.get(`${this.path}/email/:email`, this.userController.getUserByEmail);
        this.router.post(`${this.path}`, (req, res, next) => [this.middleware.validator(req, res, next, user_dto_1.UserDTO)], this.userController.createUser);
        this.router.put(`${this.path}/:id`, this.userController.updateUserById);
        this.router.delete(`${this.path}/:id`, this.userController.deleteUserById);
    }
}
exports.default = userRoute;
//# sourceMappingURL=user.routes.js.map