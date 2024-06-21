import { Router } from "express";
import HealthCheckController from "./health-check.controller";

export const healthCheckRouter: Router = (() => {
  const router = Router();

  router.get("/", HealthCheckController.performHealthCheck);

  return router;
})();
