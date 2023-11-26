import { createReducer } from '@reduxjs/toolkit';

import { addMessage, setMessages } from './actions';

const initialState = [];

const messagesReducer = createReducer(initialState, (builder) => {
  builder.addCase(addMessage, (state, { payload: message }) => {
    state.push(message);
  });

  builder.addCase(setMessages, (_, { payload: messages }) => messages);
});

export { messagesReducer };
