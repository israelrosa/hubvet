import CoatType from 'models/CoatType';
import { getManager, EntityManager } from 'typeorm';

export default class FindOneCoatTypeService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec(coat_type_id: string): Promise<CoatType | undefined> {
    const coatType = await this.entityManager.findOne(CoatType, coat_type_id);

    return coatType;
  }
}
