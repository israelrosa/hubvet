import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import ERROR from 'utils/Errors';
import authConfig from '../configs/auth';
import ErrorHandler from '../utils/ErrorHandler';

interface ITokenPayload {
  userType: string;
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new ErrorHandler(ERROR.TOKEN_NOT_FOUND);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.secret);
    const { sub } = decoded as ITokenPayload;

    if (type && userType !== type) {
      throw new Error();
    }

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new ErrorHandler(ERROR.INVALID_TOKEN);
  }
}
