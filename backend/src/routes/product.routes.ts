import { Router } from "express";
import ProductController from "../modules/product/product.controller";
import { BaseRoute } from "./base.route";
import { ValidateDTOMiddleware } from "../middlewares/validateDTO.middleware";
import { ProductDTO } from "../modules/product/dto/product.dto";

class productRoute extends BaseRoute<ProductController, ValidateDTOMiddleware> {
  public path = "/products";
  public router = Router();
  public productController = new ProductController();

  constructor() {
    super(ProductController, ValidateDTOMiddleware);
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    this.router.get(`${this.path}`, this.productController.getAllProducts);
    this.router.get(`${this.path}/:id`, this.productController.getProductById);
    this.router.post(
      `${this.path}`,
      (req, res, next) => [
        this.middleware.validator(req, res, next, ProductDTO),
      ],
      this.productController.createProduct
    );
    this.router.put(
      `${this.path}/:id`,
      this.productController.updateProductById
    );
    this.router.delete(
      `${this.path}/:id`,
      this.productController.deleteProductById
    );
  }
}

export default productRoute;
