const domain = (state) => state.user;

export const getUserName = (state) => domain(state).name;

export const getIsAuthenticated = (state) => !!domain(state).authorized;
