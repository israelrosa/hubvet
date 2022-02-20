import { Request, Response } from 'express';
import FindAllCoatTypeService from 'services/coatType/FindAllCoatTypeService';
import FindOneCoatTypeService from 'services/coatType/FindOneCoatTypeService';

export default class CoatTypeController {
  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const findOneCoatTypeService = new FindOneCoatTypeService();

    const coatType = await findOneCoatTypeService.exec(id);

    return response.status(200).json(coatType);
  }

  async findAll(request: Request, response: Response) {
    const findAllCoatTypeService = new FindAllCoatTypeService();

    const coatTypes = await findAllCoatTypeService.exec();

    return response.status(200).json(coatTypes);
  }
}
