import express from 'express';

import { BASE_PATH } from '../packages/api';

import { bootstrapDB } from './datebase';
import { router, routerWithAuth } from './routes';

const app = express();

bootstrapDB();

app.use(express.json());

app.use(BASE_PATH, [router, routerWithAuth]);

const PORT = 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
