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
    changeFavorite(state, { payload }) {
      for (const notice of state.notices) {
        if (notice._id === payload) {
          notice.favorite = !notice.favorite;
          break;
        }
      }
    },

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
      state.notices = [...payload];
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
