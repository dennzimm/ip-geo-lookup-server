export enum ResponseStatus {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

/**
 * Represents a response from a service.
 * @template T The type of the response object. Defaults to `null`.
 */
export class ServiceResponse<T = null> {
  /**
   * Indicates if the response was successful.
   */
  success: boolean;

  /**
   * The message associated with the response.
   */
  message: string;

  /**
   * The response object.
   */
  responseObject: T;

  /**
   * The HTTP status code of the response.
   */
  statusCode: number;

  /**
   * The stack trace (if available) of any errors that occurred during the request.
   */
  stack?: string;

  /**
   * Creates a new instance of the [ServiceResponse](cci:2:///Users/zsd/Development/personal/final/ip-geo-lookup/ip-geo-lookup-server/src/models/service-response.model.ts:5:0-22:1) class.
   * @param status The status of the response.
   * @param message The message associated with the response.
   * @param responseObject The response object.
   * @param statusCode The HTTP status code of the response.
   * @param stack The stack trace (if available) of any errors that occurred during the request.
   */
  constructor(status: ResponseStatus, message: string, responseObject: T, statusCode: number, stack?: string) {
    this.success = status === ResponseStatus.SUCCESS;
    this.message = message;
    this.responseObject = responseObject;
    this.statusCode = statusCode;

    if (status === ResponseStatus.FAILED) {
      this.stack = stack;
    }
  }
}
