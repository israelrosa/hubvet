import { Request, Response } from 'express';
import FindAllCoatSizeService from 'services/coatSize/FindAllCoatSizeService';
import FindOneCoatSizeService from 'services/coatSize/FindOneCoatSizeService';

export default class CoatSizeController {
  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const findOneCoatSizeService = new FindOneCoatSizeService();

    const coatSize = await findOneCoatSizeService.exec(id);

    return response.status(200).json(coatSize);
  }

  async findAll(request: Request, response: Response) {
    const findAllCoatSizeService = new FindAllCoatSizeService();

    const coatSizes = await findAllCoatSizeService.exec();

    return response.status(200).json(coatSizes);
  }
}
