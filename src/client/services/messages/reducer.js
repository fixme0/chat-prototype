import { createReducer } from '@reduxjs/toolkit';

import { addMessage } from './actions';

const initialState = [];

const messagesReducer = createReducer(initialState, (builder) => {
  builder.addCase(addMessage, (state, { payload: message }) => {
    state.push(message);
  });
});

export { messagesReducer };
