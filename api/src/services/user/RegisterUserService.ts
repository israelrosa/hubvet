import User from 'models/User';
import { getManager, EntityManager } from 'typeorm';
import log from 'utils';
import bcrypt from 'bcrypt';
import ErrorHandler from 'utils/ErrorHandler';
import ERROR from 'utils/Errors';

interface RegisterUserData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export default class RegisterUserService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec({
    first_name,
    last_name,
    email,
    password,
  }: RegisterUserData): Promise<User> {
    const isEmailInUse = await this.entityManager.findOne(User, {
      where: { email },
    });

    if (isEmailInUse) {
      throw new ErrorHandler(ERROR.USER_EMAIL_IN_USE);
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await this.entityManager.create(User, {
      email,
      first_name,
      last_name,
      password: hash,
    });

    const result = await this.entityManager.save(user);

    log.info(`User ${result.id} created with success!`);

    return result;
  }
}
