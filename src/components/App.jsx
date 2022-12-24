import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from '../components/Loader';
import AppRoutes from 'Routes/Routes';
import PublicRouter from '../Routes/PublicRouter';
import PrivateRouter from '../Routes/PrivateRoute';
// import Layout from './Layout/Layout';
const RegisterPage = lazy(() =>
  import('../page/registrationPage/RegisterPage')
);
const LoginPage = lazy(() => import('../page/loginPage/LoginPage'));
const OurFriendsPage = lazy(() =>
  import('../page/ourFriendsPage/OurFriendsPage')
);
const NewsPage = lazy(() => import('../page/newsPage/NewsPage'));
const NoticesPage = lazy(() => import('../page/noticesPage/NoticesPage'));
const UserPage = lazy(() => import('../page/userPage/UserPage'));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppRoutes />} />
          <Route
            path="register"
            element={
              <PublicRouter>
                <RegisterPage />
              </PublicRouter>
            }
          />
          <Route
            path="login"
            element={
              <PublicRouter>
                <LoginPage />
              </PublicRouter>
            }
          />
          <Route
            path="friends"
            element={
              <PublicRouter>
                <OurFriendsPage />
              </PublicRouter>
            }
          />
          <Route
            path="news"
            element={
              <PublicRouter>
                <NewsPage />
              </PublicRouter>
            }
          />
          <Route
            path="notices/:categoryName"
            element={
              <PrivateRouter>
                <NoticesPage />
              </PrivateRouter>
            }
          />
          <Route
            path="user"
            element={
              <PrivateRouter>
                <UserPage />
              </PrivateRouter>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}