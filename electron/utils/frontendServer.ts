import express from 'express';
import { join } from 'path';

export const startFrontendServer = (dir: string, port: number) => {
  const app = express();

  app.use(express.static(dir));
  app.use((req, res) => res.sendFile(join(dir, 'index.html')));

  app.listen(port);
};
