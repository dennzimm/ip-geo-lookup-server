import { Router } from 'express';
import WelcomeController from './welcome.controller';

export const welcomeRouter: Router = (() => {
  const router = Router();

  router.get('/', WelcomeController.welcomeApiUsers);

  return router;
})();
