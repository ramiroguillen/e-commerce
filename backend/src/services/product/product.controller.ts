import { Request, Response } from "express";
import { logger } from "../../utils/logger";
import ProductService from "./product.service";

class ProductController {
  private readonly ProductService: ProductService = new ProductService();
  constructor() {}

  /**
   * getAllProducts
   */
  public getAllProducts = async (_req: Request, res: Response) => {
    logger.info(`🚀 ~ ${ProductController.name} ~ getAllProducts`);
    const productResponse = await this.ProductService.getAllProducts();
    res.status(200).json({ products: productResponse });
  };
  /**
   * getProductById
   */
  public getProductById = async (req: Request, res: Response) => {
    const { id: productId } = req.params;
    logger.info(`🚀 ~ ${ProductController.name} ~ getProductById ~ ${productId}`);
    const productResponse = await this.ProductService.getProductById(productId);
    res.status(200).json({ product: productResponse });
  };
  /**
   * createProduct
   */
  public createProduct = async (req: Request, res: Response) => {
    const { body: productData } = req;
    logger.info(`🚀 ~ ${ProductController.name} ~ createProduct`);
    const productResponse = await this.ProductService.createProduct(productData);
    res.status(200).json({ product: productResponse });
  };
  /**
   * updateProductById
   */
  public updateProductById = async (req: Request, res: Response) => {
    const { id: productId } = req.params;
    const { body: productData } = req;
    logger.info(`🚀 ~ ${ProductController.name} ~ updateProductById ~ ${productId}`);
    const productResponse = await this.ProductService.updateProductById(
      productId,
      productData
    );
    res.status(200).json({ product: productResponse });
  };
  /**
   * deleteProductById
   */
  public deleteProductById = async (req: Request, res: Response) => {
    const { id: productId } = req.params;
    logger.info(`🚀 ~ ${ProductController.name} ~ deleteProductById ~ ${productId}`);
    await this.ProductService.deleteProductById(productId);
    res.status(200).json({ message: `Product deleted` });
  };
}

export default ProductController;