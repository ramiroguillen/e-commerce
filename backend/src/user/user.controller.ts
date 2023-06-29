<<<<<<< HEAD
import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import UserService from './user.service';
=======
import { Request, Response } from "express";
import { logger } from "../utils/logger";
>>>>>>> parent of 603a436... user service

class UserController {
  constructor() {}

  /**
   * getAllUsers
   */
  public getAllUsers = async (_req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ getAllUsers`);
<<<<<<< HEAD
    const userResponse = await this.UserService.getAllUsers();
    res.status(200).json({ message: 'Get All Users', users: userResponse });
=======
    res.status(200).json({ message: "Get All Users" });
>>>>>>> parent of 603a436... user service
  };
  /**
   * getUserById
   */
  public getUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
<<<<<<< HEAD
    logger.info(`🚀 ~ ${UserController.name} ~ getUserById ~ ${userId}`);
    const userResponse = await this.UserService.getUserById(userId);
    res.status(200).json({ message: `Get User: ${userId}`, user: userResponse });
=======
    logger.info(`🚀 ~ ${UserController.name} ~ getUserById ${userId}`);
    res.status(200).json({ message: `Get User: ${userId}` });
>>>>>>> parent of 603a436... user service
  };
  /**
   * createUser
   */
  public createUser = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ createUser`);
<<<<<<< HEAD
    const userResponse = await this.UserService.createUser(userData);
    res.status(200).json({ message: 'User Created', user: userResponse });
=======
    const { body: user } = req;
    res.status(200).json({ message: `User Created ${user} ` });
>>>>>>> parent of 603a436... user service
  };
  /**
   * updateUser
   */
  public updateUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
<<<<<<< HEAD
    const { body: userData } = req;
    logger.info(`🚀 ~ ${UserController.name} ~ updateUserById ~ ${userId}`);
    const userResponse = await this.UserService.updateUserById(userId, userData);
    res.status(200).json({ message: `User Updated: ${userId}`, user: userResponse });
=======
    const { body: user } = req;
    logger.info(
      `🚀 ~ ${UserController.name} ~ updateUserById ${userId} ~ ${user}`
    );
    res.status(200).json({ message: `User Updated: ${userId} ~ ${user}` });
>>>>>>> parent of 603a436... user service
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
