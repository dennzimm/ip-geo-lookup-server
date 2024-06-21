import type { NextFunction, Request, Response } from 'express-serve-static-core';
import { StatusCodes } from 'http-status-codes';
import { isProduction } from '../env';
import { ResponseStatus, ServiceResponse } from '../models/service-response.model';
import { handleServiceResponse } from '../utils/service-response.util';

/**
 * Middleware function to handle errors in the Express application.
 *
 * @param {Error} err - The error object.
 * @param {Request} _req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} _next - The next function in the middleware chain.
 * @return {void} This function does not return anything.
 */
export function errorHandlerMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction): void {
  const statusCode = res.statusCode !== StatusCodes.OK ? res.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;

  handleServiceResponse(
    new ServiceResponse(ResponseStatus.FAILED, err.message, null, statusCode, isProduction ? undefined : err.stack),
    res
  );
}
