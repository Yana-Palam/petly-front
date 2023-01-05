import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const setTokenRequest = getState => {
  const tokenLS = getState().auth.accessToken;
  if (Boolean(tokenLS)) {
    token.set(tokenLS);
  }
  return;
};

export const fetchByCategory = createAsyncThunk(
  'notice/fetchByCategory',
  async (category, { rejectWithValue, getState }) => {
    try {
      //TODO дописати бек відправка з токеном, але якщо він присутній, то відсилати ще масив токенів, якщо він відсутній то відсилати лише з категорії.
      if (category === 'own' || category === 'favorite') {
        setTokenRequest(getState);
        const { data } = await axios.get(`/notices/user/${category}`);
        return data;
      }
      const { data } = await axios.get(`/notices/${category}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.request.status);
    }
  }
);
