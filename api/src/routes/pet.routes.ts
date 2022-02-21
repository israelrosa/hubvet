import { Router } from 'express';
import PetController from 'controller/PetController';
import ensureAuthentication from 'middlewares/ensureAuthentication';

const petRouter = Router();
const petController = new PetController();

petRouter.use(ensureAuthentication);
petRouter.post('/', petController.create);
petRouter.get('/:id', petController.findOne);
petRouter.delete('/:id', petController.delete);
petRouter.put('/:id', petController.update);

export default petRouter;
