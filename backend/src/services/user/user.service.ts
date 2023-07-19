import { BaseService } from "../base.service";
import { logger } from "../../utils/logger";
import UserEntity from "../../database/user.entity";
import { UserDTO } from "./dto/user.dto";

class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  /**
   * getAllUsers
   */
  public async getAllUsers(): Promise<UserEntity[]> {
    logger.info(`🚀 ~ ${UserService.name} ~ getAllUsers`);
    const users = await (await this.useRepository).find();
    return users;
  }
  /**
   * getUserById
   */
  public async getUserById(userId: string): Promise<UserEntity | null> {
    logger.info(`🚀 ~ ${UserService.name} ~ getUserById ~ ${userId}`);
    const user = await (await this.useRepository).findOneBy({ id: userId });
    !user &&
      logger.error(`🚀 ~ ${UserService.name} ~ getUserById ~ USER NOT FOUND`);
    return user;
  }
  /**
   * createUser
   */
  public async createUser(userData: UserDTO) {
    logger.info(`🚀 ~ ${UserService.name} ~ createUser`);
    const user = (await this.useRepository).create(userData);
    return await (await this.useRepository).save(user);
  }
  /**
   * updateUserById
   */
  public async updateUserById(userId: string, userData: UserDTO) {
    logger.info(`🚀 ~ ${UserService.name} ~ updateUserById ~ ${userId}`);
    const user = await (await this.useRepository).findOneBy({ id: userId });
    !user &&
      logger.error(
        `🚀 ~ ${UserService.name} ~ updateUserById ~ USER NOT FOUND`
      );
    return await (await this.useRepository).update(userId, { ...userData });
  }
  /**
   * deleteUserById
   */
  public async deleteUserById(userId: string) {
    logger.info(`🚀 ~ ${UserService.name} ~ deleteUserById ~ ${userId}`);
    const user = await (await this.useRepository).findOneBy({ id: userId });
    !user &&
      logger.error(
        `🚀 ~ ${UserService.name} ~ daleteUserById ~ USER NOT FOUND`
      );
    return await (await this.useRepository).delete({ id: userId });
  }
}

export default UserService;
