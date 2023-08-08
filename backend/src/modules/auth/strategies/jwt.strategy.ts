import { Strategy, StrategyOptions, ExtractJwt } from "passport-jwt";
import { AuthService } from "../auth.service";
import { PayloadToken } from "../../../interfaces/auth.interface";
import { usePassport } from "../../../utils/passport";
import { JWT_SECRET } from "../../../config/config";

export class JwtStrategy extends AuthService {
  constructor() {
    super();
  }
  /**
   * validate
   */
  public async validate(payload: PayloadToken, done: any) {
    return done(null, payload);
  }

  get use() {
    return usePassport<
      Strategy,
      StrategyOptions,
      (payload: PayloadToken, done: any) => Promise<PayloadToken>
    >(
      "jwt",
      Strategy,
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET,
      },
      this.validate
    );
  }
}
