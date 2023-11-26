import { validateMessage, validateName } from '../packages/validation';

import { authorizeUser, createAuthToken } from './services/auth';
import { applyUserToMessage, createMessage, getMessages } from './services/message';
import { createUser } from './services/user';

export const loginController = async (req, res) => {
  const { userName } = req.body;

  const errors = validateName(userName);

  if (errors.length) {
    const [error] = errors;

    res.status(400).json({
      error: true,
      message: error,
    });

    return;
  }

  const user = await createUser(userName);
  const authToken = createAuthToken(user);

  await authorizeUser(authToken, user);

  res.json({
    ...user,
    authToken,
  });
};

export const addMessageController = async (req, res) => {
  const { message: messageAsString } = req.body;

  const errors = validateMessage(messageAsString);

  if (errors.length) {
    const [error] = errors;

    res
      .status(400)
      .json({ error: true, message: error });

    return;
  }

  const { user } = req;

  const message = await createMessage(messageAsString, user.id);
  const messageWithUser = await applyUserToMessage(message);

  res.json(messageWithUser);
};

export const getMessagesController = async (req, res) => {
  const messages = await getMessages();

  res.json(messages);
};
