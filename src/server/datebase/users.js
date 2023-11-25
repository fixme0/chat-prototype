let usersTable = null;

export const bootstrapUsersTable = () => {
  usersTable = new Map();
};

export const connectToUsersTable = () => {
  if (!usersTable) {
    return Promise.reject(new Error('The user data base is not initialized'));
  }

  return Promise.resolve(usersTable);
};
