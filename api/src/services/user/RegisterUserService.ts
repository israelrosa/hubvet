import User from 'models/User';
import { getManager, EntityManager } from 'typeorm';
import log from 'utils';
import ErrorHandler from 'utils/ErrorHandler';
import Errors from 'utils/Errors';

interface RegisterUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default class RegisterUserService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec(data: RegisterUserData): Promise<User> {
    const isEmailInUse = await this.entityManager.findOne(User, {
      where: { email: data.email },
    });

    if (isEmailInUse) {
      throw new ErrorHandler(Errors.USER_EMAIL_IN_USE);
    }

    const user = await this.entityManager.create(User, data);
    const result = await this.entityManager.save(user);

    log.info(`User ${result.id} created with success!`);

    return result;
  }
}
