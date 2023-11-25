import { bootstrapAuthTable } from './auth';
import { bootstrapUsersTable } from './users';

export { connectToAuthTable } from './auth';
export { connectToUsersTable } from './users';

export const bootstrapDB = () => {
  bootstrapAuthTable();
  bootstrapUsersTable();
};
