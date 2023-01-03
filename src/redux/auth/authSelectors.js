export const selectUserName = state => state.auth.user.name;

// export const selectAccessToken = state => state.auth.user.accessToken;

export const selectAccessToken = state => state.auth.token;

export const selectRefreshToken = state => state.auth.user.refreshToken;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectAvatarUser = state => state.auth.user.avatarUrl;

export const selectUserData = state => state.auth.user;

export const selectPets = state => state.auth.user.myPets;
