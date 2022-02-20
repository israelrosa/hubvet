import { getManager, EntityManager } from 'typeorm';
import Breed from 'models/Breed';

export default class FindAllBreedsService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec(specie_id?: string): Promise<Breed[]> {
    let breeds;
    if (specie_id) {
      breeds = await this.entityManager.find(Breed, {
        where: { specie_id },
      });
    } else {
      breeds = await this.entityManager.find(Breed);
    }

    return breeds;
  }
}
