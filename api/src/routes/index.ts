import UserController from 'controller/UserController';
import { Router } from 'express';
import petGroupsRouter from './petGroups.routes';
import usersRouter from './users.routes';
import breedsRouter from './breeds.routes';
import speciesRouter from './species.routes';
import coatTypesRouter from './coatTypes.routes';
import coatSizesRouter from './coatSizes.routes';

const router = Router();
const userController = new UserController();

router.get('/', (req, res) => {
  res.status(200).send({
    id: 'api',
    name: 'hubvet_api',
    version: 'v1',
  });
});
router.post('/token/', userController.authenticate);
router.use('/groups', petGroupsRouter);
router.use('/users', usersRouter);
router.use('/breeds', breedsRouter);
router.use('/species', speciesRouter);
router.use('/coats/types', coatTypesRouter);
router.use('/coats/sizes', coatSizesRouter);

export default router;
