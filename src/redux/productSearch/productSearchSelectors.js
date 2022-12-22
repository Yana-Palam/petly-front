export const selectProducts = state => state.product.product;
export const selectError = state => {
  return state.product.error;
};
