"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controller_1 = __importDefault(require("../modules/customer/customer.controller"));
const base_route_1 = require("./base.route");
const validateDTO_middleware_1 = require("../middlewares/validateDTO.middleware");
const customer_dto_1 = require("../modules/customer/dto/customer.dto");
class customerRoute extends base_route_1.BaseRoute {
    path = "/customers";
    router = (0, express_1.Router)();
    customerController = new customer_controller_1.default();
    constructor() {
        super(customer_controller_1.default, validateDTO_middleware_1.ValidateDTOMiddleware);
        this.initUserRoute();
    }
    /**
     * initUserRoute
     */
    initUserRoute() {
        this.router.get(`${this.path}`, this.customerController.getAllCustomers);
        this.router.get(`${this.path}/:id`, this.customerController.getCustomerById);
        this.router.post(`${this.path}`, (req, res, next) => [
            this.middleware.validator(req, res, next, customer_dto_1.CustomerDTO),
        ], this.customerController.createCustomer);
        this.router.put(`${this.path}/:id`, this.customerController.updateCustomerById);
        this.router.delete(`${this.path}/:id`, this.customerController.deleteCustomerById);
    }
}
exports.default = customerRoute;
//# sourceMappingURL=customer.routes.js.map