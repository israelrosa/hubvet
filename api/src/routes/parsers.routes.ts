import ParserController from 'controller/ParserController';
import { Router } from 'express';

const parsersRouter = Router();
const parserController = new ParserController();

parsersRouter.post('/', parserController.parse);

export default parsersRouter;
