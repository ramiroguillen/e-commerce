import { Request, Response } from "express";
import { logger } from "../utils/logger";

class UserController {
  constructor() {}

  /**
   * getAllUsers
   */
  public getAllUsers = async (_req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ getAllUsers`);
    res.status(200).json({ message: "Get All Users" });
  };
  /**
   * getUserById
   */
  public getUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    logger.info(`🚀 ~ ${UserController.name} ~ getUserById ${userId}`);
    res.status(200).json({ message: `Get User: ${userId}` });
  };
  /**
   * createUser
   */
  public createUser = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ createUser`);
    const { body: user } = req;
    res.status(200).json({ message: `User Created ${user} ` });
  };
  /**
   * updateUser
   */
  public updateUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    const { body: user } = req;
    logger.info(
      `🚀 ~ ${UserController.name} ~ updateUserById ${userId} ~ ${user}`
    );
    res.status(200).json({ message: `User Updated: ${userId} ~ ${user}` });
  };
  /**
   * deleteUser
   */
  public deleteUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    logger.info(`🚀 ~ ${UserController.name} ~ deleteUserById ${userId}`);
    res.status(200).json({ message: `User Deleted: ${userId}` });
  };
}

export default UserController;
