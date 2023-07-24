"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controller_1 = __importDefault(require("../services/customer/customer.controller"));
class customerRoute {
    path = "/customers";
    router = (0, express_1.Router)();
    customerController = new customer_controller_1.default();
    constructor() {
        this.initUserRoute();
    }
    /**
     * initUserRoute
     */
    initUserRoute() {
        this.router.get(`${this.path}`, this.customerController.getAllCustomers);
        this.router.get(`${this.path}/:id`, this.customerController.getCustomerById);
        this.router.post(`${this.path}`, this.customerController.createCustomer);
        this.router.put(`${this.path}/:id`, this.customerController.updateCustomerById);
        this.router.delete(`${this.path}/:id`, this.customerController.deleteCustomerById);
    }
}
exports.default = customerRoute;
//# sourceMappingURL=customer.routes.js.map