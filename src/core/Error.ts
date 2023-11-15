interface ErrorObject {
  message: string;
  validation?: Array<{ [key: string]: string | number }>;
  location?: Array<{ [key: string]: string | number }>;
}

class BaseError {
  constructor(
    public message: string,
    public error: ErrorObject[],
  ) {}
}

export class HttpError extends BaseError {
  constructor(
    public message: string,
    public error: ErrorObject[],
  ) {
    super(message, error);
  }
}

export class ApiError extends BaseError {
  constructor(
    public message: string,
    public error: ErrorObject[],
  ) {
    super(message, error);
  }
}

export class ValidationError extends BaseError {
  constructor(
    public message: string,
    public error: ErrorObject[],
  ) {
    super(message, error);
  }
}
