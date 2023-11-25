import { UserModel } from '../../models/user';
import { connectToUsersTable } from '../../datebase';

export const createUser = (userName) => {
  const user = new UserModel(userName);

  return connectToUsersTable()
    .then((userDB) => {
      userDB.set(user.id, user);

      return user;
    });
};
