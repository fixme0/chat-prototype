const domain = (state) => state.messages;

export const getMessages = (state) => domain(state).messages;

export const getIsSendingMessage = (state) => domain(state).isSendingMessage;
