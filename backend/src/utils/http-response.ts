import { Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export class HttpResponse {
  OK(res: Response, data: any) {
    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      statusMessage: ReasonPhrases.OK,
      data,
    });
  }
  BadRequest(res: Response, data: any) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      statusMessage: ReasonPhrases.BAD_REQUEST,
      data,
    });
  }
  NotFound(res: Response, data: any) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      statusMessage: ReasonPhrases.NOT_FOUND,
      data,
    });
  }
  Unauthorized(res: Response, data: any) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: StatusCodes.UNAUTHORIZED,
      statusMessage: ReasonPhrases.UNAUTHORIZED,
      data,
    });
  }
  Forbidden(res: Response, data: any) {
    return res.status(StatusCodes.FORBIDDEN).json({
      status: StatusCodes.FORBIDDEN,
      statusMessage: ReasonPhrases.FORBIDDEN,
      data,
    });
  }
  InternalServerError(res: Response, data: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
      data,
    });
  }
}