import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
// import PublicRouter from 'Routes/PublicRouter';
// import PrivateRouter from 'Routes/PrivateRoute';
import Header from 'components/Header';
import NotFound from 'page/notFoundPage/NotFound';
import Loader from 'components/Loader';
import NoticesPage from 'page/noticesPage';

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/notices" element={<NoticesPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
