import { Request, Response } from 'express';
import CreatePetService from 'services/pet/CreatePetService';
import DeletePetService from 'services/pet/DeletePetService';
import UpdatePetService from 'services/pet/UpdatePetService';

export default class PetController {
  async create(request: Request, response: Response) {
    const { id } = request.user;
    const { final_age, initial_age, name, pet_group_id } = request.body;

    const createPetService = new CreatePetService();

    const pet = await createPetService.exec({
      final_age,
      initial_age,
      name,
      pet_group_id,
      user_id: id,
    });

    return response.status(200).json(pet);
  }

  async delete(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { id: pet_id } = request.params;

    const deletePetService = new DeletePetService();

    await deletePetService.exec({ pet_id, user_id });

    return response.status(200).json();
  }

  async update(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { id } = request.params;
    const { final_age, initial_age, name } = request.body;

    const updatePetService = new UpdatePetService();

    const newPet = await updatePetService.exec({
      final_age,
      id,
      initial_age,
      name,
      user_id,
    });

    return response.status(200).json(newPet);
  }
}
