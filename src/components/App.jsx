import AppRoutes from 'Routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken } from '../redux/auth/authSelectors';
import { useEffect } from 'react';
import { getUserInfo } from '../redux/user/userOperation';

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
      <AppRoutes/>
    </>
  );
}
