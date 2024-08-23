class CustomExceptionHandler extends Error {
  constructor(statusCode, message, name) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.name = name;
  }

  static validationError = (message) => {
    return new CustomExceptionHandler(400, message);
  };
  static invalidInputError = (message) => {
    return new CustomExceptionHandler(400, message);
  };
  static databaseError = (message) => {
    return new CustomExceptionHandler(500, message);
  };
  static internalServerError = (message) => {
    return new CustomExceptionHandler(500, message);
  };
}
export default CustomExceptionHandler;
