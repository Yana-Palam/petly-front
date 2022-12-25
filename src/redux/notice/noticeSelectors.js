export const selectNotices = state => {
  return state.notice.notices;
};

export const selectIsLoading = state => {
  return state.notices.isLoading;
};

export const selectError = state => {
  return state.notices.error;
};
