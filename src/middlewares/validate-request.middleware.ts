import type { NextFunction, Request, Response } from 'express-serve-static-core';
import { StatusCodes } from 'http-status-codes';
import { ZodError, type ZodSchema } from 'zod';
import { handleServiceResponse } from '../utils/service-response.util';
import { ResponseStatus, ServiceResponse } from '../models/service-response.model';

/**
 * Middleware function to validate the request based on a provided Zod schema.
 *
 * @param {ZodSchema} schema - The Zod schema to validate the request against.
 * @return {(req: Request, res: Response, next: NextFunction) => Promise<void>} - The middleware function that validates the request and calls the next middleware or handles the error.
 */
export function validateRequestMiddleware(
  schema: ZodSchema
): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  return async (req, res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = `Invalid input: ${error.errors.map((e) => e.message).join(', ')}`;

        handleServiceResponse(
          new ServiceResponse(ResponseStatus.FAILED, errorMessage, null, StatusCodes.BAD_REQUEST),
          res
        );
      } else {
        handleServiceResponse(
          new ServiceResponse(ResponseStatus.FAILED, 'Internal Server Error', null, StatusCodes.INTERNAL_SERVER_ERROR),
          res
        );
      }
    }
  };
}
