import UserController from 'controller/UserController';
import { Router } from 'express';
import petGroupsRouter from './petGroups.routes';
import usersRouter from './users.routes';

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

export default router;
