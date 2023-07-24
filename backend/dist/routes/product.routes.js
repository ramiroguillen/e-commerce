"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../services/product/product.controller"));
class productRoute {
    path = "/products";
    router = (0, express_1.Router)();
    productController = new product_controller_1.default();
    constructor() {
        this.initUserRoute();
    }
    /**
     * initUserRoute
     */
    initUserRoute() {
        this.router.get(`${this.path}`, this.productController.getAllProducts);
        this.router.get(`${this.path}/:id`, this.productController.getProductById);
        this.router.post(`${this.path}`, this.productController.createProduct);
        this.router.put(`${this.path}/:id`, this.productController.updateProductById);
        this.router.delete(`${this.path}/:id`, this.productController.deleteProductById);
    }
}
exports.default = productRoute;
//# sourceMappingURL=product.routes.js.map