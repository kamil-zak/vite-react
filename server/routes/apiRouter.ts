import { Router } from 'express';
import { Bundle } from 'node-osc';
import { oscClient } from '../config/osc';
import { readFileSync } from 'fs';
import { join } from 'path';

export const apiRouter = Router();
const { seconds } = JSON.parse(readFileSync(join(__dirname, 'config.json')).toString());

apiRouter.post('/oscsend', (req, res) => {
  const { addressPattern, args } = req.body;
  const bundle = new Bundle([addressPattern, ...args]);
  oscClient.send(bundle);
  res.sendStatus(200);
});

apiRouter.get('/config', (req, res) => {
  res.json({ seconds });
});

apiRouter.use((req, res) => res.status(404).json({ error: 'Not found' }));
