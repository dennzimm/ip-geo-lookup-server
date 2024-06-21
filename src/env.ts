import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    PORT: z.coerce.number().default(1337),
    COMMON_RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(100), // Limit each IP to 100 requests per `window`
    COMMON_RATE_LIMIT_WINDOW_MS: z.coerce.number().default(15 * 60 * 1000), // 15 minutes
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});

export const isDevelopment = env.NODE_ENV === "development";
export const isTest = env.NODE_ENV === "test";
export const isProduction = env.NODE_ENV === "production";
