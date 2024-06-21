import type { GeolocationResponse } from './interfaces/geolocation-response.interface';
import type { AbstractGeolocationLookupService } from './services/abstract-geolocation-lookup.service';

export class GeolocationService {
  constructor(private readonly geolocationLookupService: AbstractGeolocationLookupService) {}

  public async getGeolocationByIp(ip: string): Promise<GeolocationResponse> {
    return this.geolocationLookupService.getGeolocationByIp(ip);
  }
}
