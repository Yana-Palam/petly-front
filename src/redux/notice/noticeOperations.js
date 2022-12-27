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

export const noticeGetByCategory = createAsyncThunk(
  'notices/fetchByCategory',
  async (category, { rejectWithValue, getState }) => {
    try {
      //TODO дописати приватні маршрути
      if (category === 'own' || category === 'favorites') {
        const tokenLS = getState().auth.accessToken;
        token.set(tokenLS);
      }
      const { data } = await axios.get(`https://petly-bc26.cyclic.app/api/notices/category/${category}`);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.request.status);
    }
  }
);

// export const noticeSearch = createAsyncThunk(
//   'notices/fetch',
//   async (search, { rejectWithValue, getState }) => {
//     try {
//       if (search === 'own' || search === 'favorites') {
//         const tokenLS = getState().auth.accessToken;
//         token.set(tokenLS);
//       }

//       const { data } = await axios.get(
//         `/api/notices/category/${search}`

//         // if (search.length < 2) {
//         //   return initialState;
//         // }
//         // , {
//         // if (search.length < 30) {
//         //   const { data } = await axios.get('/notices/sell', {
//         //     params: {
//         //       search,
//         //     },
//         //   }
//       );
//       console.log(data);
//       return data;
//       // }
//     } catch (error) {
//       return rejectWithValue(error.request.status);
//     }
//   }
// );
