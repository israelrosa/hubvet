import Pet from 'models/Pet';
import { getManager, EntityManager } from 'typeorm';

interface UpdatePetParams {
  id: string;
  user_id: string;
}

export default class FindOnePetService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec({ id, user_id }: UpdatePetParams): Promise<Pet | undefined> {
    const pet = await this.entityManager.findOne(Pet, {
      where: { id, user_id },
    });

    return pet;
  }
}
