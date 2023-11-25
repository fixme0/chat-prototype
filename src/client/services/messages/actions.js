import { createAction } from '@reduxjs/toolkit';

const PREFIX = 'MESSAGES';

export const addMessage = createAction(
  `${PREFIX}/ADD`,
  (message) => ({ payload: message }),
);

export const sendMessage = createAction(
  `${PREFIX}/SEND`,
  (message) => ({ payload: message }),
);
