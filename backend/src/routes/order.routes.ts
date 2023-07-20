import { Router } from "express";
import { IRoutes } from "../interfaces/route.interface";
import OrderController from "../services/order/order.controller";

class orderRoute implements IRoutes {
  public path = "/orders";
  public router = Router();
  public orderController = new OrderController();

  constructor() {
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    this.router.get(`${this.path}`, this.orderController.getAllOrders);
    this.router.get(`${this.path}/:id`, this.orderController.getUserById);
    this.router.post(`${this.path}`, this.orderController.createUser);
    this.router.put(`${this.path}/:id`, this.orderController.updateOrderById);
    this.router.delete(`${this.path}/:id`, this.orderController.deleteOrderById);
  }
}

export default orderRoute;