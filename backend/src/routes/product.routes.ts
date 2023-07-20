import { Router } from "express";
import { IRoutes } from "../interfaces/route.interface";
import ProductController from "../services/product/product.controller";

class productRoute implements IRoutes {
  public path = "/products";
  public router = Router();
  public productController = new ProductController();

  constructor() {
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    this.router.get(`${this.path}`, this.productController.getAllProducts);
    this.router.get(`${this.path}/:id`, this.productController.getProductById);
    this.router.post(`${this.path}`, this.productController.createProduct);
    this.router.put(`${this.path}/:id`, this.productController.updateProductById);
    this.router.delete(`${this.path}/:id`, this.productController.deleteProductById);
  }
}

export default productRoute;