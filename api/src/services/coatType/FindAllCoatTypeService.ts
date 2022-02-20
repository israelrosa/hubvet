import CoatType from 'models/CoatType';
import { getManager, EntityManager } from 'typeorm';

export default class FindAllCoatTypeService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec(): Promise<CoatType[]> {
    const coatTypes = await this.entityManager.find(CoatType);

    return coatTypes;
  }
}
