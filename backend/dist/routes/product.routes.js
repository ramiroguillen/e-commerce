"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../modules/product/product.controller"));
const base_route_1 = require("./base.route");
const validateDTO_middleware_1 = require("../middlewares/validateDTO.middleware");
const product_dto_1 = require("../modules/product/dto/product.dto");
class productRoute extends base_route_1.BaseRoute {
    path = "/products";
    router = (0, express_1.Router)();
    productController = new product_controller_1.default();
    constructor() {
        super(product_controller_1.default, validateDTO_middleware_1.ValidateDTOMiddleware);
        this.initUserRoute();
    }
    /**
     * initUserRoute
     */
    initUserRoute() {
        this.router.get(`${this.path}`, this.productController.getAllProducts);
        this.router.get(`${this.path}/:id`, this.productController.getProductById);
        this.router.post(`${this.path}`, (req, res, next) => [
            this.middleware.validator(req, res, next, product_dto_1.ProductDTO),
        ], this.productController.createProduct);
        this.router.put(`${this.path}/:id`, this.productController.updateProductById);
        this.router.delete(`${this.path}/:id`, this.productController.deleteProductById);
    }
}
exports.default = productRoute;
//# sourceMappingURL=product.routes.js.map