"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("../base.service");
const logger_1 = require("../../utils/logger");
const user_entity_1 = __importDefault(require("../../database/entities/user.entity"));
const crypt_1 = require("../../utils/crypt");
class UserService extends base_service_1.BaseService {
    constructor() {
        super(user_entity_1.default);
    }
    /**
     * getAllUsers
     */
    async getAllUsers() {
        logger_1.logger.info(`🚀 ~ ${UserService.name} ~ getAllUsers`);
        const users = await (await this.useRepository).find();
        return users;
    }
    /**
     * getUserById
     */
    async getUserById(userId) {
        logger_1.logger.info(`🚀 ~ ${UserService.name} ~ getUserById ~ ${userId}`);
        const user = await (await this.useRepository).findOneBy({ id: userId });
        !user &&
            logger_1.logger.error(`🚀 ~ ${UserService.name} ~ getUserById ~ USER NOT FOUND`);
        return user;
    }
    /**
     * createUser
     */
    async createUser(userData) {
        logger_1.logger.info(`🚀 ~ ${UserService.name} ~ createUser`);
        const { password } = userData;
        const hashedPassword = await (0, crypt_1.createHashValue)(password);
        const user = (await this.useRepository).create({
            ...userData,
            password: hashedPassword,
        });
        return await (await this.useRepository).save(user);
    }
    /**
     * updateUserById
     */
    async updateUserById(userId, userData) {
        logger_1.logger.info(`🚀 ~ ${UserService.name} ~ updateUserById ~ ${userId}`);
        const user = await (await this.useRepository).findOneBy({ id: userId });
        !user &&
            logger_1.logger.error(`🚀 ~ ${UserService.name} ~ updateUserById ~ USER NOT FOUND`);
        return await (await this.useRepository).update(userId, { ...userData });
    }
    /**
     * deleteUserById
     */
    async deleteUserById(userId) {
        logger_1.logger.info(`🚀 ~ ${UserService.name} ~ deleteUserById ~ ${userId}`);
        const user = await (await this.useRepository).findOneBy({ id: userId });
        !user &&
            logger_1.logger.error(`🚀 ~ ${UserService.name} ~ daleteUserById ~ USER NOT FOUND`);
        return await (await this.useRepository).delete({ id: userId });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map