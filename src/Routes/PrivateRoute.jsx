import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PrivateRouter = () => {
  const isUserLogin = useSelector(selectIsLoggedIn);

  if (!isUserLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRouter;
