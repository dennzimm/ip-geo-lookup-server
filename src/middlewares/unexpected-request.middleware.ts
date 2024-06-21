import type { NextFunction, Request, Response } from 'express-serve-static-core';
import { StatusCodes } from 'http-status-codes';

/**
 * Middleware function to handle unexpected requests by setting the response status to NOT_FOUND and passing an error with the request's original URL to the next middleware.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function in the middleware chain.
 * @return {void} This function does not return anything directly but passes an error to the next middleware.
 */
export function unexpectedRequestMiddleware(req: Request, res: Response, next: NextFunction): void {
  res.status(StatusCodes.NOT_FOUND);

  const error = new Error(`Not Found - ${req.originalUrl}`);

  next(error);
}
