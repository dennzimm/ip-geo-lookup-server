import type { Request, Response } from 'express-serve-static-core';
import { GeolocationService } from './geolocation.service';
import type { GeolocationRequestParams } from './schemas/geolocation-request.schema';
import { IpApiProviderService } from './services/providers/ip-api/ip-api-provider.service';
import { StatusCodes } from 'http-status-codes';
import type { NextFunction } from 'express';
import { ResponseStatus, ServiceResponse } from '../../models/service-response.model';
import { handleServiceResponse } from '../../utils/service-response.util';

class GeolocationController {
  private geolocationService: GeolocationService;

  constructor() {
    this.geolocationService = new GeolocationService(new IpApiProviderService());
  }

  public getGeolocationByIp = async (
    req: Request<GeolocationRequestParams>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const geolocationData = await this.geolocationService.getGeolocationByIp(req.params.ip);

      handleServiceResponse(
        new ServiceResponse(ResponseStatus.Success, 'Geolocation Found', geolocationData, StatusCodes.OK),
        res
      );
    } catch (error) {
      next(error);
    }
  };
}

export default new GeolocationController();
