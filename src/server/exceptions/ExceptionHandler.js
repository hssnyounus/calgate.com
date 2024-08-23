class ExceptionHandler extends Error {
  constructor(message, statusCode, cause, method, url) {
    super(message);
    Object.setPrototypeOf(this, ExceptionHandler.prototype);
    this.name = ExceptionHandler.prototype.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    this.cause = cause;
    this.url = url;
    this.method = method;
    if (cause instanceof Error && cause.stack) {
      this.stack = cause.stack;
    }
    Error.captureStackTrace(this, this.constructor);
  }
  // static fromRequest(request, response) {
  //   return new ExceptionHandler({
  //     message: response.statusText,
  //     url: response.url,
  //     method: request.method,
  //     statusCode: response.statusCode,
  //   });
  // }
}

export default ExceptionHandler;
