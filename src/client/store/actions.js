import { createAction } from '@reduxjs/toolkit';

const PREFIX = 'BOOTSTRAP';

export const bootstrapApp = createAction(
  `${PREFIX}/APP`,
);

export const startBootstrapMessages = createAction(
  `${PREFIX}/START_MESSAGES`,
);

export const finishBootstrapMessages = createAction(
  `${PREFIX}/FINISH_MESSAGES`,
);
