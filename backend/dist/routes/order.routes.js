"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../modules/order/order.controller"));
const base_route_1 = require("./base.route");
const validateDTO_middleware_1 = require("../middlewares/validateDTO.middleware");
const order_dto_1 = require("../modules/order/dto/order.dto");
class orderRoute extends base_route_1.BaseRoute {
    path = "/orders";
    router = (0, express_1.Router)();
    orderController = new order_controller_1.default();
    constructor() {
        super(order_controller_1.default, validateDTO_middleware_1.ValidateDTOMiddleware);
        this.initUserRoute();
    }
    /**
     * initUserRoute
     */
    initUserRoute() {
        this.router.get(`${this.path}`, this.orderController.getAllOrders);
        this.router.get(`${this.path}/:id`, this.orderController.getOrderById);
        this.router.post(`${this.path}`, (req, res, next) => [this.middleware.validator(req, res, next, order_dto_1.OrderDTO)], this.orderController.createOrder);
        this.router.put(`${this.path}/:id`, this.orderController.updateOrderById);
        this.router.delete(`${this.path}/:id`, this.orderController.deleteOrderById);
    }
}
exports.default = orderRoute;
//# sourceMappingURL=order.routes.js.map