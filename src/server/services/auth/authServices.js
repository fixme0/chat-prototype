import { connectToAuthTable } from '../../datebase';

export const createAuthToken = (user) => {
  const randomPartOfToken = Math.random().toString(36).substring(2, 15);

  return [
    user.id.toString(36),
    randomPartOfToken,
  ].join('');
};

export const autorizeUser = (token, user) => connectToAuthTable()
  .then((table) => {
    table.set(token, user.id);
  });
