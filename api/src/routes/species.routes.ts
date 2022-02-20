import SpecieController from 'controller/SpecieController';
import { Router } from 'express';

const speciesRouter = Router();
const specieController = new SpecieController();

speciesRouter.get('/', specieController.findAll);
speciesRouter.get('/:id', specieController.findOne);

export default speciesRouter;
