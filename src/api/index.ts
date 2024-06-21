import { Router } from 'express';
import { geolocationRouter } from './geolocation/geolocation.routes';

export const apiRouter: Router = (() => {
  const router = Router();

  router.use('/v1/geolocation', geolocationRouter);

  return router;
})();
