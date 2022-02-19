import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import log from 'utils';

createConnection();

const server = express();

server.use(express.json({ limit: '2mb' }));

server.listen(3080, () => {
  // eslint-disable-next-line no-console
  log.info('Server listening on port 3080');
});
