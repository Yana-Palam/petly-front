import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './authOperations';

const initialState = {
  user: { username: '', email: '', id: '' },
  refreshToken: null,
  accessToken: null,
  sid: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // --------------------REGISTER OPERATION--------------------

    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: state => {
      state.error = null;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // --------------------LOG IN OPERATION--------------------

    [login.pending]: state => {
      state.isLoading = true;
    },
    [login.fulfilled]: (
      state,
      { payload: { user, accessToken, refreshToken, id, sid } }
    ) => {
      state.user = user;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;

      state.user.id = id;

      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // --------------------LOG OUT OPERATION--------------------

    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]: state => {
      state.user = { name: '', email: '', id: '' };
      state.accessToken = null;
      state.refreshToken = null;

      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // --------------------REFRESH OPERATION--------------------

    [refresh.pending]: state => {
      state.isLoading = true;
      state.isFetchingCurrentUser = true;
    },
    [refresh.fulfilled]: (
      state,
      { payload: { newRefreshToken, newAccessToken } }
    ) => {
      state.accessToken = newAccessToken;
      state.refreshToken = newRefreshToken;

      state.isLoggedIn = true;
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
    },
    [refresh.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
