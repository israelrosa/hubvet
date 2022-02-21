import { getManager, EntityManager } from 'typeorm';
import ErrorHandler from 'utils/ErrorHandler';
import ERROR from 'utils/Errors';
import Pet from 'models/Pet';

interface UpdatePetData {
  id: string;
  name: string;
  initial_age: number;
  final_age: number;
  user_id: string;
}

export default class UpdatePetService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec({
    id,
    name,
    final_age,
    initial_age,
    user_id,
  }: UpdatePetData): Promise<Pet> {
    let pet = await this.entityManager.findOne(Pet, id);

    if (!pet) {
      throw new ErrorHandler(ERROR.INVALID_PET);
    }
    if (pet.user_id !== user_id) {
      throw new ErrorHandler(ERROR.USER_DOES_NOT_HAVE_PERMISSION);
    }

    pet = {
      ...pet,
      name: name || pet.name,
      initial_age: initial_age || pet.initial_age,
      final_age: final_age || pet.final_age,
    };

    await this.entityManager.update(Pet, id, pet);

    return pet;
  }
}
