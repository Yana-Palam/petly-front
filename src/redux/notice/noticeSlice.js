import { createSlice } from '@reduxjs/toolkit';
import { fetchByCategory } from './noticeOperations';

export const initialState = {
  notices: [],
  isLoading: false,
  error: null,
};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    resetStateNoticeSlice(state) {
      state = initialState;
    },

    resetState(state, action) {
      state.notices = initialState;
    },
  },
  extraReducers: {
    // --------------------NOTICE-SEARCH OPERATION--------------------

    [fetchByCategory.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [fetchByCategory.fulfilled]: (state, { payload }) => {
      state.notices = [...payload.data];
      state.isLoading = false;
    },
    [fetchByCategory.rejected]: (state, { payload }) => {
      state.notices = [];
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { resetState, resetStateNoticeSlice, changeFavorite } =
  noticeSlice.actions;

export default noticeSlice.reducer;
