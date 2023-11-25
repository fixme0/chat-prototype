import express from 'express';

import { BASE_ROUTES } from '../packages/api';

import { addMessageController, loginController } from './controllers';
import { verifyToken } from './middleware';

const router = express.Router();
const routerWithAuth = express.Router();

router.post(BASE_ROUTES.LOGIN, loginController);

routerWithAuth.use(verifyToken);
routerWithAuth.post(BASE_ROUTES.SEND_MESSAGE, addMessageController);

export { router, routerWithAuth };
