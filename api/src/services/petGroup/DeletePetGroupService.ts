import { getManager, EntityManager } from 'typeorm';
import ErrorHandler from 'utils/ErrorHandler';
import ERROR from 'utils/Errors';
import PetGroup from 'models/PetGroup';
import log from 'utils';

interface DeletePetGroupParams {
  pet_group_id: string;
  user_id: string;
}

export default class DeletePetGroupService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec({ pet_group_id, user_id }: DeletePetGroupParams): Promise<void> {
    const petGroup = await this.entityManager.findOne(PetGroup, pet_group_id);

    if (!petGroup) {
      throw new ErrorHandler(ERROR.INVALID_PET_GROUP);
    }
    if (petGroup?.user_id !== user_id) {
      throw new ErrorHandler(ERROR.USER_DOES_NOT_HAVE_PERMISSION);
    }

    try {
      await this.entityManager.delete(PetGroup, pet_group_id);
      log.info(`Pet group ${pet_group_id} deleted with success!`);
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
