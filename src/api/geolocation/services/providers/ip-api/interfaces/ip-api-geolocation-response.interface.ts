import type { IpApiGeolocationStatus } from "../enums/ip-api-geolocation-status.enum";

export interface IpApiGeolocationResponse {
  status: IpApiGeolocationStatus;
  /** included only when status is fail */
  message?: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}
