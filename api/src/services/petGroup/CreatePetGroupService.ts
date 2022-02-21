import { getManager, EntityManager } from 'typeorm';
import log from 'utils';
import ErrorHandler from 'utils/ErrorHandler';
import ERROR from 'utils/Errors';
import PetGroup from 'models/PetGroup';
import Breed from 'models/Breed';
import CoatSize from 'models/CoatSize';
import CoatType from 'models/CoatType';

interface PetGroupData {
  user_id: string;
  breed_id: string;
  coat_size_id: string;
  coat_type_id: string;
}

export default class CreatePetGroupService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec({
    breed_id,
    coat_size_id,
    coat_type_id,
    user_id,
  }: PetGroupData): Promise<PetGroup> {
    const isPetGroupAlreadyExist = await this.entityManager.findOne(PetGroup, {
      where: { breed_id, coat_size_id, coat_type_id, user_id },
    });

    if (isPetGroupAlreadyExist) {
      throw new ErrorHandler(ERROR.PET_GROUP_ALREADY_EXIST);
    }

    const isBreedExist = await this.entityManager.findOne(Breed, {
      where: { id: breed_id },
    });
    if (!isBreedExist) {
      throw new ErrorHandler(ERROR.INVALID_BREED);
    }

    const isCoatSizeExist = await this.entityManager.findOne(CoatSize, {
      where: { id: coat_size_id },
    });
    if (!isCoatSizeExist) {
      throw new ErrorHandler(ERROR.INVALID_COAT_SIZE);
    }

    const isCoatTypeExist = await this.entityManager.findOne(CoatType, {
      where: { id: coat_type_id },
    });
    if (!isCoatTypeExist) {
      throw new ErrorHandler(ERROR.INVALID_COAT_TYPE);
    }

    const petGroup = await this.entityManager.create(PetGroup, {
      breed_id,
      coat_size_id,
      coat_type_id,
      user_id,
      specie_id: isBreedExist.specie_id,
    });

    const result = await this.entityManager.save(petGroup);

    log.info(`Pet group ${result.id} created with success!`);

    return result;
  }
}
