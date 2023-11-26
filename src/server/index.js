import express from 'express';
import http from 'http';

import { BASE_PATH } from '../packages/api';

import { bootstrapDB } from './datebase';
import { registerWSS } from './middleware';
import { router, routerWithAuth } from './routes';
import { WebSocketServer } from './ws';

const app = express();
const server = http.createServer(app);

bootstrapDB();

app.use(express.json());

const wss = new WebSocketServer(server);

app.use(registerWSS(wss));

app.use(BASE_PATH, [router, routerWithAuth]);

const PORT = 3000;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
