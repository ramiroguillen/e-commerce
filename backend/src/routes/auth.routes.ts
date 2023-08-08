import { Router } from "express";
import { AuthController } from "../modules/auth/auth.controller";
import { BaseRoute } from "./base.route";
import { ValidateAuth } from "../middlewares/validateAuth.middleware";

export class AuthRoutes extends BaseRoute<AuthController, ValidateAuth> {
  public router = Router();
  public authController = new AuthController();
  constructor() {
    super(AuthController, ValidateAuth);
    this.initAuthRoutes();
  }
  /**
   * initAuthRoutes
   */
  public initAuthRoutes() {
    this.router.post(
      "/login",
      this.middleware.passAuth("local"),
      this.authController.login
    );
  }
}
