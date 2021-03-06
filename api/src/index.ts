import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { createConnection } from 'typeorm';
import log from 'utils';
import router from 'routes';
import { errorMiddleware } from 'utils/ErrorHandler';

createConnection().then(connection => {
  connection.runMigrations({ transaction: 'all' }).then(migrations => {
    migrations.forEach(migration => {
      log.info('Migration %s was runned', migration.name);
    });
  });
});

const server = express();

server.use(express.json({ limit: '2mb' }));

server.use('/api/v1', router);

server.use(errorMiddleware);

server.listen(3080, () => {
  log.info('Server listening on port 3080');
});
