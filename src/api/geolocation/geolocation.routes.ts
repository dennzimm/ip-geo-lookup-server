import { Router } from "express";
import GeolocationController from "./geolocation.controller";

export const geolocationRouter: Router = (() => {
  const router = Router();

  router.get("/:ip", GeolocationController.getGeolocationByIp);

  return router;
})();
