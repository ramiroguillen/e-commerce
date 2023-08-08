import { Request, Response } from "express";
import { logger } from "../../utils/logger";
import UserService from "./user.service";
import { HttpResponse } from "../../utils/http-response";
import { DeleteResult, UpdateResult } from "typeorm";

class UserController {
  constructor(
    private readonly userService: UserService = new UserService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  /**
   * getAllUsers
   */
  public getAllUsers = async (_req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ getAllUsers`);
    try {
      const userResponse = await this.userService.getAllUsers();
      if (!userResponse) {
        return this.httpResponse.NotFound(res, "No Users Found");
      }
      return this.httpResponse.OK(res, userResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * getUserById
   */
  public getUserById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ getUserById`);
    const { id: userId } = req.params;
    try {
      const userResponse = await this.userService.getUserById(userId);
      if (!userResponse) {
        return this.httpResponse.NotFound(res, "User Not Found");
      }
      return this.httpResponse.OK(res, userResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * getUserByIdWithRel
   */
  public getUserByIdWithRel = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ getUserByIdWithRel`);
    const { id: userId } = req.params;
    try {
      const userResponse = await this.userService.getUserByIdWithRel(userId);
      if (!userResponse) {
        return this.httpResponse.NotFound(res, "User Not Found");
      }
      return this.httpResponse.OK(res, userResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * getUserByEmail
   */
  public getUserByEmail = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ getUserByEmail`);
    const { email: userEmail } = req.params;
    try {
      const userResponse = await this.userService.getUserByEmail(userEmail);
      if (!userResponse) {
        return this.httpResponse.NotFound(res, "User Not Found");
      }
      return this.httpResponse.OK(res, userResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * createUser
   */
  public createUser = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ createUser`);
    const { body: userData } = req;
    try {
      const userResponse = await this.userService.createUser(userData);
      return this.httpResponse.OK(res, userResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * updateUserById
   */
  public updateUserById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ updateUserById`);
    const { id: userId } = req.params;
    const { body: userData } = req;
    try {
      const userResponse: UpdateResult = await this.userService.updateUserById(
        userId,
        userData
      );
      if (!userResponse) {
        return this.httpResponse.NotFound(res, "User Not Found");
      }
      if (!userResponse.affected) {
        return this.httpResponse.InternalServerError(
          res,
          "User can not be updated"
        );
      }
      return this.httpResponse.OK(res, userResponse);
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
  /**
   * deleteUserById
   */
  public deleteUserById = async (req: Request, res: Response) => {
    logger.info(`🚀 ~ ${UserController.name} ~ deleteUserById`);
    const { id: userId } = req.params;
    try {
      const userResponse: DeleteResult = await this.userService.deleteUserById(
        userId
      );
      if (!userResponse) {
        return this.httpResponse.NotFound(res, "User Not Found");
      }
      if (!userResponse.affected) {
        return this.httpResponse.InternalServerError(
          res,
          "User can not be deleted"
        );
      }
      return this.httpResponse.OK(res, "User Deleted");
    } catch (error) {
      return this.httpResponse.InternalServerError(
        res,
        "Internal Server Error"
      );
    }
  };
}

export default UserController;
