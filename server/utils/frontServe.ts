import express, { Express } from 'express';
import { join } from 'path';

export const frontServe = (app: Express) => {
  app.get('*', express.static(join(__dirname, 'front')));
  app.get('*', (req, res) => res.sendFile(join(__dirname, 'front', 'index.html')));
};
