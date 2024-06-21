import type { GeolocationResponse } from '../interfaces/geolocation-response.interface';

export abstract class AbstractGeolocationLookupService {
  public abstract BASE_API_URL: string;

  public abstract getGeolocationByIp(ip: string): Promise<GeolocationResponse>;
}
