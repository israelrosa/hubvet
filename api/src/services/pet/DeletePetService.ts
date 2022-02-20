import { getManager, EntityManager } from 'typeorm';
import ErrorHandler from 'utils/ErrorHandler';
import ERROR from 'utils/Errors';
import Pet from 'models/Pet';
import log from 'utils';

interface DeletePetParams {
  pet_id: string;
  user_id: string;
}

export default class DeletePetService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec({ pet_id, user_id }: DeletePetParams): Promise<void> {
    const pet = await this.entityManager.findOne(Pet, pet_id);

    if (!pet) {
      throw new ErrorHandler(ERROR.INVALID_PET);
    }
    if (pet?.user_id !== user_id) {
      throw new ErrorHandler(ERROR.USER_DOES_NOT_HAVE_PERMISSION);
    }

    try {
      await this.entityManager.delete(Pet, pet_id);
      log.info(`Pet ${pet_id} deleted with success!`);
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
