import { BaseService } from "../base.service";
import { logger } from "../../utils/logger";
import { ProductDTO } from "./dto/product.dto";
import { DeleteResult, UpdateResult } from "typeorm";
import ProductEntity from "../../database/product.entity";

class ProductService extends BaseService<ProductEntity> {
  constructor() {
    super(ProductEntity);
  }
  /**
   * getAllProducts
   */
  public async getAllProducts(): Promise<ProductEntity[]> {
    logger.info(`🚀 ~ ${ProductService.name} ~ getAllProducts`);
    const products = await (await this.useRepository).find();
    return products;
  }
  /**
   * getProductById
   */
  public async getProductById(productId: string): Promise<ProductEntity | null> {
    logger.info(`🚀 ~ ${ProductService.name} ~ getProductById ~ ${productId}`);
    const product = await (await this.useRepository).findOneBy({ id: productId });
    !product &&
      logger.error(`🚀 ~ ${ProductService.name} ~ getProductById ~ USER NOT FOUND`);
    return product;
  }
  /**
   * createProduct
   */
  public async createProduct(productData: ProductDTO): Promise<ProductEntity | null> {
    logger.info(`🚀 ~ ${ProductService.name} ~ createProduct`);
    const product = (await this.useRepository).create(productData);
    return await (await this.useRepository).save(product);
  }
  /**
   * updateProductById
   */
  public async updateProductById(
    productId: string,
    productData: ProductDTO
  ): Promise<UpdateResult> {
    logger.info(`🚀 ~ ${ProductService.name} ~ updateProductById ~ ${productId}`);
    const product = await (await this.useRepository).findOneBy({ id: productId });
    !product &&
      logger.error(
        `🚀 ~ ${ProductService.name} ~ updateProductById ~ PRODUCT NOT FOUND`
      );
    return await (await this.useRepository).update(productId, { ...productData });
  }
  /**
   * deleteProductById
   */
  public async deleteProductById(productId: string): Promise<DeleteResult> {
    logger.info(`🚀 ~ ${ProductService.name} ~ deleteProductById ~ ${productId}`);
    const product = await (await this.useRepository).findOneBy({ id: productId });
    !product &&
      logger.error(
        `🚀 ~ ${ProductService.name} ~ daleteProductById ~ PRODUCT NOT FOUND`
      );
    return await (await this.useRepository).delete({ id: productId });
  }
}

export default ProductService;