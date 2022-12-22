export const selectUDUserId = state => state.userData.userId;
export const selectUDDayId = state => state.userData.dayId;
export const selectUDEatenProducts = state => state.userData.eatenProducts;

export const selectUDDailyRate = state => state.userData.dailyRate;
export const selectUDDaySummary = state => state.userData.daySummary;
export const selectUDBodyParams = state => state.userData.bodyParams;
export const selectUDNotAllowedProducts = state =>
  state.userData.notAllowedProducts;

export const selectUDIsLoading = state => state.userData.isLoading;
export const selectUDError = state => state.userData.error;

//Function Utils by state
export function getRandomAllNotAllowedProducts(product = [], count) {
  const arr = [];
  for (let i = 0; i < count; i += 1) {
    const randomIdex = product[Math.floor(Math.random() * product.length)];
    arr.push(randomIdex);
  }
  return arr;
}
