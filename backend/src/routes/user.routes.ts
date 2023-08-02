import { Router } from "express";
import UserController from "../services/user/user.controller";
import { BaseRoute } from "./base.route";
import { ValidateDTOMiddleware } from "../middlewares/validateDTO.middleware";
import { UserDTO } from "../services/user/dto/user.dto";

class userRoute extends BaseRoute<UserController, ValidateDTOMiddleware> {
  public path = "/users";
  public router = Router();
  public userController = new UserController();

  constructor() {
    super(UserController, ValidateDTOMiddleware);
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    this.router.get(`${this.path}`, this.userController.getAllUsers);
    this.router.get(`${this.path}/:id`, this.userController.getUserById);
    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, UserDTO)],
      this.userController.createUser
    );
    this.router.put(`${this.path}/:id`, this.userController.updateUserById);
    this.router.delete(`${this.path}/:id`, this.userController.deleteUserById);
  }
}

export default userRoute;
