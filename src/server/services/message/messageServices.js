import { connectToMessagesTable } from '../../datebase';
import { MessageModel } from '../../models/message';
import { getUser } from '../user';

export const createMessage = (messageAsString, userID) => connectToMessagesTable()
  .then((table) => {
    const message = new MessageModel(
      messageAsString,
      userID,
    );

    table.push(message);

    return message;
  });

export const applyUserToMessage = (message) => getUser(message.user.id)
  .then((user) => {
    message.extendUser(user);

    return message;
  });
