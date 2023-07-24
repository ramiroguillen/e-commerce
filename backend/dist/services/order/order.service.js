"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("../base.service");
const logger_1 = require("../../utils/logger");
const order_entity_1 = __importDefault(require("../../database/entities/order.entity"));
class OrderService extends base_service_1.BaseService {
    constructor() {
        super(order_entity_1.default);
    }
    /**
     * getAllOrders
     */
    async getAllOrders() {
        logger_1.logger.info(`🚀 ~ ${OrderService.name} ~ getAllOrders`);
        const orders = await (await this.useRepository).find();
        return orders;
    }
    /**
     * getOrderById
     */
    async getOrderById(orderId) {
        logger_1.logger.info(`🚀 ~ ${OrderService.name} ~ getOrderById ~ ${orderId}`);
        const order = await (await this.useRepository).findOneBy({ id: orderId });
        !order &&
            logger_1.logger.error(`🚀 ~ ${OrderService.name} ~ getOrderById ~ USER NOT FOUND`);
        return order;
    }
    /**
     * createOrder
     */
    async createOrder(orderData) {
        logger_1.logger.info(`🚀 ~ ${OrderService.name} ~ createOrder`);
        const order = (await this.useRepository).create(orderData);
        return await (await this.useRepository).save(order);
    }
    /**
     * updateOrderById
     */
    async updateOrderById(orderId, orderData) {
        logger_1.logger.info(`🚀 ~ ${OrderService.name} ~ updateOrderById ~ ${orderId}`);
        const order = await (await this.useRepository).findOneBy({ id: orderId });
        !order &&
            logger_1.logger.error(`🚀 ~ ${OrderService.name} ~ updateOrderById ~ ORDER NOT FOUND`);
        return await (await this.useRepository).update(orderId, { ...orderData });
    }
    /**
     * deleteOrderById
     */
    async deleteOrderById(orderId) {
        logger_1.logger.info(`🚀 ~ ${OrderService.name} ~ deleteOrderById ~ ${orderId}`);
        const order = await (await this.useRepository).findOneBy({ id: orderId });
        !order &&
            logger_1.logger.error(`🚀 ~ ${OrderService.name} ~ daleteOrderById ~ ORDER NOT FOUND`);
        return await (await this.useRepository).delete({ id: orderId });
    }
}
exports.default = OrderService;
//# sourceMappingURL=order.service.js.map