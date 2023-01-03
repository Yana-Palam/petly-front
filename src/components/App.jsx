import AppRoutes from 'Routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfo } from '../redux/auth/authOperations';
import { selectAccessToken } from '../redux/auth/authSelectors';

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);

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
