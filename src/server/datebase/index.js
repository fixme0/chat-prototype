import { bootstrapAuthTable } from './auth';
import { bootstrapMessagesTable } from './messages';
import { bootstrapUsersTable } from './users';

export { connectToAuthTable } from './auth';
export { connectToMessagesTable } from './messages';
export { connectToUsersTable } from './users';

export const bootstrapDB = () => {
  bootstrapAuthTable();
  bootstrapMessagesTable();
  bootstrapUsersTable();
};
