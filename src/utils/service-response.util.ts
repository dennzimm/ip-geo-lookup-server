import type { Response } from 'express-serve-static-core';
import type { ServiceResponse } from '../models/service-response.model';

export const handleServiceResponse = <T = unknown>(
  serviceResponse: ServiceResponse<T>,
  response: Response
): Response<ServiceResponse<T>> => {
  return response.status(serviceResponse.statusCode).send(serviceResponse);
};
