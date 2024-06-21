import type { Request, Response } from 'express-serve-static-core';

class WelcomeController {
  public welcomeApiUsers = (_req: Request, res: Response): void => {
    res.send(`
    <h1>Welcome to the IP Geolocation Service</h1>
    <p>Use the API endpoints to get geolocation information based on IP addresses.</p>
    <ul>
      <li><a href="/health-check">Health Check</a></li>
      <li><a href="/api/geolocation/:ip">Geolocation Lookup (replace :ip with an IP address)</a></li>
    </ul>
  `);
  };
}

export default new WelcomeController();
