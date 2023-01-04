export const selectUserName = state => state.auth.user.name;

export const selectAccessToken = state => state.auth.accessToken;

export const selectRefreshToken = state => state.auth.refreshToken;

// export const selectAccessToken = state => state.auth.token;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectErrorAuth = state => state.auth.error;

export const selectAvatarUser = state => state.auth.user.avatarUrl;

export const selectUserData = state => state.auth.user;

export const selectPets = state => state.auth.user.myPets;

// export const selectUserNotice = state => {
//   const userFavorites = state.auth.user.favorites;
//   const ownNotice = state.auth.user.own;
//   const userPets = state.auth.user.myPets;
//   return { userFavorites, ownNotice, userPets };
// };
