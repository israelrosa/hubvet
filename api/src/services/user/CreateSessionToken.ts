import { sign } from 'jsonwebtoken';
import authConfig from '../../configs/auth';

export default function CreateSessionToken(
  userId: string,
  expiresTime: string,
) {
  const token = sign({}, authConfig.secret, {
    subject: userId,
    expiresIn: `${expiresTime}s`,
  });

  const result = {
    access_token: token,
    token_type: 'Bearer',
    expires_in: expiresTime,
  };

  return result;
}
