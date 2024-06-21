import type { Response } from 'express-serve-static-core';
import type { ServiceResponse } from '../models/service-response.model';

/**
 * Handles the service response by setting the status code and sending the response.
 *
 * @param {ServiceResponse<T>} serviceResponse - The service response to handle.
 * @param {Response} response - The response object to modify.
 * @return {Response<ServiceResponse<T>>} The modified response object.
 */
export const handleServiceResponse = <T = unknown>(
  serviceResponse: ServiceResponse<T>,
  response: Response
): Response<ServiceResponse<T>> => {
  return response.status(serviceResponse.statusCode).send(serviceResponse);
};
