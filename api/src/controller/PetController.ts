import { Request, Response } from 'express';
import CreatePetService from 'services/pet/CreatePetService';

export default class PetController {
  async create(request: Request, response: Response) {
    const { id } = request.user;
    const { final_age, initial_age, name, pet_group_id } = request.body;

    const createPetService = new CreatePetService();

    const pet = createPetService.exec({
      final_age,
      initial_age,
      name,
      pet_group_id,
      user_id: id,
    });

    return response.status(200).json(pet);
  }
}
