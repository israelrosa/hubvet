import UserController from 'controller/UserController';
import { Router } from 'express';

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/register/', userController.register);

export default usersRouter;
