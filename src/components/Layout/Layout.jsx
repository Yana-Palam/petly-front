import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Box from 'components/Common/Box';

const Layout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Box as={'section'}>
        <Outlet />
      </Box>
    </Suspense>
  );
};

Layout.propTypes = {
  Outlet: PropTypes.node,
};

export default Layout;
