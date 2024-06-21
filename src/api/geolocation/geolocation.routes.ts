import { Router } from "express";
import GeolocationController from "./geolocation.controller";
import { validateRequestMiddleware } from "../../middlewares/validate-request.middleware";
import { geolocationRequestSchema } from "./schemas/geolocation-request.schema";

export const geolocationRouter: Router = (() => {
  const router = Router();

  router.get(
    "/:ip",
    validateRequestMiddleware(geolocationRequestSchema),
    GeolocationController.getGeolocationByIp
  );

  return router;
})();
