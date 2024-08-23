import CustomExceptionHandler from "../common/CustomeExceptionHandler";
import { ErrorResponse } from "./ErrorResponse";

export const errorHandler = (err, req, res, next) => {
  if (error instanceof CustomExceptionHandler) {
    new ErrorResponse(error.statusCode, error.message, {});
  }
  return res
    .status(statusCode)
    .json(new ErrorResponse(500, "INTERNAL SERVER ERROR", {}));
};
