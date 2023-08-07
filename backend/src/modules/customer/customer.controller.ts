import { Request, Response } from "express";
import { logger } from "../../utils/logger";
import CustomerService from "./customer.service";
import { HttpResponse } from "../../shared/response/http.response";
import { DeleteResult, UpdateResult } from "typeorm";

class CustomerController {
  constructor(
    private readonly customerService: CustomerService = new CustomerService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  /**
   * getAllCustomers
   */
  public getAllCustomers = async (_req: Request, res: Response) => {
    logger.info(`🚀 ~ ${CustomerController.name} ~ getAllCustomers`);
    try {
      const customerResponse = await this.customerService.getAllCustomers();
      if (!customerResponse) {
        return this.httpResponse.NotFound(res, "No Customers Found");
      }
      return this.httpResponse.OK(res, customerResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * getCustomerById
   */
  public getCustomerById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${CustomerController.name} ~ getCustomerById`);
    const { id: customerId } = req.params;
    try {
      const customerResponse = await this.customerService.getCustomerById(
        customerId
      );
      if (!customerResponse) {
        return this.httpResponse.NotFound(res, "Customer Nor Found");
      }
      return this.httpResponse.OK(res, customerResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * createCustomer
   */
  public createCustomer = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${CustomerController.name} ~ createCustomer`);
    const { body: customerData } = req;
    try {
      const customerResponse = await this.customerService.createCustomer(
        customerData
      );
      return this.httpResponse.OK(res, customerResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * updateCustomer
   */
  public updateCustomerById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${CustomerController.name} ~ updateCustomerById`);
    const { id: customerId } = req.params;
    const { body: customerData } = req;
    try {
      const customerResponse: UpdateResult =
        await this.customerService.updateCustomerById(customerId, customerData);
      if (!customerResponse) {
        return this.httpResponse.NotFound(res, "Customer Not Found");
      }
      if (!customerResponse.affected) {
        return this.httpResponse.InternalServerError(
          res,
          "Customer can not be updated"
        );
      }
      return this.httpResponse.OK(res, customerResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * deleteCustomer
   */
  public deleteCustomerById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${CustomerController.name} ~ deleteCustomerById`);
    const { id: customerId } = req.params;
    try {
      const customerResponse: DeleteResult =
        await this.customerService.deleteCustomerById(customerId);
      if (!customerResponse) {
        return this.httpResponse.NotFound(res, "Customer Not Found");
      }
      if (!customerResponse.affected) {
        return this.httpResponse.InternalServerError(
          res,
          "Customer can not be deleted"
        );
      }
      return this.httpResponse.OK(res, customerResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
}

export default CustomerController;
