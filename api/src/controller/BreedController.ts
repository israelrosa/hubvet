import { Request, Response } from 'express';
import FindAllBreedsService from 'services/breed/FindAllBreedsService';
import FindOneBreedService from 'services/breed/FindOneBreedService';

export default class BreedController {
  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const findOneBreedService = new FindOneBreedService();

    const breed = await findOneBreedService.exec(id);

    return response.status(200).json(breed);
  }

  async findAll(request: Request, response: Response) {
    const { specie_id } = request.query;

    const findAllBreedsService = new FindAllBreedsService();

    const breeds = await findAllBreedsService.exec(specie_id);

    return response.status(200).json(breeds);
  }
}
