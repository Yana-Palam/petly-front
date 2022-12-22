import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { initialState } from './productSearchSlice';
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const productSearch = createAsyncThunk(
  'product/fetch',
  async (search, { rejectWithValue, getState }) => {
    try {
      const tokenLS = getState().auth.accessToken;
      token.set(tokenLS);

      if (search.length < 2) {
        return initialState;
      }
      if (search.length < 30) {
        const { data } = await axios.get('/product', {
          params: {
            search,
          },
        });
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.request.status);
    }
  }
);
