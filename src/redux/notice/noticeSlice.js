import { createSlice } from '@reduxjs/toolkit';
import { noticeGetByCategory } from './noticeOperations';

export const initialState = {
  notices: [],
  isLoading: false,
  error: null,
};

const noticeSlice = createSlice({
  name: 'noticesCategory',
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

    [noticeGetByCategory.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [noticeGetByCategory.fulfilled]: (state, { payload }) => {
      state.notices = payload.data;
      state.isLoading = false;
    },
    [noticeGetByCategory.rejected]: (state, { payload }) => {
      state.notices = [];
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { resetState, resetStateNoticeSlice } = noticeSlice.actions;

export default noticeSlice.reducer;
