import axios from "axios";
import type { GeolocationResponse } from "../../../interfaces/geolocation-response.interface";
import { AbstractGeolocationLookupService } from "../../abstract-geolocation-lookup.service";
import type { IpApiGeolocationResponse } from "./interfaces/ip-api-geolocation-response.interface";

export class IpApiProviderService extends AbstractGeolocationLookupService {
  public readonly BASE_API_URL = "http://ip-api.com/json";

  private static mapToGeolocationResponse({
    country,
    regionName,
    city,
    zip,
    lat,
    lon,
  }: IpApiGeolocationResponse) {
    return {
      country,
      regionName,
      city,
      zip,
      lat,
      lon,
    };
  }

  public async getGeolocationByIp(ip: string): Promise<GeolocationResponse> {
    const response = await this.fetchGeolocation(ip);

    return IpApiProviderService.mapToGeolocationResponse(response);
  }

  /**
   * Fetches the geolocation information for the given query.
   *
   * @param {string} query - The query can be a single IPv4/IPv6 address or a domain name.
   * @return {Promise<IpApiGeolocationResponse>} A Promise that resolves to the geolocation information.
   */
  private async fetchGeolocation(
    query: string
  ): Promise<IpApiGeolocationResponse> {
    const response = await axios.get<IpApiGeolocationResponse>(
      `${this.BASE_API_URL}/${query}`
    );

    const { status, message, query: responseQuery } = response.data;

    if (status === "fail") {
      throw new Error(
        `Failed to fetch geolocation: ${message} (query: ${responseQuery})`
      );
    }

    return response.data;
  }
}
