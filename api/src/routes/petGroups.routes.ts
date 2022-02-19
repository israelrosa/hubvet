import { Response, Router } from 'express';

const petGroupsRouter = Router();

petGroupsRouter.get('/', (_, res: Response) => {
  res.json('Pet groups');
});

export default petGroupsRouter;
