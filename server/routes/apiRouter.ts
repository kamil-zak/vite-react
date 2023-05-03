import { Router } from 'express';

export const apiRouter = Router();

apiRouter.use((req, res) => res.status(404).json({ error: 'Not found' }));
