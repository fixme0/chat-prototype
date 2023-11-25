import { createReducer } from '@reduxjs/toolkit';

import { setAuthorized, setUser, setUserName } from './actions';

const initialState = {
  authorized: false,
  id: null,
  name: '',
};

const userReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(setAuthorized, (state, { payload: authorized }) => {
      state.authorized = authorized;
    });
    builder.addCase(setUser, (_, { payload: user }) => user);
    builder.addCase(setUserName, (state, { payload: nextName }) => {
      state.name = nextName;
    });
  },
);

export { userReducer };
