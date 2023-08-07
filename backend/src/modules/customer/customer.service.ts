import { DeleteResult, UpdateResult } from "typeorm";
import CustomerEntity from "../../database/entities/customer.entity";
import { logger } from "../../utils/logger";
import { BaseService } from "../base.service";
import { CustomerDTO } from "./dto/customer.dto";

class CustomerService extends BaseService<CustomerEntity> {
  constructor() {
    super(CustomerEntity);
  }
  /**
   * getAllCustomers
   */
  public async getAllCustomers(): Promise<CustomerEntity[]> {
    logger.info(`🚀 ~ ${CustomerService.name} ~ getAllCustomers`);
    const customers = await (await this.useRepository).find();
    return customers;
  }
  /**
   * getCustomerById
   */
  public async getCustomerById(customerId: string): Promise<CustomerEntity | null> {
    logger.info(`🚀 ~ ${CustomerService.name} ~ getCustomerById ~ ${customerId}`);
    const customer = await (await this.useRepository).findOneBy({ id: customerId });
    !customer &&
      logger.error(`🚀 ~ ${CustomerService.name} ~ getCustomerById ~ CUSTOMER NOT FOUND`);
    return customer;
  }
  /**
   * createCustomer
   */
  public async createCustomer(customerData: CustomerDTO): Promise<CustomerEntity | null> {
    logger.info(`🚀 ~ ${CustomerService.name} ~ createCustomer`);
    const customer = (await this.useRepository).create(customerData);
    return await (await this.useRepository).save(customer);
  }
  /**
   * updateCustomerById
   */
  public async updateCustomerById(
    customerId: string,
    customerData: CustomerDTO
  ): Promise<UpdateResult> {
    logger.info(`🚀 ~ ${CustomerService.name} ~ updateCustomerById ~ ${customerId}`);
    const customer = await (await this.useRepository).findOneBy({ id: customerId });
    !customer &&
      logger.error(
        `🚀 ~ ${CustomerService.name} ~ updateCustomerById ~ CUSTOMER NOT FOUND`
      );
    return await (await this.useRepository).update(customerId, { ...customerData });
  }
  /**
   * deleteCustomerById
   */
  public async deleteCustomerById(customerId: string): Promise<DeleteResult> {
    logger.info(`🚀 ~ ${CustomerService.name} ~ deleteCustomerById ~ ${customerId}`);
    const customer = await (await this.useRepository).findOneBy({ id: customerId });
    !customer &&
      logger.error(
        `🚀 ~ ${CustomerService.name} ~ deleteCustomerById ~ CUSTOMER NOT FOUND`
      );
    return await (await this.useRepository).delete({ id: customerId });
  }
}

export default CustomerService;
