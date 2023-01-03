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

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const refreshToken = state.auth.refreshToken;

    try {
      const { data } = await axios.post('/auth/refresh', { refreshToken });
      return data;
    } catch (error) {
      return rejectWithValue(error);
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
        return rejectWithValue(error);
      }
      toast.error('Oops, something went wrong');
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', user);
      token.set({ token: data.user.token });
      toast(`You have successfully logged into your account`, {
        icon: <IoMdLogIn size={25} color="green" />,
      });

      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Email or password invalid');
        return rejectWithValue(error);
      }
      toast.error('Oops, something went wrong');
      return rejectWithValue(error);
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
      fulfillWithValue();
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'userInfo/getUserInfo',
  async (query, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.token;
      token.set(tokenLS);
      const res = await axios.get('/user/userInfo');
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, server Error!');
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'userInfo/updateUserInfo',
  async (payload, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.token;
      token.set(tokenLS);
      const { data } = await axios.patch(`/user/update`, payload);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        "Sorry, can't update user, server Error!"
      );
    }
  }
);

export const addPet = createAsyncThunk(
  'pet/addPet',
  async (payload, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.token;
      token.set(tokenLS);
      const res = await axios.post('/user/pets', payload);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Sorry, can't add pet, server Error!");
    }
  }
);

export const deletePet = createAsyncThunk(
  'pet/deletePet',
  async (_id, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.token;
      token.set(tokenLS);
      await axios.delete(`/user/pets/${_id}`);
      return { _id };
    } catch (err) {
      return thunkAPI.rejectWithValue("Sorry, can't delete pet, server Error!");
    }
  }
);
