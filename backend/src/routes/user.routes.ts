import { Router } from "express";
import { IRoutes } from "../interfaces/route.interface";
import UserController from "../services/user/user.controller";

class userRoute implements IRoutes {
  public path = "/users";
  public router = Router();
  public userController = new UserController();

  constructor() {
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    this.router.get(`${this.path}`, this.userController.getAllUsers);
    this.router.get(`${this.path}/:id`, this.userController.getUserById);
    this.router.post(`${this.path}`, this.userController.createUser);
    this.router.put(`${this.path}/:id`, this.userController.updateUserById);
    this.router.delete(`${this.path}/:id`, this.userController.deleteUserById);
  }
}

export default userRoute;
