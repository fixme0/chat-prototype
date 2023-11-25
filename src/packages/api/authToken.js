let authToken = null;

export const setAuthToken = (token) => {
  authToken = token;
};

export const getAuthToken = () => {
  if (!authToken) {
    throw new Error('The auth token is not availlable');
  }

  return authToken;
};

export const createAuthTokenHeader = (token) => ({
  Authorization: `Bearer ${token}`,
});
