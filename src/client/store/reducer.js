import { createReducer } from '@reduxjs/toolkit';

import { startBootstrapMessages, finishBootstrapMessages } from './actions';

const initialState = {
  isFetchingMessages: false,
};

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(startBootstrapMessages, (state) => {
    state.isFetchingMessages = true;
  });
  builder.addCase(finishBootstrapMessages, (state) => {
    state.isFetchingMessages = false;
  });
});

export { appReducer };
