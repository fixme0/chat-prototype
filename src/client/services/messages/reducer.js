import { createReducer } from '@reduxjs/toolkit';

import {
  addMessage, completeSendingMessage, sendMessage, setMessages,
} from './actions';

const initialState = {
  isSendingMessage: false,
  messages: [],
};

const messagesReducer = createReducer(initialState, (builder) => {
  builder.addCase(addMessage, (state, { payload: message }) => {
    state.messages.push(message);
  });

  builder.addCase(setMessages, (state, { payload: messages }) => {
    state.messages = messages;
  });

  builder.addCase(sendMessage, (state) => {
    state.isSendingMessage = true;
  });

  builder.addCase(completeSendingMessage, (state) => {
    state.isSendingMessage = false;
  });
});

export { messagesReducer };
