"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../utils/logger");
const product_service_1 = __importDefault(require("./product.service"));
const http_response_1 = require("../../shared/response/http.response");
class ProductController {
    productService;
    httpResponse;
    constructor(productService = new product_service_1.default(), httpResponse = new http_response_1.HttpResponse()) {
        this.productService = productService;
        this.httpResponse = httpResponse;
    }
    /**
     * getAllProducts
     */
    getAllProducts = async (_req, res) => {
        logger_1.logger.info(`🚀 ~ ${ProductController.name} ~ getAllProducts`);
        try {
            const productResponse = await this.productService.getAllProducts();
            if (!productResponse) {
                return this.httpResponse.NotFound(res, "No Products Found");
            }
            return this.httpResponse.OK(res, productResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * getProductById
     */
    getProductById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${ProductController.name} ~ getProductById`);
        const { id: productId } = req.params;
        try {
            const productResponse = await this.productService.getProductById(productId);
            if (!productResponse) {
                return this.httpResponse.NotFound(res, "Product Not Found");
            }
            return this.httpResponse.OK(res, productResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * createProduct
     */
    createProduct = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${ProductController.name} ~ createProduct`);
        const { body: productData } = req;
        try {
            const productResponse = await this.productService.createProduct(productData);
            return this.httpResponse.OK(res, productResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * updateProductById
     */
    updateProductById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${ProductController.name} ~ updateProductById`);
        const { id: productId } = req.params;
        const { body: productData } = req;
        try {
            const productResponse = await this.productService.updateProductById(productId, productData);
            if (!productResponse) {
                return this.httpResponse.NotFound(res, "Product Not Found");
            }
            if (!productResponse.affected) {
                return this.httpResponse.InternalServerError(res, "Product can not be updated");
            }
            return this.httpResponse.OK(res, productResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
    /**
     * deleteProductById
     */
    deleteProductById = async (req, res) => {
        logger_1.logger.info(`🚀 ~ ${ProductController.name} ~ deleteProductById`);
        const { id: productId } = req.params;
        try {
            const productResponse = await this.productService.deleteProductById(productId);
            if (!productResponse) {
                return this.httpResponse.NotFound(res, "Product Not Found");
            }
            if (!productResponse.affected) {
                return this.httpResponse.InternalServerError(res, "Product can not be deleted");
            }
            return this.httpResponse.OK(res, productResponse);
        }
        catch (error) {
            return this.httpResponse.InternalServerError(res, "Internal Server Error");
        }
    };
}
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map