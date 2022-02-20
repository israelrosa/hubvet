import { Request, Response } from 'express';
import FindAllSpeciesService from 'services/specie/FindAllSpeciesService';
import FindOneSpecieService from 'services/specie/FindOneSpecieService';

export default class SpecieController {
  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const findOneSpecieService = new FindOneSpecieService();

    const specie = await findOneSpecieService.exec(id);

    return response.status(200).json(specie);
  }

  async findAll(request: Request, response: Response) {
    const findAllSpeciesService = new FindAllSpeciesService();

    const species = await findAllSpeciesService.exec();

    return response.status(200).json(species);
  }
}
