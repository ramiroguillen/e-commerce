import { Request, Response } from "express";
import { logger } from "../utils/logger";
import UserService from "./user.service";

class UserController {
  private readonly UserService: UserService = new UserService();
  constructor() {}

  /**
   * getAllUsers
   */
  public getAllUsers = async (_req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ getAllUsers`);
    const userResponse = await this.UserService.getAllUsers();
    res.status(200).json({ users: userResponse });
  };
  /**
   * getUserById
   */
  public getUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    logger.info(`🚀 ~ ${UserController.name} ~ getUserById ~ ${userId}`);
    const userResponse = await this.UserService.getUserById(userId);
    res
      .status(200)
      .json({ user: userResponse });
  };
  /**
   * createUser
   */
  public createUser = async (req: Request, res: Response) => {
    const { body: userData } = req;
    logger.info(`🚀 ~ ${UserController.name} ~ createUser`);
    const userResponse = await this.UserService.createUser(userData);
    res.status(200).json({ user: userResponse });
  };
  /**
   * updateUser
   */
  public updateUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    const { body: userData } = req;
    logger.info(
      `🚀 ~ ${UserController.name} ~ updateUserById ~ ${userId}`
    );
    const userResponse = await this.UserService.updateUserById(
      userId,
      userData
    );
    res
      .status(200)
      .json({ user: userResponse });
  };
  /**
   * deleteUser
   */
  public deleteUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    logger.info(`🚀 ~ ${UserController.name} ~ deleteUserById ~ ${userId}`);
    await this.UserService.deleteUserById(userId);
    res.status(200).json({ message: `User deleted`});
  };
}

export default UserController;
