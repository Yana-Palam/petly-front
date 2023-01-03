import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IoMdLogIn } from 'react-icons/io';

axios.defaults.baseURL = 'https://petly-back.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      await axios.post('/auth/register', user);
      toast.success(`User ${user.name} registered successfully`);
    } catch (error) {
      if (error.response.status === 409) {
        return rejectWithValue(toast.error('Email in use'));
      }
      return rejectWithValue(toast.error('Oops, something went wrong'));
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', user);
      token.set(data.accessToken);
      toast(`You have successfully logged into your account`, {
        icon: <IoMdLogIn size={25} color="green" />,
      });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        return rejectWithValue(toast.error('Email or password invalid'));
      }
      return rejectWithValue(toast.error('Oops, something went wrong'));
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
      // toast.error('Что-то пошло не так, попробуйте перезагрузить страницу');
      fulfillWithValue();
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (id, { rejectWithValue, getState }) => {
    // const tokenLS = getState().auth.refreshToken;
    // if (!tokenLS) {
    //   return rejectWithValue('Not logged');
    // }
    // token.set(tokenLS);
    // try {
    //   const { data } = await axios.post('/auth/refresh', { id });
    //   token.set(data.refreshToken);
    //   return data;
    // } catch (error) {
    //   return rejectWithValue(error.message);
    // }
  }
);
