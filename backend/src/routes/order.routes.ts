import { Router } from "express";
import OrderController from "../services/order/order.controller";
import { BaseRoute } from "./base.route";
import { ValidateDTOMiddleware } from "../middlewares/validateDTO.middleware";
import { OrderDTO } from "../services/order/dto/order.dto";

class orderRoute extends BaseRoute<OrderController, ValidateDTOMiddleware> {
  public path = "/orders";
  public router = Router();
  public orderController = new OrderController();

  constructor() {
    super(OrderController, ValidateDTOMiddleware);
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    this.router.get(`${this.path}`, this.orderController.getAllOrders);
    this.router.get(`${this.path}/:id`, this.orderController.getOrderById);
    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, OrderDTO)],
      this.orderController.createOrder
    );
    this.router.put(`${this.path}/:id`, this.orderController.updateOrderById);
    this.router.delete(
      `${this.path}/:id`,
      this.orderController.deleteOrderById
    );
  }
}

export default orderRoute;
