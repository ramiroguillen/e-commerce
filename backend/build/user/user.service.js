"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
class UserService {
    constructor() { }
    /**
     * getAllUsers
     */
    async getAllUsers() {
        logger_1.logger.info(`🚀 ~ ${UserService.name} ~ getAllUsers`);
        const users = [
            {
                id: 1,
                first_name: "Ramiro",
                last_name: "Guillen",
                email: "ramirojguillen@gmail.com",
            },
        ];
        return users;
    }
    /**
     * getUserById
     */
    async getUserById(userId) {
        logger_1.logger.info(`🚀 ~ ${UserService.name} ~ getUserById ~ ${userId}`);
        const user = {
            id: userId,
            first_name: "Ramiro",
            last_name: "Guillen",
            email: "ramirojguillen@gmail.com",
        };
        return user;
    }
    /**
     * createUser
     */
    async createUser(userData) {
        logger_1.logger.info(`🚀 ~ ${UserService.name} ~ createUser`);
        const user = { ...userData, id: 2 };
        return user;
    }
    /**
     * updateUserById
     */
    async updateUserById(userId, userData) {
        logger_1.logger.info(`🚀 ~ ${UserService.name} ~ updateUserById ~ ${userId}`);
        const user = { ...userData, id: userId };
        return user;
    }
    /**
     * deleteUserById
     */
    async deleteUserById(userId) {
        logger_1.logger.info(`🚀 ~ ${UserService.name} ~ deleteUserById ~ ${userId}`);
        const user = {
            id: userId,
            first_name: "Ramiro",
            last_name: "Guillen",
            email: "ramirojguillen@gmail.com",
        };
        return user;
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map