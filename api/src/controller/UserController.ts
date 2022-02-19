import { Request, Response } from 'express';
import RegisterUserService from 'services/user/RegisterUserService';

export default class UserController {
  async register(request: Request, response: Response) {
    const { firstName, lastName, email, password } = request.body;

    const registerUserService = new RegisterUserService();

    const user = await registerUserService.exec({
      firstName,
      lastName,
      email,
      password,
    });

    delete user.password;

    response.status(200).json(user);
  }
}
