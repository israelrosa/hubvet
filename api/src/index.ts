import express from 'express';

const server = express();

server.use(express.json({ limit: '2mb' }));

server.listen(3080, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3080');
});
