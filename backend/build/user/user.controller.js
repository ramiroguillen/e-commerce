"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
const user_service_1 = __importDefault(require("./user.service"));
class UserController {
    UserService = new user_service_1.default();
    constructor() { }
    /**
     * getAllUsers
     */
    getAllUsers = async (_req, res) => {
        logger_1.logger.info(`🚀 ~ ${UserController.name} ~ getAllUsers`);
        const userResponse = await this.UserService.getAllUsers();
        res.status(200).json({ message: "Get All Users", users: userResponse });
    };
    /**
     * getUserById
     */
    getUserById = async (req, res) => {
        const { id: userId } = req.params;
        logger_1.logger.info(`🚀 ~ ${UserController.name} ~ getUserById ~ ${userId}`);
        const userResponse = await this.UserService.getUserById(userId);
        res
            .status(200)
            .json({ message: `Get User: ${userId}`, user: userResponse });
    };
    /**
     * createUser
     */
    createUser = async (req, res) => {
        const { body: userData } = req;
        logger_1.logger.info(`🚀 ~ ${UserController.name} ~ createUser`);
        const userResponse = await this.UserService.createUser(userData);
        res.status(200).json({ message: "User Created", user: userResponse });
    };
    /**
     * updateUser
     */
    updateUserById = async (req, res) => {
        const { id: userId } = req.params;
        const { body: userData } = req;
        logger_1.logger.info(`🚀 ~ ${UserController.name} ~ updateUserById ~ ${userId}`);
        const userResponse = await this.UserService.updateUserById(userId, userData);
        res
            .status(200)
            .json({ message: `User Updated: ${userId}`, user: userResponse });
    };
    /**
     * deleteUser
     */
    deleteUserById = async (req, res) => {
        const { id: userId } = req.params;
        logger_1.logger.info(`🚀 ~ ${UserController.name} ~ deleteUserById ~ ${userId}`);
        const userResponse = await this.UserService.deleteUserById(userId);
        res.status(200).json({ message: `User Deleted: ${userId}`, userResponse });
    };
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map