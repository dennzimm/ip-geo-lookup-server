import type { GeolocationResponse } from '../interfaces/geolocation-response.interface';

/**
 * Abstract class for geolocation lookup services.
 *
 * @abstract
 */
export abstract class AbstractGeolocationLookupService {
  /**
   * The base URL for the geolocation lookup service.
   *
   * @abstract
   * @type {string}
   */
  public abstract BASE_API_URL: string;

  /**
   * Retrieves the geolocation information for a given IP address.
   *
   * @abstract
   * @param {string} ip - The IP address to look up.
   * @return {Promise<GeolocationResponse>} A promise that resolves to the geolocation information.
   */
  public abstract getGeolocationByIp(ip: string): Promise<GeolocationResponse>;
}
