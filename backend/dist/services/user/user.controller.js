"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../utils/logger");
const user_service_1 = __importDefault(require("./user.service"));
const http_response_1 = require("../../shared/response/http.response");
class UserController {
    userService;
    httpResponse;
    constructor(userService = new user_service_1.default(), httpResponse = new http_response_1.HttpResponse()) {
        this.userService = userService;
        this.httpResponse = httpResponse;
    }
    /**
     * getAllUsers
     */
    getAllUsers = async (_req, res) => {
        logger_1.logger.info(`🚀 ~ ${UserController.name} ~ getAllUsers`);
        try {
            const userResponse = await this.userService.getAllUsers();
            if (!userResponse) {
                return this.httpResponse.NotFound(res, "No Users Found");
            }
            return this.httpResponse.OK(res, userResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * getUserById
     */
    getUserById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${UserController.name} ~ getUserById`);
        const { id: userId } = req.params;
        try {
            const userResponse = await this.userService.getUserById(userId);
            if (!userResponse) {
                return this.httpResponse.NotFound(res, "User Not Found");
            }
            return this.httpResponse.OK(res, userResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * createUser
     */
    createUser = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${UserController.name} ~ createUser`);
        const { body: userData } = req;
        try {
            const userResponse = await this.userService.createUser(userData);
            return this.httpResponse.OK(res, userResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * updateUserById
     */
    updateUserById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${UserController.name} ~ updateUserById`);
        const { id: userId } = req.params;
        const { body: userData } = req;
        try {
            const userResponse = await this.userService.updateUserById(userId, userData);
            if (!userResponse) {
                return this.httpResponse.NotFound(res, "User Not Found");
            }
            if (!userResponse.affected) {
                return this.httpResponse.InternalServerError(res, "User can not be updated");
            }
            return this.httpResponse.OK(res, userResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * deleteUserById
     */
    deleteUserById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${UserController.name} ~ deleteUserById`);
        const { id: userId } = req.params;
        try {
            const userResponse = await this.userService.deleteUserById(userId);
            if (!userResponse) {
                return this.httpResponse.NotFound(res, "User Not Found");
            }
            if (!userResponse.affected) {
                return this.httpResponse.InternalServerError(res, "User can not be deleted");
            }
            return this.httpResponse.OK(res, "User Deleted");
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map