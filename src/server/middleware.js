import { getIsAuthorizedUser } from './services/auth';
import { getUser } from './services/user';

export const verifyToken = async (req, res, next) => {
  const header = req.get('Authorization') ?? '';
  const token = header.split(' ')[1];

  if (token) {
    const userID = await getIsAuthorizedUser(token);
    const user = await getUser(userID);

    if (userID) {
      req.user = user;
      next();
    } else {
      res.status(401).json({
        message: 'Unauthorized access.',
      });
    }
  } else {
    res.status(401).json({
      message: 'Invalid token',
    });
  }
};
