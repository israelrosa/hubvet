import { getManager, EntityManager } from 'typeorm';
import Specie from 'models/Specie';

export default class FindAllSpeciesService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec(): Promise<Specie[]> {
    const species = await this.entityManager.find(Specie);

    return species;
  }
}
