"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_entity_1 = __importDefault(require("../../database/entities/customer.entity"));
const logger_1 = require("../../utils/logger");
const base_service_1 = require("../base.service");
class CustomerService extends base_service_1.BaseService {
    constructor() {
        super(customer_entity_1.default);
    }
    /**
     * getAllCustomers
     */
    async getAllCustomers() {
        logger_1.logger.info(`🚀 ~ ${CustomerService.name} ~ getAllCustomers`);
        const customers = await (await this.useRepository).find();
        return customers;
    }
    /**
     * getCustomerById
     */
    async getCustomerById(customerId) {
        logger_1.logger.info(`🚀 ~ ${CustomerService.name} ~ getCustomerById ~ ${customerId}`);
        const customer = await (await this.useRepository).findOneBy({ id: customerId });
        !customer &&
            logger_1.logger.error(`🚀 ~ ${CustomerService.name} ~ getCustomerById ~ CUSTOMER NOT FOUND`);
        return customer;
    }
    /**
     * createCustomer
     */
    async createCustomer(customerData) {
        logger_1.logger.info(`🚀 ~ ${CustomerService.name} ~ createCustomer`);
        const customer = (await this.useRepository).create(customerData);
        return await (await this.useRepository).save(customer);
    }
    /**
     * updateCustomerById
     */
    async updateCustomerById(customerId, customerData) {
        logger_1.logger.info(`🚀 ~ ${CustomerService.name} ~ updateCustomerById ~ ${customerId}`);
        const customer = await (await this.useRepository).findOneBy({ id: customerId });
        !customer &&
            logger_1.logger.error(`🚀 ~ ${CustomerService.name} ~ updateCustomerById ~ CUSTOMER NOT FOUND`);
        return await (await this.useRepository).update(customerId, { ...customerData });
    }
    /**
     * deleteCustomerById
     */
    async deleteCustomerById(customerId) {
        logger_1.logger.info(`🚀 ~ ${CustomerService.name} ~ deleteCustomerById ~ ${customerId}`);
        const customer = await (await this.useRepository).findOneBy({ id: customerId });
        !customer &&
            logger_1.logger.error(`🚀 ~ ${CustomerService.name} ~ deleteCustomerById ~ CUSTOMER NOT FOUND`);
        return await (await this.useRepository).delete({ id: customerId });
    }
}
exports.default = CustomerService;
//# sourceMappingURL=customer.service.js.map