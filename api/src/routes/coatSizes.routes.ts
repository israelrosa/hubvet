import CoatSizeController from 'controller/CoatSizeController';
import { Router } from 'express';

const coatSizesRouter = Router();
const coatSizeController = new CoatSizeController();

coatSizesRouter.get('/', coatSizeController.findAll);
coatSizesRouter.get('/:id', coatSizeController.findOne);

export default coatSizesRouter;
