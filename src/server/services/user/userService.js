import { UserModel } from '../../models/user';
import { connectToUsersTable } from '../../datebase';

export const createUser = (userName) => {
  const user = new UserModel(userName);

  return connectToUsersTable()
    .then((table) => {
      table.set(user.id, user);

      return user;
    });
};

export const getUser = (id) => connectToUsersTable()
  .then((table) => table.get(id));
