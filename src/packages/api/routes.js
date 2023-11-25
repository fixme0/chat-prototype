const BASE_PATH = '/api';

const BASE_ROUTES = {
  LOGIN: '/login',
  MESSAGE: '/message',
};

const ROUTES = Object
  .entries(BASE_ROUTES)
  .reduce((acc, [routeName, basePath]) => {
    acc[routeName] = `${BASE_PATH}${basePath}`;

    return acc;
  }, {});

export { BASE_PATH, BASE_ROUTES, ROUTES };
