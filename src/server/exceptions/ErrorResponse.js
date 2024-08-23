import { NextResponse } from "next/server";

export class ErrorResponse {
  constructor(statusCode, errorMessage, details) {
    console.log("Error ErrorResponse", statusCode, errorMessage);
    return new NextResponse(statusCode, errorMessage, details);
  }
}
