let messagesIndexedTable = null;

export const bootstrapMessagesTable = () => {
  messagesIndexedTable = [];
};

export const connectToMessagesTable = () => {
  if (!messagesIndexedTable) {
    return Promise.reject(new Error('The messages table is not initialized'));
  }

  return Promise.resolve(messagesIndexedTable);
};
