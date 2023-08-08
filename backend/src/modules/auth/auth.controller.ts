import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import UserEntity from "../../database/entities/user.entity";
import { HttpResponse } from "../../utils/http-response";
import { logger } from "../../utils/logger";

export class AuthController extends AuthService {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {
    super();
  }

  /**
   * login
   */
  public async login(req: Request, res: Response) {
    try {
      const user = req.user as UserEntity;
      const encode = await this.generateJWT(user);
      if (!encode.user) {
        return this.httpResponse.Unauthorized(res, "Unauthorized");
      }
      res.header("Content-type", "Application/json");
      res.cookie("accessToken", encode.accessToken, {
        maxAge: 2 * 60 * 60 * 1000,
      });
      res.write(JSON.stringify(encode));
      res.end();
    } catch (error) {
      logger.error(`🚀 ~ ${AuthController.name} ~ login ~ ${error}`);
      return this.httpResponse.InternalServerError(res, error);
    }
  }
}
