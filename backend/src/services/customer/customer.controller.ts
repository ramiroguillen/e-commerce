import { Request, Response } from "express";
import { logger } from "../../utils/logger";
import CustomerService from "./customer.service";

class CustomerController {
    private readonly CustomerService: CustomerService = new CustomerService();
    constructor() {}
  
    /**
     * getAllCustomers
     */
    public getAllCustomers = async (_req: Request, res: Response) => {
      logger.info(`🚀 ~ ${CustomerController.name} ~ getAllCustomers`);
      const customerResponse = await this.CustomerService.getAllCustomers();
      res.status(200).json({ customers: customerResponse });
    };
    /**
     * getCustomerById
     */
    public getCustomerById = async (req: Request, res: Response) => {
      const { id: customerId } = req.params;
      logger.info(`🚀 ~ ${CustomerController.name} ~ getCustomerById ~ ${customerId}`);
      const customerResponse = await this.CustomerService.getCustomerById(customerId);
      res
        .status(200)
        .json({ customer: customerResponse });
    };
    /**
     * createCustomer
     */
    public createCustomer = async (req: Request, res: Response) => {
      const { body: customerData } = req;
      logger.info(`🚀 ~ ${CustomerController.name} ~ createCustomer`);
      const customerResponse = await this.CustomerService.createCustomer(customerData);
      res.status(200).json({ customer: customerResponse });
    };
    /**
     * updateCustomer
     */
    public updateCustomerById = async (req: Request, res: Response) => {
      const { id: customerId } = req.params;
      const { body: customerData } = req;
      logger.info(
        `🚀 ~ ${CustomerController.name} ~ updateCustomerById ~ ${customerId}`
      );
      const customerResponse = await this.CustomerService.updateCustomerById(
        customerId,
        customerData
      );
      res
        .status(200)
        .json({ customer: customerResponse });
    };
    /**
     * deleteCustomer
     */
    public deleteCustomerById = async (req: Request, res: Response) => {
      const { id: customerId } = req.params;
      logger.info(`🚀 ~ ${CustomerController.name} ~ deleteCustomerById ~ ${customerId}`);
      await this.CustomerService.deleteCustomerById(customerId);
      res.status(200).json({ message: `Customer deleted`});
    };
  }
  
  export default CustomerController;
  