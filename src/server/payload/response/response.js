import { NextResponse } from "next/server";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Method": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
const internalServerErrorResponse = (message, details, cors = false) =>
  NextResponse.json(
    {
      code: "internal_server_error",
      message,
      details: details || {},
    },
    {
      status: 500,
      ...(cors && { headers: corsHeaders }),
    }
  );
const badRequestResponse = (message, details, cors = false) =>
  NextResponse.json(
    {
      code: "bad_request",
      message,
      details: details || {},
      status: 400,
    },
    {
      status: 400,
      ...(cors && { headers: corsHeaders }),
    }
  );

const successResponse = (data, cors = false) =>
  NextResponse.json(
    {
      
      data,
      statusCode:200,
    },
    {
      status: 200,
      ...(cors && { headers: corsHeaders }),
    }
  );
export const response = {
  internalServerErrorResponse,
  badRequestResponse,
  successResponse,
};
