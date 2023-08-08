import { NextFunction, Request, Response } from "express";
import passport from "passport";
import UserEntity from "../database/entities/user.entity";
import { RoleType } from "../modules/user/type/user.type";
import { HttpResponse } from "../utils/http-response";

export class ValidateAuth {
  constructor(private readonly httpResponse: HttpResponse = new HttpResponse()) {}

  /**
   * passAuth
   */
  public passAuth(type: string) {
    return passport.authenticate(type, { session: false });
  }
  /**
   * checkAdminRole
   */
  public checkAdminRole(req: Request, res: Response, next: NextFunction) {
    const user = req.user as UserEntity;
    if (user.role !== RoleType.ADMIN) {
      return this.httpResponse.Unauthorized(res, "Unauthorized");
    }
    next();
  }
}
