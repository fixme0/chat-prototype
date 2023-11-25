import { createAction } from '@reduxjs/toolkit';

const PREFIX = 'USER';

export const setAuthorized = createAction(
  `${PREFIX}/SET_AUTHORIZED`,
  (authorized) => ({ payload: authorized }),
);

export const setUser = createAction(
  `${PREFIX}/SET`,
  (user) => ({ payload: user }),
);

export const setUserName = createAction(
  `${PREFIX}/SET_NAME`,
  (name) => ({ payload: name }),
);
