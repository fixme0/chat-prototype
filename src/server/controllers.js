import { autorizeUser, createAuthToken } from './services/auth';
import { createUser } from './services/user';

export const loginController = async (req, res) => {
  const { userName } = req.body;

  const user = await createUser(userName);
  const authToken = createAuthToken(user);

  await autorizeUser(authToken, user);

  user.authToken = authToken;

  res.json(user);
};
