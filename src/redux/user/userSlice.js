import {createSlice} from '@reduxjs/toolkit';
import {getUserInfo} from "./userOperation";

const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    data: null,
    error: null,
  },
  extraReducers: {
    [getUserInfo.pending]: (state) => {
      state.error = null;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },
  }
})

export default userSlice.reducer;
