export const selectNoticeState = state => {
  const { notices, isLoading, error } = state.notice;
  return { notices, isLoading, error };
};

export const selectNotices = state => {
  return state.notice.notices;
};

export const selectIsLoading = state => {
  return state.notice.isLoading;
};

export const selectError = state => {
  return state.notice.error;
};
