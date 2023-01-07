import { createSlice } from '@reduxjs/toolkit';
import {
  fetchByCategory,
  addOwnNotice,
  deleteOwnNoticeById,
} from './noticeOperations';

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

    deleteNoticeFavorite(state, { payload }) {
      state.notices = state.notices.filter(notice => notice._id !== payload);
    },
  },
  extraReducers: {
    // INFO Get notices by category

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
    // INFO Add user notice by id
    [addOwnNotice.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [addOwnNotice.fulfilled]: (state, { payload }) => {
      //TODO прописати оновлення стейту в залежності де було додано нотіс
      // state.notices.push =
      state.isLoading = false;
    },
    [addOwnNotice.rejected]: (state, { payload }) => {
      state.notices = [];
      state.isLoading = false;
      state.error = payload;
    },

    // INFO Delete user notice by id

    [deleteOwnNoticeById.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [deleteOwnNoticeById.fulfilled]: (state, { payload }) => {
      state.notices = state.notices.filter(
        notice => notice._id !== payload.data._id
      );
      state.isLoading = false;
    },
    [deleteOwnNoticeById.rejected]: (state, { payload }) => {
      state.notices = [];
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  resetState,
  resetStateNoticeSlice,
  changeFavorite,
  deleteNoticeFavorite,
} = noticeSlice.actions;

export default noticeSlice.reducer;
