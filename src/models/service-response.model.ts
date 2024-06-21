export enum ResponseStatus {
  Success,
  Failed,
}

export class ServiceResponse<T = null> {
  success: boolean;
  message: string;
  responseObject: T;
  statusCode: number;
  stack?: string;

  constructor(status: ResponseStatus, message: string, responseObject: T, statusCode: number, stack?: string) {
    this.success = status === ResponseStatus.Success;
    this.message = message;
    this.responseObject = responseObject;
    this.statusCode = statusCode;

    if (status === ResponseStatus.Failed) {
      this.stack = stack;
    }
  }
}
