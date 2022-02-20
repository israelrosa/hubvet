import CoatSize from 'models/CoatSize';
import { getManager, EntityManager } from 'typeorm';

export default class FindOneCoatSizeService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec(coat_size_id: string): Promise<CoatSize | undefined> {
    const coatSize = await this.entityManager.findOne(CoatSize, coat_size_id);

    return coatSize;
  }
}
