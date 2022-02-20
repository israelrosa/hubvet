import CoatSize from 'models/CoatSize';
import { getManager, EntityManager } from 'typeorm';

export default class FindAllCoatSizeService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec(): Promise<CoatSize[]> {
    const coatSizes = await this.entityManager.find(CoatSize);

    return coatSizes;
  }
}
