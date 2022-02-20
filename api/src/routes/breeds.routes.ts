import BreedController from 'controller/BreedController';
import { Router } from 'express';

const breedsRouter = Router();
const breedController = new BreedController();

breedsRouter.get('/', breedController.findAll);
breedsRouter.get('/:id', breedController.findOne);

export default breedsRouter;
