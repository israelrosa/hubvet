import { Request, Response } from 'express';
import DeletePetGroupService from 'services/petGroup/DeletePetGroupService';
import CreatePetGroupService from 'services/petGroup/CreatePetGroupService';
import FindAllPetGroupsService from 'services/petGroup/FindAllPetGroupsService';

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

  async findPetGroups(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { limit, search, skip, sort_by, sort_order } = request.query;

    const findAllPetGroupsService = new FindAllPetGroupsService();

    const petGroups = await findAllPetGroupsService.exec({
      user_id,
      limit: Number(limit),
      search: String(search),
      skip: Number(skip),
      sort_by: String(sort_by),
      sort_order: String(sort_order).toUpperCase(),
    });

    return response.status(200).json(petGroups);
  }
}
