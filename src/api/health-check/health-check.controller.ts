import type { Request, Response } from 'express-serve-static-core';
import { StatusCodes } from 'http-status-codes';
import { ResponseStatus, ServiceResponse } from '../../models/service-response.model';
import { handleServiceResponse } from '../../utils/service-response.util';

class HealthCheckController {
  public performHealthCheck = (_req: Request, res: Response): void => {
    handleServiceResponse(new ServiceResponse(ResponseStatus.Success, 'Service is healthy', null, StatusCodes.OK), res);
  };
}

export default new HealthCheckController();
