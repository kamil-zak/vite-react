import express from 'express';
import { apiRouter } from './routes/apiRouter';
import { frontServe } from './utils/frontServe';
import { port } from './config/env';

const app = express();
app.use(express.json());

app.use('/api', apiRouter);
frontServe(app);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
