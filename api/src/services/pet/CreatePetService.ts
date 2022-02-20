import Pet from 'models/Pet';
import PetGroup from 'models/PetGroup';
import { getManager, EntityManager } from 'typeorm';
import log from 'utils';
import ErrorHandler from 'utils/ErrorHandler';
import ERROR from 'utils/Errors';

interface PetData {
  name: string;
  initial_age: number;
  final_age: number;
  pet_group_id: string;
  user_id: string;
}

export default class CreatePetService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec({
    final_age,
    initial_age,
    name,
    pet_group_id,
    user_id,
  }: PetData): Promise<Pet> {
    const petGroupBelongsToUser = await this.entityManager.findOne(
      PetGroup,
      pet_group_id,
    );

    if (!petGroupBelongsToUser || petGroupBelongsToUser.user_id !== user_id) {
      throw new ErrorHandler(ERROR.INVALID_PET_GROUP);
    }

    const petAlreadyExist = await this.entityManager.findOne(Pet, {
      where: { name, pet_group_id },
    });

    if (petAlreadyExist) {
      throw new ErrorHandler(ERROR.PET_ALREADY_EXIST);
    }

    if (initial_age > final_age) {
      throw new ErrorHandler(ERROR.INVALID_PET_AGE);
    }

    const pet = await this.entityManager.create(Pet, {
      final_age,
      name,
      pet_group_id,
      user_id,
      initial_age,
    });

    const result = await this.entityManager.save(pet);

    log.info(`Pet ${result.id} created with success!`);

    return result;
  }
}
