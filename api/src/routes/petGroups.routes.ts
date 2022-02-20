import { Router } from 'express';
import PetGroupController from 'controller/PetGroupController';
import ensureAuthentication from 'middlewares/ensureAuthentication';

const petGroupsRouter = Router();
const petGroupController = new PetGroupController();

petGroupsRouter.use(ensureAuthentication);
petGroupsRouter.post('/', petGroupController.create);
petGroupsRouter.delete('/:id', petGroupController.delete);

export default petGroupsRouter;
