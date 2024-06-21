import type { Request } from 'express-serve-static-core';
import { rateLimit } from 'express-rate-limit';
import { env } from '../env';

/**
 * Middleware function to rate limit requests based on the IP address.
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next function in the middleware chain.
 * @return {void} This function does not return anything.
 */
export const rateLimiterMiddleware = rateLimit({
  legacyHeaders: true,
  limit: env.COMMON_RATE_LIMIT_MAX_REQUESTS,
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  windowMs: env.COMMON_RATE_LIMIT_WINDOW_MS,
  keyGenerator: (req: Request) => req.ip as string,
});
