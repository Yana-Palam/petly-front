import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IoMdLogIn } from 'react-icons/io';
import { store } from 'redux/store';

axios.defaults.baseURL = 'https://petly-back.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.interceptors.response.use(
  res => {
    return res;
  },
  async error => {
    const { response, config } = error;
    if (response.status === 401) {
      const state = store.getState();
      const accessToken = state.auth.accessToken;

      if (accessToken) {
        store.dispatch(refresh());

        setTimeout(() => {
          const newAccessToken = state.auth.accessToken;

          config.headers['Authorization'] = 'Bearer ' + newAccessToken;
          return axios(config);
        }, 300);
      }
    }
    return Promise.reject(error);
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const refreshToken = state.auth.refreshToken;

    try {
      const { data } = await axios.post('/auth/refresh', { refreshToken });
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.request.status);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      await axios.post('/auth/register', user);
      toast.success(`User ${user.name} registered successfully`);
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('Email in use');
        return rejectWithValue(error.request.status);
      }
      toast.error('Oops, something went wrong');
      return rejectWithValue(error.request.status);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', user);
      token.set(data.user.accessToken);
      toast(`You have successfully logged into your account`, {
        icon: <IoMdLogIn size={25} color="green" />,
      });

      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Email or password invalid');
        return rejectWithValue(error.request.message);
      }
      toast.error('Oops, something went wrong');
      return rejectWithValue(error.request.status);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { fulfillWithValue }) => {
    try {
      await axios.get('/auth/logout');
      token.unset();
    } catch (error) {
      // toast.error('Oops, something went wrong');
      fulfillWithValue(error.request.status);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'userInfo/getUserInfo',
  async (query, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      const res = await axios.get('/user/userInfo');
      return res.data;
    } catch (error) {
      // toast.error('Oops, something went wrong');
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'userInfo/updateUserInfo',
  async (payload, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      const { data } = await axios.patch(`/user/update`, payload);
      return data;
    } catch (error) {
      toast.error("Sorry, can't update user, server Error!");
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

export const addPet = createAsyncThunk(
  'pet/addPet',
  async (payload, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      const res = await axios.post('/user/pets', payload);
      return res.data;
    } catch (error) {
      toast.error("Sorry, can't add pet, server Error!");
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pet/deletePet',
  async (_id, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      await axios.delete(`/user/pets/${_id}`);
      return _id;
    } catch (error) {
      toast.error("Sorry, can't delete pet, server Error!");
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

//INFO Notices operations
export const addFavoriteNotice = createAsyncThunk(
  'notices/addFavorite',
  async (_id, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      await axios.patch(`/notices/own/${_id}/favorites`);
      return _id;
    } catch (error) {
      toast.error("Sorry, can't add favorite notices, server Error!");
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

export const deleteFavoriteNotice = createAsyncThunk(
  'notices/deleteFavorite',
  async (_id, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      await axios.delete(`/notices/own/${_id}/favorites`);
      return _id;
    } catch (error) {
      toast.error("Sorry, can't delete favorite notices, server Error!");
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

//TODO Синхронізувати запит згідно беку
export const addOwnNotice = createAsyncThunk(
  'notices/addOwnNotice',
  async (notice, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      await axios.post(`notices/addnotice`, notice);
      return { notice };
    } catch (error) {
      toast.error("Sorry, can't add notices, server Error!");
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

export const deleteOwnNotice = createAsyncThunk(
  'notices/deleteOwnNotice',
  async (_id, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      await axios.delete(`/notices/own/${_id}`);
      return { _id };
    } catch (error) {
      toast.error("Sorry, can't delete notices, server Error!");
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);
