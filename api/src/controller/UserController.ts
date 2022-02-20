import { Request, Response } from 'express';
import AuthenticateUserService from 'services/user/AuthenticateUserService';
import RegisterUserService from 'services/user/RegisterUserService';

export default class UserController {
  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const auth = await authenticateUserService.exec({ email, password });

    return response.status(200).json(auth);
  }

  async register(request: Request, response: Response) {
    const { first_name, last_name, email, password } = request.body;

    const registerUserService = new RegisterUserService();

    const user = await registerUserService.exec({
      first_name,
      last_name,
      email,
      password,
    });

    delete user.password;

    return response.status(200).json(user);
  }
}
