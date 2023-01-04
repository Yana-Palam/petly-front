import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  // refresh,
  addPet,
  deletePet,
  getUserInfo,
  updateUserInfo,
} from './authOperations';

const initialState = {
  user: {
    email: '',
    name: '',
    id: '',
    city: '',
    phone: '',
    birthday: '',
    avatarUrl: null,
    myPets: [
      {
        _id: '',
        name: '',
        birthday: '',
        breed: '',
        comments: '',
        avatarUrl: null,
        owner: '',
      },
    ],
    favorites: [],
    own: [],

    // accessToken: null,
    // refreshToken: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      console.log('first', payload);
      state.user.favorites.push(payload);
    },

    deleteFavorite(state, { payload }) {
      console.log('first', payload);
      state.user.favorites = state.user.favorites.filter(
        item => item !== payload
      );
    },
  },
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
    [login.fulfilled]: (state, { payload: { user } }) => {
      state.user.email = user.email;
      state.user.name = user.name;
      state.user.id = user._id;
      state.user.city = user.city;
      state.user.phone = user.phone;
      state.user.avatarUrl = user.avatarUrl;
      state.user.myPets = [...user.myPets];
      state.user.favorites = [...user.favorites, '63b4a4794dd4e4742c08c58b'];
      state.user.notices = [...user.own];
      state.token = user.token;
      // state.user.accessToken = user.accessToken;
      // state.user.refreshToken = user.refreshToken;

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
      state.user = {
        email: null,
        name: null,
        id: null,
        city: null,
        phone: null,
        avatarUrl: null,
        myPets: [],
        favorites: [],
        notices: [],

        // accessToken: null,
        // refreshToken: null,
      };
      state.token = null;

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
    // },
    // [refresh.fulfilled]: (
    //   state,
    //   { payload: { newRefreshToken, newToken } }
    // ) => {
    //   state.user.accessToken = newToken;
    //   state.user.refreshToken = newRefreshToken;

    //   // state.isLoggedIn = true;
    //   state.isLoading = false;
    // },
    // [refresh.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },

    //-----------------USER-------------------------------

    //get user info
    [getUserInfo.pending]: state => {
      state.error = null;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [getUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //update user info
    [updateUserInfo.pending]: state => {
      state.error = null;
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    [updateUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //add pet
    [addPet.pending]: state => {
      state.error = null;
    },
    [addPet.fulfilled]: (state, action) => {
      state.user.myPets.push(action.payload);
    },
    [addPet.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //delete pet
    [deletePet.pending]: state => {
      state.error = null;
    },
    [deletePet.fulfilled]: (state, action) => {
      state.user.myPets = state.user.myPets.filter(
        pet => pet._id !== action.payload._id
      );
    },
    [deletePet.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addFavorite, deleteFavorite } = authSlice.actions;

export default authSlice.reducer;
