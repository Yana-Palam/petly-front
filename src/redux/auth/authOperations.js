import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IoMdLogIn } from 'react-icons/io';

// axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

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
      toast.success(`Пользователь ${user.username} успешно зарегистрирован`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', user);
      token.set(data.accessToken);
      toast(`Вы успешно вошли в свой аккаунт`, {
        icon: <IoMdLogIn size={25} color="green" />,
      });
      return data;
    } catch (error) {
      // toast.error('Что-то пошло не так, попробуйте перезагрузить страницу');
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { fulfillWithValue }) => {
    try {
      await axios.post('/auth/logout');
      token.unset();
    } catch (error) {
      toast.error('Что-то пошло не так, попробуйте перезагрузить страницу');
      fulfillWithValue();
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (sid, { rejectWithValue, getState }) => {
    const tokenLS = getState().auth.refreshToken;
    if (!tokenLS) {
      return rejectWithValue('Not logged');
    }
    token.set(tokenLS);

    try {
      const { data } = await axios.post('/auth/refresh', { sid });
      token.set(data.refreshToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
