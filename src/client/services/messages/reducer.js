import { createReducer } from '@reduxjs/toolkit';

import { addMessage } from './actions';

const initialState = [];

const messagesReducer = createReducer(initialState, (builder) => {
  builder.addCase(addMessage, (state, { payload: message }) => {
    state.messages.push(message);
  });
});

export { messagesReducer };
