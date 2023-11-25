let authTable = null;

export const bootstrapAuthTable = () => {
  authTable = new Map();
};

export const connectToAuthTable = () => {
  if (!authTable) {
    return Promise.reject(new Error('The auth table is not initialized'));
  }

  return Promise.resolve(authTable);
};
