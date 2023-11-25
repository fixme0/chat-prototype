import { ROUTES } from './routes';

import { createAuthTokenHeader, getAuthToken } from './authToken';

const BASE_HEADERS = {
  'Content-Type': 'application/json',
};

const applyAuthHeader = (headers) => ({
  ...headers,
  ...createAuthTokenHeader(getAuthToken()),
});

const mockLogin = (userName) => Promise.resolve({
  authToken: '123',
  user: {
    id: 1,
    name: userName,
  },
});

export const login = mockLogin || ((userName) => fetch(
  ROUTES.LOGIN,
  {
    body: JSON.stringify({ userName }),
    headers: BASE_HEADERS,
    method: 'POST',
  },
));

const mockSendMessage = (message) => Promise.resolve({
  id: 1,
  message,
  user: {
    id: 2,
    name: 'Test',
  },
});

export const sendMessage = mockSendMessage || ((message) => fetch(
  ROUTES.SEND_MESSAGE,
  {
    body: JSON.stringify({ message }),
    headers: applyAuthHeader(BASE_HEADERS),
    method: 'POST',
  },
));
