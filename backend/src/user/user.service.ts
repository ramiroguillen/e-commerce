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
        first_name: "Admin",
        last_name: "WB",
        email: "admin@wonderbotanics.com.ar",
      },
      {
        id: 2,
        first_name: "Dev",
        last_name: "User",
        email: "devuser@test.com",
      },
      {
        id: 3,
        first_name: "Cabra",
        last_name: "Parlante",
        email: "the_cabraparlante@gmail.com",
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
      first_name: "TEST",
      last_name: "TEST",
      email: "test@test.com",
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
    logger.info(`🚀 ~ ${UserService.name} ~ updateUserById ~ ${userId}`);
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
      first_name: "Dev",
      last_name: "User",
      email: "devuser@test.com",
    };
    return user;
  }
}

export default UserService;
