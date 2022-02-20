import CoatTypeController from 'controller/CoatTypeController';
import { Router } from 'express';

const coatTypesRouter = Router();
const coatTypeController = new CoatTypeController();

coatTypesRouter.get('/', coatTypeController.findAll);
coatTypesRouter.get('/:id', coatTypeController.findOne);

export default coatTypesRouter;
