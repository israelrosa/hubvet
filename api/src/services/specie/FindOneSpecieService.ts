import { getManager, EntityManager } from 'typeorm';
import Specie from 'models/Specie';

export default class FindOneSpecieService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec(specie_id: string): Promise<Specie | undefined> {
    const specie = await this.entityManager.findOne(Specie, specie_id);

    return specie;
  }
}
