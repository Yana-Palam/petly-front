import AppRoutes from 'Routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfo, refresh } from '../redux/auth/authOperations';
import {
  selectAccessToken,
  selectErrorAuth,
} from '../redux/auth/authSelectors';

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);

  const errorAuth = useSelector(selectErrorAuth);
  const errorNotice = useSelector(state => state.notice.error);

  useEffect(() => {
    if (errorAuth || errorNotice) {
      dispatch(refresh());
    }
  }, [dispatch, errorAuth, errorNotice]);

  useEffect(() => {
    if (isAuth) {
      dispatch(getUserInfo());
    }
  }, [dispatch, isAuth]);

  return (
    <>
      <AppRoutes />
    </>
  );
}
