import { Request, Response } from 'express';
import DeletePetGroupService from 'services/petGroup/DeletePetGroupService';
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

  async delete(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { id: pet_group_id } = request.params;

    const deletePetGroupService = new DeletePetGroupService();

    await deletePetGroupService.exec({ pet_group_id, user_id });

    return response.status(200).json();
  }
}
