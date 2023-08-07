import { Router } from "express";
import CustomerController from "../modules/customer/customer.controller";
import { BaseRoute } from "./base.route";
import { ValidateDTOMiddleware } from "../middlewares/validateDTO.middleware";
import { CustomerDTO } from "../modules/customer/dto/customer.dto";

class customerRoute extends BaseRoute<
  CustomerController,
  ValidateDTOMiddleware
> {
  public path = "/customers";
  public router = Router();
  public customerController = new CustomerController();

  constructor() {
    super(CustomerController, ValidateDTOMiddleware);
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
    this.router.post(
      `${this.path}`,
      (req, res, next) => [
        this.middleware.validator(req, res, next, CustomerDTO),
      ],
      this.customerController.createCustomer
    );
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
