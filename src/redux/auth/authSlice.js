import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './authOperations';

const initialState = {
  user: { name: '', email: '', id: '' },
  // refreshToken: null,
  token: null,
  // sid: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
  // isFetchingCurrentUser: false,
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
      { payload: { user, token, refreshToken, id } }
    ) => {
      state.user = user;

      state.token = token;
      // state.refreshToken = refreshToken;

      state.user.id = id;
      state.user = user;
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
      state.token = null;
      // state.refreshToken = null;

      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // --------------------REFRESH OPERATION--------------------

    // [refresh.pending]: state => {
    //   state.isLoading = true;
    //   state.isFetchingCurrentUser = true;
    // },
    // [refresh.fulfilled]: (
    //   state,
    //   { payload: { newRefreshToken, newtoken } }
    // ) => {
    //   state.token = newtoken;
    //   state.refreshToken = newRefreshToken;

    //   state.isLoggedIn = true;
    //   state.isLoading = false;
    //   state.isFetchingCurrentUser = false;
    // },
    // [refresh.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    //   state.isFetchingCurrentUser = false;
    // },
  },
});

export default authSlice.reducer;
