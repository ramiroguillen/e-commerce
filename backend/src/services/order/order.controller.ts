import { Request, Response } from "express";
import { logger } from "../../utils/logger";
import OrderService from "./order.service";
import { HttpResponse } from "../../shared/response/http.response";
import { DeleteResult, UpdateResult } from "typeorm";

class OrderController {
  constructor(
    private readonly orderService: OrderService = new OrderService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  /**
   * getAllOrders
   */
  public getAllOrders = async (_req: Request, res: Response) => {
    logger.info(`🚀 ~ ${OrderController.name} ~ getAllOrders`);
    try {
      const orderResponse = await this.orderService.getAllOrders();
      if (!orderResponse) {
        return this.httpResponse.NotFound(res, "No Orders Found");
      }
      return this.httpResponse.OK(res, orderResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * getOrderById
   */
  public getOrderById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${OrderController.name} ~ getOrderById`);
    const { id: orderId } = req.params;
    try {
      const orderResponse = await this.orderService.getOrderById(orderId);
      if (!orderResponse) {
        return this.httpResponse.NotFound(res, "Order Not Found");
      }
      return this.httpResponse.OK(res, orderResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * createOrder
   */
  public createOrder = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${OrderController.name} ~ createOrder`);
    const { body: orderData } = req;
    try {
      const orderResponse = await this.orderService.createOrder(orderData);
      return this.httpResponse.OK(res, orderResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * updateOrderById
   */
  public updateOrderById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${OrderController.name} ~ updateOrderById`);
    const { id: orderId } = req.params;
    const { body: orderData } = req;
    try {
      const orderResponse: UpdateResult =
        await this.orderService.updateOrderById(orderId, orderData);
      if (!orderResponse) {
        return this.httpResponse.NotFound(res, "Order Not Found");
      }
      if (!orderResponse.affected) {
        return this.httpResponse.InternalServerError(
          res,
          "Order can not be updated"
        );
      }
      return this.httpResponse.OK(res, orderResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * deleteOrderById
   */
  public deleteOrderById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${OrderController.name} ~ deleteOrderById`);
    const { id: orderId } = req.params;
    try {
      const orderResponse: DeleteResult =
        await this.orderService.deleteOrderById(orderId);
      if (!orderResponse) {
        return this.httpResponse.NotFound(res, "Order Not Found");
      }
      if (!orderResponse.affected) {
        return this.httpResponse.InternalServerError(
          res,
          "Order can not be deleted"
        );
      }
      return this.httpResponse.OK(res, orderResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
}

export default OrderController;
