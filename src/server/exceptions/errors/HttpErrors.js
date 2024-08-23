const { default: ExceptionHandler } = require("../ExceptionHandler");

class DatabaseError extends ExceptionHandler {
  statusCode = 500;
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}
export { DatabaseError };
