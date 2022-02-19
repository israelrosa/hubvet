import { Router } from 'express';
import petGroupsRouter from './petGroups.routes';
import usersRouter from './users.routes';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({
    id: 'api',
    name: 'hubvet_api',
    version: 'v1',
  });
});

router.use('/groups', petGroupsRouter);
router.use('/users', usersRouter);

export default router;
