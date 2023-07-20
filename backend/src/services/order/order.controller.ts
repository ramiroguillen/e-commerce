import { Request, Response } from "express";
import { logger } from "../../utils/logger";
import OrderService from "./order.service";

class OrderController {
  private readonly OrderService: OrderService = new OrderService();
  constructor() {}

  /**
   * getAllOrders
   */
  public getAllOrders = async (_req: Request, res: Response) => {
    logger.info(`🚀 ~ ${OrderController.name} ~ getAllOrders`);
    const orderResponse = await this.OrderService.getAllOrders();
    res.status(200).json({ orders: orderResponse });
  };
  /**
   * getOrderById
   */
  public getOrderById = async (req: Request, res: Response) => {
    const { id: orderId } = req.params;
    logger.info(`🚀 ~ ${OrderController.name} ~ getOrderById ~ ${orderId}`);
    const orderResponse = await this.OrderService.getOrderById(orderId);
    res.status(200).json({ order: orderResponse });
  };
  /**
   * createOrder
   */
  public createOrder = async (req: Request, res: Response) => {
    const { body: orderData } = req;
    logger.info(`🚀 ~ ${OrderController.name} ~ createOrder`);
    const orderResponse = await this.OrderService.createOrder(orderData);
    res.status(200).json({ order: orderResponse });
  };
  /**
   * updateOrder
   */
  public updateOrderById = async (req: Request, res: Response) => {
    const { id: orderId } = req.params;
    const { body: orderData } = req;
    logger.info(`🚀 ~ ${OrderController.name} ~ updateOrderById ~ ${orderId}`);
    const orderResponse = await this.OrderService.updateOrderById(
      orderId,
      orderData
    );
    res.status(200).json({ order: orderResponse });
  };
  /**
   * deleteOrder
   */
  public deleteOrderById = async (req: Request, res: Response) => {
    const { id: orderId } = req.params;
    logger.info(`🚀 ~ ${OrderController.name} ~ deleteOrderById ~ ${orderId}`);
    await this.OrderService.deleteOrderById(orderId);
    res.status(200).json({ message: `Order deleted` });
  };
}

export default OrderController;
