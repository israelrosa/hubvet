import { Router } from 'express';
import PetGroupController from 'controller/PetGroupController';

const petGroupsRouter = Router();
const petGroupController = new PetGroupController();

petGroupsRouter.post('/', petGroupController.create);

export default petGroupsRouter;
