import express from 'express';

import { BASE_ROUTES } from '../packages/api';

import { loginController } from './controllers';

const router = express.Router();

router.post(BASE_ROUTES.LOGIN, loginController);

export { router };
