import { BaseService } from "../base.service";
import { logger } from "../../utils/logger";
import { OrderDTO } from "./dto/order.dto";
import { DeleteResult, UpdateResult } from "typeorm";
import OrderEntity from "../../database/order.entity";

class OrderService extends BaseService<OrderEntity> {
  constructor() {
    super(OrderEntity);
  }
  /**
   * getAllOrders
   */
  public async getAllOrders(): Promise<OrderEntity[]> {
    logger.info(`🚀 ~ ${OrderService.name} ~ getAllOrders`);
    const orders = await (await this.useRepository).find();
    return orders;
  }
  /**
   * getOrderById
   */
  public async getOrderById(orderId: string): Promise<OrderEntity | null> {
    logger.info(`🚀 ~ ${OrderService.name} ~ getOrderById ~ ${orderId}`);
    const order = await (await this.useRepository).findOneBy({ id: orderId });
    !order &&
      logger.error(`🚀 ~ ${OrderService.name} ~ getOrderById ~ USER NOT FOUND`);
    return order;
  }
  /**
   * createOrder
   */
  public async createOrder(orderData: OrderDTO): Promise<OrderEntity | null> {
    logger.info(`🚀 ~ ${OrderService.name} ~ createOrder`);
    const order = (await this.useRepository).create(orderData);
    return await (await this.useRepository).save(order);
  }
  /**
   * updateOrderById
   */
  public async updateOrderById(
    orderId: string,
    orderData: OrderDTO
  ): Promise<UpdateResult> {
    logger.info(`🚀 ~ ${OrderService.name} ~ updateOrderById ~ ${orderId}`);
    const order = await (await this.useRepository).findOneBy({ id: orderId });
    !order &&
      logger.error(
        `🚀 ~ ${OrderService.name} ~ updateOrderById ~ ORDER NOT FOUND`
      );
    return await (await this.useRepository).update(orderId, { ...orderData });
  }
  /**
   * deleteOrderById
   */
  public async deleteOrderById(orderId: string): Promise<DeleteResult> {
    logger.info(`🚀 ~ ${OrderService.name} ~ deleteOrderById ~ ${orderId}`);
    const order = await (await this.useRepository).findOneBy({ id: orderId });
    !order &&
      logger.error(
        `🚀 ~ ${OrderService.name} ~ daleteOrderById ~ ORDER NOT FOUND`
      );
    return await (await this.useRepository).delete({ id: orderId });
  }
}

export default OrderService;