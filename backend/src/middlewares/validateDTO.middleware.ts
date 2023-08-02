import { Request, Response, NextFunction } from "express";
import { HttpResponse } from "../shared/response/http.response";
import { plainToInstance } from "class-transformer";
import { ValidationError, validate } from "class-validator";
import { sanitize } from "class-sanitizer";

export class ValidateDTOMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  validator(req: Request, res: Response, next: NextFunction, type: any) {
    const dtoObject = plainToInstance(type, req.body);
    validate(dtoObject).then((err): any => {
      if (err.length > 0) {
        const dtoErrors = err.map((error: ValidationError) =>
          (Object as any).values(error.constraints).join("")
        );
        return this.httpResponse.BadRequest(res, dtoErrors);
      } else {
        sanitize(dtoObject);
        req.body = dtoObject;
        next();
      }
    });
  }
}
    