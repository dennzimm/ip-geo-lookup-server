import type {
  NextFunction,
  Request,
  Response,
} from "express-serve-static-core";
import { StatusCodes } from "http-status-codes";
import { isProduction } from "../env";
import {
  ResponseStatus,
  ServiceResponse,
} from "../models/service-response.model";
import { handleServiceResponse } from "../utils/service-response.util";

export function errorHandlerMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const statusCode =
    res.statusCode !== StatusCodes.OK
      ? res.statusCode
      : StatusCodes.INTERNAL_SERVER_ERROR;

  handleServiceResponse(
    new ServiceResponse(
      ResponseStatus.Failed,
      err.message,
      null,
      statusCode,
      isProduction ? undefined : err.stack
    ),
    res
  );
}
