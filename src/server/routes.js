import express from 'express';

import { BASE_ROUTES } from '../packages/api';

import { addMessageController, getMessagesController, loginController } from './controllers';
import { verifyToken } from './middleware';

const router = express.Router();
const routerWithAuth = express.Router();

router.post(BASE_ROUTES.LOGIN, loginController);

routerWithAuth.use(verifyToken);
routerWithAuth.get(BASE_ROUTES.MESSAGE, getMessagesController);
routerWithAuth.post(BASE_ROUTES.MESSAGE, addMessageController);

export { router, routerWithAuth };
