import { logger } from "../utils/logger";

class UserService {
  constructor() {}

  /**
   * getAllUsers
   */
  public async getAllUsers() {
    logger.info(`🚀 ~ ${UserService.name} ~ getAllUsers`);
    const users = [
      {
        id: 1,
        first_name: "Ramiro",
        last_name: "Guillen",
        email: "ramirojguillen@gmail.com",
      },
    ];
    return users;
  }
  /**
   * getUserById
   */
  public async getUserById(userId: string) {
    logger.info(`🚀 ~ ${UserService.name} ~ getUserById ~ ${userId}`);
    const user = {
      id: userId,
      first_name: "Ramiro",
      last_name: "Guillen",
      email: "ramirojguillen@gmail.com",
    };
    return user;
  }
  /**
   * createUser
   */
  public async createUser(userData: any) {
    logger.info(`🚀 ~ ${UserService.name} ~ createUser`);
    const user = { ...userData, id: 2 };
    return user;
  }
  /**
   * updateUserById
   */
  public async updateUserById(userId: string, userData: any) {
    logger.info(
      `🚀 ~ ${UserService.name} ~ updateUserById ~ ${userId}`
    );
    const user = { ...userData, id: userId };
    return user;
  }
  /**
   * deleteUserById
   */
  public async deleteUserById(userId: string) {
    logger.info(`🚀 ~ ${UserService.name} ~ deleteUserById ~ ${userId}`);
    const user = {
      id: userId,
      first_name: "Ramiro",
      last_name: "Guillen",
      email: "ramirojguillen@gmail.com",
    };
    return user;
  }
}

export default UserService;
