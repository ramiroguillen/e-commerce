import UserEntity from "../../../database/entities/user.entity";
import { usePassport } from "../../../utils/passport";
import { AuthService } from "../auth.service";
import { VerifyFunction, Strategy as LocalStrategy } from "passport-local";

export class LoginStrategy {
  constructor(private readonly authService: AuthService = new AuthService()) {}
  /**
   * validate
   */
  public async validate(
    email: string,
    password: string,
    done: any
  ): Promise<UserEntity> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      return done(null, false, { message: "Invalid email or password" });
    }
    return done(null, user);
  }

  get use() {
    return usePassport<LocalStrategy, Object, VerifyFunction>(
      "login",
      LocalStrategy,
      { usernameField: "email", passwordField: "password" },
      this.validate
    );
  }
}
