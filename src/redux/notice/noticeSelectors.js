import { helpers } from 'utils/helpers';

export const selectNoticeState = state => {
  const ownNotice = state.auth.user.own;
  const favNotice = state.auth.user.favorites;

  const { notices, isLoading, error } = state.notice;
  const resultNotice = notices.reduce((acc, notice) => {
    const own = helpers.isElemArray(ownNotice, notice._id);
    const favorite = helpers.isElemArray(favNotice, notice._id);
    const newObject = { ...notice, favorite, own };
    acc.push(newObject);
    return acc;
  }, []);
  return { resultNotice, isLoading, error };
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
