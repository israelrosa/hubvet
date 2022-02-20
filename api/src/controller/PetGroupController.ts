import { Request, Response } from 'express';
import CreatePetGroupService from 'services/petGroup/CreatePetGroupService';

export default class PetGroupController {
  async create(request: Request, response: Response) {
    const { id } = request.user;
    const { breed_id, coat_size_id, coat_type_id } = request.body;

    const createPetGroupService = new CreatePetGroupService();

    const petGroup = await createPetGroupService.exec({
      breed_id,
      coat_size_id,
      coat_type_id,
      user_id: id,
    });

    return response.status(200).json(petGroup);
  }
}
