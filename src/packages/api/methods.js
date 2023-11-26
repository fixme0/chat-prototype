import { ROUTES } from './routes';

import { createAuthTokenHeader, getAuthToken } from './authToken';

const BASE_HEADERS = {
  'Content-Type': 'application/json',
};

const applyAuthHeader = (headers) => ({
  ...headers,
  ...createAuthTokenHeader(getAuthToken()),
});

export const login = (userName) => fetch(
  ROUTES.LOGIN,
  {
    body: JSON.stringify({ userName }),
    headers: BASE_HEADERS,
    method: 'POST',
  },
).then((response) => response.json());

export const sendMessage = (message) => fetch(
  ROUTES.MESSAGE,
  {
    body: JSON.stringify({ message }),
    headers: applyAuthHeader(BASE_HEADERS),
    method: 'POST',
  },
).then((response) => response.json());

export const getMessages = () => fetch(
  ROUTES.MESSAGE,
  {
    headers: BASE_HEADERS,
    method: 'GET',
  },
).then((response) => response.json());
