"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../services/order/order.controller"));
class orderRoute {
    path = "/orders";
    router = (0, express_1.Router)();
    orderController = new order_controller_1.default();
    constructor() {
        this.initUserRoute();
    }
    /**
     * initUserRoute
     */
    initUserRoute() {
        this.router.get(`${this.path}`, this.orderController.getAllOrders);
        this.router.get(`${this.path}/:id`, this.orderController.getOrderById);
        this.router.post(`${this.path}`, this.orderController.createOrder);
        this.router.put(`${this.path}/:id`, this.orderController.updateOrderById);
        this.router.delete(`${this.path}/:id`, this.orderController.deleteOrderById);
    }
}
exports.default = orderRoute;
//# sourceMappingURL=order.routes.js.map