"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("../base.service");
const logger_1 = require("../../utils/logger");
const product_entity_1 = __importDefault(require("../../database/entities/product.entity"));
class ProductService extends base_service_1.BaseService {
    constructor() {
        super(product_entity_1.default);
    }
    /**
     * getAllProducts
     */
    async getAllProducts() {
        logger_1.logger.info(`🚀 ~ ${ProductService.name} ~ getAllProducts`);
        const products = await (await this.useRepository).find();
        return products;
    }
    /**
     * getProductById
     */
    async getProductById(productId) {
        logger_1.logger.info(`🚀 ~ ${ProductService.name} ~ getProductById ~ ${productId}`);
        const product = await (await this.useRepository).findOneBy({ id: productId });
        !product &&
            logger_1.logger.error(`🚀 ~ ${ProductService.name} ~ getProductById ~ USER NOT FOUND`);
        return product;
    }
    /**
     * createProduct
     */
    async createProduct(productData) {
        logger_1.logger.info(`🚀 ~ ${ProductService.name} ~ createProduct`);
        const product = (await this.useRepository).create(productData);
        return await (await this.useRepository).save(product);
    }
    /**
     * updateProductById
     */
    async updateProductById(productId, productData) {
        logger_1.logger.info(`🚀 ~ ${ProductService.name} ~ updateProductById ~ ${productId}`);
        const product = await (await this.useRepository).findOneBy({ id: productId });
        !product &&
            logger_1.logger.error(`🚀 ~ ${ProductService.name} ~ updateProductById ~ PRODUCT NOT FOUND`);
        return await (await this.useRepository).update(productId, { ...productData });
    }
    /**
     * deleteProductById
     */
    async deleteProductById(productId) {
        logger_1.logger.info(`🚀 ~ ${ProductService.name} ~ deleteProductById ~ ${productId}`);
        const product = await (await this.useRepository).findOneBy({ id: productId });
        !product &&
            logger_1.logger.error(`🚀 ~ ${ProductService.name} ~ daleteProductById ~ PRODUCT NOT FOUND`);
        return await (await this.useRepository).delete({ id: productId });
    }
}
exports.default = ProductService;
//# sourceMappingURL=product.service.js.map