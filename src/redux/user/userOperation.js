import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-bc26.cyclic.app/api';

const token = {
  set() {
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2E4ZmRhMTlhZjc2ODkwNDRlMjk1YzgiLCJpYXQiOjE2NzIwMjc2NTYsImV4cCI6MTY3NDYxOTY1Nn0.6jRqJ6qj-yGyreCB7py0pO1QHqhO8NaxmqVe-oo50VE`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getUserInfo = createAsyncThunk(
  "userInfo/getUserInfo",
  async (query, thunkAPI) => {
    try{
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      const res = await axios.get(`/usersinfo`)
      console.log('res',res);
      return res.data
    }catch (err){
      return thunkAPI.rejectWithValue('Sorry, server Error!');
    }
  }
)
