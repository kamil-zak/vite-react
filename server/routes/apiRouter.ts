import { Router } from 'express';
import { Bundle } from 'node-osc';
import { oscClient } from '../config/osc';

export const apiRouter = Router();

apiRouter.post('/oscsend', (req, res) => {
  const { addressPattern, args } = req.body;
  const bundle = new Bundle([addressPattern, ...args]);
  oscClient.send(bundle);
  res.sendStatus(200);
});

apiRouter.use((req, res) => res.status(404).json({ error: 'Not found' }));
