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

const applyUserToMessage = (message) => getUser(message.user.id)
  .then((user) => {
    message.extendUser(user);

    return message;
  });

const setIsOwner = (message, externalUser) => {
  message.setIsOwner(externalUser);

  return message;
};

export const buildMessage = (initialMessage, { externalUser } = {}) => (
  applyUserToMessage(initialMessage)
    .then((message) => {
      if (externalUser) {
        return setIsOwner(message, externalUser);
      }

      return message;
    })
);

export const getMessages = () => connectToMessagesTable()
  .then((messages) => Promise.all(
    messages.map((message) => buildMessage(message)),
  ));
