import { JWT_SECRET } from "../../config/config";
import UserEntity from "../../database/entities/user.entity";
import { PayloadToken } from "../../interfaces/auth.interface";
import { isValid } from "../../utils/crypt";
import UserService from "../user/user.service";
import * as jwt from "jsonwebtoken";

export class AuthService {
  constructor(
    private readonly userService: UserService = new UserService(),
    private readonly jwtInstance = jwt
  ) {}

  /**
   * validateUser
   */
  public async validateUser(
    email: string,
    password: string
  ): Promise<UserEntity | null> {
    const user = await this.userService.getUserByEmail(email);
    if (user && isValid(password, user.password)) {
      return user;
    }
    return null;
  }
  /**
   * signature
   */
  public signature(payload: PayloadToken, secret: any) {
    return this.jwtInstance.sign(payload, secret);
  }
  /**
   * generateJWT
   */
  public async generateJWT(
    user: UserEntity
  ): Promise<{ accessToken: string; user: UserEntity | null }> {
    const userCheck = await this.userService.getUserById(user.id);
    // if (userCheck) {
    //   userCheck.password = "UNAUTHORIZED";
    // }
    const payload: PayloadToken = {
      role: userCheck!.role,
      sub: userCheck!.id,
    };

    return {
      accessToken: this.signature(payload, JWT_SECRET),
      user: userCheck,
    };
  }
}
