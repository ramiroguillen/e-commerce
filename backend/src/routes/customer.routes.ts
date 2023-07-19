import { Router } from "express";
import { IRoutes } from "../interfaces/route.interface";
import CustomerController from "../services/customer/customer.controller";

class customerRoute implements IRoutes {
  public path = "/customers";
  public router = Router();
  public customerController = new CustomerController();

  constructor() {
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    this.router.get(`${this.path}`, this.customerController.getAllCustomers);
    this.router.get(
      `${this.path}/:id`,
      this.customerController.getCustomerById
    );
    this.router.post(`${this.path}`, this.customerController.createCustomer);
    this.router.put(
      `${this.path}/:id`,
      this.customerController.updateCustomerById
    );
    this.router.delete(
      `${this.path}/:id`,
      this.customerController.deleteCustomerById
    );
  }
}

export default customerRoute;
