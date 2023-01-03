export const selectUserName = state => state.auth.user.name;

export const selectAccessToken = state => {
  return state.auth.token;
};

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
