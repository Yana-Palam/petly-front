export const selectUserName = state => state.auth.user.name;

export const selectAccessToken = state => state.auth.token;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
