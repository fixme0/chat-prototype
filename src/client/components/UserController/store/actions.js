import { createAction } from '@reduxjs/toolkit';

const PREFIX = 'USER_CONTROLLER';

export const authorization = createAction(
  `${PREFIX}/AUTHORIZATION`,
  (userName, message) => ({
    payload: {
      message,
      userName,
    },
  }),
);
