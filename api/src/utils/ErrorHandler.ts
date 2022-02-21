import { NextFunction, Request, Response } from 'express';
import log from 'utils';

interface ErrorParams {
  id: string;
  message: string;
  status_code: number;
}
export default class ErrorHandler {
  public readonly id: string;

  public readonly message: string;

  public readonly statusCode: number;

  constructor({ id, message, status_code = 400 }: ErrorParams) {
    this.id = id;
    this.message = message;
    this.statusCode = status_code;
  }
}

export function errorMiddleware(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response {
  if (error instanceof ErrorHandler) {
    log.error(error.message);
    return response.status(error.statusCode).json({
      status: error.statusCode,
      id: error.id,
      message: error.message,
    });
  }

  log.error(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
}
