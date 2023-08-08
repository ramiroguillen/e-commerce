import { Request, Response } from "express";
import { logger } from "../../utils/logger";
import ProductService from "./product.service";
import { HttpResponse } from "../../utils/http-response";
import { DeleteResult, UpdateResult } from "typeorm";

class ProductController {
  constructor(
    private readonly productService: ProductService = new ProductService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  /**
   * getAllProducts
   */
  public getAllProducts = async (_req: Request, res: Response) => {
    logger.info(`🚀 ~ ${ProductController.name} ~ getAllProducts`);
    try {
      const productResponse = await this.productService.getAllProducts();
      if (!productResponse) {
        return this.httpResponse.NotFound(res, "No Products Found");
      }
      return this.httpResponse.OK(res, productResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * getProductById
   */
  public getProductById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${ProductController.name} ~ getProductById`);
    const { id: productId } = req.params;
    try {
      const productResponse = await this.productService.getProductById(
        productId
      );
      if (!productResponse) {
        return this.httpResponse.NotFound(res, "Product Not Found");
      }
      return this.httpResponse.OK(res, productResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * createProduct
   */
  public createProduct = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${ProductController.name} ~ createProduct`);
    const { body: productData } = req;
    try {
      const productResponse = await this.productService.createProduct(
        productData
      );
      return this.httpResponse.OK(res, productResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * updateProductById
   */
  public updateProductById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${ProductController.name} ~ updateProductById`);
    const { id: productId } = req.params;
    const { body: productData } = req;
    try {
      const productResponse: UpdateResult =
        await this.productService.updateProductById(productId, productData);
      if (!productResponse) {
        return this.httpResponse.NotFound(res, "Product Not Found");
      }
      if (!productResponse.affected) {
        return this.httpResponse.InternalServerError(
          res,
          "Product can not be updated"
        );
      }
      return this.httpResponse.OK(res, productResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * deleteProductById
   */
  public deleteProductById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${ProductController.name} ~ deleteProductById`);
    const { id: productId } = req.params;
    try {
      const productResponse: DeleteResult =
        await this.productService.deleteProductById(productId);
      if (!productResponse) {
        return this.httpResponse.NotFound(res, "Product Not Found");
      }
      if (!productResponse.affected) {
        return this.httpResponse.InternalServerError(
          res,
          "Product can not be deleted"
        );
      }
      return this.httpResponse.OK(res, productResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
}

export default ProductController;
