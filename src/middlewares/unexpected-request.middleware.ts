import type {
  NextFunction,
  Request,
  Response,
} from "express-serve-static-core";
import { StatusCodes } from "http-status-codes";

export function unexpectedRequestMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.status(StatusCodes.NOT_FOUND);

  const error = new Error(`Not Found - ${req.originalUrl}`);

  next(error);
}
