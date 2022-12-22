import { createSlice } from '@reduxjs/toolkit';
import { productSearch } from './productSearchOperations';

export const initialState = {
  product: [],
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetStateProductSlice(state) {
      state = initialState;
    },

    resetState(state, action) {
      state.product = initialState;
    },
  },
  extraReducers: {
    // --------------------PRODUCT-SEARCH OPERATION--------------------

    [productSearch.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [productSearch.fulfilled]: (state, { payload }) => {
      state.product = payload;
      state.isLoading = false;
    },
    [productSearch.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { resetState, resetStateProductSlice } = productSlice.actions;

export default productSlice.reducer;
