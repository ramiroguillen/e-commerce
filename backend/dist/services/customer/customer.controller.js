"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../utils/logger");
const customer_service_1 = __importDefault(require("./customer.service"));
const http_response_1 = require("../../shared/response/http.response");
class CustomerController {
    customerService;
    httpResponse;
    constructor(customerService = new customer_service_1.default(), httpResponse = new http_response_1.HttpResponse()) {
        this.customerService = customerService;
        this.httpResponse = httpResponse;
    }
    /**
     * getAllCustomers
     */
    getAllCustomers = async (_req, res) => {
        logger_1.logger.info(`🚀 ~ ${CustomerController.name} ~ getAllCustomers`);
        try {
            const customerResponse = await this.customerService.getAllCustomers();
            if (!customerResponse) {
                return this.httpResponse.NotFound(res, "No Customers Found");
            }
            return this.httpResponse.OK(res, customerResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * getCustomerById
     */
    getCustomerById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${CustomerController.name} ~ getCustomerById`);
        const { id: customerId } = req.params;
        try {
            const customerResponse = await this.customerService.getCustomerById(customerId);
            if (!customerResponse) {
                return this.httpResponse.NotFound(res, "Customer Nor Found");
            }
            return this.httpResponse.OK(res, customerResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * createCustomer
     */
    createCustomer = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${CustomerController.name} ~ createCustomer`);
        const { body: customerData } = req;
        try {
            const customerResponse = await this.customerService.createCustomer(customerData);
            return this.httpResponse.OK(res, customerResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * updateCustomer
     */
    updateCustomerById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${CustomerController.name} ~ updateCustomerById`);
        const { id: customerId } = req.params;
        const { body: customerData } = req;
        try {
            const customerResponse = await this.customerService.updateCustomerById(customerId, customerData);
            if (!customerResponse) {
                return this.httpResponse.NotFound(res, "Customer Not Found");
            }
            if (!customerResponse.affected) {
                return this.httpResponse.InternalServerError(res, "Customer can not be updated");
            }
            return this.httpResponse.OK(res, customerResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * deleteCustomer
     */
    deleteCustomerById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${CustomerController.name} ~ deleteCustomerById`);
        const { id: customerId } = req.params;
        try {
            const customerResponse = await this.customerService.deleteCustomerById(customerId);
            if (!customerResponse) {
                return this.httpResponse.NotFound(res, "Customer Not Found");
            }
            if (!customerResponse.affected) {
                return this.httpResponse.InternalServerError(res, "Customer can not be deleted");
            }
            return this.httpResponse.OK(res, customerResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
}
exports.default = CustomerController;
//# sourceMappingURL=customer.controller.js.map