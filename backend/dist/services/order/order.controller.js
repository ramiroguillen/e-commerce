"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../utils/logger");
const order_service_1 = __importDefault(require("./order.service"));
const http_response_1 = require("../../shared/response/http.response");
class OrderController {
    orderService;
    httpResponse;
    constructor(orderService = new order_service_1.default(), httpResponse = new http_response_1.HttpResponse()) {
        this.orderService = orderService;
        this.httpResponse = httpResponse;
    }
    /**
     * getAllOrders
     */
    getAllOrders = async (_req, res) => {
        logger_1.logger.info(`🚀 ~ ${OrderController.name} ~ getAllOrders`);
        try {
            const orderResponse = await this.orderService.getAllOrders();
            if (!orderResponse) {
                return this.httpResponse.NotFound(res, "No Orders Found");
            }
            return this.httpResponse.OK(res, orderResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * getOrderById
     */
    getOrderById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${OrderController.name} ~ getOrderById`);
        const { id: orderId } = req.params;
        try {
            const orderResponse = await this.orderService.getOrderById(orderId);
            if (!orderResponse) {
                return this.httpResponse.NotFound(res, "Order Not Found");
            }
            return this.httpResponse.OK(res, orderResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * createOrder
     */
    createOrder = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${OrderController.name} ~ createOrder`);
        const { body: orderData } = req;
        try {
            const orderResponse = await this.orderService.createOrder(orderData);
            return this.httpResponse.OK(res, orderResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * updateOrderById
     */
    updateOrderById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${OrderController.name} ~ updateOrderById`);
        const { id: orderId } = req.params;
        const { body: orderData } = req;
        try {
            const orderResponse = await this.orderService.updateOrderById(orderId, orderData);
            if (!orderResponse) {
                return this.httpResponse.NotFound(res, "Order Not Found");
            }
            if (!orderResponse.affected) {
                return this.httpResponse.InternalServerError(res, "Order can not be updated");
            }
            return this.httpResponse.OK(res, orderResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * deleteOrderById
     */
    deleteOrderById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${OrderController.name} ~ deleteOrderById`);
        const { id: orderId } = req.params;
        try {
            const orderResponse = await this.orderService.deleteOrderById(orderId);
            if (!orderResponse) {
                return this.httpResponse.NotFound(res, "Order Not Found");
            }
            if (!orderResponse.affected) {
                return this.httpResponse.InternalServerError(res, "Order can not be deleted");
            }
            return this.httpResponse.OK(res, orderResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
}
exports.default = OrderController;
//# sourceMappingURL=order.controller.js.map