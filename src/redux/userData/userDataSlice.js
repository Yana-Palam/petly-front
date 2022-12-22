import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from './userDataOperation';
import {
  dailyRateUnauthorized,
  dailyRateAuthorized,
} from './userDataOperation';
import {
  addDayProduct,
  deleteDayProduct,
  getDayInfo,
} from './userDataOperation';

const initialState = {
  userId: null,
  dateUser: null,
  dayId: null,
  eatenProducts: null,
  dailyRate: 0,
  daySummary: {
    kcalConsumed: 0,
    kcalLeft: 0,
    percentsOfDailyRate: 0,
  },
  bodyParams: {
    height: null,
    age: null,
    weight: null,
    desiredWeight: null,
    bloodType: null,
  },
  notAllowedProducts: null,
  isLoading: false,
  error: null,
};

const getUserDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    resetStateUserDataSlice(state) {
      state.userId = null;
      state.dateUser = null;
      state.dayId = null;
      state.eatenProducts = [];
      state.dailyRate = null;
      state.daySummary.kcalConsumed = null;
      state.daySummary.kcalLeft = null;
      state.daySummary.percentsOfDailyRate = null;
      state.bodyParams.height = null;
      state.bodyParams.age = null;
      state.bodyParams.weight = null;
      state.bodyParams.desiredWeight = null;
      state.bodyParams.bloodType = null;
      state.notAllowedProducts = null;
      state.isLoading = null;
      state.error = null;
    },
  },

  extraReducers: {
    //**GET USER INFO AFTER AUTHORIZATION */
    [getUserInfo.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [getUserInfo.fulfilled]: (
      state,
      {
        payload: {
          userId,
          bodyParams,
          notAllowedProducts,
          dailyRate,
          eatenProducts,
          daySummary: { kcalConsumed, kcalLeft, percentsOfDailyRate },
        },
      }
    ) => {
      state.userId = userId;
      state.bodyParams = bodyParams;
      state.notAllowedProducts = notAllowedProducts[0];
      state.dailyRate = dailyRate;
      state.eatenProducts = eatenProducts;
      state.daySummary.kcalLeft = kcalLeft;
      kcalConsumed < 0
        ? (state.daySummary.kcalConsumed = 0)
        : (state.daySummary.kcalConsumed = kcalConsumed);
      state.daySummary.percentsOfDailyRate = null;
      percentsOfDailyRate < 0
        ? (state.daySummary.percentsOfDailyRate = 0)
        : (state.daySummary.percentsOfDailyRate = percentsOfDailyRate);
    },

    [getUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //**DAY INFO */
    //!addDayProduct
    [addDayProduct.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addDayProduct.fulfilled]: (state, action) => {
      state.dayId = action.payload.day.id;
      state.dailyRate = action.payload.daySummary.dailyRate;

      state.daySummary.kcalConsumed = action.payload.daySummary.kcalConsumed;
      state.daySummary.kcalLeft = action.payload.daySummary.kcalLeft;
      state.daySummary.percentsOfDailyRate =
        action.payload.daySummary.percentsOfDailyRate;

      state.eatenProducts = [
        ...state.eatenProducts,
        action.payload.eatenProduct,
      ];

      state.isLoading = false;
    },

    [addDayProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //! deleteDayProduct
    [deleteDayProduct.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteDayProduct.fulfilled]: (state, action) => {
      state.dailyRate = action.payload.dailyRate;
      state.daySummary = action.payload.daySummary;
      state.eatenProducts = state.eatenProducts.filter(
        product => product.id !== action.payload.eatenProductId
      );

      state.isLoading = false;
    },
    [deleteDayProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //!getDayInfo
    [getDayInfo.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getDayInfo.fulfilled]: (
      state,
      { payload: { dayId, dailyRate, eatenProducts, daySummary, dateUser } }
    ) => {
      state.dateUser = dateUser;
      state.dailyRate = dailyRate;
      state.dayId = dayId;
      state.eatenProducts = eatenProducts;
      // state.daySummary = { ...daySummary };
      state.isLoading = false;
    },
    [getDayInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //**DAILY RATE */
    // --------------------NON AUTH USER DAILY RATE--------------------
    [dailyRateUnauthorized.pending]: state => {
      state.isLoading = true;
    },
    [dailyRateUnauthorized.fulfilled]: (
      state,
      // payload
      { payload: { dailyRate, notAllowedProducts } }
    ) => {
      state.dailyRate = dailyRate;
      state.notAllowedProducts = notAllowedProducts;
      state.isLoading = false;
    },
    [dailyRateUnauthorized.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // -------------------- AUTH USER DAILY RATE--------------------

    [dailyRateAuthorized.pending]: state => {
      state.isLoading = true;
    },
    [dailyRateAuthorized.fulfilled]: (state, { payload }) => {
      // state.userId = payload.id;
      state.dailyRate = payload.data.dailyRate;
      state.daySummary.percentsOfDailyRate =
        (state.daySummary.kcalConsumed / (state.dailyRate || 1)) * 100;
      state.notAllowedProducts = payload.data.notAllowedProducts;
      state.bodyParams = payload.reqData;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [dailyRateAuthorized.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { resetStateUserDataSlice } = getUserDataSlice.actions;
export default getUserDataSlice.reducer;
