const getDomain = (state) => state.app;

export const getIsFetchingMessages = (state) => getDomain(state).isFetchingMessages;
