import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-back.onrender.com/api';

const token = {
  set() {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getUserInfo = createAsyncThunk(
  "userInfo/getUserInfo",
  async (query, thunkAPI) => {
    try{
      const tokenLS = thunkAPI.getState().auth.token;
      token.set(tokenLS);
      const res = await axios.get('/user')
      return res.data
    }catch (err){
      return thunkAPI.rejectWithValue('Sorry, server Error!');
    }
  }
)

export const updateUserInfo = createAsyncThunk(
  'userInfo/updateUserInfo',
  async (payload, thunkAPI) => {
    try {
      const { userId, ...data } = payload;
      await axios.patch(`/user/${userId}`, data);
      return { ...payload };
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, can\'t update user, server Error!');
    }
  },
);

export const addPet = createAsyncThunk(
  'pet/addPet',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post('/user/pet', payload);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, can\'t add pet, server Error!');
    }
  },
);

export const deletePet = createAsyncThunk(
  'pet/deletePet',
  async (petId, thunkAPI) => {
    try {
      await axios.delete(`/user/pet/${petId}`);
      return { petId };
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, can\'t delete pet, server Error!');
    }
  },
);
