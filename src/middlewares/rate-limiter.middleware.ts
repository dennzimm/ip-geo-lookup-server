import type { Request } from "express-serve-static-core";
import { rateLimit } from "express-rate-limit";
import { env } from "../env";

export const rateLimiterMiddleware = rateLimit({
  legacyHeaders: true,
  limit: env.COMMON_RATE_LIMIT_MAX_REQUESTS,
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  windowMs: env.COMMON_RATE_LIMIT_WINDOW_MS,
  keyGenerator: (req: Request) => req.ip as string,
});
