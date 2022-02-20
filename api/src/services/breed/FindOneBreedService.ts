import { getManager, EntityManager } from 'typeorm';
import Breed from 'models/Breed';

export default class FindOneBreedService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec(breed_id: string): Promise<Breed | undefined> {
    const breed = await this.entityManager.findOne(Breed, breed_id);

    return breed;
  }
}
