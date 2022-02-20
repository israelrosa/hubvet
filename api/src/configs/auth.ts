import {
  AUTH_SECRET,
  ACCESS_TOKEN_EXPIRATION_TIME,
} from '../utils/environments';

interface IAuthConfig {
  secret: string;
  accessTokenExpiresIn: string;
}

export default {
  secret: AUTH_SECRET,
  accessTokenExpiresIn: ACCESS_TOKEN_EXPIRATION_TIME,
} as IAuthConfig;
